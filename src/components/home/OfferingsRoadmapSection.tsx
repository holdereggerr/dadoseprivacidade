'use client';

import React from 'react';
import { BookOpen, FileCheck2, GraduationCap, CheckCircle2, Clock, Shield } from 'lucide-react';

export default function OfferingsRoadmapSection() {
  const offerings = [
    {
      id: 'gratuitos',
      title: 'Conteúdos e Guias Gratuitos',
      status: 'Disponível',
      statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      isAvailable: true,
      description: 'Artigos, análises de jurisprudência orientativa da ANPD e panoramas práticos sobre LGPD e ECA Digital abertos a todos os leitores.',
      features: [
        'Artigos com indicação de fontes legais primárias',
        'Guias de orientação por área da empresa',
        'Boletim quinzenal Dados em Ação',
      ],
      icon: BookOpen,
    },
    {
      id: 'aprofundados',
      title: 'Materiais Aprofundados',
      status: 'Em preparação',
      statusColor: 'bg-amber-100 text-amber-800 border-amber-300',
      isAvailable: false,
      description: 'Estruturas editáveis, modelos de inventário de dados, roteiros de Relatório de Impacto (RIPD) e listas de verificação para PMEs.',
      features: [
        'Modelos de documentos e cláusulas contratuais',
        'Matrizes de avaliação de fornecedores de software',
        'Roteiros de resposta rápida a incidentes',
      ],
      icon: FileCheck2,
    },
    {
      id: 'capacitacoes',
      title: 'Cursos e Capacitações',
      status: 'Em preparação',
      statusColor: 'bg-amber-100 text-amber-800 border-amber-300',
      isAvailable: false,
      description: 'Módulos de treinamento objetivo para gestores e equipes operacionais de PMEs aplicarem conceitos no dia a dia do trabalho.',
      features: [
        'Trilhas de conscientização para RH, Vendas e TI',
        'Orientações práticas para adaptação ao ECA Digital',
        'Estudos de caso reais de pequenas e médias empresas',
      ],
      icon: GraduationCap,
    },
  ];

  return (
    <section id="guias" className="py-16 sm:py-24 bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-teal-light px-3 py-1 rounded-full">
            Evolução do Portal
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy font-display">
            Materiais e Capacitação
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Conheça as etapas planejadas para a disponibilização de ferramentas e treinamentos para pequenas e médias empresas.
          </p>
        </div>

        {/* 3 Offerings Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`bg-brand-bg rounded-2xl p-6 sm:p-8 border flex flex-col justify-between transition-all duration-300 ${
                  item.isAvailable 
                    ? 'border-brand-teal/40 shadow-card hover:shadow-card-hover' 
                    : 'border-slate-200 shadow-subtle opacity-95'
                }`}
              >
                <div>
                  {/* Status Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${item.statusColor}`}>
                      {item.status}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-brand-navy">
                      <Icon className="w-5 h-5 text-brand-teal" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-brand-navy mb-3 font-display">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2.5 mb-6 text-xs text-slate-700">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        {item.isAvailable ? (
                          <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                        ) : (
                          <Clock className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        )}
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-200">
                  {item.isAvailable ? (
                    <a
                      href="#temas"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-brand-navy text-white text-xs font-bold rounded-lg hover:bg-brand-teal transition-colors"
                    >
                      Acessar conteúdos gratuitos
                    </a>
                  ) : (
                    <span className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-slate-200/80 text-slate-600 text-xs font-semibold rounded-lg">
                      <Clock className="w-3.5 h-3.5" />
                      Material em elaboração técnica
                    </span>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
