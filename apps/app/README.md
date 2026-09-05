# @executar/app

Expo + React Native, consuming `@executar/design-tokens`'s native export (`tokens.native`) and reimplementing `@executar/ui`'s component API (`Button`, `Card`, `Callout`) natively — same registry, same resolved colors, no second source of truth. Stack decided in `design-system/00_GOVERNANCE/SOT_RESOLUTION.md` (App = Expo + React Native + Tamagui, from `ADR/ADR-001_PROTOCOLO_NATIVO_CALLOUTS_MULTIPLATAFORMA.md`).

## What's here

- `app/_layout.tsx`, `app/index.tsx` — Expo Router root + a single home screen proving the pipeline end to end: same tokens apps/blog consumes as CSS custom properties, here as plain JS values, driving a real screen.
- `src/components/{Button,Card,Callout}.tsx` — native counterparts of `packages/ui`'s components. `Callout` resolves through the same `@executar/callout-protocol` registry the web `Callout` uses.
- `tamagui.config.ts` — bridges `@executar/design-tokens/tokens.native` into Tamagui's token/theme system. Still wired up at the provider level (`app/_layout.tsx`'s `TamaguiProvider`/`Theme`), but see "Real bugs found" below for why the three components above are plain React Native + `StyleSheet`, not Tamagui's `styled()`.
- `src/rnStyle.ts` — a single, documented, explicit workaround function. See bug #2.

## Local setup

```bash
pnpm install
pnpm --filter @executar/app typecheck   # tsc --noEmit — verified clean
pnpm --filter @executar/app export      # expo export --platform web — verified, produces dist/
pnpm --filter @executar/app start       # expo start — NOT run in this sandbox, see below
```

## What "verified" means here, and what it doesn't

This sandbox has no Android SDK, no iOS toolchain/Xcode, and no emulator or device — confirmed at the start of this phase, not assumed. So this app is verified only two ways:

- `tsc --noEmit` — clean.
- `expo export --platform web` — produces a real Metro web bundle in `dist/` (`index.html`, `_expo/static/js/web/entry-*.js`, `metadata.json`) with no errors.

It has never been run on a simulator, emulator, or physical device, and `expo start`'s dev server/QR flow has not been exercised. Do not read "exported" or "typechecks" as "runs correctly on a phone" — that check is outstanding and needs an environment with actual mobile tooling.

## Real bugs found and fixed here (not hypothetical)

1. **`tokens.native.js` was never generated — a latent bug in `packages/design-tokens`, not in this app.** `build.ts` wrote `tokens.native.ts` to `dist/` but the package's `exports` map pointed consumers at `tokens.native.js`, which didn't exist. Every other consumer imports CSS/JSON, so nothing exercised that path until this app became the first real consumer of the native export. Fixed at the source: `build.ts` now also compiles that file with `ts.transpileModule()` and writes the `.js` alongside the `.ts`.

2. **Genuine upstream Expo/react-native-web typing conflict**, confirmed with a minimal repro *outside* any design-system code:
   ```ts
   const styles = StyleSheet.create({ h1: { color: 'red' } })
   <Text style={styles.h1}>hi</Text>   // still fails to typecheck
   ```
   `expo/types/react-native-web.d.ts` declares `Text`/`View`/`Pressable`'s `style` prop against its own `TextProps`/`ViewProps`, whose `TextStyle`/`ViewStyle` don't structurally accept the plain objects `StyleSheet.create` (from `react-native` itself) produces, on this exact Expo SDK 57.0.20 + `react-native-web` + TypeScript combination. Not root-caused further, not silently cast away at every call site either — isolated into one documented function (`src/rnStyle.ts`) so every real usage of the workaround stays visible and searchable instead of scattered unexplained `as any`s.

3. **Tamagui's `styled()` API doesn't typecheck cleanly on top of bug #2.** Beyond the same style-prop conflict, `styled()`'s generic variant-prop merging reported `gap`, `background`, and `borderRadius` as not existing on the inferred prop type. Rather than fight two compounding typing issues in a component library that isn't this session's focus, `Button`/`Card`/`Callout` were built on plain React Native primitives (`Pressable`/`View`/`Text` + `StyleSheet.create`) consuming `tokens.native`'s raw values directly. `tamagui.config.ts` and `TamaguiProvider` are still wired up at the root (`app/_layout.tsx`) for whichever future screens do want Tamagui's own component system — this only affects which primitives these three components render with.

4. **Dependency version skew against Expo SDK 57's actually-supported versions.** The first pass picked "latest" npm versions across the board (`react-native@0.87.1`, `react@19.2.8`, `react-native-reanimated@4.6.0`, `react-native-worklets@0.12.1`, `react-native-gesture-handler@3.2.1` — a full major version ahead of what SDK 57 supports, `react-native-safe-area-context@5.9.1`, `react-native-screens@4.27.0`). `expo export --platform web` failed with:
   ```
   ERR_PACKAGE_PATH_NOT_EXPORTED: Package subpath './rn-get-polyfills' is not defined by "exports" in .../react-native/package.json
   ```
   because `react-native@0.87.1`'s actual `package.json` `exports` map doesn't include that subpath — the SDK's tooling expects the version it bundles. Root-caused by reading `expo/bundledNativeModules.json` (inside the installed `expo` package), which lists the exact dependency versions SDK 57 is built and tested against, and re-pinning `package.json` to match: `react-native@0.86.3`, `react@19.2.3`/`react-dom@19.2.3`, `react-native-reanimated@4.5.1`, `react-native-worklets@0.10.1`, `react-native-gesture-handler@2.32.0` (not 3.x), `react-native-safe-area-context@5.7.0`, `react-native-screens@4.26.0`. `expo export --platform web` then succeeded.

## Not yet done

- Never run on an actual simulator/emulator/device (see above — no tooling in this sandbox to do so).
- `react-native-svg` not added — `Callout`'s icon is a colored dot instead of the same inline SVG icon the web `Callout` renders (`packages/ui/src/components/Callout/icons.tsx`), so the per-type color signal survives but the icon shape doesn't yet.
- Native dark theme reuses the light theme in `tamagui.config.ts` — `@executar/design-tokens` doesn't export a resolved `semanticDark` object yet (only `theme.css`'s `[data-theme='dark']` side has it), tracked there as a follow-up, not silently faked here.
- Only `Button`/`Card`/`Callout` ported; the rest of `COMPONENT-SPEC.md`'s inventory (Badge, Tabs, IconButton, Typography primitives, …) has no native counterpart yet.
