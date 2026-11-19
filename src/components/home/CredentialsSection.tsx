import React from 'react';
import { ShieldCheck, Award, Globe, Cpu, CheckCircle } from 'lucide-react';

export const CredentialsSection: React.FC = () => {
  const credentials = [
    {
      icon: ShieldCheck,
      badge: 'Survey-Grade Precision',
      title: '±3mm As-Built Tolerance',
      description: 'Strict adherence to sub-centimeter point-to-model deviation metrics across structural, architectural, and MEP disciplines.'
    },
    {
      icon: Cpu,
      badge: 'BIM Specification',
      title: 'LOD 100 to LOD 500 Modeling',
      description: 'Delivering parametric Autodesk Revit models enriched with COBie and facilities management attributes tailored for operations.'
    },
    {
      icon: Globe,
      badge: 'International Reach',
      title: 'Global Engineering Support',
      description: 'Serving engineering consultancies, rail operators, and architectural practices across the UK, Europe, Americas, and APAC.'
    },
    {
      icon: Award,
      badge: 'Industry Compliance',
      title: 'ASPRS & OpenBIM Standards',
      description: 'Standardized classification conforming to ASPRS LAS 1.4, buildingSMART IFC open exchange, and ASCE 38-02 utility guidelines.'
    }
  ];

  return (
    <section className="py-20 bg-navy-900 border-y border-spatial-cyan/15 relative overflow-hidden" id="company-credentials">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-spatial-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 pb-6 border-b border-navy-800">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-spatial-cyan font-semibold block">
              Spatial Intelligence & Proof
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-offwhite tracking-tight">
              Complex spatial data. <br className="hidden sm:inline" />
              Clear engineering outcomes.
            </h2>
          </div>
          <p className="text-sm text-offwhite/80 max-w-md font-light leading-relaxed">
            We partner with international infrastructure owners, general contractors, and surveyors to deliver verified 3D deliverables on schedule and within budget.
          </p>
        </div>

        {/* 4-Card Credibility Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <div 
                key={idx}
                className="hud-panel p-6 bg-navy-950/70 border border-spatial-cyan/20 rounded-lg hover:border-spatial-cyan/40 transition-all space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded bg-navy-900 border border-spatial-cyan/25 text-spatial-cyan group-hover:border-spatial-cyan transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-spatial-cyan/80 bg-spatial-cyan/10 px-2 py-0.5 rounded border border-spatial-cyan/20">
                    {cred.badge}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-display font-bold text-offwhite group-hover:text-spatial-cyan transition-colors">
                    {cred.title}
                  </h3>
                  <p className="text-xs text-offwhite/75 leading-relaxed font-light">
                    {cred.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Quality Assured Workflow</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
