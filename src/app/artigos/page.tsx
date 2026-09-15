'use client';

import React, { useState } from 'react';
import { INITIAL_ARTICLES } from '@/data/articles';
import { FeaturedArticle } from '@/components/articles/FeaturedArticle';
import { ArticleCard } from '@/components/articles/ArticleCard';
import { Badge } from '@/components/ui/Badge';
import { Search, Filter } from 'lucide-react';

const FILTER_CATEGORIES = [
  'Todas as categorias',
  'Computação Forense',
  'IA & Shadow AI',
  'Resiliência Digital',
  'Fraude',
  'Governança',
  'LGPD & ECA Digital',
  'Board',
  'Evidência Digital',
  'Incidentes',
];

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todas as categorias');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredArticle = INITIAL_ARTICLES.find((a) => a.isFeatured) || INITIAL_ARTICLES[0];

  const filteredArticles = INITIAL_ARTICLES.filter((article) => {
    const matchesCategory =
      selectedCategory === 'Todas as categorias' ||
      article.category === selectedCategory ||
      (selectedCategory === 'IA' && article.category === 'IA & Shadow AI') ||
      (selectedCategory === 'Shadow AI' && article.category === 'IA & Shadow AI') ||
      (selectedCategory === 'Fraudes' && article.category === 'Fraude');

    const matchesSearch =
      searchQuery === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const mustReadArticles = INITIAL_ARTICLES.filter((a) => a.isMustRead);

  return (
    <div className="py-12 md:py-20 bg-paper-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="border-b border-paper-300 pb-8 space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-brand-red">
            Publicação Especializada & Análises Executivas
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark">
            Artigos e Análises Estratégicas
          </h1>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl leading-relaxed">
            Perspectivas independentes sobre computação forense, governança de IA, riscos regulatórios e resiliência operacional voltadas a conselheiros e diretores.
          </p>
        </div>

        {/* Featured Main Article */}
        {selectedCategory === 'Todas as categorias' && !searchQuery && (
          <section className="space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-semibold text-gray-500">
              Artigo Principal em Destaque
            </h2>
            <FeaturedArticle article={featuredArticle} />
          </section>
        )}

        {/* Search & Category Filters */}
        <section className="bg-white p-6 rounded-lg border border-paper-300 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-brand-red" />
              <h3 className="font-bold text-sm text-brand-dark uppercase tracking-wider">
                Filtrar Análises por Tema
              </h3>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por palavra-chave ou tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-paper-50 border border-gray-300 rounded text-xs text-brand-dark focus:outline-none focus:border-brand-red"
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-paper-200">
            {FILTER_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-colors ${
                    active
                      ? 'bg-brand-dark text-white shadow-sm'
                      : 'bg-paper-100 text-gray-700 hover:bg-paper-200 hover:text-brand-red'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </section>

        {/* Main Grid: Articles + Must Read Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Articles Grid (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <h2 className="font-serif text-2xl font-bold text-brand-dark">
              Últimas Análises {selectedCategory !== 'Todas as categorias' && `— ${selectedCategory}`}
            </h2>

            {filteredArticles.length === 0 ? (
              <div className="p-12 bg-white rounded border border-paper-300 text-center space-y-3">
                <p className="text-gray-600">Nenhum artigo encontrado para a busca selecionada.</p>
                <button
                  onClick={() => { setSelectedCategory('Todas as categorias'); setSearchQuery(''); }}
                  className="text-xs font-semibold text-brand-red underline"
                >
                  Limpar filtros
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            )}
          </div>

          {/* Hand-picked / Must Read Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-white p-6 rounded-lg border border-paper-300 shadow-sm space-y-6 sticky top-28">
              <div className="border-b border-paper-300 pb-4">
                <span className="text-xs uppercase tracking-widest font-semibold text-brand-red">
                  Curadoria do Conselho
                </span>
                <h3 className="font-serif text-xl font-bold text-brand-dark mt-1">
                  Mais Relevantes para Boards
                </h3>
              </div>

              <div className="space-y-6">
                {mustReadArticles.slice(0, 4).map((art) => (
                  <div key={art.id} className="space-y-2 group border-b border-paper-100 pb-4 last:border-0 last:pb-0">
                    <Badge category={art.category} />
                    <h4 className="font-serif text-base font-bold text-brand-dark group-hover:text-brand-red transition-colors leading-snug">
                      <a href={`/artigos/${art.slug}`}>{art.title}</a>
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-2">{art.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>

        </div>

      </div>
    </div>
  );
}
