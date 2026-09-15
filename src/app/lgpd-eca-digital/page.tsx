import React from 'react';
import { Metadata } from 'next';
import { INITIAL_ARTICLES } from '@/data/articles';
import { ArticleCard } from '@/components/articles/ArticleCard';
import { NewsletterForm } from '@/components/briefing/NewsletterForm';
import { ShieldCheck, Scale, AlertTriangle, Users, Lock, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'LGPD e ECA Digital: Governança, Proteção e Risco Jurídico | perito.tec.br',
  description: 'Conformidade executiva com LGPD e ECA Digital, salvaguarda de crianças e adolescentes, proteção de dados e responsabilização direta da administração.',
};

export default function LGPDECADigitalPage() {
  const categoryArticles = INITIAL_ARTICLES.filter(
    (a) => a.category === 'LGPD & ECA Digital' || a.tags.includes('LGPD') || a.tags.includes('ECA Digital')
  );

  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Proteção de Dados & Privacidade',
      desc: 'Mapeamento contínuo dos fluxos de dados sensíveis, relatórios RIPD/DPIA e conformidade técnica perante a ANPD.',
    },
    {
      icon: Users,
      title: 'Crianças e Adolescentes (ECA Digital)',
      desc: 'Salvaguarda reforçada para dados de menores em plataformas digitais, jogos, serviços educacionais e produtos de consumo.',
    },
    {
      icon: Scale,
      title: 'Responsabilidade Empresarial',
      desc: 'Responsabilização civil e administrativa direta de administradores e conselheiros por omissão na supervisão digital.',
    },
    {
      icon: AlertTriangle,
      title: 'Incidentes & Investigação',
      desc: 'Notificação tempestiva e fundamentação pericial técnica durante vazamentos confirmados de dados pessoais.',
    },
    {
      icon: Lock,
      title: 'Segurança em Plataformas e IA',
      desc: 'Mitigação de riscos em algoritmos de direcionamento, profiling indevido e automações que utilizam bases de titulares.',
    },
    {
      icon: Eye,
      title: 'Risco Jurídico e Reputacional',
      desc: 'Prevenção contra ações civis públicas, multas de até R$ 50 milhões por infração e perda de valor de marca.',
    },
  ];

  return (
    <div className="py-12 md:py-20 bg-paper-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="border-b border-paper-300 pb-8 space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-brand-red">
            Direito Digital & Governança Regulatória
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark">
            LGPD e ECA Digital
          </h1>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl leading-relaxed">
            A proteção de dados e a salvaguarda de crianças e adolescentes no ambiente digital deixaram de ser atribuições exclusivas do departamento de TI. Trata-se de um pilar estratégico da governança corporativa.
          </p>
        </div>

        {/* Executive Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white p-6 rounded-lg border border-paper-300 shadow-sm space-y-3 hover:border-brand-red/40 transition-colors"
              >
                <div className="w-10 h-10 rounded bg-brand-red-subtle text-brand-red flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-dark">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Articles Section */}
        <div className="space-y-6 pt-6">
          <h2 className="font-serif text-3xl font-bold text-brand-dark">
            Análises e Artigos sobre LGPD e ECA Digital
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="pt-8">
          <NewsletterForm
            title="Acompanhe novidades sobre LGPD e ECA Digital"
            subtitle="Receba análises regulatórias e atualizações diretas para o DPO, Jurídico e Board."
          />
        </div>

      </div>
    </div>
  );
}
