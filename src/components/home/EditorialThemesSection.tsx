'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Baby, 
  ShieldCheck, 
  Users, 
  UserCheck, 
  FileSpreadsheet, 
  GraduationCap, 
  Clock, 
  BookOpen, 
  ArrowRight,
  Check
} from 'lucide-react';
import { mockArticles } from '@/data/articles';

interface Category {
  id: string;
  name: string;
  desc: string;
  icon: React.ElementType;
}

export default function EditorialThemesSection() {
  const [activeTab, setActiveTab] = useState<string>('todos');

  const categories: Category[] = [
    {
      id: 'lgpd-operacao',
      name: 'LGPD na operação da empresa',
      desc: 'Aplicação prática das regras aos processos diários de negócios, vendas e atendimento ao cliente.',
      icon: Building2,
    },
    {
      id: 'eca-digital',
      name: 'ECA Digital e serviços digitais',
      desc: 'Diretrizes de proteção, privacidade por padrão e controle etário para públicos jovens (Lei nº 15.211/2025).',
      icon: Baby,
    },
    {
      id: 'seguranca-info',
      name: 'Segurança da informação',
      desc: 'Medidas técnicas e administrativas proporcionais à realidade e recursos de pequenas e médias empresas.',
      icon: ShieldCheck,
    },
    {
      id: 'gestao-fornecedores',
      name: 'Gestão de fornecedores e dados',
      desc: 'Avaliação de contratos, operadores de dados, ferramentas SaaS e transferência de informações entre parceiros.',
      icon: Users,
    },
    {
      id: 'direitos-titulares',
      name: 'Direitos dos titulares e atendimento',
      desc: 'Processos claros para receber, autenticar e responder solicitações de titulares com agilidade.',
      icon: UserCheck,
    },
    {
      id: 'incidentes-doc',
      name: 'Incidentes, decisões e documentação',
      desc: 'Registro formal de escolhas, relatórios de impacto (RIPD) e planos de resposta a vazamentos.',
      icon: FileSpreadsheet,
    },
    {
      id: 'capacitacao-equipes',
      name: 'Capacitação de equipes',
      desc: 'Treinamentos, conscientização contínua e fomento à cultura de privacidade no ambiente corporativo.',
      icon: GraduationCap,
    },
  ];

  const filteredArticles = activeTab === 'todos' 
    ? mockArticles 
    : mockArticles.filter(a => a.categoryId === activeTab);

  return (
    <section id="temas" className="py-16 sm:py-24 bg-slate-50 border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-teal-light px-3 py-1 rounded-full">
            Eixos de Conteúdo
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy font-display">
            Temas Editoriais do Portal
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Categorias estruturadas para facilitar a busca por conhecimento técnico aplicado às áreas da sua empresa.
          </p>
        </div>

        {/* 7 Categories Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(activeTab === cat.id ? 'todos' : cat.id)}
                className={`text-left p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-brand-navy text-white border-brand-navy shadow-md' 
                    : 'bg-white text-slate-800 border-slate-200 hover:border-brand-teal hover:shadow-subtle'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-brand-teal text-white' : 'bg-slate-100 text-brand-teal'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-brand-gold" />}
                  </div>
                  <h3 className={`text-sm font-bold mb-1 font-display ${isSelected ? 'text-white' : 'text-brand-navy'}`}>
                    {cat.name}
                  </h3>
                  <p className={`text-xs leading-relaxed ${isSelected ? 'text-slate-200' : 'text-slate-600'}`}>
                    {cat.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Filter Bar & Articles Header */}
        <div id="artigos" className="pt-6 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold text-brand-navy font-display flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-brand-teal" />
                <span>Conteúdos Iniciais em Destaque</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {activeTab === 'todos' 
                  ? 'Três matérias fundamentais preparadas para a estreia do portal' 
                  : `Filtrado por: ${categories.find(c => c.id === activeTab)?.name}`}
              </p>
            </div>

            {activeTab !== 'todos' && (
              <button
                onClick={() => setActiveTab('todos')}
                className="text-xs font-semibold text-brand-teal hover:underline flex items-center gap-1"
              >
                Limpar filtro
              </button>
            )}
          </div>

          {/* Article Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredArticles.map((art) => (
              <article
                key={art.id}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Category & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold text-brand-teal bg-brand-teal-light px-2.5 py-0.5 rounded-full">
                      {art.category}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {art.badgeText}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-base font-bold text-brand-navy mb-2 leading-snug group-hover:text-brand-teal transition-colors font-display">
                    <Link href={`/conteudos/${art.slug}`}>
                      {art.title}
                    </Link>
                  </h4>

                  {/* Summary */}
                  <p className="text-xs text-slate-600 mb-4 leading-relaxed line-clamp-3">
                    {art.summary}
                  </p>
                </div>

                {/* Article Footer */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {art.readingTime}
                    </span>
                    <span>{art.updatedAt}</span>
                  </div>

                  <div className="text-[11px] font-medium text-slate-600 bg-slate-50 p-2 rounded border border-slate-200/60 truncate" title={art.primarySource}>
                    <span className="text-brand-navy font-semibold">Fonte:</span> {art.primarySource}
                  </div>

                  <Link
                    href={`/conteudos/${art.slug}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-brand-navy group-hover:bg-brand-teal text-white font-bold text-xs rounded-lg transition-colors"
                  >
                    <span>Ler este guia</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
