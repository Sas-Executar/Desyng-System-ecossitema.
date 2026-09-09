UNIT-ECON-001 · EXECUTAR — Unit Economics Brasil

Data-base: 09/09/2026  
Status: PROPOSED_FROM_BENCHMARKObjetivo: testar a sustentabilidade dos preços de R$49,90 / R$79,90 / R$109.

A conclusão principal é:

R$49,90 Solo é sustentável. R$79,90 Pro é sustentável com franquias de IA/WhatsApp. R$109 Business é tecnicamente sustentável por seat, mas fraco para um modelo B2B com venda assistida; precisa de mínimo de seats, platform fee ou preço maior.

1. Premissas externas verificadas

IA: a API atualmente custa, por milhão de tokens, US$0,20 entrada / US$1,20 saída no GPT-5.6 Luna; US$2 / US$12 no Terra; e US$4 / US$20 no Sol. 

Para converter custos, usei PTAX de venda de R$5,0856/US$ em 08/09/2026, último fechamento disponível do Banco Central. 

No Stripe Brasil, cartão nacional custa 3,99% + R$0,39, Pix 1,19% e, caso usemos Stripe Billing para assinaturas, há mais 0,7% do volume faturado. 

Para Simples Nacional, determinadas atividades de software/licenciamento estão sujeitas ao fator R: com fator R ≥28%, podem cair no Anexo III; abaixo de 28%, no Anexo V. O Anexo III começa em 6% e o V em 15,5%. 

No WhatsApp, usei propositalmente a estrutura pós-1º de outubro de 2026, porque é a que importa para sustentabilidade futura. A Meta passa a cobrar também mensagens de serviço; a referência brasileira do rate card é cerca de R$0,035 por mensagem operacional/utility/service, e a Twilio adiciona US$0,005 por mensagem quando usada como BSP. 

  

2. Cenário-base que simulei

Não são números já observados do EXECUTAR. São hipóteses explícitas para podermos testar o negócio.

Variável

Hipótese-base

Tributação

9%

Pagamentos

75% cartão / 25% Pix

Billing

Stripe Billing 0,7%

Solo WhatsApp

0 msg incluída

Pro WhatsApp

60 msgs/mês

Business WhatsApp

100 msgs/seat/mês

Infra/suporte variável Solo

R$3

Infra/suporte Pro

R$5

Infra/suporte Business

R$8

Os 9% de imposto não são uma alíquota jurídica fixa. É uma aproximação de uma empresa já crescendo dentro do Anexo III.

  

3. Custo de IA

Eu não modelaria EXECUTAR usando Sol em tudo.

A arquitetura econômica correta é:

ação simples

→ Luna

  

estruturação/análise média

→ Terra

  

decisão/replanejamento complexo

→ Sol

Solo

Routing assumido:

- 85% Luna;
- 12% Terra;
- 3% Sol;
- 700 mil tokens de entrada/mês;
- 120 mil tokens de saída/mês.

COGS estimado:

R$3,75/user/mês

Pro

- 75% Luna;
- 20% Terra;
- 5% Sol;
- 1M input;
- 200k output.

COGS:

R$8,19/user/mês

Business

- 60% Luna;
- 30% Terra;
- 10% Sol;
- 1M input;
- 200k output.

COGS:

R$12,12/user/mês

Isso mostra por que não devemos vender “IA ilimitada”.

A franquia é necessária para proteger margem.

  

4. WhatsApp

Considerando pós-outubro/2026 e Twilio:

Custo aproximado por mensagem operacional:

Meta ≈ R$0,035

+

Twilio US$0,005 × R$5,0856

≈ R$0,0254

  

Total ≈ R$0,0604/mensagem

Assim:

Plano

Uso-base

COGS/mês

Solo

0

R$0

Pro

60 msgs

R$3,63

Business

100 msgs

R$6,04

Se usarmos Meta Cloud API diretamente, parte desse custo de BSP pode desaparecer.

Isso é economicamente relevante.

O WhatsApp deveria ser tratado como:

franquia incluída + excedente, não ilimitado.

  

5. Gateway

No mix 75% cartão / 25% Pix:

Plano

Payments

Billing

Total aprox.

Solo R$49,90

R$1,93

R$0,35

R$2,28

Pro R$79,90

R$2,92

R$0,56

R$3,48

Business R$109

R$3,88

R$0,76

R$4,64

Portanto, o gateway consome aproximadamente 4–4,6% do ticket neste cenário.

  

6. Margem por plano

Agora juntando tudo.

  

Solo

Pro

Business

Receita

R$49,90

R$79,90

R$109,00

Imposto 9%

-4,49

-7,19

-9,81

Gateway + Billing

-2,28

-3,48

-4,64

IA

-3,75

-8,19

-12,12

WhatsApp

—

-3,63

-6,04

Infra/suporte variável

-3,00

-5,00

-8,00

Contribuição

R$36,37

R$52,41

R$68,38

Margem

72,9%

65,6%

62,7%

Isso é antes de:

- salários fixos;
- desenvolvimento;
- marketing;
- jurídico/contabilidade;
- despesas administrativas;
- CAC.

É uma margem de contribuição unitária, não lucro líquido.

  

7. Resultado

Solo — R$49,90

Está bom.

72,9% de contribuição no cenário-base.

Eu manteria.

Há espaço para:

- aquisição;
- descontos anuais;
- eventual aumento de IA;
- suporte.

Pro — R$79,90

Funciona, mas já entra em uma zona mais sensível.

65,6%.

O problema não é o preço isoladamente. É prometer simultaneamente:

- IA intensa;
- automações;
- WhatsApp;
- MCP;
- múltiplas sincronizações;
- replanejamento ilimitado.

O plano precisa ter quotas/allowances.

Business — R$109

Margem unitária:

62,7%.

Não é ruim.

Mas isso ainda não inclui o principal custo B2B:

vendas + implantação + customer success.

Por isso R$109 funciona melhor como preço por seat dentro de uma conta multiusuário, não como assinatura Business de um único usuário.

  

8. CAC

O benchmark SaaS geralmente usa dois guardrails:

LTV/CAC ≥ 3×  
CAC payback <12 meses.

Referências brasileiras também destacam que, pelo custo do capital local, buscar payback ainda menor é desejável. 

Para EXECUTAR eu adotaria metas mais rígidas:

Plano

CAC alvo

Solo

≤ R$90

Pro

≤ R$160

Business

≤ R$1.200/conta

Esses são targets, não CAC observado.

  

9. Payback

Com as margens calculadas:

Solo

CAC R$90

÷

R$36,37 contribuição

=

2,47 meses

Pro

R$160

÷

R$52,41

=

3,05 meses

Business

Aqui mudaria a unidade.

Não venderia Business como 1 seat.

Suponha mínimo de 5 seats:

5 × R$68,38

=

R$341,90 contribuição mensal

Com CAC de R$1.200 por conta:

R$1.200 ÷ R$341,90

≈ 3,5 meses

Isso é muito mais saudável.

  

10. Churn e LTV

Cenário-base hipotético:

Plano

Churn mensal

Solo

5%

Pro

3,5%

Business

2%

LTV de contribuição simplificado:

Margem mensal / churn mensal

Resulta aproximadamente em:

Plano

LTV de contribuição

Solo

R$727

Pro

R$1.498

Business

R$3.419/seat

Business 5 seats

R$17.095/conta

Comparado ao CAC alvo:

Plano

LTV/CAC

Solo

8,1×

Pro

9,4×

Business 5 seats

14,2×

Esses números parecem excelentes, mas dependem totalmente de o churn e o CAC reais confirmarem as hipóteses.

  

11. ARPU real

Com mix hipotético:

55% Solo

35% Pro

10% Business

ARPU de tabela:

R$66,31/mês

Porém, se 60% da base estiver no anual pelos valores anteriormente propostos:

- Solo R$499;
- Pro R$799;
- Business R$1.090;

o ARPU reconhecido cai para aproximadamente:

R$59,68/mês.

Isso é importante.

Não devemos fazer projeção financeira usando R$79 ou R$109 como “ARPU”.

A meta financeira deveria provavelmente ser:

Paid ARPU ≥ R$60 no início.

  

12. Imposto começa a pesar com escala

Com ARPU ≈ R$59,68 e supondo enquadramento no Anexo III:

Paid seats

Receita anual aprox.

Alíquota efetiva aproximada

100

R$71,6 mil

6,0%

250

R$179 mil

6,0%

500

R$358 mil

8,6%

1.000

R$716 mil

11,0%

2.000

R$1,43 mi

13,5%

As tabelas oficiais do Anexo III começam em 6%, mas a alíquota efetiva cresce conforme a receita acumulada. 

Isso significa:

o produto pode nascer com economia muito confortável e ficar progressivamente mais apertado sem nenhuma mudança no preço.

Por isso a precificação deve antecipar escala.

E o enquadramento depende de CNAE, folha e fator R; isso precisa ser validado com contador antes de virar premissa financeira oficial.

  

13. Stress test

Agora um cenário ruim:

- Simples Anexo V: 15,5%;
- 90% dos pagamentos em cartão;
- consumo de IA 2×;
- WhatsApp 50% maior;
- infraestrutura/suporte 50% maior.

Resultado:

Plano

Margem-base

Stress

Solo

72,9%

55,3%

Pro

65,6%

43,0%

Business

62,7%

38,2%

Aqui aparece o risco real.

R$79,90 e R$109 deixam de ser preços confortáveis se o produto não controlar utilização.

  

14. Minha recomendação após a simulação

Eu mudaria um pouco a proposta anterior.

Solo

R$49,90/mês

Manter.

Produto principal:

- Copiloto;
- projetos;
- planejamento;
- Agora;
- Reports;
- Mapa-OS;
- Scanner;
- franquia de IA.

É o melhor preço de entrada.

Pro

Eu testaria:

R$89,90 em vez de R$79,90.

Com as mesmas premissas:

margem sobe aproximadamente para:

68,0%

Isso dá mais proteção para automações, MCP, WhatsApp e IA.

Business

Aqui eu faria uma mudança maior.

Não:

R$109 para qualquer Business individual.

Mas:

R$129–149/seat/mês, mínimo 5 seats

ou:

Business Workspace

R$499/mês

inclui 5 usuários

  

seat adicional

R$79–99

A segunda opção talvez seja comercialmente melhor.

Ela transforma a unidade econômica de:

1 seat = contrato

em:

workspace = contrato

seats = expansão

Muito mais aderente ao CAC B2B.

  

15. Estrutura de preço que eu testaria

Plano

Mensal recomendado

Papel

Trial

R$0 / 14 dias

ativação

Solo

R$49,90

execution system

Pro

R$89,90

automation + omnichannel

Business

R$129–149/seat

governance

Enterprise

custom

integração + SLA

Ou, preferencialmente para Business:

R$499/mês / 5 seats incluídos.

  

16. Annual

Eu também não manteria o mesmo desconto para todos.

Sugestão:

Plano

desconto anual

Solo

15–17%

Pro

12–15%

Business

8–10%

Porque os custos de IA, WhatsApp e infraestrutura continuam acontecendo mensalmente mesmo quando damos 17% de desconto na receita.

  

17. Regra financeira para Execution Credits

Eu colocaria um hard guardrail:

AI COGS

≤ 8% receita no Solo

  

≤ 10% Pro

  

≤ 10–12% Business

Ao atingir a franquia:

included usage

↓

warning

↓

Execution Credits

↓

top-up

Nunca degrada silenciosamente o produto.

E não expomos “tokens”.

O cliente compra capacidade de execução.

  

18. Dashboard econômico mínimo

As métricas que eu colocaria no EXECUTAR desde o primeiro pagante:

MRR

ARR

Paid users

Paid accounts

ARPU

ARPA

  

AI COGS / user

WhatsApp COGS / user

Payment COGS

Infrastructure COGS

  

Gross Contribution

Contribution Margin

  

CAC

CAC Payback

  

Logo Churn

Revenue Churn

LTV

LTV/CAC

  

Annual mix

Plan mix

Upgrade rate

Credit overage rate

E principalmente:

Contribution Margin por plano, não apenas receita.

  

19. Veredito

Eu não descartaria os preços originais.

Classificação:

R$49,90 Solo → APROVAR para teste.

R$79,90 Pro → economicamente possível, porém apertado para uso agentic elevado. Recomendo testar R$89,90.

R$109 Business → inadequado como contrato B2B unitário; aceitável como seat de uma conta multiusuário. Recomendo mínimo 5 seats ou R$129–149/seat.

O modelo que eu levaria para formalização seria, portanto:

EXECUTAR

  

TRIAL

14 dias

  

        ↓

  

SOLO

R$49,90

Contribution target ≥ 70%

  

        ↓

  

PRO

R$89,90

Contribution target ≥ 65–70%

  

        ↓

  

BUSINESS

R$499 workspace / 5 seats

ou

R$129–149 / seat

mínimo 5

  

        ↓

  

ENTERPRISE

Custom

  

────────────────────────

  

+ Execution Credits

+ WhatsApp usage

+ implementação Enterprise

A próxima etapa já pode deixar de ser conceitual: podemos transformar isso em BUS-MODEL-001 + PRICING-001 + UNIT-ECON-001, com tabela de cenários 100 / 500 / 1.000 / 5.000 clientes, MRR, ARR, impostos, COGS, CAC necessário, break-even e necessidade de caixa.

Formalização concluída e mesclada na main.

PR #8 — docs(business): formalize Brazil pricing and unit economics foi fechado e merged no commit:

cc27cf879131d5f0a499ee36ed9a077a6cea3069

A árvore agora ganhou:

docs/

└── 17-business/

    ├── README.md

    │   └── BUS-INDEX-001

    │

    ├── BUSINESS_MODEL.md

    │   └── BUS-MODEL-001

    │

    ├── PRICING.md

    │   └── PRICING-001

    │

    ├── UNIT_ECONOMICS.md

    │   └── UNIT-ECON-001

    │

    └── unit-economics-scenarios.csv

        └── UNIT-ECON-DATA-001

O baseline comercial ficou formalizado como:

Plano

Baseline de teste

Trial

14 dias

Solo

R$49,90/mês

Pro

R$89,90/mês

Business

R$499/mês / 5 seats

Enterprise

Custom

Esses valores estão em pre_approved / PROPOSED, ou seja, autorizados para modelagem e experimentos, mas ainda não são preços released.

Também ficou formalizada a arquitetura econômica:

assinatura → franquia incluída → Execution Credits / usage adicional

com IA roteada entre Luna/Terra/Sol conforme custo/capacidade. As tarifas atuais usadas como referência são US$0,20/US$1,20 por milhão de tokens para Luna, US$2/US$12 para Terra e US$4/US$20 para Sol. 

Para pagamentos, o modelo usa como benchmark Stripe Brasil: cartão nacional a 3,99% + R$0,39, Pix a 1,19% e Billing a 0,7% do volume. 

A parte tributária ficou mais rigorosa que a primeira simulação. Software/licenciamento sujeito ao fator R pode ir para Anexo III quando o fator é ≥28% e Anexo V quando inferior a 28%. 

Assim, o cenário registrado ficou:

Contas pagantes

MRR

ARR

Situação modelada

100

R$10.881

R$130.572

Anexo III ~6%

500

R$54.405

R$652.860

~10,8% efetivo

1.000

R$108.810

R$1.305.720

~13,27% efetivo

5.000

R$544.050

R$6.528.600

GAP pós-Simples

O último cenário não extrapola artificialmente o Simples: o limite modelado é R$4,8 milhões de receita anual, portanto a tributação pós-Simples terá de ser especificada antes de usar margem líquida para 5.000 contas. 

Também entrou DEC-BUS-001 no Decision Log e Business & Monetization como domínio P0 no MASTER_INDEX.md. O PR totalizou 7 arquivos modificados/adicionados e 588 linhas adicionadas.

A cadeia de governança comercial ficou:

PRODUCT VALUE

     ↓

BUS-MODEL-001

     ↓

PRICING-001

     ↓

UNIT-ECON-001

     ↓

TELEMETRIA REAL

     ↓

CAC / CHURN / ARPA / COGS

     ↓

REVALIDAÇÃO DE PREÇO

     ↓

PRICING RELEASE

O próximo dado que passa a ser realmente decisivo não é outro benchmark: é instrumentar o produto para medir AI COGS por plano, CAC, activation, churn, ARPA, WhatsApp COGS e contribution margin desde os primeiros usuários pagantes.


Autorização executada e incorporada à main.

O PR #9 — docs(observability): formalize business telemetry and cost instrumentation foi mesclado no commit b463948413b83325fdde57e53125de8691d751de. Foram 9 arquivos alterados, com 772 linhas adicionadas.

A arquitetura agora inclui:

docs/13-observability/

├── OBSERVABILITY.md

│   └── OBS-001

├── TRACE_SCHEMA.md

│   └── OBS-002

├── METRICS.md

│   └── OBS-004

├── AI_COST_BUDGET.md

│   └── OBS-006

├── BUSINESS_TELEMETRY.md

│   └── OBS-BIZ-001

└── IMPLEMENTATION_PLAN.md

    └── OBS-PLAN-001

A cadeia econômica ficou formalizada como:

BUS-MODEL-001

      ↓

PRICING-001

      ↓

UNIT-ECON-001

      ↓

OBS-BIZ-001

      ↓

EVENTOS

      ↓

RECONCILIAÇÃO

      ↓

MÉTRICAS OBSERVADAS

      ↓

PRICING REVALIDATION

Foram definidos eventos mínimos para assinatura, trial, activation, invoices, refunds, IA, Execution Credits, WhatsApp/canais e infraestrutura variável. O contrato também exige atribuição de custo por account, plan, capability, provider/model e trace quando aplicável.

Os guardrails registrados permanecem PROPOSED:

Indicador

Solo

Pro

Business

AI COGS / receita

≤ 8%

≤ 10%

≤ 12%

Contribution Margin

≥ 70%

≥ 65%

≥ 60%

CAC Payback

≤ 6 meses

≤ 6 meses

≤ 9 meses

Também ficou formalizada a distinção:

PROPOSED → observed_unreconciled → observed_reconciled → derived_observed

Portanto, um custo calculado localmente não vira automaticamente número financeiro oficial; precisa ser conciliado com provider, billing ou accounting.

E foi preservada uma regra arquitetural crítica:

telemetria não altera estado de domínio.

Por exemplo, uma mensagem entregue, uma chamada de IA realizada ou um símbolo reconhecido pelo Scanner não podem, isoladamente, promover uma tarefa.

O primeiro milestone de implementação também ficou definido:

1 conta paga

→ 1 invoice

→ 1 chamada de IA

→ custo de IA reconciliado

→ payment fee reconciliada

→ contribution calculada

→ teste de idempotência

A implementação efetiva continua corretamente como GAP, porque o blueprint ainda não possui runtime funcional, billing provider definitivo, data model real, providers de canal e política final de privacy/retention.