import { CaseStudy } from '@/types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'caso-1',
    slug: 'vazamento-de-credenciais-e-exfiltracao-em-ambiente-cloud-financeiro',
    title: 'Estudo de Caso: Vazamento de credenciais administrativas e sequestro de nuvem em instituição financeira',
    subtitle: 'Como a ausência de monitoramento de chaves API e a falta de registros centralizados paralisaram operações e dificultaram a apuração legal.',
    industry: 'Serviços Financeiros & Fintech',
    category: 'Computação Forense',
    summary: 'Análise detalhada de um incidente de exfiltração de dados ocorrido após a exposição involuntária de uma chave de acesso AWS em um repositório interno sem restrição de acessos.',
    publishedAt: '2026-08-14',
    content: {
      oQueAconteceu: 'Um desenvolvedor sênior subiu acidentalmente credenciais de produção com privilégios administrativos para um ambiente interno sem autenticação multifator ativada. Atacantes identificaram a chave exposta em menos de 45 minutos, efetuando o download de bancos de dados estruturados e criando máquinas virtuais para mineração ilícita de criptomoedas.',
      ondeEstavaAFragilidade: 'Políticas permissivas de acesso IAM (Identity and Access Management), ausência de ferramentas automatizadas de varredura de segredos (Secret Scanning) e falta de segregação entre os ambientes de teste e produção.',
      oQueAEmpresaPoderiaTerPreparado: 'Implementação de Prontidão Forense com exportação contínua de logs do AWS CloudTrail para um repositório imutável fora do mesmo tenant (WORM Storage), políticas de privilégio mínimo e autenticação MFA obrigatória em todas as chaves operacionais.',
      queEvidenciasForamRelevantes: [
        'Logs de chamadas de API no AWS CloudTrail registradas por IPs externos não catalogados.',
        'Metadados de conexões HTTPS e horários de criação de novas rotas de tráfego de rede.',
        'Imagens forenses de instâncias EC2 voláteis contendo resquícios dos scripts maliciosos injetados.'
      ],
      liçãoParaOrganizacoes: 'A infraestrutura em nuvem exige auditoria forense prévia e rastreabilidade contínua. Em incidentes na nuvem, sem logs imutáveis e centralizados, provar o exato volume de dados exfiltrados perante os reguladores torna-se impossível.'
    }
  },
  {
    id: 'caso-2',
    slug: 'shadow-ai-e-vazamento-de-segredo-industrial-em-industria-farmaceutica',
    title: 'Estudo de Caso: Exposição de fórmula de patente via utilização de ferramenta pública de IA',
    subtitle: 'Quando a busca por produtividade individual supera a governança corporativa e expõe propriedade intelectual valiosa.',
    industry: 'Indústria Química & Farmacêutica',
    category: 'IA & Shadow AI',
    summary: 'Exame de um caso real de vazamento de segredo comercial decorrente da submissão de documentos confidenciais de P&D em assistentes conversacionais públicos.',
    publishedAt: '2026-08-01',
    content: {
      oQueAconteceu: 'Cientistas de desenvolvimento de produtos utilizaram uma versão gratuita de um modelo de linguagem baseado na nuvem para resumir laudos técnicos de ensaios clínicos e traduzir documentos de patentes antes do registro oficial. Meses depois, trechos da documentação confidencial apareceram como respostas de modelo em consultas de concorrentes.',
      ondeEstavaAFragilidade: 'Falta de política explícita de uso aceitável de IA, ausência de bloqueios em proxies corporativos para serviços não homologados de inteligência artificial e desconhecimento dos colaboradores sobre os termos de retenção de dados dos fornecedores de IA.',
      oQueAEmpresaPoderiaTerPreparado: 'Treinamento executivo e operacional em governança de IA, fornecimento de ambiente de IA Corporativa isolado (Enterprise Tenant) com garantia contratual de não retenção de dados e DLP (Data Loss Prevention) configurado para padrões de texto confidencial.',
      queEvidenciasForamRelevantes: [
        'Histórico de navegação e cache local extraídos dos equipamentos dos pesquisadores envolvidos.',
        'Registros do servidor DNS e proxy corporativo demonstrando upload de volumes atípicos de texto para domínios de IA terceirizados.',
        'Análise pericial dos arquivos submetidos e correspondência temporal com as requisições HTTP.'
      ],
      liçãoParaOrganizacoes: 'A inteligência artificial não pode ser tratada como simples utilitário de produtividade. Sem governança e sem ferramentas seguras, a automação individual compromete anos de investimento em pesquisa e ativos intangíveis da companhia.'
    }
  },
  {
    id: 'caso-3',
    slug: 'fraude-interna-com-exfiltracao-de-dados-apos-anuncio-de-demissao',
    title: 'Estudo de Caso: Fraude corporativa e transferência não autorizada de dados de clientes em desativação executiva',
    subtitle: 'A importância da imediata preservação de evidências digitais e revogação sincronizada de permissões no offboarding.',
    industry: 'Logística & Comércio Exterior',
    category: 'Fraude',
    summary: 'Investigação forense que comprovou a exfiltração continuada de informações estratégicas de preços e contratos por diretor comercial nas 3 semanas anteriores ao pedido de demissão.',
    publishedAt: '2026-07-20',
    content: {
      oQueAconteceu: 'Após aceitar uma proposta da principal concorrente, um diretor comercial passou a sincronizar arquivos confidenciais do servidor corporativo com uma conta pessoal de armazenamento em nuvem e a enviar relatórios estratégicos por e-mail pessoal.',
      ondeEstavaAFragilidade: 'Processo de desativação frouxo, compartilhamento irrestrito de pastas no Google Drive/SharePoint corporativo sem DLP ativo e falta de correlação entre alertas de download massivo e eventos de recursos humanos.',
      oQueAEmpresaPoderiaTerPreparado: 'Integração de alertas entre a área de RH e o time de resposta a incidentes/segurança, preservação imediata dos dispositivos do executivo assim que comunicado o desligamento e restrição rígida de exportação em lote de dados de CRM.',
      queEvidenciasForamRelevantes: [
        'Artefatos do registro do Windows e atalhos (LNK files e Shellbags) demonstrando a conexão de mídias USB externas.',
        'Logs de auditoria de plataformas SaaS indicando o compartilhamento de arquivos com domínios de e-mail externos pessoais.',
        'Análise forense do disco rígido do laptop corporativo revelando a exclusão de arquivos e tentativa de limpeza de rastros via scripts.'
      ],
      liçãoParaOrganizacoes: 'A preservação forense no desligamento de posições estratégicas é a única garantia de proteção da propriedade intelectual. Sem laudo pericial consistente, ações judiciais por concorrência desleal perdem sua força probatória.'
    }
  }
];
