'use client';

import React from 'react';
import { Compass, AlertTriangle, BookOpen, SlidersHorizontal, FileCheck, Info } from 'lucide-react';

export default function HowItHelpsSection() {
  const steps = [
    {
      num: '1',
      title: 'Entenda o cenário.',
      description: 'Traduzimos a legislação (LGPD e ECA Digital) em conceitos claros, eliminando ambiguidades e jargões excessivos.',
      icon: Compass,
    },
    {
      num: '2',
      title: 'Identifique questões e riscos.',
      description: 'Ajudamos a formular as perguntas certas para reconhecer onde estão os dados pessoais e quais processos exigem atenção.',
      icon: AlertTriangle,
    },
    {
      num: '3',
      title: 'Consulte as fontes.',
      description: 'Indicamos sempre as referências legais originais e guias oficiais da ANPD para que sua equipe possa conferir a base de cada orientação.',
      icon: BookOpen,
    },
    {
      num: '4',
      title: 'Planeje ações proporcionais.',
      description: 'Orientamos a escolha de soluções realistas e adequadas ao porte e orçamento de pequenas e médias empresas.',
      icon: SlidersHorizontal,
    },
    {
      num: '5',
      title: 'Registre decisões e acompanhe resultados.',
      description: 'Mostramos como estruturar a documentação necessária para comprovar a boa-fé e demonstrar evolução perante clientes e autoridades.',
      icon: FileCheck,
    },
  ];

  return (
    <section id="como-ajuda" className="py-16 sm:py-20 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-teal-light px-3 py-1 rounded-full">
            Metodologia Editorial
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy font-display">
            Como o Dados & Privacidade ajuda sua empresa
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Nossos guias vão além de meras definições de dicionário. Eles fornecem um caminho estruturado para você conduzir conversas e decisões internas.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 mb-12">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.num}
                className="bg-brand-bg rounded-xl p-5 border border-slate-200 shadow-card flex flex-col justify-between relative hover:border-brand-teal/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-sm font-bold flex items-center justify-center font-display">
                      {step.num}
                    </span>
                    <Icon className="w-5 h-5 text-brand-teal" />
                  </div>

                  <h3 className="text-base font-bold text-brand-navy mb-2 leading-snug font-display">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer Callout Box */}
        <div className="max-w-4xl mx-auto p-5 sm:p-6 bg-slate-100 rounded-xl border border-slate-300 flex items-start gap-4 text-xs sm:text-sm text-slate-700">
          <Info className="w-5 h-5 text-brand-navy flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-brand-navy uppercase tracking-wider text-[11px] block">
              Aviso de Transparência & Limite Editorial
            </span>
            <p className="leading-relaxed">
              O conteúdo disponibilizado no portal possui caráter estritamente educativo, informativo e de capacitação geral. Uma sequência genérica de orientações não substitui a avaliação técnica, jurídica ou consultiva específica para o contexto e operações particulares da sua empresa.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
