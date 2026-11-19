import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { HeroSpatialCanvas } from './HeroSpatialCanvas';

export const HeroSection: React.FC = () => {
  const scrollToCapabilities = () => {
    const el = document.getElementById('capabilities');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-28 sm:pt-36 pb-12 px-6 sm:px-8 z-10 bg-[#080B10] text-white overflow-hidden">
      
      {/* FULL-SCREEN 3D SPATIAL ENGINE BACKGROUND */}
      <HeroSpatialCanvas />

      {/* Carefully controlled editorial gradient overlay for razor-sharp typography */}
      <div className="absolute inset-0 pointer-events-none z-[1] bg-gradient-to-r from-[#080B10]/95 via-[#080B10]/65 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none z-[1] bg-gradient-to-t from-white via-white/20 to-transparent" />

      {/* TOP TECHNICAL METADATA BAR */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-slate-400 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-white font-bold uppercase tracking-wider">
            SPATIAL ENGINEERING // VERIFIED GEOMETRY
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-[10px] uppercase text-slate-400">
          <span>SURVEY DATUM: WGS84</span>
          <span className="text-gold font-semibold">TOLERANCE: ±3MM</span>
          <span>BIM SPEC: LOD 100 - 500</span>
          <span>GRID: OGC 3D TILES</span>
        </div>
      </div>

      {/* MAIN EDITORIAL HERO COMPOSITION (Rendered directly in foreground of full-screen 3D) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12 lg:py-20">
        <div className="max-w-3xl space-y-8">
          
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-gold uppercase inline-flex items-center gap-2 bg-navy-deep/80 px-3 py-1 rounded-sm border border-gold/30 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              [ SPATIAL ENGINEERING. REFINED. ]
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.05] tracking-tight">
              Understanding the world. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-gold">
                Engineering what comes next.
              </span>
            </h1>
          </div>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
            From high-density reality capture and corridor LiDAR to Scan to BIM, geospatial engineering and digital twins, we transform complex physical environments into precise digital information.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 font-mono text-xs uppercase tracking-wider">
            <button
              type="button"
              onClick={scrollToCapabilities}
              className="px-8 py-4 bg-navy hover:bg-navy-deep text-white transition-all font-semibold rounded-sm text-center flex items-center justify-center gap-2 shadow-xl group border border-gold/40 hover:border-gold"
            >
              <span>Explore Capabilities</span>
              <ArrowDown className="w-4 h-4 text-gold group-hover:translate-y-0.5 transition-transform" />
            </button>

            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 hover:border-gold transition-all rounded-sm text-center flex items-center justify-center gap-2 font-medium"
            >
              <span>Discuss a Project</span>
              <ArrowUpRight className="w-4 h-4 text-gold" />
            </Link>
          </div>

          {/* Quick Ground-Truth Proof Tag */}
          <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="text-gold font-bold">✦</span>
            <span>Sub-Millimeter Sensor Registration // ISO & ASPRS Compliant Workflows</span>
          </div>

        </div>
      </div>

      {/* BOTTOM TECHNICAL GRID ROW */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/10 font-mono text-xs">
        <div className="space-y-1">
          <div className="text-[10px] text-slate-400 uppercase">Precision Standard</div>
          <div className="text-white font-bold">±3mm Survey Grade</div>
        </div>
        <div className="space-y-1">
          <div className="text-[10px] text-slate-400 uppercase">Modeling LOD</div>
          <div className="text-white font-bold">LOD 100 - LOD 500 Revit</div>
        </div>
        <div className="space-y-1">
          <div className="text-[10px] text-slate-400 uppercase">Corridor Scale</div>
          <div className="text-white font-bold">10,000+ Corridor KM</div>
        </div>
        <div className="space-y-1">
          <div className="text-[10px] text-slate-400 uppercase">Global Hub</div>
          <div className="text-white font-bold">Bengaluru // UK Operations</div>
        </div>
      </div>

    </section>
  );
};
