# Changelog — Desyng System (design-system/)

Versionamento semântico recomendado (`GOV-002`, `00_GOVERNANCE/DS-FORM-001_RESPONSES.csv`) para o futuro pacote `packages/design-tokens`. Esta entrega é a v0.1.0 — primeira consolidação documental, sem código de aplicação.

## [0.1.0] — Handoff inicial

**Adicionado**
- Inventário completo dos documentos-fonte do ZIP `Claude /` (68 arquivos) em `references/`.
- Resolução de 3 conflitos entre documentos-fonte, registrada em `00_GOVERNANCE/SOT_RESOLUTION.md`.
- Paleta de 5 famílias × 12 tons (Green, Azure, Neutral OBSERVED/NORMALIZED; Warning, Error ESTIMATED) com validação de contraste WCAG AA.
- Escala tipográfica completa (14 papéis) sobre IBM Plex Sans/Mono.
- Escala de spacing, radius, border, shadow, motion, breakpoint, container, grid, z-index.
- `tokens/design-tokens.json` como fonte canônica única, com `variables.css`, `theme.css`, `design-tokens.yaml` e `tokens.native.ts` derivados programaticamente.
- `COMPONENT-SPEC.md`, `components/callout-protocol.md` (ponte com `ADR-001`), `components/component-inventory.md`.
- `RESPONSIVE-SPEC.md`, `ACCESSIBILITY.md`, `MOTION-SPEC.md`.
- `layouts/layout-archetypes.md` — padrões de arquitetura extraídos de `CARDS_DESIGN_REFERENCE_PACK_V1` (21 imagens), sem incorporar nenhuma cor de terceiros.
- `assets/assets-manifest.json` — inventário das 21 referências CARDS + 10 slides do handoff pack visual.
- `00_GOVERNANCE/DS-FORM-001_RESPONSES.csv` — 296 perguntas processadas: 128 respondidas com evidência, 168 marcadas `PENDING_USER_INPUT`.
- `00_GOVERNANCE/OPEN_QUESTIONS.md` — perguntas pendentes, priorizadas em 4 tiers.
- `00_GOVERNANCE/TRACEABILITY.md` — ledger OBSERVED/INFERRED/NORMALIZED/RECOMMENDED/ESTIMATED de 150 valores de token.
- `qa/visual-checklist.md`, `qa/implementation-checklist.md`.
- `IMPLEMENTATION_PLAN.md`, `FILE_TREE.md`, `DESIGN_TO_CODE_MAP.md`.

**Não incluído (fora do escopo desta entrega — ver `OPEN_QUESTIONS.md` e `IMPLEMENTATION_PLAN.md`)**
- Nenhum código de aplicação (`apps/*`, `packages/*`) foi escrito — apenas a especificação e os tokens.
- Nenhum logo/marca gráfica foi desenhado.
- Estratégia de marca, naming formal, identidade verbal e governança organizacional (aprovadores, SLA) permanecem pendentes de decisão humana.
- Nenhuma especificação de produção gráfica/impressão (PRN) foi criada — nenhum canal de impressão foi confirmado para a primeira versão.
- Nenhum teste automatizado, visual regression ou Storybook foi criado.

## [0.2.0] — Fase 2: `packages/design-tokens` em código

**Adicionado**
- Monorepo pnpm real (`pnpm-workspace.yaml`, `package.json` raiz, `tsconfig.base.json`).
- `packages/design-tokens`: `src/design-tokens.json` passa a ser a fonte canônica (antes era `design-system/tokens/design-tokens.json`, que agora é um espelho gerado a partir do pacote); `src/build.ts` substitui os scripts Python descartáveis da Fase 1 por um gerador TypeScript real e repetível.
- `packages/design-tokens/src/contrast.test.ts` (Vitest): transforma a auditoria manual de `ACCESSIBILITY.md` num gate automatizado — 12 testes, todos passando.

**Corrigido (achado pelo teste automatizado, não pela revisão manual da Fase 1)**
- `color.semantic.text.secondary` falhava AA normal-text (3.90-4.22:1, `neutral.10`) — remapeado para `neutral.11` (5.54-5.99:1).
- `color.semantic.text.muted` falhava até o limiar de large-text no canvas (2.80:1, `neutral.9`) — remapeado para `neutral.10` (3.90-4.22:1, passa large-text, permanece restrito a texto ≥18px/400 ou ≥14px/600). Ver `ACCESSIBILITY.md` para a tabela completa.
- `design-system/tokens/*` ressincronizado com os valores corrigidos.

## [0.3.0] — Fase 2: `packages/callout-protocol` e `packages/ui`

**Adicionado**
- `packages/callout-protocol`: `CalloutNode` (Zod) e `CALLOUT_REGISTRY` portados de `ADR-001` para código real; 28 testes.
- `packages/ui`: biblioteca de componentes React — `Button`, `IconButton`, `Badge`/`CategoryPill`, `Card`, `Tabs`, `Callout`, `Text`/`Heading`/`Divider`; 35 testes (Vitest + Testing Library); Storybook configurado e verificado visualmente via screenshot Chromium contra `qa/visual-checklist.md`. Ver `component-inventory.md` para o status atualizado por componente.
- `packages/design-tokens`: passa a distribuir também `styles/{reset,typography,layout,utilities}.css` (antes só existiam em `design-system/styles/`), para que `packages/ui` e futuras apps não precisem importar da pasta de documentação.

**Corrigido (achados pela suíte de testes/verificação visual, não por revisão manual)**
- `CalloutNodeSchema`: `body: z.unknown()` aceitava `undefined` silenciosamente — um nó sem `body` passava a validação. Corrigido com um `.refine()` exigindo presença.
- `.ex-card` (packages/ui) não declarava `display` — ao renderizar como `<a>` (variante `href`, futuro `PostCard`), ficava `inline` (padrão do navegador) e o conteúdo transbordava da borda. Só apareceu no screenshot do Storybook, não nos testes unitários (jsdom não aplica CSS externo). Corrigido com `display: block` explícito.
