'use client';

import React from 'react';
import { Search, Filter, X } from 'lucide-react';
import { ContentCategory, ContentLevel, ContentFormat } from '@/types/content';

interface SearchAndFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  selectedFormat: string;
  onFormatChange: (format: string) => void;
  selectedLevel: string;
  onLevelChange: (level: string) => void;
  onReset: () => void;
}

export default function SearchAndFilter({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedFormat,
  onFormatChange,
  selectedLevel,
  onLevelChange,
  onReset,
}: SearchAndFilterProps) {
  const categories: string[] = [
    'Todas',
    'Trabalhar Melhor',
    'Liderar',
    'Criar',
    'Aprender',
    'Adotar com Segurança'
  ];

  const formats: string[] = ['Todos', 'Artigo', 'Vídeo', 'Guia', 'Estudo de Caso'];
  const levels: string[] = ['Todos os Níveis', 'Iniciante', 'Intermediário', 'Avançado'];

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'Todas' || selectedFormat !== 'Todos' || selectedLevel !== 'Todos os Níveis';

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4 text-hero-navy">
      
      {/* Search Input Bar */}
      <div className="relative">
        <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Buscar por termo, ferramenta ou tema (ex: Agentes, LGPD, Prompts)..."
          className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-hero-navy placeholder-slate-400 focus:outline-none focus:border-hero-blue focus:bg-white"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600"
            aria-label="Limpar Busca"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filter Selects */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        
        {/* Category Dropdown */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-1">Trilha / Objetivo</label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 font-medium focus:outline-none focus:border-hero-blue"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Format Dropdown */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-1">Formato</label>
          <select
            value={selectedFormat}
            onChange={(e) => onFormatChange(e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 font-medium focus:outline-none focus:border-hero-blue"
          >
            {formats.map((fmt) => (
              <option key={fmt} value={fmt}>{fmt}</option>
            ))}
          </select>
        </div>

        {/* Level Dropdown */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-1">Nível de Conhecimento</label>
          <select
            value={selectedLevel}
            onChange={(e) => onLevelChange(e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 font-medium focus:outline-none focus:border-hero-blue"
          >
            {levels.map((lvl) => (
              <option key={lvl} value={lvl}>{lvl}</option>
            ))}
          </select>
        </div>

      </div>

      {/* Reset Filter Button */}
      {hasActiveFilters && (
        <div className="pt-2 flex items-center justify-between text-xs border-t border-slate-100">
          <span className="text-slate-500">Filtros ativos aplicados</span>
          <button
            onClick={onReset}
            className="text-hero-blue hover:underline font-semibold flex items-center gap-1"
          >
            <X className="w-3.5 h-3.5" />
            Limpar todos os filtros
          </button>
        </div>
      )}

    </div>
  );
}
