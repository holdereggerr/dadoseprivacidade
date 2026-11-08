'use client';

import React, { useState } from 'react';
import { X, ShieldCheck, Mail, Lock, ArrowRight } from 'lucide-react';

interface MemberModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MemberModal({ isOpen, onClose }: MemberModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simular resposta da camada de autenticação
    setTimeout(() => {
      setLoading(false);
      setStatusMessage('Área de Membros em preparação! Caso seja assinante do Clube, você receberá o convite exclusivo por e-mail.');
    }, 800);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-hero-navy/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="member-modal-title"
    >
      <div className="relative w-full max-w-md bg-hero-graphite border border-hero-border rounded-2xl p-6 sm:p-8 shadow-2xl text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full hover:bg-hero-card transition-colors"
          aria-label="Fechar Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-hero-blue/20 border border-hero-blue/40 rounded-xl text-hero-cyan">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 id="member-modal-title" className="text-xl font-bold font-display text-white">
              Área do Membro
            </h2>
            <p className="text-xs text-slate-400">Clube Heróis da IA</p>
          </div>
        </div>

        {statusMessage ? (
          <div className="my-6 p-4 bg-hero-navy/80 border border-hero-cyan/40 rounded-xl text-sm text-slate-200">
            <p className="font-semibold text-hero-gold mb-1">Acesso ao Portal</p>
            <p className="text-xs leading-relaxed text-slate-300">{statusMessage}</p>
            <button
              onClick={() => {
                setStatusMessage(null);
                onClose();
              }}
              className="mt-4 w-full py-2.5 bg-hero-blue hover:bg-blue-600 text-white font-semibold text-xs rounded-lg transition-colors"
            >
              Entendido
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 my-4">
            <div>
              <label htmlFor="member-email" className="block text-xs font-semibold text-slate-300 mb-1">
                E-mail corporativo ou pessoal
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  id="member-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seuemail@empresa.com"
                  className="w-full pl-9 pr-4 py-2.5 bg-hero-navy border border-hero-border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-hero-cyan"
                />
              </div>
            </div>

            <div>
              <label htmlFor="member-pass" className="block text-xs font-semibold text-slate-300 mb-1">
                Senha de Acesso
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  id="member-pass"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-4 py-2.5 bg-hero-navy border border-hero-border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-hero-cyan"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-hero-blue to-hero-cyan hover:brightness-110 text-white font-bold text-sm rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all font-display"
            >
              {loading ? 'Validando...' : 'Entrar no Portal'}
              {!loading && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>
        )}

        <div className="mt-6 pt-4 border-t border-hero-border/40 text-center">
          <p className="text-xs text-slate-400">
            Ainda não faz parte?{' '}
            <a href="/clube" onClick={onClose} className="text-hero-gold font-semibold hover:underline">
              Conheça os benefícios do Clube Heróis da IA
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
