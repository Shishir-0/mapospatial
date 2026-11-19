import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { industriesData } from '../../data/industriesData';

export const IndustriesSection: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industriesData[0]);

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto w-full z-10 relative bg-[#FFFFFF]" id="industries">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#DCE1E7] pb-8">
        <div className="space-y-3 max-w-2xl">
          <span className="text-[13px] font-mono font-bold tracking-[0.08em] text-[#596579] uppercase block">
            [05 // SECTOR EXPERTISE]
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#14233F] tracking-tight">
            Industries We Transform
          </h2>
          <p className="text-[17px] text-[#425168] font-normal leading-[1.6]">
            Every sector operates under specific physical tolerances and regulatory mandates. Discover how our workflows integrate across critical infrastructure.
          </p>
        </div>

        <Link
          to="/industry"
          className="font-mono text-xs uppercase tracking-wider text-[#14233F] hover:text-[#B69A5A] flex items-center gap-1.5 transition-colors font-bold"
        >
          <span>View All Sectors</span>
          <ArrowUpRight className="w-4 h-4 text-[#B69A5A]" />
        </Link>
      </div>

      {/* Editorial Industry Selector & Spotlight */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Industry List Column */}
        <div className="lg:col-span-5 space-y-3">
          {industriesData.map((ind, idx) => {
            const isSelected = selectedIndustry.id === ind.id;
            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => setSelectedIndustry(ind)}
                className={`w-full text-left p-4 sm:p-5 transition-all border rounded-sm flex items-center justify-between group ${
                  isSelected
                    ? 'bg-[#FFFFFF] border-[#B69A5A] text-[#14233F] shadow-sm ring-1 ring-[#B69A5A]'
                    : 'bg-[#F7F8FA] border-[#DCE1E7] text-[#14233F] hover:border-[#B69A5A]/50 hover:bg-[#FFFFFF]'
                }`}
              >
                <div className="space-y-1">
                  <div className="font-mono text-[12px] text-[#596579] font-bold">
                    SECTOR 0{idx + 1}
                  </div>
                  <div className="text-[17px] font-display font-bold text-[#14233F]">
                    {ind.name}
                  </div>
                </div>

                <div className={`text-sm font-mono font-bold transition-all ${
                  isSelected ? 'text-[#B69A5A] translate-x-1' : 'text-[#596579] group-hover:text-[#B69A5A]'
                }`}>
                  →
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Sector Deep Dive Panel */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 border border-[#DCE1E7] bg-[#FFFFFF] rounded-sm space-y-6 survey-corner shadow-sm">
            
            {/* Real Deliverable Image Preview */}
            <div className="relative rounded-sm overflow-hidden border border-[#DCE1E7] aspect-[16/9] group bg-[#F7F8FA]">
              <img 
                src={selectedIndustry.imageAsset} 
                alt={`${selectedIndustry.name} Application`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14233F]/90 via-transparent to-transparent flex items-end p-4">
                <div className="font-mono text-xs text-white flex items-center justify-between w-full">
                  <span className="bg-[#14233F] px-3 py-1 rounded-sm border border-[#B69A5A]/50 text-[#B69A5A] font-bold uppercase text-[11px]">
                    SECTOR: {selectedIndustry.name}
                  </span>
                  <span className="bg-black/70 px-2.5 py-1 rounded-sm text-slate-200 text-[11px]">
                    GLOBAL SPECIFICATION
                  </span>
                </div>
              </div>
            </div>

            {/* Title & Description */}
            <div className="space-y-2 pb-4 border-b border-[#DCE1E7]">
              <span className="text-[12px] font-mono text-[#596579] uppercase tracking-wider font-bold">
                Sector Applications // {selectedIndustry.name}
              </span>
              <h3 className="text-2xl sm:text-[30px] font-display font-extrabold text-[#14233F] leading-tight">
                {selectedIndustry.name}
              </h3>
              <p className="text-[14px] font-mono text-[#536174] font-medium">
                {selectedIndustry.shortDesc}
              </p>
            </div>

            <p className="text-[16px] text-[#425168] font-normal leading-[1.65]">
              {selectedIndustry.fullDesc}
            </p>

            {/* Typical Deliverables */}
            <div className="space-y-3 pt-1">
              <div className="text-xs font-mono text-[#596579] font-bold uppercase tracking-wider">
                Key Sector Deliverables
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedIndustry.typicalDeliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-xs font-mono text-[#14233F] bg-[#F7F8FA] p-2.5 rounded-sm border border-[#DCE1E7]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B69A5A] shrink-0 font-bold" />
                    <span className="font-semibold text-[#425168] line-clamp-1">{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlight Metric */}
            {selectedIndustry.caseStudyHighlight && (
              <div className="p-4 bg-[#F7F8FA] border border-[#DCE1E7] rounded-sm font-mono text-xs space-y-1">
                <span className="text-[#596579] block text-[11px] uppercase font-bold">
                  DOCUMENTED SECTOR OUTCOME:
                </span>
                <p className="text-[#14233F] font-bold text-[13px]">{selectedIndustry.caseStudyHighlight}</p>
              </div>
            )}

            {/* Action */}
            <div className="pt-4 border-t border-[#DCE1E7] flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider">
              <span className="text-[#657184] text-[12px] font-medium">
                SECTOR ID: {selectedIndustry.id.toUpperCase()}
              </span>
              <Link
                to="/industry"
                className="px-5 py-2.5 bg-[#14233F] hover:bg-[#0E1930] text-white border border-[#14233F] hover:border-[#B69A5A] transition-all flex items-center gap-2 font-semibold shadow-xs rounded-sm"
              >
                <span>Full Industry Overview</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#B69A5A]" />
              </Link>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
