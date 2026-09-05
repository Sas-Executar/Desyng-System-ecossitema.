# Callout Protocol — ponte com ADR-001

Este documento traduz `references/source-docs/ADR/ADR-001_PROTOCOLO_NATIVO_CALLOUTS_MULTIPLATAFORMA.md` (Aceito) para o vocabulário de tokens deste design system. Não redefine a decisão do ADR — apenas conecta cada peça do protocolo a um token/valor concreto do Desyng System, para que a implementação em Web (Astro/React) e Native (Expo/React Native/Tamagui) use exatamente as mesmas regras visuais.

## Por que existe

Callouts (`info`, `tip`, `success`, `warning`, `danger`, `question`, `example`, `note`, `definition`, `source`, `cta`, `accessibility`) precisam de aparência idêntica em Blog, App, CMS (Payload) e Markdown, sem que o conteúdo carregue cor, classe CSS ou estilo inline (regra central do ADR-001, seção 2: "O conteúdo não deve armazenar regras visuais como cores, classes CSS ou estilos inline").

## Arquitetura (do ADR-001)

```
AUTHORING (Markdown | Payload CMS | IA | API)
        ↓
NORMALIZATION (Callout Schema + Validator, Zod)
        ↓
SEMANTIC MODEL (CalloutNode)
        ↓
RENDERERS (Web | Native | Print | Future Channels)
```

## Registry → tokens deste sistema

O `CALLOUT_REGISTRY` do ADR-001 define `icon`, `tone` e `role` por tipo. Este package resolve `tone` para tokens semânticos concretos:

| type | icon (Lucide) | tone | background | border | foreground | icon color |
|---|---|---|---|---|---|---|
| `info` | Info | informative | `azure.2` | `azure.6` | `text.primary` | `azure.9` |
| `tip` | Lightbulb | positive | `green.2` | `green.6` | `text.primary` | `green.9` |
| `success` | CircleCheck | success | `green.2` | `green.6` | `text.primary` | `green.9` |
| `warning` | TriangleAlert | warning | `warning.2` | `warning.6` | `text.primary` | `warning.9` |
| `danger` | ShieldAlert | danger | `error.2` | `error.6` | `text.primary` | `error.9` |
| `question` | CircleHelp | interactive | `azure.2` | `azure.6` | `text.primary` | `azure.9` |
| `example` | BookOpen | example | `neutral.2` | `neutral.6` | `text.primary` | `neutral.10` |
| `note` | FileText | neutral | `neutral.2` | `neutral.6` | `text.primary` | `neutral.10` |
| `definition` | FileText | neutral | `neutral.2` | `neutral.6` | `text.primary` | `neutral.10` |
| `source` | BookOpen | neutral | `neutral.2` | `neutral.6` | `text.secondary` | `neutral.9` |
| `cta` | — | action | `green.9` (sólido) | — | `text.on_brand` | `text.on_brand` |
| `accessibility` | CircleHelp | informative | `azure.2` | `azure.6` | `text.primary` | `azure.9` |

**Nota de proveniência (`ICO-002`, `00_GOVERNANCE/DS-FORM-001_RESPONSES.csv`):** a biblioteca de ícones `Lucide` é **INFERRED** — os nomes usados no registry do ADR-001 (`Info`, `Lightbulb`, `CircleCheck`, `TriangleAlert`, `ShieldAlert`, `CircleHelp`, `BookOpen`, `FileText`) correspondem exatamente a componentes do pacote `lucide-react`/`lucide-react-native`, mas o ADR não declara a biblioteca explicitamente. Confirmar antes de travar a dependência.

Geometria: radius `md` (8px), border `thin` (1px), padding `space.4` (16px), ícone 20px alinhado ao topo do primeiro parágrafo.

## Estrutura visual (todas as plataformas)

```
┌───────────────────────────────────────┐
│ [icon]  Título opcional                │
│         Corpo do callout (RichContent) │
└───────────────────────────────────────┘
```

- Sem título: ícone alinhado ao centro vertical da primeira linha.
- `collapsible`: título vira trigger de disclosure (`aria-expanded`), ícone chevron adicional à direita.
- `printMode: 'compact'`: remove padding/ícone, mantém apenas borda esquerda 2px + texto (paridade com `.prose blockquote` de `styles/typography.css`).
- `printMode: 'hide'`: não renderiza no PDF/impressão.

## Dark mode

Usa os mesmos tokens semânticos — como o registry aponta para `color.semantic.*` e não para HEX, o callout já herda a troca de tema via `[data-theme="dark"]` em `theme.css`, sem lógica adicional.

## Acessibilidade

- `role="note"` (tipos informativos) ou `role="alert"` (`warning`/`danger`, conforme `role` do registry).
- Contraste dos pares fundo/texto/ícone segue os mesmos pares validados em `ACCESSIBILITY.md` (fundo passo 2, texto/ícone passo 9-11 das famílias).
- Nunca depender só da cor: todo callout carrega ícone + (quando aplicável) rótulo textual do tipo — regra herdada de `SPEC-ACCESSIBILITY-001`.

## Pipeline Markdown (do ADR-001, inalterado)

```
Markdown → remark-parse → remark-gfm → remark-directive → remarkCalloutPlugin
  → CalloutNode/HAST → remark-rehype → rehype-sanitize → rehype-react → CalloutWeb
```

Sintaxe de autoria:

```md
:::callout{type="warning" title="Atenção"}
Texto do callout.
:::
```

## Payload CMS

Bloco nativo `Callout` via `Payload Lexical BlocksFeature` (ADR-001 seção 9) — os campos `type`/`title`/`body` alimentam o mesmo `CalloutNode`, garantindo que o Blog (Astro consumindo Payload como headless CMS, ver `00_GOVERNANCE/SOT_RESOLUTION.md §2`) renderize com o mesmo registry de tokens.
