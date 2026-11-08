'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, CheckCircle2, AlertCircle, Shield, Sparkles, Lock } from 'lucide-react';

interface NewsletterFormProps {
  variant?: 'main' | 'secondary';
}

export default function NewsletterFormSection({ variant = 'main' }: NewsletterFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot anti-spam check
    if (honeypot) {
      // Spam bot detected, fail silently or show success
      setStatus('success');
      return;
    }

    if (!name.trim()) {
      setErrorMessage('Por favor, informe o seu nome.');
      setStatus('error');
      return;
    }

    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      setErrorMessage('Por favor, informe um endereço de e-mail válido.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      /*
        ----------------------------------------------------------------------
        INTEGRATION POINT: EMAIL MARKETING / NEWSLETTER PLATFORM INTEGRATION
        ----------------------------------------------------------------------
        To connect to Mailchimp, ConvertKit, Resend, ActiveCampaign or custom API:
        
        const res = await fetch('/api/newsletter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email }),
        });
        ----------------------------------------------------------------------
      */
      
      // Simulate real-world network delay for API response
      await new Promise(resolve => setTimeout(resolve, 800));

      setStatus('success');
    } catch (err) {
      setErrorMessage('Ocorreu uma falha temporária ao registrar sua inscrição. Tente novamente.');
      setStatus('error');
    }
  };

  if (variant === 'secondary') {
    return (
      <section className="py-12 bg-slate-100 border-b border-brand-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-bold text-brand-teal uppercase tracking-wider bg-brand-teal-light px-2.5 py-1 rounded">
                Boletim Dados em Ação
              </span>
              <h3 className="text-xl font-bold text-brand-navy font-display">
                Mantenha sua equipe informada com curadoria quinzenal
              </h3>
              <p className="text-xs text-slate-600">
                Receba nossas análises objetivas sobre LGPD e ECA Digital diretamente em seu e-mail. Sem spam.
              </p>
            </div>

            <a
              href="#newsletter"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-brand-teal hover:bg-brand-teal-dark text-white text-sm font-bold rounded-xl shadow-md transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Assinar a newsletter</span>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="newsletter" className="py-16 sm:py-24 bg-brand-navy text-white relative overflow-hidden">
      
      {/* Visual Accent Lighting */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-slate-700/80 shadow-2xl space-y-8">
          
          {/* Header */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-teal/20 text-brand-teal border border-brand-teal/30">
              <Sparkles className="w-3.5 h-3.5" />
              Newsletter Principal — Dados em Ação
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display tracking-tight">
              Uma leitura útil para a próxima decisão.
            </h2>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Receba análises sobre LGPD e ECA Digital, exemplos de aplicação e novos materiais do portal. Informação objetiva, com fontes para você conferir.
            </p>
          </div>

          {/* Form / Status */}
          {status === 'success' ? (
            <div className="bg-teal-950/80 border border-brand-teal p-6 rounded-2xl text-center space-y-3 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-brand-teal/20 text-brand-teal flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                Inscrição Quase Concluída!
              </h3>
              <p className="text-sm text-slate-200 max-w-md mx-auto leading-relaxed">
                Enviamos uma mensagem de confirmação para <strong>{email}</strong>. Por favor, acesse sua caixa de entrada e confirme sua inscrição para ativar o envio das edições.
              </p>
              <p className="text-xs text-slate-400">
                Você pode cancelar sua inscrição a qualquer momento clicando no link ao final de cada e-mail.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 max-w-xl mx-auto">
              
              {/* Honeypot Field for Spam Protection */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website_hp">Não preencha este campo</label>
                <input
                  type="text"
                  id="website_hp"
                  name="website_hp"
                  tabIndex={-1}
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Input */}
                <div className="space-y-1.5">
                  <label htmlFor="newsletter-name" className="block text-xs font-semibold text-slate-300">
                    Seu Nome *
                  </label>
                  <input
                    id="newsletter-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Ex: Maria Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800 text-white placeholder-slate-400 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-teal text-sm"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-1.5">
                  <label htmlFor="newsletter-email" className="block text-xs font-semibold text-slate-300">
                    Seu E-mail Profissional *
                  </label>
                  <input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    required
                    placeholder="nome@empresa.com.br"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800 text-white placeholder-slate-400 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-teal text-sm"
                  />
                </div>
              </div>

              {/* Error Message */}
              {status === 'error' && (
                <div className="p-3 bg-red-950/80 border border-red-500/50 rounded-xl text-xs text-red-200 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 px-6 bg-brand-teal hover:bg-brand-teal-dark disabled:opacity-50 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-teal-glow transition-all duration-200 flex items-center justify-center gap-2 font-display"
              >
                {status === 'loading' ? (
                  <span>Registrando inscrição...</span>
                ) : (
                  <>
                    <Mail className="w-5 h-5" />
                    <span>Quero receber</span>
                  </>
                )}
              </button>

              {/* Explicit Privacy Notice & Anti-spam Guarantee */}
              <div className="pt-2 text-center text-xs text-slate-400 space-y-1">
                <p className="flex items-center justify-center gap-1.5 text-slate-300">
                  <Lock className="w-3.5 h-3.5 text-brand-teal" />
                  <span>Respeitamos sua privacidade. Seus dados são protegidos e usados apenas para o envio da newsletter.</span>
                </p>
                <p>
                  Confirmação via e-mail duplo opt-in. Opção de descadastro imediato em todas as edições. Veja nossa{' '}
                  <Link href="/politica-de-privacidade" className="text-brand-teal underline hover:text-white">
                    Política de Privacidade
                  </Link>.
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
