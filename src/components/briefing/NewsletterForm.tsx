'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArticleCategory, NewsletterFormData } from '@/types';
import { Modal } from '@/components/ui/Modal';
import { Send, CheckSquare, Square } from 'lucide-react';

const INTEREST_AREAS: ArticleCategory[] = [
  'Computação Forense',
  'IA & Shadow AI',
  'Resiliência Digital',
  'Fraude',
  'LGPD & ECA Digital',
  'Governança',
];

interface NewsletterFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export const NewsletterForm: React.FC<NewsletterFormProps> = ({
  title = 'Assine o Executive Digital Risk Briefing',
  subtitle = 'O que aconteceu. O que significa. O que sua empresa deveria considerar.',
  className = '',
}) => {
  const [formData, setFormData] = useState<NewsletterFormData>({
    nome: '',
    sobrenome: '',
    email: '',
    empresa: '',
    cargo: '',
    areasInteresse: [],
    consentimento: false,
  });

  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const toggleInterest = (area: ArticleCategory) => {
    setFormData((prev) => {
      const exists = prev.areasInteresse.includes(area);
      return {
        ...prev,
        areasInteresse: exists
          ? prev.areasInteresse.filter((a) => a !== area)
          : [...prev.areasInteresse, area],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.consentimento) {
      setErrorMessage('É necessário concordar com os termos para realizar a inscrição.');
      return;
    }

    if (formData.areasInteresse.length === 0) {
      setErrorMessage('Por favor, selecione ao menos uma área de interesse.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setModalOpen(true);
        setFormData({
          nome: '',
          sobrenome: '',
          email: '',
          empresa: '',
          cargo: '',
          areasInteresse: [],
          consentimento: false,
        });
      } else {
        const data = await res.json();
        setErrorMessage(data.error || 'Ocorreu um erro ao enviar sua inscrição.');
      }
    } catch {
      setErrorMessage('Falha de conexão. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`bg-white rounded-xl border border-paper-300 p-6 md:p-10 shadow-executive ${className}`}>
      <div className="max-w-3xl space-y-3 mb-8">
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-dark">{title}</h3>
        <p className="text-brand-red font-medium text-sm md:text-base">{subtitle}</p>
        <p className="text-gray-600 text-sm leading-relaxed">
          Newsletter exclusiva direcionada a CEOs, CFOs, CIOs, CISOs, membros de Board, Jurídico, Compliance, DPO e executivos responsáveis por continuidade e risco operacional.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700 mb-2">
              Nome *
            </label>
            <input
              type="text"
              required
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              className="w-full px-4 py-2.5 bg-paper-50 border border-gray-300 rounded text-sm text-brand-dark focus:outline-none focus:border-brand-red"
              placeholder="Seu primeiro nome"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700 mb-2">
              Sobrenome *
            </label>
            <input
              type="text"
              required
              value={formData.sobrenome}
              onChange={(e) => setFormData({ ...formData, sobrenome: e.target.value })}
              className="w-full px-4 py-2.5 bg-paper-50 border border-gray-300 rounded text-sm text-brand-dark focus:outline-none focus:border-brand-red"
              placeholder="Seu sobrenome"
            />
          </div>
        </div>

        {/* Email, Company, Role */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700 mb-2">
              E-mail corporativo *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2.5 bg-paper-50 border border-gray-300 rounded text-sm text-brand-dark focus:outline-none focus:border-brand-red"
              placeholder="executivo@empresa.com.br"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700 mb-2">
              Empresa *
            </label>
            <input
              type="text"
              required
              value={formData.empresa}
              onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
              className="w-full px-4 py-2.5 bg-paper-50 border border-gray-300 rounded text-sm text-brand-dark focus:outline-none focus:border-brand-red"
              placeholder="Nome da organização"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700 mb-2">
              Cargo *
            </label>
            <input
              type="text"
              required
              value={formData.cargo}
              onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
              className="w-full px-4 py-2.5 bg-paper-50 border border-gray-300 rounded text-sm text-brand-dark focus:outline-none focus:border-brand-red"
              placeholder="Ex: CEO, General Counsel, DPO"
            />
          </div>
        </div>

        {/* Areas of Interest Checkboxes */}
        <div className="space-y-3 pt-2">
          <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700">
            Área de interesse * (Selecione ao menos uma)
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {INTEREST_AREAS.map((area) => {
              const selected = formData.areasInteresse.includes(area);
              return (
                <button
                  type="button"
                  key={area}
                  onClick={() => toggleInterest(area)}
                  className={`flex items-center gap-2.5 p-3 rounded border text-left text-xs font-medium transition-colors ${
                    selected
                      ? 'bg-brand-red-subtle border-brand-red text-brand-red font-semibold'
                      : 'bg-paper-50 border-gray-200 text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {selected ? (
                    <CheckSquare className="w-4 h-4 text-brand-red shrink-0" />
                  ) : (
                    <Square className="w-4 h-4 text-gray-400 shrink-0" />
                  )}
                  <span>{area}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              required
              checked={formData.consentimento}
              onChange={(e) => setFormData({ ...formData, consentimento: e.target.checked })}
              className="mt-1 w-4 h-4 text-brand-red border-gray-300 rounded focus:ring-brand-red"
            />
            <span className="text-xs text-gray-600 leading-relaxed">
              Concordo em receber notícias, análises, novidades, convites e informações do{' '}
              <strong className="text-brand-dark">perito.tec.br</strong> por e-mail. Consulte nossa{' '}
              <Link href="/politica-de-privacidade" className="text-brand-red underline">
                Política de Privacidade
              </Link>.
            </span>
          </label>
        </div>

        {/* Error Feedback */}
        {errorMessage && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded">
            {errorMessage}
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-brand-red hover:bg-brand-red-dark text-white font-semibold text-xs uppercase tracking-wider rounded transition-colors shadow-md gap-2"
          >
            {loading ? 'Processando inscrição...' : 'Confirmar Inscrição no Executive Briefing'}
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>

      {/* Confirmation Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Inscrição realizada"
      >
        <p className="leading-relaxed">
          Obrigado por se cadastrar no <strong className="text-brand-dark">perito.tec.br</strong>.
        </p>
        <p className="mt-2 leading-relaxed">
          Você passará a receber nossas análises, notícias, novidades e informações sobre computação forense, inteligência artificial, risco digital e resiliência corporativa diretamente em seu e-mail.
        </p>
      </Modal>
    </div>
  );
};
