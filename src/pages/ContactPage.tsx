import React, { useEffect, useState } from 'react';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { Mail, Phone, MapPin, Send, AlertCircle, Check } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    serviceInterest: 'Scan to BIM',
    industry: 'Architecture & Construction',
    projectScope: '',
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
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="pt-28 pb-24 px-6 sm:px-8 max-w-7xl mx-auto w-full z-10 relative">
      
      {/* Breadcrumb */}
      <Breadcrumbs items={[{ label: 'Contact & Inquiries' }]} />

      {/* Hero Banner */}
      <div className="py-12 border-b border-subtle-border">
        <div className="max-w-3xl space-y-4">
          
          <span className="text-[11px] font-mono text-copper tracking-widest uppercase block">
            [TECHNICAL CONSULTATION & RFPS]
          </span>

          <h1 className="text-4xl sm:text-6xl font-display font-bold text-mineral leading-[1.08] tracking-tight">
            Discuss Your Project
          </h1>

          <p className="text-base sm:text-lg text-text-secondary font-light leading-relaxed pt-2">
            Connect with our senior spatial engineering leads to evaluate project specifications, coordinate systems, accuracy tolerances, or to request a formal technical proposal.
          </p>

        </div>
      </div>

      {/* Contact Grid: Info Column + Architectural Form */}
      <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Direct Info */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="p-8 border border-subtle-border bg-carbon/90 backdrop-blur-md space-y-6 survey-corner">
            <h2 className="text-base font-display font-bold text-mineral pb-3 border-b border-subtle-border">
              Direct Communications
            </h2>

            <div className="space-y-5 text-xs font-mono">
              
              <div className="space-y-1">
                <span className="text-text-muted text-[10px] uppercase block">
                  TECHNICAL ENQUIRIES
                </span>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-copper" />
                  <a href="mailto:enquiry@mapospatial.com" className="text-mineral hover:text-copper transition-colors">
                    enquiry@mapospatial.com
                  </a>
                </div>
                <span className="text-[10px] text-text-muted block">
                  Monitored 24/7 across international timezones
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-text-muted text-[10px] uppercase block">
                  INTERNATIONAL TELEPHONE
                </span>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-copper" />
                  <a href="tel:+441296924032" className="text-mineral hover:text-copper transition-colors">
                    +44 1296924032
                  </a>
                </div>
                <span className="text-[10px] text-text-muted block">
                  Direct line for UK & International partners
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-text-muted text-[10px] uppercase block">
                  ENGINEERING DELIVERY CENTER
                </span>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-copper" />
                  <span className="text-mineral">Bengaluru - 560064, India</span>
                </div>
                <span className="text-[10px] text-text-muted block">
                  Serving UK, Europe, Americas & APAC
                </span>
              </div>

            </div>

            <div className="pt-4 border-t border-subtle-border text-[11px] font-mono text-copper">
              RESPONSE GUARANTEE: WITHIN 24 BUSINESS HOURS
            </div>
          </div>

          <div className="p-6 border border-subtle-border/60 bg-carbon/50 space-y-2">
            <span className="text-xs font-mono text-copper uppercase block">
              Confidentiality & Bilateral NDAs
            </span>
            <p className="text-xs text-text-muted font-light leading-relaxed">
              We routinely handle sensitive infrastructure, rail, and industrial plant datasets. Formal bilateral Non-Disclosure Agreements are executed prior to sample data ingestion.
            </p>
          </div>

        </div>

        {/* Right Column: Premium Engineering Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 border border-subtle-border bg-carbon/95 backdrop-blur-md space-y-6 survey-corner">
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="pb-4 border-b border-subtle-border">
                  <h2 className="text-lg font-display font-bold text-mineral">
                    Project Feasibility & Consultation Form
                  </h2>
                  <p className="text-[11px] text-text-muted font-mono mt-1">
                    Fields marked with * are required for engineering review.
                  </p>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-mono text-copper uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. David Morrison"
                      className={`w-full bg-basalt border p-3 text-xs text-mineral font-mono focus:outline-none transition-colors ${
                        errors.fullName ? 'border-rose-500' : 'border-subtle-border focus:border-copper'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[10px] text-rose-400 mt-1 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-copper uppercase mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="david.m@engineering.com"
                      className={`w-full bg-basalt border p-3 text-xs text-mineral font-mono focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-subtle-border focus:border-copper'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[10px] text-rose-400 mt-1 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Company & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-mono text-text-muted uppercase mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Foster & Partners / Network Rail"
                      className="w-full bg-basalt border border-subtle-border p-3 text-xs text-mineral font-mono focus:border-copper focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-text-muted uppercase mb-1">
                      Direct Telephone (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+44 7911 123456"
                      className="w-full bg-basalt border border-subtle-border p-3 text-xs text-mineral font-mono focus:border-copper focus:outline-none"
                    />
                  </div>
                </div>

                {/* Service Interest & Industry */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-mono text-copper uppercase mb-1">
                      Core Discipline
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full bg-basalt border border-subtle-border p-3 text-xs text-mineral font-mono focus:border-copper focus:outline-none"
                    >
                      <option value="Scan to BIM">Scan to BIM (Revit LOD 100-500)</option>
                      <option value="Reality Capture & Laser Scanning">Reality Capture & Laser Scanning</option>
                      <option value="LiDAR Engineering & Mobile Mapping">LiDAR Engineering & Mobile Mapping</option>
                      <option value="Geospatial Services & Photogrammetry">Geospatial Services & Photogrammetry</option>
                      <option value="GIS Solutions & Base Mapping">GIS Solutions & Base Mapping</option>
                      <option value="Surveying Engineering">Surveying Engineering & Monitoring</option>
                      <option value="Digital Twin Solutions">Digital Twin Solutions</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-copper uppercase mb-1">
                      Sector / Industry
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full bg-basalt border border-subtle-border p-3 text-xs text-mineral font-mono focus:border-copper focus:outline-none"
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
                  <label className="block text-[11px] font-mono text-copper uppercase mb-1">
                    Project Scope & Engineering Requirements *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    placeholder="Detail the asset, required LOD (e.g. LOD 350 MEP), estimated size or corridor length, target delivery timeline, and input scan formats (E57, LAS, RCP)..."
                    className={`w-full bg-basalt border p-3 text-xs text-mineral font-mono focus:outline-none transition-colors ${
                      errors.projectScope ? 'border-rose-500' : 'border-subtle-border focus:border-copper'
                    }`}
                  />
                  {errors.projectScope && (
                    <p className="text-[10px] text-rose-400 mt-1 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.projectScope}</span>
                    </p>
                  )}
                </div>

                {/* NDA Option */}
                <div className="flex items-center gap-3 pt-1">
                  <input
                    type="checkbox"
                    id="nda"
                    checked={formData.needsNDA}
                    onChange={(e) => setFormData({ ...formData, needsNDA: e.target.checked })}
                    className="w-4 h-4 rounded-none bg-basalt border-subtle-border text-copper focus:ring-copper"
                  />
                  <label htmlFor="nda" className="text-xs text-text-secondary cursor-pointer font-light">
                    Supply a mutual Non-Disclosure Agreement (NDA) prior to technical review.
                  </label>
                </div>

                {/* Submit */}
                <div className="pt-4 flex items-center justify-between font-mono text-xs uppercase tracking-wider">
                  <span className="text-[10px] text-text-muted">
                    SLA: &lt; 24 BUSINESS HOURS
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-7 py-3.5 bg-mineral text-basalt hover:bg-white transition-all font-semibold flex items-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Inquiry</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            ) : (
              <div className="text-center py-12 space-y-5">
                <div className="w-12 h-12 rounded-full border border-copper text-copper flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-display font-bold text-mineral">
                  Inquiry Successfully Logged
                </h3>

                <p className="text-sm text-text-secondary max-w-lg mx-auto font-light leading-relaxed">
                  Thank you, <strong className="text-mineral">{formData.fullName}</strong>. Your project specifications for <strong className="text-copper">{formData.serviceInterest}</strong> have been routed to our senior engineering evaluation director.
                </p>

                <div className="p-4 max-w-md mx-auto text-left font-mono text-xs text-text-secondary space-y-1.5 bg-basalt border border-subtle-border">
                  <div>REFERENCE: <span className="text-copper font-bold">MAPO-2026-{Math.floor(1000 + Math.random() * 9000)}</span></div>
                  <div>CONFIRMATION TO: <span className="text-mineral">{formData.email}</span></div>
                  <div>RESPONSE WINDOW: <span className="text-mineral">&lt; 24 Business Hours</span></div>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-mono uppercase text-copper hover:underline"
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
  );
};
