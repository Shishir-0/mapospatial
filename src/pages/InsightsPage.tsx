import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { insightsData } from '../data/insightsData';
import { InsightArticle } from '../types';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { BookOpen, Calendar, Clock, ArrowRight, Tag, Share2 } from 'lucide-react';

export const InsightsPage: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Spatial Engineering Insights & Whitepapers | Mapo Spatial';
  }, []);

  return (
    <div className="pt-24 pb-20 bg-navy-950 min-h-screen text-offwhite relative">
      
      {/* Background Spatial Grid */}
      <div className="absolute inset-0 bg-spatial-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: 'Engineering Insights' }]} />

        {/* Hero Banner */}
        <div className="py-12 border-b border-spatial-cyan/20">
          <div className="max-w-3xl space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-navy-900 border border-spatial-cyan/30 text-spatial-cyan text-xs font-mono uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Technical Publications & Whitepapers</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-offwhite tracking-tight leading-[1.1]">
              Spatial Intelligence Insights
            </h1>

            <p className="text-lg text-offwhite/85 font-light leading-relaxed pt-2">
              Engineering frameworks, Level of Development (LOD) best practices, and technical methodologies authored by our geospatial and BIM specialists.
            </p>

          </div>
        </div>

        {/* Article Grid or Modal Reader */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {insightsData.map((article) => (
            <article
              key={article.id}
              className="hud-panel p-7 bg-navy-900/70 border border-spatial-cyan/20 rounded-2xl hover:border-spatial-cyan/50 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between text-xs font-mono text-muted">
                  <span className="text-spatial-cyan font-semibold">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <h2 className="text-xl font-display font-bold text-offwhite group-hover:text-spatial-cyan transition-colors leading-snug">
                  {article.title}
                </h2>

                <p className="text-xs text-offwhite/75 font-light leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {article.tags.slice(0, 3).map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[10px] font-mono bg-navy-950 rounded text-offwhite/70 border border-navy-800"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-navy-800 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase text-spatial-cyan hover:text-white transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <span className="text-[11px] font-mono text-muted">
                  {article.date}
                </span>
              </div>

            </article>
          ))}
        </div>

        {/* Full Article Reader Modal */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md">
            <div className="hud-panel relative w-full max-w-3xl bg-navy-900 border border-spatial-cyan/40 rounded-2xl shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto space-y-6">
              
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="absolute top-5 right-5 text-offwhite/70 hover:text-spatial-cyan text-sm font-mono px-2.5 py-1 rounded bg-navy-950 border border-navy-700"
              >
                [Close]
              </button>

              <div className="space-y-3 pb-6 border-b border-navy-800 pr-12">
                <div className="flex items-center gap-3 text-xs font-mono text-spatial-cyan">
                  <span>{activeArticle.category}</span>
                  <span>•</span>
                  <span>{activeArticle.readTime}</span>
                  <span>•</span>
                  <span>{activeArticle.date}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-offwhite leading-tight">
                  {activeArticle.title}
                </h2>
              </div>

              <div className="space-y-4 text-sm text-offwhite/85 font-light leading-relaxed">
                {activeArticle.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-navy-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {activeArticle.tags.map((t, idx) => (
                    <span key={idx} className="text-xs font-mono text-spatial-cyan">
                      #{t}
                    </span>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="px-5 py-2 text-xs font-mono font-bold uppercase text-navy-950 bg-spatial-cyan hover:bg-spatial-cyan-bright rounded shadow"
                >
                  Consult Mapo Engineering
                </Link>
              </div>

            </div>
          </div>
        )}

      </div>

    </div>
  );
};
