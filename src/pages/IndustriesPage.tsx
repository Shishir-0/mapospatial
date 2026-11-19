import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { industriesData } from '../data/industriesData';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const IndustriesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Industries Served | Mapo Spatial Engineering';
  }, []);

  return (
    <div className="pt-28 pb-24 px-6 sm:px-8 max-w-7xl mx-auto w-full z-10 relative bg-white">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Industries Served' }]} />

      {/* Hero Section */}
      <div className="py-12 border-b border-[#DCE1E7]">
        <div className="max-w-3xl space-y-4">
          
          <span className="text-xs font-mono text-[#596579] font-bold tracking-widest uppercase block">
            [CRITICAL SECTORS & GLOBAL APPLICATIONS]
          </span>

          <h1 className="text-4xl sm:text-6xl font-display font-bold text-[#14233F] leading-[1.08] tracking-tight">
            Engineered for Critical Sectors
          </h1>

          <p className="text-base sm:text-lg text-[#425168] font-normal leading-relaxed pt-2">
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
            className="p-6 sm:p-10 border border-[#DCE1E7] bg-white rounded-sm space-y-8 shadow-sm"
          >
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#DCE1E7] gap-4">
              <div>
                <span className="text-[10px] font-mono text-[#B69A5A] uppercase font-bold tracking-wider block">
                  SECTOR 0{idx + 1}
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#14233F]">
                  {ind.name}
                </h2>
              </div>

              <Link
                to="/contact"
                className="font-mono text-xs uppercase tracking-wider text-[#14233F] hover:text-[#B69A5A] flex items-center gap-1.5 transition-colors font-bold"
              >
                <span>Request Sector Case Deck</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#B69A5A]" />
              </Link>
            </div>

            {/* Visual Image & Narrative */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Image Frame */}
              <div className="lg:col-span-5 relative rounded-sm overflow-hidden border border-[#DCE1E7] bg-[#F7F8FA] aspect-[16/10] shadow-sm">
                <img 
                  src={ind.imageAsset} 
                  alt={ind.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14233F]/80 via-transparent to-transparent flex items-end p-4">
                  <span className="font-mono text-[11px] text-white font-bold bg-[#14233F] px-2.5 py-1 rounded-sm border border-[#B69A5A]/50">
                    DELIVERABLE: {ind.name}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="lg:col-span-7 space-y-4">
                <p className="text-sm text-[#425168] font-normal leading-relaxed">
                  {ind.fullDesc}
                </p>

                {ind.caseStudyHighlight && (
                  <div className="p-4 bg-[#F7F8FA] border border-[#DCE1E7] rounded-sm font-mono text-xs text-[#14233F]">
                    <span className="text-[#B69A5A] block text-[10px] uppercase font-bold mb-1">
                      PROVEN SECTOR OUTCOME:
                    </span>
                    <p className="font-medium text-[#425168]">{ind.caseStudyHighlight}</p>
                  </div>
                )}

                {/* Typical Deliverables Box */}
                <div className="bg-[#F7F8FA] p-5 border border-[#DCE1E7] rounded-sm space-y-2.5 font-mono text-xs">
                  <div className="text-[#14233F] uppercase tracking-wider text-[11px] font-bold">
                    Standard Sector Deliverables
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#425168]">
                    {ind.typicalDeliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B69A5A] shrink-0 mt-0.5" />
                        <span className="font-medium">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Challenges & Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#DCE1E7] font-mono text-xs">
              <div className="space-y-2 p-5 bg-[#F7F8FA] border border-[#DCE1E7] rounded-sm">
                <span className="text-[#14233F] uppercase font-bold block text-[11px]">
                  Sector Inherent Challenges
                </span>
                <ul className="space-y-1.5 text-[#425168] font-sans text-xs">
                  {ind.challenges.map((ch, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2">
                      <span className="text-[#14233F] font-bold">•</span>
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 p-5 bg-[#F7F8FA] border border-[#DCE1E7] rounded-sm">
                <span className="text-[#14233F] uppercase font-bold block text-[11px]">
                  Mapo Spatial Engineering Solution
                </span>
                <ul className="space-y-1.5 text-[#425168] font-sans text-xs">
                  {ind.solutions.map((sol, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B69A5A] shrink-0 mt-0.5" />
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
