import React from 'react';
import { ArticleCategory } from '@/types';

interface BadgeProps {
  category: ArticleCategory | string;
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ category, size = 'sm', className = '' }) => {
  const sizeClasses = size === 'sm' ? 'px-2.5 py-0.5 text-xs font-semibold' : 'px-3 py-1 text-sm font-semibold';
  
  return (
    <span
      className={`inline-flex items-center uppercase tracking-wider rounded-sm bg-brand-red-subtle text-brand-red border border-brand-red/20 ${sizeClasses} ${className}`}
    >
      {category}
    </span>
  );
};
