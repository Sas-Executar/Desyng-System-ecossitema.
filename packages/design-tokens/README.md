# @executar/design-tokens

Canonical design tokens for the EXECUTAR ecosystem (Desyng System). Single source of truth for color, typography, spacing, radius, border, shadow, motion, breakpoints, grid, and z-index — consumed by `apps/blog` (CSS), `apps/admin`, `apps/app` (Tamagui/React Native), and the standalone showroom artifact.

## Two themes (since 2026-09-06)

| | `modernismo-operacional` (**default**) | `executar-classic` |
|---|---|---|
| SOT | `DESIGN-TOKENS-003` ("Modernismo Operacional Editorial") | `references/source-docs/ADR-SYSTEM.md` (Accepted) |
| Primary | Blue `#336BB6` | Green `#00BF63` |
| Font | Helvetica Neue | IBM Plex Sans |
| Geometry | Rectilinear, max 8px radius, no pills | Pill buttons/badges, up to 999px radius |
| Shadows | None by default (only on hover/floating) | Subtle shadow at rest |

Both themes live in `src/design-tokens.json`: the top-level `color`/`font`/`fontSize`/... fields ARE `executar-classic` (kept there unchanged, for backward compatibility — nothing about that theme's *values* changed in this correction); `themes.modernismo-operacional` holds the other theme in the same shape. `meta.defaultTheme` says which one is active by default.

- `variables.css`/`theme.css`: the default theme's vars are unscoped at `:root`; **every** theme (including the default) is also available explicitly via `[data-theme='<name>']`, so a subtree can opt into either theme regardless of the page default.
- `tokens.native.ts`/`.js` (apps/app): always reflects the default theme — no runtime theme switcher exists there yet.
- `@executar/callout-protocol`'s `resolveCalloutTokens(type, theme?)` takes an optional theme name (defaults to `meta.defaultTheme`) — see that package's README.

### Real bugs found while building this

1. **`text.muted` in DESIGN-TOKENS-003 fails WCAG AA even at the 3:1 large-text floor** (`primitive.color.neutral.500` / `#8B8D8C` on `surface.page` = 2.99:1). Fixed by remapping the semantic alias to `neutral.8` (same value as `text.secondary`) instead of inventing an unreviewed primitive — see `themes.modernismo-operacional.color.semantic.text.muted`'s own `$description`, and `src/contrast.test.ts`.
2. **`executar-classic`'s primary button (white text on `green.9` / `#00BF63`) is only 2.43:1** — fails even the 3:1 non-text/large-text floor, let alone 4.5:1. Pre-existing since Phase 1/2, never caught because no test ever checked a *fill-color-vs-text-color* pair before (`contrast.test.ts` only checked text tokens against canvas/surface). Left as a documented, tracked `false` expectation in `contrast.test.ts` rather than silently redesigning the brand green — that's a separate decision for whoever owns the palette, not a side effect of adding a second theme.
3. **`packages/ui/src/styles.css` hardcoded `--color-azure-2`** for the secondary button's hover background — broke the moment a theme without an "azure" family (`modernismo-operacional` has "blue" instead) became active. Fixed by adding a real semantic token, `action.secondary_hover_surface`, to both themes.
4. **`callout-protocol`'s `"solid-fill"` (used by the `cta` Callout type) was hardcoded to `color.palette.green.9`** — wrong for any theme whose primary action color isn't green. Now resolves through `semantic:action.primary` like everything else, so it always matches whichever theme is active.

### Mapping decisions (NORMALIZED, not 1:1 in the source doc)

DESIGN-TOKENS-003's own vocabulary doesn't fully match this repo's existing token shape (built for a Radix-style 12-step palette and a 14-role typography scale). Every non-obvious correspondence is documented inline as a `$description`/`$extensions.desyng.source` on the token itself in `src/design-tokens.json` — notably:

- Chromatic palettes (blue/green/yellow) are 12-step ramps *generated* from the doc's own named swatch (e.g. `blue.500` → step 9, this repo's "solid/CTA" convention), not the doc's raw 10-step scale copied verbatim — needed so `family.2`/`family.6`/`family.9`/`family.11` keep meaning consistently with `executar-classic` and with `@executar/callout-protocol`'s registry.
- No error/danger family exists in DESIGN-TOKENS-003 — `executar-classic`'s own red ramp is carried over unchanged (`palette.error`) rather than invented from scratch.
- Typography roles are shifted one tier from the doc's raw scale (`display`→doc's h1/64px, `h1`→doc's h2/48px, etc.) so the doc's *true* oversized editorial tier (`display-lg`/`xl`/`xxl`, 88–160px, meant for cropped/overflowing hero numerals per `composition.typeCrop`) doesn't get forced into ordinary headings that need to wrap safely. Those oversized tokens are kept as additional, separate entries for a future dedicated component.
- `radius.lg`/`xl`/`pill`/`full` are capped at 8px to honor `rules.shape.maxDefaultRadius: 8px` and `pillByDefault: false` — enforced at the token layer, so existing components (`Button`, `Badge`) that reference `var(--radius-pill)` automatically render rectilinear under this theme with zero component code changes.
- `breakpoint`/`container`/`grid`/`zIndex` are intentionally **shared** across both themes (not theme-scoped) — DESIGN-TOKENS-003 doesn't argue its layout numbers need to differ structurally, and changing them per-theme would ripple into every app's responsive CSS for no brand-identity reason.

## Usage

```bash
pnpm --filter @executar/design-tokens build   # regenerates dist/ from src/design-tokens.json
pnpm --filter @executar/design-tokens test    # WCAG contrast gate (src/contrast.test.ts) — runs against BOTH themes
```

Never hand-edit anything in `dist/` — edit `src/design-tokens.json` and re-run `build`.

```css
/* Web — renders as whichever theme is meta.defaultTheme */
@import "@executar/design-tokens/theme.css";
.button { background: var(--semantic-action-primary); }

/* Opt a subtree into a specific theme explicitly */
<div data-theme="executar-classic">...</div>
```

```ts
// Native (Tamagui / React Native) — always the default theme
import { semanticLight, palette, space } from "@executar/design-tokens/tokens.native";
```

## Not yet done

- No UI anywhere (admin/blog/app/showroom) actually lets a user *switch* `data-theme` — the mechanism exists (both themes are always emitted), but nothing wires up a toggle yet.
- `executar-classic`'s primary-button contrast bug (finding #2 above) is tracked, not fixed — fixing it means either darkening the brand green or changing the button's text color, a call for whoever owns that palette.
- `apps/app` has no runtime theme switcher — it always renders `meta.defaultTheme`.
- Dark mode / high-contrast mode (`[data-theme='executar-classic'][data-mode='dark'|'high-contrast']`) only exist for `executar-classic`, were never audited for WCAG even before this correction, and have no `modernismo-operacional` equivalent yet.

## Why `src/design-tokens.json` here and not `design-system/tokens/`?

`design-system/tokens/design-tokens.json` (Phase 1) is kept as a synced **mirror** for documentation readers, and reflects `executar-classic` only (predates this correction). This package is the live source going forward: edit here, run `build`, then copy `dist/*` back over `design-system/tokens/*` to keep the spec in sync (or wire that into CI — not done yet, see `design-system/IMPLEMENTATION_PLAN.md`).
