
O Next Forge usa Neon + Prisma por padrão, mas sua própria documentação deixa explícito que outros provedores PostgreSQL, inclusive Supabase, podem ser usados dentro do package database.

Segue a formalização em formato de contrato de execução, preservando suas regras e sem acrescentar requisitos externos não autorizados.

EXECUTAR — CONTRATO MESTRE DE ARQUITETURA, DESENVOLVIMENTO E ENTREGA

OBJETIVO

- Entregar o EXECUTAR APP 100% funcional, full stack e pronto para produção.
- Transformar o repositório atual do Blueprint no repositório definitivo do produto, preservando sua governança, documentação, evidências e rastreabilidade.
- Utilizar o Next Forge como baseline técnico completo da arquitetura final.
- Utilizar Turborepo como fundação do monorepo definitivo.
- Preservar todas as dimensões arquiteturais fornecidas pelo Next Forge.
- Personalizar o Turborepo para o domínio, identidade, regras, fluxos e diferenciais proprietários do EXECUTAR.
- Evitar reconstruir infraestrutura que já esteja adequadamente resolvida pelo Next Forge.
- Concentrar a engenharia proprietária nas capacidades específicas do EXECUTAR.
- Desenvolver diretamente sobre a arquitetura final, evitando uma aplicação provisória seguida de reescrita ou segunda migração.
- Minimizar retrabalho por meio da estratégia:

- estabilizar decisões caras de reverter;
- aprovar a arquitetura;
- transformar o repositório na arquitetura final;
- desenvolver incrementalmente;
- trabalhar por contratos e vertical slices;
- testar continuamente;
- persistir o estado do desenvolvimento no próprio repositório;
- reconciliar código, testes, documentação e evidências.

- Não tentar especificar 100% do produto antes da migração arquitetural.
- Resolver antes da migração apenas as decisões estruturais necessárias para impedir retrabalho significativo.
- Completar decisões técnicas menores durante o desenvolvimento, no momento em que forem necessárias.
- Formalizar um Definition of Product Complete que determine objetivamente tudo que precisa existir para o EXECUTAR ser considerado concluído.
- Considerar como produto completo a soma de:

- Web;
- Mobile;
- Backend;
- Dados;
- IA;
- Copiloto;
- Integrações;
- MCP;
- Billing;
- Observabilidade;
- Segurança;
- Conteúdo;
- Testes;
- Deploy;
- Operação;
- Documentação;
- Handoff.

  

CONTEXTO

- O EXECUTAR possui atualmente um Blueprint canônico contendo:

- governança;
- visão de produto;
- requisitos;
- PRDs;
- ADRs;
- specifications;
- contratos;
- skills;
- agentes;
- entregáveis;
- Mapa-OS;
- Scanner;
- Copiloto;
- Rotinas;
- gestão omnicanal;
- pricing;
- unit economics;
- observabilidade;
- Design System;
- referências técnicas.

- O Blueprint deve deixar de ser apenas um repositório documental e evoluir para o monorepo definitivo do EXECUTAR.
- O Blueprint permanece como camada canônica de documentação e governança dentro da arquitetura final.
- O desenvolvimento será realizado por Claude Code com execução incremental e persistência do estado no filesystem e no Git.
- Claude Code deve conseguir reiniciar uma sessão e redescobrir o estado real do projeto por:

- Git;
- Master Index;
- documentos;
- manifests;
- código;
- testes;
- evidências.

- O desenvolvimento deve evitar:

- big design upfront desnecessário;
- abstrações hipotéticas;
- código provisório destinado a futura reescrita;
- duplicação de funcionalidades já resolvidas pela stack;
- decisões técnicas sem evidência.

  

SOURCE OF TRUTH

- Repositório canônico do agente, Blueprint e aplicação:

- [https://github.com/Sas-Executar/Executar-app-Blueprint](https://github.com/Sas-Executar/Executar-app-Blueprint)

- Baseline da arquitetura final:

- Next Forge.

- Arquitetura do monorepo:

- Turborepo.

- Source of Truth documental do EXECUTAR:

- MASTER_INDEX.md
- documentos canônicos em docs/
- ADRs;
- PRDs;
- REQs;
- Acceptance Criteria;
- Specs;
- contratos;
- schemas;
- decisões registradas.

- Source of Truth visual:

- Design System canônico do EXECUTAR.

- O Design System do Next Forge não pode tornar-se uma segunda autoridade visual.
- O package de Design System da arquitetura final deve funcionar como camada de integração/adaptação ao Design System canônico do EXECUTAR.

  

PRECEDÊNCIA DE DECISÃO

- Aplicar a seguinte ordem de autoridade:

- requisito canônico do EXECUTAR;
- ADR aceito do EXECUTAR;
- contrato ou specification do EXECUTAR;
- Design System canônico do EXECUTAR;
- default do Next Forge;
- documentação oficial da tecnologia;
- benchmark técnico de 2026;
- decisão PROPOSED derivada da pesquisa;
- conveniência local de implementação.

- Uma decisão inferior nunca pode sobrescrever silenciosamente uma decisão superior.

  

ESCOPO — IN

- Transformar o repositório atual na arquitetura final Next Forge/Turborepo.
- Manter o Blueprint dentro do repositório final.
- Criar e configurar todos os apps e packages necessários.
- Preservar todas as dimensões fornecidas pelo Next Forge.
- Personalizar todas as dimensões para o EXECUTAR.
- Implementar produto web completo.
- Implementar site institucional completo.
- Implementar backend completo.
- Implementar database e persistência real.
- Implementar autenticação e autorização.
- Implementar aplicação mobile com Expo.
- Entregar iOS.
- Entregar Android.
- Implementar IA e Copiloto.
- Implementar agent runtime.
- Implementar Mapa-OS.
- Implementar Scanner.
- Implementar Rotinas.
- Implementar Automações.
- Implementar Workflows.
- Implementar Reports.
- Implementar MCP Server e MCP Tools.
- Implementar WhatsApp.
- Implementar Gmail.
- Implementar Outlook.
- Implementar calendários quando necessários aos fluxos do produto.
- Implementar billing.
- Implementar subscriptions.
- Implementar usage/credits.
- Implementar notifications.
- Implementar analytics.
- Implementar observabilidade.
- Implementar segurança.
- Implementar privacidade.
- Implementar CI/CD.
- Implementar ambientes.
- Implementar deploy Web.
- Implementar deploy Mobile.
- Implementar testes.
- Implementar evals.
- Implementar documentação técnica.
- Implementar documentação de usuário.
- Implementar operação e runbooks.
- Realizar handoff final.

  

ESCOPO — OUT

- Não criar uma aplicação provisória completa em src/ para depois reescrevê-la no Next Forge.
- Não criar um segundo repositório de produto sem necessidade arquitetural.
- Não descartar dimensões do Next Forge.
- Não reconstruir manualmente infraestrutura já resolvida adequadamente pelo Next Forge.
- Não criar uma segunda fonte de verdade para o Design System.
- Não criar estados paralelos de domínio por canal ou integração.
- Não tratar benchmark como requisito histórico do EXECUTAR.
- Não inventar que uma decisão PROPOSED já existia no corpus.
- Não inferir arquitetura privada de concorrentes sem evidência pública.
- Não deixar lacunas técnicas bloqueantes sem tratamento.
- Não deixar placeholders, mocks ou fake flows em funcionalidades críticas no produto final.
- Não declarar funcionalidade como concluída sem teste ou evidência correspondente.

  

REQUIREMENTS — ARQUITETURA

- Next Forge deve ser adotado como baseline técnico completo.
- Os defaults do Next Forge devem ser aceitos automaticamente quando:

- não houver decisão canônica conflitante do EXECUTAR;
- não houver risco estrutural identificado;
- a decisão estiver adequada ao contexto do produto.

- Todas as dimensões do Next Forge devem ser mantidas.
- O objetivo é personalizar o Turborepo, não reconstruí-lo.
- O monorepo final deve possuir separação clara entre:

- apps;
- packages;
- domínio;
- integrações;
- infraestrutura;
- documentação;
- testes;
- evals.

- Apps não devem criar dependências indevidas entre si.
- Packages devem encapsular capacidades compartilhadas.
- Código proprietário do EXECUTAR deve ser organizado em packages específicos e reutilizáveis.
- O domínio do EXECUTAR deve permanecer independente dos providers sempre que possível.

  

REQUIREMENTS — WEB INSTITUCIONAL

- Todas as rotas relacionadas ao produto devem existir.
- Todas as páginas institucionais devem possuir copy preenchida.
- Nenhuma rota pode ser entregue com:

- Lorem Ipsum;
- placeholder;
- CTA não funcional;
- página vazia;
- conteúdo temporário.

- Quando a copy não estiver disponível no corpus:

- pesquisar benchmarks de produtos comparáveis;
- identificar padrões de comunicação;
- criar copy original para o EXECUTAR;
- registrar como PROPOSED;
- não copiar material protegido de concorrentes.

- Incluir, quando aplicável:

- Homepage;
- Produto;
- Como funciona;
- Recursos;
- Copiloto;
- Mapa-OS;
- Scanner;
- Rotinas;
- Automações;
- Integrações;
- MCP;
- Mobile;
- Pricing;
- Segurança;
- Sobre;
- Contato;
- Blog;
- Docs;
- Changelog;
- Status;
- Termos;
- Privacidade;
- Cookies.

- Implementar:

- SEO;
- metadata;
- OpenGraph;
- sitemap;
- robots;
- structured data quando aplicável;
- navegação;
- footer;
- responsive design;
- accessibility.

  

REQUIREMENTS — WEB APP

- Implementar todas as rotas funcionais relacionadas ao produto.
- Implementar os módulos já previstos no Blueprint:

- Projetos;
- Deliverables;
- Tasks;
- Actions;
- Evidence;
- Overview;
- Roadmap;
- Sprint;
- Agora;
- Hoje;
- Amanhã;
- Ontem;
- Documentos;
- Calendário;
- Copiloto;
- Mapa-OS;
- Scanner;
- Reports;
- Rotinas;
- Automações;
- Workflows;
- Integrações;
- Settings;
- Billing.

- Preservar as views:

- WIP 1:1;
- Lista;
- Kanban.

- Preservar os scopes:

- Single Project;
- Remix Multi-project.

  

REQUIREMENTS — MOBILE

- Criar arquitetura mobile usando Expo/React Native.
- Implementar:

- iOS;
- Android.

- Manter compartilhamento de domínio e contracts com o monorepo.
- Implementar:

- autenticação;
- sessão;
- navegação;
- deep links;
- push notifications;
- projetos;
- tarefas;
- Agora;
- Copiloto;
- Mapa-OS;
- Scanner;
- Reports;
- Settings.

- Implementar câmera e capacidades necessárias ao Scanner.
- Implementar estados:

- loading;
- empty;
- error;
- offline;
- reconnect.

- Configurar:

- EAS Build;
- environments;
- signing;
- builds de desenvolvimento;
- builds preview;
- builds production.

- Entregar builds prontos para:

- TestFlight/App Store;
- Google Play.

  

REQUIREMENTS — BACKEND

- Implementar backend production-ready.
- Implementar:

- APIs;
- webhooks;
- jobs;
- cron;
- queues quando necessárias;
- idempotência;
- retry;
- rate limits;
- validação;
- erros estruturados;
- tracing;
- audit logs.

- Implementar contratos OpenAPI quando aplicável.
- Implementar schemas compartilhados.
- Implementar versionamento de APIs quando necessário.

  

REQUIREMENTS — DADOS

- Implementar database real.
- Implementar:

- schema;
- migrations;
- indexes;
- constraints;
- foreign keys;
- tenancy;
- RLS;
- audit;
- storage;
- attachments;
- retention;
- seed data;
- backup;
- restore.

- Implementar ambiente local, preview/staging e produção.
- Não utilizar schema fake ou manual não versionado.

  

REQUIREMENTS — AUTH

- Implementar:

- signup;
- login;
- logout;
- password recovery;
- OAuth quando aplicável;
- session management;
- token refresh;
- device/session management;
- account deletion;
- account linking;
- roles;
- permissions;
- workspace membership;
- server-side authorization.

- Preservar o boundary de autenticação do Next Forge e adaptá-lo quando necessário.

  

REQUIREMENTS — IA E COPILOTO

- Implementar camada própria para IA.
- Centralizar:

- providers;
- models;
- routing;
- tools;
- prompts;
- structured outputs;
- schemas;
- retry;
- fallback;
- cost tracking;
- tracing;
- evals.

- Implementar o Copiloto de forma funcional.
- Implementar fluxo:

- Sync;
- Understand;
- Structure;
- Visualize;
- Pre-Approve;
- Decompose;
- Execute;
- Reconcile;
- Report;
- Replan.

- Implementar os comandos já definidos no Blueprint.
- Implementar authority rules.

  

REQUIREMENTS — WHATSAPP

- Implementar integração funcional com WhatsApp.
- Implementar:

- conexão;
- identificação do usuário;
- inbound messages;
- outbound messages;
- templates;
- webhooks;
- delivery receipts;
- retry;
- idempotency;
- commands;
- reports;
- audit;
- consent/opt-in;
- disconnect.

- O WhatsApp deve operar como canal do estado canônico, nunca como SOT paralelo.

  

REQUIREMENTS — GMAIL

- Implementar integração real com Gmail.
- Implementar:

- OAuth;
- connect/disconnect;
- refresh;
- revocation;
- search;
- messages;
- threads;
- drafts;
- send quando autorizado;
- labels;
- attachments;
- incremental sync;
- notifications;
- retry;
- audit.

  

REQUIREMENTS — OUTLOOK / MICROSOFT

- Implementar integração com Outlook/Microsoft 365.
- Implementar:

- OAuth;
- connect/disconnect;
- email;
- search;
- drafts;
- send quando autorizado;
- folders;
- attachments;
- sync;
- webhooks/subscriptions;
- refresh;
- revoke;
- audit.

  

REQUIREMENTS — CALENDÁRIOS

- Implementar integração com calendários necessários.
- Incluir, quando aplicável:

- Google Calendar;
- Outlook Calendar.

- Implementar:

- events;
- availability;
- busy blocks;
- recurring events;
- timezones;
- incremental sync;
- conflicts.

- Calendário influencia capacidade, não promove progresso automaticamente.

  

REQUIREMENTS — MCP

- Implementar MCP Server real.
- Implementar MCP Tools para capabilities do EXECUTAR.
- Implementar:

- authentication;
- authorization;
- scopes;
- tenancy;
- tool registry;
- resources quando aplicável;
- prompts quando aplicável;
- schema validation;
- rate limiting;
- tracing;
- audit.

- MCP não pode bypassar regras de domínio ou authority.

  

REQUIREMENTS — MAPA-OS

- Implementar geração funcional.
- Implementar:

- preview;
- versionamento;
- histórico;
- impressão;
- export;
- integração com estado canônico;
- integração com Scanner.

  

REQUIREMENTS — SCANNER

- Implementar Scanner funcional.
- Implementar:

- câmera;
- processamento;
- visual recognition;
- registry;
- VisualSymbolId;
- confidence;
- latch;
- command dispatcher;
- mutation;
- feedback;
- undo;
- audit.

- Criar dataset e evals de reconhecimento.

  

REQUIREMENTS — ROTINAS / AUTOMAÇÕES

- Implementar scheduler real.
- Implementar:

- triggers;
- conditions;
- actions;
- authority;
- retries;
- idempotency;
- run history;
- pause/resume;
- failures;
- reports;
- notifications.

  

REQUIREMENTS — WORKFLOWS

- Implementar engine/configuração de workflows.
- Suportar:

- triggers;
- steps;
- conditions;
- integrations;
- actions;
- retries;
- history;
- observability.

  

REQUIREMENTS — BILLING

- Implementar:

- Trial;
- Solo;
- Pro;
- Business;
- Enterprise.

- Implementar:

- checkout;
- subscription;
- upgrade;
- downgrade;
- cancellation;
- renewals;
- invoices;
- payment failures;
- billing portal;
- webhooks;
- usage;
- seats;
- Execution Credits;
- overage.

- Implementar entitlement engine centralizado.

  

REQUIREMENTS — ENVIRONMENT

- Criar .env.example completo.
- Criar env files/configs nativos quando aplicável.
- Cada app/package deve declarar as variáveis necessárias.
- Configurar:

- local;
- test;
- preview;
- staging;
- production.

- Implementar schema validation.
- Nenhum secret pode ser versionado.
- Configurar secrets em:

- Vercel;
- Expo/EAS;
- database;
- providers;
- CI.

  

REQUIREMENTS — DESIGN SYSTEM

- Preservar a dimensão design-system do Next Forge.
- Adaptá-la para consumir o Design System canônico do EXECUTAR.
- Não permitir criação de uma segunda identidade visual.
- Aplicar o Design System em:

- Web App;
- Institutional Web;
- Storybook;
- Email;
- Mobile quando aplicável.

- Manter tokens e componentes governados.

  

REQUIREMENTS — ANALYTICS E OBSERVABILIDADE

- Implementar:

- product analytics;
- business telemetry;
- logs;
- traces;
- metrics;
- AI cost;
- provider errors;
- mobile crashes;
- web errors;
- API performance;
- DB performance;
- webhook monitoring;
- alerts.

- Implementar métricas comerciais já formalizadas no Blueprint.

  

REQUIREMENTS — SEGURANÇA

- Implementar:

- secrets scanning;
- dependency scanning;
- SAST;
- authentication tests;
- authorization tests;
- RLS tests;
- rate limiting;
- CSRF quando aplicável;
- XSS protection;
- injection protection;
- SSRF protections;
- webhook signatures;
- OAuth state/PKCE;
- secure headers;
- audit;
- abuse prevention.

  

REQUIREMENTS — PRIVACIDADE

- Implementar:

- Privacy Policy;
- data inventory;
- consent;
- account deletion;
- export;
- retention;
- token revocation;
- integration disconnect;
- redaction;
- privacy boundaries.

  

REQUIREMENTS — TESTES

- Implementar:

- unit tests;
- integration tests;
- contract tests;
- database tests;
- RLS tests;
- API tests;
- webhook tests;
- component tests;
- visual tests;
- E2E Web;
- E2E Mobile;
- AI evals;
- Scanner evals;
- performance tests;
- accessibility tests;
- security tests.

  

REQUIREMENTS — CI/CD

- Todo PR deve executar os checks aplicáveis.
- Incluir:

- install;
- format;
- boundaries;
- lint;
- typecheck;
- tests;
- build;
- security;
- evals.

- Implementar:

- Preview;
- Staging;
- Production.

- Implementar:

- migrations gate;
- smoke tests;
- health checks;
- rollback.

  

REQUIREMENTS — CONTEÚDO

- Todas as rotas devem possuir conteúdo final.
- Quando faltar conteúdo:

- pesquisar benchmark;
- produzir conteúdo original;
- registrar origem/evidência;
- classificar como PROPOSED.

- Nenhum placeholder pode chegar ao release.

  

CONSTRAINTS

- Next Forge é o baseline técnico integral.
- Aceitar automaticamente os defaults do Next Forge quando não houver conflito canônico.
- Todas as dimensões do Next Forge devem ser preservadas.
- O objetivo é personalizar o Turborepo.
- Não reconstruir a infraestrutura do template sem necessidade.
- O EXECUTAR prevalece quando possuir uma decisão canônica própria.
- O Design System canônico do EXECUTAR é autoridade visual.
- Não criar uma segunda fonte visual.
- Código novo relevante deve nascer na arquitetura final.
- Não desenvolver primeiro uma aplicação provisória completa para depois migrar.
- Evitar abstrações para requisitos hipotéticos.
- Evitar overengineering.
- Implementar vertical slices funcionais.
- Persistir progresso no Git e no filesystem.
- Testar continuamente.
- Atualizar documentação e rastreabilidade após implementação.
- Nenhum GAP técnico bloqueante deve ser simplesmente ignorado.
- Quando faltar especificação:

- pesquisar;
- comparar;
- propor;
- registrar evidência;
- criar ADR/SPEC quando necessário;
- implementar.

- Benchmark nunca deve ser representado como requisito antigo do EXECUTAR.
- Arquitetura privada não observável de concorrentes não pode ser inferida como fato.
- Priorizar práticas de produto, arquitetura e código compatíveis com o estado da arte de 2026.

  

POLÍTICA DE RESOLUÇÃO DE GAPS

- Para cada GAP técnico:

- verificar o corpus;
- verificar decisão existente do EXECUTAR;
- verificar default Next Forge;
- consultar documentação oficial;
- realizar web search;
- estudar benchmark de produtos da mesma categoria;
- estudar OSS maduro quando aplicável;
- comparar alternativas;
- registrar fontes;
- classificar a decisão como PROPOSED;
- criar ADR para decisões estruturais;
- criar SPEC quando aplicável;
- implementar;
- testar;
- atualizar rastreabilidade.

- Nenhum GAP técnico bloqueante deve permanecer indefinido sem justificativa explícita.

  

ESTRATÉGIA DE EXECUÇÃO

- Aplicar:

- Blueprint canônico;
- Architecture Closure;
- Architecture Gate;
- Claude Code Execution Layer;
- migração in-place;
- Next Forge/Turborepo;
- foundation;
- vertical slices;
- integração;
- testes;
- evals;
- security;
- deploy;
- documentation reconciliation;
- final handoff.

- Para cada capability:

- PLAN;
- DESIGN;
- IMPLEMENT;
- TEST;
- VERIFY;
- DOCUMENT;
- HANDOFF.

  

DEFINITION OF PRODUCT COMPLETE

O EXECUTAR somente poderá ser considerado produto final quando possuir:

- Web institucional completo.
- Web App completo.
- iOS funcional.
- Android funcional.
- Backend funcional.
- Database funcional.
- Autenticação funcional.
- Autorização funcional.
- Copiloto funcional.
- IA funcional.
- Mapa-OS funcional.
- Scanner funcional.
- Rotinas funcionais.
- Automações funcionais.
- Workflows funcionais.
- Reports funcionais.
- WhatsApp funcional.
- Gmail funcional.
- Outlook funcional.
- Calendários funcionais quando aplicáveis.
- MCP funcional.
- Billing funcional.
- Usage/credits funcional.
- Notifications funcionais.
- Design System aplicado.
- Analytics funcionando.
- Observabilidade funcionando.
- Segurança verificada.
- Privacidade implementada.
- Acessibilidade verificada.
- Performance verificada.
- Testes unitários passando.
- Testes de integração passando.
- E2E Web passando.
- E2E Mobile passando.
- AI evals passando.
- Scanner evals passando.
- CI passando.
- CD funcionando.
- Web em produção.
- Builds iOS de produção.
- Builds Android de produção.
- Backup/restore definidos e testados.
- Documentação técnica completa.
- Documentação de usuário completa.
- Runbooks completos.
- Release Notes.
- Known Issues.
- Test Report.
- Security Report.
- Performance Report.
- Accessibility Report.
- Final Handoff.

  

REGRA FINAL

- documentado ≠ implementado
- implementado ≠ funcional
- funcional ≠ testado
- testado ≠ verificado
- verificado ≠ deployed
- deployed ≠ released
- RELEASED somente poderá ser declarado quando todos os gates obrigatórios do Definition of Product Complete estiverem em PASS.
- A missão final é:  
    usar tudo o que o Next Forge já resolveu, preservar sua arquitetura integral, personalizar o Turborepo para o EXECUTAR, concentrar a engenharia no diferencial proprietário do produto e entregar uma aplicação Web + iOS + Android + Backend + IA + Integrações + MCP + Billing + Operação completamente funcional, testada, verificável e pronta para produção.

Esse texto já pode funcionar como base do futuro FINAL-PRODUCT-REQ-001 e do contrato mestre entregue ao Claude Code.

1. Regra fundamental: preservar todas as dimensões

Não teremos mais a matriz:

KEEP / ADAPT / REPLACE / REMOVE / DEFER

como regra geral.

A política passa a ser:

NEXT FORGE

│

├── apps/app               PRESERVE

├── apps/api               PRESERVE

├── apps/web               PRESERVE

├── apps/email             PRESERVE

├── apps/docs              PRESERVE

├── apps/studio            PRESERVE

├── apps/storybook         PRESERVE

│

├── auth                   PRESERVE

├── database               PRESERVE

├── design-system          PRESERVE

├── billing                PRESERVE

├── email                  PRESERVE

├── CMS                    PRESERVE

├── analytics              PRESERVE

├── observability          PRESERVE

├── security               PRESERVE

├── collaboration          PRESERVE

└── deployment             PRESERVE

O Next Forge atual realmente fornece essa composição de apps e um conjunto amplo de integrações como Clerk, Prisma, Neon, Stripe, Resend, PostHog, Sentry, BaseHub, Vercel etc. 

A regra será:

Preservar a dimensão e sua responsabilidade arquitetural, mesmo quando a implementação precisar ser adaptada ao EXECUTAR.

Isso é diferente de obrigar cada integração a estar ativa já no primeiro release. O próprio Next Forge informa que apenas autenticação e PostgreSQL são necessários para o primeiro boot; Stripe, analytics, email e outras integrações podem permanecer configuráveis e degradar de forma controlada até serem ativadas. 

  

  

  

2. Defaults são aceitos automaticamente

Nova precedência:

Existe decisão canônica EXECUTAR?

│

├── SIM

│    ↓

│   adaptar Next Forge ao EXECUTAR

│

└── NÃO

     ↓

    existe default Next Forge?

     │

     ├── SIM → aceitar automaticamente

     │

     └── NÃO

          ↓

        pesquisar benchmark 2026

          ↓

        escolher solução

          ↓

        documentar evidência

          ↓

        implementar

Portanto, Claude não deve parar para perguntar:

“Qual biblioteca usamos para X?”

se o Next Forge já resolveu X adequadamente e não há conflito com o corpus.

Isso elimina uma grande quantidade de microdecisões.

  

  

  

3. Hierarquia de autoridade

A ordem correta será:

1. EXECUTAR CANONICAL SOT

        ↓

2. EXECUTAR ADR / SPEC / CONTRACT

        ↓

3. NEXT FORGE DEFAULT

        ↓

4. DOCUMENTAÇÃO OFICIAL DA STACK

        ↓

5. BENCHMARK 2026

        ↓

6. DECISÃO TÉCNICA DERIVADA

Isso resolve uma questão importante.

Por exemplo, Next Forge atualmente fornece seu próprio Design System baseado em shadcn/ui, estilo New York, Tailwind e CSS variables. 

Mas o EXECUTAR já tem uma autoridade visual própria.

Então não removemos:

packages/design-system/

Fazemos:

packages/design-system/

        ↓

EXECUTAR ADAPTER

        ↓

EXECUTAR canonical tokens

EXECUTAR components

EXECUTAR typography

EXECUTAR visual grammar

        ↓

apps/app

apps/web

apps/storybook

apps/email

Assim:

o package do Next Forge permanece; o conteúdo visual passa a respeitar o EXECUTAR.

O Storybook também permanece e passa a documentar os componentes do EXECUTAR, em vez de ser eliminado. Hoje o Next Forge já o utiliza como workshop do Design System. 

  

  

  

4. Personalizar o Turborepo, não reconstruí-lo

Essa distinção deve aparecer literalmente no ADR:

O objetivo não é substituir a arquitetura Next Forge, mas especializá-la para o domínio EXECUTAR.

Então:

NEXT FORGE

       +

EXECUTAR BLUEPRINT

       =

EXECUTAR TURBOREPO

Não:

NEXT FORGE

       ↓

remover metade

       ↓

reconstruir arquitetura própria

Isso aproveita justamente a propriedade arquitetural dos packages do Next Forge: código compartilhado fica isolado e implementações podem evoluir atrás das interfaces do package.

6. Regra de NO-GAP

Este é o ponto mais relevante do que você definiu.

Até agora nossa governança diz corretamente:

não inventar requisito para preencher lacuna.

Isso deve continuar.

Mas podemos acrescentar:

GAP não pode permanecer sem tratamento quando bloquear implementação técnica.

Portanto:

GAP encontrado

    ↓

CLASSIFICAR

    ↓

é requisito de produto?

    │

    ├─ SIM

    │   não inventar

    │   pesquisar corpus/benchmark

    │   gerar PROPOSED

    │

    └─ NÃO

        é decisão técnica?

            ↓

         WEB RESEARCH

            ↓

         BENCHMARK

            ↓

         OFFICIAL DOCS

            ↓

         DECISION

            ↓

         ADR/SPEC

            ↓

         IMPLEMENT

Isso preserva o princípio de evidência sem paralisar o desenvolvimento.

  

  

  

7. O Claude não pode simplesmente “inventar a melhor prática”

A política deve exigir pesquisa.

Quando uma especificação técnica não existir:

SEARCH ORDER

  

1. documentação oficial do framework/provider

2. documentação oficial Next Forge

3. padrões oficiais da plataforma

4. projetos/produtos comparáveis

5. OSS maduro da mesma categoria

6. literatura técnica atual

Depois:

EVIDENCE

    ↓

COMPARISON

    ↓

DECISION

    ↓

RATIONALE

    ↓

ADR

    ↓

IMPLEMENTATION

Por exemplo:

GAP:

estratégia de realtime não definida

  

Claude:

1. verifica Next.js/Vercel

2. verifica Supabase realtime

3. verifica arquitetura atual

4. pesquisa padrões usados por produtos

   colaborativos/work-management

5. compara alternativas

6. escolhe solução

7. registra ADR

8. implementa

  

  

  

9. Benchmark de concorrente tem um limite

Não devemos fazer algo como:

“Motion provavelmente usa tecnologia X internamente, então vamos usar também.”

Se a arquitetura interna não é pública, isso seria especulação.

Podemos benchmarkar publicamente:

- comportamento;
- UX;
- API pública;
- integrações;
- SLA divulgado;
- funcionalidades;
- performance observável;
- documentação;
- segurança publicada;
- modelos de dados expostos em API;
- arquitetura OSS quando disponível.

Então:

produto comparável

        ↓

PUBLIC EVIDENCE

        ↓

behavior/pattern

        ↓

technical requirement

        ↓

official framework research

        ↓

EXECUTAR design

Não copiar arquitetura privada imaginada.

  

  

  

9. Classificação epistemológica dessa resolução

Eu introduziria uma distinção como:

CORPUS_DIRECT

requisito existente EXECUTAR

  

CORPUS_DERIVED

conclusão derivada do corpus existente

  

BENCHMARK_DIRECT

comportamento/documentação pública observada

  

BENCHMARK_DERIVED

conclusão técnica sustentada pelo benchmark

  

PROPOSED

decisão nova adotada para o EXECUTAR

  

GAP

ainda sem evidência suficiente

Mas, para não quebrar sua taxonomia atual, podemos manter oficialmente só:

CORPUS_DIRECT

CORPUS_DERIVED

GAP

PROPOSED

e acrescentar metadata:

evidence_origin:

  - corpus

  - official_documentation

  - next_forge_default

  - competitor_benchmark

  - open_source_benchmark

  

source_refs:

  - ...

Melhor que criar uma segunda taxonomia.

  

  

  

10. Política para resolução automática

Eu permitiria Claude resolver automaticamente decisões reversíveis.

Exemplo:

GAP técnico

+

não existe decisão EXECUTAR

+

Next Forge possui default

=

USE DEFAULT

Ou:

GAP técnico

+

não existe default

+

benchmark apresenta padrão dominante

+

decisão reversível

=

ADOPT AS PROPOSED

→ ADR

→ implement

Para decisões arquiteturais de alto impacto:

tenancy

identity

canonical IDs

authorization

event semantics

data ownership

financial ledger semantics

a decisão ainda pode ser produzida automaticamente pela pesquisa, mas precisa ter um ADR explícito antes do código.

Como você determinou que não quer lacunas, ela não fica indefinida: Claude escolhe a solução melhor sustentada e registra:

status: proposed_from_benchmark

antes de implementar.

  

  

  

11. Regra de conflito

Eu colocaria no CLAUDE.md:

CONFLICT PRECEDENCE

  

Canonical EXECUTAR requirement

> accepted EXECUTAR ADR

> EXECUTAR contract/spec

> Next Forge default

> official framework guidance

> benchmark-derived proposal

> local implementation convenience

Então nenhuma “best practice” pesquisada pode sobrescrever silenciosamente um requisito do produto.

  

  

  

12. Todas as dimensões do Next Forge permanecem

Isso produz uma arquitetura mais próxima desta:

apps/

├── app/          → EXECUTAR workspace

├── api/          → API/webhooks/cron

├── web/          → site comercial

├── email/        → reports/notifications

├── docs/         → documentação pública

├── studio/       → data tooling

└── storybook/    → EXECUTAR Design System

  

packages/

├── analytics/

├── auth/

├── billing/

├── cms/

├── collaboration/

├── database/

├── design-system/

├── email/

├── observability/

├── security/

├── seo/

├── webhooks/

│

├── domain/             ← EXECUTAR

├── application/        ← EXECUTAR

├── agent-runtime/      ← EXECUTAR

├── routines/           ← EXECUTAR

├── mapa-os/            ← EXECUTAR

├── scanner/            ← EXECUTAR

├── reports/            ← EXECUTAR

├── integrations/       ← EXECUTAR

└── schemas/            ← EXECUTAR

Então nós somamos domínio ao Next Forge, em vez de reduzir Next Forge ao domínio.

  

  

  

13. Isso também muda o papel do Blueprint

O Blueprint não define cada escolha de biblioteca.

Ele define:

WHAT

WHY

RULES

CONSTRAINTS

AC

DOMAIN

Next Forge fornece uma quantidade grande de:

HOW DEFAULT

E quando falta HOW:

WEB RESEARCH

+

BENCHMARK

+

SYSTEM DESIGN

Isso reduz dramaticamente a necessidade de criar documentação especulativa antes do desenvolvimento.

  

  

  

14. Política canônica que eu registraria

Eu chamaria:

ENG-POLICY-001 — Next Forge Customization & Technical Gap Resolution

Com estas regras:

R01

Next Forge é o baseline técnico integral.

  

R02

Todas as dimensões do template devem ser preservadas.

  

R03

Defaults do Next Forge são aceitos automaticamente

quando não houver decisão canônica conflitante do EXECUTAR.

  

R04

O objetivo é personalizar o Turborepo,

não reconstruir sua fundação.

  

R05

Componentes proprietários/canônicos do EXECUTAR

adaptam os packages correspondentes.

  

R06

O Design System EXECUTAR é a autoridade visual.

packages/design-system permanece,

mas consome/implementa essa autoridade.

  

R07

Nenhuma lacuna técnica bloqueante deve permanecer sem resolução.

  

R08

Ausência de especificação técnica inicia pesquisa web obrigatória.

  

R09

Pesquisa prioriza documentação oficial,

Next Forge, stack oficial, benchmarks comparáveis

e OSS maduro.

  

R10

Benchmark não é requisito existente.

Decisões novas são PROPOSED e possuem source_refs.

  

R11

Decisão reversível pode ser adotada automaticamente.

  

R12

Decisão estrutural/irreversível exige ADR

antes da implementação.

  

R13

Nenhuma inferência sobre arquitetura privada de concorrentes

pode ser tratada como evidência.

  

R14

Código deve nascer na arquitetura final Turborepo.

  

R15

Cada implementação fecha:

PLAN → DESIGN → CODE → TEST → VERIFY → DOCUMENT → HANDOFF.

Essa política é melhor alinhada ao seu objetivo: usar tudo que o Next Forge já resolveu, evitar reinventar infraestrutura e concentrar engenharia na diferenciação proprietária do EXECUTAR.