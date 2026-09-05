# @executar/design-tokens

Canonical design tokens for the EXECUTAR ecosystem (Desyng System). Single source of truth for color, typography, spacing, radius, border, shadow, motion, breakpoints, grid, and z-index — consumed by `apps/blog` (CSS), `apps/admin`, and `apps/app` (Tamagui/React Native).

- SOT for the **values**: `references/source-docs/ADR-SYSTEM.md` (Accepted).
- Provenance/classification of every value: `design-system/00_GOVERNANCE/TRACEABILITY.md`.
- Human-readable spec: `design-system/DESIGN-SPEC.md`.

## Usage

```bash
pnpm --filter @executar/design-tokens build   # regenerates dist/ from src/design-tokens.json
pnpm --filter @executar/design-tokens test    # WCAG contrast gate (src/contrast.test.ts)
```

Never hand-edit anything in `dist/` — edit `src/design-tokens.json` and re-run `build`.

```css
/* Web */
@import "@executar/design-tokens/theme.css";
.button { background: var(--semantic-action-primary); }
```

```ts
// Native (Tamagui / React Native)
import { semanticLight, palette, space } from "@executar/design-tokens/tokens.native";
```

## Why `src/design-tokens.json` here and not `design-system/tokens/`?

`design-system/tokens/design-tokens.json` (Phase 1) is kept as a synced **mirror** for documentation readers. This package is the live source going forward: edit here, run `build`, then copy `dist/*` back over `design-system/tokens/*` to keep the spec in sync (or wire that into CI — not done yet, see `design-system/IMPLEMENTATION_PLAN.md`).
