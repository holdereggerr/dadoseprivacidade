import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos de Uso | perito.tec.br',
  description: 'Termos e Condições de Uso do portal executivo perito.tec.br.',
};

export default function TermsPage() {
  return (
    <div className="py-12 md:py-20 bg-paper-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="font-serif text-4xl font-bold text-brand-dark border-b border-paper-300 pb-4">
          Termos de Uso
        </h1>

        <div className="bg-white p-8 md:p-10 rounded-xl border border-paper-300 shadow-sm space-y-6 text-sm text-gray-700 leading-relaxed">
          <p>
            Ao acessar o portal <strong className="text-brand-dark">perito.tec.br</strong>, você concorda com estes Termos de Uso.
          </p>

          <h2 className="font-serif text-xl font-bold text-brand-dark pt-2">1. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo publicado, incluindo artigos, estudos de caso, análises e marcas, é protegido por direitos autorais. A reprodução sem citação da fonte e autorização prévia é proibida.
          </p>

          <h2 className="font-serif text-xl font-bold text-brand-dark pt-2">2. Isenção de Responsabilidade Legal</h2>
          <p>
            As análises publicadas possuem caráter exclusivamente informativo e educativo para a governança corporativa, não constituindo parecer jurídico formal ou garantia de segurança técnica irrestrita.
          </p>
        </div>
      </div>
    </div>
  );
}
