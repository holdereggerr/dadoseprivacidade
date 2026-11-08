import { RadarIssue } from '@/types/radar';

export const mockRadarIssue: RadarIssue = {
  issueNumber: 42,
  publishDate: '19 de Setembro de 2026',
  title: 'Edição #42: Agentes em Produção, Regulamentação e Filtro de Hype',
  editorialNote: 'Nesta semana monitoramos 84 publicações e selecionamos os 5 pontos cruciais que afetam diretamente sua rotina e decisões de tecnologia.',
  cards: [
    {
      id: 'rc-1',
      category: 'Modelos & Raciocínio',
      headline: 'Avanço na Janela de Raciocínio Profundo sem Aumento Significativo de Latência',
      takeaway: 'Modelos mais recentes estão realizando etapas internas de validação lógica antes de responder, reduzindo erros de cálculo em relatórios.',
      practicalImpact: 'Melhoria direta no resumo de contratos e planilhas financeiras complexas.',
      readingTime: '2 min',
      sourceName: 'AI Curation Lab',
      sourceUrl: 'https://arxiv.org'
    },
    {
      id: 'rc-2',
      category: 'Segurança Corporativa',
      headline: 'ANPD publica novos termos orientativos sobre IA generativa no Brasil',
      takeaway: 'Foco na transparência com os titulares de dados e exigência de relatório de impacto de proteção de dados (RIPD).',
      practicalImpact: 'Sua empresa precisa ter uma política de uso aceitável publicada para os colaboradores.',
      readingTime: '3 min',
      sourceName: 'Portal ANPD',
      sourceUrl: 'https://gov.br/anpd'
    },
    {
      id: 'rc-3',
      category: 'Ferramentas Práticas',
      headline: 'Integração direta entre planilhas e assistentes LLM ganha suporte nativo',
      takeaway: 'Menos necessidade de scripts complexos em Python para pequenas automações financeiras.',
      practicalImpact: 'Equipes de finanças podem automatizar categorização de despesas com supervisão simples.',
      readingTime: '2 min',
      sourceName: 'Tech Benchmark Digest',
      sourceUrl: 'https://techdigest.com'
    },
    {
      id: 'rc-4',
      category: 'Filtro Anti-Hype',
      headline: 'Desmistificando os "super robôs de vendas sem intervenção humana"',
      takeaway: 'Taxa de desistência em atendimentos totalmente automatizados por voz subiu 18% quando não havia transição rápida para humanos.',
      practicalImpact: 'Sempre mantenha a opção de falar com um atendente real visível na primeira interação.',
      readingTime: '2 min',
      sourceName: 'Heróis da IA Lab',
      sourceUrl: '/conteudos/agentes-autonomos-fluxos-de-trabalho-reais'
    },
    {
      id: 'rc-5',
      category: 'Carreira & Futuro',
      headline: 'A nova competência mais valorizada: Decomposição de Problemas',
      takeaway: 'Saber formular o problema e os critérios de aceite é 80% do sucesso ao trabalhar com IA.',
      practicalImpact: 'Invista no treinamento de raciocínio crítico da sua equipe antes de comprar novas licenças.',
      readingTime: '2 min',
      sourceName: 'Harvard Business Review',
      sourceUrl: 'https://hbr.org'
    }
  ]
};
