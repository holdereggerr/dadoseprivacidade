'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Lightbulb, ClipboardCheck, PlayCircle, Layers, Shield, FileText } from 'lucide-react';

export default function HeroSection() {
  const steps = [
    {
      num: '01',
      title: 'Compreender',
      desc: 'Entenda o sentido das regras (LGPD e ECA Digital) aplicadas ao contexto real do seu negócio.',
      icon: Lightbulb,
      badge: 'Bases & Conceitos',
      color: 'border-brand-navy bg-slate-50 text-brand-navy',
    },
    {
      num: '02',
      title: 'Avaliar',
      desc: 'Mapeie fluxos de dados, fornecedores, riscos operacionais e lacunas de processos.',
      icon: ClipboardCheck,
      badge: 'Mapeamento',
      color: 'border-brand-teal bg-teal-50/50 text-brand-teal',
    },
    {
      num: '03',
      title: 'Agir',
      desc: 'Adote medidas técnicas, jurídicas e administrativas proporcionais à capacidade da empresa.',
      icon: PlayCircle,
      badge: 'Execução',
      color: 'border-brand-gold bg-amber-50/50 text-amber-700',
    },
    {
      num: '04',
      title: 'Acompanhar',
      desc: 'Organize evidências, registre decisões e estabeleça rotinas de melhoria contínua.',
      icon: Layers,
      badge: 'Governança',
      color: 'border-brand-navy bg-slate-100 text-brand-navy',
    },
  ];

  const handleScrollToNewsletter = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('newsletter');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      const input = element.querySelector('input[name="email"]') as HTMLInputElement;
      if (input) setTimeout(() => input.focus(), 400);
    }
  };

  const handleScrollToThemes = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('temas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/80 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-brand-border overflow-hidden">
      
      {/* Background Subtle Mesh */}
      <div className="absolute inset-0 bg-grid-subtle opacity-75 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tag & Domain Confirmation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
            <Shield className="w-3.5 h-3.5" />
            Iniciativa Independente de Informação & Capacitação
          </span>
          <span className="text-xs font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-subtle">
            dadoseprivacidade.com.br
          </span>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.15] font-display">
            LGPD e ECA Digital: conhecimento confiável para decisões que saem do papel.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-brand-slate max-w-3xl mx-auto leading-relaxed font-normal">
            Guias, análises e experiências para ajudar pequenas e médias empresas a compreender suas responsabilidades, orientar suas equipes e transformar informação em ações concretas.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#newsletter"
              onClick={handleScrollToNewsletter}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-brand-teal hover:bg-brand-teal-dark rounded-xl shadow-md hover:shadow-teal-glow transition-all duration-200 active:scale-95 group"
            >
              <span>Receber a newsletter</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#temas"
              onClick={handleScrollToThemes}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-brand-navy bg-white hover:bg-slate-100 border border-slate-300 rounded-xl shadow-subtle transition-all duration-200"
            >
              <FileText className="w-5 h-5 text-brand-teal" />
              <span>Explorar os conteúdos</span>
            </a>
          </div>
        </div>

        {/* Original Progress Journey Visual: "Compreender → Avaliar → Agir → Acompanhar" */}
        <div className="mt-16 pt-8 border-t border-slate-200/80">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-teal-light px-3 py-1 rounded-full">
              Jornada Prática de Adequação
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mt-2 font-display">
              Como o conhecimento se transforma em evolução contínua
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl mx-auto">
              Sem alarmismo ou selos fictícios: um método estruturado e proporcional para a realidade das PMEs.
            </p>
          </div>

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div 
                  key={step.num}
                  className="bg-white rounded-xl p-5 border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between relative group"
                >
                  {/* Top Header */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-slate-400 tracking-wider">
                        ETAPA {step.num}
                      </span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {step.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2.5 rounded-lg border ${step.color} shadow-sm group-hover:scale-105 transition-transform`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-brand-navy font-display">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Indicator Arrow for Desktop */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 bg-white border border-slate-300 text-brand-teal rounded-full p-1 shadow-sm">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
