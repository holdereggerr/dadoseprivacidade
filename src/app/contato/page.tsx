'use client';

import React, { useState } from 'react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { Mail, PhoneCall, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export default function ContatoPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Dúvida Geral');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-8 sm:py-16 bg-hero-offwhite min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <Breadcrumbs items={[{ label: 'Contato' }]} />

        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-hero-blue font-display">
            Fale com a Nossa Equipe
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-hero-navy">
            Contato & Atendimento
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Tem dúvidas sobre o Clube Heróis da IA, sugestões de pauta ou interesse em treinamentos corporativos? Entre em contato.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          <div className="md:col-span-5 space-y-4">
            <div className="p-6 bg-hero-navy text-white rounded-3xl space-y-4 shadow-lg">
              <h2 className="text-lg font-bold font-display text-white">Canais Rápidos</h2>

              <div className="space-y-3 text-xs">
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511999999999'}?text=${encodeURIComponent('Olá, gostaria de falar sobre o Heróis da IA.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-hero-card border border-hero-cyan/30 rounded-xl flex items-center gap-3 hover:border-hero-cyan transition-colors"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-white block">WhatsApp Comercial</span>
                    <span className="text-slate-300">Resposta em horário comercial</span>
                  </div>
                </a>

                <div className="p-3 bg-hero-card border border-hero-cyan/30 rounded-xl flex items-center gap-3">
                  <Mail className="w-5 h-5 text-hero-gold flex-shrink-0" />
                  <div>
                    <span className="font-bold text-white block">E-mail Editorial</span>
                    <span className="text-slate-300">contato@heroisdaia.com.br</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="text-xl font-bold font-display text-hero-navy">Envie uma Mensagem</h2>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold font-display text-emerald-900">Mensagem Enviada!</h3>
                <p className="text-xs text-emerald-800">Obrigado pelo contato. Responderemos em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Nome Completo *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-hero-blue"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Seu E-mail *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seuemail@empresa.com"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-hero-blue"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Assunto</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-hero-blue"
                  >
                    <option value="Dúvida Geral">Dúvida Geral</option>
                    <option value="Clube Heróis da IA">Clube Heróis da IA</option>
                    <option value="Treinamento Corporativo">Treinamento Corporativo</option>
                    <option value="Sugestão de Pauta">Sugestão de Pauta ou Errata</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Mensagem *</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Como podemos te ajudar?"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-hero-blue"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-hero-blue hover:bg-hero-navy text-white font-bold text-xs rounded-xl transition-colors font-display flex items-center justify-center gap-1.5"
                >
                  <Send className="w-4 h-4" />
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
