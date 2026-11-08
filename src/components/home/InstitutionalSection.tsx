'use client';

import React from 'react';
import Image from 'next/image';
import { Quote, Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function InstitutionalSection() {
  return (
    <section id="sobre" className="py-16 sm:py-20 bg-white border-b border-brand-border relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-gold/10 text-amber-800 border border-brand-gold/20 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            Nossa Proposta & Posicionamento
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-display">
            Apresentação Institucional
          </h2>
        </div>

        {/* Institutional Card Container */}
        <div className="bg-brand-bg border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-card space-y-6 text-brand-dark">
          
          {/* Main Title Quote */}
          <div className="border-l-4 border-brand-teal pl-4 sm:pl-6 py-1">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-navy leading-snug font-display">
              “Proteção de dados se constrói com conhecimento e ação.”
            </h3>
          </div>

          {/* Body Paragraphs */}
          <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
            <p>
              O <strong>Dados & Privacidade</strong> nasce para apoiar pequenas e médias empresas na aplicação da LGPD e na compreensão do ECA Digital. Reunimos conteúdo técnico em linguagem clara, experiências práticas e capacitação para ajudar gestores e equipes a reconhecer riscos, fazer escolhas fundamentadas e avançar com segurança.
            </p>

            <p>
              Aqui, assuntos frequentemente tratados de forma superficial ganham contexto e utilidade: o que uma regra significa, quando ela pode afetar o negócio, quais perguntas fazer e que evidências reunir. Nosso compromisso é oferecer informação verificável, indicar as fontes e distinguir obrigações legais de recomendações e boas práticas.
            </p>
          </div>

          {/* Highlight Callout Box */}
          <div className="mt-8 p-6 bg-brand-navy text-white rounded-xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-700">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                Nosso Mantra Editorial
              </span>
              <p className="text-xl sm:text-2xl font-extrabold tracking-tight font-display text-white">
                Entenda o tema. Envolva sua equipe. Dê o próximo passo.
              </p>
            </div>
            
            <a
              href="#newsletter"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-brand-teal hover:bg-brand-teal-dark text-white text-sm font-bold rounded-lg transition-colors shadow-sm"
            >
              Fazer parte
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
