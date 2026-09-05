# DESIGN-SPEC — EXECUTAR / Desyng System

Especificação visual completa do sistema, seguindo `Prompt.md §1-6`. Fonte da verdade: `ADR-SYSTEM.md` (Accepted). Ver `00_GOVERNANCE/SOT_RESOLUTION.md` para os conflitos resolvidos e `00_GOVERNANCE/TRACEABILITY.md` para a classificação de cada valor.

## 1. Design Forensics — resumo

O sistema já foi decidido em ADR (não é uma reconstrução visual a partir de uma imagem única): minimalismo funcional, alto espaço negativo, linhas finas, superfícies neutras, acentos cromáticos controlados, profundidade isométrica. Densidade visual baixa por design (`SPEC-IMAGE-002`: 80–90% neutro/branco/cinza-claro; 2–5% Green; 2–5% Azure).

O pack `CARDS_DESIGN_REFERENCE_PACK_V1` (21 imagens, marcas de terceiros) foi analisado apenas por **arquitetura** — grid, hierarquia, densidade, padrões de composição, comportamento responsivo — nunca por cor (ver `layouts/layout-archetypes.md` e a regra explícita no `README.md` do pack: "referências, não especificações absolutas"). O deck `handoff_pack_visual_app_blog_2026-09-05` (10 slides) corrobora a mesma paleta Green/Azure/IBM Plex já aceita, sem introduzir tokens novos.

## 2. Paleta

7 famílias planejadas no raciocínio de `Desing-System-notes.md` (Radix-like, 12 tons cada) — implementadas como 5 famílias reais neste handoff: **Green** (primary/brand/success), **Azure** (secondary/info/link), **Neutral** (texto/superfície/borda), **Warning** e **Error** (`ESTIMATED` — não existiam no ADR original, ver `TRACEABILITY.md`). `info` reaproveita Azure e `success` reaproveita Green, por decisão explícita do ADR (`SPEC-COLOR-002`) — ver a tensão documentada em `SOT_RESOLUTION.md §4`.

| Família | Passo 9 (solid/CTA) | Passo 11 (texto acessível) | Função |
|---|---|---|---|
| green | `#00BF63` OBSERVED | `#007A45` OBSERVED | ação principal, execução, progresso, sucesso |
| azure | `#1F93FF` OBSERVED | `#0B6FD3` OBSERVED | informação, navegação, link, foco |
| neutral | `#959494` NORMALIZED | `#646363` NORMALIZED | texto, superfície, borda, estrutura |
| warning | `#B25E09` ESTIMATED | `#8C4D0D` ESTIMATED | alerta operacional (não existia no ADR) |
| error | `#C22C2C` ESTIMATED | `#792020` ESTIMATED | erro operacional (não existia no ADR) |

Escala completa (12 passos por família) em `tokens/design-tokens.json` (`color.palette.*`) e `tokens/variables.css`.

### Contraste — validação (ver `ACCESSIBILITY.md`)

| Par | Contraste | Resultado |
|---|---|---|
| Green raw `#00BF63` sobre canvas `#F6F6F6` | 2.25:1 | **Falha AA** — nunca usar como texto |
| Azure raw `#1F93FF` sobre canvas `#F6F6F6` | 2.91:1 | **Falha AA** (mesmo para texto grande) |
| Green texto `#007A45` sobre canvas `#F6F6F6` | 5.02:1 | Passa AA (texto normal) |
| Azure texto `#0B6FD3` sobre canvas `#F6F6F6` | 4.60:1 | Passa AA (texto normal) |
| Neutral texto `#4B4A4A` sobre canvas `#F6F6F6` | 8.17:1 | Passa AAA |

Estes números confirmam quantitativamente o alerta já registrado em `Desing-System-notes.md`: as cores de marca em saturação plena **não** podem ser usadas como texto — apenas como preenchimento sólido de CTA/ícone (passo 9) ou como acento pontual, nunca como `color.semantic.text.*`.

### Cores semânticas

```
background.canvas   = neutral.2   (#F6F6F6)
background.surface  = neutral.1   (#FFFFFF)
text.primary        = neutral.12  (#4B4A4A)
text.secondary      = neutral.10
text.link           = azure.11    (#0B6FD3)
border.default      = neutral.6   (#DEDEDE)
action.primary      = green.9     (#00BF63)
action.secondary    = azure.9     (#1F93FF)
state.success       = green.9  / texto: green.11
state.info          = azure.9  / texto: azure.11
state.warning       = warning.9 / texto: warning.11
state.error         = error.9  / texto: error.11
focus.ring          = azure.8
```

Regra crítica (OBSERVED, `ADR-SYSTEM.md`): **nenhum componente consome HEX diretamente** — sempre via `color.semantic.*`.

## 3. Tipografia

IBM Plex Sans (leitura/interface) + IBM Plex Mono (IDs, métricas, dados, código) — OBSERVED. Escala completa (`tokens/design-tokens.json` → `typography.*`):

| Token | Tamanho | Line-height | Peso | Family | Fonte |
|---|---|---|---|---|---|
| display | 56px | 64px | 600 | sans | NORMALIZED (midpoint 48–64) |
| h1 | 44px | 52px | 600 | sans | NORMALIZED (midpoint 40–48) |
| h2 | 34px | 42px | 600 | sans | NORMALIZED (midpoint 32–36) |
| h3 | 26px | 34px | 600 | sans | NORMALIZED (midpoint 24–28) |
| title | 20px | 28px | 600 | sans | RECOMMENDED |
| subtitle | 18px | 26px | 500 | sans | RECOMMENDED |
| body-lg | 18px | 29px | 400 | sans | OBSERVED (leitura longa) |
| body | 16px | 26px | 400 | sans | OBSERVED |
| body-sm | 14px | 22px | 400 | sans | OBSERVED |
| caption | 12px | 18px | 400 | sans | OBSERVED |
| label | 13px | 18px | 500 | sans | RECOMMENDED |
| button | 15px | 20px | 500 | sans | NORMALIZED |
| overline | 11px | 16px | 600 | sans | RECOMMENDED |
| mono-data | 14px | 20px | 400 | mono | OBSERVED |

Leitura longa (artigo/blog): `body-lg`, largura máxima ~70ch/720px (NORMALIZED, estrutural de `astro-blog.md`), alinhamento à esquerda.

## 4. Spacing + Geometria

Escala 4px-base (compatível com Tailwind), OBSERVED (`ADR-SYSTEM.md SPEC-LAYOUT-001`) com duas extensões RECOMMENDED (`0.5`=2px, `32`=128px):

`0, 2, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128` px — `tokens/design-tokens.json` → `space.*`.

**Radius:** `sm`=4px, `md`=8px, `lg`=12px (NORMALIZED), `xl`=16px, `pill`=999px (botão primário), `full`=9999px.

**Border:** `hairline`=0.5px, `thin`=1px (OBSERVED, `SPEC-LINE-001`).

**Shadow:** `sm`/`md`/`hover` — NORMALIZED, ADR só especifica "sombras mínimas" sem valores exatos.

**Opacity (linhas técnicas, `SPEC-LINE-001`):** primary=0.8, secondary=0.3, grid=0.12 — NORMALIZED (pontos médios dos ranges OBSERVED 60-90%/20-40%/8-15%).

## 5. Layout / Grid System

- Container de página: 1200px (NORMALIZED, `astro-blog.md` + wireframes do CARDS pack).
- Coluna de leitura: 720px / ~70ch (NORMALIZED, `astro-blog.md`).
- Grid: 12 colunas desktop, 8 tablet, 4 mobile (RECOMMENDED — convenção, não especificada no ADR).
- Gutters: `space.6` (24px) desktop, `space.4` (16px) mobile.
- Breakpoints: mobile `<768px`, tablet `768–1024px`, desktop `>1024px` (NORMALIZED, estrutural).

Regra de composição (OBSERVED, `SPEC-LAYOUT-002`): nunca fazer título + texto + card + botão + imagem + tag + ícone + box + badge + gráfico + CTA competirem simultaneamente — um assunto/ação principal por composição.

Ver `layouts/layout-archetypes.md` para os padrões de arquitetura extraídos do `CARDS_DESIGN_REFERENCE_PACK_V1`.

## 6. Linguagem visual automática (isometria, diagramas, infográficos)

OBSERVED, `SPEC-ILLUSTRATION-001`/`SPEC-PERSPECTIVE-001-002`/`SPEC-INFOGRAPHIC-001`:

- Estilo: técnico, editorial, minimalista, isométrico, SaaS.
- Geometria: contornos finos, primitivas simples, grids limpos, objetos modulares.
- Preenchimento: dominante branco/cinza-claro; acentos Green/Azure esparsos (máx. 2 por peça).
- Perspectiva padrão: isométrica-like, ângulo 30-45°, elevação 25-40°.
- Usos por contexto: Hero = objeto de cima em 3/4 (mostrar sistema+profundidade); Produto = frontal leve (ler a UI); Arquitetura = isométrico alto (relações entre elementos); Detalhamento = close-up oblíquo; Exploded view = camadas numeradas com setas.
- Contrato para agentes geradores: bloco `EXECUTAR_VISUAL_SYSTEM` (ver `ADR-SYSTEM.md`, seção SPEC-AUTO-GENERATION-001) deve acompanhar todo prompt de geração automática de imagem.

Corroborado visualmente pelas referências `06_VISUAL_LANGUAGE` do CARDS pack (`DSREF-VIS-001/002/003`) — apenas na composição/traço, não na paleta de terceiros.
