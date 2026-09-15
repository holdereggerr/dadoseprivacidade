import React from 'react';
import Link from 'next/link';
import { Article } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Clock, Calendar, ArrowUpRight } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  compact?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, compact = false }) => {
  return (
    <article className="group bg-white rounded-lg border border-paper-300 overflow-hidden hover:border-brand-red/40 transition-all duration-300 hover:shadow-executive flex flex-col justify-between h-full">
      <div className="p-6 space-y-4">
        {/* Category & Reading Time Header */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <Badge category={article.category} />
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-gray-400" />
            <span>{article.readingTimeMinutes} min de leitura</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl font-bold text-brand-dark group-hover:text-brand-red transition-colors leading-snug">
          <Link href={`/artigos/${article.slug}`}>
            {article.title}
          </Link>
        </h3>

        {/* Brief / Summary */}
        {!compact && (
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {article.summary}
          </p>
        )}
      </div>

      {/* Footer Meta & Read Link */}
      <div className="px-6 py-4 bg-paper-50/50 border-t border-paper-200 flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-gray-400" />
          <time dateTime={article.publishedAt}>
            {new Date(article.publishedAt).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}
          </time>
        </div>

        <Link
          href={`/artigos/${article.slug}`}
          className="inline-flex items-center gap-1 font-semibold text-brand-dark group-hover:text-brand-red transition-colors"
        >
          <span>Ler análise</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
};
