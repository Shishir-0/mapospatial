import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useSpatialScene } from '../../context/SpatialSceneContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { setMode } = useSpatialScene();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  const navLinks = [
    { name: 'Overview', href: '/' },
    { name: 'Capabilities', href: '/#capabilities' },
    { name: 'Workflow', href: '/#workflow' },
    { name: 'Industries', href: '/industry' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about-us' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-basalt/90 backdrop-blur-md border-b border-subtle-border py-3.5 shadow-xl' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Technical Descriptor */}
          <Link 
            to="/" 
            onClick={() => setMode('TERRAIN_HERO')}
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="Mapo Spatial Homepage"
          >
            <img 
              src="/Final_logo-removebg-preview-e1784101578891.png" 
              alt="Mapo Spatial Logo" 
              className="h-8 w-auto object-contain brightness-95 group-hover:brightness-110 transition-all"
            />
            <div className="hidden sm:flex flex-col text-left border-l border-subtle-border pl-3">
              <span className="text-[10px] font-mono tracking-widest text-mineral uppercase font-semibold">
                Mapo Spatial
              </span>
              <span className="text-[9px] font-mono tracking-wider text-text-muted uppercase">
                Charting Smarter Decisions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 font-mono text-xs uppercase tracking-wider" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-text-secondary hover:text-mineral transition-colors relative py-1 group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-copper group-hover:w-full transition-all duration-200" />
              </Link>
            ))}
          </nav>

          {/* Right Action: Technical CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <span className="text-[10px] font-mono text-text-muted">
              REF: ±3MM SURVEY
            </span>
            <Link
              to="/contact"
              className="px-4 py-2 text-xs font-mono font-medium tracking-wider uppercase text-mineral bg-carbon hover:bg-graphite border border-subtle-border hover:border-copper transition-all rounded-sm flex items-center gap-1.5"
            >
              <span>Discuss a Project</span>
              <ArrowUpRight className="w-3 h-3 text-copper" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              to="/contact"
              className="px-3 py-1.5 text-[11px] font-mono uppercase text-mineral bg-carbon border border-subtle-border rounded-sm"
            >
              Enquire
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-text-secondary hover:text-mineral focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[58px] bottom-0 bg-basalt/98 backdrop-blur-2xl border-t border-subtle-border p-6 overflow-y-auto z-50">
          <div className="space-y-4 font-mono text-sm uppercase tracking-wider">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block py-2.5 text-text-secondary hover:text-mineral border-b border-subtle-border/50"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-6">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-mono uppercase text-mineral bg-carbon border border-copper rounded-sm"
              >
                <span>Discuss a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-copper" />
              </Link>
            </div>

            <div className="pt-8 text-[11px] text-text-muted font-mono space-y-1 lowercase">
              <div>enquiry@mapospatial.com</div>
              <div>+44 1296924032</div>
              <div>Bengaluru - 560064, India</div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
