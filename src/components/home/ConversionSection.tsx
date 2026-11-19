import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

export const ConversionSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto w-full z-10 relative bg-[#FFFFFF]" id="conversion">
      
      <div className="p-8 sm:p-16 border border-[#DCE1E7] bg-[#F7F8FA] rounded-sm space-y-10 survey-corner shadow-sm">
        
        <div className="max-w-3xl space-y-4">
          <span className="text-[13px] font-mono text-[#596579] font-bold tracking-[0.08em] uppercase block">
            [07 // INITIATE PROJECT CONSULTATION]
          </span>

          <h2 className="text-3xl sm:text-6xl font-display font-extrabold text-[#14233F] leading-[1.08] tracking-tight">
            Have an environment that needs <br />
            to be understood?
          </h2>

          <p className="text-base sm:text-[18px] text-[#425168] font-normal leading-relaxed pt-2">
            Tell us about your project and the spatial intelligence you require. Our senior engineering directors will evaluate your requirements, accuracy thresholds, and deliverable specifications within 24 business hours.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 font-mono text-xs uppercase tracking-wider">
          <Link
            to="/contact"
            className="px-8 py-4 bg-[#14233F] hover:bg-[#0E1930] text-white border border-[#14233F] hover:border-[#B69A5A] transition-all font-semibold rounded-sm shadow-md flex items-center justify-center gap-2"
          >
            <span>Start a Project Consultation</span>
            <ArrowUpRight className="w-4 h-4 text-[#B69A5A]" />
          </Link>

          <a
            href="mailto:enquiry@mapospatial.com"
            className="px-8 py-4 bg-[#FFFFFF] text-[#14233F] hover:bg-[#F0F2F5] border border-[#DCE1E7] hover:border-[#B69A5A] transition-all rounded-sm flex items-center justify-center gap-2 font-semibold shadow-xs"
          >
            <Mail className="w-4 h-4 text-[#B69A5A]" />
            <span>enquiry@mapospatial.com</span>
          </a>
        </div>

        {/* Contact Proof Points */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-[#DCE1E7] font-mono text-xs text-[#536174]">
          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-[#B69A5A] shrink-0" />
            <a href="mailto:enquiry@mapospatial.com" className="text-[#14233F] font-bold hover:text-[#B69A5A] transition-colors">
              enquiry@mapospatial.com
            </a>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-[#B69A5A] shrink-0" />
            <a href="tel:+441296924032" className="text-[#14233F] font-bold hover:text-[#B69A5A] transition-colors">
              +44 1296924032 (UK Direct)
            </a>
          </div>
          <div className="flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-[#B69A5A] shrink-0" />
            <span className="text-[#14233F] font-bold">Bengaluru - 560064, India</span>
          </div>
        </div>

      </div>

    </section>
  );
};
