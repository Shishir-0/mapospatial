import React from 'react';

export const IntroSection: React.FC = () => {
  return (
    <section className="py-32 px-6 sm:px-8 max-w-7xl mx-auto w-full z-10 relative">
      
      {/* Editorial Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-subtle-border pb-16">
        
        <div className="lg:col-span-4 space-y-2">
          <span className="text-[11px] font-mono text-copper tracking-widest uppercase">
            [SPATIAL INTELLIGENCE PHILOSOPHY]
          </span>
          <div className="font-mono text-xs text-text-muted">
            01 // CAPTURE. INTERPRET. DELIVER.
          </div>
        </div>

        <div className="lg:col-span-8 space-y-8">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-mineral leading-[1.08] tracking-tight">
            Every environment holds more information than the eye can see.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-text-secondary font-light leading-relaxed">
            <p>
              In capital construction, rail transport, and complex industrial plant engineering, physical reality is rarely orthogonal. Unrecorded deviations, settled foundations, and undocumented subsurface utilities introduce immense risk to project timelines.
            </p>
            <p>
              Mapo Spatial operates as an international spatial engineering partner. We bridge raw reality capture—terrestrial laser scans, airborne LiDAR, and mobile mapping—with parametric BIM and Digital Twin platforms, translating unstructured spatial point data into mathematical certainty.
            </p>
          </div>
        </div>

      </div>

      {/* 4 Technical Process Columns (Architectural Wireframe Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-12">
        
        <div className="space-y-3 p-5 border border-subtle-border/60 bg-carbon/50 backdrop-blur-sm survey-corner">
          <span className="text-xs font-mono text-copper">01 / CAPTURE</span>
          <h3 className="text-base font-display font-semibold text-mineral">
            Sub-Millimeter Ingestion
          </h3>
          <p className="text-xs text-text-muted font-light leading-relaxed">
            High-definition terrestrial laser scanning and mobile LiDAR registered to geodetic ground control networks.
          </p>
        </div>

        <div className="space-y-3 p-5 border border-subtle-border/60 bg-carbon/50 backdrop-blur-sm survey-corner">
          <span className="text-xs font-mono text-copper">02 / CLASSIFY</span>
          <h3 className="text-base font-display font-semibold text-mineral">
            ASPRS Point Analytics
          </h3>
          <p className="text-xs text-text-muted font-light leading-relaxed">
            Automated and manual classification separating ground, structures, catenary lines, and vegetation envelopes.
          </p>
        </div>

        <div className="space-y-3 p-5 border border-subtle-border/60 bg-carbon/50 backdrop-blur-sm survey-corner">
          <span className="text-xs font-mono text-copper">03 / MODEL</span>
          <h3 className="text-base font-display font-semibold text-mineral">
            Parametric Revit BIM
          </h3>
          <p className="text-xs text-text-muted font-light leading-relaxed">
            Coordinated multi-discipline modeling across LOD 100-500 enriched with COBie facilities management data.
          </p>
        </div>

        <div className="space-y-3 p-5 border border-subtle-border/60 bg-carbon/50 backdrop-blur-sm survey-corner">
          <span className="text-xs font-mono text-copper">04 / VERIFY</span>
          <h3 className="text-base font-display font-semibold text-mineral">
            Deviation Heatmaps
          </h3>
          <p className="text-xs text-text-muted font-light leading-relaxed">
            Rigorous algorithmic point-to-model deviation analysis ensuring strict adherence within ±3mm tolerances.
          </p>
        </div>

      </div>

    </section>
  );
};
