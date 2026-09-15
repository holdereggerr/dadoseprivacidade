import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { NewsletterForm } from '@/components/briefing/NewsletterForm';
import { ShieldCheck, Target, Award, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre Nós | Inteligência Forense e Resiliência | perito.tec.br',
  description: 'Conheça o propósito institucional do perito.tec.br: traduzir computação forense, IA, incidentes e governança digital para executivos e conselhos de administração.',
};

export default function SobrePage() {
  return (
    <div className="py-12 md:py-20 bg-paper-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="border-b border-paper-300 pb-8 space-y-4">
          <div className="relative w-48 h-12 mb-4">
            <Image
              src="/logo.png"
              alt="perito.tec.br"
              fill
              className="object-contain object-left"
            />
          </div>
          <span className="text-xs uppercase tracking-widest font-semibold text-brand-red">
            Manifesto Institucional
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark">
            Tecnologia é apenas parte do problema.
          </h1>
        </div>

        {/* Core Institutional Text */}
        <div className="bg-white p-8 md:p-12 rounded-xl border border-paper-300 shadow-sm space-y-6 text-gray-800 leading-relaxed text-base md:text-lg">
          <p>
            Um incidente digital raramente decorre exclusivamente de uma falha tecnológica.
          </p>

          <p>
            Processos inadequados, decisões equivocadas, ausência de governança, comportamento humano, fornecedores, comunicação deficiente e falta de preparação frequentemente desempenham papel tão importante quanto a própria tecnologia.
          </p>

          <p>
            O <strong className="text-brand-dark font-semibold">perito.tec.br</strong> foi criado para analisar essas situações sob uma perspectiva empresarial, tornando computação forense, inteligência artificial, resiliência e risco digital compreensíveis para quem precisa tomar decisões.
          </p>

          {/* Highlight Box */}
          <div className="bg-brand-red-subtle border-l-4 border-brand-red p-6 rounded-r-lg my-8 space-y-2">
            <h3 className="font-serif text-xl font-bold text-brand-red">Propósito Central</h3>
            <p className="font-serif text-lg md:text-xl font-bold text-brand-dark leading-snug">
              O objetivo não é ensinar executivos a configurar tecnologia. É ajudá-los a compreender o risco que ela cria e como preparar suas organizações.
            </p>
          </div>

          <div className="pt-4 space-y-4 border-t border-paper-200">
            <h3 className="font-serif text-2xl font-bold text-brand-dark">Nossos Princípios Editoriais</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <span>Independência editorial absoluta sem propaganda comercial.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <span>Recusa ao sensacionalismo e ao amedrontamento desnecessário.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <span>Conexão direta entre escolhas técnicas e impacto financeiro.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <span>Valorização da prontidão forense e da gestão preventiva de crises.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Position Quote */}
        <div className="bg-brand-dark text-white p-8 md:p-10 rounded-xl shadow-executive space-y-4">
          <div className="flex items-center gap-2 text-brand-red font-bold text-xs uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>Posicionamento de Marca</span>
          </div>
          <p className="font-serif text-xl md:text-2xl font-bold italic leading-relaxed">
            &ldquo;Computação forense não é apenas investigar depois de um incidente. Ela ajuda a empresa a preparar processos, responsabilidades, evidências e planos de ação para que uma crise digital possa ser enfrentada com método.&rdquo;
          </p>
          <p className="text-xs text-gray-400 font-medium">
            O melhor momento para preparar uma investigação é antes de precisar dela.
          </p>
        </div>

        {/* Form */}
        <div className="pt-6">
          <NewsletterForm
            title="Receba o Executive Briefing"
            subtitle="Análises quinzenais produzidas diretamente pelo conselho editorial."
          />
        </div>

      </div>
    </div>
  );
}
