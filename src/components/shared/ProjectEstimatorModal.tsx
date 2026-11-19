import React, { useState } from 'react';
import { X, Check, Calculator, ArrowRight, ShieldCheck, Send } from 'lucide-react';

interface ProjectEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectEstimatorModal: React.FC<ProjectEstimatorModalProps> = ({ isOpen, onClose }) => {
  const [service, setService] = useState('scan-to-bim');
  const [lod, setLod] = useState('LOD 350');
  const [sizeScale, setSizeScale] = useState('Medium (10,000 - 50,000 m²)');
  const [timeline, setTimeline] = useState('Standard (2-4 Weeks)');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-fade-in">
      <div 
        className="hud-panel relative w-full max-w-2xl bg-navy-900 border border-spatial-cyan/40 rounded-xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto corner-reticle"
        role="dialog"
        aria-modal="true"
        aria-labelledby="estimator-title"
      >
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-offwhite/70 hover:text-spatial-cyan hover:bg-navy-800 transition-colors"
          aria-label="Close Scope Calculator"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            
            {/* Header */}
            <div className="flex items-center gap-2.5 text-xs font-mono text-spatial-cyan mb-2">
              <Calculator className="w-4 h-4" />
              <span>INTERACTIVE SCOPE & SPECIFICATION CALCULATOR</span>
            </div>

            <h2 id="estimator-title" className="text-2xl font-display font-bold text-offwhite mb-2">
              Configure Your Engineering Scope
            </h2>

            <p className="text-xs text-offwhite/75 font-light mb-6">
              Select your project parameters to receive a technical feasibility review and turnaround estimate from our senior engineering team.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-mono text-spatial-cyan uppercase mb-2">
                  1. Core Engineering Discipline
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'scan-to-bim', label: 'Scan to BIM' },
                    { id: 'reality-capture', label: 'Reality Capture / TLS' },
                    { id: 'lidar-engineering', label: 'LiDAR Processing' },
                    { id: 'geospatial-services', label: 'Geospatial & Ortho' },
                    { id: 'gis-solutions', label: 'GIS & Subsurface' },
                    { id: 'digital-twin', label: 'Digital Twin Platform' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setService(item.id)}
                      className={`p-2.5 text-xs font-mono rounded border text-left transition-all ${
                        service === item.id
                          ? 'bg-spatial-cyan text-navy-950 font-bold border-spatial-cyan'
                          : 'bg-navy-950/70 text-offwhite/80 border-navy-700 hover:border-spatial-cyan/30'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* LOD Selection (if BIM or Digital Twin) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-spatial-cyan uppercase mb-2">
                    2. Model Specification / LOD
                  </label>
                  <select
                    value={lod}
                    onChange={(e) => setLod(e.target.value)}
                    className="w-full bg-navy-950 border border-navy-700 rounded p-2.5 text-xs text-offwhite focus:border-spatial-cyan focus:outline-none"
                  >
                    <option value="LOD 200">LOD 200 (Schematic Massing)</option>
                    <option value="LOD 300">LOD 300 (Specific Geometry & Architectural)</option>
                    <option value="LOD 350">LOD 350 (Multi-Discipline MEP Coordination)</option>
                    <option value="LOD 400">LOD 400 (Fabrication Ready)</option>
                    <option value="LOD 500">LOD 500 (Operational As-Built / Facilities)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-spatial-cyan uppercase mb-2">
                    3. Project Size / Footprint
                  </label>
                  <select
                    value={sizeScale}
                    onChange={(e) => setSizeScale(e.target.value)}
                    className="w-full bg-navy-950 border border-navy-700 rounded p-2.5 text-xs text-offwhite focus:border-spatial-cyan focus:outline-none"
                  >
                    <option value="Small (< 10,000 m² or < 25 km corridor)">Small (&lt; 10,000 m² or &lt; 25 km)</option>
                    <option value="Medium (10,000 - 50,000 m²)">Medium (10,000 - 50,000 m²)</option>
                    <option value="Large (50,000 - 150,000 m²)">Large (50,000 - 150,000 m²)</option>
                    <option value="Enterprise Infrastructure (150,000+ m²)">Enterprise Infrastructure (150,000+ m²)</option>
                  </select>
                </div>
              </div>

              {/* Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-mono text-muted uppercase mb-1">
                    Your Name / Company
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins (Foster & Partners)"
                    className="w-full bg-navy-950 border border-navy-700 rounded p-2.5 text-xs text-offwhite focus:border-spatial-cyan focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-muted uppercase mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-navy-950 border border-navy-700 rounded p-2.5 text-xs text-offwhite focus:border-spatial-cyan focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-muted uppercase mb-1">
                  Additional Scope Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Detail any specific software version, coordinate systems, or deliverable deadlines..."
                  className="w-full bg-navy-950 border border-navy-700 rounded p-2.5 text-xs text-offwhite focus:border-spatial-cyan focus:outline-none"
                />
              </div>

              {/* Action Submit */}
              <div className="pt-3 flex items-center justify-between">
                <span className="text-[11px] font-mono text-muted flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-spatial-cyan" />
                  <span>Strict NDA Protected</span>
                </span>

                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-navy-950 bg-spatial-cyan hover:bg-spatial-cyan-bright transition-all rounded shadow-md flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Feasibility Review</span>
                </button>
              </div>

            </form>

          </div>
        ) : (
          <div className="text-center py-10 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-display font-bold text-offwhite">
              Specification Received
            </h3>

            <p className="text-xs text-offwhite/80 max-w-md mx-auto leading-relaxed">
              Thank you, {name || 'valued partner'}. Our senior spatial engineering lead will review your configured parameters ({service.toUpperCase()}, {lod}, {sizeScale}) and provide a formal feasibility summary within 24 business hours to <strong className="text-spatial-cyan">{email}</strong>.
            </p>

            <div className="pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 text-xs font-mono uppercase bg-navy-800 hover:bg-navy-700 text-offwhite border border-spatial-cyan/30 rounded"
              >
                Close Calculator
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
