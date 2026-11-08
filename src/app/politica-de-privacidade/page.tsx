import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Dados & Privacidade',
  description: 'Política de Privacidade e Proteção de Dados Pessoais do portal dadoseprivacidade.com.br em estrita conformidade com a LGPD.',
};

export default function PrivacyPolicyPage() {
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
            <ShieldCheck className="w-3.5 h-3.5" />
            Transparência & LGPD
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-brand-navy font-display">
            Política de Privacidade
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Última atualização: Setembro de 2026 | Domínio: dadoseprivacidade.com.br
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-card space-y-6 text-sm text-slate-700 leading-relaxed">
          <p>
            O portal <strong className="text-brand-navy">Dados & Privacidade</strong> (dadoseprivacidade.com.br) é uma iniciativa independente de informação e capacitação que respeita integralmente a privacidade de seus leitores, garantindo o tratamento adequado dos dados pessoais em estrita conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
          </p>

          <h2 className="text-lg font-bold text-brand-navy font-display pt-2">1. Coleta Mínima de Dados Pessoais</h2>
          <p>
            Coletamos apenas os dados essenciais fornecidos voluntariamente por você ao se inscrever na newsletter <strong>Dados em Ação</strong>, compreendendo:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Nome completo ou de tratamento;</li>
            <li>Endereço de e-mail profissional ou pessoal.</li>
          </ul>

          <h2 className="text-lg font-bold text-brand-navy font-display pt-2">2. Finalidade do Tratamento</h2>
          <p>
            Os dados fornecidos destinam-se exclusivamente ao envio periódico de newsletters, análises de LGPD e ECA Digital, comunicados institucionais do portal e novidades sobre materiais educativos. Jamais comercializamos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing.
          </p>

          <h2 className="text-lg font-bold text-brand-navy font-display pt-2">3. Confirmação e Descadastro Facilitado</h2>
          <p>
            Adotamos confirmação de inscrição por e-mail (double opt-in) para prevenir cadastros indevidos. Todas as mensagens enviadas contêm link direto e visível ao final do texto para descadastro imediato (opt-out).
          </p>

          <h2 className="text-lg font-bold text-brand-navy font-display pt-2">4. Direitos do Titular de Dados</h2>
          <p>
            Nos termos do Artigo 18 da LGPD, você possui o direito de confirmar a existência de tratamento, acessar seus dados, corrigir dados incompletos ou solicitar a exclusão definitiva do nosso boletim enviando uma mensagem para <strong className="text-brand-navy">contato@dadoseprivacidade.com.br</strong>.
          </p>

          <h2 className="text-lg font-bold text-brand-navy font-display pt-2">5. Isenção de Rastreamento Invasivo</h2>
          <p>
            Não utilizamos ferramentas invasivas de rastreamento entre sites ou perfilamento de marketing comportamental.
          </p>
        </div>

      </div>
    </div>
  );
}
