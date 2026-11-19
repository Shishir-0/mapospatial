import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { 
  ShieldCheck, 
  Target, 
  Globe, 
  Cpu, 
  Layers, 
  Compass, 
  CheckCircle2, 
  ArrowRight,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About Us | Mapo Spatial - Charting Smarter Decisions';
  }, []);

  const corePillars = [
    {
      title: 'Spatial Intelligence',
      desc: 'Translating massive, unstructured 3D point clouds and geospatial captures into mathematically verified, parametric engineering models that power informed capital project decisions.'
    },
    {
      title: 'Survey-Grade Precision',
      desc: 'Enforcing strict sub-centimeter point-to-model tolerance heatmaps (±3mm) to ensure physical reality and virtual BIM representations mirror each other without ambiguity.'
    },
    {
      title: 'Full Lifecycle Partnership',
      desc: 'Supporting projects from initial geodetic network capture through pre-construction clash detection to operational digital twins and facility management.'
    },
    {
      title: 'Global Delivery Architecture',
      desc: 'A dedicated engineering delivery center in Bengaluru collaborating seamlessly across European, British, American, and Asia-Pacific timezones.'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-navy-950 min-h-screen text-offwhite relative">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-spatial-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <Breadcrumbs items={[{ label: 'About Mapo Spatial' }]} />

        {/* Hero Banner */}
        <div className="py-12 border-b border-spatial-cyan/20">
          <div className="max-w-3xl space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-navy-900 border border-spatial-cyan/30 text-spatial-cyan text-xs font-mono uppercase tracking-wider">
              <span>Company & Engineering Mission</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-offwhite tracking-tight leading-[1.1]">
              Charting Smarter <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-spatial-cyan via-spatial-cyan-bright to-offwhite">
                Decisions.
              </span>
            </h1>

            <p className="text-lg text-offwhite/85 font-light leading-relaxed pt-2">
              Mapo Spatial is an international digital spatial engineering partner. We combine cutting-edge reality capture, advanced LiDAR processing, and deep BIM domain expertise to translate complex spatial data into accurate, actionable intelligence for organizations worldwide.
            </p>

          </div>
        </div>

        {/* Mission & Purpose Section */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-navy-800">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-spatial-cyan uppercase tracking-wider font-semibold block">
              The Engineering Problem We Solve
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-offwhite">
              Bridging Physical Reality and Digital Execution
            </h2>
            <div className="space-y-4 text-sm text-offwhite/80 font-light leading-relaxed">
              <p>
                In capital construction, rail transport, and complex industrial plant operations, the single greatest source of budget overruns, design rework, and schedule delay is flawed spatial assumptions.
              </p>
              <p>
                Historic 2D drawings are frequently outdated, site measurements are fragmented, and dense laser scan point clouds are often abandoned because teams lack the specialized engineering bandwidth to extract structured, clash-free BIM models.
              </p>
              <p>
                Mapo Spatial was founded to solve this bottleneck. We ingest high-density 3D reality capture, airborne and mobile LiDAR, and subsurface surveys, transforming them into standardized Revit models (LOD 100-500), classified ASPRS point clouds, and interactive Digital Twins that engineering teams can immediately rely upon.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="hud-panel p-8 bg-navy-900/80 border border-spatial-cyan/25 rounded-2xl space-y-6 corner-reticle">
              <h3 className="text-lg font-display font-bold text-offwhite pb-3 border-b border-navy-700">
                Core Engineering Commitments
              </h3>
              <div className="space-y-4">
                {corePillars.map((pillar, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-sm font-display font-semibold text-spatial-cyan">
                      0{idx + 1}. {pillar.title}
                    </div>
                    <p className="text-xs text-offwhite/75 font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Verified Technical Standards */}
        <div className="py-16 border-b border-navy-800">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono text-spatial-cyan uppercase tracking-wider font-semibold block">
              Quality Assurance & Compliance
            </span>
            <h2 className="text-3xl font-display font-bold text-offwhite">
              Rigorous Quality Framework
            </h2>
            <p className="text-sm text-offwhite/80 font-light">
              Every deliverable produced across our engineering hubs follows rigorous multi-tiered verification protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="hud-panel p-6 bg-navy-900/60 border border-spatial-cyan/20 rounded-xl space-y-3">
              <ShieldCheck className="w-6 h-6 text-spatial-cyan" />
              <h3 className="text-lg font-display font-bold text-offwhite">
                Tolerance Verification
              </h3>
              <p className="text-xs text-offwhite/75 font-light leading-relaxed">
                Algorithmic point-to-plane registration and colorized deviation heatmaps verifying that 3D modeled elements conform within ±3mm of verified laser scan returns.
              </p>
            </div>

            <div className="hud-panel p-6 bg-navy-900/60 border border-spatial-cyan/20 rounded-xl space-y-3">
              <Cpu className="w-6 h-6 text-spatial-cyan" />
              <h3 className="text-lg font-display font-bold text-offwhite">
                Data Security & NDAs
              </h3>
              <p className="text-xs text-offwhite/75 font-light leading-relaxed">
                Enterprise data governance with encrypted file transfer protocols, air-gapped processing nodes where mandated, and comprehensive client confidentiality agreements.
              </p>
            </div>

            <div className="hud-panel p-6 bg-navy-900/60 border border-spatial-cyan/20 rounded-xl space-y-3">
              <Layers className="w-6 h-6 text-spatial-cyan" />
              <h3 className="text-lg font-display font-bold text-offwhite">
                Interoperable Open Standards
              </h3>
              <p className="text-xs text-offwhite/75 font-light leading-relaxed">
                Outputs strictly aligned with international standards: ASPRS LAS 1.4, buildingSMART IFC 4, ASCE 38-02 SUE, and ICAO Annex 14 aeronautical obstacle criteria.
              </p>
            </div>

          </div>
        </div>

        {/* Global Operational Presence */}
        <div className="py-16">
          <div className="hud-panel p-8 sm:p-12 bg-navy-900/90 border border-spatial-cyan/30 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-4">
              <span className="text-xs font-mono text-spatial-cyan uppercase tracking-wider font-semibold block">
                Headquarters & Communications
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-offwhite">
                Connect with our Leadership Team
              </h2>
              <p className="text-sm text-offwhite/80 font-light leading-relaxed">
                Reach out to discuss partnership opportunities, ongoing master service agreements (MSA), or pilot evaluation projects.
              </p>

              <div className="pt-2 space-y-3 text-sm font-mono text-offwhite/90">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-spatial-cyan" />
                  <a href="mailto:enquiry@mapospatial.com" className="hover:text-spatial-cyan transition-colors">
                    enquiry@mapospatial.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-spatial-cyan" />
                  <a href="tel:+441296924032" className="hover:text-spatial-cyan transition-colors">
                    +44 1296924032 (UK Line)
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-spatial-cyan shrink-0 mt-0.5" />
                  <span>Bengaluru - 560064, India</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
              <Link
                to="/contact"
                className="px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-navy-950 bg-spatial-cyan hover:bg-spatial-cyan-bright transition-all rounded shadow-md text-center flex items-center justify-center gap-2"
              >
                <span>Initiate Project Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
