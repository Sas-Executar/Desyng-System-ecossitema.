# DESIGN_TO_CODE_MAP

Mapa: **Elemento visual → Componente → Arquivo → Tokens → Estado → Breakpoint** (`Prompt.md`, adendo "TARGET IMPLEMENTATION").

| Elemento visual | Componente | Arquivo alvo | Tokens principais | Estados | Breakpoint |
|---|---|---|---|---|---|
| Botão verde grande "Começar agora" | `Button` (`variant="primary"`) | `packages/design-tokens` + `apps/*/components/ui/Button` | `action.primary`, `action.primary_hover`, `radius.pill`, `space.6` (padding), `typography.button` | default/hover/focus/active/loading/disabled | todos |
| Botão outline azul "Ver documentação" | `Button` (`variant="secondary"`) | idem | `action.secondary`, `border.default` | default/hover/focus/disabled | todos |
| Card branco com borda fina e ícone isométrico | `Card` | `apps/*/components/ui/Card` | `background.surface`, `border.default`, `radius.md`, `shadow.sm` | default/hover (se clicável) | todos |
| Caixa colorida com ícone + título "Atenção" | `Callout` | `packages/callout-protocol` | registry de `components/callout-protocol.md` (`background`/`border`/`foreground` por `type`) | expanded/collapsed (se `collapsible`) | todos |
| Pill de categoria do blog | `CategoryPill` | `apps/blog/src/components/CategoryPill.tsx` | `action.primary` (active) / `border.default` (inactive), `radius.pill` | default/active/hover | todos |
| Card de post na listagem | `PostCard` | `apps/blog/src/components/PostCard.tsx` | `radius.md`, `border.default`, `shadow.hover` (hover), `typography.title` | default/hover/focus | grid 3→2→1 colunas |
| Barra de metadados do artigo (categoria · data · tempo de leitura) | `MetaBar` | `apps/blog/src/components/MetaBar.tsx` | `text.secondary`, `typography.label` | default | linha única (desktop) → 2 linhas (tablet) → empilhado (mobile) |
| Botão "Copiar link" com tooltip | `CopyLinkButton` | `apps/blog/src/components/CopyLinkButton.tsx` | `text.link`, `motion.duration.micro` | default/click(copied)/focus | todos |
| Formulário de newsletter | `NewsletterForm` | `apps/blog/src/components/NewsletterForm.tsx` | `background.canvas` (bloco full-width), `state.error_text` | default/submitting/success/error | todos |
| Bloco de código com syntax highlight | `CodeBlock` | `apps/blog/src/components/CodeBlock.tsx` (ou nativo Astro/Shiki) | `font.family.mono`, `background.canvas` | default/scroll (tabindex) | todos |
| Título do post (H1) | `Text`/`Heading` | `packages/design-tokens` (typography) | `typography.h1` → reduz para `typography.h2` em mobile | — | desktop/tablet/mobile |
| Diagrama isométrico gerado automaticamente | Não é componente de código — asset gerado | pipeline de geração de imagem (fora deste repo) | contrato `EXECUTAR_VISUAL_SYSTEM` (`DESIGN-SPEC.md §6`) | — | — |
| Wizard de onboarding com progress dots + radio | `Stepper` + `RadioCard` (padrão observado, `DSREF-CMP-001`) | `apps/app/components/ui/Stepper.tsx` | `space.4`, `radius.lg`, `action.primary` (dot ativo) | step 1..N, back/next | App (mobile-first) |
| Estado vazio "Nenhum dado ainda" | `EmptyState` (padrão observado, `DSREF-STA-004`) | `apps/*/components/ui/EmptyState.tsx` | `text.secondary`, `action.primary` (CTA pill) | — | todos |

## Como usar este mapa

1. Ao implementar qualquer tela, localizar a linha correspondente aqui antes de escrever CSS/estilo à mão.
2. Se um elemento visual não está listado, verificar `COMPONENT-SPEC.md` e `layouts/layout-archetypes.md` antes de inventar um novo padrão.
3. Nenhuma linha desta tabela introduz um token novo — todos já existem em `tokens/design-tokens.json`; se algo exigir um valor que não existe, ele deve primeiro ser adicionado lá (com a classificação de `00_GOVERNANCE/TRACEABILITY.md`), nunca hardcoded no componente.
