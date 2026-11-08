export interface ArticleSource {
  title: string;
  url: string;
  publisher: string;
  trustScore?: number;
}

export interface ArticleItem {
  id: string;
  title: string;
  slug: string;
  summary: string;
  isFeatured?: boolean;
  category: string;
  categoryId: string;
  format: string;
  level: string;
  readingTime: string;
  publishedAt: string;
  updatedAt: string;
  primarySource: string;
  badgeText: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
    bio: string;
  };
  editor: {
    name: string;
    role: string;
  };
  reviewer: {
    name: string;
    role: string;
  };
  summaryPoints: string[];
  whyItMatters: string;
  legalContext: string;
  practicalApplication: string;
  limitationsAndNotice: string;
  sources: ArticleSource[];
  verificationStatus: string;
  tags: string[];
  body: string;
}

export const mockArticles: ArticleItem[] = [
  {
    id: 'art-01',
    title: 'LGPD para pequenas empresas: por onde começar',
    slug: 'lgpd-para-pequenas-empresas-por-onde-comecar',
    summary: 'Um roteiro prático e sem jargões excessivos com os primeiros passos fundamentais para proprietários e gestores de PMEs organizarem a privacidade sem custos astronômicos.',
    isFeatured: true,
    category: 'LGPD na operação da empresa',
    categoryId: 'lgpd-operacao',
    format: 'Guia Prático',
    level: 'Iniciante / Gestão',
    readingTime: '7 min de leitura',
    publishedAt: '2026-09-28',
    updatedAt: '2026-09-28',
    primarySource: 'Art. 7º e Art. 41º da LGPD (Lei nº 13.709/2018) + Guia ANPD para Pequeno Porte',
    badgeText: 'Guia Fundamental',
    author: {
      name: 'Curadoria Editorial Dados & Privacidade',
      role: 'Equipe de Governança e Regulamentação',
      bio: 'Produzido e revisado por especialistas em LGPD e gestão de operações para pequenas e médias empresas.'
    },
    editor: {
      name: 'Editoria Técnica',
      role: 'Dados & Privacidade'
    },
    reviewer: {
      name: 'Revisão Jurídica & Operacional',
      role: 'Conformidade e Legislação'
    },
    summaryPoints: [
      'Adequação de PMEs não exige soluções complexas ou caras, mas sim organização dos fluxos de dados existentes.',
      'Identificar quais dados a empresa coleta (clientes, funcionários, fornecedores) é a primeira etapa indispensável.',
      'O envolvimento da liderança garante que as regras de privacidade saiam do papel e virem rotina diária.'
    ],
    whyItMatters: 'Pequenas e médias empresas lidam diariamente com dados pessoais em vendas, emissão de notas fiscais, contratação de pessoal e marketing. Compreender o básico evita penalidades e transmite segurança a clientes.',
    legalContext: 'A ANPD estabeleceu regulamentação flexibilizada para Agentes de Tratamento de Pequeno Porte (Resolução CD/ANPD nº 2/2022), simplificando obrigações sem isentar a empresa do dever de boa-fé e segurança.',
    practicalApplication: 'Comece com um inventário simples em planilha: liste quem coleta os dados, onde ficam armazenados (sistema de vendas, WhatsApp, papel), quem tem acesso e com qual finalidade.',
    limitationsAndNotice: 'Este guia fornece diretrizes gerais de capacitação. Não substitui um diagnóstico jurídico ou consultoria técnica individualizada.',
    sources: [
      {
        title: 'Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018)',
        url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm',
        publisher: 'Presidência da República'
      },
      {
        title: 'Guia Orientativo para Agentes de Tratamento de Pequeno Porte',
        url: 'https://www.gov.br/anpd',
        publisher: 'Autoridade Nacional de Proteção de Dados (ANPD)'
      }
    ],
    verificationStatus: 'Fonte Primária Verificada',
    tags: ['LGPD', 'PMEs', 'Gestão', 'Primeiros Passos', 'Operação'],
    body: `
# LGPD para pequenas empresas: por onde começar

> **Boneco de Conteúdo / Estrutura Editorial em Preparação**
> *Este artigo faz parte da trilha inicial do Dados & Privacidade para orientação de proprietários e gestores.*

---

## 1. O Ponto de Partida: Desmistificando a LGPD para PMEs

Para quem administra uma pequena ou média empresa, ouvir falar em **LGPD (Lei Geral de Proteção de Dados)** muitas vezes gera apreensão. É comum surgir a falsa impressão de que adequar o negócio exige softwares caríssimos, consultorias inacessíveis ou a contratação imediata de novos funcionários dedicados.

A realidade, no entanto, é mais simples e direta: **a proteção de dados é uma questão de organização de processos e boa-fé administrativa.**

Se a sua empresa possui clientes cadastrados, envia mensagens no WhatsApp, emite notas fiscais ou contrata funcionários, você já trata dados pessoais. O objetivo da LGPD não é proibir esse tratamento, mas garantir que ele ocorra de forma transparente, segura e com finalidades bem definidas.

---

## 2. As 4 Perguntas Iniciais para o Gestor

Antes de contratar qualquer ferramenta, o proprietário ou gestor deve reunir sua equipe chave (marketing, vendas, RH e financeiro) e responder a quatro perguntas fundamentais:

1. **Quais dados pessoais nós realmente coletamos?** (Ex.: CPF, e-mail, telefone, endereço, histórico de compras).
2. **Por que nós precisamos de cada um desses dados?** (Existe uma razão comercial ou obrigação legal direta?).
3. **Onde esses dados ficam armazenados?** (Em planilhas no computador, no sistema CRM, no papel ou na nuvem?).
4. **Quem dentro da empresa tem acesso a eles?** (Todos os colaboradores ou apenas os responsáveis pela tarefa?).

---

## 3. Roteiro Prático de 5 Passos para a Aplicação

### Passo 1: Faça o Inventário Simplificado de Dados
Crie uma planilha simples com as colunas: *Processo*, *Dados Coletados*, *Onde Fica*, *Finalidade* e *Quem Acessa*. Esse documento será o mapa de navegação da sua empresa.

### Passo 2: Revise as Permissões de Acesso
Restrinja o acesso às pastas e sistemas. O setor de vendas não precisa acessar documentos do departamento pessoal; o marketing não precisa ver dados bancários.

### Passo 3: Adote Medidas Básicas de Segurança Digital
Exija senhas fortes, ative a autenticação em duas etapas (2FA) nos e-mails e sistemas de gestão, e garanta backups periódicos de arquivos importantes.

### Passo 4: Atualize o Diálogo com o Cliente
Deixe claro ao cliente no momento do cadastro para que seu e-mail ou telefone será utilizado. A transparência gera confiança imediata.

### Passo 5: Envolva e Conscientize a Equipe
A maioria dos incidentes de dados ocorre por descuido humano (como enviar e-mail para o destinatário errado). Realize conversas periódicas sobre boas práticas de privacidade.

---

## 4. O Que Diz a Regulamentação Flexibilizada da ANPD

A Autoridade Nacional de Proteção de Dados (ANPD) reconhece a realidade diferenciada das PMEs através da **Resolução CD/ANPD nº 2/2022**. Ela estabelece regras simplificadas para Agentes de Tratamento de Pequeno Porte, incluindo:

* Prazos em dobro para atendimento a solicitações de titulares de dados;
* Procedimento simplificado para registro de operações de tratamento;
* Flexibilidade na indicação do Encarregado de Dados (DPO), dependendo do risco das atividades.

---

## 5. Próximo Passo Prático

Faça o download do nosso modelo de **Planilha de Mapeamento Simplificado** (em breve na seção de Materiais) e agende uma conversa de 30 minutos com sua equipe para mapear o primeiro setor da empresa.
    `
  },
  {
    id: 'art-02',
    title: 'Quando o ECA Digital pode afetar meu negócio?',
    slug: 'quando-o-eca-digital-pode-afetar-meu-negocio',
    summary: 'Entenda quais tipos de sites, e-commerces, sistemas e serviços digitais se enquadram nas obrigações da nova Lei nº 15.211/2025 de proteção a crianças e adolescentes.',
    isFeatured: false,
    category: 'ECA Digital e serviços digitais',
    categoryId: 'eca-digital',
    format: 'Análise Regulatória',
    level: 'Intermediário',
    readingTime: '8 min de leitura',
    publishedAt: '2026-09-28',
    updatedAt: '2026-09-28',
    primarySource: 'Lei nº 15.211/2025 (ECA Digital) + Art. 14 da LGPD',
    badgeText: 'Especial ECA Digital',
    author: {
      name: 'Curadoria Editorial Dados & Privacidade',
      role: 'Equipe de Governança e Regulamentação',
      bio: 'Produzido e revisado por especialistas em LGPD e ECA Digital.'
    },
    editor: {
      name: 'Editoria Técnica',
      role: 'Dados & Privacidade'
    },
    reviewer: {
      name: 'Revisão de Direitos Digitais',
      role: 'Privacidade de Crianças e Adolescentes'
    },
    summaryPoints: [
      'O ECA Digital (Lei nº 15.211/2025) estabelece dever de proteção por padrão para serviços digitais acessíveis por crianças e adolescentes.',
      'Mesmo empresas que não têm público infantil como alvo principal podem ser afetadas se permitirem cadastros ou interações de menores.',
      'Requisitos incluem verificação etária adequada, limitação de perfilamento comportamental e design seguro por padrão.'
    ],
    whyItMatters: 'Com a promulgação da Lei nº 15.211/2025, empresas de tecnologia, jogos, educação, e-commerce e plataformas de conteúdo precisam avaliar urgentemente se seus sistemas atendem às salvaguardas reforçadas para o público menor de 18 anos.',
    legalContext: 'O ECA Digital complementa a LGPD (Art. 14), detalhando deveres específicos de prevenção a riscos digitais, superexposição, publicidade direcionada e mecanismos de consentimento parental.',
    practicalApplication: 'Mapeie se o seu site ou aplicativo permite a criação de contas por menores e verifique se há mecanismos claros de aviso, controle de idade e termos de uso em linguagem acessível ao público jovem.',
    limitationsAndNotice: 'O presente material possui intuito informativo e pedagógico. Análises de enquadramento contratual exigem avaliação técnica específica do serviço prestado.',
    sources: [
      {
        title: 'Lei nº 15.211/2025 (ECA Digital)',
        url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/l15211.htm',
        publisher: 'Presidência da República'
      },
      {
        title: 'Estatuto da Criança e do Adolescente (Lei nº 8.069/1990)',
        url: 'https://www.planalto.gov.br/ccivil_03/leis/l8069.htm',
        publisher: 'Presidência da República'
      }
    ],
    verificationStatus: 'Fonte Primária Verificada',
    tags: ['ECA Digital', 'Lei 15.211/2025', 'Serviços Digitais', 'Proteção de Menores'],
    body: `
# Quando o ECA Digital pode afetar meu negócio?

> **Boneco de Conteúdo / Estrutura Editorial em Preparação**
> *Este artigo faz parte da trilha especial sobre a Lei nº 15.211/2025 (ECA Digital) para provedores de serviços digitais.*

---

## 1. O Que É o ECA Digital e Qual Seu Alcance?

Sancionado para fortalecer a proteção de crianças e adolescentes no ambiente virtual, o **ECA Digital (Lei nº 15.211/2025)** estabelece diretrizes claras para empresas que desenvolvem, operam ou disponibilizam produtos e serviços digitais no Brasil.

Muitos gestores acreditam erroneamente que a lei se aplica apenas a jogos infantis ou plataformas de grandes redes sociais. No entanto, o alcance da legislação é mais amplo: **qualquer serviço digital com probabilidade razoável de acesso por menores de 18 anos precisa adotar precauções de privacidade e segurança por padrão (Privacy & Safety by Design).**

---

## 2. Quem Deve Ficar Atento? (Critérios de Enquadramento)

Sua empresa pode ser diretamente afetada caso se enquadre em um dos seguintes cenários:

* **Plataformas de Cursos ou Educação Online**: Que matriculam estudantes adolescentes ou crianças.
* **E-commerces e Lojas Virtuais**: Que vendem produtos direcionados ao público jovem ou de uso familiar.
* **Sistemas de Chat, Fóruns ou Comunidades**: Onde usuários podem interagir de forma aberta ou privada.
* **Aplicativos e Jogos**: Com elementos de microtransações, cadastro de usuários ou anúncios.
* **Serviços de Conteúdo e Mídia**: Que transmitem vídeos, podcasts ou artigos acessíveis sem restrição etária.

---

## 3. Os Pilares Fundamentais da Lei nº 15.211/2025

### A. Privacidade por Padrão (Privacy by Default)
As configurações iniciais de contas de usuários menores devem ser automaticamente definidas com o nível máximo de privacidade, sem compartilhamento público de dados ou localização.

### B. Restrição ao Perfilamento e Publicidade Direcionada
A lei proíbe o rastreamento comportamental agressivo de crianças para fins de exibição de anúncios segmentados ou indução ao consumo compulsivo.

### C. Mecanismos de Verificação e Consentimento dos Pais
Para o público infantil (menores de 12 anos), o tratamento de dados exige consentimento específico e em destaque dado por pelo menos um dos pais ou responsável legal.

### D. Linguagem Simples e Acessível
Os termos de uso e avisos de privacidade devem ser escritos em linguagem clara, direta e compreensível para o próprio público jovem.

---

## 4. Roteiro de Avaliação Inicial para Sua Empresa

1. **Identifique a faixa etária dos seus usuários reais**: Analise os logs e cadastros existentes.
2. **Avalie os riscos do ambiente**: Existe exposição a contatos indesejados, conteúdos inadequados ou coleta excessiva de dados?
3. **Implemente barreiras etárias proporcionais**: Utilize formulários de confirmação de idade sem solicitar dados excessivos.
4. **Revise seus parceiros de publicidade e métricas**: Garanta que scripts de terceiros não façam perfilamento não autorizado de menores.

---

## 5. Próximo Passo

Consulte a nossa categoria **ECA Digital e Serviços Digitais** para acessar os roteiros de avaliação e modelos de avisos adaptados.
    `
  },
  {
    id: 'art-03',
    title: 'Que registros ajudam a demonstrar as decisões de proteção de dados?',
    slug: 'que-registros-ajudam-a-demonstrar-as-decisoes-de-protecao-de-dados',
    summary: 'Descubra quais evidências mínimas e registros formais (ROPA simplificado, termos, atas e logs) comprovam a boa-fé e a governança da empresa perante fiscalizações e auditorias.',
    isFeatured: false,
    category: 'Incidentes, decisões e documentação',
    categoryId: 'incidentes-doc',
    format: 'Roteiro de Evidências',
    level: 'Intermediário / Operacional',
    readingTime: '6 min de leitura',
    publishedAt: '2026-09-28',
    updatedAt: '2026-09-28',
    primarySource: 'Art. 37º da LGPD (Registro de Operações) + Resolução CD/ANPD nº 2/2022',
    badgeText: 'Documentação & Governança',
    author: {
      name: 'Curadoria Editorial Dados & Privacidade',
      role: 'Equipe de Governança e Regulamentação',
      bio: 'Produzido e revisado por especialistas em documentação de conformidade e auditoria de sistemas.'
    },
    editor: {
      name: 'Editoria Técnica',
      role: 'Dados & Privacidade'
    },
    reviewer: {
      name: 'Revisão de Governança de TI',
      role: 'Auditoria de Processos'
    },
    summaryPoints: [
      'Na LGPD, a comprovação de boa-fé (accountability) depende da capacidade da empresa de demonstrar como tomou decisões de privacidade.',
      'O registro das operações de tratamento (ROPA) não precisa ser um documento complexo: para PMEs, um inventário organizado cumpre o requisito legal.',
      'Documentar treinamentos de funcionários e escolhas de fornecedores é a melhor defesa em caso de questionamento de clientes ou autoridades.'
    ],
    whyItMatters: 'Em situações de incidente de segurança ou notificação da ANPD, a diferença entre uma advertência orientativa e uma penalidade severa reside na capacidade da empresa de apresentar registros de que agiu de forma diligente e responsável.',
    legalContext: 'O Art. 37 da LGPD estabelece que o controlador e o operador devem manter registro das operações de tratamento de dados pessoais que realizarem, especialmente quando baseado no legítimo interesse.',
    practicalApplication: 'Estruture uma pasta de "Evidências de Privacidade" contendo: registros de consentimento, cópias de treinamentos com lista de presença, contratos com fornecedores e logs de backup.',
    limitationsAndNotice: 'Este roteiro indica boas práticas de organização documental. A validade jurídica de contratos e termos específicos deve ser avaliada por assessoria jurídica competente.',
    sources: [
      {
        title: 'Lei Geral de Proteção de Dados (Artigo 37)',
        url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm',
        publisher: 'Presidência da República'
      },
      {
        title: 'Resolução CD/ANPD nº 2/2022 (Regulamento de Agentes de Pequeno Porte)',
        url: 'https://www.gov.br/anpd',
        publisher: 'ANPD'
      }
    ],
    verificationStatus: 'Fonte Primária Verificada',
    tags: ['Documentação', 'ROPA', 'Evidências', 'Governança', 'Auditoria'],
    body: `
# Que registros ajudam a demonstrar as decisões de proteção de dados?

> **Boneco de Conteúdo / Estrutura Editorial em Preparação**
> *Este artigo faz parte da trilha sobre Governança, Registros e Prestação de Contas (Accountability).*

---

## 1. O Princípio da Responsabilização e Prestação de Contas

Um dos princípios mais importantes da LGPD (Artigo 6º, X) é a **responsabilização e prestação de contas** (*accountability*). Ele estabelece que a empresa não deve apenas cumprir as normas de privacidade, mas ser capaz de **demonstrar a adoção de medidas eficazes e capazes de comprovar a observância e o cumprimento da lei.**

Na prática: de nada adianta ter excelentes intenções se a empresa não possui registros mínimos que comprovem suas escolhas organizacionais.

---

## 2. Os 5 Registros Essenciais para Pequenas e Médias Empresas

Para manter a governança sem burocracia excessiva, concentre-se na organização destes cinco grupos de evidências:

### 1. Registro das Operações de Tratamento (ROPA Simplificado)
O documento exigido pelo Art. 37 da LGPD. Para PMEs, trata-se de um mapa descrevendo quais dados são tratados, a finalidade de cada um, os prazos de retenção e as medidas de segurança aplicadas.

### 2. Evidências de Informação e Consentimento
Quando a base legal utilizada for o consentimento do titular (por exemplo, na assinatura de um boletim de marketing), guarde os registros de data, hora e texto do aviso apresentado ao usuário.

### 3. Registro de Treinamento e Orientações da Equipe
Guarde apresentações, materiais educativos enviados aos colaboradores e atas ou listas de presença de reuniões sobre privacidade. Isso demonstra que a liderança orientou ativamente seus funcionários.

### 4. Avaliação de Fornecedores e Operadores (Vendor Assessment)
Contratos ou aditivos firmados com fornecedores de software (CRM, e-mail marketing, nuvem, contabilidade) que contêm cláusulas explícitas de proteção de dados e responsabilidades mútuas.

### 5. Registros Técnicos de Segurança (Logs e Backups)
Logs de acesso de administradores de sistemas, relatórios periódicos de cópias de segurança (backups) e registros de atualização de softwares e antivírus.

---

## 3. Como Organizar a Pasta de Evidências

Crie um repositório seguro e de acesso restrito (por exemplo, "Governança_LGPD_Empresa") com a seguinte estrutura de pastas:

\`\`\`text
📁 Governança_LGPD_Empresa/
├── 📄 01_Inventario_ROPA_Simplificado.xlsx
├── 📁 02_Políticas_e_Avisos/
│   ├── Politica_Privacidade_Site_v1.pdf
│   └── Termos_Atendimento_Cliente.pdf
├── 📁 03_Treinamentos_e_Equipe/
│   ├── Ata_Orientacao_Interna_2026.pdf
│   └── Guia_Boas_Praticas_Funcionarios.pdf
├── 📁 04_Contratos_Fornecedores/
│   └── Aditivo_LGPD_Sistema_CRM.pdf
└── 📁 05_Segurança_e_Backups/
    └── Relatorio_Mensal_Backups.pdf
\`\`\`

---

## 4. O Valor do Registro em Casos de Incidentes

Caso ocorra algum questionamento por parte de um cliente ou uma notificação fiscalizatória da ANPD, a capacidade de apresentar essa pasta de evidências organizada comprova a **boa-fé da empresa**. A autoridade considera expressamente a adoção reiterada e demonstrada de mecanismos de governança ao dosar eventuais medidas orientativas ou sanções.

---

## 5. Próximo Passo

Explore o nosso guia sobre **Inventário de Dados e ROPA Simplificado** para baixar a planilha estruturada de registros.
    `
  }
];

export const INITIAL_ARTICLES = mockArticles;
