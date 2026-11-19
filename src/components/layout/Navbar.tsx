import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Layers, 
  Scan, 
  Compass, 
  Globe2, 
  Box, 
  Database,
  ArrowRight
} from 'lucide-react';

interface NavbarProps {
  onOpenEstimator?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [capabilitiesDropdownOpen, setCapabilitiesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and dropdowns when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setCapabilitiesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  const serviceLinks = [
    { name: 'Scan to BIM', href: '/scan-to-bim', desc: 'Millimeter-accurate Revit models from laser point clouds', icon: Layers },
    { name: 'Reality Capture & Laser Scanning', href: '/reality-capture', desc: 'High-definition 3D terrestrial & mobile scanning', icon: Scan },
    { name: 'LiDAR Engineering & Mobile Mapping', href: '/lidar-engineering', desc: 'Point cloud classification & corridor mapping', icon: Compass },
    { name: 'Geospatial Services & Photogrammetry', href: '/geospatial-services', desc: 'True Ortho, Aerial Triangulation & Cadastral GIS', icon: Globe2 },
    { name: 'GIS Solutions & Base Mapping', href: '/gis-solutions', desc: 'Subsurface utility networks & spatial data systems', icon: Database },
    { name: 'Digital Twin Solutions', href: '/digital-twin', desc: 'Interactive 3D virtual twins with operational data', icon: Box },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-navy-950/95 backdrop-blur-md border-b border-spatial-cyan/20 py-3 shadow-2xl' 
          : 'bg-gradient-to-b from-navy-950/80 via-navy-950/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-spatial-cyan rounded"
            aria-label="Mapo Spatial Homepage"
          >
            <div className="relative h-10 w-auto flex items-center">
              <img 
                src="/Final_logo-removebg-preview-e1784101578891.png" 
                alt="Mapo Spatial Logo" 
                className="h-9 w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(82,191,208,0.25)] group-hover:brightness-110 transition-all"
              />
            </div>
            <div className="hidden sm:flex flex-col text-left border-l border-spatial-cyan/25 pl-3">
              <span className="text-[11px] font-mono tracking-widest text-spatial-cyan uppercase font-semibold">
                Spatial Engineering
              </span>
              <span className="text-[9px] font-mono tracking-wider text-muted uppercase">
                Charting Smarter Decisions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            <Link 
              to="/about-us" 
              className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                location.pathname === '/about-us' 
                  ? 'text-spatial-cyan font-semibold' 
                  : 'text-offwhite/90 hover:text-spatial-cyan hover:bg-navy-800/50'
              }`}
            >
              Company
            </Link>

            {/* Capabilities Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCapabilitiesDropdownOpen(true)}
              onMouseLeave={() => setCapabilitiesDropdownOpen(false)}
            >
              <button 
                type="button"
                className={`flex items-center gap-1.5 px-3 py-2 rounded text-sm font-medium transition-colors ${
                  location.pathname.includes('/scan-to-bim') || 
                  location.pathname.includes('/reality-capture') ||
                  location.pathname.includes('/lidar-engineering') ||
                  location.pathname.includes('/geospatial-services') ||
                  location.pathname.includes('/gis-solutions') ||
                  location.pathname.includes('/digital-twin')
                    ? 'text-spatial-cyan font-semibold' 
                    : 'text-offwhite/90 hover:text-spatial-cyan hover:bg-navy-800/50'
                }`}
                aria-expanded={capabilitiesDropdownOpen}
                onClick={() => setCapabilitiesDropdownOpen(!capabilitiesDropdownOpen)}
              >
                Capabilities
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${capabilitiesDropdownOpen ? 'rotate-180 text-spatial-cyan' : ''}`} />
              </button>

              {/* Mega Dropdown Panel */}
              {capabilitiesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[520px] mt-1 pt-2 z-50">
                  <div className="hud-panel p-4 bg-navy-950/95 border border-spatial-cyan/30 rounded-lg shadow-2xl backdrop-blur-xl">
                    <div className="flex items-center justify-between pb-3 mb-2 border-b border-navy-700/60">
                      <span className="text-xs font-mono text-spatial-cyan uppercase tracking-wider font-semibold">
                        Core Engineering Capabilities
                      </span>
                      <span className="text-[10px] font-mono text-muted">
                        Survey-Grade Precision
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {serviceLinks.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.href || service.name}
                            to={service.href}
                            className="group p-2.5 rounded-md hover:bg-navy-800/70 border border-transparent hover:border-spatial-cyan/20 transition-all text-left flex items-start gap-2.5"
                          >
                            <div className="p-1.5 rounded bg-navy-900 border border-spatial-cyan/20 text-spatial-cyan group-hover:border-spatial-cyan transition-colors mt-0.5">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-medium text-offwhite group-hover:text-spatial-cyan transition-colors">
                                {service.name}
                              </div>
                              <p className="text-[10px] text-muted line-clamp-1 mt-0.5 font-normal">
                                {service.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/industry" 
              className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                location.pathname === '/industry' 
                  ? 'text-spatial-cyan font-semibold' 
                  : 'text-offwhite/90 hover:text-spatial-cyan hover:bg-navy-800/50'
              }`}
            >
              Industries
            </Link>

            <Link 
              to="/projects" 
              className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                location.pathname === '/projects' 
                  ? 'text-spatial-cyan font-semibold' 
                  : 'text-offwhite/90 hover:text-spatial-cyan hover:bg-navy-800/50'
              }`}
            >
              Projects
            </Link>

            <Link 
              to="/insights" 
              className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                location.pathname === '/insights' 
                  ? 'text-spatial-cyan font-semibold' 
                  : 'text-offwhite/90 hover:text-spatial-cyan hover:bg-navy-800/50'
              }`}
            >
              Insights
            </Link>

            <Link 
              to="/contact" 
              className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                location.pathname === '/contact' 
                  ? 'text-spatial-cyan font-semibold' 
                  : 'text-offwhite/90 hover:text-spatial-cyan hover:bg-navy-800/50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action: CTA & Estimator */}
          <div className="hidden lg:flex items-center gap-3">
            {onOpenEstimator && (
              <button
                type="button"
                onClick={onOpenEstimator}
                className="text-xs font-mono text-muted hover:text-spatial-cyan px-2.5 py-1.5 transition-colors border border-navy-700 rounded hover:border-spatial-cyan/30"
              >
                [Scope Calculator]
              </button>
            )}
            <Link
              to="/contact"
              className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold tracking-wider uppercase text-navy-950 bg-spatial-cyan hover:bg-spatial-cyan-bright transition-all rounded shadow-md hover:shadow-[0_0_20px_rgba(82,191,208,0.4)]"
            >
              <span>Discuss a Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              to="/contact"
              className="px-2.5 py-1.5 text-xs font-mono font-semibold uppercase text-navy-950 bg-spatial-cyan rounded"
            >
              Enquire
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-offwhite hover:text-spatial-cyan hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-spatial-cyan"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-navy-950/98 backdrop-blur-2xl border-t border-spatial-cyan/20 p-5 overflow-y-auto">
          <div className="space-y-4">
            <Link
              to="/about-us"
              className="block py-2 text-base font-medium text-offwhite hover:text-spatial-cyan border-b border-navy-800"
            >
              Company & About Us
            </Link>

            <div>
              <div className="py-2 text-xs font-mono text-spatial-cyan uppercase tracking-wider font-semibold">
                Capabilities
              </div>
              <div className="pl-3 space-y-2 mt-1 border-l border-spatial-cyan/20">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="block py-1 text-sm text-offwhite/80 hover:text-spatial-cyan"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/industry"
              className="block py-2 text-base font-medium text-offwhite hover:text-spatial-cyan border-b border-navy-800"
            >
              Industries Served
            </Link>

            <Link
              to="/projects"
              className="block py-2 text-base font-medium text-offwhite hover:text-spatial-cyan border-b border-navy-800"
            >
              Selected Projects & Case Studies
            </Link>

            <Link
              to="/insights"
              className="block py-2 text-base font-medium text-offwhite hover:text-spatial-cyan border-b border-navy-800"
            >
              Insights & Whitepapers
            </Link>

            <Link
              to="/contact"
              className="block py-2 text-base font-medium text-offwhite hover:text-spatial-cyan border-b border-navy-800"
            >
              Contact & Enquiries
            </Link>

            <div className="pt-4">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-mono font-semibold uppercase text-navy-950 bg-spatial-cyan rounded"
              >
                <span>Discuss a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="pt-6 text-xs text-muted font-mono space-y-1">
              <div>Email: enquiry@mapospatial.com</div>
              <div>Tel: +44 1296924032</div>
              <div>Bengaluru - 560064, India</div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
