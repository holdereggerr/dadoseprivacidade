import React from 'react';
import { Metadata } from 'next';
import { NewsletterForm } from '@/components/briefing/NewsletterForm';
import { Mail, CheckCircle2, ShieldCheck, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Executive Digital Risk Briefing | perito.tec.br',
  description: 'O que aconteceu. O que significa. O que sua empresa deveria considerar. Newsletter semanal para CEOs, CFOs, CIOs, CISOs e Conselhos.',
};

export default function ExecutiveBriefingPage() {
  const features = [
    {
      title: 'Sem Sensacionalismo',
      desc: 'Análises objetivas sem jargões desnecessários ou alarmismo.',
    },
    {
      title: 'Foco na Tomada de Decisão',
      desc: 'Impactos financeiros, regulatórios, reputacionais e de continuidade.',
    },
    {
      title: 'Privacidade Garantida',
      desc: 'Seus dados corporativos nunca serão compartilhados com terceiros.',
    },
  ];

  return (
    <div className="py-12 md:py-20 bg-paper-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-paper-300 rounded text-xs font-semibold text-brand-red uppercase tracking-wider">
            <Mail className="w-4 h-4 text-brand-red" />
            <span>Inscrição VIP Executive</span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brand-dark">
            Executive Digital Risk Briefing
          </h1>
          
          <p className="font-serif text-xl text-brand-red font-medium">
            O que aconteceu. O que significa. O que sua empresa deveria considerar.
          </p>

          <p className="text-gray-700 text-base leading-relaxed">
            Publicação periódica e exclusiva voltada a CEO, CFO, CIO, CISO, membros de Board, Jurídico, Compliance, DPO e profissionais responsáveis pela governança e resiliência digital.
          </p>
        </div>

        {/* Feature Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item) => (
            <div key={item.title} className="bg-white p-5 rounded-lg border border-paper-300 shadow-sm text-center space-y-2">
              <CheckCircle2 className="w-5 h-5 text-brand-red mx-auto" />
              <h3 className="font-serif text-base font-bold text-brand-dark">{item.title}</h3>
              <p className="text-xs text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Form Container */}
        <NewsletterForm />

        {/* Assurance */}
        <div className="text-center text-xs text-gray-500 flex items-center justify-center gap-2">
          <Lock className="w-3.5 h-3.5 text-gray-400" />
          <span>Formulário seguro com criptografia de ponta a ponta. Você pode cancelar a inscrição a qualquer momento.</span>
        </div>

      </div>
    </div>
  );
}
