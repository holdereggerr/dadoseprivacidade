import { Course } from '@/types/courses';

export const mockCourses: Course[] = [
  {
    id: 'course-01',
    title: 'IA no Dia a Dia Executivo',
    slug: 'ia-no-dia-a-dia-executivo',
    subtitle: 'Transforme rotinas de gestão, relatórios e tomada de decisão com clareza e segurança.',
    description: 'Curso intensivo e prático focado em capacitar gestores, diretores e PMEs a utilizarem ferramentas de IA para acelerar a produtividade da equipe sem riscos regulatórios ou de segurança.',
    targetOutcome: 'Reduza em até 40% o tempo gasto em tarefas operacionais e lidere a adoção de IA com autoridade.',
    duration: '4 Semanas',
    level: 'Executivo / Gestão',
    workload: '16 Horas de conteúdo + Mentorias ao Vivo',
    instructorName: 'Gabriel Costa',
    instructorRole: 'Curador Chefe de IA e Ex-Executivo de Tecnologia',
    badgeText: 'Formação Prática',
    priceInfo: 'Disponível no Clube Heróis da IA ou Compra Avulsa',
    modules: [
      {
        title: 'Módulo 1: O Panorama Real da IA Corporativa',
        duration: '3h',
        summary: 'Como separar promessas de gurus da utilidade real para negócios.'
      },
      {
        title: 'Módulo 2: Engenharia de Prompt para Tomada de Decisão',
        duration: '4h',
        summary: 'Técnicas de estruturação de contexto para síntese de documentos e análise de cenários.'
      },
      {
        title: 'Módulo 3: Governança, LGPD e Segurança de Dados',
        duration: '4h',
        summary: 'Configuração de políticas internas e prevenção contra vazamento de dados sensíveis.'
      },
      {
        title: 'Módulo 4: Montagem de Fluxos de Trabalho Assistidos',
        duration: '5h',
        summary: 'Integração de ferramentas no cotidiano da empresa com checkpoints humanos.'
      }
    ]
  },
  {
    id: 'course-02',
    title: 'Prompt Engineering Prático para Negócios',
    slug: 'prompt-engineering-pratico-negocios',
    subtitle: 'Domine a arte de instruir modelos de IA para obter resultados precisos na primeira tentativa.',
    description: 'Aprenda os frameworks de comunicação com modelos de linguagem aplicados a marketing, vendas, suporte e análise estratégica.',
    targetOutcome: 'Elimine refazer respostas e construa uma biblioteca própria de prompts corporativos reutilizáveis.',
    duration: '2 Semanas',
    level: 'Iniciante ao Intermediário',
    workload: '8 Horas gravadas + Exercícios práticos',
    instructorName: 'Mariana Silva',
    instructorRole: 'Estrategista de Conteúdo e Comunicação',
    badgeText: 'Mais Vendido',
    priceInfo: 'Incluso no Clube Heróis da IA',
    modules: [
      {
        title: 'Módulo 1: Arquitetura de Prompts Estruturados',
        duration: '2h',
        summary: 'Componentes essenciais: Papel, Contexto, Instrução, Formato de Saída e Restrições.'
      },
      {
        title: 'Módulo 2: Raciocínio Passo a Passo (Chain-of-Thought)',
        duration: '3h',
        summary: 'Como induzir o modelo a resolver problemas complexos com etapas de verificação.'
      },
      {
        title: 'Módulo 3: Biblioteca Executiva de Prompts',
        duration: '3h',
        summary: 'Criação e padronização de templates para a sua equipe comercial e operacional.'
      }
    ]
  },
  {
    id: 'course-03',
    title: 'Governança e Adoção Segura de IA em PMEs',
    slug: 'governanca-adocao-segura-ia-pmes',
    subtitle: 'Como implementar IA em sua empresa dentro da lei, com controle de riscos e baixo custo.',
    description: 'Treinamento completo para empresários e líderes que precisam estabelecer diretrizes claras, conformidade com LGPD e prevenção de vazamentos.',
    targetOutcome: 'Implemente uma política de IA pronta para uso e homologue as ferramentas da sua empresa.',
    duration: '1 Dia (Workshop Intensivo)',
    level: 'Gestão e Jurídico/Compliance',
    workload: '6 Horas ao vivo',
    instructorName: 'Paula Rebouças',
    instructorRole: 'Especialista em Proteção de Dados e Direito Digital',
    badgeText: 'Corporativo',
    priceInfo: 'Ideal para Equipes Corporativas',
    modules: [
      {
        title: 'Módulo 1: Diagnóstico de Maturidade e Riscos de IA',
        duration: '2h',
        summary: 'Identificação de ferramentas em uso não autorizado (Shadow AI).'
      },
      {
        title: 'Módulo 2: Matriz de Permissões e Sanitização de Dados',
        duration: '2h',
        summary: 'Regras práticas do que pode e do que não pode ser enviado para a nuvem.'
      },
      {
        title: 'Módulo 3: Código de Conduta de IA e Termos de Uso',
        duration: '2h',
        summary: 'Documentação pronta e ajustável para assinar com a equipe.'
      }
    ]
  }
];
