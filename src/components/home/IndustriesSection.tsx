import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { industriesData } from '../../data/industriesData';

export const IndustriesSection: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industriesData[0]);

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto w-full z-10 relative bg-subtle-bg/40" id="industries">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-subtle-border pb-8">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono text-gold font-bold tracking-widest uppercase block">
            [05 // SECTOR EXPERTISE]
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-navy tracking-tight">
            Industries We Transform
          </h2>
          <p className="text-sm text-text-secondary font-light">
            Every sector operates under specific physical tolerances and regulatory mandates. Discover how our workflows integrate across critical infrastructure.
          </p>
        </div>

        <Link
          to="/industry"
          className="font-mono text-xs uppercase tracking-wider text-navy hover:text-gold flex items-center gap-1.5 transition-colors font-bold"
        >
          <span>View All Sectors</span>
          <ArrowUpRight className="w-4 h-4 text-gold" />
        </Link>
      </div>

      {/* Editorial Industry Selector & Spotlight */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Industry List Column */}
        <div className="lg:col-span-5 space-y-2.5">
          {industriesData.map((ind, idx) => {
            const isSelected = selectedIndustry.id === ind.id;
            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => setSelectedIndustry(ind)}
                className={`w-full text-left p-4 sm:p-5 transition-all border rounded-sm flex items-center justify-between group ${
                  isSelected
                    ? 'bg-white border-gold text-navy shadow-md ring-1 ring-gold/20'
                    : 'bg-white/70 border-subtle-border text-text-secondary hover:border-gold/40 hover:bg-white'
                }`}
              >
                <div className="space-y-1">
                  <div className="font-mono text-[10px] text-text-muted">
                    SECTOR 0{idx + 1}
                  </div>
                  <div className={`text-base font-display font-bold transition-colors ${
                    isSelected ? 'text-navy' : 'text-navy/80 group-hover:text-navy'
                  }`}>
                    {ind.name}
                  </div>
                </div>

                <div className={`text-xs font-mono transition-all ${
                  isSelected ? 'text-gold font-bold translate-x-1' : 'text-text-muted group-hover:text-gold'
                }`}>
                  →
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Sector Deep Dive Panel */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 border border-subtle-border bg-white rounded-sm space-y-6 survey-corner shadow-lg">
            
            {/* Real Deliverable Image Preview */}
            <div className="relative rounded-sm overflow-hidden border border-subtle-border aspect-[16/9] group bg-warm-white">
              <img 
                src={selectedIndustry.imageAsset} 
                alt={`${selectedIndustry.name} Application`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent flex items-end p-4">
                <div className="font-mono text-xs text-white flex items-center justify-between w-full">
                  <span className="bg-navy px-3 py-1 rounded-sm border border-gold/40 text-gold font-bold uppercase">
                    SECTOR: {selectedIndustry.name}
                  </span>
                  <span className="bg-black/60 px-2 py-1 rounded-sm text-text-muted">
                    GLOBAL SPECIFICATION
                  </span>
                </div>
              </div>
            </div>

            {/* Title & Description */}
            <div className="space-y-2 pb-4 border-b border-subtle-border">
              <span className="text-xs font-mono text-gold uppercase tracking-wider font-bold">
                Sector Applications // {selectedIndustry.name}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-navy leading-tight">
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
            <div className="space-y-3 pt-1">
              <div className="text-xs font-mono text-navy font-bold uppercase tracking-wider">
                Key Sector Deliverables
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedIndustry.typicalDeliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-xs text-navy font-mono bg-warm-white p-2 rounded-sm border border-subtle-border/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span className="line-clamp-1">{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlight Metric */}
            {selectedIndustry.caseStudyHighlight && (
              <div className="p-4 bg-warm-white border border-subtle-border rounded-sm font-mono text-xs space-y-1">
                <span className="text-gold block text-[10px] uppercase font-bold">
                  DOCUMENTED SECTOR OUTCOME:
                </span>
                <p className="text-navy font-medium">{selectedIndustry.caseStudyHighlight}</p>
              </div>
            )}

            {/* Action */}
            <div className="pt-4 border-t border-subtle-border flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider">
              <span className="text-text-muted text-[11px]">
                SECTOR ID: {selectedIndustry.id.toUpperCase()}
              </span>
              <Link
                to="/industry"
                className="px-5 py-2.5 bg-navy hover:bg-navy-deep text-white border border-navy hover:border-gold transition-all flex items-center gap-2 font-semibold shadow-sm rounded-sm"
              >
                <span>Full Industry Overview</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
              </Link>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
