import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck, Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 border-t border-spatial-cyan/20 pt-16 pb-12 relative overflow-hidden" aria-label="Website Footer">
      {/* Background spatial grid decoration */}
      <div className="absolute inset-0 bg-spatial-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-spatial-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block" aria-label="Mapo Spatial Homepage">
              <img 
                src="/Final_logo-removebg-preview-e1784101578891.png" 
                alt="Mapo Spatial Logo" 
                className="h-10 w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(82,191,208,0.2)]"
              />
            </Link>
            
            <p className="text-sm text-offwhite/80 max-w-sm leading-relaxed">
              Global engineering partner transforming raw reality capture, LiDAR point clouds, and spatial data into survey-grade BIM models, GIS infrastructures, and interactive Digital Twins.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-spatial-cyan">
              <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-navy-900 border border-spatial-cyan/30 rounded">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Survey-Grade Precision (±3mm)</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-navy-900 border border-spatial-cyan/30 rounded">
                <Cpu className="w-3.5 h-3.5" />
                <span>ASPRS & LOD 500 Ready</span>
              </span>
            </div>
          </div>

          {/* Capabilities Column */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-spatial-cyan font-semibold mb-4">
              Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/scan-to-bim" className="text-offwhite/80 hover:text-spatial-cyan transition-colors">
                  Scan to BIM
                </Link>
              </li>
              <li>
                <Link to="/reality-capture" className="text-offwhite/80 hover:text-spatial-cyan transition-colors">
                  Reality Capture & TLS
                </Link>
              </li>
              <li>
                <Link to="/lidar-engineering" className="text-offwhite/80 hover:text-spatial-cyan transition-colors">
                  LiDAR Engineering
                </Link>
              </li>
              <li>
                <Link to="/geospatial-services" className="text-offwhite/80 hover:text-spatial-cyan transition-colors">
                  Geospatial & Photogrammetry
                </Link>
              </li>
              <li>
                <Link to="/gis-solutions" className="text-offwhite/80 hover:text-spatial-cyan transition-colors">
                  GIS & Base Mapping
                </Link>
              </li>
              <li>
                <Link to="/digital-twin" className="text-offwhite/80 hover:text-spatial-cyan transition-colors">
                  Digital Twin Platforms
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-spatial-cyan font-semibold mb-4">
              Industries
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/industry" className="text-offwhite/80 hover:text-spatial-cyan transition-colors">
                  AEC & Construction
                </Link>
              </li>
              <li>
                <Link to="/industry" className="text-offwhite/80 hover:text-spatial-cyan transition-colors">
                  Civil Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/industry" className="text-offwhite/80 hover:text-spatial-cyan transition-colors">
                  Rail & Transportation
                </Link>
              </li>
              <li>
                <Link to="/industry" className="text-offwhite/80 hover:text-spatial-cyan transition-colors">
                  Power, Energy & Utilities
                </Link>
              </li>
              <li>
                <Link to="/industry" className="text-offwhite/80 hover:text-spatial-cyan transition-colors">
                  Process Plant Engineering
                </Link>
              </li>
              <li>
                <Link to="/industry" className="text-offwhite/80 hover:text-spatial-cyan transition-colors">
                  Heritage & Public Sector
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Global Presence */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-spatial-cyan font-semibold mb-4">
              Contact & Inquiries
            </h3>
            <ul className="space-y-3 text-sm text-offwhite/80">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-spatial-cyan shrink-0 mt-0.5" />
                <a href="mailto:enquiry@mapospatial.com" className="hover:text-spatial-cyan transition-colors font-mono text-xs">
                  enquiry@mapospatial.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-spatial-cyan shrink-0 mt-0.5" />
                <a href="tel:+441296924032" className="hover:text-spatial-cyan transition-colors font-mono text-xs">
                  +44 1296924032
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-spatial-cyan shrink-0 mt-0.5" />
                <span className="text-xs">
                  Bengaluru - 560064, India<br />
                  <span className="text-muted text-[11px]">Serving UK, Europe, Americas & APAC</span>
                </span>
              </li>
            </ul>

            <div className="mt-5">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-1.5 text-xs font-mono text-spatial-cyan hover:text-spatial-cyan-bright transition-colors group"
              >
                <span>Request Technical Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-muted gap-4 font-mono">
          <div>
            © {new Date().getFullYear()} Mapo Spatial. All rights reserved. Charting Smarter Decisions.
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/about-us" className="hover:text-offwhite transition-colors">About Us</Link>
            <Link to="/projects" className="hover:text-offwhite transition-colors">Case Studies</Link>
            <Link to="/insights" className="hover:text-offwhite transition-colors">Insights</Link>
            <Link to="/contact" className="hover:text-offwhite transition-colors">Privacy & Data Governance</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
