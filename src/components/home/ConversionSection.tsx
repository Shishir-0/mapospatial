import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

export const ConversionSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto w-full z-10 relative bg-white" id="conversion">
      
      <div className="p-8 sm:p-16 border border-subtle-border bg-warm-white rounded-sm space-y-10 survey-corner shadow-xl">
        
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono text-gold font-bold tracking-widest uppercase block">
            [07 // INITIATE PROJECT CONSULTATION]
          </span>

          <h2 className="text-3xl sm:text-6xl font-display font-bold text-navy leading-[1.08] tracking-tight">
            Have an environment that needs <br />
            to be understood?
          </h2>

          <p className="text-base sm:text-lg text-text-secondary font-light leading-relaxed pt-2">
            Tell us about your project and the spatial intelligence you require. Our senior engineering directors will evaluate your requirements, accuracy thresholds, and deliverable specifications within 24 business hours.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 font-mono text-xs uppercase tracking-wider">
          <Link
            to="/contact"
            className="px-8 py-4 bg-navy hover:bg-navy-deep text-white border border-navy hover:border-gold transition-all font-semibold rounded-sm shadow-md flex items-center justify-center gap-2"
          >
            <span>Start a Project Consultation</span>
            <ArrowUpRight className="w-4 h-4 text-gold" />
          </Link>

          <a
            href="mailto:enquiry@mapospatial.com"
            className="px-8 py-4 bg-white text-navy hover:bg-subtle-bg border border-subtle-border hover:border-gold transition-all rounded-sm flex items-center justify-center gap-2 font-medium"
          >
            <Mail className="w-4 h-4 text-gold" />
            <span>enquiry@mapospatial.com</span>
          </a>
        </div>

        {/* Contact Proof Points */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-subtle-border font-mono text-xs text-text-muted">
          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-gold shrink-0" />
            <a href="mailto:enquiry@mapospatial.com" className="text-navy font-semibold hover:text-gold transition-colors">
              enquiry@mapospatial.com
            </a>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-gold shrink-0" />
            <a href="tel:+441296924032" className="text-navy font-semibold hover:text-gold transition-colors">
              +44 1296924032 (UK Direct)
            </a>
          </div>
          <div className="flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-gold shrink-0" />
            <span className="text-navy font-semibold">Bengaluru - 560064, India</span>
          </div>
        </div>

      </div>

    </section>
  );
};
