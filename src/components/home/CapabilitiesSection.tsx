import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';
import { 
  ArrowUpRight, 
  Layers, 
  Scan, 
  Compass, 
  Globe2, 
  Database, 
  Box, 
  CheckCircle2 
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  'scan-to-bim': Layers,
  'reality-capture': Scan,
  'lidar-engineering': Compass,
  'geospatial-services': Globe2,
  'gis-solutions': Database,
  'digital-twin': Box,
};

export const CapabilitiesSection: React.FC = () => {
  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden" id="capabilities-section">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-spatial-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-navy-900 border border-spatial-cyan/30 text-spatial-cyan text-xs font-mono uppercase tracking-wider">
              <span>Technical Engineering Offerings</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-offwhite tracking-tight">
              Comprehensive Spatial Capabilities
            </h2>
            <p className="text-base text-offwhite/80 font-light leading-relaxed">
              From terrestrial scanning and mobile LiDAR to LOD 500 BIM and enterprise digital twins, explore our core technical disciplines.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-spatial-cyan hover:text-spatial-cyan-bright transition-colors"
          >
            <span>Request Technical Specification</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => {
            const Icon = iconMap[service.slug] || Layers;
            return (
              <div
                key={service.id}
                className="hud-panel p-7 bg-navy-900/70 border border-spatial-cyan/20 rounded-xl hover:border-spatial-cyan/50 hover:bg-navy-900/90 transition-all flex flex-col justify-between group corner-reticle"
              >
                <div>
                  
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-lg bg-navy-950 border border-spatial-cyan/25 text-spatial-cyan group-hover:border-spatial-cyan group-hover:shadow-[0_0_15px_rgba(82,191,208,0.25)] transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-muted group-hover:text-spatial-cyan transition-colors">
                      0{idx + 1} // {service.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-display font-bold text-offwhite group-hover:text-spatial-cyan transition-colors mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs text-spatial-cyan/90 font-mono mb-3 line-clamp-1">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-offwhite/75 font-light leading-relaxed mb-6 line-clamp-3">
                    {service.summary}
                  </p>

                  {/* Key Capabilities Bullet Points */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-navy-800">
                    {service.technicalCapabilities.slice(0, 3).map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-offwhite/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-spatial-cyan shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{cap}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-navy-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-muted">
                    {service.specifications[0]?.value || 'Survey Grade'}
                  </span>

                  <Link
                    to={`/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-spatial-cyan hover:text-offwhite transition-colors"
                  >
                    <span>Explore Service</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
