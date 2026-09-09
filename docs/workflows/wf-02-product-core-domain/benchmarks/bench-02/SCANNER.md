Produto + Arquitetura · ADR-APP-001–003

  

DOCUMENT READER · VALU-MODE V3

  

ID              ADR-APP-001–003  

Tipo            Arquitetura · Scanner, Copiloto e automação operacional  

Owner           Não determinado  

Versão          1.0  

Data            05/09/2026  

Fase            PROPOSTO · Definição arquitetural  

Projeto         Executar App  

PARA            Produto · Engenharia · Automação  

Referência      Definição estratégica fornecida nesta conversa  

3#              #Scanner #Copiloto #Automacao

  

RESUMO EXECUTIVO

  

O quê            Formalização das decisões centrais do Executar App  

Por quê          Recuperar a principal feature do produto e integrar execução assistida e automação de tarefas  

Quem             Usuários do Executar App, engenharia e agentes Copiloto  

Como             Portabilidade do scanner Tesseract funcional + Copiloto Executar + automações por WhatsApp e e-mail

  

3P+N · APLICAÇÃO

  

Problema         O scanner atual do Executar App não está funcionando e capacidades de Copiloto e automação ainda precisam ser consolidadas como produto  

Processo         Reutilizar implementação comprovada, padronizar Copiloto como feature e conectar canais externos ao motor de tarefas  

Progresso        Arquitetura funcional definida; implementação ainda não verificada  

Next 01          Localizar e auditar o scanner funcional no repositório legado  

Next 02          Definir contrato funcional do Copiloto Executar  

Next 03          Modelar automações WhatsApp + e-mail + tarefas

  

Resumo Executivo. O Executar App passa a ter três capacidades estruturantes: Scanner → Copiloto → Automação. O Scanner permanece como principal porta de entrada operacional e deverá recuperar a implementação baseada em Tesseract que já funcionava em outro repositório. O Copiloto Executar deverá deixar de ser apenas uma lógica interna ou pessoal e tornar-se uma feature utilizável por outros usuários. A terceira camada conecta o Copiloto aos canais WhatsApp e e-mail para receber informações, interpretar demandas, criar ou atualizar tarefas, acompanhar estado e produzir ações de gestão. D · Interno: existência anterior de um scanner funcional e a definição dessas três capacidades vêm da decisão de produto fornecida nesta conversa. E · Inferido: os contratos técnicos e a separação arquitetural abaixo são propostas para operacionalizá-la.

  

Conclusão. ADR-APP-001 · Recuperação do Scanner Tesseract — Status: PROPOSTO. Contexto: o scanner atual é uma funcionalidade crítica, mas encontra-se com defeito; existe uma implementação anterior funcional baseada em Tesseract. Decisão: não reconstruir inicialmente o scanner do zero. A implementação funcional deverá ser localizada no repositório de origem, auditada, isolada e portada para o Executar App, preservando apenas os componentes necessários. O Tesseract será o mecanismo inicial de OCR dessa rota. O fluxo-alvo será Captura/Upload → Pré-processamento → OCR Tesseract → Texto estruturado → Extração → Objeto do Executar → Revisão/Confirmação. A migração só poderá mudar de PROPOSTO para IMPLEMENTADO depois da integração e para VERIFICADO depois de testes reais. ADR-APP-002 · Copiloto Executar como feature de produto — Status: PROPOSTO. Decisão: o Copiloto Executar será uma capacidade do aplicativo disponível aos usuários, operando sobre os objetos e regras do próprio Executar App. Ele deverá entender estado, tarefas, prioridades, bloqueios, evidências e próxima ação, em vez de funcionar como chatbot independente. O princípio será Copiloto → lê estado → interpreta contexto → recomenda/executa ação autorizada → atualiza estado → registra evidência.

  

Desenvolvimento. ADR-APP-003 · Automação multicanal do Copiloto — Status: PROPOSTO. O Copiloto deverá operar também fora da interface principal através de integrações com WhatsApp e e-mail, formando uma camada de gestão automática de tarefas. O modelo lógico proposto é Canal → Evento → Identificação do usuário → Interpretação → Regra do Copiloto → Tarefa/Ação → Confirmação → Registro. Exemplos de eventos previstos: e-mail recebido contendo demanda ou prazo; mensagem no WhatsApp solicitando registro de uma tarefa; lembrete de uma tarefa vencendo; solicitação de /Agora; confirmação de conclusão; recebimento de evidência; alteração de prioridade. E · Inferido: essa automação deve ser orientada a eventos e não diretamente aos canais. WhatsApp e e-mail funcionam como adapters; o núcleo permanece no Executar App. Assim, uma mensagem não cria uma lógica paralela: WhatsAppAdapter / EmailAdapter → Event Bus ou Automation Layer → Copilot Engine → Task Engine. Essa separação evita duplicação e permite incluir outros canais depois. Ações de maior impacto deverão possuir autorização explícita e audit trail, especialmente exclusão, replanejamento amplo, alteração de prazo ou comunicação externa.

  

Próximos Passos. A ordem técnica recomendada passa a ser: 01 localizar scanner legado → 02 comparar dependências e arquitetura → 03 portar Tesseract Scanner → 04 estabelecer testes de captura/OCR/extração → 05 transformar Copiloto Executar em serviço reutilizável → 06 definir API/contratos do Task Engine → 07 criar Automation Layer → 08 integrar e-mail → 09 integrar WhatsApp → 10 testar o ciclo completo. A arquitetura macro do Executar App fica, portanto: INPUTS [Scanner | UI | WhatsApp | Email] → NORMALIZATION → COPILOT ENGINE → TASK/ACTION ENGINE → STATE + EVIDENCE → OUTPUTS/NOTIFICATIONS. O próximo ADR pode detalhar o Copiloto Executar, incluindo comandos, permissões, eventos, automações, estados e contratos de entrada/saída.