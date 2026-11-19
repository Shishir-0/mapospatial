import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const isDarkHeader = isHome && !isScrolled;

  const navLinks = [
    { name: 'Overview', href: '/' },
    { name: 'Capabilities', href: '/#capabilities' },
    { name: 'Workflow', href: '/workflow' },
    { name: 'Industries', href: '/industry' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about-us' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isDarkHeader
          ? 'bg-[#080B10]/85 backdrop-blur-md border-b border-white/10 text-white py-4 sm:py-5'
          : isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-subtle-border py-3 shadow-[0_4px_20px_rgba(20,35,63,0.06)] text-navy'
          : 'bg-white/90 backdrop-blur-sm border-b border-subtle-border/70 py-4 sm:py-5 text-navy'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Technical Descriptor */}
          <Link 
            to="/" 
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="Mapo Spatial Homepage"
          >
            <div className={`p-1 rounded-sm transition-colors ${isDarkHeader ? 'bg-white/10 backdrop-blur-sm border border-white/10' : 'bg-transparent'}`}>
              <img 
                src="/assets/mapo-logo.png" 
                alt="Mapo Spatial Logo - Charting Smarter Decisions" 
                className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </div>
            <div className={`hidden sm:flex flex-col text-left border-l pl-3 ${isDarkHeader ? 'border-white/20' : 'border-subtle-border'}`}>
              <span className={`text-[10px] font-mono tracking-widest uppercase font-bold ${isDarkHeader ? 'text-white' : 'text-navy'}`}>
                SPATIAL ENGINEERING
              </span>
              <span className={`text-[9px] font-mono tracking-wider uppercase ${isDarkHeader ? 'text-slate-400' : 'text-text-muted'}`}>
                GLOBAL DELIVERY HUB
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 font-mono text-xs uppercase tracking-wider" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || (link.href === '/' && location.pathname === '/');
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`transition-colors relative py-1 font-medium group ${
                    isDarkHeader
                      ? 'text-slate-300 hover:text-white'
                      : 'text-text-secondary hover:text-navy'
                  } ${isActive ? (isDarkHeader ? 'text-white font-bold' : 'text-navy font-bold') : ''}`}
                >
                  <span>{link.name}</span>
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-gold transition-all duration-200 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Technical CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <span className={`text-[10px] font-mono ${isDarkHeader ? 'text-slate-400' : 'text-text-muted'}`}>
              REF: ±3MM SURVEY
            </span>
            <Link
              to="/contact"
              className={`px-4 py-2 text-xs font-mono font-medium tracking-wider uppercase transition-all rounded-sm flex items-center gap-1.5 shadow-sm ${
                isDarkHeader
                  ? 'bg-navy text-white hover:bg-navy-deep border border-gold/50 hover:border-gold'
                  : 'bg-navy text-white hover:bg-navy-deep border border-navy hover:border-gold'
              }`}
            >
              <span>Discuss a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              to="/contact"
              className="px-3 py-1.5 text-[11px] font-mono uppercase text-white bg-navy border border-navy rounded-sm"
            >
              Enquire
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 focus:outline-none ${isDarkHeader ? 'text-white hover:text-gold' : 'text-navy hover:text-gold'}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-white/98 backdrop-blur-2xl border-t border-subtle-border p-6 overflow-y-auto z-50 shadow-2xl">
          <div className="space-y-4 font-mono text-sm uppercase tracking-wider">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block py-3 text-navy font-semibold hover:text-gold border-b border-subtle-border/60 transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-6">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 py-3.5 text-xs font-mono uppercase text-white bg-navy hover:bg-navy-deep border border-gold rounded-sm shadow-md"
              >
                <span>Discuss a Project</span>
                <ArrowUpRight className="w-4 h-4 text-gold" />
              </Link>
            </div>

            <div className="pt-8 text-[11px] text-text-muted font-mono space-y-2 border-t border-subtle-border">
              <div className="text-navy font-semibold uppercase">Mapo Spatial Global Communications</div>
              <div>enquiry@mapospatial.com</div>
              <div>+44 1296924032 (UK Direct)</div>
              <div>Bengaluru - 560064, India</div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
