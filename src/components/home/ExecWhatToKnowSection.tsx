import React from 'react';
import Link from 'next/link';
import { INITIAL_ARTICLES } from '@/data/articles';
import { ArticleCard } from '@/components/articles/ArticleCard';
import { ArrowRight } from 'lucide-react';

export const ExecWhatToKnowSection: React.FC = () => {
  // Display latest articles
  const articles = INITIAL_ARTICLES.slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-white border-b border-paper-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-paper-300 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-brand-red">
              Destaques Editoriais
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mt-1">
              O que executivos precisam saber
            </h2>
          </div>
          <Link
            href="/artigos"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-red hover:text-brand-red-dark transition-colors"
          >
            <span>Ver todos os artigos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

      </div>
    </section>
  );
};
