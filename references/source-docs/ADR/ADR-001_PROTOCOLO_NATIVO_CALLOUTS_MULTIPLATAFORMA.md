# ADR-001 — Protocolo Nativo de Callouts Multiplataforma

- **Status:** Aceito
- **Data:** 2026-09-05
- **Owners:** EXECUTAR / Risco Cognitivo
- **Escopo:** Blog, App, CMS, Markdown, IA, impressão e futuros canais
- **Decisão arquitetural:** Adotar um protocolo semântico único de Callouts, independente de plataforma, com schema compartilhado, registry de variantes e renderizadores específicos para Web e Native.

---

## 1. Contexto

O ecossistema EXECUTAR / Risco Cognitivo precisa publicar conteúdo estruturado em múltiplos canais, principalmente:

- Blog em Next.js + React + Payload CMS.
- App em Expo + React Native + Tamagui.
- Conteúdo originado de Markdown.
- Conteúdo produzido ou transformado por IA.
- Conteúdo renderizado para impressão/PDF.
- Conteúdo reutilizado futuramente em newsletter, social, Prisma e outros formatos.

Hoje, elementos como `INFO`, `TIP`, `SUCCESS`, `WARNING`, `DANGER`, `QUESTION`, `EXAMPLE` e `NOTE` podem ser reproduzidos visualmente, porém sem um contrato semântico único cada plataforma tende a implementar sua própria versão.

Isso cria duplicação, divergência visual, inconsistência editorial, dificuldade de manutenção e perda de portabilidade.

---

## 2. Problema

Precisamos permitir que um autor ou agente publique um Callout uma única vez e obtenha automaticamente:

1. semântica consistente;
2. aparência coerente com o Design System;
3. renderização Web;
4. renderização React Native;
5. compatibilidade com Payload CMS;
6. compatibilidade com Markdown;
7. segurança na renderização;
8. suporte a dark mode;
9. suporte a impressão;
10. telemetria e acessibilidade.

O conteúdo não deve armazenar regras visuais como cores, classes CSS ou estilos inline.

---

## 3. Drivers da decisão

A solução deve atender aos seguintes critérios:

- **Portabilidade:** o mesmo conteúdo precisa funcionar em mais de um renderer.
- **Governança:** apenas tipos autorizados de Callout podem ser usados.
- **Design System:** aparência definida por tokens, não pelo conteúdo.
- **Escalabilidade editorial:** autores e agentes não devem precisar conhecer CSS ou componentes.
- **Segurança:** HTML arbitrário não deve ser necessário.
- **Acessibilidade:** contraste, ícones, labels e hierarquia devem ser consistentes.
- **Manutenibilidade:** novas variantes devem ser adicionadas pelo registry.
- **Compatibilidade:** integração com Payload Lexical, Markdown e React Native.
- **Observabilidade:** Callouts relevantes podem gerar eventos analíticos.
- **Print-first:** o mesmo conteúdo deve possuir representação aceitável em PDF/impressão.

---

## 4. Decisão

Será criado um **Callout Protocol** compartilhado.

O protocolo terá quatro camadas principais:

```text
AUTHORING
Markdown | Payload CMS | IA | API
        ↓
NORMALIZATION
Callout Schema + Validator
        ↓
SEMANTIC MODEL
CalloutNode
        ↓
RENDERERS
Web | Native | Print | Future Channels
```

A unidade arquitetural central será `CalloutNode`.

Markdown, Payload Lexical, React Web e React Native não serão a fonte de verdade do componente.

---

## 5. Contrato semântico

Schema inicial:

```ts
export type CalloutType =
  | 'info'
  | 'tip'
  | 'success'
  | 'warning'
  | 'danger'
  | 'question'
  | 'example'
  | 'note'
  | 'definition'
  | 'source'
  | 'cta'
  | 'accessibility'

export interface CalloutNode {
  id?: string
  type: CalloutType
  title?: string
  body: RichContent
  icon?: string
  severity?: 'low' | 'medium' | 'high' | 'critical'
  collapsible?: boolean
  defaultOpen?: boolean
  href?: string
  source?: string
  analyticsKey?: string
  printMode?: 'full' | 'compact' | 'hide'
}
```

O schema deverá ser validado com Zod.

---

## 6. Registry de Callouts

A aparência não será definida pelo conteúdo.

Será mantido um registry central:

```ts
export const CALLOUT_REGISTRY = {
  info: {
    icon: 'Info',
    tone: 'informative',
    role: 'note'
  },
  tip: {
    icon: 'Lightbulb',
    tone: 'positive',
    role: 'note'
  },
  success: {
    icon: 'CircleCheck',
    tone: 'success',
    role: 'status'
  },
  warning: {
    icon: 'TriangleAlert',
    tone: 'warning',
    role: 'alert'
  },
  danger: {
    icon: 'ShieldAlert',
    tone: 'danger',
    role: 'alert'
  },
  question: {
    icon: 'CircleHelp',
    tone: 'interactive',
    role: 'note'
  },
  example: {
    icon: 'BookOpen',
    tone: 'example',
    role: 'note'
  },
  note: {
    icon: 'FileText',
    tone: 'neutral',
    role: 'note'
  }
} as const
```

O registry apontará para tokens de:

- background;
- border;
- foreground;
- icon;
- spacing;
- radius;
- typography;
- print style;
- dark mode;
- interaction.

---

## 7. Sintaxe de autoria Markdown

Sintaxe preferencial:

```md
:::callout{type="warning" title="Atenção"}
O relatório contém uma limitação que precisa ser considerada.
:::
```

Exemplo:

```md
:::callout{type="tip" title="Como reduzir carga cognitiva"}
Divida a atividade em unidades menores e torne o próximo passo explícito.
:::
```

A sintaxe será transformada em `CalloutNode` durante o pipeline Markdown.

---

## 8. Pipeline Markdown

Pipeline recomendado:

```text
Markdown
 ↓
remark-parse
 ↓
remark-gfm
 ↓
remark-directive
 ↓
custom remarkCalloutPlugin
 ↓
CalloutNode / HAST
 ↓
remark-rehype
 ↓
rehype-sanitize
 ↓
rehype-react
 ↓
CalloutWeb
```

Dependências principais:

```bash
pnpm add unified remark-parse remark-gfm remark-directive
pnpm add remark-rehype rehype-sanitize rehype-react
pnpm add unist-util-visit zod
```

`rehype-raw` não será habilitado por padrão.

---

## 9. Payload CMS

O editor Payload deverá disponibilizar um bloco nativo `Callout`.

Estratégia preferencial:

```text
Payload Lexical
 └── BlocksFeature
      └── CalloutBlock
```

Campos mínimos:

```ts
{
  slug: 'callout',
  fields: [
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        'info',
        'tip',
        'success',
        'warning',
        'danger',
        'question',
        'example',
        'note'
      ]
    },
    {
      name: 'title',
      type: 'text'
    },
    {
      name: 'body',
      type: 'richText',
      required: true
    }
  ]
}
```

O CMS não permitirá seleção manual de cor.

A cor será derivada de `type → registry → design tokens`.

---

## 10. Renderer Web

Componente:

```tsx
<Callout
  type="warning"
  title="Atenção"
>
  Conteúdo
</Callout>
```

O componente Web receberá apenas propriedades semânticas.

Responsabilidades:

- aplicar tokens;
- mapear ícone;
- aplicar ARIA;
- suportar links;
- suportar collapse;
- suportar dark mode;
- emitir analytics quando aplicável;
- respeitar preferências de movimento;
- oferecer estilo de impressão.

---

## 11. Renderer Native

O App não deverá renderizar HTML proveniente do blog.

Fluxo:

```text
CalloutNode
 ↓
CalloutNative
 ↓
Tamagui
```

Estrutura:

```tsx
<CalloutNative
  type="warning"
  title="Atenção"
  severity="high"
/>
```

Dependências:

```bash
pnpm add zod
pnpm add lucide-react-native
```

Tamagui permanece responsável por tokens, temas e primitives visuais.

---

## 12. Design Tokens

Tokens sugeridos:

```text
callout.info.background
callout.info.border
callout.info.foreground
callout.info.icon

callout.tip.background
callout.tip.border
callout.tip.foreground
callout.tip.icon

callout.warning.background
callout.warning.border
callout.warning.foreground
callout.warning.icon

callout.danger.background
callout.danger.border
callout.danger.foreground
callout.danger.icon
```

Nenhum HEX deverá ser persistido dentro do conteúdo.

---

## 13. Estrutura do monorepo

```text
packages/
├── content-schema/
│   ├── callout.schema.ts
│   └── content.schema.ts
│
├── content-parser/
│   ├── markdown/
│   ├── lexical/
│   └── normalize/
│
├── callout-registry/
│   ├── registry.ts
│   └── types.ts
│
├── design-tokens/
│   ├── colors.ts
│   ├── typography.ts
│   └── callouts.ts
│
├── ui-web/
│   └── Callout/
│
└── ui-native/
    └── Callout/
```

Aplicações:

```text
apps/
├── blog/
└── mobile/
```

---

## 14. Dependências recomendadas

### Shared

```text
zod
```

### Markdown

```text
unified
remark-parse
remark-gfm
remark-directive
remark-rehype
rehype-sanitize
unist-util-visit
```

### Web

```text
rehype-react
lucide-react
```

### Payload

```text
@payloadcms/richtext-lexical
```

### Native

```text
lucide-react-native
Tamagui existente
```

---

## 15. Segurança

Políticas obrigatórias:

1. HTML arbitrário desabilitado por padrão.
2. Conteúdo externo sanitizado.
3. URLs validadas.
4. `javascript:` bloqueado.
5. variantes de Callout validadas pelo schema.
6. classes CSS fornecidas pelo autor bloqueadas.
7. estilos inline fornecidos pelo conteúdo bloqueados.
8. atributos desconhecidos descartados.

---

## 16. Acessibilidade

Callouts devem ser componentes de comunicação semântica e não apenas caixas coloridas.

Requisitos:

- ícone + texto, nunca somente cor;
- contraste WCAG;
- `role="alert"` apenas quando realmente necessário;
- `role="note"` para conteúdo informativo;
- títulos legíveis por leitores de tela;
- controles de collapse acessíveis por teclado;
- estado expandido via `aria-expanded`;
- foco visível;
- conteúdo compreensível sem depender da cor.

---

## 17. Impressão e PDF

Cada variante deverá possuir representação de impressão.

Regra:

```text
screen style
      ↓
semantic callout
      ↓
print tokens
```

O Callout nunca deve desaparecer por depender exclusivamente de background color.

No modo impressão:

- borda permanece;
- título permanece;
- ícone pode ser simplificado;
- contraste é reforçado;
- fundos podem ser reduzidos;
- hyperlinks podem receber URL textual ou QR conforme renderer.

---

## 18. Analytics

Callouts interativos poderão declarar:

```ts
analyticsKey: 'article-risk-warning-01'
```

Eventos possíveis:

```text
callout_view
callout_expand
callout_collapse
callout_cta_click
callout_source_click
```

Analytics não fará parte da semântica editorial obrigatória.

---

## 19. Persistência

A fonte persistida deverá guardar semântica e conteúdo.

Exemplo correto:

```json
{
  "type": "warning",
  "title": "Atenção",
  "body": "...",
  "severity": "high"
}
```

Exemplo proibido:

```json
{
  "background": "#FFF3CD",
  "borderColor": "#FFCC00",
  "className": "warning-yellow"
}
```

---

## 20. Interoperabilidade

O protocolo deverá permitir:

```text
Markdown
   ↕
CalloutNode
   ↕
Payload Lexical
   ↓
Web
Native
Print
Newsletter
Future renderer
```

Conversão reversa é desejável entre Markdown e `CalloutNode`.

Conversão visual reversa não é requisito.

---

## 21. Alternativas consideradas

### A. Apenas CSS no blog

**Rejeitada.**

Não resolve Native, CMS, IA nem portabilidade.

### B. MDX como fonte universal

**Parcialmente rejeitada.**

MDX funciona bem na Web, porém introduz acoplamento com React e não deve ser o modelo semântico universal.

### C. HTML como formato universal

**Rejeitada.**

Aumenta superfície de segurança, dificulta Native e mistura conteúdo com apresentação.

### D. Componentes independentes por plataforma

**Rejeitada.**

Cria duplicação e divergência.

### E. AST semântico compartilhado

**Aceita.**

Mantém conteúdo independente de renderer e permite governança central.

---

## 22. Consequências positivas

- autoria simplificada;
- reutilização multiplataforma;
- consistência visual;
- redução de CSS duplicado;
- menor custo de manutenção;
- integração mais simples com IA;
- editor Payload mais previsível;
- facilidade de adicionar novos Callouts;
- suporte nativo a impressão;
- possibilidade de analytics;
- melhor governança editorial.

---

## 23. Consequências negativas

- criação inicial de parser e normalizador;
- necessidade de manter migrations de schema;
- aumento inicial da disciplina arquitetural;
- necessidade de testes de equivalência entre renderizadores;
- eventual complexidade em conteúdos ricos dentro de Callouts.

Esses custos são considerados aceitáveis diante da necessidade multiplataforma.

---

## 24. Testes obrigatórios

### Schema

```text
Callout válido
Callout inválido
type desconhecido
URL inválida
severity inválida
```

### Parser

```text
Markdown → CalloutNode
CalloutNode → Markdown
Payload → CalloutNode
```

### Visual

```text
light mode
dark mode
mobile
desktop
tablet
print
```

### Acessibilidade

```text
keyboard
screen reader
contrast
ARIA
focus
```

### Segurança

```text
script injection
javascript URL
HTML arbitrary
unknown attributes
```

---

## 25. Critérios de aceite

A ADR será considerada implementada quando:

1. existir um único `CalloutSchema`;
2. existir um único `CALLOUT_REGISTRY`;
3. Payload disponibilizar Callout no editor;
4. Markdown reconhecer a diretiva `:::callout`;
5. blog renderizar todos os tipos oficiais;
6. app renderizar os mesmos tipos;
7. aparência vier exclusivamente de tokens;
8. conteúdo externo passar por sanitização;
9. testes cobrirem schema, renderer e parser;
10. pelo menos oito variantes principais apresentarem equivalência funcional Web/Native.

---

## 26. Ordem de implementação

```text
01. content-schema
02. callout-registry
03. design-tokens
04. markdown parser
05. Payload CalloutBlock
06. Web renderer
07. Native renderer
08. print renderer
09. accessibility QA
10. security QA
11. analytics
12. documentation
```

---

## 27. Definition of Done

```text
1 INPUT SEMÂNTICO
        ↓
1 CALLOUT NODE
        ↓
1 REGISTRY
        ↓
┌───────────────┬───────────────┬───────────────┐
│ WEB           │ NATIVE        │ PRINT         │
│ Next.js       │ Expo          │ PDF / HTML    │
│ React         │ React Native  │ Print CSS     │
└───────────────┴───────────────┴───────────────┘
```

A implementação estará concluída quando um autor puder inserir um Callout no Payload ou Markdown e obter automaticamente a mesma estrutura semântica e identidade visual no blog, app e impressão, sem duplicar regras de conteúdo ou estilo.

---

## 28. Decisão final

**Adotar `CalloutNode + Zod Schema + Callout Registry + Design Tokens + Renderers específicos` como arquitetura oficial de Callouts do ecossistema EXECUTAR / Risco Cognitivo.**

Markdown e Payload serão interfaces de autoria.

O protocolo semântico será a fonte arquitetural de verdade.

Web, Native e Print serão renderizadores.
