import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layers, Scan, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

export const RealityWorkflowSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(1);

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
    <section className="py-20 sm:py-24 px-4 sm:px-8 bg-[#F7F8FA] border-t border-b border-[#DCE1E7] text-[#14233F] w-full z-10 relative overflow-hidden" id="workflow">
      
      {/* Background Subtle Spatial Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#14233F_1px,transparent_1px),linear-gradient(to_bottom,#14233F_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 border-b border-[#DCE1E7] pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono text-[#B69A5A] font-bold tracking-widest uppercase block">
              [03 // SIGNATURE TRANSFORMATION PIPELINE]
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#14233F] tracking-tight">
              From Reality to Digital
            </h2>
            <p className="text-base text-[#425168] font-normal leading-relaxed">
              Experience the 3-phase spatial engineering transformation: from physical site capture to clash-free, parametric BIM deliverables.
            </p>
          </div>

          <div className="font-mono text-xs text-[#14233F] flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-sm border border-[#DCE1E7] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#B69A5A]" />
            <span className="font-semibold">ACTIVE PHASE: 0{activeStage} // {current.title.toUpperCase()}</span>
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
                    ? 'bg-white border-[#14233F] text-[#14233F] shadow-md ring-1 ring-[#14233F]/10'
                    : 'bg-white/80 border-[#DCE1E7] text-[#536174] hover:border-[#B69A5A]/50 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between font-mono text-[11px] mb-2">
                  <span className={isActive ? 'text-[#B69A5A] font-bold' : 'text-[#7B8491]'}>
                    PHASE 0{st.num}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#7B8491] font-semibold">
                    {st.num === 1 ? 'CAPTURE' : st.num === 2 ? 'PROCESS' : 'DELIVER'}
                  </span>
                </div>

                <div className={`text-xl font-display font-bold mb-1 transition-colors ${
                  isActive ? 'text-[#14233F]' : 'text-[#2C3B53]'
                }`}>
                  {st.title}
                </div>

                <div className="text-xs font-mono text-[#536174] line-clamp-1">
                  {st.subtitle}
                </div>

                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#B69A5A]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Transformation Showcase Panel */}
        <div className="p-6 sm:p-10 border border-[#DCE1E7] bg-white rounded-sm space-y-8 shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Transformation Frame (Left Column) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative rounded-sm overflow-hidden border border-[#DCE1E7] bg-[#F7F8FA] aspect-[16/10] shadow-md group">
                <img 
                  src={current.image} 
                  alt={current.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Header */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[10px]">
                  <span className="bg-[#14233F]/90 text-white px-3 py-1 rounded-sm border border-[#B69A5A]/40 font-bold">
                    {current.badge}
                  </span>
                  <span className="bg-white/95 text-[#14233F] px-2.5 py-1 rounded-sm border border-[#DCE1E7] font-semibold">
                    STAGE 0{current.num} OF 03
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-sm border border-[#DCE1E7] flex items-center justify-between font-mono text-xs shadow-md">
                  <span className="text-[#14233F] font-bold">TOLERANCE DELTA: ±3MM</span>
                  <span className="text-[#B69A5A] font-bold">VERIFIED DELIVERABLE</span>
                </div>
              </div>

              {/* Reality to BIM Comparison Hint */}
              <div className="flex items-center justify-between text-[11px] font-mono text-[#536174] px-1 font-medium">
                <span>STAGE 1: Dense Laser Scan (E57)</span>
                <span className="text-[#B69A5A] font-bold">→</span>
                <span>STAGE 2: Point Classification</span>
                <span className="text-[#B69A5A] font-bold">→</span>
                <span>STAGE 3: Parametric Revit (RVT)</span>
              </div>
            </div>

            {/* Stage Technical Specifications (Right Column) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="space-y-2 border-b border-[#DCE1E7] pb-4">
                <span className="text-xs font-mono text-[#B69A5A] font-bold tracking-wider uppercase">
                  Engineering Execution // Stage 0{current.num}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#14233F]">
                  {current.title}
                </h3>
                <div className="text-xs font-mono text-[#536174]">
                  {current.subtitle}
                </div>
              </div>

              <p className="text-sm text-[#425168] font-normal leading-relaxed">
                {current.desc}
              </p>

              {/* Metrics Table */}
              <div className="bg-[#F7F8FA] p-5 rounded-sm border border-[#DCE1E7] space-y-3 font-mono text-xs">
                <div className="text-[#14233F] uppercase tracking-wider text-[11px] font-bold border-b border-[#DCE1E7] pb-2">
                  Stage Tolerances & Specifications
                </div>
                <div className="space-y-2.5">
                  {current.metrics.map((m, idx) => (
                    <div key={idx} className="flex justify-between items-center py-1 border-b border-[#DCE1E7]/60">
                      <span className="text-[#536174]">{m.label}</span>
                      <span className="text-[#14233F] font-bold">{m.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/workflow"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#14233F] hover:bg-[#0E1930] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-md"
                >
                  <span>Explore Full 6-Stage Methodology</span>
                  <ArrowRight className="w-4 h-4 text-[#B69A5A]" />
                </Link>

                <Link
                  to="/scan-to-bim"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-[#F7F8FA] text-[#14233F] font-mono text-xs font-semibold uppercase tracking-wider rounded-sm transition-all border border-[#DCE1E7]"
                >
                  <span>Scan to BIM Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B69A5A]" />
                </Link>
              </div>

            </div>

          </div>

          {/* Bottom Triple Architecture Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#DCE1E7] text-xs font-mono">
            <div className="space-y-1 p-3.5 bg-[#F7F8FA] border border-[#DCE1E7] rounded-sm">
              <span className="text-[#536174] block text-[10px] uppercase font-semibold">01 / CAPTURE STANDARD</span>
              <span className="text-[#14233F] font-bold">Unstructured Laser Points (±2mm)</span>
            </div>
            <div className="space-y-1 p-3.5 bg-[#F7F8FA] border border-[#DCE1E7] rounded-sm">
              <span className="text-[#536174] block text-[10px] uppercase font-semibold">02 / FEATURE EXTRACTION</span>
              <span className="text-[#14233F] font-bold">Point Classification & Vector Lines</span>
            </div>
            <div className="space-y-1 p-3.5 bg-[#F7F8FA] border border-[#DCE1E7] rounded-sm">
              <span className="text-[#536174] block text-[10px] uppercase font-semibold">03 / FINAL ASSET</span>
              <span className="text-[#14233F] font-bold">Coordinated Revit BIM / Digital Twin</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
