'use client';

import React, { useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl border border-gray-100 p-6 md:p-8 space-y-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-brand-dark transition-colors p-1 rounded-md"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-brand-dark">{title}</h3>
        </div>
        <div className="text-gray-600 text-sm leading-relaxed">{children}</div>
        <div className="pt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-brand-dark text-white text-sm font-semibold rounded hover:bg-brand-red transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
