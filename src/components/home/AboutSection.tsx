import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto w-full z-10 relative bg-[#FFFFFF]" id="about">
      
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-[#DCE1E7] pb-16">
        
        <div className="lg:col-span-4 space-y-2">
          <span className="text-[13px] font-mono text-[#596579] font-bold tracking-[0.08em] uppercase block">
            [06 // COMPANY & IDENTITY]
          </span>
          <div className="font-mono text-xs text-[#536174] font-medium">
            MAPO SPATIAL // BENGALURU & UK
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#14233F] leading-[1.08] tracking-tight">
            Charting Smarter Decisions.
          </h2>

          <div className="space-y-4 text-[16px] text-[#425168] font-normal leading-[1.65]">
            <p>
              Mapo Spatial is an international digital spatial engineering partner. We combine advanced reality capture technology, precision LiDAR processing pipelines, and deep Building Information Modeling domain expertise to translate complex physical environments into accurate, actionable intelligence.
            </p>
            <p>
              Operating from our dedicated spatial data processing center in Bengaluru, India, and coordinating directly with partners in the United Kingdom, Europe, and the Americas, our engineering teams provide 24/7 delivery continuity for mission-critical infrastructure projects.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-6 font-mono text-xs uppercase tracking-wider">
            <Link
              to="/about-us"
              className="px-6 py-3 bg-[#14233F] hover:bg-[#0E1930] text-white border border-[#14233F] hover:border-[#B69A5A] transition-all flex items-center gap-2 font-semibold shadow-xs rounded-sm"
            >
              <span>Our Full Company Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B69A5A]" />
            </Link>

            <span className="text-[#536174] text-[12px] font-semibold">
              ISO / ASPRS / BIMFORUM COMPLIANT
            </span>
          </div>

        </div>

      </div>

      {/* Verified Commitments Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
        <div className="p-6 border border-[#DCE1E7] bg-[#F7F8FA] rounded-sm space-y-2.5 survey-corner transition-all hover:border-[#B69A5A]/60 shadow-xs">
          <span className="text-xs font-mono font-bold text-[#596579]">01 / GEOMETRIC INTEGRITY</span>
          <h3 className="text-base font-display font-bold text-[#14233F]">
            Sub-Centimeter Tolerances
          </h3>
          <p className="text-[13px] text-[#425168] font-normal leading-relaxed">
            Every model element is verified against original laser scan point clouds via automated deviation heatmaps within strict ±3mm thresholds.
          </p>
        </div>

        <div className="p-6 border border-[#DCE1E7] bg-[#F7F8FA] rounded-sm space-y-2.5 survey-corner transition-all hover:border-[#B69A5A]/60 shadow-xs">
          <span className="text-xs font-mono font-bold text-[#596579]">02 / OPEN STANDARDS</span>
          <h3 className="text-base font-display font-bold text-[#14233F]">
            Interoperable Formats
          </h3>
          <p className="text-[13px] text-[#425168] font-normal leading-relaxed">
            We deliver in industry-standard formats including Autodesk Revit (.RVT), buildingSMART IFC 4, ASPRS LAS 1.4, and OGC 3D Tiles.
          </p>
        </div>

        <div className="p-6 border border-[#DCE1E7] bg-[#F7F8FA] rounded-sm space-y-2.5 survey-corner transition-all hover:border-[#B69A5A]/60 shadow-xs">
          <span className="text-xs font-mono font-bold text-[#596579]">03 / CONTINUOUS TURNAROUND</span>
          <h3 className="text-base font-display font-bold text-[#14233F]">
            Timezone Continuity
          </h3>
          <p className="text-[13px] text-[#425168] font-normal leading-relaxed">
            Seamless cross-continental collaboration enabling rapid processing windows for plant turnarounds and urgent engineering submissions.
          </p>
        </div>
      </div>

    </section>
  );
};
