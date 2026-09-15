import React from 'react';
import { Metadata } from 'next';
import { INITIAL_ARTICLES } from '@/data/articles';
import { ArticleCard } from '@/components/articles/ArticleCard';
import { NewsletterForm } from '@/components/briefing/NewsletterForm';

export const metadata: Metadata = {
  title: 'Resiliência Digital & Resposta a Incidentes | perito.tec.br',
  description: 'Estratégias de resiliência digital, gestão de crises cibernéticas, continuidade de negócios e resposta a incidentes para diretoria e conselhos.',
};

export default function DigitalResiliencePage() {
  const categoryArticles = INITIAL_ARTICLES.filter(
    (a) =>
      a.category === 'Resiliência Digital' ||
      a.category === 'Incidentes' ||
      a.tags.includes('Disaster Recovery') ||
      a.tags.includes('Continuidade de Negócios')
  );

  return (
    <div className="py-12 md:py-20 bg-paper-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="border-b border-paper-300 pb-8 space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-brand-red">
            Cluster Editorial & Governança
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark">
            Resiliência Digital Corporativa
          </h1>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl leading-relaxed">
            Recuperar as operações com rapidez sem comprometer as provas necessárias para a investigação e para a defesa jurídica da companhia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="pt-8">
          <NewsletterForm
            title="Receba briefings sobre Resiliência Digital"
            subtitle="Estrutura de resposta a crises e continuidade para executivos."
          />
        </div>
      </div>
    </div>
  );
}
