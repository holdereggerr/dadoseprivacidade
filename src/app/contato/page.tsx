import React from 'react';
import { Metadata } from 'next';
import { Mail, MapPin, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contato | perito.tec.br',
  description: 'Fale com o conselho editorial ou envie solicitações institucionais para o perito.tec.br.',
};

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20 bg-paper-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="font-serif text-4xl font-bold text-brand-dark border-b border-paper-300 pb-4">
          Contato Institucional
        </h1>

        <div className="bg-white p-8 md:p-10 rounded-xl border border-paper-300 shadow-sm space-y-6 text-gray-800">
          <p className="text-base text-gray-700 leading-relaxed">
            Para dúvidas institucionais, sugestões de pauta, solicitações de palestras executivas ou contato do conselho editorial, utilize os canais formais abaixo:
          </p>

          <div className="space-y-4 pt-4 border-t border-paper-200">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-brand-red shrink-0" />
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-gray-500 block">E-mail Editorial</span>
                <a href="mailto:ricardo.holderegger@infinitysvl.com" className="text-sm font-semibold text-brand-dark hover:text-brand-red underline">
                  ricardo.holderegger@infinitysvl.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Building className="w-5 h-5 text-brand-red shrink-0" />
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-gray-500 block">Portal</span>
                <span className="text-sm font-semibold text-brand-dark">perito.tec.br</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
