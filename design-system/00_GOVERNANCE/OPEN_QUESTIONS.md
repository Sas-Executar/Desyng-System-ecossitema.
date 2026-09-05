# Open Questions — DS-FORM-001

**168 de 296 perguntas** do `DS-FORM-001_RESPONSES.csv` ficaram `PENDING_USER_INPUT`: são decisões de negócio, marca ou governança que nenhum documento-fonte deste handoff responde, e que este package **não inventa** (ver `Prompt.md §1`: "não invente informações sem sinalização").

Agrupadas por bloqueio, da mais crítica para a mais residual. Cada item cita o `question_id` para localizar a linha completa no CSV.

## Tier 1 — Bloqueia governança e critério de aprovação
Sem essas respostas, ninguém pode formalmente aprovar ou publicar o sistema, mesmo depois de implementado.

### CTL — Controle e modo de operação (4 pendente(s))

- **`DS-FORM-001-CTL-002`** — Qual é o nome oficial da organização ou marca principal?
- **`DS-FORM-001-CTL-004`** — Quem é o owner responsável pela decisão final?
- **`DS-FORM-001-CTL-005`** — Quem aprova estratégia, identidade visual, acessibilidade e produção gráfica?
- **`DS-FORM-001-CTL-007`** — Qual é a data-alvo para o sistema estar utilizável?

### GOV — Governança e ciclo de vida (10 pendente(s))

- **`DS-FORM-001-GOV-001`** — Quem pode propor, aprovar, implementar e publicar mudanças?
- **`DS-FORM-001-GOV-004`** — Qual evidência é necessária para avançar em cada estado?
- **`DS-FORM-001-GOV-005`** — Como decisões serão registradas em ADR ou decision log?
- **`DS-FORM-001-GOV-006`** — Como requests de novos componentes e tokens serão avaliados?
- **`DS-FORM-001-GOV-007`** — Qual SLA de revisão e manutenção é esperado?
- **`DS-FORM-001-GOV-008`** — Como documentação e exemplos permanecem sincronizados com o código?
- **`DS-FORM-001-GOV-009`** — Como breaking changes são comunicadas?
- **`DS-FORM-001-GOV-010`** — Quais métricas indicarão adoção, consistência e dívida visual?
- **`DS-FORM-001-GOV-011`** — Como exceções são registradas e expiradas?
- **`DS-FORM-001-GOV-012`** — Qual cadência de auditoria do sistema será adotada?

### OUT — Contrato de entregáveis finais (9 pendente(s))

- **`DS-FORM-001-OUT-001`** — Entregar estratégia e arquitetura de marca completas?
- **`DS-FORM-001-OUT-002`** — Entregar posicionamento, personalidade e identidade verbal completas?
- **`DS-FORM-001-OUT-003`** — Entregar naming e sistema de assinatura, quando aplicáveis?
- **`DS-FORM-001-OUT-005`** — Entregar sistema de logo e arquivos mestres?
- **`DS-FORM-001-OUT-007`** — Entregar iconografia, ilustração, fotografia e mídia?
- **`DS-FORM-001-OUT-008`** — Entregar visualização de dados e linguagem de evidências?
- **`DS-FORM-001-OUT-011`** — Entregar biblioteca de componentes e Storybook?
- **`DS-FORM-001-OUT-012`** — Entregar templates de SaaS, blog, mobile, e-mail, apresentação e social?
- **`DS-FORM-001-OUT-015`** — Entregar matriz de QA, evidências e relatório dos gates?

## Tier 2 — Bloqueia identidade de marca (estratégia, naming, logo)
Afeta decisões de marca que não são puramente técnicas — exigem autoridade de negócio/criativa.

### ARC — Arquitetura de marca e portfólio (8 pendente(s))

- **`DS-FORM-001-ARC-003`** — Qual é a relação entre a marca principal e cada produto?
- **`DS-FORM-001-ARC-004`** — Quais nomes devem compartilhar assinatura visual?
- **`DS-FORM-001-ARC-005`** — Quais produtos precisam de expressão visual própria sem virar nova marca?
- **`DS-FORM-001-ARC-006`** — Existe uma marca editorial separada da marca de produto?
- **`DS-FORM-001-ARC-007`** — Como blog, aplicativo, relatórios e materiais impressos devem declarar autoria?
- **`DS-FORM-001-ARC-008`** — Quais nomes atuais podem ser substituídos?
- **`DS-FORM-001-ARC-009`** — Quais nomes, símbolos ou termos são protegidos ou indisponíveis?
- **`DS-FORM-001-ARC-010`** — Qual taxonomia canônica identifica marca, produto, canal, campanha e artefato?

### LOG — Marca gráfica e ativos (8 pendente(s))

- **`DS-FORM-001-LOG-001`** — Que tipos de marca devem ser desenvolvidos?
- **`DS-FORM-001-LOG-002`** — Qual conceito o símbolo deve tornar memorável?
- **`DS-FORM-001-LOG-003`** — Quais símbolos literais ou clichês devem ser evitados?
- **`DS-FORM-001-LOG-004`** — Quais versões são obrigatórias?
- **`DS-FORM-001-LOG-005`** — Qual é o menor tamanho digital e impresso necessário?
- **`DS-FORM-001-LOG-006`** — Quais regras de área de proteção precisam ser calculadas?
- **`DS-FORM-001-LOG-009`** — Quais metadados, licenças e direitos precisam acompanhar os ativos?
- **`DS-FORM-001-LOG-010`** — Qual teste de reconhecimento, redução e reprodução deve aprovar a marca?

### NAM — Naming e assinatura (6 pendente(s))

- **`DS-FORM-001-NAM-002`** — Quais critérios o nome deve cumprir?
- **`DS-FORM-001-NAM-003`** — Quais territórios semânticos podem gerar nomes?
- **`DS-FORM-001-NAM-004`** — Quais territórios semânticos são proibidos?
- **`DS-FORM-001-NAM-005`** — Quais restrições de idioma, pronúncia, domínio e registro devem ser verificadas?
- **`DS-FORM-001-NAM-006`** — Qual assinatura institucional deve acompanhar o nome?
- **`DS-FORM-001-NAM-007`** — Quais abreviações e siglas são autorizadas?

### POS — Posicionamento e personalidade (9 pendente(s))

- **`DS-FORM-001-POS-001`** — Defina a personalidade da marca em exatamente cinco atributos.
- **`DS-FORM-001-POS-002`** — Para cada atributo, descreva o comportamento visual e verbal correspondente.
- **`DS-FORM-001-POS-003`** — Defina cinco atributos que a marca não deve comunicar.
- **`DS-FORM-001-POS-005`** — Qual arquétipo ou combinação de arquétipos ajuda a explicar a marca?
- **`DS-FORM-001-POS-006`** — Qual tensão criativa torna a marca reconhecível?
- **`DS-FORM-001-POS-007`** — Quais referências visuais representam o que desejamos e por quê?
- **`DS-FORM-001-POS-008`** — Quais referências representam o que deve ser evitado e por quê?
- **`DS-FORM-001-POS-009`** — Quais concorrentes diretos e indiretos devem ser diferenciados?
- **`DS-FORM-001-POS-010`** — Que elemento de memória deve continuar reconhecível após cinco segundos?

### STR — Fundação estratégica (11 pendente(s))

- **`DS-FORM-001-STR-001`** — Por que a organização existe além de gerar receita?
- **`DS-FORM-001-STR-002`** — Qual transformação concreta a marca pretende produzir?
- **`DS-FORM-001-STR-003`** — Qual problema central do público é resolvido?
- **`DS-FORM-001-STR-004`** — Qual é a promessa principal da marca em uma frase?
- **`DS-FORM-001-STR-005`** — Quais provas sustentam essa promessa?
- **`DS-FORM-001-STR-006`** — Quais valores orientam decisões reais e qual comportamento demonstra cada um?
- **`DS-FORM-001-STR-007`** — O que a marca nunca deve prometer, parecer ou fazer?
- **`DS-FORM-001-STR-008`** — Qual é a visão de 3 a 5 anos?
- **`DS-FORM-001-STR-009`** — Qual é o posicionamento desejado em uma frase?
- **`DS-FORM-001-STR-010`** — Qual é a categoria de mercado atual e a categoria que a marca deseja ocupar?
- **`DS-FORM-001-STR-012`** — Como o sucesso estratégico será medido após o lançamento?

### VER — Identidade verbal (9 pendente(s))

- **`DS-FORM-001-VER-001`** — Qual é a voz constante da marca?
- **`DS-FORM-001-VER-002`** — Como o tom muda entre produto, editorial, suporte, marketing, relatório e crise?
- **`DS-FORM-001-VER-003`** — Qual nível de leitura e complexidade textual é adequado por canal?
- **`DS-FORM-001-VER-004`** — Quais palavras, expressões e termos pertencem ao vocabulário da marca?
- **`DS-FORM-001-VER-005`** — Quais palavras, clichês e promessas são proibidos?
- **`DS-FORM-001-VER-006`** — Quais regras governam títulos, subtítulos, CTAs, labels e mensagens de erro?
- **`DS-FORM-001-VER-007`** — Como nomear produtos, features, planos, relatórios e versões?
- **`DS-FORM-001-VER-008`** — Qual tagline deve ser criada ou validada?
- **`DS-FORM-001-VER-010`** — Quais exemplos de texto devem compor o teste de voz?

## Tier 3 — Bloqueia processo de produção e engenharia
São decisões operacionais que podem ser resolvidas pela equipe técnica sem necessariamente subir ao owner de marca.

### CHN — Aplicações multicanal (10 pendente(s))

- **`DS-FORM-001-CHN-002`** — Quais superfícies impressas entram na primeira versão?
- **`DS-FORM-001-CHN-003`** — Qual densidade, hierarquia e ação primária muda por canal?
- **`DS-FORM-001-CHN-004`** — Quais tokens são universais e quais são adaptadores de canal?
- **`DS-FORM-001-CHN-008`** — Como a identidade se comporta em e-mails transacionais e editoriais?
- **`DS-FORM-001-CHN-009`** — Como a identidade se comporta em redes sociais e thumbnails?
- **`DS-FORM-001-CHN-010`** — Como a identidade se comporta em apresentações?
- **`DS-FORM-001-CHN-011`** — Como a identidade se comporta em relatórios e documentos?
- **`DS-FORM-001-CHN-012`** — Como a identidade se comporta em impressão compacta Prisma?
- **`DS-FORM-001-CHN-013`** — Quais assets responsivos devem ser gerados automaticamente?
- **`DS-FORM-001-CHN-014`** — Quais provas cruzadas demonstram que todos os canais pertencem à mesma marca?

### PRN — Produção gráfica e impressão (12 pendente(s))

- **`DS-FORM-001-PRN-001`** — Quais formatos físicos, orientações e sistemas de dobra são necessários?
- **`DS-FORM-001-PRN-002`** — Quais margens, sangrias, áreas seguras e marcas técnicas são obrigatórias?
- **`DS-FORM-001-PRN-003`** — Quais papéis, acabamentos e processos de impressão são previstos?
- **`DS-FORM-001-PRN-004`** — Quais perfis de cor e condições de prova serão usados?
- **`DS-FORM-001-PRN-005`** — Quais cores especiais ou limitações de tinta precisam ser consideradas?
- **`DS-FORM-001-PRN-006`** — Quais tamanhos mínimos de texto, linha e símbolo são seguros?
- **`DS-FORM-001-PRN-007`** — Como QR codes, códigos, URLs e identificadores serão dimensionados e testados?
- **`DS-FORM-001-PRN-008`** — Como o material funciona em preto e branco e impressoras domésticas?
- **`DS-FORM-001-PRN-009`** — Como conteúdo variável é populado sem quebrar o layout?
- **`DS-FORM-001-PRN-010`** — Quais templates precisam ser editáveis e em quais formatos?
- **`DS-FORM-001-PRN-011`** — Quais checks de preflight antecedem a publicação?
- **`DS-FORM-001-PRN-012`** — Qual prova física deve ser aprovada antes de declarar verificação?

### QAT — QA e critérios de aprovação (9 pendente(s))

- **`DS-FORM-001-QAT-002`** — Quais combinações de tema, modo cognitivo e canal devem ser testadas?
- **`DS-FORM-001-QAT-003`** — Quais conteúdos extremos serão usados para stress test?
- **`DS-FORM-001-QAT-005`** — Quais tolerâncias de regressão visual são aceitáveis?
- **`DS-FORM-001-QAT-006`** — Quais browsers, sistemas e versões possuem suporte obrigatório?
- **`DS-FORM-001-QAT-007`** — Quais provas digitais e físicas exigem aprovação humana?
- **`DS-FORM-001-QAT-008`** — Como defeitos são classificados por severidade?
- **`DS-FORM-001-QAT-009`** — Qual definição de pronto existe para tokens, componente, template e canal?
- **`DS-FORM-001-QAT-011`** — Quais métricas de usabilidade precisam ser medidas?
- **`DS-FORM-001-QAT-012`** — Quem assina o gate final de publicação?

### TEC — Integração técnica (7 pendente(s))

- **`DS-FORM-001-TEC-002`** — Quais restrições de bundle, performance e carregamento de fontes existem?
- **`DS-FORM-001-TEC-005`** — Como linting impedirá cores, spacing e tipografia arbitrários?
- **`DS-FORM-001-TEC-006`** — Como visual regression será executado?
- **`DS-FORM-001-TEC-007`** — Como versões incompatíveis serão detectadas no CI?
- **`DS-FORM-001-TEC-009`** — Como assets são otimizados, cacheados e invalidados?
- **`DS-FORM-001-TEC-011`** — Quais métricas de performance serão gates?
- **`DS-FORM-001-TEC-012`** — Qual estratégia permite rollback seguro?

### TOK — Arquitetura de design tokens (2 pendente(s))

- **`DS-FORM-001-TOK-010`** — Como o build valida referências quebradas, duplicatas e contrastes?
- **`DS-FORM-001-TOK-011`** — Como consumidores recebem versões e changelog?

## Tier 4 — Detalhe residual dentro de seções já decididas
As seções já têm uma base sólida (COL/TYP/LAY/MOT/ACC/CMP majoritariamente `ANSWERED_FROM_EVIDENCE`); estes itens são refinamentos que podem esperar uma iteração 2.

### ACC — Acessibilidade e adaptação cognitiva (9 pendente(s))

- **`DS-FORM-001-ACC-003`** — Quais presets de apresentação cognitiva serão oferecidos?
- **`DS-FORM-001-ACC-004`** — Quais capability tokens cada preset altera?
- **`DS-FORM-001-ACC-006`** — Como o usuário seleciona, testa, salva e redefine preferências?
- **`DS-FORM-001-ACC-007`** — Qual ordem de precedência existe entre SO, usuário, URL e default?
- **`DS-FORM-001-ACC-008`** — Como evitar perda ou ocultação de conteúdo crítico entre modos?
- **`DS-FORM-001-ACC-009`** — Como zoom 200%, reflow e orientação serão verificados?
- **`DS-FORM-001-ACC-010`** — Como teclado, leitor de tela, foco e landmarks serão testados?
- **`DS-FORM-001-ACC-011`** — Como privacidade e analytics tratam preferências cognitivas?
- **`DS-FORM-001-ACC-012`** — Quais validações exigem usuários reais antes de claims públicos?

### AUD — Públicos, necessidades e contextos (9 pendente(s))

- **`DS-FORM-001-AUD-001`** — Quais são os públicos prioritários em ordem?
- **`DS-FORM-001-AUD-002`** — Qual trabalho cada público tenta realizar?
- **`DS-FORM-001-AUD-004`** — Qual é o nível médio de familiaridade de cada público com o domínio?
- **`DS-FORM-001-AUD-005`** — Quais limitações de tempo, atenção ou ambiente afetam o uso?
- **`DS-FORM-001-AUD-006`** — Quais informações são críticas e não podem ser ocultadas?
- **`DS-FORM-001-AUD-007`** — Quais ações devem ser encontradas em menos de 5 segundos?
- **`DS-FORM-001-AUD-010`** — Quais preferências cognitivas devem ser configuráveis sem inferir diagnóstico?
- **`DS-FORM-001-AUD-011`** — Quais emoções o público deve sentir antes, durante e depois da experiência?
- **`DS-FORM-001-AUD-012`** — Quais pesquisas com usuários existem e quais ainda precisam ser realizadas?

### CMP — Arquitetura de componentes (2 pendente(s))

- **`DS-FORM-001-CMP-009`** — Como Storybook documentará comportamento, acessibilidade e conteúdo extremo?
- **`DS-FORM-001-CMP-010`** — Quais componentes exigem testes visuais, unitários e E2E?

### COL — Sistema de cor (2 pendente(s))

- **`DS-FORM-001-COL-004`** — Quais restrições culturais, legais ou de categoria afetam as cores?
- **`DS-FORM-001-COL-008`** — Como cores devem se comportar em impressão CMYK e em escala de cinza?

### DAT — Visualização de dados e evidências (9 pendente(s))

- **`DS-FORM-001-DAT-001`** — Quais tipos de dados serão comunicados com maior frequência?
- **`DS-FORM-001-DAT-002`** — Quais gráficos são permitidos, condicionais e proibidos?
- **`DS-FORM-001-DAT-003`** — Como dados observados, metas, projeções e incertezas serão diferenciados?
- **`DS-FORM-001-DAT-005`** — Qual paleta categórica, sequencial e divergente é necessária?
- **`DS-FORM-001-DAT-006`** — Como gráficos funcionam em alto contraste, monocromia e impressão?
- **`DS-FORM-001-DAT-007`** — Quais regras de eixo, escala, rótulo, legenda, fonte e arredondamento são mandatórias?
- **`DS-FORM-001-DAT-008`** — Como tabelas devem priorizar leitura, comparação e auditoria?
- **`DS-FORM-001-DAT-009`** — Quais alternativas textuais devem acompanhar gráficos?
- **`DS-FORM-001-DAT-010`** — Quais casos de teste representarão dados reais e extremos?

### EDT — Sistema editorial e conteúdo (8 pendente(s))

- **`DS-FORM-001-EDT-003`** — Quais níveis de heading, lead, body, quote, evidence, callout e reference são necessários?
- **`DS-FORM-001-EDT-004`** — Quais representações alternativas do mesmo conteúdo existirão?
- **`DS-FORM-001-EDT-005`** — Como representações permanecem ligadas ao mesmo conceito canônico?
- **`DS-FORM-001-EDT-006`** — Como autoria, data, versão, revisão e fontes aparecem?
- **`DS-FORM-001-EDT-007`** — Quais regras governam destaque, marca-texto, callouts e citações?
- **`DS-FORM-001-EDT-008`** — Como cards editoriais, arquivos, temas e busca mantêm coerência?
- **`DS-FORM-001-EDT-009`** — Como conteúdo longo se comporta em mobile e impressão?
- **`DS-FORM-001-EDT-010`** — Quais templates editoriais devem ser gerados?

### ICO — Iconografia, ilustração e mídia (8 pendente(s))

- **`DS-FORM-001-ICO-003`** — Quais tamanhos, strokes, grids e estados governam os ícones?
- **`DS-FORM-001-ICO-004`** — Quando um ícone exige label textual?
- **`DS-FORM-001-ICO-005`** — Qual linguagem de ilustração deve ser criada?
- **`DS-FORM-001-ICO-006`** — Quais temas, metáforas e estereótipos devem ser evitados?
- **`DS-FORM-001-ICO-007`** — Qual direção fotográfica deve ser adotada?
- **`DS-FORM-001-ICO-008`** — Como imagens são cortadas, legendadas, creditadas e descritas?
- **`DS-FORM-001-ICO-009`** — Como diagramas técnicos e mapas devem ser estilizados?
- **`DS-FORM-001-ICO-010`** — Quais arquivos, resoluções e proporções são obrigatórios por canal?

### LAY — Grid, composição e hierarquia (1 pendente(s))

- **`DS-FORM-001-LAY-006`** — Quais regiões são permanentes em cada superfície?

### MOT — Interação, estados e movimento (5 pendente(s))

- **`DS-FORM-001-MOT-006`** — Como feedback imediato, progresso e conclusão serão comunicados?
- **`DS-FORM-001-MOT-007`** — Como gestos possuem alternativa por teclado e controle explícito?
- **`DS-FORM-001-MOT-008`** — Como loading, erro, vazio, offline e conflito preservam contexto?
- **`DS-FORM-001-MOT-009`** — Como foco, scroll e seleção são preservados entre modos e projeções?
- **`DS-FORM-001-MOT-010`** — Quais testes de interação comprovam a experiência?

### TYP — Sistema tipográfico (1 pendente(s))

- **`DS-FORM-001-TYP-007`** — Qual escala tipográfica deve existir para impressão?
