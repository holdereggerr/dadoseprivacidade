import React from 'react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { Search, ShieldCheck, UserCheck, RefreshCw, FileText } from 'lucide-react';

export const metadata = {
  title: 'Como Produzimos — Metodologia Editorial Heróis da IA',
  description: 'Conheça o processo de 4 etapas que combina automação assistida de pesquisa e revisão humana rigorosa para garantir conteúdos confiáveis.',
};

export default function ComoProduzimosPage() {
  const methodologySteps = [
    {
      step: '1. Monitoramento Multifuente',
      desc: 'Rastreamos mais de 50 fontes globais por dia (arXiv, GitHub, releases da OpenAI, Anthropic, Google, ANPD, MIT Tech Review e HBR).'
    },
    {
      step: '2. Síntese e Desduplicação com IA',
      desc: 'Agrupamos os temas emergentes e identificamos contradições ou divergências entre comunicados de imprensa e código real.'
    },
    {
      step: '3. Teste em Sandbox e Revisão por Especialista',
      desc: 'Um revisor humano sênior testa o caso de uso e valida se a promessa do software é real ou mero marketing.'
    },
    {
      step: '4. Redação em Linguagem Clara e Publicação',
      desc: 'O texto é formatado em 3 pontos rápidos, com indicação clara de fontes, limitações, riscos e o bloco obrigatório de Disclosure de IA.'
    }
  ];

  return (
    <div className="py-8 sm:py-16 bg-hero-offwhite min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <Breadcrumbs items={[{ label: 'Como Produzimos' }]} />

        {/* Intro */}
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-hero-blue font-display">
            Transparência Total
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-hero-navy">
            Nosso Processo de Curadoria & Verificação
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Acreditamos que a inteligência artificial é uma excelente ferramenta de pesquisa, mas nunca a substituta final da responsabilidade e análise editorial humana.
          </p>
        </div>

        {/* Steps List */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
          <h2 className="text-2xl font-bold font-display text-hero-navy">
            As 4 Etapas da Produção Editorial
          </h2>

          <div className="space-y-4">
            {methodologySteps.map((m, idx) => (
              <div key={idx} className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-1">
                <h3 className="text-base font-bold font-display text-hero-blue">{m.step}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
