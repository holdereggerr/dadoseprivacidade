import React from 'react';
import { Metadata } from 'next';
import { INITIAL_ARTICLES } from '@/data/articles';
import { ArticleCard } from '@/components/articles/ArticleCard';
import { NewsletterForm } from '@/components/briefing/NewsletterForm';

export const metadata: Metadata = {
  title: 'Computação Forense Corporativa & Prontidão | perito.tec.br',
  description: 'Análises avançadas sobre computação forense corporativa, perícia digital, forensic readiness, evidências digitais e cadeia de custódia para empresas.',
};

export default function ForensicsPage() {
  const categoryArticles = INITIAL_ARTICLES.filter(
    (a) =>
      a.category === 'Computação Forense' ||
      a.category === 'Evidência Digital' ||
      a.tags.includes('Perícia Digital') ||
      a.tags.includes('Forensic Readiness')
  );

  return (
    <div className="py-12 md:py-20 bg-paper-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="border-b border-paper-300 pb-8 space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-brand-red">
            Cluster Editorial & Inteligência
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark">
            Computação Forense Corporativa
          </h1>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl leading-relaxed">
            Investigação digital, preservação forense, cadeia de custódia e prontidão (Forensic Readiness) explicadas sob a ótica da governança corporativa e proteção de ativos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="pt-8">
          <NewsletterForm
            title="Receba briefings sobre Computação Forense"
            subtitle="Atualizações estratégicas para conselheiros, diretores jurídicos e de compliance."
          />
        </div>
      </div>
    </div>
  );
}
