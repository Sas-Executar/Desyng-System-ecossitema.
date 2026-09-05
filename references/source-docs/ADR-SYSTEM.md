ADR — Architecture Decision Record

ID: ADR-DESIGN-SYSTEM-001  
Título: Sistema visual unificado para App, Blog e ativos editoriaisStatus: Accepted / SOT  
Escopo: UI, UX, conteúdo editorial, infográficos, imagens geradas e futuras interfaces EXECUTAR.

|   |   |
|---|---|
|Decisão|Especificação|
|Problema|App, Blog e conteúdo visual precisam parecer partes do mesmo produto sem depender de composição manual ou decisões estéticas a cada tela.|
|Princípio|A identidade será construída por minimalismo funcional + alto espaço negativo + linhas finas + superfícies neutras + acentos cromáticos controlados + profundidade isométrica.|
|Base cromática|Green #00BF63, Vivid Azure #1F93FF, Dark Gray #4B4A4A, Light Gray #F6F6F6 e White #FFFFFF.|
|Green|Representa ação principal, execução, progresso, confirmação, estado positivo e CTA prioritário.|
|Azure|Representa informação, navegação, links, interação secundária, tecnologia e elementos explicativos.|
|Dark Gray|É a principal cor para textos, títulos, ícones neutros e informação estrutural.|
|Light Gray|Atua como canvas, fundo alternativo, seção editorial e mecanismo de contraste entre superfícies.|
|White|Atua como surface principal para cards, artigos, painéis, modais e componentes elevados.|
|Tipografia|IBM Plex Sans será usada para leitura e interface e IBM Plex Mono para IDs, métricas, código, prompts, labels técnicos e metadados.|
|Interface|Componentes devem parecer leves, silenciosos e SaaS, utilizando bordas finas, poucos efeitos, sombras mínimas e hierarquia por espaço.|
|Botões|A ação primária deve ser visualmente grande e inequívoca, enquanto ações secundárias e terciárias perdem peso progressivamente.|
|Visualização|Diagramas, infográficos e assets gerados devem utilizar traços técnicos finos, wireframes, grids sutis e poucos preenchimentos.|
|Perspectiva|Imagens conceituais devem priorizar perspectiva 3/4, isométrica ou pseudoisométrica para criar profundidade e explicar relações entre componentes.|
|Consistência|O mesmo vocabulário visual deve funcionar em App, Blog, documentos, infográficos, apresentações e redes sociais.|
|Regra crítica|HEX nunca deve ser consumido diretamente pelos componentes, pois a implementação deve usar tokens semânticos.|
|Consequência positiva|Mudanças futuras de marca ou acessibilidade podem ocorrer no nível dos tokens sem refatoração integral dos componentes.|
|Trade-off|O sistema reduz liberdade decorativa propositalmente para obter reconhecimento, consistência e velocidade de produção.|

  

PRD — Product Requirements Document

ID: PRD-DESIGN-SYSTEM-001  
Produto: EXECUTAR / Blog / Risco CognitivoObjetivo: estabelecer uma linguagem visual única utilizável por humanos, código e agentes de geração automática.

1. Objetivo do produto

O sistema deve permitir que qualquer tela, artigo, card, infográfico ou imagem gerada seja imediatamente reconhecível como pertencente ao mesmo ecossistema, mesmo quando produzido automaticamente.

2. Resultado esperado

|   |   |
|---|---|
|Área|Requisito|
|App|Interface operacional limpa, rápida e com ações visualmente inequívocas.|
|Blog|Leitura longa confortável, hierarquia editorial clara e imagens coerentes com o produto.|
|Dashboard|Dados densos sem excesso cromático ou visual.|
|Infográficos|Informação complexa convertida em diagramas leves e tecnicamente legíveis.|
|Imagens|Representação conceitual com perspectiva, profundidade, grids e linhas técnicas.|
|Automação|Agentes devem conseguir gerar peças consistentes a partir de tokens e regras explícitas.|

3. Hierarquia cromática

Primary

#00BF63

Uso:

- CTA principal;
- progresso;
- execução;
- conclusão;
- indicadores positivos;
- elementos focais controlados.

Secondary

#1F93FF

Uso:

- links;
- informação;
- navegação;
- controles secundários;
- indicadores tecnológicos;
- conexões em diagramas.

Neutral

#4B4A4A

Uso:

- títulos;
- corpo;
- ícones;
- labels;
- elementos estruturais.

Canvas

#F6F6F6

Uso:

- fundo de páginas;
- separação entre seções;
- conteúdo editorial;
- superfícies de menor prioridade.

Surface

#FFFFFF

Uso:

- cards;
- artigos;
- modais;
- painéis;
- inputs;
- objetos isométricos.

  

4. Estratégia de contraste

O sistema deve alternar principalmente entre:

Light Gray Canvas

        ↓

White Surface

        ↓

Dark Gray Content

        ↓

Green / Azure Accent

O fundo cinza não deve funcionar como decoração, mas como mecanismo de diferenciação de camada.

Exemplo:

#F6F6F6 ─ Página

    │

    ├── #FFFFFF ─ Card

    │      ├── #4B4A4A ─ Conteúdo

    │      └── #00BF63 ─ Ação

    │

    └── #FFFFFF ─ Artigo

           └── #1F93FF ─ Link / informação

  

5. Estratégia de botões

A hierarquia deve ser percebida antes mesmo da leitura do label.

Primary Button

purpose: ação principal

background: Green

shape: pill ou rounded-large

height:

  desktop: 48-56px

  mobile: 52-60px

label: IBM Plex Sans Medium

icon: opcional à direita

Exemplo:

[         Começar agora       → ]

Secondary Button

[       Ver documentação      → ]

Pode utilizar:

- Azure sólido;
- white + border;
- fundo neutro.

Tertiary

Cancelar

Saiba mais →

Sem grande superfície visual.

Icon Button

( + )

( ↗ )

( ⋯ )

( ? )

Preferência por formato circular.

  

6. Regra visual dos CTAs

PRIMÁRIO

████████████████████

Green / grande

  

SECUNDÁRIO

████████████████████

Azure / Outline

  

TERCIÁRIO

Texto →

  

ICON ACTION

○

Nunca devem existir três botões com o mesmo peso visual disputando atenção.

  

7. Tipografia

IBM Plex Sans

Aplicada em:

- artigos;
- interface;
- navegação;
- títulos;
- subtítulos;
- formulários;
- instruções;
- botões.

Escala recomendada:

|   |   |
|---|---|
|Token|Tamanho|
|Display|48–64px|
|H1|40–48px|
|H2|32–36px|
|H3|24–28px|
|Body Large|18px|
|Body|16px|
|Small|14px|
|Caption|12px|

Leitura longa:

font-family: IBM Plex Sans

font-size: 17-18px

line-height: 1.6-1.7

font-weight: 400

max-width: 65-75ch

IBM Plex Mono

Uso restrito a:

RC-PROBLEM-001

V2.0

12.4%

STATUS_RUNNING

> prompt

metadata

API

DATA-004

Mono não deve ser usado como fonte principal de artigos.

  

SPECS — Design System

SPEC-COLOR-001 — Tokens primitivos

color:

  green:

    base: "#00BF63"

  

  azure:

    base: "#1F93FF"

  

  gray:

    dark: "#4B4A4A"

    light: "#F6F6F6"

  

  white:

    base: "#FFFFFF"

Devem existir nuances derivadas para estados.

50

100

200

300

400

500

600

700

800

900

  

SPEC-COLOR-002 — Tokens semânticos

semantic:

  background:

    canvas: gray-light

    surface: white

    elevated: white

  

  text:

    primary: gray-dark

    secondary: neutral-600

    muted: neutral-500

  

  action:

    primary: green

    secondary: azure

  

  state:

    success: green

    info: azure

    warning: semantic-warning

    error: semantic-error

  

  border:

    subtle: neutral-200

    default: neutral-300

  

  focus:

    ring: azure

  

SPEC-SURFACE-001 — Cards

background: "#FFFFFF"

border: 1px solid neutral-200

radius: 8-16px

shadow: none | subtle

padding: 16-32px

Regra:

A separação deve ocorrer prioritariamente por espaço, fundo e borda, não por sombras pesadas.

  

SPEC-LINE-001 — Linhas técnicas

Esse elemento é central na identidade visual.

line:

  primary:

    width: 1px

    opacity: 60-90%

  

  secondary:

    width: 0.5-1px

    opacity: 20-40%

  

  grid:

    width: 0.5px

    opacity: 8-15%

Utilizar em:

- diagramas;
- conexões;
- wireframes;
- grids;
- desenhos de produtos;
- arquitetura;
- setas;
- fluxos.

  

SPEC-ILLUSTRATION-001 — Linguagem visual automática

Todo visual conceitual gerado deve seguir:

visual_language:

  style:

    - technical

    - editorial

    - minimal

    - isometric

    - SaaS

  

  geometry:

    - thin outlines

    - simple primitives

    - clean grids

    - modular objects

  

  fill:

    dominant: white

    secondary: light-gray

  

  accents:

    green: sparse

    azure: sparse

  

  shadows:

    strength: very-low

  

  texture:

    none_or_minimal: true

  

  realism:

    photorealistic: false

  

SPEC-PERSPECTIVE-001 — Ângulo

Esse deve ser tratado como regra de composição, e não como escolha aleatória da IA.

Default

               TOP

                /

               /

        ┌────────────┐

       /            /|

      /            / |

     └────────────┘  |

      |            | /

      |____________|/

  

        VIEW 3/4

Configuração conceitual:

camera:

  perspective: isometric-like

  angle: 30-45deg

  elevation: 25-40deg

  focal_length: medium

  

SPEC-PERSPECTIVE-002 — Uso dos ângulos

Hero

Objeto visto de cima em 3/4.

Objetivo:

demonstrar sistema + profundidade.

Produto

Perspectiva levemente frontal.

Objetivo:

permitir leitura da UI.

Arquitetura

Isométrico mais alto.

Objetivo:

mostrar relações entre elementos.

Detalhamento

Close-up oblíquo.

Objetivo:

mostrar uma interação específica.

Exploded View

Camada 01

──────────

  

     ↓

  

Camada 02

──────────

  

     ↓

  

Camada 03

──────────

Objetivo:

explicar funcionamento interno.

  

SPEC-INFOGRAPHIC-001

Padrão de geração:

OBJECT

   │

   ├──────────────→ DATA

   │

   ↓

PROCESS

   │

   └──────────────→ RESULT

Regras:

background: white | light-gray

stroke: thin

objects: outlined

grid: subtle

labels: minimal

accent_colors: max-2

perspective: isometric

density: low-to-medium

  

SPEC-IMAGE-002 — Distribuição cromática

Referência operacional:

80–90%  Neutral / White / Light Gray

 5–10%  Dark Gray

 2–5%   Green

 2–5%   Azure

Green e Azure devem funcionar como sinais, não como preenchimento predominante.

  

SPEC-LAYOUT-001 — Espaço

Grid base:

spacing_unit: 8px

  

scale:

  1: 4px

  2: 8px

  3: 12px

  4: 16px

  6: 24px

  8: 32px

  12: 48px

  16: 64px

  24: 96px

A composição deve privilegiar grandes áreas vazias.

  

SPEC-LAYOUT-002 — Regra editorial

────────────────────────────────────

  

TÍTULO

  

Subtítulo ou explicação curta.

  

  

            [ VISUAL ]

  

  

Texto complementar

  

────────────────────────────────────

Evitar:

Título

texto

card

botão

imagem

tag

ícone

box

badge

gráfico

CTA

todos competindo simultaneamente.

  

SPEC-MOTION-001

Quando houver animação:

motion:

  duration:

    micro: 120-180ms

    default: 180-250ms

    large: 250-400ms

  

  easing: ease-out

  

  allowed:

    - opacity

    - translate

    - scale-subtle

    - layer-depth

  

  avoid:

    - bouncing

    - excessive-parallax

    - decorative-spin

A animação deve comunicar:

estado, hierarquia ou deslocamento espacial.

  

SPEC-AUTO-GENERATION-001 — Contrato para IA

Todo agente gerador de assets deve receber um bloco equivalente a:

EXECUTAR_VISUAL_SYSTEM:

  aesthetic: "minimal functional SaaS"

  

  palette:

    green: "#00BF63"

    azure: "#1F93FF"

    dark-gray: "#4B4A4A"

    light-gray: "#F6F6F6"

    white: "#FFFFFF"

  

  visual:

    line_weight: thin

    geometry: precise

    perspective: isometric-3-quarter

    depth: moderate

    fills: minimal

    shadows: subtle

    whitespace: high

  

  accents:

    green: primary-action

    azure: information

  

  composition:

    primary_subject: one

    visual_hierarchy: strong

    clutter: prohibited

  

  typography:

    sans: IBM-Plex-Sans

    mono: IBM-Plex-Mono

  

SPEC-COMPONENT-001 — Biblioteca mínima

O Design System deverá ter, inicialmente:

Foundation

├── Color

├── Typography

├── Spacing

├── Radius

├── Border

├── Grid

└── Motion

  

Components

├── Button

├── IconButton

├── SegmentedControl

├── Input

├── Textarea

├── Select

├── Card

├── Callout

├── Badge

├── Tabs

├── Modal

├── Drawer

├── Navigation

├── Article

├── CodeBlock

├── Metric

├── Progress

└── Diagram

  

SPEC-BUTTON-001 — Estados obrigatórios

DEFAULT

HOVER

FOCUS

ACTIVE

DISABLED

LOADING

Exemplo:

DEFAULT    [ Começar agora → ]

  

HOVER      [ Começar agora → ]

  

LOADING    [     ●●●         ]

  

DISABLED   [ Indisponível    ]

  

SPEC-RESPONSIVE-001

O sistema visual deve preservar a linguagem, não necessariamente a mesma composição.

DESKTOP

visual + conteúdo lado a lado

  

TABLET

visual reduzido + conteúdo

  

MOBILE

conteúdo

visual

CTA

Objetos isométricos complexos devem ser simplificados para mobile em vez de apenas redimensionados.

  

SPEC-ACCESSIBILITY-001

Obrigatório:

body_text:

  contrast: ">= 4.5:1"

  

large_text:

  contrast: ">= 3:1"

  

controls:

  minimum_touch_target: 44px

  

information:

  color_only: prohibited

  

focus:

  visible: true

  

Governança

FOUNDATION TOKENS

       ↓

SEMANTIC TOKENS

       ↓

COMPONENT TOKENS

       ↓

APP / BLOG

       ↓

INFOGRAPHICS

       ↓

SOCIAL / DOCUMENTS

A regra central do SOT passa a ser:

Mesmo sistema, diferentes superfícies: fundo neutro, conteúdo escuro, Green para executar, Azure para informar, linhas finas para explicar e perspectiva 3/4 para criar profundidade.