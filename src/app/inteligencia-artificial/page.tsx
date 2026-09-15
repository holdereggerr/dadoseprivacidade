import React from 'react';
import { Metadata } from 'next';
import { INITIAL_ARTICLES } from '@/data/articles';
import { ArticleCard } from '@/components/articles/ArticleCard';
import { NewsletterForm } from '@/components/briefing/NewsletterForm';

export const metadata: Metadata = {
  title: 'Inteligência Artificial Corporativa & Governança | perito.tec.br',
  description: 'Governança de IA, mitigação de riscos de vazamento de dados, uso de modelos sintéticos e automações na perspectiva do C-Level.',
};

export default function AIPage() {
  const categoryArticles = INITIAL_ARTICLES.filter(
    (a) => a.category === 'IA & Shadow AI' || a.tags.includes('Inteligência Artificial')
  );

  return (
    <div className="py-12 md:py-20 bg-paper-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="border-b border-paper-300 pb-8 space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-brand-red">
            Cluster Editorial & Tecnologia
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark">
            Inteligência Artificial Corporativa
          </h1>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl leading-relaxed">
            Como implementar IA com governança efetiva, protegendo segredos industriais, propriedade intelectual e garantindo a privacidade dos dados corporativos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="pt-8">
          <NewsletterForm
            title="Receba briefings sobre Governança de IA"
            subtitle="Mantenha o Board informado sobre os riscos contratuais e reputacionais da inteligência artificial."
          />
        </div>
      </div>
    </div>
  );
}
