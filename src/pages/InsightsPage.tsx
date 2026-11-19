import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { insightsData } from '../data/insightsData';
import { InsightArticle } from '../types';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { ArrowUpRight, X } from 'lucide-react';

export const InsightsPage: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Spatial Engineering Insights & Whitepapers | Mapo Spatial';
  }, []);

  return (
    <div className="pt-28 pb-24 px-6 sm:px-8 max-w-7xl mx-auto w-full z-10 relative bg-white">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Engineering Insights' }]} />

      {/* Hero Banner */}
      <div className="py-12 border-b border-subtle-border">
        <div className="max-w-3xl space-y-4">
          
          <span className="text-xs font-mono text-gold font-bold tracking-widest uppercase block">
            [TECHNICAL PUBLICATIONS & WHITEPAPERS]
          </span>

          <h1 className="text-4xl sm:text-6xl font-display font-bold text-navy leading-[1.08] tracking-tight">
            Spatial Intelligence Insights
          </h1>

          <p className="text-base sm:text-lg text-text-secondary font-light leading-relaxed pt-2">
            Engineering frameworks, Level of Development (LOD) best practices, and technical methodologies authored by our geospatial and BIM specialists.
          </p>

        </div>
      </div>

      {/* Articles Grid */}
      <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {insightsData.map((article) => (
          <article
            key={article.id}
            className="p-8 border border-subtle-border bg-white rounded-sm flex flex-col justify-between space-y-6 survey-corner shadow-md hover:shadow-xl transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono text-[11px] text-text-muted">
                <span className="text-gold font-bold uppercase">{article.category}</span>
                <span>{article.readTime}</span>
              </div>

              <h2 className="text-xl font-display font-bold text-navy leading-snug">
                {article.title}
              </h2>

              <p className="text-xs text-text-secondary font-light leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {article.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-[10px] font-mono bg-warm-white text-navy border border-subtle-border rounded-sm"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-subtle-border flex items-center justify-between font-mono text-xs uppercase tracking-wider">
              <button
                type="button"
                onClick={() => setActiveArticle(article)}
                className="text-navy hover:text-gold flex items-center gap-1.5 font-bold transition-colors"
              >
                <span>Read Whitepaper</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
              </button>
              <span className="text-text-muted text-[11px]">{article.date}</span>
            </div>
          </article>
        ))}
      </div>

      {/* Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-white border border-gold p-8 sm:p-10 max-h-[90vh] overflow-y-auto space-y-6 rounded-sm shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 text-text-muted hover:text-navy p-1.5 border border-subtle-border rounded-sm hover:border-navy transition-all"
            >
              <X className="w-5 h-5 text-navy" />
            </button>

            <div className="space-y-2 pb-4 border-b border-subtle-border pr-12 font-mono text-xs">
              <span className="text-gold font-bold uppercase">
                {activeArticle.category} // {activeArticle.readTime} // {activeArticle.date}
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy leading-tight">
                {activeArticle.title}
              </h2>
            </div>

            <div className="space-y-4 text-xs font-light text-text-secondary leading-relaxed">
              {activeArticle.content.map((p, idx) => (
                <p key={idx} className="text-sm leading-relaxed">{p}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-subtle-border flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider">
              <div className="flex flex-wrap gap-2 text-gold font-bold">
                {activeArticle.tags.map((t, idx) => (
                  <span key={idx}>#{t}</span>
                ))}
              </div>

              <Link
                to="/contact"
                className="px-6 py-3 bg-navy hover:bg-navy-deep text-white border border-navy hover:border-gold transition-all font-semibold rounded-sm shadow-md"
              >
                Consult Mapo Engineering
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
