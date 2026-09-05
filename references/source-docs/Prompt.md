Para essa finalidade, a skill da imagem mais adequada é design-handoff. O ideal é não pedir apenas “extraia a paleta”, mas tratá-la como uma conversão Design → Design System → Developer Package.

Use este prompt após anexar o design:

/design-handoff

  

OBJETIVO

Analise o design visual anexado e transforme-o em um DESIGN SYSTEM codificado e em um DEVELOPER HANDOFF PACKAGE reutilizável, pronto para implementação.

  

Não quero apenas uma descrição visual.

Quero que você converta o design observado em especificações, tokens, regras, componentes e arquivos estruturados.

  

==================================================

1. DESIGN FORENSICS

==================================================

  

Analise visualmente e identifique:

  

- paleta de cores

- cores primárias, secundárias e neutras

- backgrounds

- foregrounds

- bordas

- estados

- cores semânticas

- tipografia

- família tipográfica provável

- pesos

- tamanhos

- line-height

- letter-spacing

- hierarquia tipográfica

- grid

- colunas

- alinhamentos

- containers

- margens

- paddings

- gaps

- spacing scale

- border radius

- border widths

- sombras

- blur

- opacidade

- aspect ratios

- proporções

- iconografia

- ilustrações

- tratamento de imagens

- densidade visual

- hierarquia

- ritmo

- composição

- responsividade implícita

  

Para valores não determináveis com precisão:

1. estime o valor mais provável;

2. marque como ESTIMADO;

3. informe nível de confiança;

4. não invente informações sem sinalização.

  

==================================================

2. DESIGN TOKENS

==================================================

  

Converta tudo que for possível em tokens semânticos.

  

Use nomenclatura consistente:

  

color.*

font.*

fontSize.*

fontWeight.*

lineHeight.*

letterSpacing.*

space.*

radius.*

border.*

shadow.*

opacity.*

size.*

layout.*

container.*

grid.*

breakpoint.*

zIndex.*

motion.*

  

Evite tokens baseados apenas na posição visual como:

"pink-1", "blue-2", "spacing-x".

  

Prefira nomes semânticos como:

  

color.brand.primary

color.background.canvas

color.background.surface

color.text.primary

color.text.secondary

color.border.default

color.action.primary

color.state.success

  

==================================================

3. PALETA

==================================================

  

Entregue tabela contendo:

  

TOKEN

HEX

RGB

HSL

FUNÇÃO

USO RECOMENDADO

CONTRASTE

CONFIANÇA

  

Identifique também:

  

- Primary

- Secondary

- Accent

- Neutral

- Surface

- Background

- Foreground

- Border

- Muted

- Success

- Warning

- Error

- Info

  

==================================================

4. TIPOGRAFIA

==================================================

  

Crie uma typography scale completa:

  

display

h1

h2

h3

h4

title

subtitle

body-lg

body

body-sm

caption

label

button

overline

  

Para cada estilo definir:

  

font-family

font-size

font-weight

line-height

letter-spacing

text-transform

uso

  

==================================================

5. SPACING + GEOMETRIA

==================================================

  

Derive uma escala consistente de espaçamento a partir do design.

  

Mapeie:

  

spacing

padding

gap

margin

radius

border

shadow

container width

content width

grid

columns

  

Normalize valores próximos sempre que isso melhorar a consistência do sistema.

  

==================================================

6. LAYOUT SYSTEM

==================================================

  

Reconstrua a arquitetura visual do design.

  

Documente:

  

- viewport

- max-width

- container

- grid

- número de colunas

- gutters

- margins

- alignment rules

- vertical rhythm

- safe areas

- responsive behavior

- content hierarchy

- image behavior

  

Crie regras para:

  

Desktop

Tablet

Mobile

  

Defina breakpoints recomendados.

  

==================================================

7. COMPONENT INVENTORY

==================================================

  

Identifique os componentes presentes ou implicitamente necessários.

  

Exemplo:

  

Button

IconButton

Card

Callout

Badge

Input

Search

Navigation

Header

Footer

Sidebar

Modal

Tooltip

Tabs

Table

Section

Container

Stack

Grid

Typography

Image

Divider

  

Para cada componente, especificar:

  

- anatomy

- dimensions

- tokens utilizados

- variants

- sizes

- props

- states

- hover

- active

- focus

- disabled

- loading

- error

- responsive behavior

- accessibility requirements

  

==================================================

8. COMPONENT API

==================================================

  

Quando aplicável, proponha uma API de componente.

  

Exemplo:

  

<Button

  variant="primary"

  size="md"

  state="default"

/>

  

Não crie APIs excessivamente complexas.

  

==================================================

9. RESPONSIVE SPEC

==================================================

  

Descreva exatamente o comportamento entre breakpoints:

  

- elementos que redimensionam

- elementos que quebram linha

- elementos que mudam de posição

- grids que reduzem colunas

- tipografia responsiva

- paddings responsivos

- comportamento de imagens

- overflow

- min/max dimensions

  

==================================================

10. INTERACTION STATES

==================================================

  

Especifique quando aplicável:

  

default

hover

focus

focus-visible

pressed

selected

disabled

loading

success

warning

error

empty

  

==================================================

11. MOTION

==================================================

  

Se houver evidência ou necessidade de animação, definir:

  

duration

easing

delay

transition

entrance

exit

hover

state change

  

Caso não exista evidência suficiente, mantenha motion minimalista.

  

==================================================

12. ACCESSIBILITY

==================================================

  

Audite:

  

- contraste

- tamanho mínimo de texto

- foco visível

- hit area

- navegação por teclado

- semantic HTML

- ARIA quando necessário

- reduced motion

- legibilidade

- hierarchy

  

Indique problemas encontrados e correções.

  

==================================================

13. IMPLEMENTATION TOKENS

==================================================

  

Produza os tokens em:

  

A. design-tokens.json

B. design-tokens.yaml

C. variables.css

D. theme.css

  

Estrutura mínima:

  

:root {

  --color-brand-primary: ...;

  --color-background-canvas: ...;

  --color-text-primary: ...;

  

  --font-family-primary: ...;

  

  --space-1: ...;

  --space-2: ...;

  

  --radius-sm: ...;

  --radius-md: ...;

  

  --shadow-sm: ...;

}

  

==================================================

14. IMPLEMENTATION PACKAGE

==================================================

  

Monte o pacote final desta forma:

  

design-system/

│

├── README.md

│

├── DESIGN-SPEC.md

├── COMPONENT-SPEC.md

├── RESPONSIVE-SPEC.md

├── ACCESSIBILITY.md

│

├── tokens/

│   ├── design-tokens.json

│   ├── design-tokens.yaml

│   ├── variables.css

│   └── theme.css

│

├── styles/

│   ├── reset.css

│   ├── typography.css

│   ├── layout.css

│   └── utilities.css

│

├── components/

│   └── component-inventory.md

│

├── assets/

│   └── assets-manifest.json

│

└── qa/

    ├── visual-checklist.md

    └── implementation-checklist.md

  

==================================================

15. ASSETS MANIFEST

==================================================

  

Liste todos os assets visuais identificados:

  

asset_id

tipo

descrição

dimensão

aspect_ratio

uso

necessidade_de_exportação

formato_recomendado

  

Classificar entre:

  

SVG

PNG

JPG/WebP

Icon

Illustration

Photo

Pattern

Texture

  

==================================================

16. TRACEABILITY

==================================================

  

Para cada decisão importante, indique sua origem:

  

OBSERVED

INFERRED

NORMALIZED

RECOMMENDED

  

Exemplo:

  

color.brand.primary = #EE757E

source = OBSERVED

confidence = 0.96

  

==================================================

17. QA VISUAL

==================================================

  

Crie uma checklist que permita comparar a implementação com a referência:

  

[ ] cores

[ ] tipografia

[ ] spacing

[ ] alinhamento

[ ] grid

[ ] radius

[ ] shadows

[ ] icons

[ ] responsive

[ ] states

[ ] accessibility

  

==================================================

18. README

==================================================

  

O README deve explicar:

  

1. identidade visual

2. princípios do sistema

3. instalação

4. utilização dos tokens

5. estrutura dos arquivos

6. componentes

7. responsividade

8. assets

9. acessibilidade

10. como reproduzir novos layouts mantendo consistência

  

==================================================

19. REGRA PRINCIPAL

==================================================

  

O design anexado é a SOURCE OF TRUTH visual.

  

Não redesenhe a interface arbitrariamente.

  

Primeiro reconstrua fielmente o sistema existente.

Depois, em seção separada, apresente recomendações de melhoria.

  

Preserve:

  

- identidade

- proporções

- hierarquia

- ritmo

- linguagem visual

- intenção do design.

  

==================================================

20. ENTREGA

==================================================

  

Entregue:

  

1. Design Forensics

2. Design System Specification

3. Token Dictionary

4. Palette

5. Typography Scale

6. Spacing Scale

7. Layout/Grid System

8. Component Inventory

9. Component API

10. Responsive Rules

11. Interaction States

12. Accessibility Audit

13. Asset Manifest

14. QA Checklist

15. Developer Handoff

16. estrutura completa do package

17. conteúdo de todos os arquivos essenciais

  

A entrega deve permitir que outro agente de coding implemente a interface sem precisar reinterpretar o design original.

Para transformar também em código

Se seu objetivo final for Claude → Claude Code, eu acrescentaria ao final:

TARGET IMPLEMENTATION

  

Stack:

- Next.js

- React

- TypeScript

- Tailwind CSS

  

Além do handoff, produza uma implementação de referência.

  

Gerar:

  

src/

├── app/

├── components/

│   ├── ui/

│   └── layout/

├── styles/

├── tokens/

├── lib/

└── assets/

  

Regras:

- tokens antes de valores hardcoded;

- componentes reutilizáveis;

- TypeScript estrito;

- semantic HTML;

- responsive mobile-first;

- WCAG AA;

- nenhuma dependência desnecessária;

- nenhuma duplicação de estilos;

- nenhuma cor, radius ou spacing arbitrário quando houver token equivalente.

  

Crie também:

  

IMPLEMENTATION_PLAN.md

FILE_TREE.md

DESIGN_TO_CODE_MAP.md

QA_CHECKLIST.md

  

DESIGN_TO_CODE_MAP.md deve mapear:

  

Elemento visual → Componente → Arquivo → Tokens → Estado → Breakpoint.

Isso cria um fluxo mais sólido:

Design enviado → design-handoff → Design Forensics → Tokens → Design System → Component Specs → Package → Claude Code.

Para o seu fluxo, eu usaria esse package como SOT visual, para que carrosséis, blog, landing pages, dashboard e demais interfaces possam reutilizar exatamente os mesmos tokens, em vez de extrair novamente a identidade a cada execução.