# IMPLEMENTATION_PLAN

Plano para a sessão de Claude Code (ou equipe) que for construir a partir deste package. Ordem pensada para reduzir retrabalho: tokens antes de componentes, componentes antes de páginas, Web e Native em paralelo depois que os tokens estiverem estáveis.

## Fase 0 — Confirmar decisões pendentes de negócio (opcional, não bloqueia engenharia)

Revisar `00_GOVERNANCE/OPEN_QUESTIONS.md` Tier 1/Tier 2 com o owner do projeto (nome oficial, owner, aprovadores, naming/logo). **Não bloqueia** o início da Fase 1 — tokens e componentes já têm base suficiente (`ANSWERED_FROM_EVIDENCE`).

## Fase 1 — Monorepo e pacote de tokens

1. Criar `packages/design-tokens` (ver `FILE_TREE.md`); portar `design-system/tokens/design-tokens.json` como fonte única.
2. Escrever um script de build (`scripts/build-tokens.*`) que gera `variables.css`, `theme.css`, `tokens.native.ts`, `design-tokens.yaml` a partir do JSON — reaproveitar a lógica usada para gerar este package (join de `$value`/`$extensions.desyng.source`), não reescrever os valores manualmente.
3. Adicionar `tailwind.config` que lê as mesmas CSS variables (não duplicar a paleta em dois lugares).
4. Gate: `qa/visual-checklist.md` item "Cores"/"Spacing" já deve passar neste ponto (nenhum valor arbitrário no config).

## Fase 2 — Fundação de estilo

1. Portar `styles/{reset,typography,layout,utilities}.css` para `apps/blog`.
2. Self-host as fontes IBM Plex (ver `TYP-011`).
3. Implementar o `[data-theme]` switch (light/dark) e testar contraste real com ferramenta (não apenas o cálculo manual deste handoff).

## Fase 3 — Componentes compartilhados (Web primeiro, depois portar para Native)

Ordem sugerida (menor dependência primeiro): `Text/Heading` → `Button`/`IconButton` → `Badge`/`CategoryPill` → `Card` → `Callout` (usa `packages/callout-protocol`) → `Tabs`/`Modal`/`Drawer` → `Navigation`.

Para cada componente: implementar todos os estados de `COMPONENT-SPEC.md`, validar contra `DESIGN_TO_CODE_MAP.md`, marcar como pronto em `component-inventory.md` só quando os critérios de `CMP-012` (`00_GOVERNANCE/DS-FORM-001_RESPONSES.csv`) forem cumpridos.

## Fase 4 — Callout Protocol (bloqueador para conteúdo real)

1. Implementar `CalloutNode` (Zod) e `CALLOUT_REGISTRY` em `packages/callout-protocol` — ver `components/callout-protocol.md`.
2. Renderer Web primeiro (Astro/React), depois Native (Tamagui), depois Print (usado só quando um canal de impressão for confirmado — ver `CHN-002`, pendente).
3. Configurar pipeline Markdown (`remark-directive` + `remarkCalloutPlugin`).
4. Configurar bloco Payload Lexical `CalloutBlock` (`ADR-001 §9`).

## Fase 5 — Blog (Astro + Payload headless)

1. Cliente Payload headless (`apps/blog/src/lib/payload-client.ts`).
2. Layouts de post individual e listagem (`RESPONSIVE-SPEC.md`).
3. `PostCard`, `MetaBar`, `CopyLinkButton`, `NewsletterForm`.
4. Validar os 3 breakpoints de QA (390/834/1440px).

## Fase 6 — App (Expo/React Native/Tamagui)

1. `tamagui.config.ts` consumindo `packages/design-tokens/tokens.native.ts`.
2. Reimplementar os componentes compartilhados com a mesma API de props.
3. Validar alvo de toque 44px em dispositivo real.

## Fase 7 — Gates de publicação

Ver `qa/implementation-checklist.md` seção 7 — não anunciar o sistema como "aprovado" sem: checklist visual 100%, contraste validado por ferramenta, e revisão humana do Tier 1/Tier 2 de `OPEN_QUESTIONS.md` (`OUT-017`).

## Riscos conhecidos (não resolvidos nesta entrega)

- **Contraste do texto sobre botão sólido** (`ACCESSIBILITY.md`) — validar antes do lançamento, não depois.
- **Famílias Warning/Error são `ESTIMATED`** (não existiam no ADR original) — validar com o owner de marca antes de considerá-las definitivas.
- **Nenhum canal de impressão confirmado** (`CHN-002`) — não investir em `packages/callout-protocol/renderers/print.tsx` até essa decisão.
- **Stack do Blog reconciliada, não testada** (`SOT_RESOLUTION.md §2`) — confirmar na prática que Astro consegue consumir o Payload Admin já decidido sem atrito antes de escalar o time nessa direção.
