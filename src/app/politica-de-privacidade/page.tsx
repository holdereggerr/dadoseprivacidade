import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade | perito.tec.br',
  description: 'Política de Privacidade e Proteção de Dados Pessoais do portal perito.tec.br em conformidade com a LGPD.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 md:py-20 bg-paper-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="font-serif text-4xl font-bold text-brand-dark border-b border-paper-300 pb-4">
          Política de Privacidade
        </h1>

        <div className="bg-white p-8 md:p-10 rounded-xl border border-paper-300 shadow-sm space-y-6 text-sm text-gray-700 leading-relaxed">
          <p>
            O portal <strong className="text-brand-dark">perito.tec.br</strong> respeita a privacidade de seus leitores e garante o tratamento adequado dos dados pessoais em estrita conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
          </p>

          <h2 className="font-serif text-xl font-bold text-brand-dark pt-2">1. Coleta de Dados Pessoais</h2>
          <p>
            Coletamos dados fornecidos voluntariamente no cadastro do Executive Briefing, incluindo nome, sobrenome, e-mail corporativo, empresa, cargo e áreas de interesse.
          </p>

          <h2 className="font-serif text-xl font-bold text-brand-dark pt-2">2. Finalidade do Tratamento</h2>
          <p>
            Os dados coletados destinam-se exclusivamente ao envio do Executive Digital Risk Briefing, convites para webinars, artigos e comunicados institucionais. Não comercializamos nem compartilhamos seus dados com terceiros.
          </p>

          <h2 className="font-serif text-xl font-bold text-brand-dark pt-2">3. Direitos do Titular</h2>
          <p>
            Você pode exercer seus direitos de confirmação, acesso, correção, eliminação de dados ou revogação de consentimento a qualquer momento enviando uma solicitação para <strong className="text-brand-dark">ricardo.holderegger@infinitysvl.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
