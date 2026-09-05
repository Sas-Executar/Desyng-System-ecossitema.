# RESPONSIVE-SPEC — EXECUTAR / Desyng System

Segue `Prompt.md §9`. Regra-mestra (OBSERVED, `ADR-SYSTEM.md SPEC-RESPONSIVE-001`): **o sistema visual deve preservar a linguagem, não necessariamente a mesma composição.** Objetos isométricos complexos devem ser *simplificados* para mobile, não apenas redimensionados.

## Breakpoints

| Nome | Faixa | Fonte |
|---|---|---|
| mobile | `< 768px` | NORMALIZED (astro-blog.md, estrutural) |
| tablet | `768px – 1024px` | NORMALIZED |
| desktop | `> 1024px` | NORMALIZED |

## Padrão geral por camada (OBSERVED)

| Camada | Desktop | Tablet | Mobile |
|---|---|---|---|
| Visual + conteúdo | lado a lado | visual reduzido + conteúdo | conteúdo → visual → CTA (empilhado) |
| Grid | 12 colunas | 8 colunas | 4 colunas |
| Container | 1200px | ~90% da largura | 100% menos padding |
| Padding lateral | `space.8` (32px) | `space.6` (24px) | `space.4` (16px) |

## Página de post individual (Blog)

Arquitetura reaproveitada de `astro-blog.md` (estrutural, não paleta):

| Breakpoint | Comportamento |
|---|---|
| Desktop (>1024px) | Coluna de leitura 720px centralizada; metadados em linha horizontal única |
| Tablet (768–1024px) | Coluna ~90% da largura, padding `space.6`; metadados quebram em 2 linhas se necessário |
| Mobile (<768px) | Padding `space.4`; título reduz de `display`/`h1` para `h2`; metadados empilhados; related posts em pilha vertical de 1 coluna |

## Listagem de Blog

Grid de `PostCard`: **3 colunas desktop / 2 tablet / 1 mobile.**

## Elementos que mudam de posição/tamanho

- **Tipografia responsiva:** `h1`→reduz um degrau da escala em mobile (ex.: `display`→`h1`, `h1`→`h2`) para caber em telas estreitas sem quebrar hierarquia.
- **Paddings responsivos:** `.container` usa `space.4` (mobile) → `space.6` (tablet) → `space.8` (desktop), ver `styles/layout.css`.
- **Imagens:** `loading="lazy"` + dimensões explícitas (evita CLS); objetos isométricos complexos (App/Diagram) trocam para uma versão simplificada abaixo de `tablet`, não apenas encolhem.
- **Grids que reduzem colunas:** `grid-template-columns` via `--grid-columns-*` (12→8→4).
- **Overflow/truncamento:** títulos truncam em 2-3 linhas com `line-clamp` + atributo `title`; tabelas/código com overflow horizontal ganham `tabindex="0"`; metadados nunca usam `nowrap` (reserva espaço para diacríticos/CJK futuro).

## Min/max dimensions

- Alvo de toque mínimo: 44px em qualquer breakpoint (OBSERVED, `SPEC-ACCESSIBILITY-001`).
- Largura de leitura: nunca abaixo de ~45ch nem acima de ~75ch (interpolação do range 65-75ch citado em `ADR-SYSTEM.md`).

## Edge cases (arquitetura reaproveitada de astro-blog.md)

- Post sem imagem de destaque: header do post colapsa sem deixar espaço vazio.
- Menos de 3 posts relacionados: grid ajusta para 1–2 colunas, sem placeholders vazios.
- Categoria sem posts: estado vazio "Nenhum post nesta categoria ainda" (ver padrão em `05_STATES_FEEDBACK` do CARDS pack).
- Conexão lenta: skeleton usa `background.canvas` (neutral.2), nunca um cinza fora da escala.

## App (Expo/React Native/Tamagui)

- Mesmos tokens (`tokens.native.ts`), mas sem breakpoints de largura de container — usa `Dimensions`/safe-area do dispositivo.
- Alvo de toque 44px é obrigatório também aqui (mesma fonte, `SPEC-ACCESSIBILITY-001`).
- Gestos precisam de alternativa por controle explícito (`DS-FORM-001-MOT-007`, ainda `PENDING_USER_INPUT` — ver `00_GOVERNANCE/OPEN_QUESTIONS.md`).
