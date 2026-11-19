import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, Calendar, ShieldCheck } from 'lucide-react';

interface ConversionCTAProps {
  onOpenEstimator?: () => void;
}

export const ConversionCTA: React.FC<ConversionCTAProps> = ({ onOpenEstimator }) => {
  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden" id="conversion-cta">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-spatial-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-spatial-grid opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-spatial-cyan/30 text-spatial-cyan text-xs font-mono uppercase tracking-wider mb-8">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Technical Feasibility & RFP Inquiries</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-offwhite tracking-tight leading-[1.15] mb-6">
          Have a complex spatial <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-spatial-cyan via-spatial-cyan-bright to-offwhite">
            engineering challenge?
          </span>
        </h2>

        <p className="text-base sm:text-lg text-offwhite/80 max-w-2xl mx-auto font-light leading-relaxed mb-10">
          Whether you need survey-grade Scan-to-BIM modeling, large-scale mobile LiDAR corridor processing, or an enterprise Digital Twin baseline, our senior engineering specialists are ready to review your project specifications.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 text-xs font-mono font-bold tracking-wider uppercase text-navy-950 bg-spatial-cyan hover:bg-spatial-cyan-bright transition-all rounded shadow-lg hover:shadow-[0_0_30px_rgba(82,191,208,0.5)] flex items-center justify-center gap-2 group"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          {onOpenEstimator && (
            <button
              type="button"
              onClick={onOpenEstimator}
              className="w-full sm:w-auto px-7 py-4 text-xs font-mono font-semibold tracking-wider uppercase text-offwhite bg-navy-900/90 hover:bg-navy-800 border border-spatial-cyan/30 hover:border-spatial-cyan transition-all rounded backdrop-blur-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-spatial-cyan" />
              <span>Configure Scope & Estimate</span>
            </button>
          )}
        </div>

        {/* Direct Contact Proofline */}
        <div className="pt-8 border-t border-navy-800 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-muted">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-spatial-cyan" />
            <a href="mailto:enquiry@mapospatial.com" className="hover:text-spatial-cyan transition-colors">
              enquiry@mapospatial.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-spatial-cyan" />
            <a href="tel:+441296924032" className="hover:text-spatial-cyan transition-colors">
              +44 1296924032
            </a>
          </div>

          <div className="text-offwhite/70">
            Confidential Non-Disclosure (NDA) Available Upon Request
          </div>
        </div>

      </div>

    </section>
  );
};
