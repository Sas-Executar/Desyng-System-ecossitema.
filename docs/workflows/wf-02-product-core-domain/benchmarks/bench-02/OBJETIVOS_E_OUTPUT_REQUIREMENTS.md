Sim. Eu definiria agora um artefato superior, algo como FINAL-PRODUCT-REQ-001 — Definition of Product Complete, que passa a responder uma pergunta objetiva:

“O que precisa existir, funcionar, estar testado, implantado e documentado para o EXECUTAR ser considerado produto final full-stack?”

O estado atual do Blueprint ainda declara frontend, backend, integrações, data model real, testes/evals e release como pendentes, além de MCP, Scanner, runtime agentic e adapters externos.  Portanto, o gate final precisa cobrir todas essas camadas.

A regra seria:

DOCUMENTADO ≠ IMPLEMENTADO

IMPLEMENTADO ≠ FUNCIONAL

FUNCIONAL ≠ TESTADO

TESTADO ≠ VERIFICADO

VERIFICADO ≠ DEPLOYED

DEPLOYED ≠ RELEASED

  

FINAL PRODUCT

=

IMPLEMENTED

+ INTEGRATED

+ TESTED

+ VERIFIED

+ DEPLOYED

+ DOCUMENTED

+ OPERABLE

FINAL-PRODUCT-REQ-001

EXECUTAR — Produto Final 100% Funcional

1. Monorepo final

O repositório final deverá ser o próprio Blueprint transformado em produto:

EXECUTAR/

├── CLAUDE.md

├── AGENTS.md

├── MASTER_INDEX.md

├── MASTER_INDEX_CHECKLIST.md

│

├── .claude/

│   ├── rules/

│   ├── skills/

│   ├── agents/

│   ├── hooks/

│   └── settings.json

│

├── apps/

│   ├── app/              Web App

│   ├── web/              Site institucional

│   ├── api/              API/webhooks/jobs

│   ├── mobile/           Expo iOS/Android

│   ├── email/            Email previews/templates

│   ├── docs/             Documentação pública

│   ├── storybook/        Design System

│   └── studio/           Operação/admin quando aplicável

│

├── packages/

│   ├── domain/

│   ├── application/

│   ├── database/

│   ├── auth/

│   ├── design-system/

│   ├── agent-runtime/

│   ├── ai/

│   ├── integrations/

│   ├── mcp/

│   ├── routines/

│   ├── automation/

│   ├── mapa-os/

│   ├── scanner/

│   ├── reports/

│   ├── billing/

│   ├── notifications/

│   ├── observability/

│   ├── analytics/

│   ├── security/

│   ├── schemas/

│   └── config/

│

├── supabase/

├── tests/

├── evals/

├── docs/

├── turbo.json

├── package.json

└── bun.lock

Isso é compatível com o princípio atual do Next Forge de apps independentes e packages compartilhados isolando implementações. 

  

2. Web institucional completo

Nenhuma página pública pode terminar com placeholder, Lorem Ipsum, CTA falso ou seção incompleta.

Rotas mínimas:

/

 /produto

 /como-funciona

 /recursos

 /copiloto

 /mapa-os

 /scanner

 /rotinas

 /automacoes

 /integracoes

 /mcp

 /mobile

 /precos

 /seguranca

 /sobre

 /contato

 /blog

 /blog/[slug]

 /docs

 /changelog

 /status

  

 /login

 /signup

 /forgot-password

  

 /privacidade

 /termos

 /cookies

Cada página deve possuir:

- copy definitiva;
- title/description;
- headings;
- CTA;
- navegação;
- footer;
- states responsivos;
- OG metadata;
- favicon/app icons;
- structured data quando aplicável;
- SEO;
- accessibility;
- analytics;
- links válidos.

Quando a copy não existir no corpus:

GAP

↓

benchmark concorrentes/categoria

↓

identificar padrão

↓

PROPOSED copy

↓

adaptar para EXECUTAR

Não copiar texto de concorrentes.

  

3. Aplicação web EXECUTAR

As rotas conceituais já documentadas no Blueprint devem existir funcionalmente.

Estrutura mínima:

/app

/app/onboarding

  

/app/projects

/app/projects/[projectId]

  

/app/projects/[projectId]/overview

/app/projects/[projectId]/roadmap

/app/projects/[projectId]/sprint

/app/projects/[projectId]/documents

/app/projects/[projectId]/calendar

  

/app/agora

/app/hoje

/app/amanha

/app/ontem

  

/app/tasks

/app/deliverables

  

/app/copiloto

/app/mapa-os

/app/scanner

  

/app/reports

/app/routines

/app/automations

/app/workflows

  

/app/integrations

/app/connections

  

/app/settings

/app/settings/profile

/app/settings/preferences

/app/settings/memory

/app/settings/notifications

/app/settings/security

/app/settings/billing

Business:

/app/workspace

/app/workspace/members

/app/workspace/roles

/app/workspace/audit

/app/workspace/billing

As views já previstas:

- WIP 1:1;
- Lista;
- Kanban;
- Single Project;
- Remix Multi-project.

  

4. Core de domínio completo

Implementar de ponta a ponta:

Outcome

↓

Project / Process / Value Stream

↓

Deliverable

↓

Task

↓

Action

↓

Evidence

Com:

- dependencies;
- eligibility;
- ready pool;
- capacity;
- WIP;
- priority;
- Best Next Action;
- blocking;
- evidence;
- progress;
- replan;
- history;
- audit trail.

A vertical slice fundamental deve funcionar:

criar projeto

→ criar entregável

→ decompor

→ gerar ação

→ verificar elegibilidade

→ mostrar Agora

→ executar

→ registrar evidência

→ atualizar progresso

→ recalcular rota

  

5. Copiloto EXECUTAR

Runtime agentic real.

Deve implementar:

SYNC

→ UNDERSTAND

→ STRUCTURE

→ VISUALIZE

→ PRE_APPROVE

→ DECOMPOSE

→ EXECUTE

→ RECONCILE

→ REPORT

→ REPLAN

Comandos:

- /bomdia
- /agora
- /estado
- /fechardia
- /replanejamento

Além de:

- tool calling;
- context retrieval;
- memória autorizada;
- profiles/preferences;
- structured outputs;
- authority policies;
- retry;
- fallback;
- model routing;
- usage tracking;
- error handling;
- audit logs.

  

6. IA e model routing

Implementar uma camada própria, não chamadas espalhadas pelo código:

packages/ai/

├── router

├── providers

├── models

├── tools

├── prompts

├── structured-output

├── cost

├── tracing

├── fallback

└── evals

Deve suportar:

- modelo barato para tarefas simples;
- modelo intermediário;
- modelo avançado;
- fallback;
- timeout;
- retries;
- quotas;
- Execution Credits;
- cost attribution;
- prompt versioning;
- structured schema validation;
- tracing.

  

7. Expo — iOS e Android

Deve existir um app nativo real:

apps/mobile/

Com Expo/React Native.

Requisitos:

- Expo Router;
- autenticação;
- sessão persistente;
- deep links;
- universal links/app links;
- push notifications;
- câmera;
- Scanner;
- Copiloto;
- Agora;
- Hoje;
- tarefas;
- projetos;
- Mapa-OS;
- Reports;
- Settings;
- integrações essenciais;
- background/resume;
- error handling;
- connectivity states;
- loading/empty/error/offline states.

EAS deverá produzir binaries reais para iOS e Android. O EAS Build atualmente suporta builds assinados para ambas as plataformas e integração com EAS Submit/Updates. 

Entrega mobile final:

iOS

├── development build

├── preview build

├── production build

├── TestFlight

└── App Store ready

  

Android

├── development build

├── preview build

├── production AAB

├── internal testing

└── Google Play ready

EAS exige configuração própria de environment variables e oferece suporte específico para monorepos. 

  

8. Design System EXECUTAR

O Design System externo/canônico continua sendo autoridade.

Precisamos entregar:

Canonical DS

      ↓

packages/design-system

      ↓

├── apps/app

├── apps/web

├── apps/storybook

├── apps/email

└── apps/mobile

Incluindo:

- tokens;
- typography;
- spacing;
- radius;
- shadows;
- states;
- icons;
- forms;
- inputs;
- buttons;
- cards;
- tables;
- dialogs;
- drawers;
- navigation;
- feedback;
- charts;
- skeleton;
- empty states;
- error states;
- loading;
- dark/light se previsto;
- responsive;
- native token adapter.

Nenhuma segunda identidade visual independente.

  

9. Autenticação e identidade

100% funcional em:

- Web;
- Mobile;
- APIs;
- MCP;
- Gmail;
- Outlook;
- WhatsApp;
- automations.

Requisitos:

- signup;
- login;
- logout;
- recovery;
- sessions;
- token rotation;
- OAuth;
- device/session management;
- account deletion;
- account linking;
- identity provider mapping;
- roles;
- permissions;
- workspace tenancy;
- authorization server-side.

Next Forge possui uma dimensão de autenticação já conectada ao app; deve ser mantida e especializada para a arquitetura EXECUTAR. 

  

10. Banco de dados / Supabase

Produto final deve possuir:

- schema real;
- migrations;
- constraints;
- indexes;
- tenancy;
- RLS;
- foreign keys;
- enum/state policy;
- audit tables;
- timestamps;
- soft/delete policy onde aplicável;
- storage;
- attachments;
- migrations CI;
- seed data;
- local development;
- staging;
- production;
- backup;
- restore.

Entidades mínimas incluem:

User

Account

Workspace

Membership

  

Project

Process

Deliverable

Task

Action

Evidence

Dependency

  

Routine

RoutineRun

  

WorkflowDefinition

WorkflowRun

  

StatusReport

MapaOS

  

VisualSymbol

ScannerMutation

  

Attachment

  

IntegrationConnection

ExternalObjectRef

  

AgentRun

ToolCall

AIUsage

  

Notification

  

Subscription

UsageLedger

ExecutionCredit

  

AuditEvent

  

11. APIs

API interna e externa real.

Obrigatório:

- OpenAPI;
- schemas;
- auth;
- pagination;
- filtering;
- sorting;
- error contract;
- idempotency;
- rate limiting;
- versioning;
- correlation IDs;
- webhook signatures;
- validation;
- audit;
- retry semantics.

  

12. WhatsApp

Integração funcional de canal.

Deve suportar:

EXECUTAR

↔

WhatsApp

No mínimo:

- conexão/configuração;
- inbound messages;
- outbound messages;
- templates;
- webhooks;
- delivery receipts;
- error handling;
- retries;
- idempotency;
- user/account mapping;
- command parsing;
- reports;
- actions autorizadas;
- opt-in/consent;
- disconnect;
- audit trail.

Exemplos de uso:

"o que faço agora?"

→ Best Next Action

  

"feito"

→ ação autorizada

  

Status Report

→ WhatsApp

  

Rotina

→ WhatsApp

Sem criar estado paralelo.

  

13. Gmail

Integração real via OAuth.

Requisitos:

- conectar;
- desconectar;
- scopes mínimos;
- refresh token;
- revogação;
- pesquisar emails;
- recuperar threads;
- ler mensagens autorizadas;
- criar draft;
- enviar quando política permitir;
- labels;
- attachment metadata;
- sync incremental;
- webhook/push;
- error/retry;
- audit.

O Gmail API oferece watch para notificações de alterações de mailbox usando Google Cloud Pub/Sub. 

Interessante para 2026: o Google também oferece um servidor MCP remoto do Gmail, mas atualmente está documentado como developer preview. Portanto ele pode ser integrado/avaliado, mas não deveria ser a única dependência de produção enquanto permanecer preview. 

  

14. Outlook / Microsoft 365

Microsoft Graph.

Deve suportar:

- OAuth;
- conectar/desconectar;
- leitura;
- busca;
- threads/messages;
- drafts;
- envio autorizado;
- folders;
- attachments;
- shared mailboxes quando escopo permitir;
- subscriptions/webhooks;
- delta sync;
- retry;
- token refresh;
- revocation;
- audit.

Microsoft Graph é atualmente a API recomendada para Outlook mail e suporta contas pessoais e organizacionais com permissões delegadas ou de aplicação apropriadas. 

  

15. Calendários

Como o EXECUTAR possui Calendar e capacidade como componente central, também considero obrigatório:

Google Calendar

Microsoft Outlook Calendar

Com:

- connect/disconnect;
- read authorized calendars;
- events;
- availability;
- busy blocks;
- incremental sync;
- timezone;
- recurring events;
- conflict resolution;
- source attribution.

Esses eventos alimentam capacidade, não progresso automático.

  

16. MCP Server EXECUTAR

MCP real e production-ready.

/mcp

Deve possuir:

- authentication;
- authorization;
- tenant propagation;
- scopes;
- tool registry;
- resources quando aplicável;
- prompts quando aplicável;
- audit;
- rate limits;
- errors;
- schema validation;
- idempotency;
- tracing.

MCP 2026 possui requisitos de autorização mais maduros e suporte para tools/resources/prompts e caching metadata. 

Tools mínimas:

projects.list

projects.get

projects.create

  

deliverables.list

deliverables.get

  

tasks.list

tasks.get

tasks.create

tasks.update

  

actions.get_next

actions.complete

  

evidence.create

  

state.get

state.reconcile

  

capacity.get

  

copilot.agora

copilot.estado

copilot.replan

  

reports.generate

  

mapa.generate

  

routines.list

routines.run

  

workflows.list

workflows.run

O MCP nunca deve bypassar authority/domain rules.

  

17. Scanner

Implementação real em web/mobile quando aplicável.

- câmera;
- ROI;
- image preprocessing;
- encoder;
- embeddings;
- matcher;
- symbol registry;
- confidence;
- latch;
- VisualSymbolId;
- command dispatch;
- mutation ID;
- feedback;
- undo;
- audit;
- offline inference onde especificado.

Símbolos V1:

Copiloto

Seletor

Feito

Dataset e evals também fazem parte do produto final.

  

18. Mapa-OS

Não apenas template.

Precisa existir funcionalmente:

project state

↓

Mapa-OS generator

↓

versioned artifact

↓

preview

↓

print/export

↓

physical interaction

↓

Scanner

↓

canonical state

Com:

- histórico;
- versionamento;
- PDFs/impressão;
- A4 Prisma;
- mobile/web preview;
- metadata;
- evidence lineage.

  

19. Rotinas e automações

Scheduler real.

Obrigatório:

- create/edit/delete;
- schedule;
- triggers;
- conditions;
- authority;
- retries;
- idempotency;
- run history;
- logs;
- pause/resume;
- failures;
- notifications;
- reports.

Fluxo:

Trigger

→ RoutineRun

→ State Read

→ Eligibility

→ Authorized Action

→ Status Report

→ Delivery

→ Audit

  

20. Workflows

Engine/configuração para:

- triggers;
- steps;
- conditions;
- actions;
- integrations;
- retries;
- failures;
- execution history;
- observability.

  

21. Reports

Status Report completo em:

- App;
- Web;
- Email;
- WhatsApp;
- impressão;
- export.

Com:

- versioning;
- persistence;
- dates;
- evidence;
- progress;
- blockers;
- next action.

  

22. Notifications

Camada unificada:

in-app

push

email

WhatsApp

Com:

- preferences;
- mute;
- schedules;
- transactional notifications;
- delivery status;
- retries;
- channel fallback.

  

23. Billing

Implementação real dos planos registrados:

Trial

Solo

Pro

Business

Enterprise

Incluindo:

- checkout;
- subscription;
- upgrade;
- downgrade;
- cancel;
- renewal;
- payment failure;
- grace period;
- invoices;
- receipts;
- customer portal;
- webhooks;
- plan entitlements;
- trial;
- usage;
- Execution Credits;
- AI overage;
- channel overage;
- Business seats.

  

24. Usage & entitlements

Não pode haver if plan === pro espalhado.

Precisa existir:

Entitlement Engine

Para controlar:

- capabilities;
- quotas;
- AI;
- channels;
- seats;
- storage;
- automation;
- integrations.

  

25. Environment configuration

Obrigatório.

Root:

.env.example

E por aplicação/package conforme arquitetura:

apps/app/env.ts

apps/web/env.ts

apps/api/env.ts

apps/mobile/...

packages/database/env.ts

packages/auth/env.ts

packages/billing/env.ts

...

Next Forge recomenda justamente que cada app componha as variáveis dos packages dos quais depende. 

Ambientes:

local

test

preview

staging

production

Requisitos:

- schema validation;
- secrets nunca no Git;
- .env.example completo;
- Vercel env;
- EAS env/secrets;
- Supabase secrets;
- provider secrets;
- setup documentation.

  

26. Admin / Operations

Interface administrativa controlada para:

- usuários;
- workspaces;
- subscriptions;
- usage;
- integrations;
- failed jobs;
- AI usage;
- channel usage;
- routines;
- audit;
- feature flags;
- incident inspection.

  

27. CMS / conteúdo

Se a dimensão CMS do Next Forge estiver presente, permanece.

Deve controlar quando aplicável:

- blog;
- help;
- institucional;
- FAQ;
- changelog;
- announcements.

  

28. SEO

Para o site público:

- sitemap;
- robots;
- canonical;
- metadata;
- OpenGraph;
- social cards;
- JSON-LD;
- indexation;
- redirects;
- 404;

500. 500.

  

501. Analytics produto

Eventos reais de:

signup

activation

project_created

deliverable_created

action_executed

evidence_created

copilot_used

mapa_generated

scanner_used

integration_connected

trial_started

subscription_started

upgrade

churn

Com privacy boundaries.

  

30. Business telemetry

Já formalizada:

- MRR;
- ARR;
- ARPA;
- paid accounts;
- plan mix;
- AI COGS;
- WhatsApp COGS;
- payment COGS;
- variable infra;
- contribution margin;
- CAC;
- payback;
- churn;
- LTV.

Com estados:

observed_unreconciled

→ observed_reconciled

→ derived_observed

  

31. Observabilidade técnica

Obrigatório:

- structured logs;
- traces;
- metrics;
- errors;
- AI spans;
- tool calls;
- API latency;
- DB latency;
- background jobs;
- webhooks;
- integration errors;
- mobile crashes;
- frontend errors;
- alerting.

  

32. Segurança

Produto final precisa passar por:

- secrets scanning;
- dependency scanning;
- SAST;
- auth tests;
- authorization tests;
- RLS tests;
- rate limit;
- CSRF quando aplicável;
- XSS;
- injection;
- SSRF;
- webhook verification;
- OAuth state/PKCE;
- token storage;
- secure headers;
- audit logs;
- abuse prevention.

  

33. Privacidade

Obrigatório:

- privacy policy;
- data inventory;
- purpose;
- consent;
- account deletion;
- data export;
- retention;
- integration disconnect;
- token revocation;
- logs redaction;
- sensitive-data policy.

  

34. Acessibilidade

Web e mobile:

- teclado;
- focus;
- screen reader;
- semantic HTML;
- contrast;
- reduced motion;
- labels;
- accessible dialogs;
- error messages;
- ARIA quando necessário.

  

35. Responsividade

Validar:

mobile

tablet

laptop

desktop

large desktop

Sem layouts quebrados.

  

36. Performance

Web:

- Core Web Vitals;
- bundle size;
- image optimization;
- caching;
- database query performance;
- API latency.

Mobile:

- startup;
- navigation;
- memory;
- network;
- camera/scanner;
- battery-sensitive processes.

  

37. Offline / recovery

Especialmente mobile:

- connectivity detection;
- cached read state onde permitido;
- queued safe operations;
- reconciliação;
- retry;
- conflict handling.

Sem criar uma segunda SOT.

  

38. Testing

Obrigatório:

unit

integration

contract

database

RLS

API

webhook

component

visual

E2E web

E2E mobile

integration-provider

AI evals

Scanner evals

performance

accessibility

security

  

39. CI

Todo PR deverá rodar, conforme aplicável:

install

boundaries

format

lint

typecheck

unit tests

integration tests

build

security

evals

Turborepo boundaries devem ser validados; Next Forge documenta bun run boundaries para detectar violações de workspace. 

  

40. CD Web

Deploys:

Preview

Staging

Production

Com:

- migrations gate;
- env validation;
- build;
- health check;
- smoke tests;
- rollback;
- deploy audit.

  

41. CD Mobile

Expo EAS:

development

preview

production

Com:

- EAS Build;
- EAS Submit;
- EAS Update quando apropriado;
- versioning;
- build numbers;
- signing;
- internal testing;
- store submission.

Expo atualmente fornece Build, Submit, Update, Workflows e observabilidade no ecossistema EAS. 

  

42. App Store / Google Play

Entrega final inclui:

- bundle IDs;
- package IDs;
- icons;
- splash;
- screenshots;
- description;
- privacy metadata;
- categories;
- age rating;
- support URLs;
- terms/privacy;
- release notes;
- store builds.

  

43. Error states

Não pode existir apenas “happy path”.

Para toda capability:

loading

empty

partial

offline

unauthorized

forbidden

validation_error

provider_error

timeout

rate_limited

conflict

server_error

  

44. Feature flags

Para funcionalidades de rollout gradual:

- create;
- target;
- enable;
- disable;
- rollback.

  

45. Backup / restore / disaster recovery

Obrigatório:

- backup policy;
- restore procedure;
- restore test;
- RPO/RTO definidos;
- provider outage procedure.

O próprio checklist atual ainda marca backup/restore e release checklist como pendentes.

  

46. Documentação técnica

Produto final inclui:

README

SETUP

ARCHITECTURE

SYSTEM_CONTEXT

DOMAIN_MODEL

ERD

API

MCP

AUTH

DATA

MIGRATIONS

ENV

INTEGRATIONS

AI

MOBILE

TESTING

SECURITY

OBSERVABILITY

DEPLOY

RUNBOOK

BACKUP_RESTORE

TROUBLESHOOTING

  

47. Documentação de usuário

- getting started;
- onboarding;
- projetos;
- tarefas;
- Copiloto;
- Mapa-OS;
- Scanner;
- Rotinas;
- integrações;
- billing;
- mobile;
- FAQ.

  

48. Release artifacts

A entrega final precisa gerar:

RELEASE_NOTES.md

DEPLOY_CHECKLIST.md

KNOWN_ISSUES.md

MIGRATION_REPORT.md

TEST_REPORT.md

EVAL_REPORT.md

SECURITY_REPORT.md

PERFORMANCE_REPORT.md

ACCESSIBILITY_REPORT.md

FINAL_HANDOFF.md

  

49. Zero placeholders no produto

No momento do release:

NO:

TODO crítico

Lorem ipsum

fake data em produção

mock API

dummy integration

fake checkout

disabled critical CTA

unconnected form

empty legal page

placeholder copy

hardcoded secret

hardcoded user

manual DB hack

Fixtures podem existir exclusivamente em tests/dev.

  

50. Regra de GAP no desenvolvimento

Quando algo necessário ao produto não estiver especificado:

GAP

↓

Next Forge default?

├── SIM → adotar

└── NÃO

     ↓

official docs

     ↓

benchmark 2026

     ↓

comparar alternativas

     ↓

PROPOSED

     ↓

ADR/SPEC quando estrutural

     ↓

IMPLEMENT

Nunca:

GAP → ignorar

E nunca:

benchmark → fingir que era requisito existente

  

51. Definition of Final Product

O Claude Code só poderá declarar:

EXECUTAR

STATUS: RELEASED

quando todos estes gates forem PASS:

|   |   |
|---|---|
|Gate|Obrigatório|
|Product requirements|PASS|
|Institutional routes/copy|PASS|
|Web application|PASS|
|Expo iOS|PASS|
|Expo Android|PASS|
|Backend/API|PASS|
|Database/RLS|PASS|
|Authentication|PASS|
|Copiloto/AI|PASS|
|Mapa-OS|PASS|
|Scanner|PASS|
|Rotinas|PASS|
|Workflows|PASS|
|Gmail|PASS|
|Outlook|PASS|
|WhatsApp|PASS|
|Calendar integrations|PASS|
|MCP|PASS|
|Billing|PASS|
|Notifications|PASS|
|Analytics|PASS|
|Observability|PASS|
|Security|PASS|
|Privacy|PASS|
|Accessibility|PASS|
|Performance|PASS|
|Unit tests|PASS|
|Integration tests|PASS|
|E2E web|PASS|
|E2E mobile|PASS|
|AI evals|PASS|
|Scanner evals|PASS|
|CI|PASS|
|Web production deploy|PASS|
|iOS production build|PASS|
|Android production build|PASS|
|Backup/restore|PASS|
|Technical documentation|PASS|
|User documentation|PASS|
|Final handoff|PASS|

A definição mais curta fica:

EXECUTAR FINAL

  

WEB

+ iOS

+ Android

+ Backend

+ Database

+ AI/Copilot

+ Scanner

+ Mapa-OS

+ Routines

+ Workflows

+ WhatsApp

+ Gmail

+ Outlook

+ Calendars

+ MCP

+ Billing

+ Notifications

+ Design System

+ Analytics

+ Observability

+ Security

+ Privacy

+ Tests

+ Evals

+ CI/CD

+ Production

+ Documentation

= RELEASED

Eu usaria esse documento como contrato mestre de entrega do Claude Code, acima dos milestones. Depois cada item seria convertido em REQ-FINAL-* e vinculado a um milestone, teste e evidência; dessa forma “entregar o produto final” deixa de ser subjetivo e passa a ser uma matriz verificável de conclusão.