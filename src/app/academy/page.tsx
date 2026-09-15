import React from 'react';
import { Metadata } from 'next';
import { NewsletterForm } from '@/components/briefing/NewsletterForm';
import { GraduationCap, BookOpen, Users, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Academy | Formação Executiva em Resiliência e Perícia Digital | perito.tec.br',
  description: 'Programas executivos de capacitação, workshops de simulação de crise e seminários sobre governança de IA e resiliência digital.',
};

export default function AcademyPage() {
  const offerings = [
    {
      title: 'Cursos Executivos',
      subtitle: 'Formação Estruturada',
      status: 'Em breve',
      icon: BookOpen,
      desc: 'Módulos assíncronos e de imersão sobre Prontidão Forense (Forensic Readiness), Governança de IA Corporativa e Direito Digital Aplicado à Alta Gestão.',
    },
    {
      title: 'Workshops Executivos',
      subtitle: 'Simulação Prática (Tabletop)',
      status: 'Em breve',
      icon: Users,
      desc: 'Sessões exclusivas e fechadas para Diretorias e Conselhos de Administração simulando cenários reais de vazamento de dados, sequestro por ransomware e crises de Shadow AI.',
    },
    {
      title: 'Seminários & Painéis',
      subtitle: 'Debates & Tendências',
      status: 'Em breve',
      icon: Calendar,
      desc: 'Encontros com especialistas internacionais, peritos judiciais, advogados de tecnologia e líderes de governança debatendo regulação e novos riscos operacionais.',
    },
  ];

  return (
    <div className="py-12 md:py-20 bg-paper-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="border-b border-paper-300 pb-8 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-paper-300 rounded text-xs font-semibold text-brand-red uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-brand-red" />
            <span>Capacitação & Desenvolvimento Executivo</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark">
            perito.tec.br Academy
          </h1>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Desenvolvimento de visão estratégica para líderes que precisam tomar decisões fundamentadas em ambientes de alto risco digital.
          </p>
        </div>

        {/* 3 Offerings Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-xl p-8 border border-paper-300 shadow-sm flex flex-col justify-between space-y-6 hover:border-brand-red/40 transition-colors relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded bg-brand-dark text-white flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-brand-red bg-brand-red-subtle border border-brand-red/20 px-2.5 py-1 rounded">
                      <Clock className="w-3 h-3" />
                      {item.status}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-gray-500">{item.subtitle}</span>
                    <h3 className="font-serif text-2xl font-bold text-brand-dark mt-0.5">{item.title}</h3>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>

                <div className="pt-4 border-t border-paper-200 text-xs text-gray-500 italic">
                  Notificaremos os membros do Executive Briefing no lançamento.
                </div>
              </div>
            );
          })}
        </div>

        {/* Newsletter Registration */}
        <div className="pt-8">
          <NewsletterForm
            title="Seja avisado sobre as primeiras turmas da Academy"
            subtitle="Inscreva-se no briefing corporativo para receber prioridade na abertura de vagas."
          />
        </div>

      </div>
    </div>
  );
}
