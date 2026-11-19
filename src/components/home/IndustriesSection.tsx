import React from 'react';
import { Link } from 'react-router-dom';
import { industriesData } from '../../data/industriesData';
import { 
  Building2, 
  Landmark, 
  TrainTrack, 
  Zap, 
  Factory, 
  Compass, 
  ArrowRight 
} from 'lucide-react';

const industryIcons: Record<string, React.ElementType> = {
  Building2,
  Landmark,
  TrainTrack,
  Zap,
  Factory,
  Compass,
};

export const IndustriesSection: React.FC = () => {
  return (
    <section className="py-24 bg-navy-900 border-t border-spatial-cyan/15 relative overflow-hidden" id="industries-section">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-spatial-cyan font-semibold block">
              Global Sector Expertise
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-offwhite tracking-tight">
              Industries We Transform
            </h2>
            <p className="text-base text-offwhite/80 font-light leading-relaxed">
              Engineering solutions engineered for the specific regulatory, dimensional, and operational demands of critical sectors.
            </p>
          </div>

          <Link
            to="/industry"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-spatial-cyan hover:text-spatial-cyan-bright transition-colors"
          >
            <span>View All Sectors</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.map((ind) => {
            const Icon = industryIcons[ind.iconName] || Building2;
            return (
              <div
                key={ind.id}
                className="hud-panel p-6 bg-navy-950/70 border border-spatial-cyan/20 rounded-xl hover:border-spatial-cyan/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded bg-navy-900 border border-spatial-cyan/25 text-spatial-cyan group-hover:border-spatial-cyan transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-muted uppercase">
                      Sector Solution
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-offwhite group-hover:text-spatial-cyan transition-colors mb-2">
                    {ind.name}
                  </h3>

                  <p className="text-xs text-offwhite/75 font-light leading-relaxed mb-4">
                    {ind.shortDesc}
                  </p>

                  {/* Typical Deliverable Tag */}
                  <div className="pt-3 border-t border-navy-800 space-y-1">
                    <div className="text-[10px] font-mono text-spatial-cyan uppercase">
                      Primary Deliverable
                    </div>
                    <div className="text-xs text-offwhite/90 font-medium">
                      {ind.typicalDeliverables[0]}
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-navy-800/80">
                  <Link
                    to="/industry"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-spatial-cyan hover:text-offwhite transition-colors"
                  >
                    <span>Sector Case Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
