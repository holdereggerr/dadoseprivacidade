import React from 'react';
import Link from 'next/link';
import { Cpu, AlertTriangle, ArrowRight } from 'lucide-react';

export const IAShadowAISection: React.FC = () => {
  const risks = [
    { title: 'Shadow AI', desc: 'Uso não homologado de modelos de linguagem e ferramentas sintéticas por colaboradores.' },
    { title: 'Shadow IT', desc: 'Sistemas paralelos e automações criados sem supervisão das equipes de infraestrutura e segurança.' },
    { title: 'Vazamento de Dados', desc: 'Submissão de informações cadastrais e dados sensíveis em plataformas de terceiros.' },
    { title: 'Propriedade Intelectual', desc: 'Exposição não intencional de segredos comerciais, patentes e códigos-fonte.' },
    { title: 'Informações Confidenciais', desc: 'Upload de reuniões gravadas, contratos e demonstrações financeiras em IAs públicas.' },
    { title: 'Automações Não Autorizadas', desc: 'Conexão de robôs de IA a planilhas e e-mails corporativos sem critérios de segurança.' },
    { title: 'Agentes de IA', desc: 'Sistemas autônomos que tomam decisões operacionais sem supervisão humana (human-in-the-loop).' },
    { title: 'Ausência de Monitoramento', desc: 'Falta de auditoria de tráfego de dados para endpoints externos de inteligência artificial.' },
    { title: 'Responsabilidade Indefinida', desc: 'Incerteza sobre quem responde legalmente pelas saídas (outputs) incorretas ou viciadas.' },
    { title: 'Risco Legal e Reputacional', desc: 'Violação direta à LGPD, sanções da ANPD e danos à imagem institucional da companhia.' },
  ];

  return (
    <section className="py-16 md:py-24 bg-paper-100 border-b border-paper-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-paper-300 rounded text-xs font-semibold text-brand-red uppercase tracking-wider">
            <Cpu className="w-4 h-4 text-brand-red" />
            <span>Governança de Inteligência Artificial</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark">
            Sua empresa implantou inteligência artificial ou apenas liberou seu uso?
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Em muitas organizações, funcionários utilizam IA para analisar documentos, dados, códigos, contratos, reuniões e informações confidenciais sem uma estrutura clara de governança, criando uma extensa camada de vulnerabilidade oculta.
          </p>
        </div>

        {/* 10 Risks Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {risks.map((risk) => (
            <div
              key={risk.title}
              className="bg-white rounded-lg p-5 border border-paper-300 shadow-sm hover:border-brand-red/40 transition-all space-y-2 flex flex-col justify-between"
            >
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-brand-red shrink-0" />
                <h3 className="font-bold text-sm text-brand-dark">{risk.title}</h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{risk.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-2 flex justify-start">
          <Link
            href="/inteligencia-artificial"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-dark hover:bg-brand-red text-white text-xs uppercase tracking-wider font-semibold rounded transition-colors shadow-sm"
          >
            <span>Explorar IA & Shadow AI</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
