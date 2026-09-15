'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Início', href: '/' },
    { label: 'Artigos', href: '/artigos' },
    { label: 'IA & Shadow AI', href: '/inteligencia-artificial' },
    { label: 'Computação Forense', href: '/computacao-forense' },
    { label: 'Resiliência Digital', href: '/resiliencia-digital' },
    { label: 'Casos', href: '/casos' },
    { label: 'LGPD & ECA Digital', href: '/lgpd-eca-digital' },
    { label: 'Executive Briefing', href: '/executive-briefing' },
    { label: 'Academy', href: '/academy' },
    { label: 'Sobre', href: '/sobre' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-paper-100/95 backdrop-blur-md border-b border-paper-300">
      {/* Top Banner / Positioning Bar */}
      <div className="bg-brand-dark text-gray-300 text-xs py-1.5 px-4 text-center tracking-wide font-medium">
        <span>O melhor momento para conhecer o perito forense não é depois do incidente.</span>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 group">
            <div className="relative w-44 sm:w-56 h-12 flex items-center">
              <Image
                src="/logo.png"
                alt="perito.tec.br - Computação Forense e Resiliência Digital"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Nav Links & CTA Button */}
          <div className="hidden xl:flex items-center space-x-3 2xl:space-x-5 text-xs 2xl:text-sm font-medium">
            <nav className="flex items-center space-x-3 2xl:space-x-5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`transition-colors py-1 whitespace-nowrap ${
                      isActive
                        ? 'text-brand-red font-bold border-b-2 border-brand-red'
                        : 'text-gray-700 hover:text-brand-red'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Separated Call to Action Button */}
            <div className="pl-4 ml-2 border-l border-paper-300 shrink-0">
              <Link
                href="/executive-briefing"
                className="inline-flex items-center justify-center px-4 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-brand-red hover:bg-brand-red-dark transition-colors rounded shadow-sm gap-1.5 whitespace-nowrap"
              >
                Receber o Briefing
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-brand-dark hover:bg-paper-200 transition-colors"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-paper-300 shadow-xl px-4 pt-3 pb-6 space-y-2 animate-fade-in">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-red-subtle text-brand-red font-bold'
                    : 'text-gray-800 hover:bg-paper-100 hover:text-brand-red'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-4">
            <Link
              href="/executive-briefing"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-brand-red hover:bg-brand-red-dark transition-colors rounded uppercase tracking-wider gap-2 shadow"
            >
              Receber o Briefing
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
