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
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-28 sm:pt-36 pb-12 px-6 sm:px-8 z-10 bg-white text-[#14233F] overflow-hidden">
      
      {/* FULL-SCREEN 3D SPATIAL ENGINE BACKGROUND */}
      <HeroSpatialCanvas />

      {/* Subtle white scrim providing flawless legibility for the left text zone while preserving 3D visibility across the viewport */}
      <div className="absolute inset-0 pointer-events-none z-[1] bg-gradient-to-r from-white via-white/85 via-45% to-transparent" />

      {/* TOP TECHNICAL METADATA BAR */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#536174] border-b border-[#DCE1E7] pb-4">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#B69A5A] animate-pulse" />
          <span className="text-[#14233F] font-bold uppercase tracking-wider text-xs">
            SPATIAL ENGINEERING // VERIFIED GEOMETRY
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-[12px] uppercase text-[#657184] font-medium">
          <span>SURVEY DATUM: WGS84</span>
          <span className="text-[#B69A5A] font-bold">TOLERANCE: ±3MM</span>
          <span>BIM SPEC: LOD 100 - 500</span>
          <span>GRID: OGC 3D TILES</span>
        </div>
      </div>

      {/* MAIN EDITORIAL HERO COMPOSITION (Rendered directly in foreground of full-screen 3D) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12 lg:py-20">
        <div className="max-w-[720px] space-y-8">
          
          <div className="space-y-4">
            <span className="text-[12px] font-mono font-bold tracking-widest text-[#596579] uppercase inline-flex items-center gap-2 bg-[#F7F8FA] px-3.5 py-1.5 rounded-sm border border-[#DCE1E7]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B69A5A]" />
              [ SPATIAL ENGINEERING. REFINED. ]
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-display font-extrabold text-[#14233F] leading-[1.05] tracking-tight">
              Understanding the world, <br />
              <span className="text-[#14233F]">
                one dimension at a time.
              </span>
            </h1>
          </div>

          <p className="text-lg sm:text-[19px] text-[#425168] max-w-[650px] font-normal leading-[1.6]">
            From high-density reality capture and corridor LiDAR to Scan to BIM, geospatial engineering and digital twins, we transform complex physical environments into precise digital information.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 font-mono text-xs uppercase tracking-wider">
            <button
              type="button"
              onClick={scrollToCapabilities}
              className="px-8 py-4 bg-[#14233F] hover:bg-[#0E1930] text-white transition-all font-semibold rounded-sm text-center flex items-center justify-center gap-2 shadow-md border border-[#14233F] hover:border-[#B69A5A] group"
            >
              <span>Explore Capabilities</span>
              <ArrowDown className="w-4 h-4 text-[#B69A5A] group-hover:translate-y-0.5 transition-transform" />
            </button>

            <Link
              to="/contact"
              className="px-8 py-4 bg-[#FFFFFF] hover:bg-[#F7F8FA] text-[#14233F] border border-[#DCE1E7] hover:border-[#B69A5A] transition-all rounded-sm text-center flex items-center justify-center gap-2 font-semibold shadow-xs"
            >
              <span>Discuss a Project</span>
              <ArrowUpRight className="w-4 h-4 text-[#B69A5A]" />
            </Link>
          </div>

          {/* Technical Microcopy */}
          <div className="pt-2 flex items-center gap-2 text-[13px] font-mono text-[#657184] font-medium">
            <span className="text-[#B69A5A] font-bold">✦</span>
            <span>Sub-Millimeter Sensor Registration // ISO & ASPRS Compliant Workflows</span>
          </div>

        </div>
      </div>

      {/* BOTTOM TECHNICAL GRID ROW */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-[#DCE1E7] font-mono text-xs">
        <div className="space-y-1">
          <div className="text-[11px] text-[#536174] uppercase font-medium">Precision Standard</div>
          <div className="text-[#14233F] font-bold text-sm">±3mm Survey Grade</div>
        </div>
        <div className="space-y-1">
          <div className="text-[11px] text-[#536174] uppercase font-medium">Modeling LOD</div>
          <div className="text-[#14233F] font-bold text-sm">LOD 100 - LOD 500 Revit</div>
        </div>
        <div className="space-y-1">
          <div className="text-[11px] text-[#536174] uppercase font-medium">Corridor Scale</div>
          <div className="text-[#14233F] font-bold text-sm">10,000+ Corridor KM</div>
        </div>
        <div className="space-y-1">
          <div className="text-[11px] text-[#536174] uppercase font-medium">Global Hub</div>
          <div className="text-[#14233F] font-bold text-sm">Bengaluru // UK Operations</div>
        </div>
      </div>

    </section>
  );
};
