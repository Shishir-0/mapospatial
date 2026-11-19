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
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-36 pb-12 px-6 sm:px-8 max-w-7xl mx-auto w-full z-10">
      
      {/* Top Technical Metadata Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-text-muted border-b border-subtle-border pb-4">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-navy font-bold uppercase tracking-wider">
            SPATIAL ENGINEERING // VERIFIED GEOMETRY
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-[10px] uppercase">
          <span>SURVEY DATUM: WGS84</span>
          <span className="text-gold font-semibold">TOLERANCE: ±3MM</span>
          <span>BIM SPEC: LOD 100 - 500</span>
        </div>
      </div>

      {/* Main Two-Column Architectural Hero Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center my-auto py-8 lg:py-12">
        
        {/* Left Column: Editorial Narrative & Actions */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8 pr-0 lg:pr-4">
          
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-gold uppercase block">
              [ SPATIAL ENGINEERING. REFINED. ]
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-navy leading-[1.05] tracking-tight">
              Understanding the world, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy via-navy to-navy-deep">
                one dimension at a time.
              </span>
            </h1>
          </div>

          <p className="text-base sm:text-lg text-text-secondary max-w-2xl font-light leading-relaxed">
            From high-density reality capture and corridor LiDAR to Scan-to-BIM, geospatial engineering, and interactive digital twins — we translate complex physical spaces into mathematically verified, parametric assets for international engineering and infrastructure leaders.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 font-mono text-xs uppercase tracking-wider">
            <button
              type="button"
              onClick={scrollToCapabilities}
              className="px-6 py-4 bg-navy text-white hover:bg-navy-deep transition-all font-semibold rounded-sm text-center flex items-center justify-center gap-2 shadow-sm group border border-navy hover:border-gold"
            >
              <span>Explore Capabilities</span>
              <ArrowDown className="w-4 h-4 text-gold group-hover:translate-y-0.5 transition-transform" />
            </button>

            <Link
              to="/contact"
              className="px-6 py-4 bg-warm-white text-navy hover:bg-subtle-bg border border-subtle-border hover:border-gold transition-all rounded-sm text-center flex items-center justify-center gap-2 font-medium"
            >
              <span>Discuss a Project</span>
              <ArrowUpRight className="w-4 h-4 text-gold" />
            </Link>
          </div>

          {/* Quick Technical Guarantee Tag */}
          <div className="pt-2 flex items-center gap-2 text-xs font-mono text-text-muted">
            <span className="text-gold font-bold">✦</span>
            <span>Zero AI Hallucinations // Strictly Ground-Truth Survey Datasets</span>
          </div>

        </div>

        {/* Right Column: Interactive 3D Spatial Canvas Viewport */}
        <div className="lg:col-span-5 relative">
          <div className="relative border border-subtle-border bg-warm-white/70 backdrop-blur-sm rounded-sm p-2 survey-corner overflow-hidden shadow-[0_8px_30px_rgba(20,35,63,0.05)]">
            
            {/* Viewport Floating Header */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-subtle-border font-mono text-[10px] text-text-muted bg-white/80">
              <span className="font-semibold text-navy flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                3D SPATIAL ENGINE // LIVE WEBGL
              </span>
              <span>FOV: 45° // SCAN BEAM</span>
            </div>

            {/* Embedded Live 3D Scene */}
            <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[480px] bg-gradient-to-b from-warm-white to-white">
              <HeroSpatialCanvas />

              {/* Viewport HUD Overlays */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[9px] text-text-muted bg-white/90 backdrop-blur-md px-3 py-1.5 border border-subtle-border">
                <span className="text-navy font-semibold">DATUM: WGS84 // UTM-43N</span>
                <span className="text-gold font-bold">LIDAR: 1.2M PTS/SEC</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Technical Grid Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-subtle-border font-mono text-xs">
        <div className="space-y-1">
          <div className="text-[10px] text-text-muted uppercase">Precision Standard</div>
          <div className="text-navy font-bold">±3mm Survey Grade</div>
        </div>
        <div className="space-y-1">
          <div className="text-[10px] text-text-muted uppercase">Modeling LOD</div>
          <div className="text-navy font-bold">LOD 100 - LOD 500 Revit</div>
        </div>
        <div className="space-y-1">
          <div className="text-[10px] text-text-muted uppercase">Corridor Scale</div>
          <div className="text-navy font-bold">10,000+ Corridor KM</div>
        </div>
        <div className="space-y-1">
          <div className="text-[10px] text-text-muted uppercase">Engineering Operations</div>
          <div className="text-navy font-bold">Bengaluru Hub // Global B2B</div>
        </div>
      </div>

    </section>
  );
};
