# @executar/ui

Web component library (React) implementing `design-system/COMPONENT-SPEC.md`. Consumes only `@executar/design-tokens` (CSS custom properties) and `@executar/callout-protocol` — never a hardcoded hex/px.

## Components (this pass)

`Button`, `IconButton`, `Badge`/`CategoryPill`, `Card`, `Tabs`, `Callout`, `Text`/`Heading`/`Divider`. The rest of `design-system/components/component-inventory.md` (Modal, Drawer, Navigation, Article, CodeBlock, Metric, Progress, Diagram, SegmentedControl, PostCard, MetaBar, CopyLinkButton, NewsletterForm) is follow-up work — not built here, not claimed as done.

## Commands

```bash
pnpm --filter @executar/ui build      # tsc -> dist/, copies styles.css
pnpm --filter @executar/ui test       # Vitest + Testing Library, 35 tests
pnpm --filter @executar/ui typecheck
pnpm --filter @executar/ui storybook       # dev server on :6006
pnpm --filter @executar/ui build-storybook # static build -> storybook-static/
```

## Usage

```tsx
import { Button, Card, Callout } from "@executar/ui";
import "@executar/ui/styles.css";

<Button variant="primary">Começar agora</Button>
<Callout type="warning" title="Atenção">O relatório contém uma limitação.</Callout>
```

## Visually verified, not just unit-tested

Every component was screenshotted via the pre-installed Chromium (`/opt/pw-browsers`) against the built Storybook and checked against `design-system/qa/visual-checklist.md`. That check caught a real bug unit tests missed: `Card` rendered as `<a>` (the `href` variant, e.g. a future `PostCard`) had no explicit `display`, so it stayed `inline` (the browser default for `<a>`) and overflowed its own border — fixed by setting `display: block` on `.ex-card` in `src/styles.css`. Two more real bugs were caught earlier by the automated test suites, not manual review: see `packages/design-tokens/src/contrast.test.ts` (two failing text tokens) and `packages/callout-protocol` (a schema hole and a missing registry mapping) in `../../design-system/CHANGELOG.md`.

## Icon set

`components/Callout/icons.tsx` ships minimal custom-drawn placeholder icons keyed by the same names as `CALLOUT_REGISTRY` (Info, Lightbulb, CircleCheck, …). These are **not** the real Lucide icon set — see `@executar/callout-protocol`'s README for why (the library choice is inferred, not confirmed). Swap that one file for real `lucide-react` imports once confirmed; nothing else needs to change.

## Not yet done

Real font loading (IBM Plex Sans/Mono are referenced but not `@font-face`d anywhere yet — screenshots above render in the browser's fallback sans), dark-theme visual audit, and the remaining components listed above.
