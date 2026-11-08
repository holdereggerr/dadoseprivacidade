import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldAlert, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="py-16 sm:py-24 bg-brand-navy text-white min-h-[70vh] flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        <div className="flex justify-center">
          <div className="bg-white p-3 rounded-2xl">
            <Image 
              src="/Dados_Privacidade_horizontal_vetor.svg" 
              alt="Dados & Privacidade" 
              width={220} 
              height={55} 
              className="h-10 w-auto object-contain" 
            />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-slate-800 border border-brand-teal/40 rounded-full text-xs font-bold text-brand-teal font-display">
          <ShieldAlert className="w-4 h-4 text-brand-gold" />
          <span>Erro 404 • Página Não Encontrada</span>
        </div>

        <h1 className="text-3xl font-extrabold font-display text-white">
          A rota procurada não existe
        </h1>

        <p className="text-sm text-slate-300">
          O conteúdo que você buscou foi movido ou a URL foi informada incorretamente.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-brand-teal hover:bg-brand-teal-dark text-white font-bold text-sm rounded-xl font-display transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  );
}
