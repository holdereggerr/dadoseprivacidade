import { AITool } from '@/types/tools';

export const mockTools: AITool[] = [
  {
    id: 'tool-01',
    name: 'Claude 3.7 Sonnet',
    slug: 'claude-3-7-sonnet',
    tagline: 'Raciocínio híbrido e código de alta precisão para uso profissional',
    description: 'Modelo de linguagem de ponta focado em análise de documentos extensos, escrita técnica refinada e programação sem alucinações de sintaxe.',
    category: 'Modelos de Linguagem & Raciocínio',
    pricing: 'Freemium',
    rating: 4.9,
    officialUrl: 'https://claude.ai',
    practicalUseCases: [
      'Análise de contratos longos e relatórios financeiros',
      'Refatoração e documentação de código em tempo real',
      'Revisão editorial profunda de textos complexos'
    ],
    securityRating: 'Alta',
    pros: [
      'Janela de contexto extensa de até 200k tokens',
      'Excelente compreensão de nuances e formatação',
      'Excelente adesão às instruções do prompt'
    ],
    cons: [
      'Cota diária limitada no plano gratuito em horários de pico',
      'Recursos de geração de imagem integrados indisponíveis nativamente'
    ],
    targetAudience: 'Profissionais, desenvolvedores, pesquisadores e gestores.'
  },
  {
    id: 'tool-02',
    name: 'Perplexity AI',
    slug: 'perplexity-ai',
    tagline: 'Mecanismo de resposta com citação de fontes em tempo real',
    description: 'Buscador conversacional que sintetiza buscas na web com links diretos de referência, ideal para checagem rápida de fatos e pesquisa inicial.',
    category: 'Pesquisa & Curadoria',
    pricing: 'Freemium',
    rating: 4.8,
    officialUrl: 'https://perplexity.ai',
    practicalUseCases: [
      'Pesquisa de mercado com dados recentes',
      'Comparativo rápido entre concorrentes e produtos',
      'Descoberta de artigos acadêmicos e matérias com fonte'
    ],
    securityRating: 'Alta',
    pros: [
      'Citação transparente de links em cada afirmação',
      'Opção de alternar entre múltiplos modelos de base (Pro)',
      'Interface limpa sem anúncios poluidos'
    ],
    cons: [
      'Pode citar fontes de confiabilidade questionável se o tema for novo',
      'Requer verificação manual dos links fornecidos'
    ],
    targetAudience: 'Jornalistas, analistas de mercado, estudantes e consultores.'
  },
  {
    id: 'tool-03',
    name: 'Gamma App',
    slug: 'gamma-app',
    tagline: 'Criação ágil de apresentações, documentos e páginas web com IA',
    description: 'Plataforma criativa que transforma notas ou rascunhos em slides visuais limpos e editáveis sem necessidade de formatação manual de layout.',
    category: 'Design & Apresentações',
    pricing: 'Freemium',
    rating: 4.7,
    officialUrl: 'https://gamma.app',
    practicalUseCases: [
      'Montagem rápida de pitches para clientes e reuniões',
      'Criação de documentos de onboarding e manuais internos',
      'Transformação de relatórios em formato visual'
    ],
    securityRating: 'Média',
    pros: [
      'Layouts modernos e responsivos automaticamente',
      'Exportação fácil para PDF e PowerPoint',
      'Edição em bloco intuitiva'
    ],
    cons: [
      'Menor flexibilidade para quem exige Pixel-Perfect exato',
      'Personalização avançada de fontes requer plano de empresa'
    ],
    targetAudience: 'Empreendedores, executivos de vendas e educadores.'
  },
  {
    id: 'tool-04',
    name: 'Cursor Editor',
    slug: 'cursor-editor',
    tagline: 'IDE integrada a modelos de IA para desenvolvimento acelera equipes de software',
    description: 'Editor de código baseado em VS Code com compreensão profunda de todo o repositório, permitindo edições multi-arquivos com linguagem natural.',
    category: 'Desenvolvimento & Engenharia',
    pricing: 'Freemium',
    rating: 4.9,
    officialUrl: 'https://cursor.com',
    practicalUseCases: [
      'Criação rápida de rotas e componentes de frontend/backend',
      'Localização instantânea de bugs em repositórios complexos',
      'Escrita de testes unitários automatizados'
    ],
    securityRating: 'Alta',
    pros: [
      'Modo de privacidade com opção de não salvar código no servidor',
      'Agilidade extrema para programadores de qualquer nível',
      'Suporta extensões do VS Code sem atrito'
    ],
    cons: [
      'Requer atenção para não aceitar código sem revisão de segurança',
      'Consumo de cota em projetos muito grandes'
    ],
    targetAudience: 'Desenvolvedores, engenheiros de dados e líderes técnicos.'
  }
];
