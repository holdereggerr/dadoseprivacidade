import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Termos de Uso | Dados & Privacidade',
  description: 'Termos e Condições de Uso do portal dadoseprivacidade.com.br.',
};

export default function TermsOfUsePage() {
  return (
    <div className="py-12 md:py-20 bg-brand-bg min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-semibold text-brand-teal hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para a página inicial
        </Link>

        <div className="border-b border-brand-border pb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-teal-light text-brand-teal mb-3">
            <FileText className="w-3.5 h-3.5" />
            Condições Gerais
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-brand-navy font-display">
            Termos de Uso
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Última atualização: Setembro de 2026 | Domínio: dadoseprivacidade.com.br
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-card space-y-6 text-sm text-slate-700 leading-relaxed">
          <h2 className="text-lg font-bold text-brand-navy font-display">1. Natureza do Conteúdo</h2>
          <p>
            O portal <strong className="text-brand-navy">Dados & Privacidade</strong> disponibiliza artigos, panoramas e orientações com finalidade estritamente informativa, educativa e de capacitação geral sobre a LGPD (Lei nº 13.709/2018) e o ECA Digital (Lei nº 15.211/2025).
          </p>

          <h2 className="text-lg font-bold text-brand-navy font-display">2. Limites da Responsabilidade</h2>
          <p>
            As publicações não constituem parecer jurídico formal, consultoria técnica personalizada ou garantia de conformidade legal. Cada empresa deve avaliar suas particularidades operacionais e consultar profissionais qualificados para situações específicas.
          </p>

          <h2 className="text-lg font-bold text-brand-navy font-display">3. Direitos Autorais e Propriedade Intelectual</h2>
          <p>
            Os textos e materiais produzidos pelo Dados & Privacidade são protegidos por direitos autorais. É permitida a citação e o compartilhamento de trechos para fins educativos, desde que com os devidos créditos e link para a publicação original.
          </p>

          <h2 className="text-lg font-bold text-brand-navy font-display">4. Modificações nos Termos</h2>
          <p>
            Reservamo-nos o direito de atualizar estes termos periodicamente para refletir alterações legislativas ou melhorias no portal.
          </p>
        </div>

      </div>
    </div>
  );
}
