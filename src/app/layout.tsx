import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/ui/CookieBanner';
import StructuredData from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: {
    default: 'Dados & Privacidade — LGPD e ECA Digital para Pequenas e Médias Empresas',
    template: '%s | Dados & Privacidade',
  },
  description: 'Conhecimento confiável e prático sobre LGPD e ECA Digital para pequenas e médias empresas. Guias, análises e orientações para tomar decisões com segurança.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://dadoseprivacidade.com.br'),
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/Dados_Privacidade_simbolo.svg',
  },
  openGraph: {
    title: 'Dados & Privacidade — LGPD e ECA Digital para PMEs',
    description: 'Apoio prático e técnico em linguagem clara para gestores, proprietários e equipes aplicarem LGPD e ECA Digital sem alarmismo.',
    url: 'https://dadoseprivacidade.com.br',
    siteName: 'Dados & Privacidade',
    images: [
      {
        url: '/Dados_Privacidade_horizontal_vetor.svg',
        width: 1230,
        height: 350,
        alt: 'Dados & Privacidade — Logotipo Oficial',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dados & Privacidade — LGPD e ECA Digital para PMEs',
    description: 'Conhecimento confiável sobre LGPD e ECA Digital para transformar informação em ações concretas nas empresas.',
    images: ['/Dados_Privacidade_horizontal_vetor.svg'],
  },
  robots: {
    index: true,
    follow: true,
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
    name: 'Dados & Privacidade',
    url: 'https://dadoseprivacidade.com.br',
    logo: 'https://dadoseprivacidade.com.br/Dados_Privacidade_horizontal_vetor.svg',
    description: 'Iniciativa independente de informação, curadoria técnica e capacitação sobre LGPD e ECA Digital para PMEs.',
    sameAs: [],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Dados & Privacidade',
    url: 'https://dadoseprivacidade.com.br',
    inLanguage: 'pt-BR',
  };

  return (
    <html lang="pt-BR">
      <head>
        <StructuredData data={[organizationSchema, websiteSchema]} />
      </head>
      <body className="min-h-screen flex flex-col bg-brand-bg text-brand-dark font-sans antialiased selection:bg-brand-teal selection:text-white">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
