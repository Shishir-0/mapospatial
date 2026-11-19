import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

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
    <div className="pt-28 pb-24 px-6 sm:px-8 max-w-7xl mx-auto w-full z-10 relative">
      
      {/* Breadcrumb */}
      <Breadcrumbs items={[{ label: 'About Mapo Spatial' }]} />

      {/* Hero Header */}
      <div className="py-12 border-b border-subtle-border">
        <div className="max-w-3xl space-y-4">
          
          <span className="text-[11px] font-mono text-copper tracking-widest uppercase block">
            [COMPANY & MISSION]
          </span>

          <h1 className="text-4xl sm:text-6xl font-display font-bold text-mineral leading-[1.08] tracking-tight">
            Charting Smarter <br />
            Decisions.
          </h1>

          <p className="text-base sm:text-lg text-text-secondary font-light leading-relaxed pt-2">
            Mapo Spatial is an international digital spatial engineering partner. We combine advanced reality capture, precision LiDAR processing, and deep BIM domain expertise to translate complex physical environments into accurate, actionable intelligence for organizations worldwide.
          </p>

        </div>
      </div>

      {/* Mission & Purpose Section */}
      <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-subtle-border">
        
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-mono text-copper uppercase tracking-wider block">
            The Engineering Mandate
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-mineral leading-tight">
            Bridging Physical Reality and Digital Execution
          </h2>
          <div className="space-y-4 text-sm text-text-secondary font-light leading-relaxed">
            <p>
              In capital construction, rail transport, and complex industrial plant operations, the single greatest source of budget overruns, design rework, and schedule delay is flawed spatial assumptions.
            </p>
            <p>
              Historic drawings are frequently outdated, site measurements are fragmented, and dense laser scan point clouds are often abandoned because teams lack the specialized engineering bandwidth to extract structured, clash-free BIM models.
            </p>
            <p>
              Mapo Spatial was founded to solve this bottleneck. We ingest high-density 3D reality capture, airborne and mobile LiDAR, and subsurface surveys, transforming them into standardized Revit models (LOD 100-500), classified ASPRS point clouds, and interactive Digital Twins that engineering teams can immediately rely upon.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-4">
          <div className="p-8 border border-subtle-border bg-carbon/90 backdrop-blur-md space-y-6 survey-corner">
            <h3 className="text-base font-display font-bold text-mineral pb-3 border-b border-subtle-border">
              Core Engineering Commitments
            </h3>
            <div className="space-y-5">
              {corePillars.map((pillar, idx) => (
                <div key={idx} className="space-y-1 font-mono text-xs">
                  <div className="text-copper font-semibold">
                    0{idx + 1}. {pillar.title}
                  </div>
                  <p className="text-text-muted font-sans text-xs font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Verified Technical Standards */}
      <div className="py-16 border-b border-subtle-border">
        <div className="max-w-2xl mb-12 space-y-2">
          <span className="text-xs font-mono text-copper uppercase tracking-wider block">
            Quality Assurance & Framework
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-mineral">
            Rigorous Verification Protocol
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-subtle-border bg-carbon/70 space-y-3 survey-corner">
            <span className="text-xs font-mono text-copper">01 / TOLERANCE VERIFICATION</span>
            <h3 className="text-base font-display font-semibold text-mineral">
              ±3mm Point Deviation
            </h3>
            <p className="text-xs text-text-muted font-light leading-relaxed">
              Algorithmic point-to-plane registration and colorized deviation heatmaps verifying that 3D modeled elements conform within ±3mm of verified laser scan returns.
            </p>
          </div>

          <div className="p-6 border border-subtle-border bg-carbon/70 space-y-3 survey-corner">
            <span className="text-xs font-mono text-copper">02 / DATA GOVERNANCE</span>
            <h3 className="text-base font-display font-semibold text-mineral">
              Strict Bilateral NDAs
            </h3>
            <p className="text-xs text-text-muted font-light leading-relaxed">
              Enterprise data governance with encrypted transfer protocols, air-gapped processing nodes where mandated, and comprehensive client confidentiality agreements.
            </p>
          </div>

          <div className="p-6 border border-subtle-border bg-carbon/70 space-y-3 survey-corner">
            <span className="text-xs font-mono text-copper">03 / OPEN INTEROPERABILITY</span>
            <h3 className="text-base font-display font-semibold text-mineral">
              International Standards
            </h3>
            <p className="text-xs text-text-muted font-light leading-relaxed">
              Strict alignment with ASPRS LAS 1.4, buildingSMART IFC 4, ASCE 38-02 SUE, and ICAO Annex 14 aeronautical obstacle criteria.
            </p>
          </div>
        </div>
      </div>

      {/* Global Communications */}
      <div className="py-16">
        <div className="p-8 sm:p-12 border border-subtle-border bg-carbon/90 backdrop-blur-md grid grid-cols-1 md:grid-cols-2 gap-8 items-center survey-corner">
          
          <div className="space-y-4">
            <span className="text-xs font-mono text-copper uppercase tracking-wider block">
              Headquarters & Global Hubs
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-mineral">
              Connect with our Leadership Team
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary font-light leading-relaxed">
              Reach out to discuss partnership opportunities, ongoing master service agreements (MSA), or pilot evaluation projects.
            </p>

            <div className="pt-2 space-y-2 text-xs font-mono text-mineral">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-copper" />
                <a href="mailto:enquiry@mapospatial.com" className="hover:text-copper transition-colors">
                  enquiry@mapospatial.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-copper" />
                <a href="tel:+441296924032" className="hover:text-copper transition-colors">
                  +44 1296924032 (UK Direct)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-copper" />
                <span>Bengaluru - 560064, India</span>
              </div>
            </div>
          </div>

          <div className="flex justify-start md:justify-end">
            <Link
              to="/contact"
              className="px-6 py-3.5 text-xs font-mono font-semibold uppercase tracking-wider text-mineral bg-graphite hover:bg-carbon border border-subtle-border hover:border-copper transition-all flex items-center gap-2"
            >
              <span>Initiate Project Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-copper" />
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
};
