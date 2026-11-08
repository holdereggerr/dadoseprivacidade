'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { mockArticles } from '@/data/articles';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { Clock, ShieldCheck, ArrowRight, BookOpen, Search, Filter } from 'lucide-react';

export default function ConteudosPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = useMemo(() => {
    return mockArticles.filter((article) => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = article.title.toLowerCase().includes(q);
        const matchesSummary = article.summary.toLowerCase().includes(q);
        const matchesCategory = article.category.toLowerCase().includes(q);
        if (!matchesTitle && !matchesSummary && !matchesCategory) return false;
      }
      return true;
    });
  }, [searchQuery]);

  return (
    <div className="py-8 sm:py-14 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <Breadcrumbs items={[{ label: 'Central de Conteúdos' }]} />

        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal font-display bg-brand-teal-light px-3 py-1 rounded-full">
            Acervo Editorial & Guias
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-navy">
            Guias, Análises e Artigos Práticos
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Conhecimento técnico com linguagem acessível sobre LGPD e ECA Digital para apoiar gestores e equipes de pequenas e médias empresas.
          </p>
        </div>

        {/* Simple Search Input */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-subtle flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Buscar conteúdos sobre LGPD, ECA Digital, inventário, fornecedores..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-brand-teal font-semibold hover:underline"
            >
              Limpar
            </button>
          )}
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="p-12 bg-white border border-slate-200 rounded-2xl text-center space-y-3">
            <h3 className="text-lg font-bold font-display text-brand-navy">Nenhum conteúdo encontrado</h3>
            <p className="text-xs text-slate-500">Tente buscar por termos como LGPD, ECA Digital ou registros.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-2 px-4 py-2 bg-brand-teal text-white font-semibold text-xs rounded-lg"
            >
              Exibir todos os guias
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold text-brand-teal bg-brand-teal-light px-2.5 py-0.5 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {article.badgeText}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold font-display text-brand-navy group-hover:text-brand-teal transition-colors leading-snug mb-2">
                    <Link href={`/conteudos/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {article.readingTime}
                    </span>
                    <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      {article.verificationStatus}
                    </span>
                  </div>

                  <Link
                    href={`/conteudos/${article.slug}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-4 bg-brand-navy group-hover:bg-brand-teal text-white font-bold text-xs rounded-lg transition-colors"
                  >
                    <span>Ler este guia</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
