'use client';

import React from 'react';
import Image from 'next/image';

interface HeroLogoBadgeProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  showTagline?: boolean;
}

export default function HeroLogoBadge({
  size = 'hero',
  className = '',
  showTagline = false,
}: HeroLogoBadgeProps) {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    hero: 'w-64 h-64 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px]',
  };

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* Background glow effect for heroic energy */}
      <div 
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-hero-cyan/20 via-hero-blue/30 to-hero-gold/20 blur-3xl opacity-70 animate-pulse pointer-events-none"
        aria-hidden="true"
      />
      
      {/* Container for logo image preserving original aspect ratio */}
      <div className={`relative ${sizeClasses[size]} transition-transform duration-300 hover:scale-[1.02]`}>
        <Image
          src="/logo-herois.jpg"
          alt="Logotipo Heróis da IA — Escudo Dourado e Herói da Inteligência Artificial"
          fill
          priority={size === 'hero'}
          sizes="(max-width: 768px) 320px, 420px"
          className="object-contain drop-shadow-2xl"
        />
      </div>

      {showTagline && (
        <span className="mt-3 text-xs uppercase tracking-wider font-semibold text-hero-cyan bg-hero-navy/80 border border-hero-cyan/30 px-3 py-1 rounded-full shadow-sm">
          Comunidade & Educacional
        </span>
      )}
    </div>
  );
}
