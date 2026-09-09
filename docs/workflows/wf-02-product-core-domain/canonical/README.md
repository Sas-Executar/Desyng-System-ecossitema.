# WF-02 — Product & Core Domain

Status: `BASELINE_READY_FOR_REVIEW`  
Scope: product/domain specification only  
Canonical base: `3784189e789a5b16fc2bdaaa6854a4bdc1bcad77`

## Purpose

This package executes the specification phase of WF-02 without claiming application implementation or production validation.

## Deliverables

| Task | Scope | Status |
|---|---|---|
| PROD-001 | Product vision, problem, ICP and value proposition | SPECIFIED |
| PROD-002 | Product structure and entity hierarchy | SPECIFIED |
| PROD-003 | Core business rules | SPECIFIED_WITH_GAPS |
| PROD-004 | States and state machine | SPECIFIED_WITH_PROPOSALS |
| PROD-005 | Main user journeys and use cases | SPECIFIED |
| PROD-006 | Capability map and dependencies | SPECIFIED |
| PROD-007 | Functional data model | SPECIFIED_WITH_PROPOSALS |
| PROD-008 | Requirements, acceptance criteria and edge cases | SPECIFIED |
| PROD-009 | Permissions and tenancy | SPECIFIED_WITH_PROPOSALS |
| PROD-010 | Domain events, commands and queries | SPECIFIED_WITH_PROPOSALS |

The consolidated normative contract is in `WF-02-CANONICAL-SPEC.md`. Source mapping, conflicts and open decisions are in `TRACEABILITY.md`.

## Epistemic labels

- `CORPUS_DIRECT`: explicitly stated in BENCH-01/BENCH-02.
- `CORPUS_DERIVED`: necessary normalization derived from direct statements.
- `PROPOSED`: design choice that requires approval before becoming binding.
- `GAP`: information not defined by the current corpus.

## Gate

`WF02_PRODUCT_DOMAIN_BASELINE_READY = PASS`

This gate means the reviewable domain baseline exists. It does not mean every proposal is accepted, code exists, or production tests passed.

