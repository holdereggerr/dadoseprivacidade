'use client';

import React, { useState } from 'react';
import { Share2, Link as LinkIcon, Check, MessageSquare } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url?: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const currentUrl = typeof window !== 'undefined' ? url || window.location.href : '';

  const handleCopy = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} — ${currentUrl}`)}`;
  const linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`;

  return (
    <div className="flex items-center gap-2 py-3">
      <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
        <Share2 className="w-3.5 h-3.5" />
        Compartilhar:
      </span>

      <a
        href={whatsappShare}
        target="_blank"
        rel="noopener noreferrer"
        className="px-2.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-medium flex items-center gap-1 transition-colors"
        aria-label="Compartilhar no WhatsApp"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        WhatsApp
      </a>

      <a
        href={linkedinShare}
        target="_blank"
        rel="noopener noreferrer"
        className="px-2.5 py-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded text-xs font-medium transition-colors"
        aria-label="Compartilhar no LinkedIn"
      >
        LinkedIn
      </a>

      <a
        href={twitterShare}
        target="_blank"
        rel="noopener noreferrer"
        className="px-2.5 py-1.5 bg-slate-800 hover:bg-black text-white rounded text-xs font-medium transition-colors"
        aria-label="Compartilhar no X (Twitter)"
      >
        X / Twitter
      </a>

      <button
        onClick={handleCopy}
        className="px-2.5 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded text-xs font-medium flex items-center gap-1 transition-colors"
        aria-label="Copiar Link"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            Copiado!
          </>
        ) : (
          <>
            <LinkIcon className="w-3.5 h-3.5" />
            Copiar Link
          </>
        )}
      </button>
    </div>
  );
}
