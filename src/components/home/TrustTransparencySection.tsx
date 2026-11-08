'use client';

import React from 'react';
import Image from 'next/image';
import { 
  ShieldCheck, 
  UserCheck, 
  BookOpenCheck, 
  Calendar, 
  Scale, 
  RefreshCw, 
  FileWarning, 
  Award,
  CheckCircle
} from 'lucide-react';

export default function TrustTransparencySection() {
  const commitments = [
    {
      title: 'Identificação de autoria',
      desc: 'Todo texto publicado conta com autoria responsável declarada e revisão por profissionais qualificados.',
      icon: UserCheck,
    },
    {
      title: 'Fontes primárias verificáveis',
      desc: 'Referenciamos diretamente o texto legal (LGPD, ECA Digital) e os manuais oficiais da ANPD.',
      icon: BookOpenCheck,
    },
    {
      title: 'Datas de publicação e atualização',
      desc: 'Indicamos claramente quando o material foi redigido e a data da última revisão de conteúdo.',
      icon: Calendar,
    },
    {
      title: 'Clareza de enquadramento',
      desc: 'Distinguimos expressamente o que é obrigação legal imperativa, interpretação técnica e sugestão de boa prática.',
      icon: Scale,
    },
    {
      title: 'Correção transparente',
      desc: 'Registramos retificações ou atualizações normativas com aviso claro de histórico no próprio texto.',
      icon: RefreshCw,
    },
    {
      title: 'Delimitação de escopo',
      desc: 'Evidenciamos que nossos guias gerais não substituem pareceres ou diagnósticos técnicos customizados.',
      icon: FileWarning,
    },
  ];

  return (
    <section id="transparencia" className="py-16 sm:py-24 bg-slate-50 border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-teal-light px-3 py-1 rounded-full">
            Independência & Rigor Editorial
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy font-display">
            Como produzimos nosso conteúdo
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Nossos compromissos de transparência para que sua empresa possa confiar nas informações disponibilizadas no portal.
          </p>
        </div>

        {/* 6 Editorial Commitments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {commitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-card hover:border-brand-teal/50 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-brand-teal-light text-brand-teal">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-brand-navy font-display">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Block: "Quem está por trás do portal" (Editable Editorial Card) */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-card">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 lg:gap-8">
            
            {/* Symbol Icon Avatar Container */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-brand-navy p-4 flex items-center justify-center shadow-md relative overflow-hidden border border-brand-teal">
                <Image
                  src="/Dados_Privacidade_simbolo.svg"
                  alt="Dados & Privacidade Símbolo"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Editable Content Fields */}
            <div className="space-y-4 text-center md:text-left flex-grow">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
                  Curadoria & Edição Técnica
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-navy font-display">
                  Equipe Editorial Dados & Privacidade
                </h3>
                <p className="text-xs font-semibold text-slate-500">
                  Profissionais de Governança de Dados, Tecnologia e Segurança da Informação
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                O portal é mantido por uma equipe de especialistas independentes focados em traduzir os desafios da Lei Geral de Proteção de Dados (LGPD) e do ECA Digital (Lei nº 15.211/2025) para a realidade prática de proprietários, gestores e colaboradores de PMEs brasileiras.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-2 text-[11px] text-slate-600">
                <span className="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-teal" />
                  Pesquisa Verificada
                </span>
                <span className="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-teal" />
                  Alinhado com a ANPD
                </span>
                <span className="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-teal" />
                  Sem Interesses Comerciais Ocultos
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
