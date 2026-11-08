export type VerdictType = 'Mito Superestimado' | 'Fato Comprovado' | 'Aplicação Parcial' | 'Hype Prematuro';

export interface AntiHypeClaim {
  id: string;
  claim: string;
  category: string;
  evidence: string;
  verdict: VerdictType;
  verdictDetail: string;
  sourcesCount: number;
  lastVerified: string;
}
