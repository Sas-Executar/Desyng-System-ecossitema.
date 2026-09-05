# CARDS DESIGN REFERENCE PACK V1

Pacote normalizado de referências visuais para **design forensics, design system, design handoff e implementação**.

## Objetivo

Usar as 21 referências como corpus visual para um agente/skill extrair **tokens, paleta, tipografia, espaçamento, grid, componentes, estados, iconografia, linguagem de ilustração e regras responsivas**, mantendo rastreabilidade entre o arquivo original e o asset normalizado.

## Estrutura

```text
CARDS_DESIGN_REFERENCE_PACK_V1/
├── README.md
├── 00_DOCUMENTATION/
│   ├── MASTER_INDEX.csv
│   ├── MASTER_INDEX.json
│   └── MASTER_INDEX.md
├── 01_FOUNDATIONS/            # tipografia e iconografia
├── 02_COMPONENTS/             # componentes e seções reutilizáveis
├── 03_CARDS/                  # feature, data e promotional cards
├── 04_LAYOUTS_WIREFRAMES/     # grids, widgets e wireframes
├── 05_STATES_FEEDBACK/        # empty/success states
└── 06_VISUAL_LANGUAGE/        # isometria, diagramas e infográficos
```

## Convenção de nomes

```text
DSREF-[CAT]-[NNN]__[descricao-kebab-case].[ext]
```

| Código | Significado |
|---|---|
| `FND` | Foundations |
| `CMP` | Components |
| `CRD` | Cards |
| `LAY` | Layouts / Wireframes |
| `STA` | States / Feedback |
| `VIS` | Visual Language |

Exemplo: `DSREF-CRD-003__analytics-data-card.jpg`.

## Master Index

O arquivo `00_DOCUMENTATION/MASTER_INDEX.csv` é a fonte operacional principal e registra para cada asset: ID, categoria, nome original, nome padronizado, caminho, tipo visual, descrição, foco de extração, dimensões, proporção, orientação, tamanho, SHA-256 e status.

`MASTER_INDEX.json` é indicado para agentes e pipelines; `MASTER_INDEX.md` é a versão legível para inspeção humana.

## Ordem recomendada de leitura pela skill

1. `01_FOUNDATIONS` → inferir tipografia, ícones, contraste e primitivas visuais.
2. `02_COMPONENTS` → identificar anatomia, variantes, espaçamentos e estados de componentes.
3. `03_CARDS` → normalizar superfícies, radius, sombras, hierarquia, CTAs e data visualization.
4. `04_LAYOUTS_WIREFRAMES` → derivar grid, containers, gutters, composição e responsividade.
5. `05_STATES_FEEDBACK` → definir empty/success states e padrões de feedback.
6. `06_VISUAL_LANGUAGE` → codificar isometria, diagramas, ilustrações técnicas e infográficos.

## Regra de Source of Truth

Os arquivos deste pacote são **referências**, não especificações absolutas: a skill deve classificar cada conclusão como `OBSERVED`, `INFERRED`, `NORMALIZED` ou `RECOMMENDED`, evitando transformar estimativas visuais em fatos sem sinalização.

## Saída esperada do design handoff

```text
design-system/
├── README.md
├── DESIGN-SPEC.md
├── COMPONENT-SPEC.md
├── RESPONSIVE-SPEC.md
├── ACCESSIBILITY.md
├── tokens/
│   ├── design-tokens.json
│   ├── design-tokens.yaml
│   ├── variables.css
│   └── theme.css
├── styles/
├── components/
├── assets/
└── qa/
```

## Critério de conclusão

O pacote está pronto quando qualquer agente de design/coding consegue navegar pelos IDs, localizar a referência correspondente no `MASTER_INDEX`, extrair as regras visuais e mapear a implementação sem depender dos nomes originais.
