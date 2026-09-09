Estruturei como documento canônico de evidência, separando neurociência, metodologia de derivação, schema de dados e regras do motor de execução. Onde a literatura sustenta apenas o fenômeno e não a solução digital, a decisão de produto fica explicitamente classificada como inferência.

COG-FE-001 · NEUROCIÊNCIA, SCHEMAS, METODOLOGIAS E EVIDÊNCIAS

DOCUMENT READER · VALU-MODE V3

Campo

Valor

ID

COG-FE-001

Tipo

Neurociência · Funções Executivas · Arquitetura Cognitiva

Owner

Não determinado

Versão

1.0

Data

09/09/2026

Fase

Conceituação

Projeto

Não determinado

PARA

Cognição · Produto · Design · Engenharia

Referência

Modelos neuropsicológicos de funções executivas · TDAH adulto · Project Scheduling · Flow

3#

#controle-inibitório #memória-de-trabalho #flexibilidade-cognitiva

  

1. RESUMO EXECUTIVO

O quê: formaliza a base cognitiva e metodológica utilizada para investigar quais operações tradicionalmente executadas pelo usuário podem ser externalizadas, assistidas ou automatizadas pelo sistema EXECUTAR.

Por quê: gestão de projetos e trabalho intelectual exigem planejamento, priorização, manutenção de contexto, iniciação, monitoramento, gestão temporal, adaptação e tomada recorrente de decisões. Parte desses domínios apresenta vulnerabilidades documentadas em grupos de adultos com TDAH, embora haja grande heterogeneidade entre indivíduos. ([PubMed](https://pubmed.ncbi.nlm.nih.gov/16116936/?utm_source=chatgpt.com))

Quem: adultos executando trabalho intelectual ou projetos; e equipes de produto, design e engenharia responsáveis por construir o EXECUTAR.

Como: aplicar uma cadeia explícita de derivação:

função operacional → exigência cognitiva → evidência → vulnerabilidade potencial → impacto operacional → compensação sistêmica → decisão de produto → hipótese testável.

A formulação central é:

Transferir carga executiva evitável do operador para o sistema, preservando decisão e autonomia do usuário.

Essa formulação é uma inferência de arquitetura de produto, não uma conclusão clínica.

  

2. 3P+N · APLICAÇÃO

Problema: sistemas convencionais de gestão frequentemente deixam para o operador funções como lembrar, decompor, priorizar, acompanhar dependências, reconstruir contexto, estimar capacidade e reorganizar o trabalho após interrupções.

Processo: decompor essas operações e investigar, separadamente, quais possuem correspondência com processos executivos estudados e quais podem ser parcialmente externalizadas por arquitetura, regras ou automação.

Progresso: existem fundamentos publicados para funções executivas nucleares, diferenças de desempenho executivo em grupos com TDAH, custos de troca de tarefa, modificações ambientais e modelos formais de scheduling. Não existe, a partir dessas evidências isoladamente, validação clínica das features específicas do EXECUTAR.

Next 01: implementar o schema função → falha observável → risco → compensação → feature → métrica.

Next 02: transformar cada compensação proposta em hipótese verificável de produto.

Next 03: separar permanentemente evidência científica, princípio metodológico e decisão de design.

  

3. REGRA EPISTÊMICA

Toda afirmação deste domínio deve possuir classe_epistemica.

Classe

Significado

Uso

A · Observado

Evidência observada diretamente no sistema ou pesquisa própria

Telemetria, teste, experimento

B · Primário

Fonte oficial, norma, guideline ou estudo primário diretamente consultado

NICE, PMI, experimento

C · Publicado

Revisão, meta-análise ou literatura científica publicada

Neuropsicologia, task switching

D · Interno

Regra, requisito ou arquitetura existente do EXECUTAR

WIP 1:1, Mapa-OS, Scanner

E · Inferido

Consequência proposta a partir de evidências, ainda não comprovada

Feature ou estratégia de UX

Regra crítica

SE uma publicação demonstra uma vulnerabilidade cognitivaENTÃO ela pode sustentar o problema ou mecanismo.

NÃO pode automaticamente sustentar que determinada feature é eficaz.

A relação:

evidência cognitiva → feature

deve possuir uma etapa intermediária explícita:

hipótese de compensação sistêmica.

  

4. SCHEMA 01 · FUNÇÕES EXECUTIVAS

4.1 Núcleo funcional

Um modelo amplamente utilizado descreve como funções executivas centrais:

1. controle inibitório;
2. memória de trabalho;
3. flexibilidade cognitiva.

Diamond descreve essas três como funções executivas nucleares a partir das quais capacidades de ordem superior podem ser construídas. ([PubMed](https://pubmed.ncbi.nlm.nih.gov/23020641/?utm_source=chatgpt.com))

Controle inibitório

Pergunta operacional:

“O que precisa ser ignorado, interrompido ou impedido de capturar a ação?”

Relaciona-se a:

- inibição de resposta;
- controle de interferência;
- atenção seletiva;
- resistência a respostas automáticas.

Memória de trabalho

Pergunta operacional:

“Que informação precisa permanecer disponível durante a execução?”

Relaciona-se a:

- manutenção temporária;
- manipulação de informação;
- manutenção de regras;
- contexto imediato.

Uma meta-análise específica de adultos com TDAH identificou diferenças em medidas de memória de trabalho, embora magnitude e manifestação dependam das tarefas e das amostras estudadas. ([PubMed](https://pubmed.ncbi.nlm.nih.gov/23688211/?utm_source=chatgpt.com))

Flexibilidade cognitiva

Pergunta operacional:

“Quando e como a estratégia precisa mudar?”

Relaciona-se a:

- mudança de regra;
- mudança de perspectiva;
- adaptação;
- set shifting.

  

5. SCHEMA 02 · CAPACIDADES EXECUTIVAS DERIVADAS

As três funções nucleares não representam toda a arquitetura funcional necessária ao trabalho.

Para o EXECUTAR, devem ser distinguidas das capacidades operacionais derivadas:

Capacidade

Função operacional

Planejamento

Converter objetivo em estrutura de ações

Priorização

Determinar ordem relativa de trabalho

Iniciação

Transformar intenção em início de execução

Monitoramento

Comparar estado realizado com estado esperado

Tomada de decisão

Selecionar entre alternativas

Gestão temporal

Relacionar duração, prazo, sequência e capacidade

Regulação

Manter comportamento compatível com a meta

Persistência

Sustentar trajetória até conclusão

Retomada

Reconstruir continuidade após interrupção

Essas categorias dependem do modelo teórico utilizado e não devem ser tratadas como uma taxonomia clínica universal.

  

6. SCHEMA 03 · MATRIZ COGNIÇÃO → PRODUTO

O schema canônico de cada registro será:

#

Campo

Regra

01

schema_version

Versão do contrato

02

row_id

Identificador único do registro

03

funcoes_fundamentais_gestao_projetos

Operação de gestão analisada

04

funcoes_executivas_area_gestao_projetos

Domínio executivo relacionado

05

capacidades_humanas_operacionais_exigidas

O que o operador precisa fazer

06

funcao_deficit_tdah

Vulnerabilidade investigada, sem universalização

07

fonte_clinica

Guideline ou fonte clínica

08

fonte_cientifica

Estudo, revisão ou meta-análise

09

funcao_executiva_cognitiva

Constructo cognitivo

10

evidencia

Síntese estrita do que a fonte demonstra

11

impacto_operacional_funcao_afetada

Operação afetada

12

impacto_operacional_mecanismo

Como a dificuldade pode produzir atrito

13

impacto_operacional_consequencia

Consequência observável esperada

14

impacto_operacional_compensacao

Estratégia sistêmica candidata

15

conclusao_produto_design

Decisão ou hipótese de design

16

classe_epistemica

A/B/C/D/E

17

estado_validacao

não_validado / sustentado / testando / validado / rejeitado

18

observacoes

Limitações, exceções e contexto

  

7. CONTRATO SEMÂNTICO DO SCHEMA

funcao_deficit_tdah

Não deve conter formulações como:

pessoas com TDAH não conseguem planejar.

Forma permitida:

estudos de grupo identificam diferenças em determinadas medidas de planejamento ou funcionamento executivo, com heterogeneidade individual.

Meta-análises encontraram diferenças executivas em adultos com TDAH, mas também mostram que déficits executivos não são universais nem suficientes para explicar todos os casos. ([PubMed](https://pubmed.ncbi.nlm.nih.gov/16116936/?utm_source=chatgpt.com))

impacto_operacional_compensacao

Deve ser formulado como:

estratégia candidata para reduzir a demanda

e não:

tratamento da dificuldade.

conclusao_produto_design

Toda feature derivada deve inicialmente possuir:

classe_epistemica = E

até que dados próprios permitam elevar sua validação.

  

8. METODOLOGIA · COG → OPS → PRODUCT

Etapa 01 · Identificar operação humana

Exemplo:

recalcular continuamente qual tarefa fazer

Não iniciar pela condição clínica.

Iniciar pela operação exigida pelo trabalho.

  

Etapa 02 · Identificar demanda cognitiva

Exemplo:

manutenção de múltiplas alternativas + comparação + seleção + memória de dependências

  

Etapa 03 · Localizar evidência

Perguntar:

- o constructo possui suporte científico?
- existe evidência específica em adultos?
- existe evidência específica para TDAH?
- qual é a magnitude e a consistência?
- a evidência é experimental, observacional ou inferida?

  

Etapa 04 · Definir falha observável

Exemplo:

usuário abre o sistema e precisa reconstruir quais tarefas continuam elegíveis.

A falha deve ser observável independentemente de diagnóstico.

  

Etapa 05 · Identificar impacto operacional

Exemplo:

aumento de tempo de retomada.

  

Etapa 06 · Projetar compensação sistêmica

Exemplo:

persistir estado anterior e calcular conjunto elegível automaticamente.

  

Etapa 07 · Derivar feature

Exemplo:

Next Action.

  

Etapa 08 · Formular hipótese

Exemplo:

SE o sistema preservar contexto e recomendar uma ação elegívelENTÃO o tempo entre abertura e retomada da execução deve diminuir.

  

Etapa 09 · Definir métrica

Exemplo:

time_to_resume_seconds.

  

Etapa 10 · Validar

Somente após evidência observada no produto a hipótese deixa de ser puramente inferencial.

  

9. MATRIZ · GESTÃO → EXIGÊNCIA → COMPENSAÇÃO

Operação tradicionalmente humana

Demanda

Sistema pode assumir/assistir

lembrar trabalho aberto

memória/contexto

memória externa persistente

decompor projeto

planejamento

decomposição assistida

priorizar continuamente

decisão/planejamento

motor de prioridade

escolher próximo passo

seleção

Next Action

reconstruir contexto

memória de trabalho

estado persistente

estimar capacidade

estimativa temporal

throughput observado + capacidade

lembrar prazo

memória prospectiva

sistema temporal

acompanhar dependências

planejamento/contexto

dependency graph

perceber progresso

monitoramento

progressão automática

determinar conclusão

monitoramento

DoD verificável

reorganizar após interrupção

planejamento/flexibilidade

replanejamento

navegar múltiplas superfícies

atenção/contexto

centralização por objeto

As entradas da terceira coluna são hipóteses de compensação sistêmica, não intervenções clínicas comprovadas.

  

10. EVIDÊNCIAS · FUNÇÕES EXECUTIVAS E TDAH

EV-01 · Funções executivas nucleares

Proposição: inibição, memória de trabalho e flexibilidade cognitiva constituem um modelo amplamente utilizado de funções executivas nucleares.

Classe: C · Publicado.

Evidência: revisão de Adele Diamond. ([PubMed](https://pubmed.ncbi.nlm.nih.gov/23020641/?utm_source=chatgpt.com))

Implicação permitida: utilizar esses constructs como taxonomia analítica.

Não permite concluir: que qualquer produto construído sobre eles seja eficaz.

  

EV-02 · Funcionamento executivo em adultos com TDAH

Proposição: estudos de grupo identificam diferenças de desempenho em diversos domínios executivos em adultos com TDAH.

Classe: C · Publicado.

Uma meta-análise encontrou efeitos moderados em fluência, inibição e set shifting. Outra revisão ampla encontrou diferenças relevantes em atenção, inibição e memória. Os próprios resultados indicam heterogeneidade e limitações de especificidade. ([PubMed](https://pubmed.ncbi.nlm.nih.gov/16116936/?utm_source=chatgpt.com))

Regra: nunca converter associação de grupo em característica obrigatória de um indivíduo.

  

EV-03 · Não universalidade

Proposição: dificuldades executivas são relevantes para a neuropsicologia do TDAH, mas não são necessárias nem suficientes para explicar todos os casos.

Classe: C · Publicado.

Meta-análise de 83 estudos encontrou diferenças em tarefas executivas, mas destacou efeitos moderados e ausência de universalidade. ([PubMed](https://pubmed.ncbi.nlm.nih.gov/15950006/?utm_source=chatgpt.com))

Implicação de produto: arquitetura adaptativa é preferível a pressupor uma única configuração cognitiva.

Classe da implicação: E · Inferido.

  

11. EVIDÊNCIA · TEMPO

Uma revisão de estudos sobre percepção temporal em adultos com TDAH encontrou resultados sugerindo dificuldades em alguns aspectos de estimação e gestão temporal, mas destacou pequena quantidade de estudos, diferenças metodológicas e resultados não uniformes. ([PubMed Central (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9962130/?utm_source=chatgpt.com))

Portanto:

Permitido:

gestão temporal é um domínio relevante para investigação.

Não permitido:

pessoas com TDAH não percebem tempo corretamente.

Hipótese de produto

substituir parte da estimativa subjetiva por capacidade observada e duração histórica pode reduzir erro de planejamento.

Classe: E · Inferido.

  

12. EVIDÊNCIA · MODIFICAÇÕES AMBIENTAIS

O NICE inclui modificações ambientais na gestão do impacto funcional do TDAH e fornece exemplos como reduzir distrações, estruturar períodos menores de foco e reforçar solicitações verbais com informação escrita. ([Nice](https://www.nice.org.uk/guidance/ng87/chapter/recommendations))

Interpretação correta

Isso sustenta o princípio:

o ambiente pode ser configurado para reduzir demandas desnecessárias.

Não sustenta diretamente:

- Scanner;
- WIP 1:1;
- Mapa-OS;
- Copiloto;
- Next Action;
- layout específico;
- automação específica.

Essas continuam sendo decisões de design a serem testadas.

  

13. EVIDÊNCIA · TROCA DE CONTEXTO

Pesquisa experimental sobre task switching encontra consistentemente custos de troca: respostas tendem a ficar mais lentas e frequentemente mais sujeitas a erro imediatamente após mudança de tarefa. Preparação pode reduzir, mas não necessariamente eliminar, esse custo. ([PubMed](https://pubmed.ncbi.nlm.nih.gov/12639695/?utm_source=chatgpt.com))

Hipótese EXECUTAR

Estratégia: reduzir alternâncias desnecessárias entre task sets por meio de:

- agrupamento semântico;
- WIP limitado;
- continuidade de contexto;
- ação ativa única;
- atalhos para retomada.

Classe: E · Inferido.

Não afirmar:

WIP 1:1 elimina custo cognitivo.

A formulação adequada é:

WIP 1:1 é uma estratégia de design candidata a reduzir concorrência entre trabalhos ativos e alternâncias desnecessárias.

  

14. METODOLOGIA · FLOW E WIP

O Kanban Method estabelece limitação de trabalho em progresso como prática de gestão de fluxo e associa entrada de novo trabalho à disponibilidade de capacidade no estágio correspondente. ([Kanban University](https://resources.kanban.university/principles-general-practices-kanban-method/?utm_source=chatgpt.com))

Uso no EXECUTAR

Kanban fornece fundamento metodológico para:

limitar trabalho concorrente.

A regra específica:

WIP = 1 ação ativa

é uma configuração interna do EXECUTAR.

Classe:

- limitação de WIP como método: B/C;
- WIP 1:1 como configuração do produto: D;
- alegação de vantagem cognitiva: E até validação.

  

15. METODOLOGIA · SCHEDULING

Problemas formais de project scheduling modelam atividades sujeitas a relações de precedência, disponibilidade de recursos e outras restrições. O RCPSP é um problema clássico no qual atividades são programadas considerando simultaneamente precedência e recursos limitados. ([ScienceDirect](https://www.sciencedirect.com/science/article/pii/S0377221721003982?utm_source=chatgpt.com))

O PMI também trata dependências, modelos de cronograma e manutenção de schedules como componentes fundamentais do gerenciamento de cronogramas. ([Project Management Institute](https://www.pmi.org/standards/scheduling-third-edition?utm_source=chatgpt.com))

Implicação arquitetural

O plano do EXECUTAR não precisa ser armazenado como uma lista linear.

Pode ser armazenado como:

grafo de atividades + dependências + restrições + estado.

A interface, porém, pode apresentar:

uma próxima ação.

Essa separação é essencial:

complexidade estrutural no backend; simplicidade decisória no frontend.

  

16. SCHEMA 04 · MOTOR ADAPTATIVO DE EXECUÇÃO

Objetivo

Converter um plano potencialmente não linear em uma recomendação executável compatível com restrições reais.

Entrada mínima

CURRENT_STATE

AVAILABLE_TIME

ELIGIBLE_ACTIONS

DEPENDENCIES

HARD_CONSTRAINTS

WIP_STATE

CONTEXT

CAPACITY

Saída

NEXT_ACTION

WHY_THIS_ACTION

EXPECTED_DURATION

DEPENDENCY_STATE

COMPLETION_EVIDENCE

FALLBACK_ACTION

  

17. PRINCÍPIO DO DISPATCHER

O grafo mantém múltiplos caminhos válidos.

O executor recebe uma recomendação por vez.

Fluxo:

PLANO

  ↓

GRAFO DE DEPENDÊNCIAS

  ↓

APLICAR RESTRIÇÕES DURAS

  ↓

IDENTIFICAR AÇÕES ELEGÍVEIS

  ↓

APLICAR CAPACIDADE DISPONÍVEL

  ↓

ORDENAR CANDIDATOS

  ↓

NEXT ACTION

  

18. RESTRIÇÕES DURAS ≠ PONTUAÇÃO

Não misturar:

- dependência;
- capacidade;
- WIP;
- elegibilidade;

com:

- prioridade;
- valor;
- adequação cognitiva;
- progresso.

Primeiro filtrar o que pode ser executado.

Depois pontuar o que deve ser recomendado.

  

19. SCHEMA 05 · DISPATCHER

eligible(action) =

    dependency_state == READY

    AND hard_constraints == SATISFIED

    AND duration <= available_capacity

    AND wip_rule == SATISFIED

Depois:

rank(action) =

    FLOW_PRIORITY

    + VALUE_PRIORITY

    + CONTEXT_FIT

A fórmula definitiva ainda é PROPOSED.

Nenhuma soma linear simples deve ser considerada validada antes de teste.

  

20. TRÊS CLASSES DE PONTUAÇÃO

20.1 Progresso

Mede realização.

Não decide necessariamente prioridade.

Exemplos:

- entregável concluído;
- valor agregado;
- percentual verificável;
- evidência entregue.

O EVM do PMI integra escopo, cronograma e recursos para medição objetiva de desempenho e previsão do resultado do projeto. ([Project Management Institute](https://www.pmi.org/standards/earned-value-management?utm_source=chatgpt.com))

  

20.2 Prioridade de fluxo

Decide sequência.

Possíveis componentes:

- dependência desbloqueada;
- caminho crítico;
- custo de atraso;
- valor;
- risco;
- tamanho do trabalho.

WSJF é um método de priorização no SAFe baseado, em essência, na relação entre custo relativo de atraso e duração/tamanho relativo do trabalho. ([Scaled Agile Framework](https://framework.scaledagile.com/wsjf/?frame=0&iOS=&nav=1%252525253Frefid%252525253Dorganic%2525253Frefid%2525253Dorganic%253Frefid%253Dorganic&utm_source=chatgpt.com))

Uso: referência metodológica.

Não usar como: explicação clínica.

  

20.3 Adequação contextual/cognitiva

Determina compatibilidade entre uma ação elegível e o estado operacional atual.

Possíveis variáveis:

- tempo disponível;
- contexto;
- superfície disponível;
- necessidade de concentração;
- custo de troca;
- local;
- recursos necessários.

Esta camada é uma proposição específica do EXECUTAR.

Classe: D/E.

  

21. PRINCÍPIO DE REPLANEJAMENTO

Uma intercorrência não deve converter:

plano original indisponível

em:

nenhuma ação possível.

O motor deve buscar:

ação planejada indisponível

        ↓

recalcular conjunto elegível

        ↓

preservar objetivo/entregável

        ↓

selecionar outro trabalho válido

        ↓

continuar progresso

Essa lógica é coerente com problemas de scheduling sujeitos a precedência e capacidade, nos quais uma solução precisa respeitar restrições enquanto organiza atividades disponíveis. ([ScienceDirect](https://www.sciencedirect.com/science/article/pii/S0377221721003982?utm_source=chatgpt.com))

A implementação específica do fallback é uma decisão do EXECUTAR.

  

22. SELETOR · “QUANTO TEMPO VOCÊ TEM?”

Papel

Não é um estimador de produtividade.

É uma entrada de restrição para o dispatcher.

available_time = user_input

O motor consulta:

eligible_actions

WHERE estimated_duration <= available_time

e mantém:

- dependências;
- WIP;
- restrições;
- prioridade de fluxo.

Hipótese

SE a disponibilidade real for utilizada antes da recomendaçãoENTÃO o sistema deverá reduzir recomendações impossíveis de executar naquele intervalo.

Classe: E.

Métrica candidata:

recommendation_rejection_due_to_time.

  

23. MATRIZ CANÔNICA · FUNÇÃO → RISCO → RECURSO

Função

Falha observável

Risco operacional

Compensação candidata

Recurso

Planejamento

objetivo não vira sequência

paralisia estrutural

decomposição

Copiloto

Priorização

múltiplos itens parecem igualmente urgentes

decisão recorrente

ordenação sistêmica

Dispatcher

Memória de trabalho

contexto precisa ser reconstruído

retomada lenta

estado persistente

Check-in/Checkout

Inibição

alternativas concorrentes permanecem visíveis

dispersão

redução de concorrência

WIP 1:1

Gestão temporal

trabalho excede janela disponível

abandono/replanejamento

capacidade como restrição

Seletor de tempo

Flexibilidade

plano bloqueado interrompe progresso

paralisação

buscar caminho elegível

Replanejamento

Monitoramento

conclusão não é verificável

falsa conclusão

evidência/DoD

Scanner/Reports

Troca de contexto

alternância frequente entre conjuntos de tarefa

custo de retomada

agrupamento

Clusters semânticos

Memória prospectiva

prazo/retomada dependem de lembrança

perda de continuidade

sistema temporal

Automação

Visualização

informação concorrente excessiva

sobrecarga operacional

exposição progressiva

UI neuroadaptada

A coluna compensação candidata deve permanecer inferencial até validação própria.

  

24. TAXONOMIA CONTROLADA

Termos canônicos:

neurodivergence

adhd

tdah

executive_function

executive_dysfunction

working_memory

inhibition

attention

time_perception

task_initiation

cognitive_flexibility

emotional_regulation

task_switching

prospective_memory

planning

prioritization

monitoring

decision_making

capacity

wip

dependency

scheduling

context_persistence

Regra

Preferir um termo canônico por conceito e utilizar aliases somente para busca.

Exemplo:

canonical_term: working_memory

aliases:

  - memória de trabalho

  - working-memory

  

25. ARQUITETURA DA EVIDÊNCIA

Cada decisão de produto deve manter rastreabilidade:

EVIDÊNCIA

    ↓

CONSTRUCTO

    ↓

EXIGÊNCIA HUMANA

    ↓

FALHA OBSERVÁVEL

    ↓

RISCO OPERACIONAL

    ↓

HIPÓTESE DE COMPENSAÇÃO

    ↓

FEATURE

    ↓

MÉTRICA

    ↓

TESTE

    ↓

RESULTADO

    ↓

DECISÃO

Exemplo:

Task Switching Research

↓

switch cost

↓

alternar task sets

↓

tempo de retomada aumenta

↓

fragmentação da execução

↓

reduzir alternância desnecessária

↓

agrupamento semântico + WIP

↓

tempo de retomada / erros

↓

experimento

↓

evidência observada

  

26. MATRIZ DE VALIDAÇÃO

Proposição

Evidência atual

Classe

Estado

Inibição, memória de trabalho e flexibilidade são funções executivas nucleares em modelo relevante

Literatura

C

Sustentado

Adultos com TDAH podem apresentar diferenças executivas

Meta-análises

C

Sustentado

Essas diferenças são universais

Evidência contrária à universalidade

C

Rejeitado

Gestão temporal merece investigação no TDAH adulto

Revisão

C

Sustentado com ressalvas

Trocas de tarefa produzem switch costs

Pesquisa experimental/revisões

B/C

Sustentado

Modificação do ambiente pode reduzir demandas funcionais

NICE

B

Sustentado

WIP 1:1 reduz carga cognitiva no EXECUTAR

Ainda sem teste próprio

E

Não validado

Estado persistente melhora retomada

Hipótese de produto

E

Não validado

Scanner reduz necessidade de navegação digital

Hipótese de produto

E

Não validado

Dispatcher por capacidade melhora execução

Hipótese de produto

E

Não validado

Agrupamento semântico reduz custo operacional de switching

Derivação

E

Não validado

Sistema pode assumir parte da gestão sem reduzir autonomia

Princípio arquitetural

D/E

Proposto

  

27. PRINCÍPIO FINAL

A neurociência não deve ser utilizada para decorar features com justificativas posteriores.

O fluxo correto é:

evidência → mecanismo → risco → hipótese → design → teste.

Não:

feature → procurar explicação neurocientífica.

O EXECUTAR deve portanto tratar sua arquitetura cognitiva como um sistema de hipóteses rastreáveis.

A tese documental consolidada de COG-FE-001 passa a ser:

A gestão de trabalho transfere ao operador numerosas funções de planejamento, memória, atenção, gestão temporal, monitoramento e decisão. Alguns desses domínios apresentam vulnerabilidades documentadas em grupos de adultos com TDAH, sem universalidade individual. Há fundamento para investigar arquiteturas que externalizem operações cognitivas evitáveis. A eficácia das compensações específicas do EXECUTAR, porém, deve ser demonstrada por validação própria.

Fórmula operacional

ENTENDER

identificar contexto, capacidade e restrições.

↓

ESTRUTURAR

converter objetivo em grafo, entregáveis, dependências e ações.

↓

EXECUTAR

reduzir o conjunto elegível a uma recomendação executável.

↓

EMITIR

converter execução em estado, evidência, progresso e replanejamento.

Resultado arquitetural esperado

complexidade preservada no sistema → simplicidade apresentada ao executor.

A separação mais importante ficou formalizada: PMI/Kanban/WSJF/scheduling fundamentam mecanismos de gestão; neuropsicologia/NICE/task switching fundamentam problemas ou princípios cognitivos; a união dos dois no desenho do EXECUTAR continua sendo uma hipótese de produto até existir evidência observada no próprio sistema.