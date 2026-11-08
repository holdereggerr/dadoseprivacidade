import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpenCheck, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Política Editorial | Dados & Privacidade',
  description: 'Diretrizes editoriais, rigor técnico e transparência do portal dadoseprivacidade.com.br.',
};

export default function EditorialPolicyPage() {
  return (
    <div className="py-12 md:py-20 bg-brand-bg min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-semibold text-brand-teal hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para a página inicial
        </Link>

        <div className="border-b border-brand-border pb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-teal-light text-brand-teal mb-3">
            <BookOpenCheck className="w-3.5 h-3.5" />
            Rigor & Ética
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-brand-navy font-display">
            Política Editorial
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Última atualização: Setembro de 2026 | Domínio: dadoseprivacidade.com.br
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-card space-y-6 text-sm text-slate-700 leading-relaxed">
          <p>
            O portal <strong className="text-brand-navy">Dados & Privacidade</strong> adota padrões elevados de integridade editorial para garantir que o leitor tenha acesso a conteúdos úteis, profundos e confiáveis sobre LGPD e ECA Digital.
          </p>

          <h2 className="text-lg font-bold text-brand-navy font-display">1. Ausência de Sensacionalismo</h2>
          <p>
            Rejeitamos manchetes alarmistas ou táticas de indução pelo medo (“amassando o leitor com multas”). O foco é sempre o esclarecimento técnico com utilidade prática.
          </p>

          <h2 className="text-lg font-bold text-brand-navy font-display">2. Verificação em Fontes Oficiais</h2>
          <p>
            Nossas análises baseiam-se nos textos legais vigentes (Lei nº 13.709/2018 e Lei nº 15.211/2025), resoluções e guias emitidos pela Autoridade Nacional de Proteção de Dados (ANPD).
          </p>

          <h2 className="text-lg font-bold text-brand-navy font-display">3. Independência Editorial</h2>
          <p>
            Não aceitamos patrocínios ocultos que comprometam nossas análises. Ferramentas, softwares ou fornecedores citados em artigos são avaliados com base em critérios técnicos objetivos.
          </p>

          <h2 className="text-lg font-bold text-brand-navy font-display">4. Retificações e Atualizações</h2>
          <p>
            Dada a evolução regulatória da privacidade no Brasil, nossos artigos indicam expressamente a data da última revisão. Eventuais correções de conteúdo são identificadas de forma transparente.
          </p>
        </div>

      </div>
    </div>
  );
}
