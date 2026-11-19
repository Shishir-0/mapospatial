import React from 'react';
import { useSpatialScene } from '../../context/SpatialSceneContext';
import { Layers, Cpu, Scan, CheckCircle2 } from 'lucide-react';

export const RealityWorkflowSection: React.FC = () => {
  const { realityStage, setRealityStage } = useSpatialScene();

  const stages = [
    {
      num: 1 as const,
      title: 'Physical Reality',
      subtitle: 'Raw 3D Scanned Point Cloud',
      desc: 'Dense, unstructured 3D laser scan data capturing the physical asset in its exact real-world condition. Millions of coordinates with intensity values and georeferenced coordinates.',
      metrics: [
        { label: 'Capture Format', val: 'E57 / LAS 1.4' },
        { label: 'Point Pitch', val: 'Down to 1.5mm' },
        { label: 'Registration', val: 'Sub-millimeter Target Tie' }
      ]
    },
    {
      num: 2 as const,
      title: 'Spatial Processing',
      subtitle: 'Classification & Feature Extraction',
      desc: 'Point cloud pre-processing, noise filtering, and automated/manual geometric segmentation. Point clusters are classified into architectural envelopes, MEP conduits, and structural baselines.',
      metrics: [
        { label: 'Classification', val: 'ASPRS Standards' },
        { label: 'Hydro/Breaklines', val: 'Enforced' },
        { label: 'Noise Decimation', val: 'Gaussian Filtered' }
      ]
    },
    {
      num: 3 as const,
      title: 'Digital Representation',
      subtitle: 'Parametric BIM & Coordinated Model',
      desc: 'The final structured digital twin. Parametric Autodesk Revit geometry (LOD 100-500) enriched with COBie operational metadata, ready for clash coordination and facility management.',
      metrics: [
        { label: 'Model LOD', val: 'LOD 350 / 400' },
        { label: 'Tolerance Delta', val: '< 3mm Heatmap' },
        { label: 'Clash Resolution', val: '100% Navisworks Verified' }
      ]
    }
  ];

  const current = stages[realityStage - 1];

  return (
    <section className="py-28 px-6 sm:px-8 max-w-7xl mx-auto w-full z-10 relative" id="workflow">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-subtle-border pb-8">
        <div className="space-y-3 max-w-2xl">
          <span className="text-[11px] font-mono text-copper tracking-widest uppercase">
            [03 // SIGNATURE SPATIAL WORKFLOW]
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-mineral tracking-tight">
            From Reality to Digital
          </h2>
          <p className="text-sm text-text-secondary font-light">
            Interact with the 3-phase engineering pipeline below to witness how physical environments transform into structured digital intelligence.
          </p>
        </div>

        <div className="font-mono text-xs text-text-muted">
          ACTIVE PHASE: 0{realityStage} // {current.title.toUpperCase()}
        </div>
      </div>

      {/* Stage Selector Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {stages.map((st) => {
          const isActive = realityStage === st.num;
          return (
            <button
              key={st.num}
              type="button"
              onClick={() => setRealityStage(st.num)}
              className={`p-5 text-left border transition-all relative ${
                isActive
                  ? 'bg-carbon border-copper text-mineral shadow-[0_0_20px_rgba(194,122,80,0.18)]'
                  : 'bg-basalt/60 border-subtle-border text-text-secondary hover:border-subtle-border/80 hover:bg-carbon/40'
              }`}
            >
              <div className="flex items-center justify-between font-mono text-[11px] mb-2">
                <span className={isActive ? 'text-copper font-bold' : 'text-text-muted'}>
                  STAGE 0{st.num}
                </span>
                <span className="text-text-muted">
                  {st.num === 1 ? 'CAPTURE' : st.num === 2 ? 'PROCESS' : 'MODEL'}
                </span>
              </div>

              <div className={`text-lg font-display font-bold mb-1 transition-colors ${
                isActive ? 'text-mineral' : 'text-text-secondary'
              }`}>
                {st.title}
              </div>

              <div className="text-xs font-mono text-text-muted">
                {st.subtitle}
              </div>

              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-copper" />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Stage Deep Inspection Panel */}
      <div className="p-8 sm:p-10 border border-subtle-border bg-carbon/90 backdrop-blur-md space-y-8 survey-corner">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] text-copper uppercase">
              <span>Engineering Execution // Stage 0{current.num}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-mineral">
              {current.title}: {current.subtitle}
            </h3>

            <p className="text-sm text-text-secondary font-light leading-relaxed">
              {current.desc}
            </p>
          </div>

          <div className="lg:col-span-5 bg-graphite/60 p-6 border border-subtle-border space-y-4 font-mono text-xs">
            <div className="text-copper uppercase tracking-wider text-[11px] font-semibold border-b border-subtle-border pb-2">
              Phase Specifications & Tolerances
            </div>
            <div className="space-y-3">
              {current.metrics.map((m, idx) => (
                <div key={idx} className="flex justify-between items-center py-1 border-b border-subtle-border/60">
                  <span className="text-text-muted">{m.label}</span>
                  <span className="text-mineral font-medium">{m.val}</span>
                </div>
              ))}
            </div>
            <div className="pt-2 text-[10px] text-text-muted">
              Live background 3D WebGL scene synchronised with Stage 0{current.num}.
            </div>
          </div>

        </div>

        {/* Technical Architecture Comparison Indicator */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-subtle-border text-xs font-mono">
          <div className="space-y-1">
            <span className="text-text-muted block text-[10px]">STAGE 1 BASIS</span>
            <span className="text-mineral font-medium">Unstructured Laser Points</span>
          </div>
          <div className="space-y-1">
            <span className="text-text-muted block text-[10px]">STAGE 2 EXTRACTION</span>
            <span className="text-mineral font-medium">Segmentation & Vector Traverses</span>
          </div>
          <div className="space-y-1">
            <span className="text-text-muted block text-[10px]">STAGE 3 DELIVERABLE</span>
            <span className="text-copper font-medium">Coordinated Revit BIM / Digital Twin</span>
          </div>
        </div>

      </div>

    </section>
  );
};
