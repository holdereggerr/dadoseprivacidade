import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldAlert } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-paper-100 border-b border-paper-300 overflow-hidden py-16 md:py-24">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-brand-red-subtle/60 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl space-y-8">
          
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-paper-300 rounded text-xs font-semibold text-brand-red uppercase tracking-wider shadow-sm">
            <ShieldAlert className="w-4 h-4 text-brand-red" />
            <span>Inteligência Forense & Governança Corporativa</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-brand-dark tracking-tight leading-[1.1]">
            Risco digital explicado para quem toma decisões.
          </h1>

          {/* Subtitle */}
          <p className="font-serif text-xl sm:text-2xl text-brand-red font-medium leading-snug">
            Computação forense, inteligência artificial, incidentes digitais, fraudes e resiliência traduzidos para a realidade das empresas.
          </p>

          {/* Description Body */}
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl">
            O <strong className="text-brand-dark font-semibold">perito.tec.br</strong> analisa os riscos digitais sob a perspectiva de quem precisa proteger operações, patrimônio, dados, reputação e capacidade de decisão. Sem jargões técnicos excessivos, conectando tecnologia a impacto empresarial.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              href="/artigos"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-dark hover:bg-brand-red text-white text-xs uppercase tracking-wider font-semibold rounded shadow-md transition-colors gap-2"
            >
              <span>Explorar análises</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Link
              href="/executive-briefing"
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-paper-200 text-brand-dark border border-gray-300 text-xs uppercase tracking-wider font-semibold rounded transition-colors shadow-sm gap-2"
            >
              <span>Receber o Executive Briefing</span>
            </Link>
          </div>

          {/* Highlight Positioning Bar */}
          <div className="pt-6 border-t border-paper-300">
            <blockquote className="italic font-serif text-base sm:text-lg text-brand-dark font-semibold flex items-center gap-3">
              <span className="w-2 h-8 bg-brand-red rounded-full shrink-0" />
              <span>&ldquo;O melhor momento para conhecer o perito forense não é depois do incidente.&rdquo;</span>
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
};
