import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useSpatialScene } from '../../context/SpatialSceneContext';

export const HeroSection: React.FC = () => {
  const { setMode } = useSpatialScene();

  const scrollToCapabilities = () => {
    const el = document.getElementById('capabilities');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-14 px-6 sm:px-8 max-w-7xl mx-auto w-full z-10">
      
      {/* Top Technical Metadata Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-text-muted border-b border-subtle-border pb-4">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-copper animate-pulse" />
          <span className="text-mineral font-medium">SPATIAL ENGINEERING // VERIFIED GEOMETRY</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span>SURVEY DATUM: WGS84</span>
          <span>POINT TOLERANCE: ±3MM</span>
          <span>BIM SPEC: LOD 100 - 500</span>
        </div>
      </div>

      {/* Main Editorial Hero Block (Asymmetric Composition) */}
      <div className="my-auto py-12 max-w-4xl space-y-8">
        
        <div className="space-y-4">
          <span className="text-[11px] font-mono tracking-widest text-copper uppercase block">
            [SPATIAL INTELLIGENCE, ENGINEERED]
          </span>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold text-mineral leading-[1.02] tracking-tight">
            Make the physical <br />
            world measurable.
          </h1>
        </div>

        <p className="text-base sm:text-lg text-text-secondary max-w-2xl font-light leading-relaxed">
          From reality capture and LiDAR to Scan to BIM, geospatial engineering and digital twins, we transform physical environments into precise digital representations for international engineering partners.
        </p>

        {/* Action CTAs */}
        <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 font-mono text-xs uppercase tracking-wider">
          <button
            type="button"
            onClick={scrollToCapabilities}
            className="px-6 py-3.5 bg-mineral text-basalt hover:bg-white transition-all font-semibold rounded-sm text-center flex items-center justify-center gap-2 group"
          >
            <span>Explore Our Capabilities</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </button>

          <Link
            to="/contact"
            className="px-6 py-3.5 bg-carbon text-mineral hover:bg-graphite border border-subtle-border hover:border-copper transition-all rounded-sm text-center flex items-center justify-center gap-2"
          >
            <span>Discuss Your Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-copper" />
          </Link>
        </div>

      </div>

      {/* Bottom Technical Grid Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-subtle-border font-mono text-xs">
        <div className="space-y-1">
          <div className="text-[10px] text-text-muted uppercase">Precision Standard</div>
          <div className="text-mineral font-medium">±3mm Survey Grade</div>
        </div>
        <div className="space-y-1">
          <div className="text-[10px] text-text-muted uppercase">Modeling LOD</div>
          <div className="text-mineral font-medium">LOD 100 - LOD 500</div>
        </div>
        <div className="space-y-1">
          <div className="text-[10px] text-text-muted uppercase">Processing Capacity</div>
          <div className="text-mineral font-medium">10,000+ Corridor KM</div>
        </div>
        <div className="space-y-1">
          <div className="text-[10px] text-text-muted uppercase">Delivery Hub</div>
          <div className="text-mineral font-medium">Bengaluru // Global Operations</div>
        </div>
      </div>

    </section>
  );
};
