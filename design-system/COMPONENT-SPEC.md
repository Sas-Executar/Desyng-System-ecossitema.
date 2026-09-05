# COMPONENT-SPEC — EXECUTAR / Desyng System

Segue `Prompt.md §7-8, 10`. Combina: (a) `SPEC-COMPONENT-001` de `ADR-SYSTEM.md`, (b) componentes específicos de Blog de `astro-blog.md` (arquitetura, não paleta), (c) padrões observados em `CARDS_DESIGN_REFERENCE_PACK_V1` (ver `layouts/layout-archetypes.md`), e (d) o protocolo `Callout` completo de `ADR-001` (ver `components/callout-protocol.md`).

Regra transversal (OBSERVED, `ADR-SYSTEM.md`): todo componente consome apenas `color.semantic.*`/tokens derivados — nunca HEX/px cru quando existe token equivalente (`DS-FORM-001-TOK-004/005`).

## Foundation

| Camada | Conteúdo | Fonte |
|---|---|---|
| Color | `tokens/design-tokens.json` → `color.*` | OBSERVED+NORMALIZED+ESTIMATED (ver TRACEABILITY.md) |
| Typography | `tokens/design-tokens.json` → `typography.*` | OBSERVED+NORMALIZED |
| Spacing | `space.*` | OBSERVED |
| Radius | `radius.*` | OBSERVED+NORMALIZED |
| Border | `border.*` | OBSERVED |
| Grid | `grid.*`, `breakpoint.*`, `container.*` | NORMALIZED |
| Motion | `motion.*` | OBSERVED |

## Inventário de componentes

Estados obrigatórios por padrão (OBSERVED, `SPEC-BUTTON-001` + `DS-FORM-001-MOT-001`): `default, hover, focus, active, selected, loading, success, warning, error, disabled`. Cada componente abaixo lista apenas os estados que não seguem o padrão default.

### Button

- **Anatomia:** label (IBM Plex Sans Medium) + ícone opcional à direita.
- **Variantes:** `primary` (Green sólido, pill/rounded-large), `secondary` (Azure sólido ou outline), `tertiary` (texto, sem superfície), `icon` (circular).
- **Tamanhos:** desktop 48–56px altura; mobile 52–60px (OBSERVED, ADR "Estratégia de botões").
- **Regra de hierarquia:** nunca 3 botões com o mesmo peso visual na mesma tela (OBSERVED).
- **API sugerida:**
  ```tsx
  <Button variant="primary" size="md" state="default" icon="ArrowRight" iconPosition="right">
    Começar agora
  </Button>
  ```
- **Acessibilidade:** alvo de toque ≥44px; foco visível com `focus.ring` (Azure); loading anuncia `aria-busy`.

### IconButton

- Formato circular preferencial (OBSERVED). Tamanho mínimo 44×44px (hit area).
- Requer `aria-label` sempre — nunca depende só do ícone (DS-FORM-001-ICO-004).

### Card

- **Anatomia:** superfície branca, borda 1px `neutral.6`, radius 8–16px, padding 16–32px, sombra `none|subtle` (OBSERVED, `SPEC-SURFACE-001`).
- **Regra:** separação por espaço/fundo/borda antes de sombra pesada.
- **Variantes observadas no CARDS pack** (arquitetura, não cor): form-card em camadas com stepper (`DSREF-CMP-001`), data-card com tabs (`DSREF-CRD-003`), feature-card com objeto hero isométrico (`DSREF-CRD-002`), promo-card (`DSREF-CRD-007`).

### Callout

Ver `components/callout-protocol.md` — protocolo completo (`CalloutNode`, registry, renderers Web/Native/Print) portado de `ADR-001`.

### Badge / CategoryPill

- Radius `pill` (999px). Variante `active` usa `action.primary`/`action.secondary` sólido com texto `on_brand`; `inactive` usa borda + texto secundário.
- Fonte: `astro-blog.md` (`CategoryPill`, arquitetura reaproveitada com os tokens de cor do SOT, não os dela).

### Tabs

- Usado em data-cards (`DSREF-CRD-003`). Estado `active` marcado por sublinhado/preenchimento sólido `action.primary`, nunca só por peso de fonte (regra de não depender só de cor não se aplica aqui pois há indicador de posição, mas reforçar contraste).

### Modal / Drawer

- Overlay com `zIndex.overlay`/`zIndex.modal`. Fecha por `Esc`, clique fora e botão explícito — nunca só gesto (DS-FORM-001-MOT-007, pendente detalhamento fino).

### Navigation (Header/Footer)

- Header global sticky (`DS-FORM-001-LAY-010`). Footer com colunas de links + newsletter (arquitetura de `astro-blog.md`, "Footer global").

### Article / Prose

- Container `.prose` (ver `styles/typography.css`), largura ~70ch, `body-lg`.
- Blockquote com borda esquerda `action.secondary` (Azure).
- Heading `h2`/`h3` com `scroll-margin-top` para âncoras.

### CodeBlock

- `mono-data` (IBM Plex Mono), fundo `neutral.2`/`neutral.3`, `tabindex="0"` quando scrollável horizontalmente (acessibilidade de teclado).

### Metric / Progress

- Números em `mono-data` com `tabular-nums` (OBSERVED, ADR "Mono restrito a ... métricas").
- Progress bar usa `action.primary` (Green) — reforça a semântica "execução/progresso" do ADR.

### PostCard, MetaBar, CopyLinkButton, NewsletterForm

Arquitetura reaproveitada de `astro-blog.md` (não a paleta):

| Componente | Props | Notas |
|---|---|---|
| `PostCard` | `title, category, date, href, icon?` | radius `md`, borda `neutral.6`, hover: `shadow.hover` + `translateY(-2px)` 150ms ease-out |
| `MetaBar` | `category, product?, date, readingTime` | usa `text.secondary` |
| `CopyLinkButton` | `url` | `aria-live="polite"` no tooltip "Copied!" |
| `NewsletterForm` | `onSubmit` | estados `default/submitting/success/error` |

## Componentes primitivos e compostos (mapeamento DS-FORM-001-CMP)

Ver respostas completas em `00_GOVERNANCE/DS-FORM-001_RESPONSES.csv` (seção `CMP`). Resumo: primitivos = button, input, select, checkbox, radio, switch, link, icon_button, divider, text, heading; compostos = Card, Callout, Tabs, Modal, Drawer, Navigation, Article, CodeBlock, Metric, Progress, Diagram, SegmentedControl, PostCard, CategoryPill, MetaBar, CopyLinkButton, NewsletterForm.

## Pendências (não fabricadas — ver `00_GOVERNANCE/OPEN_QUESTIONS.md`)

Storybook, testes visuais/E2E formais, e critérios detalhados de props/slots por componente (`CMP-006/009/010`) ainda não existem — este documento é a especificação a partir da qual eles devem ser criados durante a implementação.
