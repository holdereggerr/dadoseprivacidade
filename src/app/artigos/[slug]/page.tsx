import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { INITIAL_ARTICLES } from '@/data/articles';
import { Badge } from '@/components/ui/Badge';
import { ShareButtons } from '@/components/articles/ShareButtons';
import { ArticleCard } from '@/components/articles/ArticleCard';
import { NewsletterForm } from '@/components/briefing/NewsletterForm';
import { SchemaOrg } from '@/components/ui/SchemaOrg';
import { Clock, Calendar, User, HelpCircle, ExternalLink, ArrowLeft, ShieldAlert } from 'lucide-react';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INITIAL_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = INITIAL_ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: 'Artigo não encontrado | perito.tec.br' };

  return {
    title: `${article.title} | perito.tec.br`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://perito.tec.br/artigos/${article.slug}`,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
    },
  };
}

export default async function ArticleSlugPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = INITIAL_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = INITIAL_ARTICLES.filter(
    (a) => a.slug !== article.slug && (a.category === article.category || a.isMustRead)
  ).slice(0, 3);

  const articleUrl = `https://perito.tec.br/artigos/${article.slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.summary,
    author: {
      '@type': 'Organization',
      name: article.author.name,
      url: 'https://perito.tec.br/sobre',
    },
    publisher: {
      '@type': 'Organization',
      name: 'perito.tec.br',
      logo: {
        '@type': 'ImageObject',
        url: 'https://perito.tec.br/logo.png',
      },
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: articleUrl,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://perito.tec.br' },
      { '@type': 'ListItem', position: 2, name: 'Artigos', item: 'https://perito.tec.br/artigos' },
      { '@type': 'ListItem', position: 3, name: article.title, item: articleUrl },
    ],
  };

  return (
    <article className="py-12 md:py-20 bg-paper-100 min-h-screen">
      <SchemaOrg schema={[articleSchema, breadcrumbSchema]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Back Link */}
        <div>
          <Link
            href="/artigos"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-gray-600 hover:text-brand-red transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para todas as análises</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-6 border-b border-paper-300 pb-8">
          <div className="flex flex-wrap items-center gap-3">
            <Badge category={article.category} size="md" />
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readingTimeMinutes} minutos de leitura
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
            {article.title}
          </h1>

          <p className="font-serif text-lg md:text-xl text-gray-700 leading-relaxed italic border-l-2 border-brand-red pl-4">
            {article.subtitle}
          </p>

          {/* Author & Date Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 text-xs text-gray-500 border-t border-paper-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center font-bold">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-brand-dark">{article.author.name}</div>
                  <div className="text-[11px] text-gray-500">{article.author.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Publicado em {new Date(article.publishedAt).toLocaleDateString('pt-BR')}</span>
              </div>
            </div>

            <ShareButtons title={article.title} url={articleUrl} />
          </div>
        </header>

        {/* Editorial Body Content */}
        <div className="bg-white p-8 md:p-12 rounded-xl border border-paper-300 shadow-sm space-y-10 text-gray-800 leading-relaxed">
          
          {/* O que aconteceu */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-brand-dark flex items-center gap-2">
              <span className="w-2 h-6 bg-brand-red rounded-full" />
              O que aconteceu
            </h2>
            <p className="text-base text-gray-700">{article.content.oQueAconteceu}</p>
          </section>

          {/* O que isso significa */}
          <section className="space-y-3 pt-6 border-t border-paper-200">
            <h2 className="font-serif text-2xl font-bold text-brand-dark flex items-center gap-2">
              <span className="w-2 h-6 bg-brand-red rounded-full" />
              O que isso significa
            </h2>
            <p className="text-base text-gray-700">{article.content.oQueIssoSignifica}</p>
          </section>

          {/* Por que isso importa para empresas */}
          <section className="space-y-3 pt-6 border-t border-paper-200">
            <h2 className="font-serif text-2xl font-bold text-brand-dark flex items-center gap-2">
              <span className="w-2 h-6 bg-brand-red rounded-full" />
              Por que isso importa para empresas
            </h2>
            <p className="text-base text-gray-700">{article.content.porQueIssoImporta}</p>
          </section>

          {/* Qual é o risco */}
          <section className="space-y-3 pt-6 border-t border-paper-200 bg-red-50/50 p-6 rounded-lg border border-red-100">
            <h2 className="font-serif text-2xl font-bold text-brand-red flex items-center gap-2">
              <ShieldAlert className="w-6 h-6 text-brand-red" />
              Qual é o risco
            </h2>
            <p className="text-base text-gray-800 font-medium">{article.content.qualEORisco}</p>
          </section>

          {/* O que deveria ter sido preparado antes */}
          <section className="space-y-3 pt-6 border-t border-paper-200">
            <h2 className="font-serif text-2xl font-bold text-brand-dark flex items-center gap-2">
              <span className="w-2 h-6 bg-brand-red rounded-full" />
              O que deveria ter sido preparado antes
            </h2>
            <p className="text-base text-gray-700">{article.content.oQueDeveriaTerSidoPreparado}</p>
          </section>

          {/* O que fazer agora */}
          <section className="space-y-3 pt-6 border-t border-paper-200">
            <h2 className="font-serif text-2xl font-bold text-brand-dark flex items-center gap-2">
              <span className="w-2 h-6 bg-brand-red rounded-full" />
              O que fazer agora
            </h2>
            <p className="text-base text-gray-700">{article.content.oQueFazerAgora}</p>
          </section>

          {/* Perguntas para CEO, CFO, CIO e Board */}
          <section className="space-y-4 pt-6 border-t border-paper-200 bg-paper-50 p-6 rounded-lg border border-paper-300">
            <div className="flex items-center gap-2 text-brand-red font-bold text-sm uppercase tracking-wider">
              <HelpCircle className="w-5 h-5" />
              <span>Perguntas para CEO, CFO, CIO e Board</span>
            </div>
            <ul className="space-y-3">
              {article.content.perguntasParaExecutivos.map((pergunta, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-brand-dark font-medium leading-snug">
                  <span className="w-6 h-6 rounded-full bg-brand-dark text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span>{pergunta}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Fontes e Referências */}
          {article.content.fontesEReferencias && article.content.fontesEReferencias.length > 0 && (
            <section className="space-y-3 pt-6 border-t border-paper-200">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-gray-500">
                Fontes e Referências Técnicas
              </h3>
              <ul className="space-y-2 text-xs text-gray-600">
                {article.content.fontesEReferencias.map((fonte, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <ExternalLink className="w-3.5 h-3.5 text-brand-red shrink-0" />
                    <span>{fonte.title}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

        </div>

        {/* Author Bio Box */}
        <div className="bg-white p-6 rounded-lg border border-paper-300 flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-brand-dark text-white flex items-center justify-center font-bold text-lg shrink-0">
            <User className="w-6 h-6" />
          </div>
          <div className="space-y-1 text-xs">
            <h4 className="font-bold text-sm text-brand-dark">{article.author.name}</h4>
            <p className="text-brand-red font-medium">{article.author.role}</p>
            <p className="text-gray-600 leading-relaxed pt-1">{article.author.bio}</p>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="space-y-6 pt-6 border-t border-paper-300">
            <h3 className="font-serif text-2xl font-bold text-brand-dark">
              Artigos Relacionados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <ArticleCard key={rel.id} article={rel} compact />
              ))}
            </div>
          </section>
        )}

        {/* Form */}
        <div className="pt-6">
          <NewsletterForm
            title="Receba as próximas análises executivas"
            subtitle="Mantenha sua liderança atualizada sobre resiliência digital e perícia corporativa."
          />
        </div>

      </div>
    </article>
  );
}
