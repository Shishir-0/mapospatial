import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { CompanyStatistics } from '../components/about/CompanyStatistics';
import { ArrowUpRight, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

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
    <div className="pt-28 pb-24 px-4 sm:px-8 max-w-7xl mx-auto w-full z-10 relative bg-white">
      
      {/* Breadcrumb */}
      <Breadcrumbs items={[{ label: 'About Mapo Spatial' }]} />

      {/* Hero Header */}
      <div className="py-12 border-b border-[#DCE1E7]">
        <div className="max-w-3xl space-y-4">
          
          <span className="text-xs font-mono text-[#596579] font-bold tracking-widest uppercase block">
            [COMPANY MISSION & ENGINEERING ETHOS]
          </span>

          <h1 className="text-4xl sm:text-6xl font-display font-bold text-[#14233F] leading-[1.08] tracking-tight">
            Charting Smarter Decisions.
          </h1>

          <p className="text-base sm:text-lg text-[#425168] font-normal leading-relaxed pt-2">
            Mapo Spatial is an international digital spatial engineering partner. We combine advanced reality capture, precision LiDAR processing, and deep BIM domain expertise to translate complex physical environments into accurate, actionable intelligence for organizations worldwide.
          </p>

        </div>
      </div>

      {/* PART 1: Company Statistics Section */}
      <CompanyStatistics />

      {/* Mission & Purpose Section */}
      <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-[#DCE1E7]">
        
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-mono text-[#B69A5A] font-bold uppercase tracking-wider block">
            The Engineering Mandate
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-[#14233F] leading-tight">
            Bridging Physical Reality and Digital Execution
          </h2>
          <div className="space-y-4 text-sm text-[#425168] font-normal leading-relaxed">
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
          <div className="p-8 border border-[#DCE1E7] bg-[#F7F8FA] rounded-sm space-y-6 shadow-sm">
            <h3 className="text-base font-display font-bold text-[#14233F] pb-3 border-b border-[#DCE1E7]">
              Core Engineering Commitments
            </h3>
            <div className="space-y-5">
              {corePillars.map((pillar, idx) => (
                <div key={idx} className="space-y-1 font-mono text-xs">
                  <div className="text-[#14233F] font-bold">
                    <span className="text-[#B69A5A] mr-1.5">0{idx + 1}.</span> {pillar.title}
                  </div>
                  <p className="text-[#425168] font-sans text-xs font-normal leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Verified Technical Standards */}
      <div className="py-16 border-b border-[#DCE1E7]">
        <div className="max-w-2xl mb-12 space-y-2">
          <span className="text-xs font-mono text-[#596579] font-bold uppercase tracking-wider block">
            Quality Assurance & Framework
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#14233F]">
            Rigorous Verification Protocol
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-[#DCE1E7] bg-[#F7F8FA] rounded-sm space-y-3 hover:border-[#14233F] transition-all">
            <span className="text-xs font-mono font-bold text-[#B69A5A]">01 / TOLERANCE VERIFICATION</span>
            <h3 className="text-base font-display font-bold text-[#14233F]">
              ±3mm Point Deviation
            </h3>
            <p className="text-xs text-[#425168] font-normal leading-relaxed">
              Algorithmic point-to-plane registration and colorized deviation heatmaps verifying that 3D modeled elements conform within ±3mm of verified laser scan returns.
            </p>
          </div>

          <div className="p-6 border border-[#DCE1E7] bg-[#F7F8FA] rounded-sm space-y-3 hover:border-[#14233F] transition-all">
            <span className="text-xs font-mono font-bold text-[#B69A5A]">02 / DATA GOVERNANCE</span>
            <h3 className="text-base font-display font-bold text-[#14233F]">
              Strict Bilateral NDAs
            </h3>
            <p className="text-xs text-[#425168] font-normal leading-relaxed">
              Enterprise data governance with encrypted transfer protocols, air-gapped processing nodes where mandated, and comprehensive client confidentiality agreements.
            </p>
          </div>

          <div className="p-6 border border-[#DCE1E7] bg-[#F7F8FA] rounded-sm space-y-3 hover:border-[#14233F] transition-all">
            <span className="text-xs font-mono font-bold text-[#B69A5A]">03 / OPEN INTEROPERABILITY</span>
            <h3 className="text-base font-display font-bold text-[#14233F]">
              International Standards
            </h3>
            <p className="text-xs text-[#425168] font-normal leading-relaxed">
              Strict alignment with ASPRS LAS 1.4, buildingSMART IFC 4, ASCE 38-02 SUE, and ICAO Annex 14 aeronautical obstacle criteria.
            </p>
          </div>
        </div>
      </div>

      {/* Global Communications */}
      <div className="py-16">
        <div className="p-8 sm:p-12 border border-[#DCE1E7] bg-[#F7F8FA] rounded-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center shadow-sm">
          
          <div className="space-y-4">
            <span className="text-xs font-mono text-[#596579] font-bold uppercase tracking-wider block">
              Headquarters & Global Hubs
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#14233F]">
              Connect with our Leadership Team
            </h2>
            <p className="text-xs sm:text-sm text-[#425168] font-normal leading-relaxed">
              Reach out to discuss partnership opportunities, ongoing master service agreements (MSA), or pilot evaluation projects.
            </p>

            <div className="pt-2 space-y-2.5 text-xs font-mono text-[#14233F]">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B69A5A] shrink-0" />
                <a href="mailto:enquiry@mapospatial.com" className="hover:text-[#B69A5A] transition-colors font-medium">
                  enquiry@mapospatial.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B69A5A] shrink-0" />
                <a href="tel:+441296924032" className="hover:text-[#B69A5A] transition-colors font-medium">
                  +44 1296924032 (UK Direct)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#B69A5A] shrink-0" />
                <span className="font-medium">Bengaluru - 560064, India</span>
              </div>
            </div>
          </div>

          <div className="flex justify-start md:justify-end">
            <Link
              to="/contact"
              className="px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#14233F] hover:bg-[#0E1930] border border-[#14233F] hover:border-[#B69A5A] rounded-sm transition-all shadow-md flex items-center gap-2"
            >
              <span>Initiate Project Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-[#B69A5A]" />
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
};
