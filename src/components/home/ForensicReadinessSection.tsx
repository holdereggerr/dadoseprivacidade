import React from 'react';
import Link from 'next/link';
import { Database, FileCheck2, Users, ShieldCheck, ArrowRight } from 'lucide-react';

export const ForensicReadinessSection: React.FC = () => {
  const blocks = [
    {
      icon: Database,
      title: 'Evidências',
      description: 'Logs de rede, registros de servidores, dispositivos móveis corporativos, ambientes em nuvem e políticas rígidas de retenção imutável de informações.',
    },
    {
      icon: FileCheck2,
      title: 'Processos',
      description: 'Procedimentos formais para preservar a cadeia de custódia e isolar a memória volátil sem formatar ou sobrescrever sistemas durante o incidente.',
    },
    {
      icon: Users,
      title: 'Pessoas',
      description: 'Definição estrita de responsabilidades entre TI, Segurança da Informação, Jurídico, RH, Assessoria de Imprensa e Alta Gestão.',
    },
    {
      icon: ShieldCheck,
      title: 'Preparação',
      description: 'Exercícios simulação de crise (Tabletop Exercises), revisão de planos de resposta a incidentes, continuidade operacional e teste de recuperação.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-paper-100 border-b border-paper-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-brand-red">
            Prontidão Forense Corporativa
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark">
            Sua empresa está preparada para ser investigada?
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            A maioria das organizações investe em prevenção. Poucas avaliam se possuem informações, registros, processos e responsabilidades suficientes para descobrir o que realmente aconteceu quando a prevenção falha.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blocks.map((block) => {
            const Icon = block.icon;
            return (
              <div
                key={block.title}
                className="bg-white rounded-lg p-6 border border-paper-300 shadow-sm space-y-4 hover:border-brand-red/40 transition-colors"
              >
                <div className="w-12 h-12 rounded bg-brand-red-subtle text-brand-red flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-dark">{block.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{block.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="pt-4 flex justify-start">
          <Link
            href="/computacao-forense"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-red hover:bg-brand-red-dark text-white text-xs uppercase tracking-wider font-semibold rounded transition-colors shadow-sm"
          >
            <span>Entenda o conceito de Forensic Readiness</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
