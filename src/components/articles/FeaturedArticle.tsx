import React from 'react';
import Link from 'next/link';
import { Article } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Clock, Calendar, ArrowRight, User } from 'lucide-react';

interface FeaturedArticleProps {
  article: Article;
}

export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  return (
    <article className="bg-white rounded-xl border border-paper-300 overflow-hidden shadow-executive hover:border-brand-red/40 transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-12 p-8 lg:p-12 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Badge category={article.category} size="md" />
              <span className="text-xs uppercase tracking-wider font-semibold text-brand-red bg-brand-red-subtle px-2.5 py-0.5 rounded">
                Análise Principal em Destaque
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark hover:text-brand-red transition-colors leading-tight">
              <Link href={`/artigos/${article.slug}`}>
                {article.title}
              </Link>
            </h2>

            <p className="font-serif text-lg text-gray-700 leading-relaxed italic border-l-2 border-brand-red pl-4">
              {article.subtitle}
            </p>

            <p className="text-gray-600 text-base leading-relaxed">
              {article.summary}
            </p>
          </div>

          <div className="pt-6 border-t border-paper-200 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-700 font-medium">
                <User className="w-4 h-4 text-brand-red" />
                <span>{article.author.name}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-gray-400" />
                <time dateTime={article.publishedAt}>
                  {new Date(article.publishedAt).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>{article.readingTimeMinutes} min de leitura</span>
              </div>
            </div>

            <Link
              href={`/artigos/${article.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-dark text-white text-xs uppercase tracking-wider font-semibold rounded hover:bg-brand-red transition-colors shadow-sm"
            >
              <span>Ler Análise Completa</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
