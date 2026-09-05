# @executar/callout-protocol

Code port of `references/source-docs/ADR/ADR-001_PROTOCOLO_NATIVO_CALLOUTS_MULTIPLATAFORMA.md` (Accepted) and `design-system/components/callout-protocol.md`.

- `schema.ts` — `CalloutNode` (Zod), the SEMANTIC MODEL layer of the ADR-001 pipeline. Content never carries color/CSS, only a `type`.
- `registry.ts` — `CALLOUT_REGISTRY`, mapping each of the 12 `CalloutType`s to `@executar/design-tokens` references (never a raw hex), plus `resolveCalloutTokens(type)` to get actual colors for a renderer.

## Usage

```ts
import { parseCalloutNode, resolveCalloutTokens } from "@executar/callout-protocol";

const node = parseCalloutNode({ type: "warning", title: "Atenção", body: "..." });
const { background, border, foreground, iconColor, icon } = resolveCalloutTokens(node.type);
```

## Tests

`pnpm --filter @executar/callout-protocol test` — verifies every `CalloutType` has a registry entry, every token reference resolves to a real hex, foreground text meets at least AA large-text contrast against its own background, and the schema actually rejects invalid/incomplete nodes (not just accepts valid ones).

## Icon library note

Icon names (`Info`, `Lightbulb`, `CircleCheck`, …) match Lucide components. This is **INFERRED**, not an explicit declaration in ADR-001 — see `design-system/00_GOVERNANCE/DS-FORM-001_RESPONSES.csv` (`ICO-002`). Confirm before adding `lucide-react`/`lucide-react-native` as a hard dependency elsewhere.

## Not yet implemented (see `design-system/IMPLEMENTATION_PLAN.md` Fase 4)

Renderers (Web/Native/Print), the Markdown pipeline (`remark-directive` + `remarkCalloutPlugin`), and the Payload Lexical `CalloutBlock`.
