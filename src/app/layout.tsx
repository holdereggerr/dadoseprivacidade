import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SchemaOrg } from '@/components/ui/SchemaOrg';

export const metadata: Metadata = {
  metadataBase: new URL('https://perito.tec.br'),
  title: 'Computação Forense e Resiliência Digital | perito.tec.br',
  description: 'Computação forense, IA, incidentes digitais, LGPD e ECA Digital, fraudes e resiliência explicados para executivos e empresas.',
  keywords: [
    'computação forense corporativa',
    'perícia digital',
    'forensic readiness',
    'evidência digital',
    'investigação digital',
    'resiliência digital',
    'resposta a incidentes',
    'governança de IA',
    'Shadow AI',
    'LGPD e ECA Digital',
    'cyber risk',
  ],
  authors: [{ name: 'perito.tec.br' }],
  creator: 'perito.tec.br',
  publisher: 'perito.tec.br',
  openGraph: {
    title: 'Computação Forense e Resiliência Digital | perito.tec.br',
    description: 'Computação forense, IA, incidentes digitais, LGPD e ECA Digital, fraudes e resiliência explicados para executivos e empresas.',
    url: 'https://perito.tec.br',
    siteName: 'perito.tec.br',
    images: [
      {
        url: 'https://perito.tec.br/logo.png',
        width: 1200,
        height: 630,
        alt: 'perito.tec.br - Computação Forense e Resiliência Digital',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computação Forense e Resiliência Digital | perito.tec.br',
    description: 'Computação forense, IA, incidentes digitais, LGPD e ECA Digital, fraudes e resiliência explicados para executivos e empresas.',
    images: ['https://perito.tec.br/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'perito.tec.br',
    url: 'https://perito.tec.br',
    logo: 'https://perito.tec.br/logo.png',
    description: 'Plataforma editorial e consultiva especializada em computação forense, resiliência digital, governança de IA e risco cibernético para empresas e conselhos de administração.',
    sameAs: [],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'perito.tec.br',
    url: 'https://perito.tec.br',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://perito.tec.br/artigos?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-paper-100 text-brand-dark antialiased selection:bg-brand-red selection:text-white">
        <SchemaOrg schema={[organizationSchema, websiteSchema]} />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
