export type ContentLevel = 'Iniciante' | 'Intermediário' | 'Avançado' | 'Todos os Níveis';

export type ContentCategory = 
  | 'Trabalhar Melhor' 
  | 'Liderar' 
  | 'Criar' 
  | 'Aprender' 
  | 'Adotar com Segurança';

export type ContentFormat = 'Artigo' | 'Vídeo' | 'Guia' | 'Estudo de Caso';

export type VerificationStatus = 'Verificado' | 'Em Análise' | 'Alerta de Hype';

export interface SourceLink {
  title: string;
  url: string;
  publisher: string;
  trustScore?: number; // 1-10
}

export interface EditorialAuthor {
  name: string;
  role: string;
  avatar: string;
  bio?: string;
}

export interface AIDisclosure {
  researchAssisted: boolean;
  draftAssisted: boolean;
  humanReviewer: string;
  humanEditor: string;
  policyNotes: string;
}

export interface ContentItem {
  id: string;
  title: string;
  slug: string;
  summary: string;
  body: string;
  videoUrl?: string;
  imageUrl: string;
  category: ContentCategory;
  format: ContentFormat;
  level: ContentLevel;
  readingTime: string;
  publishedAt: string;
  updatedAt: string;
  isFeatured?: boolean;
  author: EditorialAuthor;
  editor: EditorialAuthor;
  reviewer: EditorialAuthor;
  summaryPoints: [string, string, string];
  whyItMatters: string;
  consensusAndDivergence: {
    consensus: string;
    divergence: string;
  };
  originalAnalysis: string;
  practicalApplication: string;
  limitationsAndRisks: string[];
  sources: SourceLink[];
  verificationStatus: VerificationStatus;
  aiDisclosure: AIDisclosure;
  tags: string[];
  relatedSlugs?: string[];
}
