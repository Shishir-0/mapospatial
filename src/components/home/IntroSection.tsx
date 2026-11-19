import React from 'react';

export const IntroSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto w-full z-10 relative bg-[#FFFFFF]">
      
      {/* Editorial Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-[#DCE1E7] pb-16">
        
        <div className="lg:col-span-4 space-y-2">
          <span className="text-[13px] font-mono text-[#596579] font-bold tracking-[0.08em] uppercase block">
            [01 // SPATIAL INTELLIGENCE PHILOSOPHY]
          </span>
          <div className="font-mono text-xs text-[#536174] font-medium">
            CAPTURE. INTERPRET. DELIVER.
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#14233F] leading-[1.1] tracking-tight">
            Every physical environment holds more engineering truth than the eye can see.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-[16px] text-[#425168] font-normal leading-[1.65]">
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
        
        <div className="space-y-3 p-6 border border-[#DCE1E7] bg-[#F7F8FA] rounded-sm survey-corner transition-all hover:border-[#B69A5A]/60 shadow-xs">
          <span className="text-xs font-mono font-bold text-[#596579]">01 / CAPTURE</span>
          <h3 className="text-base font-display font-bold text-[#14233F]">
            Sub-Millimeter Ingestion
          </h3>
          <p className="text-[13px] text-[#425168] font-normal leading-relaxed">
            High-definition terrestrial laser scanning and mobile LiDAR registered to geodetic ground control networks.
          </p>
        </div>

        <div className="space-y-3 p-6 border border-[#DCE1E7] bg-[#F7F8FA] rounded-sm survey-corner transition-all hover:border-[#B69A5A]/60 shadow-xs">
          <span className="text-xs font-mono font-bold text-[#596579]">02 / CLASSIFY</span>
          <h3 className="text-base font-display font-bold text-[#14233F]">
            ASPRS Point Analytics
          </h3>
          <p className="text-[13px] text-[#425168] font-normal leading-relaxed">
            Automated and manual classification separating ground, structures, catenary lines, and vegetation envelopes.
          </p>
        </div>

        <div className="space-y-3 p-6 border border-[#DCE1E7] bg-[#F7F8FA] rounded-sm survey-corner transition-all hover:border-[#B69A5A]/60 shadow-xs">
          <span className="text-xs font-mono font-bold text-[#596579]">03 / MODEL</span>
          <h3 className="text-base font-display font-bold text-[#14233F]">
            Parametric Revit BIM
          </h3>
          <p className="text-[13px] text-[#425168] font-normal leading-relaxed">
            Coordinated multi-discipline modeling across LOD 100-500 enriched with COBie facilities management data.
          </p>
        </div>

        <div className="space-y-3 p-6 border border-[#DCE1E7] bg-[#F7F8FA] rounded-sm survey-corner transition-all hover:border-[#B69A5A]/60 shadow-xs">
          <span className="text-xs font-mono font-bold text-[#596579]">04 / VERIFY</span>
          <h3 className="text-base font-display font-bold text-[#14233F]">
            Deviation Heatmaps
          </h3>
          <p className="text-[13px] text-[#425168] font-normal leading-relaxed">
            Rigorous algorithmic point-to-model deviation analysis ensuring strict adherence within ±3mm tolerances.
          </p>
        </div>

      </div>

    </section>
  );
};
