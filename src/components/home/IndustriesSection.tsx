import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { industriesData } from '../../data/industriesData';

export const IndustriesSection: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industriesData[0]);

  return (
    <section className="py-28 px-6 sm:px-8 max-w-7xl mx-auto w-full z-10 relative" id="industries">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-subtle-border pb-8">
        <div className="space-y-3 max-w-2xl">
          <span className="text-[11px] font-mono text-copper tracking-widest uppercase">
            [04 // SECTOR EXPERTISE]
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-mineral tracking-tight">
            Industries We Transform
          </h2>
          <p className="text-sm text-text-secondary font-light">
            Every sector operates under specific physical tolerances and regulatory mandates. Discover how our workflows integrate across critical infrastructure.
          </p>
        </div>

        <Link
          to="/industry"
          className="font-mono text-xs uppercase tracking-wider text-text-secondary hover:text-mineral flex items-center gap-1.5 transition-colors"
        >
          <span>View All Sectors</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-copper" />
        </Link>
      </div>

      {/* Editorial Industry Selector & Spotlight */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Industry List Column */}
        <div className="lg:col-span-5 space-y-2">
          {industriesData.map((ind, idx) => {
            const isSelected = selectedIndustry.id === ind.id;
            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => setSelectedIndustry(ind)}
                className={`w-full text-left p-4 transition-all border flex items-center justify-between group ${
                  isSelected
                    ? 'bg-carbon border-copper text-mineral shadow-[0_0_15px_rgba(194,122,80,0.15)]'
                    : 'bg-basalt/60 border-subtle-border/70 text-text-secondary hover:border-subtle-border hover:bg-carbon/40'
                }`}
              >
                <div className="space-y-1">
                  <div className="font-mono text-[10px] text-text-muted">
                    SECTOR 0{idx + 1}
                  </div>
                  <div className={`text-base font-display font-semibold transition-colors ${
                    isSelected ? 'text-mineral' : 'text-text-secondary group-hover:text-mineral'
                  }`}>
                    {ind.name}
                  </div>
                </div>

                <div className="text-[11px] font-mono text-copper opacity-0 group-hover:opacity-100 transition-opacity">
                  [SELECT]
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Sector Deep Dive Panel */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 border border-subtle-border bg-carbon/90 backdrop-blur-md space-y-6 survey-corner">
            
            <div className="space-y-2 pb-6 border-b border-subtle-border">
              <span className="text-xs font-mono text-copper uppercase tracking-wider font-semibold">
                Sector Applications // {selectedIndustry.name}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-mineral leading-tight">
                {selectedIndustry.name}
              </h3>
              <p className="text-xs font-mono text-text-muted">
                {selectedIndustry.shortDesc}
              </p>
            </div>

            <p className="text-sm text-text-secondary font-light leading-relaxed">
              {selectedIndustry.fullDesc}
            </p>

            {/* Typical Deliverables */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono text-text-muted uppercase tracking-wider">
                Key Sector Deliverables
              </div>
              <div className="space-y-2">
                {selectedIndustry.typicalDeliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2.5 text-xs text-mineral font-mono">
                    <span className="w-1.5 h-1.5 bg-copper" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlight Metric or Proven Case */}
            {selectedIndustry.caseStudyHighlight && (
              <div className="p-4 bg-graphite/60 border border-subtle-border font-mono text-xs text-text-secondary space-y-1">
                <span className="text-copper block text-[10px] uppercase font-semibold">
                  DOCUMENTED SECTOR OUTCOME:
                </span>
                <p className="text-mineral">{selectedIndustry.caseStudyHighlight}</p>
              </div>
            )}

            <div className="pt-6 border-t border-subtle-border flex items-center justify-between font-mono text-xs uppercase tracking-wider">
              <span className="text-text-muted text-[11px]">
                SECTOR ID: {selectedIndustry.id.toUpperCase()}
              </span>
              <Link
                to="/industry"
                className="px-5 py-2.5 bg-graphite hover:bg-carbon text-mineral border border-subtle-border hover:border-copper transition-all flex items-center gap-2"
              >
                <span>Full Industry Deck</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-copper" />
              </Link>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
