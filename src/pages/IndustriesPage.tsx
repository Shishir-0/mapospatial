import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { industriesData } from '../data/industriesData';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { ArrowUpRight } from 'lucide-react';

export const IndustriesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Industries Served | Mapo Spatial Engineering';
  }, []);

  return (
    <div className="pt-28 pb-24 px-6 sm:px-8 max-w-7xl mx-auto w-full z-10 relative">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Industries Served' }]} />

      {/* Hero Section */}
      <div className="py-12 border-b border-subtle-border">
        <div className="max-w-3xl space-y-4">
          
          <span className="text-[11px] font-mono text-copper tracking-widest uppercase block">
            [CRITICAL SECTORS & APPLICATIONS]
          </span>

          <h1 className="text-4xl sm:text-6xl font-display font-bold text-mineral leading-[1.08] tracking-tight">
            Engineered for Critical Sectors
          </h1>

          <p className="text-base sm:text-lg text-text-secondary font-light leading-relaxed pt-2">
            Every industry operates under distinct physical, environmental, and regulatory constraints. We tailor our laser scanning, Scan-to-BIM, and LiDAR pipelines to deliver actionable intelligence tailored to your operational environment.
          </p>

        </div>
      </div>

      {/* Detailed Sector Showcase */}
      <div className="py-16 space-y-16">
        {industriesData.map((ind, idx) => (
          <div
            key={ind.id}
            id={ind.slug}
            className="p-8 sm:p-10 border border-subtle-border bg-carbon/90 backdrop-blur-md space-y-8 survey-corner"
          >
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-subtle-border gap-4">
              <div>
                <span className="text-[10px] font-mono text-copper uppercase tracking-wider block">
                  SECTOR 0{idx + 1}
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-mineral">
                  {ind.name}
                </h2>
              </div>

              <Link
                to="/contact"
                className="font-mono text-xs uppercase tracking-wider text-mineral hover:text-copper flex items-center gap-1.5 transition-colors"
              >
                <span>Request Sector Case Deck</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-copper" />
              </Link>
            </div>

            {/* Narrative & Case Highlight */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-4">
                <p className="text-sm text-text-secondary font-light leading-relaxed">
                  {ind.fullDesc}
                </p>

                {ind.caseStudyHighlight && (
                  <div className="p-4 bg-graphite/60 border border-subtle-border font-mono text-xs text-text-secondary">
                    <span className="text-copper block text-[10px] uppercase font-semibold mb-1">
                      PROVEN SECTOR OUTCOME:
                    </span>
                    <p className="text-mineral">{ind.caseStudyHighlight}</p>
                  </div>
                )}
              </div>

              {/* Typical Deliverables Box */}
              <div className="lg:col-span-5 bg-graphite/50 p-6 border border-subtle-border space-y-3 font-mono text-xs">
                <div className="text-copper uppercase tracking-wider text-[11px] font-semibold">
                  Standard Sector Deliverables
                </div>
                <div className="space-y-2 text-mineral">
                  {ind.typicalDeliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2">
                      <span className="text-copper">•</span>
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Challenges & Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-subtle-border font-mono text-xs">
              <div className="space-y-2 p-4 bg-basalt/60 border border-subtle-border/60">
                <span className="text-rose-400 uppercase font-semibold block text-[11px]">
                  Sector Inherent Challenges
                </span>
                <ul className="space-y-1.5 text-text-muted font-sans text-xs">
                  {ind.challenges.map((ch, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold">•</span>
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 p-4 bg-basalt/60 border border-subtle-border/60">
                <span className="text-copper uppercase font-semibold block text-[11px]">
                  Mapo Spatial Engineering Solution
                </span>
                <ul className="space-y-1.5 text-text-muted font-sans text-xs">
                  {ind.solutions.map((sol, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2">
                      <span className="text-copper font-bold">•</span>
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
