import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto w-full z-10 relative bg-white" id="about">
      
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-subtle-border pb-16">
        
        <div className="lg:col-span-4 space-y-2">
          <span className="text-xs font-mono text-gold font-bold tracking-widest uppercase block">
            [06 // COMPANY & IDENTITY]
          </span>
          <div className="font-mono text-xs text-text-muted">
            MAPO SPATIAL // BENGALURU & UK
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-navy leading-[1.08] tracking-tight">
            Charting Smarter Decisions.
          </h2>

          <div className="space-y-4 text-sm text-text-secondary font-light leading-relaxed">
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
              className="px-5 py-2.5 bg-navy hover:bg-navy-deep text-white border border-navy hover:border-gold transition-all flex items-center gap-2 font-semibold shadow-sm rounded-sm"
            >
              <span>Our Full Company Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
            </Link>

            <span className="text-text-muted text-[11px]">
              ISO / ASPRS / BIMFORUM COMPLIANT
            </span>
          </div>

        </div>

      </div>

      {/* Verified Commitments Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
        <div className="p-6 border border-subtle-border bg-warm-white rounded-sm space-y-2 survey-corner transition-all hover:border-gold/60 hover:shadow-sm">
          <span className="text-xs font-mono font-bold text-gold">01 / GEOMETRIC INTEGRITY</span>
          <h3 className="text-base font-display font-bold text-navy">
            Sub-Centimeter Tolerances
          </h3>
          <p className="text-xs text-text-secondary font-light leading-relaxed">
            Every model element is verified against original laser scan point clouds via automated deviation heatmaps within strict ±3mm thresholds.
          </p>
        </div>

        <div className="p-6 border border-subtle-border bg-warm-white rounded-sm space-y-2 survey-corner transition-all hover:border-gold/60 hover:shadow-sm">
          <span className="text-xs font-mono font-bold text-gold">02 / OPEN STANDARDS</span>
          <h3 className="text-base font-display font-bold text-navy">
            Interoperable Formats
          </h3>
          <p className="text-xs text-text-secondary font-light leading-relaxed">
            We deliver in industry-standard formats including Autodesk Revit (.RVT), buildingSMART IFC 4, ASPRS LAS 1.4, and OGC 3D Tiles.
          </p>
        </div>

        <div className="p-6 border border-subtle-border bg-warm-white rounded-sm space-y-2 survey-corner transition-all hover:border-gold/60 hover:shadow-sm">
          <span className="text-xs font-mono font-bold text-gold">03 / CONTINUOUS TURNAROUND</span>
          <h3 className="text-base font-display font-bold text-navy">
            Timezone Continuity
          </h3>
          <p className="text-xs text-text-secondary font-light leading-relaxed">
            Seamless cross-continental collaboration enabling rapid processing windows for plant turnarounds and urgent engineering submissions.
          </p>
        </div>
      </div>

    </section>
  );
};
