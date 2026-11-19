import React, { useEffect, useState } from 'react';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  FileUp, 
  AlertCircle 
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    serviceInterest: 'Scan to BIM',
    industry: 'Architecture & Construction',
    projectScope: '',
    timeline: 'Within 30 Days',
    needsNDA: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contact & Engineering Consultation | Mapo Spatial';
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Work Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.projectScope.trim()) errs.projectScope = 'Please provide brief project context or requirements';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div className="pt-24 pb-20 bg-navy-950 min-h-screen text-offwhite relative">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-spatial-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: 'Contact & Inquiries' }]} />

        {/* Hero Banner */}
        <div className="py-12 border-b border-spatial-cyan/20">
          <div className="max-w-3xl space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-navy-900 border border-spatial-cyan/30 text-spatial-cyan text-xs font-mono uppercase tracking-wider">
              <span>Technical Consultation & RFPs</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-offwhite tracking-tight leading-[1.1]">
              Discuss Your Project
            </h1>

            <p className="text-lg text-offwhite/85 font-light leading-relaxed pt-2">
              Connect with our senior spatial engineering leads to evaluate project specifications, coordinate systems, accuracy tolerances, or to request a formal technical proposal.
            </p>

          </div>
        </div>

        {/* Contact Layout: Info Sidebar + Premium Engineering Form */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Credentials */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="hud-panel p-8 bg-navy-900/80 border border-spatial-cyan/25 rounded-2xl space-y-6 corner-reticle">
              <h2 className="text-xl font-display font-bold text-offwhite pb-3 border-b border-navy-800">
                Direct Communications
              </h2>

              <div className="space-y-5 text-sm">
                
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded bg-navy-950 border border-spatial-cyan/25 text-spatial-cyan shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-muted uppercase block">
                      Enquiry Email
                    </span>
                    <a 
                      href="mailto:enquiry@mapospatial.com" 
                      className="font-mono text-offwhite hover:text-spatial-cyan transition-colors"
                    >
                      enquiry@mapospatial.com
                    </a>
                    <span className="text-xs text-muted block mt-0.5">
                      Monitored 24/7 across timezones
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded bg-navy-950 border border-spatial-cyan/25 text-spatial-cyan shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-muted uppercase block">
                      International Direct Line
                    </span>
                    <a 
                      href="tel:+441296924032" 
                      className="font-mono text-offwhite hover:text-spatial-cyan transition-colors"
                    >
                      +44 1296924032
                    </a>
                    <span className="text-xs text-muted block mt-0.5">
                      Direct line for UK & International partners
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded bg-navy-950 border border-spatial-cyan/25 text-spatial-cyan shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-muted uppercase block">
                      Engineering Hub & Delivery Center
                    </span>
                    <span className="font-mono text-offwhite">
                      Bengaluru - 560064, India
                    </span>
                    <span className="text-xs text-muted block mt-0.5">
                      Serving UK, Europe, Americas & APAC
                    </span>
                  </div>
                </div>

              </div>

              {/* Response SLA */}
              <div className="pt-4 border-t border-navy-800 flex items-center gap-3 text-xs font-mono text-spatial-cyan">
                <Clock className="w-4 h-4" />
                <span>Response Guarantee: Within 24 Business Hours</span>
              </div>

            </div>

            {/* Confidentiality Notice */}
            <div className="p-6 rounded-xl bg-navy-900/50 border border-navy-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Data Security & Mutual NDAs</span>
              </div>
              <p className="text-xs text-offwhite/75 font-light leading-relaxed">
                We routinely handle sensitive infrastructure, defense, and proprietary industrial plant datasets. Formal bilateral Non-Disclosure Agreements (NDAs) are executed prior to sample data ingestion.
              </p>
            </div>

          </div>

          {/* Right Column: Premium Engineering Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="hud-panel p-8 sm:p-10 bg-navy-900/90 border border-spatial-cyan/30 rounded-2xl space-y-6 corner-reticle">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="pb-4 border-b border-navy-800">
                    <h2 className="text-xl font-display font-bold text-offwhite">
                      Project Consultation Form
                    </h2>
                    <p className="text-xs text-muted font-mono mt-1">
                      Fields marked with * are required for feasibility review.
                    </p>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-spatial-cyan uppercase mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. David Morrison"
                        className={`w-full bg-navy-950 border rounded p-3 text-xs text-offwhite focus:outline-none transition-colors ${
                          errors.fullName ? 'border-rose-500' : 'border-navy-700 focus:border-spatial-cyan'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-400 mt-1 font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-spatial-cyan uppercase mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="david.m@engineering.com"
                        className={`w-full bg-navy-950 border rounded p-3 text-xs text-offwhite focus:outline-none transition-colors ${
                          errors.email ? 'border-rose-500' : 'border-navy-700 focus:border-spatial-cyan'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-muted uppercase mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Arup / Network Rail / Self"
                        className="w-full bg-navy-950 border border-navy-700 rounded p-3 text-xs text-offwhite focus:border-spatial-cyan focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-muted uppercase mb-1.5">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+44 7911 123456"
                        className="w-full bg-navy-950 border border-navy-700 rounded p-3 text-xs text-offwhite focus:border-spatial-cyan focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Service and Industry Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-spatial-cyan uppercase mb-1.5">
                        Primary Service Needed
                      </label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full bg-navy-950 border border-navy-700 rounded p-3 text-xs text-offwhite focus:border-spatial-cyan focus:outline-none"
                      >
                        <option value="Scan to BIM">Scan to BIM (Revit LOD 100-500)</option>
                        <option value="Reality Capture & Laser Scanning">Reality Capture & Laser Scanning</option>
                        <option value="LiDAR Engineering & Mobile Mapping">LiDAR Engineering & Mobile Mapping</option>
                        <option value="Geospatial Services & Photogrammetry">Geospatial Services & Photogrammetry</option>
                        <option value="GIS Solutions & Base Mapping">GIS Solutions & Base Mapping</option>
                        <option value="Digital Twin Solutions">Digital Twin Solutions</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-spatial-cyan uppercase mb-1.5">
                        Industry / Application
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full bg-navy-950 border border-navy-700 rounded p-3 text-xs text-offwhite focus:border-spatial-cyan focus:outline-none"
                      >
                        <option value="Architecture & Construction">Architecture & Construction</option>
                        <option value="Infrastructure & Civil Works">Infrastructure & Civil Works</option>
                        <option value="Transportation, Rail & Aviation">Transportation, Rail & Aviation</option>
                        <option value="Power, Energy & Utilities">Power, Energy & Utilities</option>
                        <option value="Process Plant Engineering">Process Plant Engineering</option>
                        <option value="Heritage & Public Sector">Heritage & Public Sector</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Scope Description */}
                  <div>
                    <label className="block text-xs font-mono text-spatial-cyan uppercase mb-1.5">
                      Project Scope & Requirements *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.projectScope}
                      onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                      placeholder="Describe the asset, required LOD (e.g. LOD 350 MEP), estimated size/corridor length, target delivery timeline, and input scan format (E57, LAS, RCP)..."
                      className={`w-full bg-navy-950 border rounded p-3 text-xs text-offwhite focus:outline-none transition-colors ${
                        errors.projectScope ? 'border-rose-500' : 'border-navy-700 focus:border-spatial-cyan'
                      }`}
                    />
                    {errors.projectScope && (
                      <p className="text-[11px] text-rose-400 mt-1 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.projectScope}</span>
                      </p>
                    )}
                  </div>

                  {/* NDA Checkbox */}
                  <div className="flex items-center gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="nda"
                      checked={formData.needsNDA}
                      onChange={(e) => setFormData({ ...formData, needsNDA: e.target.checked })}
                      className="w-4 h-4 rounded bg-navy-950 border-navy-700 text-spatial-cyan focus:ring-spatial-cyan"
                    />
                    <label htmlFor="nda" className="text-xs text-offwhite/80 cursor-pointer font-light">
                      Please supply a mutual Non-Disclosure Agreement (NDA) prior to technical review.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-muted">
                      Direct to Senior Engineering Lead
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-navy-950 bg-spatial-cyan hover:bg-spatial-cyan-bright transition-all rounded shadow-lg flex items-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Project Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              ) : (
                <div className="text-center py-12 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(16,185,129,0.25)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-3xl font-display font-bold text-offwhite">
                    Inquiry Successfully Logged
                  </h3>

                  <p className="text-sm text-offwhite/85 max-w-lg mx-auto font-light leading-relaxed">
                    Thank you, <strong className="text-spatial-cyan">{formData.fullName}</strong>. Your project requirements for <strong className="text-offwhite">{formData.serviceInterest}</strong> have been assigned to our senior technical evaluation director.
                  </p>

                  <div className="hud-panel p-4 max-w-md mx-auto text-left font-mono text-xs text-offwhite/80 space-y-1.5 bg-navy-950">
                    <div>REFERENCE ID: <span className="text-spatial-cyan font-bold">MAPO-2026-{Math.floor(1000 + Math.random() * 9000)}</span></div>
                    <div>CONFIRMATION SENT TO: <span className="text-offwhite">{formData.email}</span></div>
                    <div>SLA RESPONSE WINDOW: <span className="text-emerald-400">&lt; 24 Business Hours</span></div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-mono uppercase text-spatial-cyan hover:underline"
                    >
                      ← Submit another inquiry
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
