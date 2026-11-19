import React from 'react';
import { Link } from 'react-router-dom';
import { HeroCanvas } from './HeroCanvas';
import { ArrowRight, ChevronRight, Activity, Terminal, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onOpenEstimator?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEstimator }) => {
  const scrollToCapabilities = () => {
    const el = document.getElementById('capabilities-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      
      {/* 3D WebGL Terrain & LiDAR Canvas */}
      <HeroCanvas />

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center lg:text-left">
        
        {/* Top HUD Telemetry Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-navy-950/80 border border-spatial-cyan/30 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(82,191,208,0.15)] animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-spatial-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-spatial-cyan"></span>
          </span>
          <span className="text-[11px] font-mono tracking-widest text-spatial-cyan uppercase font-semibold">
            Survey-Grade Reality Capture & BIM
          </span>
          <span className="hidden sm:inline text-muted/60">|</span>
          <span className="hidden sm:inline text-[11px] font-mono text-offwhite/70">
            ±3mm As-Built Tolerance
          </span>
        </div>

        {/* Main Grid: Headline + Side Telemetry Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Editorial Headline */}
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-offwhite leading-[1.08]">
              We map reality. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-spatial-cyan via-spatial-cyan-bright to-offwhite">
                We engineer what comes next.
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-offwhite/80 max-w-2xl font-light leading-relaxed mx-auto lg:mx-0">
              From high-definition reality capture and LiDAR to LOD 500 BIM, GIS and Digital Twins, Mapo Spatial transforms complex physical environments into structured engineering intelligence for international clients.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={scrollToCapabilities}
                className="w-full sm:w-auto px-7 py-3.5 text-xs font-mono font-bold tracking-wider uppercase text-navy-950 bg-spatial-cyan hover:bg-spatial-cyan-bright transition-all rounded shadow-lg hover:shadow-[0_0_25px_rgba(82,191,208,0.45)] flex items-center justify-center gap-2 group"
              >
                <span>Explore Capabilities</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-7 py-3.5 text-xs font-mono font-semibold tracking-wider uppercase text-offwhite bg-navy-800/80 hover:bg-navy-700 border border-spatial-cyan/30 hover:border-spatial-cyan transition-all rounded backdrop-blur-md flex items-center justify-center gap-2"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-3.5 h-3.5 text-spatial-cyan" />
              </Link>
            </div>
          </div>

          {/* Right Floating Engineering HUD Panel (Desktop) */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="hud-panel p-6 corner-reticle bg-navy-950/85 backdrop-blur-xl border border-spatial-cyan/25 space-y-4">
              
              <div className="flex items-center justify-between pb-3 border-b border-navy-700/80">
                <div className="flex items-center gap-2 text-xs font-mono text-spatial-cyan font-semibold">
                  <Terminal className="w-4 h-4" />
                  <span>SPATIAL_TELEMETRY.SYS</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/30">
                  ONLINE
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center py-1 border-b border-navy-800">
                  <span className="text-muted">Sensor Ingestion</span>
                  <span className="text-offwhite font-medium">Dual TLS + Airborne MMS</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-navy-800">
                  <span className="text-muted">Classification</span>
                  <span className="text-spatial-cyan font-medium">ASPRS 1.4 Standard</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-navy-800">
                  <span className="text-muted">BIM Delivery</span>
                  <span className="text-offwhite font-medium">Autodesk Revit (LOD 100-500)</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-navy-800">
                  <span className="text-muted">Global Operations</span>
                  <span className="text-offwhite font-medium">UK, Europe, APAC, Americas</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-muted">Verification Matrix</span>
                  <span className="text-spatial-cyan font-medium">Heatmap Delta &lt; 3mm</span>
                </div>
              </div>

              {onOpenEstimator && (
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onOpenEstimator}
                    className="w-full py-2.5 text-[11px] font-mono uppercase tracking-wider text-spatial-cyan hover:text-navy-950 hover:bg-spatial-cyan border border-spatial-cyan/40 rounded transition-all text-center flex items-center justify-center gap-2"
                  >
                    <Activity className="w-3.5 h-3.5" />
                    <span>Launch Project Scope Calculator</span>
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Bottom Hero Metric Bar */}
        <div className="mt-16 pt-8 border-t border-spatial-cyan/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-display font-bold text-offwhite flex items-center gap-1">
              <span>±3</span>
              <span className="text-sm font-mono text-spatial-cyan">mm</span>
            </div>
            <div className="text-xs text-muted font-mono uppercase tracking-wider">
              Survey-Grade Tolerance
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-display font-bold text-offwhite flex items-center gap-1">
              <span>LOD 500</span>
            </div>
            <div className="text-xs text-muted font-mono uppercase tracking-wider">
              BIM As-Built Precision
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-display font-bold text-offwhite flex items-center gap-1">
              <span>Multi-Modal</span>
            </div>
            <div className="text-xs text-muted font-mono uppercase tracking-wider">
              TLS, MMS, UAV & SUE
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-display font-bold text-offwhite flex items-center gap-1">
              <span>Zero-Friction</span>
            </div>
            <div className="text-xs text-muted font-mono uppercase tracking-wider">
              International Delivery
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
