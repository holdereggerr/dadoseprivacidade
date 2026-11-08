import { AntiHypeClaim } from '@/types/antihype';

export const mockAntiHypeClaims: AntiHypeClaim[] = [
  {
    id: 'hype-01',
    claim: '“IA vai substituir 100% dos empregos de escritório nos próximos 12 meses.”',
    category: 'Mercado de Trabalho',
    evidence: 'Relatórios do Fórum Econômico Mundial e dados operacionais de contratação indicam automação de tarefas repetitivas, não eliminação de cargos inteiros. Profissionais que utilizam IA estão substituindo profissionais que ignoram a tecnologia.',
    verdict: 'Mito Superestimado',
    verdictDetail: 'A automação é focada em etapas operacionais. A tomada de decisão, julgamento contextual e responsabilidade legal continuam sendo 100% humanas.',
    sourcesCount: 8,
    lastVerified: '18/09/2026'
  },
  {
    id: 'hype-02',
    claim: '“Modelos de IA possuem inteligência consciente (AGI) e sentem emoções.”',
    category: 'Capacidade Técnica',
    evidence: 'Artigos científicos de arquitetura de redes neurais demonstram que LLMs funcionam por associação estatística avançada de tokens ("auto-complete avançado"), sem consciência, intenção ou compreensão biológica.',
    verdict: 'Mito Superestimado',
    verdictDetail: 'Simulação fluida de linguagem não é o mesmo que consciência. O modelo gera padrões aprendidos durante o treinamento.',
    sourcesCount: 12,
    lastVerified: '15/09/2026'
  },
  {
    id: 'hype-03',
    claim: '“Inserir dados em planos gratuitos de IA expõe informações corporativas para treinamento.”',
    category: 'Segurança & LGPD',
    evidence: 'Os termos de uso dos principais fornecedores (OpenAI, Anthropic, Google) deixam claro que interações em contas gratuitas e individuais são registradas para melhoria de modelos, a menos que o usuário solicite Opt-Out ou utilize planos Enterprise/API.',
    verdict: 'Fato Comprovado',
    verdictDetail: 'Verdadeiro. Para proteger segredos comerciais e dados pessoais da LGPD, é obrigatório utilizar contas empresariais ou desativar o histórico de treinamento nas configurações.',
    sourcesCount: 6,
    lastVerified: '17/09/2026'
  },
  {
    id: 'hype-04',
    claim: '“Qualquer pessoa pode criar um robô milionário de IA em 5 minutos sem saber programar.”',
    category: 'Promessas de Renda',
    evidence: 'Análise de métricas de startups e ferramentas de mercado mostra que produtos duradouros exigem validação de proposta de valor, design de experiência, retenção de usuários e infraestrutura robusta. Promessas de enriquecimento rápido utilizam urgência artificial.',
    verdict: 'Hype Prematuro',
    verdictDetail: 'Criar uma demonstração simples leva minutos; construir um negócio viável exige esforço contínuo, estratégia de distribuição e solução real de dor do cliente.',
    sourcesCount: 10,
    lastVerified: '14/09/2026'
  }
];
