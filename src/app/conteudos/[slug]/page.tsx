import React from 'react';
import { notFound } from 'next/navigation';
import { mockArticles } from '@/data/articles';
import EditorialBody from '@/components/content/EditorialBody';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import StructuredData from '@/components/seo/StructuredData';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return mockArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = mockArticles.find((a) => a.slug === slug);
  if (!article) return { title: 'Conteúdo Não Encontrado | Dados & Privacidade' };

  return {
    title: `${article.title} | Dados & Privacidade`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      images: ['/Dados_Privacidade_horizontal_vetor.svg'],
      type: 'article',
    },
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = mockArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.summary,
    image: 'https://dadoseprivacidade.com.br/Dados_Privacidade_horizontal_vetor.svg',
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      '@type': 'Organization',
      name: article.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dados & Privacidade',
      logo: {
        '@type': 'ImageObject',
        url: 'https://dadoseprivacidade.com.br/Dados_Privacidade_horizontal_vetor.svg',
      },
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: 'https://dadoseprivacidade.com.br',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Conteúdos',
        item: 'https://dadoseprivacidade.com.br/conteudos',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `https://dadoseprivacidade.com.br/conteudos/${article.slug}`,
      },
    ],
  };

  const relatedArticles = mockArticles.filter((a) => a.slug !== article.slug);

  return (
    <div className="py-8 sm:py-14 bg-slate-50 min-h-screen">
      <StructuredData data={[articleSchema, breadcrumbSchema]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs
          items={[
            { label: 'Início', href: '/' },
            { label: 'Artigos', href: '/#temas' },
            { label: article.title },
          ]}
        />

        <EditorialBody item={article} />

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="pt-12 border-t border-slate-200 space-y-6">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-brand-teal" />
              <h2 className="text-xl font-bold font-display text-brand-navy">
                Outros Guias e Análises Relacionadas
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <div key={rel.id} className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-card hover:border-brand-teal transition-all">
                  <span className="text-[11px] font-bold text-brand-teal bg-brand-teal-light px-2.5 py-0.5 rounded-full">
                    {rel.category}
                  </span>
                  <h3 className="text-base font-bold font-display text-brand-navy leading-snug">
                    <Link href={`/conteudos/${rel.slug}`} className="hover:text-brand-teal">
                      {rel.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{rel.summary}</p>
                  <Link
                    href={`/conteudos/${rel.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-teal hover:underline pt-1"
                  >
                    Ler este guia <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
