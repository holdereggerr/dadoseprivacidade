'use client';

import React, { useState } from 'react';
import { Briefcase, Code, Baby, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

interface EntryPointCardProps {
  id: string;
  icon: React.ElementType;
  title: string;
  question: string;
  bullets: string[];
  anchor: string;
  badge: string;
  colorScheme: 'navy' | 'teal' | 'gold';
}

export default function EntryPointsSection() {
  const cards: EntryPointCardProps[] = [
    {
      id: 'gestor',
      icon: Briefcase,
      title: 'Sou proprietário ou gestor',
      question: 'O que preciso compreender para orientar decisões e prioridades?',
      bullets: [
        'Visão estratégica de riscos e responsabilidades legais',
        'Priorização de investimento em privacidade sem paralisar a empresa',
        'Como engajar lideranças de RH, Marketing e Operações',
      ],
      anchor: '#temas',
      badge: 'Visão Executiva',
      colorScheme: 'navy',
    },
    {
      id: 'operacao',
      icon: Code,
      title: 'Trabalho com dados na empresa',
      question: 'Como aplicar conceitos às atividades do dia a dia?',
      bullets: [
        'Checklists de privacidade no atendimento e vendas',
        'Avaliação prática de fornecedores e ferramentas de software',
        'Protocolos para resposta rápida a incidentes e dúvidas',
      ],
      anchor: '#temas',
      badge: 'Rotina & Processos',
      colorScheme: 'teal',
    },
    {
      id: 'eca',
      icon: Baby,
      title: 'Oferecemos serviços digitais a crianças ou adolescentes',
      question: 'Que perguntas devem orientar uma avaliação inicial?',
      bullets: [
        'Parâmetros práticos do ECA Digital (Lei nº 15.211/2025)',
        'Mecanismos de verificação etária e consentimento dos pais',
        'Privacidade por padrão e limitações de perfilamento infantil',
      ],
      anchor: '#eca-digital',
      badge: 'ECA Digital Especial',
      colorScheme: 'gold',
    },
  ];

  return (
    <section id="portas-de-entrada" className="py-16 sm:py-20 bg-slate-50 border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-teal-light px-3 py-1 rounded-full">
            Trilhas Recomendadas
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy font-display">
            Por onde você prefere começar?
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Selecione o seu perfil na empresa para encontrar perguntas orientadoras e guias práticos alinhados às suas tarefas.
          </p>
        </div>

        {/* 3 Entry Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                      {card.badge}
                    </span>
                    <Icon className="w-6 h-6 text-brand-teal group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Title & Question */}
                  <h3 className="text-xl font-bold text-brand-navy mb-2 font-display">
                    {card.title}
                  </h3>
                  
                  <p className="text-sm font-semibold text-brand-teal mb-4 leading-snug">
                    “{card.question}”
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-6 text-xs text-slate-600">
                    {card.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action Anchor */}
                <a
                  href={card.anchor}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 text-sm font-bold text-brand-navy group-hover:text-brand-teal transition-colors"
                >
                  <span>Explorar esta trilha</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
