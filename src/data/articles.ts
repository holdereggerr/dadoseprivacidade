import { Article } from '@/types';

export const DEFAULT_AUTHOR = {
  name: 'Editorial perito.tec.br',
  role: 'Conselho Editorial & Inteligência Forense',
  bio: 'Análises estratégicas sobre risco digital, investigações corporativas, resiliência operacional e governança de IA voltadas a executivos e conselhos de administração.',
};

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'artigo-1',
    slug: 'sua-empresa-tem-backup-mas-conseguiria-sobreviver-a-um-desastre-digital',
    title: 'Sua empresa tem backup. Mas conseguiria sobreviver a um desastre digital?',
    subtitle: 'A ilusão da cópia de segurança em ambientes corporativos sob ataque sofisticado.',
    category: 'Resiliência Digital',
    tags: ['Disaster Recovery', 'Backup', 'Continuidade de Negócios', 'Governança'],
    summary: 'Ter backups atualizados é apenas o primeiro passo. Sem testes de restauração em ambiente isolado e sem preservação de evidências, o backup pode restaurar o próprio malware ou destruir provas essenciais.',
    briefing: 'Explicar a diferença entre backup, disaster recovery, continuidade e resiliência digital.',
    publishedAt: '2026-08-20',
    updatedAt: '2026-08-21',
    readingTimeMinutes: 6,
    isFeatured: true,
    isMustRead: true,
    author: DEFAULT_AUTHOR,
    content: {
      oQueAconteceu: 'Organizações com investimentos milionários em infraestrutura continuam paralisadas durante dias após ataques de ransomware, mesmo possuindo rotinas diárias de backup.',
      oQueIssoSignifica: 'Backup é uma medida passiva de cópia de dados; resiliência digital é a capacidade ativa de manter a decisão, restaurar operações limpas e fundamentar a investigação jurídica do incidente.',
      porQueIssoImporta: 'O tempo médio de paralisação ininterrupta por sequestro de dados supera 14 dias em corporações que não testam a reconstrução forense de seus ambientes.',
      qualEORisco: 'Restauração de sistemas contaminados, reinfecção em cadeia, perda irreversível de logs de auditoria e inviabilização de ações judiciais de regresso ou acionamento de seguro cibernético.',
      oQueDeveriaTerSidoPreparado: 'Separação estrita entre Disaster Recovery (DR) e Preservação Forense, testes imutáveis de imagem fora de rede (air-gapped) e protocolos de integridade.',
      oQueFazerAgora: 'Auditar o tempo real de recuperação (RTO) e ponto de recuperação (RPO) considerando contaminação cibernética, e não apenas falhas de hardware.',
      perguntasParaExecutivos: [
        'Qual foi a última vez que a empresa simulou uma restauração completa a partir de um backup totalmente isolado?',
        'O plano de recuperação garante a preservação dos logs anteriores ao incidente para fins de perícia?',
        'O Conselho tem visibilidade do impacto financeiro direto por dia de paralisação total dos sistemas operacionais?'
      ],
      fontesEReferencias: [
        { title: 'NIST Special Publication 800-34 Rev. 1 - Contingency Planning Guide for Federal Information Systems' },
        { title: 'ISO/IEC 27035-1:2023 - Information security incident management' }
      ]
    }
  },
  {
    id: 'artigo-2',
    slug: 'depois-do-ataque-nao-e-hora-de-descobrir-quem-deveria-fazer-o-que',
    title: 'Depois do ataque não é hora de descobrir quem deveria fazer o quê',
    subtitle: 'Por que a cadeia de comando pré-definida entre TI, Jurídico, RH e Comunicação salva reputações e ativos.',
    category: 'Board',
    tags: ['Gestão de Crise', 'Governança', 'Incident Response', 'Comunicação Corporativa'],
    summary: 'Em momentos de crise cibernética, a paralisia decisória é mais danosa que o incidente técnico. Definir papéis antes de a crise estourar evita vazamentos descontrolados e atropelos jurídicos.',
    briefing: 'Mostrar por que CEO, CIO, Jurídico, Comunicação, RH e demais áreas precisam conhecer previamente seus papéis.',
    publishedAt: '2026-08-18',
    updatedAt: '2026-08-21',
    readingTimeMinutes: 5,
    isFeatured: false,
    isMustRead: true,
    author: DEFAULT_AUTHOR,
    content: {
      oQueAconteceu: 'Durante incidentes críticos, reuniões executivas perdem horas debatendo quem deve autorizar o desligamento de servidores ou quem responde à imprensa, enquanto o dano se propaga.',
      oQueIssoSignifica: 'A governança de resposta a incidentes não é um documento técnico guardado na TI; é um protocolo de alta gestão com alçadas de decisão claramente estabelecidas.',
      porQueIssoImporta: 'Notificações à ANPD, comunicados a acionistas e declarações à imprensa feitas sem o alinhamento entre Perícia, Jurídico e C-Level geram passivos regulatórios milionários.',
      qualEORisco: 'Declarações contraditórias na mídia, descumprimento de prazos legais de notificação, destruição inadvertida de evidências por equipes operacionais afobadas e perda de cobertura de apólices de seguro.',
      oQueDeveriaTerSidoPreparado: 'Uma matriz RACI de crise abrangendo CEO, CFO, CIO, CISO, General Counsel, DPO, Assessoria de Imprensa e Especialistas Forenses Externos.',
      oQueFazerAgora: 'Realizar um simulado de mesa (Tabletop Exercise) com a diretoria executiva simulando um vazamento crítico de dados.',
      perguntasParaExecutivos: [
        'Quem tem autoridade final para decidir desligar sistemas de faturamento em caso de suspeita de invasão?',
        'O time de comunicação possui diretrizes pré-aprovadas pelo jurídico para manifestações nas primeiras 4 horas?',
        'Os contatos de emergência do perito forense e do escritório especializado estão acessíveis fora da rede corporativa?'
      ],
      fontesEReferencias: [
        { title: 'Harvard Business Review - Managing the Cyber Incident Crisis Response' },
        { title: 'CERT.br - Guia de Tratamento e Resposta a Incidentes de Segurança' }
      ]
    }
  },
  {
    id: 'artigo-3',
    slug: 'o-perito-forense-deveria-conhecer-sua-empresa-antes-do-incidente',
    title: 'O perito forense deveria conhecer sua empresa antes do incidente',
    subtitle: 'Como o Forensic Readiness reduz drasticamente o custo e o tempo de investigação corporativa.',
    category: 'Computação Forense',
    tags: ['Forensic Readiness', 'Perícia Digital', 'Investigação', 'Mitigação'],
    summary: 'Chamar peritos forenses apenas quando o incidente acontece significa pagar horas de onboarding emergencial sob extrema pressão. A preparação prévia transforma a investigação em um procedimento cirúrgico.',
    briefing: 'Mostrar como preparação prévia melhora a capacidade de resposta e preservação das evidências.',
    publishedAt: '2026-08-15',
    updatedAt: '2026-08-21',
    readingTimeMinutes: 7,
    isFeatured: false,
    isMustRead: true,
    author: DEFAULT_AUTHOR,
    content: {
      oQueAconteceu: 'Empresas contratam perícia digital durante um ataque e descobrem que não possuem logs históricos ativados, topologia de rede documentada nem permissões prontas para coleta.',
      oQueIssoSignifica: 'Forensic Readiness (prontidão forense) é a capacidade estrutural de uma empresa em responder a dúvidas investigativas ao menor custo e com o menor impacto às operações.',
      porQueIssoImporta: 'Sem prontidão forense, mais de 70% do tempo dos investigadores é consumido tentando entender a arquitetura da empresa e localizando onde (ou se) as evidências foram salvas.',
      qualEORisco: 'Incapacidade técnica de provar a autoria de uma fraude interna ou vazamento, custos de consultoria quadruplicados e imprecisão nas conclusões periciais.',
      oQueDeveriaTerSidoPreparado: 'Mapeamento das fontes de evidência crítica, tempo de retenção de logs centralizados (SIEM/Syslog) e acordos de contratação de sobreaviso (retainer) pericial.',
      oQueFazerAgora: 'Avaliar o nível de maturidade de prontidão forense (Forensic Readiness Assessment) dos ambientes locais e em nuvem.',
      perguntasParaExecutivos: [
        'Nossa infraestrutura em nuvem está configurada para reter logs de auditoria por quanto tempo em caso de incidente?',
        'Possuímos uma consultoria forense pré-homologada capaz de iniciar a coleta preservada em menos de 2 horas?',
        'Nossa política interna prevê expressamente a coleta e análise de dispositivos corporativos em investigações?'
      ],
      fontesEReferencias: [
        { title: 'ISO/IEC 27043:2015 - Incident investigation principles and processes' },
        { title: 'SANS Institute - Forensic Readiness: Building a Response Strategy' }
      ]
    }
  },
  {
    id: 'artigo-4',
    slug: 'sua-empresa-implantou-inteligencia-artificial-ou-apenas-entregou-uma-conta-de-ia',
    title: 'Sua empresa implantou inteligência artificial ou apenas entregou uma conta de IA aos funcionários?',
    subtitle: 'A diferença crucial entre governança corporativa de IA e simples disponibilização de ferramentas.',
    category: 'IA & Shadow AI',
    tags: ['Inteligência Artificial', 'Governança de IA', 'Shadow AI', 'Vazamento de Dados'],
    summary: 'Assinar licenças corporativas de plataformas de IA sem regras claras de uso, privacidade e auditoria cria a falsa sensação de modernização enquanto expõe segredos industriais e dados pessoais.',
    briefing: 'Explicar adoção planejada versus experimentação corporativa desordenada.',
    publishedAt: '2026-08-12',
    updatedAt: '2026-08-21',
    readingTimeMinutes: 6,
    isFeatured: true,
    isMustRead: false,
    author: DEFAULT_AUTHOR,
    content: {
      oQueAconteceu: 'Colaboradores inserem demonstrações financeiras, planos estratégicos e dados de clientes em modelos de linguagem para gerar relatórios sem saber que os dados alimentam treinamento externo.',
      oQueIssoSignifica: 'Disponibilizar IA sem governança é delegar a política de segurança da informação ao discernimento individual de cada usuário.',
      porQueIssoImporta: 'O uso de IA em processos de tomada de decisão, contratação e avaliação de crédito gera responsabilização direta da diretoria frente a vieses e violações de privacidade.',
      qualEORisco: 'Vazamento inadvertido de propriedade intelectual, infração direta à LGPD, sanções regulatórias da ANPD e contaminação de bases de dados com alucinações não verificadas.',
      oQueDeveriaTerSidoPreparado: 'Política de Uso Aceitável de IA Corporativa, configuração de locatários empresariais com opt-out de treinamento e catálogo de modelos autorizados.',
      oQueFazerAgora: 'Implementar auditoria de tráfego de dados para endpoints de IA e classificar os tipos de dados autorizados para processamento sintético.',
      perguntasParaExecutivos: [
        'A empresa sabe exatamente quais ferramentas de IA estão sendo utilizadas nos departamentos financeiro e jurídico?',
        'Os contratos assinados com fornecedores de IA garantem a não utilização de dados corporativos para retenção ou aprendizado?',
        'Existe um comitê interdisciplinar avaliando os riscos contratuais e reputacionais do uso de IA na operação?'
      ],
      fontesEReferencias: [
        { title: 'NIST AI Risk Management Framework (AI RMF 1.0)' },
        { title: 'EU Artificial Intelligence Act (EU AI Act) Compliance Overview' }
      ]
    }
  },
  {
    id: 'artigo-5',
    slug: 'shadow-ai-os-sistemas-que-seus-funcionarios-estao-criando-e-ninguem-esta-governando',
    title: 'Shadow AI: os sistemas que seus funcionários estão criando e ninguém está governando',
    subtitle: 'Automações paralelas, agentes autônomos e scripts sem supervisão da TI.',
    category: 'IA & Shadow AI',
    tags: ['Shadow AI', 'Risco Operacional', 'Agentes de IA', 'Compliance'],
    summary: 'Colaboradores estão criando fluxos automatizados com conectores de IA sem passar por homologação de segurança, gerando uma camada invisível de sistemas críticos na empresa.',
    briefing: 'Mostrar automações, agentes e processos paralelos criados fora da governança.',
    publishedAt: '2026-08-10',
    updatedAt: '2026-08-21',
    readingTimeMinutes: 5,
    isFeatured: false,
    isMustRead: false,
    author: DEFAULT_AUTHOR,
    content: {
      oQueAconteceu: 'Analistas criam robôs de IA integrados aos seus e-mails e planilhas corporativas para responder clientes automaticamente, criando falhas de conformidade imperceptíveis à TI.',
      oQueIssoSignifica: 'Shadow AI é a evolução da Shadow IT: não é apenas o uso de software não autorizado, é a criação de agentes autônomos tomadores de decisão operando à margem do controle.',
      porQueIssoImporta: 'Quando um agente autônomo comete um erro contratual ou envia dados confidenciais a terceiros, a responsabilidade civil e administrativa permanece integralmente da empresa.',
      qualEORisco: 'Brechas de segurança por credenciais expostas em scripts de automação, vazamentos em APIs de terceiros e decisões de negócios baseadas em automações defeituosas.',
      oQueDeveriaTerSidoPreparado: 'Governança de plataformas no-code/low-code, monitoramento de tokens de API corporativos e inventário de automações internas.',
      oQueFazerAgora: 'Promover um levantamento educativo de automações em uso nos setores-chave e disponibilizar um ambiente seguro e homologado (sandbox) para inovação.',
      perguntasParaExecutivos: [
        'Nossa TI possui ferramentas para detectar quando um colaborador conecta dados internos a APIs externas de IA?',
        'Quem é o responsável legal pelas decisões automatizadas tomadas por robôs desenvolvidos internamente?',
        'Existem credenciais corporativas salvas em código de automações criadas por funcionários nas áreas de negócio?'
      ],
      fontesEReferencias: [
        { title: 'Gartner - Managing the Risks of Generative AI and Shadow AI' },
        { title: 'ISACA - AI Governance and Shadow Systems Framework' }
      ]
    }
  },
  {
    id: 'artigo-6',
    slug: 'seu-plano-de-recuperacao-pode-destruir-a-prova-do-incidente',
    title: 'Seu plano de recuperação pode destruir a prova do incidente',
    subtitle: 'Os perigos de formatar, reinstalar ou sobrescrever servidores antes da preservação de evidências.',
    category: 'Evidência Digital',
    tags: ['Preservação Forense', 'Cadeia de Custódia', 'Incidentes', 'Perícia Digital'],
    summary: 'Na pressa de fazer a empresa voltar a faturar, equipes de TI frequentemente formatam servidores contaminados, destruindo a memória RAM e os registros necessários para identificar a origem do ataque.',
    briefing: 'Explicar os riscos de restaurar, formatar ou substituir sistemas antes da preservação adequada das evidências.',
    publishedAt: '2026-08-08',
    updatedAt: '2026-08-21',
    readingTimeMinutes: 6,
    isFeatured: false,
    isMustRead: false,
    author: DEFAULT_AUTHOR,
    content: {
      oQueAconteceu: 'Após um ataque de ransomware, o time de infraestrutura reinstalou o sistema operacional para acelerar o retorno dos serviços, invalidando o pedido de indenização junto à seguradora por falta de provas.',
      oQueIssoSignifica: 'A preservação forense da evidência (espelhamento bit-a-bit e preservação de memória volátil) deve anteceder a remediação técnica.',
      porQueIssoImporta: 'Provas digitais alteradas ou destruídas por imperícia técnica impedem a responsabilização de criminosos, a apuração de cumplicidade interna e a defesa judicial da empresa.',
      qualEORisco: 'Perda irreparável da cadeia de custódia, negação de cobertura de seguro cibernético e impossibilidade de comprovação de escopo perante a ANPD.',
      oQueDeveriaTerSidoPreparado: 'Procedimento Operacional Padrão (POP) de isolamento e cópia forense preventiva antes de qualquer procedimento de restauração.',
      oQueFazerAgora: 'Treinar os administradores de rede sobre a importância da preservação da memória RAM e isolamento de conectividade antes do desligamento de servidores.',
      perguntasParaExecutivos: [
        'Nosso plano de continuidade exige explicitamente a preservação forense antes do reset ou restauração de sistemas?',
        'Nossa equipe de TI sabe como extrair e preservar a memória volátil de um servidor comprometido?',
        'O contrato com a seguradora exige laudo forense homologado com cadeia de custódia preservada?'
      ],
      fontesEReferencias: [
        { title: 'ISO/IEC 27037:2012 - Guidelines for identification, collection, acquisition and preservation of digital evidence' },
        { title: 'INTERPOL - Global Guidelines for Digital Forensic Laboratory Management' }
      ]
    }
  },
  {
    id: 'artigo-7',
    slug: 'o-board-sabe-realmente-quanto-um-incidente-digital-poderia-custar',
    title: 'O Board sabe realmente quanto um incidente digital poderia custar?',
    subtitle: 'Traduzindo o risco cibernético para métricas financeiras, regulatórias, operacionais e de governança.',
    category: 'Board',
    tags: ['Cyber Risk', 'Governança', 'Conselho de Administração', 'Risco Operacional'],
    summary: 'Apresentar relatórios técnicos com números de firewalls e tentativas de invasão bloqueadas não traduz o risco para o Conselho. É preciso mensurar o impacto direto no fluxo de caixa e na reputação.',
    briefing: 'Traduzir cyber risk para impacto financeiro, jurídico, operacional, regulatório e reputacional.',
    publishedAt: '2026-08-05',
    updatedAt: '2026-08-21',
    readingTimeMinutes: 8,
    isFeatured: true,
    isMustRead: true,
    author: DEFAULT_AUTHOR,
    content: {
      oQueAconteceu: 'Conselhos aprovam orçamentos de segurança com base apenas em cumprimentos formais de tabela, sem compreender o passivo oculto de incidentes de grande porte.',
      oQueIssoSignifica: 'O risco digital é um risco de negócio de primeira grandeza, exigindo métricas financeiras claras (VaR cibernético, perda operacional estimada e custo de litígio).',
      porQueIssoImporta: 'Membros de conselho de administração passam a ser responsabilizados pessoalmente por acionistas caso demonstrem omissão na supervisão da resiliência digital da companhia.',
      qualEORisco: 'Desvalorização de mercado, perda de confiança de investidores, multas regulatórias e despesas não orçadas em gestão de crise e advocacia especializada.',
      oQueDeveriaTerSidoPreparado: 'Relatórios trimestrais de risco cibernético focados em cenários de perda financeira e testes de estresse de continuidade.',
      oQueFazerAgora: 'Adotar uma metodologia de quantificação de risco financeiro cibernético (como o modelo FAIR) nas reuniões de conselho.',
      perguntasParaExecutivos: [
        'O Conselho recebe relatórios de risco digital expressos em termos financeiros ou apenas em jargões de TI?',
        'Qual é o custo estimado para a empresa se o sistema ERP principal ficar indisponível por 7 dias corridos?',
        'O valor da apólice de seguro cobriria os custos de perícia, notificação, honorários e paralisação operacional?'
      ],
      fontesEReferencias: [
        { title: 'SEC Release No. 33-11216 - Cybersecurity Risk Management, Strategy, Governance, and Incident Disclosure' },
        { title: 'FAIR Institute - Quantitative Cyber Risk Management Framework' }
      ]
    }
  },
  {
    id: 'artigo-8',
    slug: 'quando-um-funcionario-deixa-a-empresa-o-que-acontece-com-as-evidencias-digitais',
    title: 'Quando um funcionário deixa a empresa, o que acontece com as evidências digitais?',
    subtitle: 'Gestão de desativação de acessos, salvaguarda de e-mails, dispositivos móveis e propriedade intelectual.',
    category: 'Fraude',
    tags: ['Fraude Interna', 'Exfiltração de Dados', 'Desligamento', 'Recursos Humanos'],
    summary: 'A maior parte das exfiltrações de segredos industriais e dados de clientes ocorre nas semanas anteriores ou posteriores ao desligamento de executivos e colaboradores de áreas estratégicas.',
    briefing: 'Abordar dispositivos, e-mail, cloud, propriedade intelectual e credenciais.',
    publishedAt: '2026-08-03',
    updatedAt: '2026-08-21',
    readingTimeMinutes: 5,
    isFeatured: false,
    isMustRead: false,
    author: DEFAULT_AUTHOR,
    content: {
      oQueAconteceu: 'Ex-executivo de vendas transfere a base inteira de clientes para o seu e-mail pessoal dias antes de pedir demissão e assumir cargo em concorrente direto.',
      oQueIssoSignifica: 'O processo de offboarding deve ser planejado como um protocolo de segurança e preservação de evidências, e não como mera rotina burocrática de RH.',
      porQueIssoImporta: 'A ausência de auditoria em desativações impede a rápida obtenção de liminares judiciais para bloqueio de uso ilícito de propriedade intelectual corporativa.',
      qualEORisco: 'Perda de vantagens competitivas, concorrência desleal acobertada, violação da LGPD e contaminação de credenciais compartilhadas.',
      oQueDeveriaTerSidoPreparado: 'Revogação imediata e sincronizada de identidades em nuvem, retenção legal de caixas postais de executivos estratégicos e preservação do disco do computador de trabalho.',
      oQueFazerAgora: 'Revisar os termos de devolução de equipamentos e implementar DLP (Data Loss Prevention) com foco em desligamentos de posições sensíveis.',
      perguntasParaExecutivos: [
        'O que é feito com os computadores e celulares corporativos devolvidos por executivos estratégicos após o desligamento?',
        'Existe monitoramento automático de cópia massiva de arquivos em pen drives ou nuvem pessoal antes da saída de funcionários?',
        'As contas de e-mail e acessos de ex-colaboradores são sumariamente desativadas no exato instante do anúncio do desligamento?'
      ],
      fontesEReferencias: [
        { title: 'CERT Insider Threat Center - Common Sense Guide to Mitigating Insider Threats' },
        { title: 'Lei da Propriedade Industrial (Lei nº 9.279/1996) - Concorrência Desleal e Segredo de Negócio' }
      ]
    }
  },
  {
    id: 'artigo-9',
    slug: 'lgpd-e-eca-digital-o-risco-digital-que-deixou-de-ser-apenas-responsabilidade-da-ti',
    title: 'LGPD e ECA Digital: o risco digital que deixou de ser apenas responsabilidade da TI',
    subtitle: 'Proteção de dados, salvaguarda de crianças e adolescentes, IA e a responsabilidade direta dos administradores.',
    category: 'LGPD & ECA Digital',
    tags: ['LGPD', 'ECA Digital', 'Privacidade', 'Compliance', 'Direito Digital'],
    summary: 'A conformidade com a LGPD e com as diretrizes do ECA no ambiente digital exige governança ativa sobre coleta, tratamento de dados de vulneráveis e o uso de algoritmos, sob pena de responsabilização civil severa.',
    briefing: 'Mostrar como proteção de dados, IA, plataformas e usuários podem gerar exposição empresarial.',
    publishedAt: '2026-07-30',
    updatedAt: '2026-08-21',
    readingTimeMinutes: 7,
    isFeatured: true,
    isMustRead: true,
    author: DEFAULT_AUTHOR,
    content: {
      oQueAconteceu: 'Empresas de tecnologia, educação e varejo enfrentam fiscalizações rigorosas e ações civis públicas por conta de profiling indevido e vazamento de dados que afetam menores e titulares de dados sensíveis.',
      oQueIssoSignifica: 'Conformidade com LGPD e ECA Digital não se resume a publicar avisos de cookies no site; demanda auditoria permanente dos fluxos de informação e proteção de vulneráveis.',
      porQueIssoImporta: 'O descumprimento gera multas administrativas de até R$ 50 milhões por infração, além de sanções reputacionais devastadoras e proibição de tratamento de bases essenciais de dados.',
      qualEORisco: 'Interdição de produtos digitais, responsabilização solidária de diretores, publicidade negativa extensiva e processos judiciais coletivos.',
      oQueDeveriaTerSidoPreparado: 'Relatório de Impacto à Proteção de Dados (RIPD/DPIA), mapeamento de dados sensíveis e governança no desenvolvimento de soluções digitais voltadas ao público em geral.',
      oQueFazerAgora: 'Integrar a equipe de privacidade, compliance e perícia digital na validação de todo novo sistema, IA ou campanha corporativa.',
      perguntasParaExecutivos: [
        'Nossa empresa trata direta ou indiretamente dados de crianças e adolescentes ou dados pessoais sensíveis?',
        'O DPO e o Jurídico possuem respaldo técnico para auditar os algoritmos e sistemas internos de tratamento de dados?',
        'Possuímos plano comprovado para notificar a ANPD e os titulares no prazo adequado em caso de incidente confirmado?'
      ],
      fontesEReferencias: [
        { title: 'Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD)' },
        { title: 'Estatuto da Criança e do Adolescente (Lei nº 8.069/1990) e Diretrizes para Ambientes Digitais' },
        { title: 'Resoluções e Guias Orientativos da Autoridade Nacional de Proteção de Dados (ANPD)' }
      ]
    }
  },
  {
    id: 'artigo-10',
    slug: 'o-primeiro-telefonema-depois-de-um-incidente-pode-definir-toda-a-investigacao',
    title: 'O primeiro telefonema depois de um incidente pode definir toda a investigação',
    subtitle: 'Ações imediatas, cadeia de custódia e contatos estratégicos nos primeiros 60 minutos de crise.',
    category: 'Incidentes',
    tags: ['Resposta a Incidentes', 'Cadeia de Custódia', 'Gestão de Crise', 'Perícia Digital'],
    summary: 'As decisões tomadas na primeira hora de um vazamento ou sequestro de dados orientam se a crise será contida com precisão forense ou se resultará em caos operacional e vulnerabilidade jurídica.',
    briefing: 'Explicar cadeia decisória, acionamento, preservação e comunicação.',
    publishedAt: '2026-07-28',
    updatedAt: '2026-08-21',
    readingTimeMinutes: 5,
    isFeatured: false,
    isMustRead: true,
    author: DEFAULT_AUTHOR,
    content: {
      oQueAconteceu: 'Ao perceber a mensagem de extorsão, o gerente operacional liga para um técnico de suporte que desliga abruptamente os servidores da tomada, destruindo vestígios valiosos armazenados na memória volátil.',
      oQueIssoSignifica: 'A reação inicial deve seguir um plano rigoroso de contenção sem destruição de provas, acionando simultaneamente o perito forense, o jurídico e a governança.',
      porQueIssoImporta: 'O modo de acionamento das partes envolvidas determina a preservação do segredo profissional e do sigilo advogado-cliente (attorney-client privilege) nas investigações.',
      qualEORisco: 'Destruição involuntária de evidências vitais, pânico organizacional, vazamentos precoces e perda de controle da narrativa pública.',
      oQueDeveriaTerSidoPreparado: 'Cartão de acionamento de emergência (First Responder Pocket Guide) distribuído aos executivos e plantonistas de tecnologia.',
      oQueFazerAgora: 'Estabelecer uma linha direta de comunicação segura fora da infraestrutura principal para coordenação durante incidentes.',
      perguntasParaExecutivos: [
        'Quem é a primeira pessoa que seu gestor de TI deve ligar ao identificar uma invasão às 2 horas da manhã de um domingo?',
        'Nossa empresa tem um canal seguro e externo para conversar durante uma indisponibilidade total dos e-mails corporativos?',
        'O time sabe exatamente o que NÃO fazer nas primeiras 2 horas após a constatação de um desastre cibernético?'
      ],
      fontesEReferencias: [
        { title: 'NIST Computer Security Incident Handling Guide (SP 800-61 Rev. 2)' },
        { title: 'RFC 3227 - Guidelines for Evidence Collection and Archiving' }
      ]
    }
  }
];
