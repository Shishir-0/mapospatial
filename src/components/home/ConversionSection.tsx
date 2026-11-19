import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

export const ConversionSection: React.FC = () => {
  return (
    <section className="py-32 px-6 sm:px-8 max-w-7xl mx-auto w-full z-10 relative" id="conversion">
      
      <div className="p-10 sm:p-16 border border-subtle-border bg-carbon/95 backdrop-blur-md space-y-10 survey-corner">
        
        <div className="max-w-3xl space-y-4">
          <span className="text-[11px] font-mono text-copper tracking-widest uppercase block">
            [INITIATE PROJECT CONSULTATION]
          </span>

          <h2 className="text-4xl sm:text-6xl font-display font-bold text-mineral leading-[1.05] tracking-tight">
            Have a space that needs <br />
            to be understood?
          </h2>

          <p className="text-base sm:text-lg text-text-secondary font-light leading-relaxed pt-2">
            Tell us about your project and the spatial information you need. Our senior engineering directors will evaluate your requirements and provide a feasibility review within 24 business hours.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 font-mono text-xs uppercase tracking-wider">
          <Link
            to="/contact"
            className="px-8 py-4 bg-mineral text-basalt hover:bg-white transition-all font-semibold flex items-center justify-center gap-2"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4 text-copper" />
          </Link>

          <a
            href="mailto:enquiry@mapospatial.com"
            className="px-8 py-4 bg-graphite text-mineral hover:bg-carbon border border-subtle-border hover:border-copper transition-all flex items-center justify-center gap-2"
          >
            <span>enquiry@mapospatial.com</span>
          </a>
        </div>

        {/* Contact Proof Points */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-subtle-border font-mono text-xs text-text-muted">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-copper" />
            <span className="text-mineral">enquiry@mapospatial.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-copper" />
            <span className="text-mineral">+44 1296924032 (UK Line)</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-copper" />
            <span className="text-mineral">Bengaluru - 560064, India</span>
          </div>
        </div>

      </div>

    </section>
  );
};
