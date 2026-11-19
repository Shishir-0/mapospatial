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
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E3E7E8] py-3 shadow-[0_4px_20px_rgba(20,35,63,0.06)]' 
          : 'bg-white/90 backdrop-blur-sm border-b border-[#E3E7E8]/70 py-3.5 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Technical Descriptor */}
          <Link 
            to="/" 
            className="flex items-center gap-2 sm:gap-3.5 group focus:outline-none shrink-0"
            aria-label="Mapo Spatial Homepage"
          >
            <img 
              src="/assets/mapo-logo.png" 
              alt="Mapo Spatial Logo - Charting Smarter Decisions" 
              className="h-7 sm:h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
            <div className="hidden sm:flex flex-col text-left border-l border-[#E3E7E8] pl-3">
              <span className="text-[10px] font-mono tracking-widest text-[#14233F] uppercase font-bold">
                SPATIAL ENGINEERING
              </span>
              <span className="text-[9px] font-mono tracking-wider text-[#7B8491] uppercase">
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
                  className={`text-[#14233F] hover:text-[#B69A5A] transition-colors relative py-1 font-medium group ${
                    isActive ? 'font-bold text-[#14233F]' : ''
                  }`}
                >
                  <span>{link.name}</span>
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-[#B69A5A] transition-all duration-200 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Technical CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <span className="text-[10px] font-mono text-[#7B8491]">
              REF: ±3MM SURVEY
            </span>
            <Link
              to="/contact"
              className="px-4 py-2 text-xs font-mono font-medium tracking-wider uppercase text-white bg-[#14233F] hover:bg-[#0E1930] border border-[#14233F] hover:border-[#B69A5A] transition-all rounded-sm flex items-center gap-1.5 shadow-sm"
            >
              <span>Discuss a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B69A5A]" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center gap-2 shrink-0">
            <Link
              to="/contact"
              className="px-2.5 py-1 text-[11px] font-mono uppercase text-white bg-[#14233F] border border-[#14233F] rounded-sm"
            >
              Enquire
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#14233F] hover:text-[#B69A5A] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-white/98 backdrop-blur-2xl border-t border-[#E3E7E8] p-6 overflow-y-auto z-50 shadow-2xl">
          <div className="space-y-4 font-mono text-sm uppercase tracking-wider">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block py-3 text-[#14233F] font-semibold hover:text-[#B69A5A] border-b border-[#E3E7E8]/60 transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-6">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 py-3.5 text-xs font-mono uppercase text-white bg-[#14233F] hover:bg-[#0E1930] border border-[#B69A5A] rounded-sm shadow-md"
              >
                <span>Discuss a Project</span>
                <ArrowUpRight className="w-4 h-4 text-[#B69A5A]" />
              </Link>
            </div>

            <div className="pt-8 text-[11px] text-[#7B8491] font-mono space-y-2 border-t border-[#E3E7E8]">
              <div className="text-[#14233F] font-semibold uppercase">Mapo Spatial Global Communications</div>
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
