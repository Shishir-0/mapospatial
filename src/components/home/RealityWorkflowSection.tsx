import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layers, Scan, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

export const RealityWorkflowSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(1);
  const [splitPosition, setSplitPosition] = useState<number>(50);

  const stages = [
    {
      num: 1,
      title: 'Physical Reality',
      subtitle: 'Raw Terrestrial & Mobile Point Clouds',
      desc: 'High-density laser scan data capturing the asset in its exact physical condition. Billions of coordinates with intensity values and georeferenced coordinates.',
      image: '/assets/Plant-room3.jpg',
      badge: 'INPUT: RAW E57 / LAS POINT CLOUD',
      metrics: [
        { label: 'Capture Format', val: 'E57 / LAS 1.4' },
        { label: 'Point Pitch', val: 'Down to 1.5mm' },
        { label: 'Registration', val: 'Sub-millimeter Target Tie' }
      ]
    },
    {
      num: 2,
      title: 'Spatial Processing',
      subtitle: 'Classification & Feature Extraction',
      desc: 'Point cloud pre-processing, noise filtering, and automated/manual geometric segmentation. Point clusters are classified into architectural envelopes, MEP conduits, and structural baselines.',
      image: '/assets/Utilities-mapping1.jpg.png',
      badge: 'PROCESSING: ASPRS CLASSIFICATION',
      metrics: [
        { label: 'Classification', val: 'ASPRS Standards' },
        { label: 'Breaklines', val: 'Vector Enforced' },
        { label: 'Noise Decimation', val: 'Gaussian Filtered' }
      ]
    },
    {
      num: 3,
      title: 'Digital Representation',
      subtitle: 'Parametric BIM & Coordinated Model',
      desc: 'The final structured digital twin. Parametric Autodesk Revit geometry (LOD 100-500) enriched with COBie operational metadata, ready for clash coordination and facility management.',
      image: '/assets/Plant.png',
      badge: 'DELIVERABLE: LOD 400 REVIT BIM',
      metrics: [
        { label: 'Model LOD', val: 'LOD 350 / 400' },
        { label: 'Tolerance Delta', val: '< 3mm Heatmap' },
        { label: 'Clash Resolution', val: '100% Navisworks Verified' }
      ]
    }
  ];

  const current = stages[activeStage - 1];

  return (
    <section className="py-28 px-6 sm:px-8 bg-navy-deep text-white w-full z-10 relative overflow-hidden" id="workflow">
      
      {/* Background Subtle Spatial Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#B69A5A_1px,transparent_1px),linear-gradient(to_bottom,#B69A5A_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono text-gold font-bold tracking-widest uppercase block">
              [03 // SIGNATURE 20% CONTRAST STAGE]
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              From Reality to Digital
            </h2>
            <p className="text-sm text-text-muted font-light">
              Experience the 3-phase spatial engineering transformation: from physical site capture to clash-free, parametric BIM deliverables.
            </p>
          </div>

          <div className="font-mono text-xs text-gold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
            <span>ACTIVE PHASE: 0{activeStage} // {current.title.toUpperCase()}</span>
          </div>
        </div>

        {/* Stage Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {stages.map((st) => {
            const isActive = activeStage === st.num;
            return (
              <button
                key={st.num}
                type="button"
                onClick={() => setActiveStage(st.num)}
                className={`p-6 text-left border rounded-sm transition-all relative ${
                  isActive
                    ? 'bg-navy border-gold text-white shadow-xl ring-1 ring-gold/30'
                    : 'bg-navy/40 border-white/10 text-text-muted hover:border-gold/40 hover:bg-navy/60'
                }`}
              >
                <div className="flex items-center justify-between font-mono text-[11px] mb-2">
                  <span className={isActive ? 'text-gold font-bold' : 'text-text-muted'}>
                    PHASE 0{st.num}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-text-muted">
                    {st.num === 1 ? 'CAPTURE' : st.num === 2 ? 'PROCESS' : 'DELIVER'}
                  </span>
                </div>

                <div className={`text-xl font-display font-bold mb-1 transition-colors ${
                  isActive ? 'text-white' : 'text-slate-300'
                }`}>
                  {st.title}
                </div>

                <div className="text-xs font-mono text-text-muted line-clamp-1">
                  {st.subtitle}
                </div>

                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold" />
                )}
              </button>
            );
          })}
        </div>

        {/* Transformation Showcase Panel */}
        <div className="p-6 sm:p-10 border border-white/10 bg-navy/80 backdrop-blur-md rounded-sm space-y-8 survey-corner shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Transformation Frame (Left Column) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative rounded-sm overflow-hidden border border-white/10 bg-black aspect-[16/10] shadow-2xl group">
                <img 
                  src={current.image} 
                  alt={current.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Header */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] text-white">
                  <span className="bg-navy-deep/90 px-3 py-1 rounded-sm border border-gold/40 text-gold font-bold">
                    {current.badge}
                  </span>
                  <span className="bg-black/70 px-2 py-1 rounded-sm text-text-muted">
                    STAGE 0{current.num} OF 03
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3 bg-navy-deep/90 backdrop-blur-md p-3 rounded-sm border border-white/10 flex items-center justify-between font-mono text-xs">
                  <span className="text-white font-semibold">TOLERANCE DELTA: ±3MM</span>
                  <span className="text-gold font-bold">VERIFIED DELIVERABLE</span>
                </div>
              </div>

              {/* Reality to BIM Comparison Hint */}
              <div className="flex items-center justify-between text-[11px] font-mono text-text-muted px-1">
                <span>STAGE 1: Dense Laser Scan (E57)</span>
                <span className="text-gold">→</span>
                <span>STAGE 2: Point Classification</span>
                <span className="text-gold">→</span>
                <span>STAGE 3: Parametric Revit (RVT)</span>
              </div>
            </div>

            {/* Stage Technical Specifications (Right Column) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="space-y-2 border-b border-white/10 pb-4">
                <span className="text-xs font-mono text-gold font-bold tracking-wider uppercase">
                  Engineering Execution // Stage 0{current.num}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  {current.title}
                </h3>
                <div className="text-xs font-mono text-slate-300">
                  {current.subtitle}
                </div>
              </div>

              <p className="text-sm text-text-muted font-light leading-relaxed">
                {current.desc}
              </p>

              {/* Metrics Table */}
              <div className="bg-black/30 p-5 rounded-sm border border-white/10 space-y-3 font-mono text-xs">
                <div className="text-gold uppercase tracking-wider text-[11px] font-bold border-b border-white/10 pb-2">
                  Stage Tolerances & Specifications
                </div>
                <div className="space-y-2.5">
                  {current.metrics.map((m, idx) => (
                    <div key={idx} className="flex justify-between items-center py-1 border-b border-white/5">
                      <span className="text-text-muted">{m.label}</span>
                      <span className="text-white font-bold">{m.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/workflow"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold hover:bg-gold/90 text-navy font-mono text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-md"
                >
                  <span>Explore Full 6-Stage Methodology</span>
                  <ArrowRight className="w-4 h-4 text-navy" />
                </Link>

                <Link
                  to="/scan-to-bim"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider rounded-sm transition-all border border-white/20"
                >
                  <span>Scan to BIM Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold" />
                </Link>
              </div>

            </div>

          </div>

          {/* Bottom Triple Architecture Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10 text-xs font-mono">
            <div className="space-y-1 p-3 bg-white/5 rounded-sm">
              <span className="text-text-muted block text-[10px] uppercase">01 / CAPTURE STANDARD</span>
              <span className="text-white font-bold">Unstructured Laser Points (±2mm)</span>
            </div>
            <div className="space-y-1 p-3 bg-white/5 rounded-sm">
              <span className="text-text-muted block text-[10px] uppercase">02 / FEATURE EXTRACTION</span>
              <span className="text-white font-bold">Point Classification & Vector Lines</span>
            </div>
            <div className="space-y-1 p-3 bg-white/5 rounded-sm">
              <span className="text-text-muted block text-[10px] uppercase">03 / FINAL ASSET</span>
              <span className="text-gold font-bold">Coordinated Revit BIM / Digital Twin</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
