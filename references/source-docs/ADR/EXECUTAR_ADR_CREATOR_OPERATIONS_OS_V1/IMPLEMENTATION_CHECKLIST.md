# IMPLEMENTATION CHECKLIST — EXECUTAR Creator Operations OS

## 01 — Foundation

- [ ] Confirmar Payload/PostgreSQL como SOT.
- [ ] Criar branch de arquitetura.
- [ ] Criar namespace `/admin/executar`.
- [ ] Definir convenção de IDs.
- [ ] Definir environments e secrets.

## 02 — Data Model

- [ ] Criar `problems`.
- [ ] Criar `content`.
- [ ] Criar `derivatives`.
- [ ] Criar `assets`.
- [ ] Criar `channels`.
- [ ] Criar `publications`.
- [ ] Criar `campaigns`.
- [ ] Criar `ctas`.
- [ ] Criar `products`.
- [ ] Criar `metrics`.
- [ ] Criar `automation_runs`.
- [ ] Criar `integration_accounts`.

## 03 — UI

- [ ] Criar Custom View EXECUTAR.
- [ ] Criar dashboard Hoje.
- [ ] Criar Inbox.
- [ ] Criar Pipeline/Kanban.
- [ ] Criar calendário.
- [ ] Criar telas de Assets.
- [ ] Criar tela de Distribuição.
- [ ] Criar tela de Automações.
- [ ] Criar tela de Analytics.
- [ ] Validar responsividade mobile.

## 04 — Workflow

- [ ] Implementar enum de estados.
- [ ] Implementar regras de transição.
- [ ] Implementar bloqueios/dependências.
- [ ] Implementar QA.
- [ ] Implementar ações em lote seguras.

## 05 — Drafts e Publishing

- [ ] Habilitar versions/drafts.
- [ ] Habilitar autosave onde aplicável.
- [ ] Habilitar scheduled publish.
- [ ] Testar publish/unpublish.
- [ ] Registrar `published_at`.
- [ ] Registrar `public_url`.

## 06 — Jobs

- [ ] Configurar Jobs Queue.
- [ ] Criar fila `publishing`.
- [ ] Criar fila `analytics`.
- [ ] Criar fila `crm`.
- [ ] Criar fila `media`.
- [ ] Criar fila `notifications`.
- [ ] Criar fila `maintenance`.
- [ ] Implementar `waitUntil`.
- [ ] Implementar recorrências.
- [ ] Configurar runner apropriado ao deploy.
- [ ] Implementar retry e idempotência.

## 07 — Webhooks

- [ ] Criar endpoint de entrada.
- [ ] Verificar assinatura.
- [ ] Deduplicar eventos.
- [ ] Persistir payload hash.
- [ ] Persistir resultado.
- [ ] Exibir erros no dashboard.

## 08 — Integrations

- [ ] Canva.
- [ ] Metricool.
- [ ] HubSpot.
- [ ] n8n/Make apenas onde necessário.
- [ ] Object Storage.

## 09 — Observability

- [ ] Registrar `run_id`.
- [ ] Registrar `attempt`.
- [ ] Registrar duração.
- [ ] Registrar erros.
- [ ] Criar view Jobs Falhos.
- [ ] Criar view Publicações Atrasadas.
- [ ] Criar view Integrações Desconectadas.

## 10 — Acceptance

- [ ] Um Problem gera Content relacionado.
- [ ] Content gera Derivatives.
- [ ] Asset é associado sem duplicação.
- [ ] Publication agenda job futuro.
- [ ] Job publica ou chama executor externo.
- [ ] Resultado retorna ao Payload.
- [ ] URL final fica registrada.
- [ ] Métricas ficam vinculadas.
- [ ] CRM recebe atribuição de origem.
- [ ] Operação funciona sem planilha paralela.
