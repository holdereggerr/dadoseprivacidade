export type ToolPricing = 'Gratuito' | 'Freemium' | 'Pago' | 'Open Source';

export interface AITool {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  category: string;
  pricing: ToolPricing;
  rating: number; // e.g. 4.8
  officialUrl: string;
  logoUrl?: string;
  practicalUseCases: string[];
  securityRating: 'Alta' | 'Média' | 'Requer Cuidados';
  pros: string[];
  cons: string[];
  targetAudience: string;
}
