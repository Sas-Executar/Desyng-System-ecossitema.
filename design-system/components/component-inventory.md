# Component Inventory

Tabela de referência rápida. Detalhamento de anatomia/API/estados em `../COMPONENT-SPEC.md`; protocolo de Callout em `callout-protocol.md`.

| Componente | Camada | Compartilhado Web+Native? | Fonte | Status |
|---|---|---|---|---|
| Button | primitivo | Sim | ADR-SYSTEM.md | **Implementado** (`packages/ui`, 5 testes) |
| IconButton | primitivo | Sim | ADR-SYSTEM.md | **Implementado** (`packages/ui`, 1 teste) |
| Input | primitivo | Sim | ADR-SYSTEM.md | Especificado (variantes não detalhadas) |
| Select | primitivo | Sim | ADR-SYSTEM.md | Especificado (variantes não detalhadas) |
| Checkbox / Radio / Switch | primitivo | Sim | ADR-SYSTEM.md / CARDS (`DSREF-CMP-001`) | Padrão observado (radio em form-card) |
| Link | primitivo | Sim | ADR-SYSTEM.md | Usa `text.link` |
| Divider | primitivo | Sim | ADR-SYSTEM.md | **Implementado** (`packages/ui`, `Divider`) |
| Text / Heading | primitivo | Sim | ADR-SYSTEM.md | **Implementado** (`packages/ui`, 5 testes) |
| Card | composto | Sim | ADR-SYSTEM.md + CARDS pack | **Implementado** (`packages/ui`, 2 testes — pegou um bug real de `display` no build de Storybook) |
| Callout | composto | Sim | ADR-001 | **Implementado** (`packages/ui` + `packages/callout-protocol`, 44 testes no total) |
| Badge / CategoryPill | composto | Sim | astro-blog.md (arquitetura) | **Implementado** (`packages/ui`, 3 testes) |
| Tabs | composto | Sim | ADR-SYSTEM.md + CARDS (`DSREF-CRD-003`) | **Implementado** (`packages/ui`, 3 testes) |
| Modal / Drawer | composto | Sim | ADR-SYSTEM.md | Especificado (gestos pendentes) |
| Navigation (Header/Footer) | composto | Parcial (Native tem nav própria) | ADR-SYSTEM.md + astro-blog.md | Especificado |
| Article / Prose | composto | Web only | astro-blog.md (arquitetura) | Especificado |
| CodeBlock | composto | Web only | ADR-SYSTEM.md | Especificado |
| Metric / Progress | composto | Sim | ADR-SYSTEM.md | Especificado |
| Diagram | composto | Web only (geração de imagem) | ADR-SYSTEM.md (SPEC-ILLUSTRATION-001) | Guia de estilo, sem componente de código |
| SegmentedControl | composto | Sim | ADR-SYSTEM.md | Listado, sem detalhamento |
| Stepper (progress dots) | composto | Sim | CARDS (`DSREF-CMP-001`) | Padrão observado, sem token formal ainda |
| PostCard | específico Blog | Não | astro-blog.md (arquitetura) | Especificado |
| MetaBar | específico Blog | Não | astro-blog.md (arquitetura) | Especificado |
| CopyLinkButton | específico Blog | Não | astro-blog.md (arquitetura) | Especificado |
| NewsletterForm | específico Blog | Não | astro-blog.md (arquitetura) | Especificado |

**Legenda de status:** "**Implementado**" = código real em `packages/ui` (React + TypeScript), com testes Vitest/Testing Library e verificação visual via Storybook + screenshot Chromium (Fase 2). "Especificado" = anatomia/tokens/estados documentados em `COMPONENT-SPEC.md`, ainda não implementado. "Padrão observado" = existe evidência visual (CARDS pack) mas nenhuma especificação formal de props ainda. Ver `../qa/implementation-checklist.md` e `packages/ui/README.md`.

Removidos por não haver base de código legada (`DS-FORM-001-CMP-011`): nenhum — este é um repositório greenfield.
