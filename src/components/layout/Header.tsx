'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Mail } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'LGPD', href: '#lgpd' },
    { name: 'ECA Digital', href: '#eca-digital' },
    { name: 'Guias', href: '#guias' },
    { name: 'Artigos', href: '#temas' },
    { name: 'Sobre', href: '#sobre' },
  ];

  const handleScrollToNewsletter = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById('newsletter');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      const input = element.querySelector('input[name="email"]') as HTMLInputElement;
      if (input) setTimeout(() => input.focus(), 400);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-brand-border shadow-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo Brand */}
        <Link 
          href="/" 
          className="flex items-center group focus:outline-none focus:ring-2 focus:ring-brand-teal rounded-lg p-1 transition-opacity hover:opacity-90"
          aria-label="Dados & Privacidade — Página Inicial"
        >
          <div className="relative h-10 sm:h-12 w-auto min-w-[180px] sm:min-w-[220px]">
            <Image 
              src="/Dados_Privacidade_horizontal_vetor.svg" 
              alt="Dados & Privacidade" 
              width={240}
              height={60}
              className="h-full w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Navegação Principal">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-2 text-sm font-medium text-brand-dark hover:text-brand-teal hover:bg-brand-teal-light/50 rounded-md transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Highlighted Action Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="#newsletter"
            onClick={handleScrollToNewsletter}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-brand-teal hover:bg-brand-teal-dark rounded-lg shadow-sm hover:shadow-teal-glow transition-all duration-200 active:scale-95"
          >
            <Mail className="w-4 h-4" />
            <span>Receber a newsletter</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#newsletter"
            onClick={handleScrollToNewsletter}
            className="p-2 text-brand-teal hover:bg-brand-teal-light rounded-lg transition-colors"
            aria-label="Receber a newsletter"
            title="Receber a newsletter"
          >
            <Mail className="w-5 h-5" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-brand-navy hover:text-brand-teal hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-brand-border px-4 pt-3 pb-6 space-y-2 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-1" aria-label="Navegação Mobile">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-base font-medium text-brand-dark hover:text-brand-teal hover:bg-brand-teal-light/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-brand-border flex flex-col gap-2">
            <a
              href="#newsletter"
              onClick={handleScrollToNewsletter}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-base font-semibold text-white bg-brand-teal hover:bg-brand-teal-dark rounded-lg shadow-md font-sans"
            >
              <Mail className="w-5 h-5" />
              <span>Receber a newsletter</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
