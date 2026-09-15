'use client';

import React, { useState } from 'react';
import { Share2, Link as LinkIcon, Check, Linkedin, Twitter } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url: string;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({ title, url }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const shareLinkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const shareTwitter = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs uppercase tracking-wider font-semibold text-gray-500 mr-2 flex items-center gap-1">
        <Share2 className="w-3.5 h-3.5" /> Compartilhar:
      </span>
      <a
        href={shareLinkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded bg-paper-100 hover:bg-paper-200 text-gray-700 hover:text-brand-red transition-colors"
        title="Compartilhar no LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
      </a>
      <a
        href={shareTwitter}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded bg-paper-100 hover:bg-paper-200 text-gray-700 hover:text-brand-red transition-colors"
        title="Compartilhar no X (Twitter)"
      >
        <Twitter className="w-4 h-4" />
      </a>
      <button
        onClick={handleCopy}
        className="p-2 rounded bg-paper-100 hover:bg-paper-200 text-gray-700 hover:text-brand-red transition-colors flex items-center gap-1 text-xs"
        title="Copiar link do artigo"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-600 font-medium">Copiado</span>
          </>
        ) : (
          <LinkIcon className="w-4 h-4" />
        )}
      </button>
    </div>
  );
};
