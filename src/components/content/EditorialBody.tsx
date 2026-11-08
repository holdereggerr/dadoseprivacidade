'use client';

import React from 'react';
import { ArticleItem } from '@/data/articles';
import { CheckCircle2, ShieldCheck, ExternalLink, BookOpen, Scale, AlertTriangle, Info, Clock, UserCheck } from 'lucide-react';
import ShareButtons from '@/components/ui/ShareButtons';
import Link from 'next/link';

interface EditorialBodyProps {
  item: ArticleItem;
}

export default function EditorialBody({ item }: EditorialBodyProps) {
  return (
    <article className="max-w-4xl mx-auto space-y-10 text-brand-dark">
      
      {/* 1. Header Metadata */}
      <header className="space-y-4 pb-6 border-b border-brand-border">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="px-3 py-1 bg-brand-teal-light text-brand-teal font-bold rounded-full">
            {item.category}
          </span>
          <span className="px-3 py-1 bg-slate-100 text-slate-700 font-semibold rounded-full">
            {item.format} • {item.level}
          </span>
          <span className="text-slate-500">
            Publicado em {item.publishedAt}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-brand-navy leading-tight">
          {item.title}
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-sans">
          {item.summary}
        </p>

        {/* Authors & Reviewers Info */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600 border-t border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-xs">
              DP
            </div>
            <div>
              <span className="block font-bold text-slate-800">{item.author.name}</span>
              <span>{item.author.role}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 bg-brand-teal-light/70 border border-brand-teal/30 rounded-lg text-brand-navy">
            <ShieldCheck className="w-4 h-4 text-brand-teal flex-shrink-0" />
            <div>
              <span className="font-semibold block">{item.verificationStatus}</span>
              <span className="text-[10px] text-slate-600">{item.primarySource}</span>
            </div>
          </div>
        </div>

        <ShareButtons title={item.title} />
      </header>

      {/* 2. Resumo em Pontos Rápidos */}
      <section className="p-6 bg-brand-navy text-white rounded-2xl space-y-3 shadow-md">
        <h2 className="text-xs font-bold text-brand-gold uppercase tracking-wider font-display flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-brand-gold" />
          Destaques em 3 Pontos
        </h2>
        <ul className="space-y-2.5 text-sm sm:text-base text-slate-200">
          {item.summaryPoints.map((pt, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="w-6 h-6 bg-brand-teal text-white rounded-full flex items-center justify-center text-xs font-bold font-display flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 3. Por Que Importa */}
      <section className="p-6 bg-slate-100 border-l-4 border-brand-teal rounded-r-xl space-y-2">
        <h2 className="text-xs font-bold text-brand-navy font-display uppercase tracking-wider">
          Por Que Importa para a Sua Empresa
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
          {item.whyItMatters}
        </p>
      </section>

      {/* 4. Enquadramento Legal */}
      <section className="p-6 bg-amber-50/80 border border-amber-200 rounded-xl space-y-2">
        <h3 className="text-sm font-bold text-amber-900 font-display flex items-center gap-2">
          <Scale className="w-4 h-4 text-amber-700" />
          Enquadramento & Base Legal
        </h3>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          {item.legalContext}
        </p>
      </section>

      {/* 5. Corpo do Artigo / Boneco Editorial */}
      <section className="prose prose-slate max-w-none space-y-6">
        <div className="text-sm sm:text-base text-slate-800 leading-relaxed space-y-4 whitespace-pre-line bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-subtle">
          {item.body}
        </div>
      </section>

      {/* 6. Aplicação Prática Recomendada */}
      <section className="p-6 bg-teal-950 text-white rounded-2xl space-y-3 shadow-md border border-brand-teal/40">
        <h2 className="text-xs font-bold text-brand-teal font-display uppercase tracking-wider flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-brand-teal" />
          Aplicação Prática Recomendada
        </h2>
        <p className="text-sm sm:text-base text-teal-100 leading-relaxed">
          {item.practicalApplication}
        </p>
      </section>

      {/* 7. Limitações e Aviso */}
      <section className="p-5 bg-slate-100 border border-slate-300 rounded-xl space-y-2 text-xs text-slate-600">
        <div className="flex items-center gap-2 font-bold text-brand-navy uppercase tracking-wider text-[11px]">
          <Info className="w-4 h-4 text-brand-navy" />
          Aviso Editorial & Escopo do Material
        </div>
        <p className="leading-relaxed">
          {item.limitationsAndNotice}
        </p>
      </section>

      {/* 8. Fontes Verificadas */}
      <section className="p-6 bg-white border border-slate-200 rounded-2xl space-y-4 shadow-subtle">
        <h2 className="text-sm font-bold text-brand-navy font-display flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-brand-teal" />
          Fontes Primárias & Legislação Citada
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {item.sources.map((src, i) => (
            <a
              key={i}
              href={src.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-50 border border-slate-200 hover:border-brand-teal rounded-xl flex items-center justify-between text-xs transition-colors"
            >
              <div>
                <span className="font-bold text-slate-800 block">{src.title}</span>
                <span className="text-slate-500">{src.publisher}</span>
              </div>
              <ExternalLink className="w-4 h-4 text-brand-teal flex-shrink-0" />
            </a>
          ))}
        </div>
      </section>

      {/* 9. Editorial Disclaimer Footer Box */}
      <footer className="p-6 bg-brand-navy text-slate-300 rounded-2xl space-y-3 text-xs border border-slate-700">
        <div className="flex items-center gap-2 text-brand-teal font-bold font-display uppercase tracking-wider">
          <UserCheck className="w-4 h-4 text-brand-teal" />
          Responsabilidade Editorial
        </div>
        <p className="leading-relaxed text-slate-300">
          Este conteúdo foi elaborado pela equipe editorial técnica do <strong>Dados & Privacidade</strong> com rigor de checagem em fontes primárias normativas.
        </p>
        <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-800">
          Transparência: Dúvidas ou sugestões de correções podem ser enviadas em nossa{' '}
          <Link href="/politica-editorial" className="text-brand-teal underline font-semibold hover:text-white">
            Política Editorial
          </Link>.
        </p>
      </footer>

    </article>
  );
}
