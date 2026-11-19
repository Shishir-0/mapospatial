import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-subtle-border bg-warm-white py-16 px-6 sm:px-8 z-10 relative" aria-label="Website Footer">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-subtle-border">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block" aria-label="Mapo Spatial Homepage">
              <img 
                src="/assets/mapo-logo.png" 
                alt="Mapo Spatial Logo - Charting Smarter Decisions" 
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-xs text-text-secondary max-w-sm leading-relaxed font-light">
              International digital spatial engineering partner transforming raw reality capture, airborne and mobile LiDAR, and surveying datasets into survey-grade BIM models, CAD assets, and interactive Digital Twins.
            </p>

            <div className="pt-2 font-mono text-[11px] text-gold font-semibold tracking-wider">
              <span>CHARTING SMARTER DECISIONS</span>
            </div>
          </div>

          {/* Capabilities */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-navy uppercase font-bold tracking-wider">
              Capabilities
            </div>
            <ul className="space-y-2 text-text-secondary">
              <li><Link to="/scan-to-bim" className="hover:text-gold transition-colors">Scan to BIM (Revit)</Link></li>
              <li><Link to="/reality-capture" className="hover:text-gold transition-colors">Reality Capture & TLS</Link></li>
              <li><Link to="/lidar-engineering" className="hover:text-gold transition-colors">LiDAR Engineering</Link></li>
              <li><Link to="/geospatial-services" className="hover:text-gold transition-colors">Geospatial & Ortho</Link></li>
              <li><Link to="/gis-solutions" className="hover:text-gold transition-colors">GIS & Subsurface</Link></li>
              <li><Link to="/digital-twin" className="hover:text-gold transition-colors">Digital Twin Platforms</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-navy uppercase font-bold tracking-wider">
              Industries
            </div>
            <ul className="space-y-2 text-text-secondary">
              <li><Link to="/industry" className="hover:text-gold transition-colors">AEC & Construction</Link></li>
              <li><Link to="/industry" className="hover:text-gold transition-colors">Civil Infrastructure</Link></li>
              <li><Link to="/industry" className="hover:text-gold transition-colors">Rail & Transportation</Link></li>
              <li><Link to="/industry" className="hover:text-gold transition-colors">Power & Energy Grids</Link></li>
              <li><Link to="/industry" className="hover:text-gold transition-colors">Process Plant Facilities</Link></li>
              <li><Link to="/industry" className="hover:text-gold transition-colors">Heritage & Public Sector</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-navy uppercase font-bold tracking-wider">
              Communications
            </div>
            <div className="space-y-2.5 text-text-secondary">
              <div>
                <span className="text-text-muted block text-[10px] uppercase font-semibold">EMAIL</span>
                <a href="mailto:enquiry@mapospatial.com" className="hover:text-gold transition-colors font-medium text-navy">
                  enquiry@mapospatial.com
                </a>
              </div>
              <div>
                <span className="text-text-muted block text-[10px] uppercase font-semibold">DIRECT TELEPHONE</span>
                <a href="tel:+441296924032" className="hover:text-gold transition-colors font-medium text-navy">
                  +44 1296924032 (UK)
                </a>
              </div>
              <div>
                <span className="text-text-muted block text-[10px] uppercase font-semibold">OPERATIONAL HUB</span>
                <span className="text-navy font-medium">Bengaluru - 560064, India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-text-muted gap-4">
          <div>
            © {new Date().getFullYear()} Mapo Spatial. All rights reserved. Precision Spatial Engineering.
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/about-us" className="hover:text-navy transition-colors">About Us</Link>
            <Link to="/projects" className="hover:text-navy transition-colors">Projects</Link>
            <Link to="/contact" className="hover:text-navy transition-colors">Privacy & Data Governance</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
