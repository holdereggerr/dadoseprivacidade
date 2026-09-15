import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CASE_STUDIES } from '@/data/cases';
import { Badge } from '@/components/ui/Badge';
import { NewsletterForm } from '@/components/briefing/NewsletterForm';
import { SchemaOrg } from '@/components/ui/SchemaOrg';
import { ArrowLeft, Building2, CheckCircle2, ShieldAlert, FileCheck2 } from 'lucide-react';

interface CasePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: CasePageProps) {
  const { slug } = await params;
  const caseStudy = CASE_STUDIES.find((c) => c.slug === slug);
  if (!caseStudy) return { title: 'Caso não encontrado | perito.tec.br' };

  return {
    title: `${caseStudy.title} | perito.tec.br`,
    description: caseStudy.summary,
  };
}

export default async function CaseSlugPage({ params }: CasePageProps) {
  const { slug } = await params;
  const caseStudy = CASE_STUDIES.find((c) => c.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  const caseUrl = `https://perito.tec.br/casos/${caseStudy.slug}`;

  const caseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseStudy.title,
    description: caseStudy.summary,
    publisher: {
      '@type': 'Organization',
      name: 'perito.tec.br',
    },
    datePublished: caseStudy.publishedAt,
    mainEntityOfPage: caseUrl,
  };

  return (
    <article className="py-12 md:py-20 bg-paper-100 min-h-screen">
      <SchemaOrg schema={caseSchema} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div>
          <Link
            href="/casos"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-gray-600 hover:text-brand-red transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para a central de casos</span>
          </Link>
        </div>

        <header className="space-y-6 border-b border-paper-300 pb-8">
          <div className="flex flex-wrap items-center gap-3">
            <Badge category={caseStudy.category} size="md" />
            <span className="text-xs text-gray-500 flex items-center gap-1 font-medium">
              <Building2 className="w-4 h-4 text-gray-400" />
              Setor: {caseStudy.industry}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
            {caseStudy.title}
          </h1>

          <p className="font-serif text-lg text-gray-700 leading-relaxed italic border-l-2 border-brand-red pl-4">
            {caseStudy.subtitle}
          </p>
        </header>

        {/* Structured Case Details */}
        <div className="bg-white p-8 md:p-12 rounded-xl border border-paper-300 shadow-sm space-y-10 text-gray-800 leading-relaxed">
          
          {/* O que aconteceu */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-brand-dark flex items-center gap-2">
              <span className="w-2 h-6 bg-brand-red rounded-full" />
              O que aconteceu
            </h2>
            <p className="text-base text-gray-700">{caseStudy.content.oQueAconteceu}</p>
          </section>

          {/* Onde estava a fragilidade */}
          <section className="space-y-3 pt-6 border-t border-paper-200 bg-red-50/40 p-6 rounded-lg border border-red-100">
            <h2 className="font-serif text-2xl font-bold text-brand-red flex items-center gap-2">
              <ShieldAlert className="w-6 h-6 text-brand-red" />
              Onde estava a fragilidade
            </h2>
            <p className="text-base text-gray-800 font-medium">{caseStudy.content.ondeEstavaAFragilidade}</p>
          </section>

          {/* O que a empresa poderia ter preparado */}
          <section className="space-y-3 pt-6 border-t border-paper-200">
            <h2 className="font-serif text-2xl font-bold text-brand-dark flex items-center gap-2">
              <FileCheck2 className="w-6 h-6 text-brand-dark" />
              O que a empresa poderia ter preparado
            </h2>
            <p className="text-base text-gray-700">{caseStudy.content.oQueAEmpresaPoderiaTerPreparado}</p>
          </section>

          {/* Que evidências foram relevantes */}
          <section className="space-y-4 pt-6 border-t border-paper-200 bg-paper-50 p-6 rounded-lg border border-paper-300">
            <h2 className="font-serif text-2xl font-bold text-brand-dark flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-brand-red" />
              Que evidências foram determinantes na perícia
            </h2>
            <ul className="space-y-2.5">
              {caseStudy.content.queEvidenciasForamRelevantes.map((ev, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700 leading-relaxed font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 shrink-0" />
                  <span>{ev}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Qual a lição para outras organizações */}
          <section className="space-y-3 pt-6 border-t border-paper-200">
            <h2 className="font-serif text-2xl font-bold text-brand-dark flex items-center gap-2">
              <span className="w-2 h-6 bg-brand-dark rounded-full" />
              Lição para outras organizações
            </h2>
            <p className="text-base text-gray-800 font-serif italic border-l-2 border-brand-dark pl-4">
              &ldquo;{caseStudy.content.liçãoParaOrganizacoes}&rdquo;
            </p>
          </section>

        </div>

        {/* Form */}
        <div className="pt-6">
          <NewsletterForm
            title="Assine o Executive Briefing"
            subtitle="Receba análises de casos e resiliência digital diretamente na sua caixa de entrada."
          />
        </div>

      </div>
    </article>
  );
}
