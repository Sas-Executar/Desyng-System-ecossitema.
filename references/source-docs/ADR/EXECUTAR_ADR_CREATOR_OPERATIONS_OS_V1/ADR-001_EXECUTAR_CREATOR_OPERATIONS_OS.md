# ADR-001 — EXECUTAR Creator Operations OS sobre Payload

- **Status:** Aprovado
- **Data:** 2026-09-05
- **Decisores:** Produto / Arquitetura EXECUTAR
- **Escopo:** Blog, creator-led business, conteúdo, distribuição, automações, CRM e analytics
- **Versão:** 1.0
- **Tipo:** Architecture Decision Record
- **SOT principal:** Payload + PostgreSQL

## 1. Contexto

A operação editorial e comercial será executada inicialmente por uma única pessoa, que acumula os papéis de creator, ICP, pesquisador, produtor, distribuidor, validador, operador e vendedor.

O sistema precisa reduzir troca de contexto e evitar que planilhas, CMS, ferramentas sociais, CRM, arquivos e automações se tornem sistemas concorrentes.

O requisito central é existir um único ponto de entrada visual, semelhante à facilidade de uma planilha, porém com experiência de aplicativo, banco relacional, editor, calendário, filas, webhooks, APIs, assets, agendamento, publicação e métricas.

## 2. Problema

Uma planilha isolada é adequada para cálculo, exportação e auditoria, mas não deve ser a interface operacional principal quando a operação contém relações persistentes entre:

- problemas;
- conteúdos-mãe;
- derivados;
- campanhas;
- assets;
- canais;
- CTAs;
- publicações;
- jobs;
- leads;
- produtos;
- métricas.

Criar Airtable, Notion ou outro banco operacional como SOT adicional exigiria sincronização permanente com o CMS, aumentando duplicação de dados e risco de divergência.

## 3. Decisão

Adotar o **Payload Admin customizado como camada de UI do EXECUTAR Creator Operations OS**.

A arquitetura será:

```text
EXECUTAR OPERATIONS CONSOLE
        ↓
PAYLOAD ADMIN / CUSTOM VIEWS
        ↓
PAYLOAD COLLECTIONS + POSTGRESQL
        ↓
HOOKS / JOBS / WORKFLOWS
        ↓
WEBHOOKS / APIs / n8n ou Make
        ↓
CANAIS EXTERNOS
Canva · Metricool · HubSpot · Storage · Analytics
        ↓
STATUS / URL / EXTERNAL_ID / METRICS
        ↓
PAYLOAD / POSTGRESQL
```

O Payload será simultaneamente:

1. CMS headless;
2. backend de aplicação;
3. banco operacional via Collections;
4. interface administrativa customizável;
5. camada de drafts, versions e publicação programada;
6. origem de hooks, jobs e workflows;
7. API de integração;
8. SOT operacional do Creator OS.

## 4. Princípios arquiteturais

### ADR-P01 — Single Entry Point
Toda operação começa em `/admin/executar`.

### ADR-P02 — Single Source of Truth
Payload/PostgreSQL mantém os registros mestres e seus estados.

### ADR-P03 — External Tools as Executors
Canva, Metricool, HubSpot e demais serviços executam funções especializadas, mas não governam o estado global da operação.

### ADR-P04 — Write Once
Metadados estruturais devem ser digitados uma vez e reutilizados nos derivados.

### ADR-P05 — ID First
Cada unidade de trabalho recebe ID persistente antes de produzir assets derivados.

### ADR-P06 — State Driven
Automações são disparadas por transições de estado e eventos explícitos.

### ADR-P07 — Observable Automation
Todo job ou webhook deve registrar status, tentativa, timestamp, erro e identificador externo.

### ADR-P08 — Progressive Complexity
A arquitetura deve funcionar para um operador solo e permitir expansão sem reconstrução da base.

## 5. Unidade operacional

A unidade principal deixa de ser “um post” e passa a ser:

```text
PROBLEMA
  ↓
SOLUÇÃO / HIPÓTESE
  ↓
CONTEÚDO-MÃE
  ↓
DERIVADOS
  ↓
ASSETS
  ↓
PUBLICAÇÕES
  ↓
CTA
  ↓
LEADS / CONVERSÃO
  ↓
MÉTRICAS
  ↓
APRENDIZADO
```

Exemplo de ID:

`RC-PROBLEM-001`

Derivados:

- `RC-PROBLEM-001-ARTICLE-01`
- `RC-PROBLEM-001-CAROUSEL-01`
- `RC-PROBLEM-001-REEL-01`
- `RC-PROBLEM-001-SHORT-01`
- `RC-PROBLEM-001-LINKEDIN-01`
- `RC-PROBLEM-001-NEWSLETTER-01`
- `RC-PROBLEM-001-CTA-01`

## 6. Camada de UI

A rota `/admin/executar` será uma **Custom View** do Payload.

### Navegação principal

1. **Hoje**
2. **Inbox**
3. **Pipeline**
4. **Conteúdos**
5. **Calendário**
6. **Assets**
7. **Distribuição**
8. **Automações**
9. **Leads**
10. **Analytics**
11. **Configurações**

### Modos de visualização

Cada Collection relevante pode possuir:

- Grid;
- Lista;
- Kanban;
- Calendário;
- Formulário;
- Editor;
- Timeline;
- Dashboard.

### Dashboard “Hoje”

Mostrar somente:

- próximo item;
- prazo;
- status;
- bloqueio;
- CTA;
- publicação prevista;
- jobs com erro;
- métricas de exceção.

O dashboard não deve funcionar como depósito de documentação.

## 7. Modelo de Collections

### Core

| Collection | Função |
|---|---|
| `problems` | Problemas, hipóteses e oportunidades editoriais |
| `content` | Conteúdos-mãe |
| `derivatives` | Assets editoriais derivados |
| `assets` | Imagens, vídeos, PDFs, áudio e arquivos |
| `channels` | Plataformas e canais de distribuição |
| `publications` | Instâncias publicáveis por canal |
| `campaigns` | Agrupamento estratégico |
| `ctas` | Chamadas para ação |
| `products` | Produtos e serviços |
| `metrics` | Métricas normalizadas |
| `automation_runs` | Execuções de automação |
| `integration_accounts` | Configuração lógica das integrações |

### Relacionamentos principais

```text
Problem 1─N Content
Content 1─N Derivatives
Derivative N─N Assets
Derivative 1─N Publications
Publication N─1 Channel
Publication N─1 CTA
Campaign 1─N Publications
Publication 1─N Metrics
Publication 1─N AutomationRuns
CTA N─1 Product
```

## 8. Estados

Pipeline padrão:

```text
CAPTURED
→ TRIAGED
→ PRIORITIZED
→ RESEARCH
→ DRAFT
→ PRODUCTION
→ QA
→ READY
→ SCHEDULED
→ PUBLISHED
→ MEASURED
→ RECYCLE
→ ARCHIVED
```

Estados de exceção:

- `BLOCKED`
- `FAILED`
- `CANCELLED`

## 9. Automações

### Eventos recomendados

| Evento | Ação |
|---|---|
| Content → `PRODUCTION` | Gerar derivados previstos |
| Asset aprovado | Liberar publicação dependente |
| Publication → `SCHEDULED` | Enfileirar job futuro |
| Publication → `PUBLISHED` | Registrar URL e timestamp |
| Webhook de canal | Atualizar `external_id` e status |
| Falha de job | Criar alerta no dashboard |
| Métrica recebida | Atualizar agregados |
| Lead capturado | Sincronizar CRM |
| CTA convertido | Relacionar conversão ao conteúdo |

## 10. Jobs e scheduling

Usar Payload Jobs Queue para tarefas não bloqueantes, futuras e recorrentes.

Regras:

- `waitUntil` para uma execução futura única;
- `schedule`/cron para recorrências;
- hooks para eventos decorrentes de alteração de documento;
- filas separadas por responsabilidade;
- retries limitados e observáveis;
- idempotência obrigatória para chamadas externas.

Filas iniciais:

```text
publishing
analytics
crm
media
notifications
maintenance
```

### Vercel / serverless

Em ambiente serverless, o agendamento e a execução precisam ser acionados por mecanismo externo compatível, como Vercel Cron chamando endpoints de jobs do Payload.

## 11. Integrações

### Canva
Responsabilidade: criação visual.

Persistir no Payload:

- `external_id`;
- `design_url`;
- `export_url`;
- `last_synced_at`.

### Metricool
Responsabilidade: distribuição e analytics social.

Persistir:

- `publication_external_id`;
- `scheduled_at`;
- `published_at`;
- `public_url`;
- `platform_status`;
- métricas normalizadas.

### HubSpot
Responsabilidade: CRM.

Persistir no Payload somente chaves operacionais necessárias:

- `contact_external_id`;
- `deal_external_id`;
- `lifecycle_stage`;
- `source_content_id`.

### n8n ou Make
Responsabilidade: orquestração quando a integração direta não compensar.

Não deve se tornar SOT.

### Object Storage
Responsabilidade: binários pesados.

Payload mantém metadados e referências.

## 12. Webhooks

Todo webhook deve possuir:

```json
{
  "event_id": "uuid",
  "source": "metricool",
  "event_type": "publication.updated",
  "external_id": "string",
  "received_at": "ISO-8601",
  "payload_hash": "sha256",
  "status": "received|processed|ignored|failed"
}
```

Requisitos:

- assinatura/verificação;
- deduplicação por `event_id` ou hash;
- idempotência;
- rate limiting;
- registro de falhas;
- retry seguro;
- secrets fora do banco editorial.

## 13. UX operacional

A interface deve otimizar:

1. baixa troca de contexto;
2. próxima ação evidente;
3. exceções visíveis;
4. poucos campos obrigatórios;
5. criação rápida;
6. views específicas por função;
7. atalhos;
8. filtros salvos;
9. ações em lote controladas;
10. mobile responsivo para captura e aprovação.

### Command bar

A UI poderá incluir um campo universal:

```text
+ Nova ideia
+ Novo problema
+ Novo conteúdo
+ Upload asset
+ Agendar
+ Buscar ID
+ Executar automação
```

## 14. Segurança

- RBAC desde o início, mesmo com um único usuário;
- secrets apenas em environment variables/secret manager;
- logs sem tokens;
- webhooks assinados;
- validação server-side;
- auditoria de alterações críticas;
- princípio de menor privilégio nas integrações.

## 15. Observabilidade

Cada integração deve produzir:

- `run_id`;
- `entity_id`;
- `provider`;
- `operation`;
- `started_at`;
- `finished_at`;
- `status`;
- `attempt`;
- `external_id`;
- `error_code`;
- `error_message`.

Dashboard mínimo:

```text
Jobs pendentes
Jobs falhos
Publicações atrasadas
Webhooks com erro
Integrações desconectadas
Conteúdos bloqueados
```

## 16. Alternativas consideradas

### Airtable como hub

**Prós**
- interface rápida;
- grid familiar;
- automações;
- forms;
- views.

**Contras**
- segunda base;
- sincronização com Payload;
- duplicação de estados;
- custo e dependência adicionais.

**Decisão:** rejeitado como SOT principal.

### Notion como hub

**Prós**
- documentação;
- baixa barreira de entrada;
- editor agradável.

**Contras**
- menos adequado como backend transacional;
- relações e automações operacionais menos controláveis que uma aplicação própria.

**Decisão:** pode permanecer como knowledge base, não como SOT operacional.

### ClickUp como hub

**Prós**
- gestão de tarefas madura.

**Contras**
- adiciona uma camada de work management separada do conteúdo e do backend.

**Decisão:** não adotar no core inicial.

### Planilha como hub

**Prós**
- universal;
- portátil;
- simples para auditoria.

**Contras**
- interface limitada;
- relações frágeis;
- workflows difíceis de governar;
- baixa adequação para eventos e APIs.

**Decisão:** manter apenas para import/export, relatórios e auditoria.

## 17. Consequências positivas

- um único entrypoint;
- menor duplicação;
- arquitetura compatível com o blog existente;
- customização total da experiência;
- conteúdo e operação compartilhando o mesmo backend;
- automações rastreáveis;
- evolução gradual para SaaS;
- menor dependência de ferramentas no-code como core.

## 18. Consequências negativas

- exige desenvolvimento inicial;
- Custom Views precisam manutenção;
- integrações externas continuam sujeitas às APIs dos fornecedores;
- Jobs precisam de estratégia explícita de execução;
- UX ruim pode transformar o Admin em outro sistema complexo.

## 19. Restrições

- não construir todas as views no primeiro ciclo;
- não duplicar dados disponíveis via relação;
- não armazenar arquivos pesados diretamente no Postgres;
- não acoplar lógica crítica exclusivamente a automações externas;
- não permitir publicação social sem rastreamento de estado.

## 20. MVP arquitetural

### Fase 1 — Core
- Dashboard Hoje;
- Inbox;
- Problems;
- Content;
- Derivatives;
- Assets;
- Publications;
- Channels.

### Fase 2 — Workflow
- estados;
- Kanban;
- calendário;
- QA;
- scheduling;
- jobs;
- automation log.

### Fase 3 — Distribution
- Metricool;
- webhooks;
- URLs;
- métricas.

### Fase 4 — Monetization
- HubSpot;
- CTA;
- products;
- attribution;
- conversions.

### Fase 5 — Intelligence
- pesquisa assistida;
- geração de derivados;
- recomendações;
- detecção de bloqueios;
- summaries e analytics assistidos por IA.

## 21. Critérios de aceite

A decisão será considerada implementada quando:

1. `/admin/executar` for o entrypoint diário;
2. um Problem puder gerar Content e Derivatives relacionados;
3. um conteúdo puder ser escrito e salvo como draft;
4. assets puderem ser associados por ID;
5. uma Publication puder receber data futura;
6. jobs puderem ser enfileirados e rastreados;
7. integrações puderem atualizar status por webhook/API;
8. URLs publicadas retornarem ao registro;
9. métricas puderem ser vinculadas à publicação;
10. o operador não precisar manter planilha paralela para controlar o pipeline.

## 22. Decisão final

**APROVADO:** Payload Admin customizado será a UI operacional do Creator Operations OS, Payload/PostgreSQL será a fonte de verdade e serviços externos atuarão como executores especializados conectados por APIs, webhooks e jobs.

---

## Referências técnicas oficiais

- Payload Admin Panel: https://payloadcms.com/docs/admin/overview
- Payload Custom Components: https://payloadcms.com/docs/custom-components/overview
- Payload Custom Views: https://payloadcms.com/docs/custom-components/custom-views
- Payload Drafts / Scheduled Publish: https://payloadcms.com/docs/versions/drafts
- Payload Jobs Queue: https://payloadcms.com/docs/jobs-queue/overview
- Payload Job Schedules: https://payloadcms.com/docs/jobs-queue/schedules
