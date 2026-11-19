import React from 'react';

export const IntroSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto w-full z-10 relative bg-white">
      
      {/* Editorial Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-subtle-border pb-16">
        
        <div className="lg:col-span-4 space-y-2">
          <span className="text-xs font-mono text-gold font-bold tracking-widest uppercase block">
            [01 // SPATIAL INTELLIGENCE PHILOSOPHY]
          </span>
          <div className="font-mono text-xs text-text-muted">
            CAPTURE. INTERPRET. DELIVER.
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-navy leading-[1.1] tracking-tight">
            Every physical environment holds more engineering truth than the eye can see.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-text-secondary font-light leading-relaxed">
            <p>
              In capital construction, intercity rail transport, and complex industrial plant engineering, physical reality is rarely orthogonal. Unrecorded deviations, settled foundations, and undocumented subsurface utilities introduce immense financial risk to project schedules.
            </p>
            <p>
              Mapo Spatial operates as an international spatial engineering partner. We bridge raw reality capture—terrestrial laser scans, airborne LiDAR, and mobile mapping—with parametric BIM and Digital Twin platforms, translating massive, unstructured point clouds into mathematical certainty.
            </p>
          </div>
        </div>

      </div>

      {/* 4 Technical Process Columns (Architectural Wireframe Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
        
        <div className="space-y-3 p-6 border border-subtle-border bg-warm-white rounded-sm survey-corner transition-all hover:border-gold/60 hover:shadow-sm">
          <span className="text-xs font-mono font-bold text-gold">01 / CAPTURE</span>
          <h3 className="text-base font-display font-bold text-navy">
            Sub-Millimeter Ingestion
          </h3>
          <p className="text-xs text-text-secondary font-light leading-relaxed">
            High-definition terrestrial laser scanning and mobile LiDAR registered to geodetic ground control networks.
          </p>
        </div>

        <div className="space-y-3 p-6 border border-subtle-border bg-warm-white rounded-sm survey-corner transition-all hover:border-gold/60 hover:shadow-sm">
          <span className="text-xs font-mono font-bold text-gold">02 / CLASSIFY</span>
          <h3 className="text-base font-display font-bold text-navy">
            ASPRS Point Analytics
          </h3>
          <p className="text-xs text-text-secondary font-light leading-relaxed">
            Automated and manual classification separating ground, structures, catenary lines, and vegetation envelopes.
          </p>
        </div>

        <div className="space-y-3 p-6 border border-subtle-border bg-warm-white rounded-sm survey-corner transition-all hover:border-gold/60 hover:shadow-sm">
          <span className="text-xs font-mono font-bold text-gold">03 / MODEL</span>
          <h3 className="text-base font-display font-bold text-navy">
            Parametric Revit BIM
          </h3>
          <p className="text-xs text-text-secondary font-light leading-relaxed">
            Coordinated multi-discipline modeling across LOD 100-500 enriched with COBie facilities management data.
          </p>
        </div>

        <div className="space-y-3 p-6 border border-subtle-border bg-warm-white rounded-sm survey-corner transition-all hover:border-gold/60 hover:shadow-sm">
          <span className="text-xs font-mono font-bold text-gold">04 / VERIFY</span>
          <h3 className="text-base font-display font-bold text-navy">
            Deviation Heatmaps
          </h3>
          <p className="text-xs text-text-secondary font-light leading-relaxed">
            Rigorous algorithmic point-to-model deviation analysis ensuring strict adherence within ±3mm tolerances.
          </p>
        </div>

      </div>

    </section>
  );
};
