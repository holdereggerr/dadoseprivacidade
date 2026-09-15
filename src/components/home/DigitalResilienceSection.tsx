import React from 'react';
import Link from 'next/link';
import { Clock, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';

export const DigitalResilienceSection: React.FC = () => {
  const phases = [
    {
      title: 'Antes do incidente',
      subtitle: 'Estruturação e Prontidão',
      icon: Clock,
      items: [
        'Definição clara de responsabilidades entre C-Level, TI, Jurídico e RH',
        'Preservação e retenção imutável de logs críticos (SIEM/Nuvem)',
        'Estabelecimento de critérios objetivos de escalonamento de crise',
        'Procedimentos operacionais de isolamento pré-homologados',
        'Treinamento e simulação periódica das equipes executivas',
      ],
    },
    {
      title: 'Durante o incidente',
      subtitle: 'Contenção e Preservação',
      icon: ShieldAlert,
      items: [
        'Isolamento imediato de redes e sistemas sem sobrescrever dados',
        'Preservação de memória volátil (RAM) e espelhamento bit-a-bit',
        'Comunicação coordenada e blindada sob orientação jurídica',
        'Registro minucioso de cada decisão técnica e operacional',
        'Acionamento rápido de peritos forenses externos homologados',
      ],
    },
    {
      title: 'Depois do incidente',
      subtitle: 'Investigação e Melhoria',
      icon: CheckCircle2,
      items: [
        'Investigação pericial detalhada para determinar a causa-raiz',
        'Reconstrução cronológica exata da linha do tempo dos fatos',
        'Análise de extensão de vazamento e obrigações regulatórias',
        'Documentação formal de provas para apólices de seguro e processos',
        'Implementação de novos controles operacionais e mitigação',
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-paper-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-4xl space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-brand-red">
            Resiliência Operacional & Investigação
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark">
            Recuperar a operação é fundamental. Preservar a capacidade de investigar também.
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Disaster recovery, continuidade de negócios e investigação forense precisam coexistir. Restaurar backups precipitadamente sem preservar as evidências destrói a capacidade da empresa de provar a autoria e acionar seguros.
          </p>
        </div>

        {/* 3 Columns Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase) => {
            const Icon = phase.icon;
            return (
              <div
                key={phase.title}
                className="bg-paper-50 rounded-lg p-6 border border-paper-300 flex flex-col justify-between space-y-6 hover:border-brand-red/40 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-brand-dark text-white flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-brand-dark">{phase.title}</h3>
                      <span className="text-xs font-semibold text-brand-red uppercase tracking-wider">{phase.subtitle}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 pt-2">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="pt-2">
          <Link
            href="/resiliencia-digital"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-red hover:text-brand-red-dark transition-colors"
          >
            <span>Aprofunde-se em estratégias de Resiliência Digital</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
