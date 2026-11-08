'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('dados_privacidade_cookie_consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('dados_privacidade_cookie_consent', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div 
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-40 bg-brand-navy border border-brand-teal/40 text-slate-200 p-5 rounded-2xl shadow-2xl backdrop-blur-md animate-fadeIn"
      role="region"
      aria-label="Aviso de Privacidade e Cookies"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-brand-teal" />
            <h4 className="text-sm font-bold text-white font-display">
              Privacidade e Transparência
            </h4>
          </div>
          <button 
            onClick={acceptAll}
            className="text-slate-400 hover:text-white p-1"
            aria-label="Fechar aviso"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          Utilizamos apenas cookies essenciais para o funcionamento do portal. Não utilizamos ferramentas invasivas de rastreamento de marketing. Saiba mais em nossa{' '}
          <Link href="/politica-de-privacidade" className="text-brand-teal underline font-semibold hover:text-white">
            Política de Privacidade
          </Link>.
        </p>

        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={acceptAll}
            className="w-full py-2.5 bg-brand-teal hover:bg-brand-teal-dark text-white font-bold text-xs rounded-lg transition-all shadow-sm font-display"
          >
            Compreendi e Concordo
          </button>
        </div>
      </div>
    </div>
  );
}
