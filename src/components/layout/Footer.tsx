'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, CheckCircle2, AlertCircle, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleFooterNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Por favor, informe um e-mail válido.');
      return;
    }
    setError('');
    // INTEGRATION POINT: Send payload to newsletter subscription service (Mailchimp/ConvertKit/Buttondown/API)
    setSubmitted(true);
  };

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-12 border-t border-brand-navy/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-700/60">
          
          {/* Brand Info & Mission (Cols 1-2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative h-12 w-auto max-w-[260px]">
              {/* White background badge container for logo clarity on dark navy */}
              <div className="bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-lg inline-block shadow-sm">
                <Image 
                  src="/Dados_Privacidade_horizontal_vetor.svg" 
                  alt="Dados & Privacidade" 
                  width={220}
                  height={50}
                  className="h-9 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              Fonte confiável e prática sobre LGPD e ECA Digital para pequenas e médias empresas. Conteúdo técnico em linguagem clara para ajudar gestores e equipes a tomar decisões fundamentadas.
            </p>

            <div className="pt-2 flex items-start gap-2.5 text-xs text-slate-400 bg-slate-800/40 p-3.5 rounded-lg border border-slate-700/50 max-w-md">
              <ShieldCheck className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
              <span>
                Iniciativa independente de informação e capacitação. Não possui vínculo institucional ou governamental.
              </span>
            </div>
          </div>

          {/* Quick Nav (Col 3) */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-teal">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="#" className="hover:text-brand-teal transition-colors">Início</a>
              </li>
              <li>
                <a href="#lgpd" className="hover:text-brand-teal transition-colors">LGPD na Prática</a>
              </li>
              <li>
                <a href="#eca-digital" className="hover:text-brand-teal transition-colors">ECA Digital</a>
              </li>
              <li>
                <a href="#guias" className="hover:text-brand-teal transition-colors">Guias & Materiais</a>
              </li>
              <li>
                <a href="#temas" className="hover:text-brand-teal transition-colors">Categorias de Conteúdo</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-brand-teal transition-colors">Sobre a Iniciativa</a>
              </li>
            </ul>
          </div>

          {/* Transparency & Legal (Col 4) */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-teal">
              Transparência & Legal
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="#transparencia" className="hover:text-brand-teal transition-colors">Como Produzimos Nosso Conteúdo</a>
              </li>
              <li>
                <Link href="/politica-de-privacidade" className="hover:text-brand-teal transition-colors">Política de Privacidade</Link>
              </li>
              <li>
                <Link href="/termos-de-uso" className="hover:text-brand-teal transition-colors">Termos de Uso</Link>
              </li>
              <li>
                <Link href="/politica-editorial" className="hover:text-brand-teal transition-colors">Política Editorial</Link>
              </li>
              <li className="pt-2 text-xs text-slate-400 font-medium">Fontes Oficiais:</li>
              <li>
                <a 
                  href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-brand-teal transition-colors inline-flex items-center gap-1 text-xs text-slate-300"
                >
                  LGPD (Lei nº 13.709/2018)
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/l15211.htm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-brand-teal transition-colors inline-flex items-center gap-1 text-xs text-slate-300"
                >
                  ECA Digital (Lei nº 15.211/2025)
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Compact Footer Newsletter Signup (Col 5) */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-teal">
              Boletim Dados em Ação
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Receba nossas análises práticas e novidades quinzenais direto no e-mail.
            </p>

            {submitted ? (
              <div className="p-3 bg-teal-900/40 border border-brand-teal/40 rounded-lg text-xs text-teal-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>Inscrição realizada! Verifique sua caixa de entrada.</span>
              </div>
            ) : (
              <form onSubmit={handleFooterNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Seu e-mail profissional"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="E-mail profissional para newsletter rodapé"
                    className="w-full px-3 py-2 text-xs text-slate-900 placeholder-slate-400 bg-white rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-teal"
                  />
                </div>
                {error && (
                  <p className="text-[11px] text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  className="w-full py-2 px-3 bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold text-xs rounded-md transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Inscrever-se no rodapé</span>
                </button>
              </form>
            )}
            <p className="text-[10px] text-slate-400 leading-normal">
              Sem spam. Cancele quando quiser. Veja nossa <Link href="/politica-de-privacidade" className="underline hover:text-slate-200">Política de Privacidade</Link>.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Dados & Privacidade (dadoseprivacidade.com.br). Todos os direitos reservados.
          </p>
          <p className="text-slate-400">
            Conhecimento confiável para decisões que saem do papel.
          </p>
        </div>

      </div>
    </footer>
  );
}
