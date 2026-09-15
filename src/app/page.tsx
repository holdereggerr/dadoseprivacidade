import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { ExecWhatToKnowSection } from '@/components/home/ExecWhatToKnowSection';
import { ForensicReadinessSection } from '@/components/home/ForensicReadinessSection';
import { DigitalResilienceSection } from '@/components/home/DigitalResilienceSection';
import { IAShadowAISection } from '@/components/home/IAShadowAISection';
import { NewsletterForm } from '@/components/briefing/NewsletterForm';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ExecWhatToKnowSection />
      <ForensicReadinessSection />
      <DigitalResilienceSection />
      <IAShadowAISection />

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterForm
            title="Inscreva-se no Executive Digital Risk Briefing"
            subtitle="Receba análises estratégicas direto no seu e-mail corporativo"
          />
        </div>
      </section>
    </div>
  );
}
