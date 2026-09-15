'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Send, CheckCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, consentimento: true }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer className="bg-brand-dark text-white border-t border-gray-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-gray-800">
          
          {/* Brand & Subtitle */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-48 h-12">
                <Image
                  src="/logo.png"
                  alt="perito.tec.br"
                  fill
                  className="object-contain object-left invert brightness-200"
                />
              </div>
            </Link>
            <p className="text-brand-red font-semibold text-sm tracking-wide uppercase">
              Computação Forense | IA | Resiliência Digital | Governança
            </p>
            <p className="text-gray-400 text-sm leading-relaxed pr-6">
              O perito.tec.br analisa os riscos digitais sob a perspectiva de quem precisa proteger operações, patrimônio, dados, reputação e capacidade de decisão.
            </p>
            <div className="pt-2 text-xs text-gray-500">
              O melhor momento para preparar uma investigação é antes de precisar dela.
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-gray-400">Navegação Executiva</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/artigos" className="hover:text-brand-red transition-colors">Artigos & Análises</Link></li>
              <li><Link href="/inteligencia-artificial" className="hover:text-brand-red transition-colors">IA & Shadow AI</Link></li>
              <li><Link href="/computacao-forense" className="hover:text-brand-red transition-colors">Computação Forense</Link></li>
              <li><Link href="/resiliencia-digital" className="hover:text-brand-red transition-colors">Resiliência Digital</Link></li>
              <li><Link href="/casos" className="hover:text-brand-red transition-colors">Casos Práticos</Link></li>
              <li><Link href="/lgpd-eca-digital" className="hover:text-brand-red transition-colors">LGPD & ECA Digital</Link></li>
              <li><Link href="/executive-briefing" className="hover:text-brand-red transition-colors">Executive Briefing</Link></li>
              <li><Link href="/academy" className="hover:text-brand-red transition-colors">Academy</Link></li>
              <li><Link href="/sobre" className="hover:text-brand-red transition-colors">Sobre Nós</Link></li>
            </ul>
          </div>

          {/* Compact Newsletter Subscription */}
          <div className="lg:col-span-4 space-y-4 bg-gray-900/50 p-6 rounded-lg border border-gray-800">
            <h4 className="text-base font-serif font-bold text-white">Receba o Executive Briefing</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Resumo semanal para CEOs, CFOs, CIOs, CISOs, Jurídico e Conselhos sobre riscos digitais e resiliência corporativa.
            </p>

            {status === 'success' ? (
              <div className="flex items-center gap-2 text-emerald-400 bg-emerald-950/40 p-3 rounded text-xs border border-emerald-800/50">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>Inscrição realizada! Você receberá nosso próximo briefing.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Seu e-mail corporativo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-950 border border-gray-700 rounded px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-red"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="bg-brand-red hover:bg-brand-red-dark text-white px-4 py-2 text-xs uppercase font-semibold tracking-wider rounded transition-colors flex items-center gap-1.5 shrink-0"
                  >
                    {status === 'loading' ? 'Enviando...' : 'Inscrever-me'}
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                {status === 'error' && (
                  <p className="text-red-400 text-xs">Erro ao processar a inscrição. Tente novamente.</p>
                )}
                <p className="text-[11px] text-gray-500 leading-normal">
                  Ao se inscrever, você concorda com nossa{' '}
                  <Link href="/politica-de-privacidade" className="underline hover:text-gray-300">
                    Política de Privacidade
                  </Link>.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} perito.tec.br — Inteligência Forense e Resiliência Digital. Todos os direitos reservados.</p>
          <div className="flex items-center space-x-6">
            <Link href="/politica-de-privacidade" className="hover:text-gray-300">Política de Privacidade</Link>
            <Link href="/termos-de-uso" className="hover:text-gray-300">Termos de Uso</Link>
            <Link href="/contato" className="hover:text-gray-300">Contato</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
