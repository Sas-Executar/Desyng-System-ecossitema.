# Component Inventory

Tabela de referência rápida. Detalhamento de anatomia/API/estados em `../COMPONENT-SPEC.md`; protocolo de Callout em `callout-protocol.md`.

| Componente | Camada | Compartilhado Web+Native? | Fonte | Status |
|---|---|---|---|---|
| Button | primitivo | Sim | ADR-SYSTEM.md | Especificado |
| IconButton | primitivo | Sim | ADR-SYSTEM.md | Especificado |
| Input | primitivo | Sim | ADR-SYSTEM.md | Especificado (variantes não detalhadas) |
| Select | primitivo | Sim | ADR-SYSTEM.md | Especificado (variantes não detalhadas) |
| Checkbox / Radio / Switch | primitivo | Sim | ADR-SYSTEM.md / CARDS (`DSREF-CMP-001`) | Padrão observado (radio em form-card) |
| Link | primitivo | Sim | ADR-SYSTEM.md | Usa `text.link` |
| Divider | primitivo | Sim | ADR-SYSTEM.md | `.divider` em utilities.css |
| Text / Heading | primitivo | Sim | ADR-SYSTEM.md | Escala em typography.css |
| Card | composto | Sim | ADR-SYSTEM.md + CARDS pack | Especificado |
| Callout | composto | Sim | ADR-001 | Protocolo completo portado |
| Badge / CategoryPill | composto | Sim | astro-blog.md (arquitetura) | Especificado |
| Tabs | composto | Sim | ADR-SYSTEM.md + CARDS (`DSREF-CRD-003`) | Padrão observado |
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

**Legenda de status:** "Especificado" = anatomia/tokens/estados documentados em `COMPONENT-SPEC.md`, pronto para implementação. "Padrão observado" = existe evidência visual (CARDS pack) mas nenhuma especificação formal de props ainda. Nenhum destes componentes foi implementado em código nesta entrega — ver `../qa/implementation-checklist.md`.

Removidos por não haver base de código legada (`DS-FORM-001-CMP-011`): nenhum — este é um repositório greenfield.
