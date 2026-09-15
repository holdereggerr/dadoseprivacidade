import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CASE_STUDIES } from '@/data/cases';
import { Badge } from '@/components/ui/Badge';
import { NewsletterForm } from '@/components/briefing/NewsletterForm';
import { ShieldAlert, ArrowRight, FileSearch, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Casos Reais & Análises Forenses | perito.tec.br',
  description: 'Análise metodológica de incidentes cibernéticos reais, fragilidades operacionais, evidências determinantes e lições para executivos.',
};

export default function CasesPage() {
  return (
    <div className="py-12 md:py-20 bg-paper-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="border-b border-paper-300 pb-8 space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-brand-red">
            Central de Estudos & Casos Reais
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark">
            Casos e Incidentes Analisados
          </h1>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl leading-relaxed">
            Análises objetivas e estruturadas de ocorrências reais sem sensacionalismo. Foco na identificação de fragilidades, preservação de evidências e lições para a governança corporativa.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="space-y-8">
          {CASE_STUDIES.map((caseStudy) => (
            <article
              key={caseStudy.id}
              className="bg-white rounded-xl border border-paper-300 p-8 md:p-10 shadow-sm hover:border-brand-red/40 transition-colors space-y-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-paper-200 pb-4">
                <div className="flex items-center gap-3">
                  <Badge category={caseStudy.category} />
                  <span className="text-xs font-medium text-gray-500 flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-gray-400" />
                    Setor: {caseStudy.industry}
                  </span>
                </div>
                <time className="text-xs text-gray-400">
                  Análise publicada em {new Date(caseStudy.publishedAt).toLocaleDateString('pt-BR')}
                </time>
              </div>

              <div className="space-y-3">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-dark hover:text-brand-red transition-colors">
                  <Link href={`/casos/${caseStudy.slug}`}>
                    {caseStudy.title}
                  </Link>
                </h2>
                <p className="font-serif text-base text-gray-700 italic border-l-2 border-brand-red pl-3">
                  {caseStudy.subtitle}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {caseStudy.summary}
                </p>
              </div>

              {/* Quick Summary Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 bg-paper-50 p-6 rounded-lg border border-paper-200">
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-brand-red flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4" />
                    Onde Estava a Fragilidade
                  </h3>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {caseStudy.content.ondeEstavaAFragilidade}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-brand-dark flex items-center gap-1.5">
                    <FileSearch className="w-4 h-4" />
                    Lição Estratégica
                  </h3>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {caseStudy.content.liçãoParaOrganizacoes}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <Link
                  href={`/casos/${caseStudy.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-red hover:text-brand-red-dark transition-colors"
                >
                  <span>Ver análise pericial completa</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Form */}
        <div className="pt-8">
          <NewsletterForm
            title="Receba nossos estudos de caso em primeira mão"
            subtitle="Análises exclusivas sobre vulnerabilidades e incidentes corporativos."
          />
        </div>

      </div>
    </div>
  );
}
