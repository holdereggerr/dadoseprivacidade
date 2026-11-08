import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import InstitutionalSection from '@/components/home/InstitutionalSection';
import EntryPointsSection from '@/components/home/EntryPointsSection';
import HowItHelpsSection from '@/components/home/HowItHelpsSection';
import EditorialThemesSection from '@/components/home/EditorialThemesSection';
import NewsletterFormSection from '@/components/home/NewsletterFormSection';
import OfferingsRoadmapSection from '@/components/home/OfferingsRoadmapSection';
import TrustTransparencySection from '@/components/home/TrustTransparencySection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1 & 2. HERO */}
      <HeroSection />

      {/* 3. APRESENTAÇÃO INSTITUCIONAL */}
      <InstitutionalSection />

      {/* 4. PORTAS DE ENTRADA */}
      <EntryPointsSection />

      {/* 5. COMO O PORTAL AJUDA */}
      <HowItHelpsSection />

      {/* 6. TEMAS EDITORIAIS & CONTEÚDOS */}
      <EditorialThemesSection />

      {/* Secondary Newsletter Invitation Strip */}
      <NewsletterFormSection variant="secondary" />

      {/* 8. MATERIAIS E CAPACITAÇÃO */}
      <OfferingsRoadmapSection />

      {/* 9. CONFIANÇA E TRANSPARÊNCIA */}
      <TrustTransparencySection />

      {/* 7. NEWSLETTER — CONVERSÃO PRINCIPAL */}
      <NewsletterFormSection variant="main" />
    </div>
  );
}
