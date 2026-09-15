export type ArticleCategory =
  | 'Computação Forense'
  | 'IA & Shadow AI'
  | 'Resiliência Digital'
  | 'Fraude'
  | 'Governança'
  | 'LGPD & ECA Digital'
  | 'Board'
  | 'Evidência Digital'
  | 'Incidentes';

export interface Author {
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
}

export interface ArticleSection {
  title: string;
  content: string | string[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ArticleCategory;
  tags: string[];
  summary: string;
  content: {
    oQueAconteceu: string;
    oQueIssoSignifica: string;
    porQueIssoImporta: string;
    qualEORisco: string;
    oQueDeveriaTerSidoPreparado: string;
    oQueFazerAgora: string;
    perguntasParaExecutivos: string[];
    fontesEReferencias: { title: string; url?: string }[];
  };
  author: Author;
  publishedAt: string;
  updatedAt: string;
  readingTimeMinutes: number;
  imageUrl?: string;
  imageAlt?: string;
  isFeatured?: boolean;
  isMustRead?: boolean;
  briefing: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  industry: string;
  summary: string;
  content: {
    oQueAconteceu: string;
    ondeEstavaAFragilidade: string;
    oQueAEmpresaPoderiaTerPreparado: string;
    queEvidenciasForamRelevantes: string[];
    liçãoParaOrganizacoes: string;
  };
  publishedAt: string;
  category: ArticleCategory;
}

export interface NewsletterFormData {
  nome: string;
  sobrenome: string;
  email: string;
  empresa: string;
  cargo: string;
  areasInteresse: ArticleCategory[];
  consentimento: boolean;
}
