import React from 'react';
import { Metadata } from 'next';
import { INITIAL_ARTICLES } from '@/data/articles';
import { ArticleCard } from '@/components/articles/ArticleCard';
import { NewsletterForm } from '@/components/briefing/NewsletterForm';

export const metadata: Metadata = {
  title: 'Shadow AI & Riscos Ocultos de Automação | perito.tec.br',
  description: 'Análises sobre Shadow AI, automações não autorizadas, agentes autônomos e proliferação de scripts à margem da TI corporativa.',
};

export default function ShadowAIPage() {
  const categoryArticles = INITIAL_ARTICLES.filter(
    (a) => a.category === 'IA & Shadow AI' || a.tags.includes('Shadow AI') || a.tags.includes('Shadow IT')
  );

  return (
    <div className="py-12 md:py-20 bg-paper-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="border-b border-paper-300 pb-8 space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-brand-red">
            Cluster Editorial & Risco Operacional
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark">
            Shadow AI & Automações Paralelas
          </h1>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl leading-relaxed">
            Identificação e mitigação dos riscos criados quando colaboradores e departamentos utilizam agentes e robôs sintéticos fora do controle da infraestrutura oficial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="pt-8">
          <NewsletterForm
            title="Receba alertas e briefings sobre Shadow AI"
            subtitle="Diretrizes para o CIO, CISO e time de conformidade."
          />
        </div>
      </div>
    </div>
  );
}
