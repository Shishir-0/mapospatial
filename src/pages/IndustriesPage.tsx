import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { industriesData } from '../data/industriesData';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { 
  Building2, 
  Landmark, 
  TrainTrack, 
  Zap, 
  Factory, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';

const industryIcons: Record<string, React.ElementType> = {
  Building2,
  Landmark,
  TrainTrack,
  Zap,
  Factory,
  Compass,
};

export const IndustriesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Industries Served | Mapo Spatial Engineering';
  }, []);

  return (
    <div className="pt-24 pb-20 bg-navy-950 min-h-screen text-offwhite relative">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-spatial-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: 'Industries Served' }]} />

        {/* Hero Section */}
        <div className="py-12 border-b border-spatial-cyan/20">
          <div className="max-w-3xl space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-navy-900 border border-spatial-cyan/30 text-spatial-cyan text-xs font-mono uppercase tracking-wider">
              <span>Sector Applications</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-offwhite tracking-tight leading-[1.1]">
              Engineered for Critical Sectors
            </h1>

            <p className="text-lg text-offwhite/85 font-light leading-relaxed pt-2">
              Every industry operates under distinct physical, environmental, and regulatory constraints. We tailor our laser scanning, Scan-to-BIM, and LiDAR pipelines to deliver actionable intelligence tailored to your operational environment.
            </p>

          </div>
        </div>

        {/* Detailed Sector Showcase */}
        <div className="py-16 space-y-16">
          {industriesData.map((ind, idx) => {
            const Icon = industryIcons[ind.iconName] || Building2;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={ind.id}
                id={ind.slug}
                className="hud-panel p-8 sm:p-10 bg-navy-900/80 border border-spatial-cyan/20 rounded-2xl space-y-8 corner-reticle"
              >
                
                {/* Sector Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-navy-800 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-navy-950 border border-spatial-cyan/30 text-spatial-cyan">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-muted uppercase tracking-wider">
                        Sector 0{idx + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-display font-bold text-offwhite">
                        {ind.name}
                      </h2>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase text-spatial-cyan hover:text-spatial-cyan-bright"
                  >
                    <span>Request Sector Case Deck</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Narrative & Case Highlight */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  <div className="lg:col-span-7 space-y-4">
                    <p className="text-sm text-offwhite/90 font-light leading-relaxed">
                      {ind.fullDesc}
                    </p>

                    {ind.caseStudyHighlight && (
                      <div className="p-4 rounded-lg bg-navy-950/70 border-l-2 border-spatial-cyan text-xs font-mono text-offwhite/90">
                        <strong className="text-spatial-cyan block mb-1">PROVEN OUTCOME:</strong>
                        {ind.caseStudyHighlight}
                      </div>
                    )}
                  </div>

                  {/* Typical Deliverables Box */}
                  <div className="lg:col-span-5 bg-navy-950/60 p-5 rounded-xl border border-navy-800 space-y-3">
                    <div className="text-xs font-mono text-spatial-cyan uppercase tracking-wider font-semibold">
                      Standard Deliverables
                    </div>
                    <ul className="space-y-2 text-xs text-offwhite/80">
                      {ind.typicalDeliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-spatial-cyan shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Challenges & Solutions Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-navy-800">
                  
                  <div className="space-y-3 bg-navy-950/40 p-4 rounded-lg border border-navy-800">
                    <div className="flex items-center gap-2 text-xs font-mono text-rose-400 uppercase font-semibold">
                      <AlertCircle className="w-4 h-4" />
                      <span>Inherent Sector Challenges</span>
                    </div>
                    <ul className="space-y-2 text-xs text-offwhite/75 font-light">
                      {ind.challenges.map((ch, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <span className="text-rose-400 font-bold">•</span>
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 bg-navy-950/40 p-4 rounded-lg border border-navy-800">
                    <div className="flex items-center gap-2 text-xs font-mono text-spatial-cyan uppercase font-semibold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Mapo Spatial Engineering Solution</span>
                    </div>
                    <ul className="space-y-2 text-xs text-offwhite/75 font-light">
                      {ind.solutions.map((sol, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <span className="text-spatial-cyan font-bold">•</span>
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="hud-panel p-8 sm:p-12 bg-navy-900 border border-spatial-cyan/30 rounded-2xl text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-offwhite">
            Need specialized engineering for your industry?
          </h2>
          <p className="text-sm text-offwhite/80 max-w-xl mx-auto font-light">
            Our teams have worked across airport obstacles, rail corridors, petrochemical plants, and heritage sites. Let's discuss your technical parameters.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider text-navy-950 bg-spatial-cyan hover:bg-spatial-cyan-bright transition-all rounded shadow-md"
          >
            <span>Schedule Technical Review</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

    </div>
  );
};
