# Layout Archetypes — extraídos de CARDS_DESIGN_REFERENCE_PACK_V1

**Regra de leitura obrigatória:** as 21 imagens deste pack pertencem a produtos de terceiros com paletas de cor próprias (roxo, azul, verde-claro, preto/branco puro, etc.). **Nenhuma cor deste documento é adotada.** Apenas arquitetura — grid, hierarquia, densidade, composição, comportamento responsivo — é incorporada, conforme a regra do próprio `references/CARDS_DESIGN_REFERENCE_PACK_V1/README.md` ("referências, não especificações absolutas") e a decisão do usuário registrada em `../00_GOVERNANCE/SOT_RESOLUTION.md`. Cada padrão abaixo cita o `asset_id` de origem (ver `../assets/assets-manifest.json`).

Ordem de leitura seguida (a mesma recomendada pelo README do pack): `01_FOUNDATIONS → 02_COMPONENTS → 03_CARDS → 04_LAYOUTS_WIREFRAMES → 05_STATES_FEEDBACK → 06_VISUAL_LANGUAGE`.

## 01 — Foundations

**`DSREF-FND-001`** (referência de tipografia em dark UI): hierarquia por peso + tamanho, não por cor — título da página em peso alto (~28px), corpo em peso regular (~15px), metadado/preço em números grandes com sufixo pequeno ("`$4` `USD`"), rótulos de lista em uppercase pequeno. Seleção de plano marcada por **borda** ao redor do card, não por preenchimento — padrão reaproveitável para o estado `selected` de `RadioCard`/plano.

**`DSREF-FND-002`** (grid de ícones): grade 5 colunas × 5 linhas, tamanho consistente (~64px por célula), mistura de estilo *filled* (superfícies sólidas, para ações primárias/de app) e *outline* (para ações secundárias/utilitárias) dentro do mesmo grid — confirma a necessidade de pelo menos duas densidades de peso de ícone (ver `DESIGN-SPEC.md §6` sobre linhas finas). Não determina o traçado exato (isso é `DS-FORM-001-ICO-003`, pendente).

**`DSREF-FND-003`** (set de ícones de ação, dark): ícones em superfície escura com contêiner circular/quadrado arredondado — reforça `radius.pill`/`radius.md` como contêiner de `IconButton`.

## 02 — Components

**`DSREF-CMP-001`** (form-card em camadas): card branco empilhado (2-3 camadas visíveis atrás, simulando profundidade/pilha de perguntas), barra de progresso segmentada no topo, título de pergunta, lista de opções via **radio** com alvo de toque generoso, rodapé fixo com `Back` (texto) + `Next` (botão sólido, alto contraste). **Arquétipo reaproveitável:** wizard/form multi-step com stack visual + progress dots + navegação de dois níveis de peso (texto vs. botão sólido) — mapeia diretamente para `SPEC-BUTTON-001` (hierarquia primário/terciário).

**`DSREF-CMP-002`** (seção de processo/stepper): 4 etapas sequenciais em grid horizontal, cada uma com número, ilustração de linha simples, título curto e texto de apoio — arquétipo direto para o padrão de "Aplicação do sistema"/onboarding do próprio EXECUTAR (slide 10 do handoff pack usa a mesma ideia).

## 03 — Cards

Padrão comum às 7 referências (`DSREF-CRD-001` a `007`): **um objeto/ilustração hero ocupando 40-60% da área do card**, título curto (2 linhas no máximo), texto de apoio de 1-2 linhas, e **um único CTA ou indicador de status** por card — nunca os dois competindo (reforça a regra `SPEC-LAYOUT-002` de não empilhar múltiplos elementos de mesmo peso). Cards de dados (`DSREF-CRD-003`) usam tabs para alternar contexto sem crescer a altura do card. Cards promocionais (`DSREF-CRD-007`) usam proporção mais vertical (retrato) e tipografia maior que os cards funcionais.

## 04 — Layouts / Wireframes

**`DSREF-LAY-001`** (grid modular de widgets, estilo "bento"): composição em blocos de tamanhos variáveis dentro de uma grade comum — um bloco hero 2/3 + lista de navegação 1/3 na primeira linha; na segunda linha, três blocos menores de larguras desiguais (card quadrado, barra de busca, card de vídeo); terceira linha com card de perfil + controles de paginação + fileira de tags/pills. **Arquétipo reaproveitável para dashboards do App:** grid de larguras desiguais sobre a mesma unidade de grid (`grid.columns-desktop`), não um grid uniforme de cards idênticos.

**`DSREF-LAY-002`** (wireframe de landing editorial, "tactile brutalism"): header com logo + nav horizontal + CTA à direita; hero em duas colunas (texto grande à esquerda, ilustração de linha à direita); grid de 4 colunas com ícone + número + título + texto (features); seção dividida ao meio (prova social à esquerda, CTA de conversão à direita); footer simples de uma linha. **Este wireframe é a base do padrão "hero split + grid de features + CTA final"** reaproveitável para a home do Blog/marketing.

## 05 — States / Feedback

Padrão comum às 4 referências: **ilustração isométrica de linha centralizada, título curto, subtítulo de 1-2 linhas, e um único CTA em pill** (`DSREF-STA-001/002/004`) ou **confirmação de sucesso com o mesmo layout mas sem CTA persistente** (`DSREF-STA-003`). Nenhum destes estados usa cor para comunicar "vazio" vs. "sucesso" — a diferença é só na ilustração e no texto, confirmando a regra `COL-002` (não depender só de cor). Arquétipo direto para `EmptyState`/`SuccessState` do `COMPONENT-SPEC.md`.

## 06 — Visual Language

**`DSREF-VIS-001/002/003`**: diagramas técnicos com objetos isométricos conectados por linhas finas, rótulos minimalistas, densidade baixa-a-média — confirma ponto a ponto as regras já `OBSERVED` em `ADR-SYSTEM.md` (`SPEC-PERSPECTIVE-001/002`, `SPEC-INFOGRAPHIC-001`): um assunto principal, poucos rótulos, grid sutil, no máximo 2 cores de acento. Estas três referências **corroboram** a decisão já aceita, não introduzem nada novo.

## Síntese — padrões prontos para reuso

| Padrão | Origem | Onde aplicar no EXECUTAR |
|---|---|---|
| Wizard com stack + progress dots | `DSREF-CMP-001` | Onboarding do App, formulários longos |
| Stepper horizontal 4 etapas | `DSREF-CMP-002` | "Aplicação do sistema" (slide 10), onboarding editorial |
| Card com 1 hero + 1 CTA/status | `DSREF-CRD-001..007` | `Card`/`PostCard`/feature cards |
| Grid bento de larguras desiguais | `DSREF-LAY-001` | Dashboard do App |
| Hero split + grid 4-col + CTA final | `DSREF-LAY-002` | Home do Blog / landing de marketing |
| Empty/Success state centralizado | `DSREF-STA-001..004` | Qualquer lista vazia do App/Blog |
| Diagrama isométrico com rótulos mínimos | `DSREF-VIS-001..003` | Assets gerados automaticamente (ver `DESIGN-SPEC.md §6`) |
