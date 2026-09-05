# Implementation Checklist

Checklist sequencial para a sessão de Claude Code (ou equipe) que for construir a partir deste package. Marcar conforme avança — não é um relatório de QA já executado (nenhum destes itens foi validado nesta entrega; ver `DS-FORM-001-OUT-015`, pendente).

## 0. Antes de escrever código

- [ ] Ler `README.md` (raiz) e `design-system/README.md`.
- [ ] Ler `00_GOVERNANCE/SOT_RESOLUTION.md` — entender os 3 conflitos já resolvidos.
- [ ] Ler `00_GOVERNANCE/OPEN_QUESTIONS.md` — confirmar com o owner do projeto os itens Tier 1/Tier 2 antes de travar naming, logo ou copy definitivos (não bloqueia tokens/componentes).

## 1. Setup do monorepo

- [ ] Criar `packages/design-tokens` e portar `design-system/tokens/*` para lá (ver `FILE_TREE.md`).
- [ ] Configurar `pnpm` workspaces conforme `DS-FORM-001-TEC-003`.
- [ ] Gerar `tailwind.config` a partir de `variables.css`/`theme.css` (não reescrever os valores à mão).

## 2. Fundação visual

- [ ] Importar `styles/reset.css`, `styles/typography.css`, `styles/layout.css`, `styles/utilities.css` no app Astro.
- [ ] Self-host IBM Plex Sans/Mono (WOFF2) — ver `TYP-011`.
- [ ] Validar que `theme.css` alterna corretamente entre `light`/`dark` via `[data-theme]`.

## 3. Componentes (ordem sugerida por dependência)

- [ ] Foundation: Text, Heading, Divider, Icon.
- [ ] Button, IconButton (ver `COMPONENT-SPEC.md`).
- [ ] Card, Badge/CategoryPill.
- [ ] Callout (implementar `CalloutNode` + registry de `components/callout-protocol.md` **antes** de conectar ao Payload/Markdown).
- [ ] Navigation (Header/Footer), Tabs, Modal/Drawer.
- [ ] PostCard, MetaBar, CopyLinkButton, NewsletterForm (Blog).

## 4. Integração de conteúdo

- [ ] Conectar Astro ao Payload CMS como headless (REST/GraphQL) — ver `00_GOVERNANCE/SOT_RESOLUTION.md §2`.
- [ ] Implementar bloco `Callout` no Payload Lexical (`ADR-001 §9`).
- [ ] Configurar pipeline Markdown (`remark-directive` + `remarkCalloutPlugin`) para conteúdo fora do Payload.

## 5. Responsividade e acessibilidade

- [ ] Testar nos 3 breakpoints de `QAT-001` (390/834/1440px).
- [ ] Rodar auditoria de contraste automatizada nos pares de `ACCESSIBILITY.md` (os cálculos manuais já feitos aqui devem bater com a ferramenta escolhida).
- [ ] Testar navegação 100% por teclado e leitor de tela em pelo menos: header, PostCard, formulário, modal, Callout collapsible.
- [ ] Testar `prefers-reduced-motion` de fato desativando toda transição.

## 6. App (Expo/React Native/Tamagui)

- [ ] Importar `packages/design-tokens/tokens.native.ts` no `tamagui.config.ts`.
- [ ] Reimplementar os componentes compartilhados (`Button`, `Card`, `Callout`, `Badge`) com a mesma API de props documentada em `COMPONENT-SPEC.md`.
- [ ] Validar alvo de toque 44px em dispositivo real, não só simulador.

## 7. Gates de publicação (não travar sem isto)

- [ ] `qa/visual-checklist.md` 100% marcado.
- [ ] Nenhum HEX/px arbitrário no bundle (grep automatizado, ver `TEC-005`, ainda a configurar).
- [ ] Contraste AA confirmado por ferramenta (não apenas cálculo manual deste handoff).
- [ ] Revisão humana do Tier 1/Tier 2 de `OPEN_QUESTIONS.md` antes de anunciar o sistema como "aprovado" (`OUT-017`: nenhuma decisão inferida pode ser declarada aprovada sem essa revisão).
