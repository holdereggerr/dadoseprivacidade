import React from 'react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Image from 'next/image';
import { ShieldCheck, Target, HeartHandshake, Award } from 'lucide-react';

export const metadata = {
  title: 'Sobre a Iniciativa | Dados & Privacidade',
  description: 'Conheça o Dados & Privacidade, iniciativa independente de informação e capacitação sobre LGPD e ECA Digital para pequenas e médias empresas.',
};

export default function SobrePage() {
  return (
    <div className="py-8 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <Breadcrumbs items={[{ label: 'Sobre Nós' }]} />

        {/* Hero Banner */}
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
              <Image 
                src="/Dados_Privacidade_horizontal_vetor.svg" 
                alt="Dados & Privacidade" 
                width={260} 
                height={65} 
                className="h-12 w-auto object-contain" 
              />
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-brand-navy">
            Sobre o Dados & Privacidade
          </h1>

          <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-sans max-w-2xl mx-auto">
            Apoio prático e técnico em linguagem clara para ajudar proprietários, gestores e equipes de PMEs a reconhecer riscos, fazer escolhas fundamentadas e avançar com segurança.
          </p>
        </div>

        {/* Pillars */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 space-y-8 shadow-card">
          <h2 className="text-2xl font-bold font-display text-brand-navy">
            Nossos Compromissos Fundamentais
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <div className="p-2.5 bg-brand-teal text-white rounded-xl w-fit">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-brand-navy">Foco na Aplicação Prática</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Conteúdo voltado à tomada de decisões, mapeamento de processos e governança proporcional para PMEs.
              </p>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <div className="p-2.5 bg-brand-teal text-white rounded-xl w-fit">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-bold font-display text-brand-navy">Fontes Primárias Verificadas</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Análises fundamentadas nos textos legais vigentes (LGPD, ECA Digital) e nos guias oficiais da ANPD.
              </p>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <div className="p-2.5 bg-brand-teal text-white rounded-xl w-fit">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display text-brand-navy">Linguagem Clara e Objetiva</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Traduzimos termos jurídicos e técnicos para a realidade das rotinas administrativas e operacionais.
              </p>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <div className="p-2.5 bg-brand-teal text-white rounded-xl w-fit">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-bold font-display text-brand-navy">Sem Alarmismo ou Selos Fictícios</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Informação séria, independente e sem promessas vazias de conformidade milagrosa.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
