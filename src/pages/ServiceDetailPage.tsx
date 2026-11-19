import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getServiceBySlug, servicesData } from '../data/servicesData';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { ArrowUpRight, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServiceDetailPageProps {
  explicitSlug?: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ explicitSlug }) => {
  const { slug } = useParams<{ slug: string }>();
  const activeSlug = explicitSlug || slug || 'scan-to-bim';
  const service = getServiceBySlug(activeSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (service) {
      document.title = `${service.title} | Mapo Spatial Engineering`;
    }
  }, [service]);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const relatedServices = servicesData.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div className="pt-28 pb-24 px-6 sm:px-8 max-w-7xl mx-auto w-full z-10 relative bg-white">
      
      {/* Breadcrumb Navigation */}
      <Breadcrumbs 
        items={[
          { label: 'Capabilities', href: '/#capabilities' },
          { label: service.title }
        ]} 
      />

      {/* Hero Banner for Service */}
      <div className="py-12 border-b border-subtle-border">
        
        <span className="text-xs font-mono text-gold font-bold tracking-widest uppercase block mb-4">
          [ENGINEERING CAPABILITY // {service.category.toUpperCase()}]
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-8 space-y-5">
            <h1 className="text-4xl sm:text-6xl font-display font-bold text-navy leading-[1.05] tracking-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-gold font-mono font-semibold">
              {service.tagline}
            </p>

            <p className="text-sm sm:text-base text-text-secondary font-light leading-relaxed pt-1">
              {service.summary}
            </p>

            {/* Direct Service CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4 font-mono text-xs uppercase tracking-wider">
              <Link
                to="/contact"
                className="px-6 py-3.5 bg-navy hover:bg-navy-deep text-white border border-navy hover:border-gold transition-all font-semibold rounded-sm shadow-md flex items-center gap-2"
              >
                <span>Discuss {service.title} Project</span>
                <ArrowRight className="w-4 h-4 text-gold" />
              </Link>
            </div>
          </div>

          {/* Quick Specs Panel */}
          <div className="lg:col-span-4">
            <div className="p-6 border border-subtle-border bg-warm-white rounded-sm space-y-4 survey-corner shadow-md">
              <div className="text-[11px] font-mono text-gold uppercase tracking-wider font-bold pb-2 border-b border-subtle-border">
                Technical Specifications
              </div>
              
              <div className="space-y-3 font-mono text-xs">
                {service.specifications.map((spec, sIdx) => (
                  <div key={sIdx} className="flex flex-col py-1 border-b border-subtle-border/60">
                    <span className="text-text-muted text-[10px] uppercase font-medium">{spec.label}</span>
                    <span className="text-navy font-bold mt-0.5">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[10px] font-mono text-gold font-bold">
                ✓ STRICT VERIFIED GEOMETRY
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Real Deliverable Photographic Preview */}
      {service.imageAsset && (
        <div className="py-12 border-b border-subtle-border">
          <div className="relative rounded-sm overflow-hidden border border-subtle-border bg-warm-white aspect-[21/9] max-h-[460px] shadow-lg group">
            <img 
              src={service.imageAsset} 
              alt={`${service.title} Engineering Output`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent flex items-end p-6">
              <div className="font-mono text-xs text-white flex items-center justify-between w-full">
                <span className="bg-navy px-3 py-1.5 rounded-sm border border-gold/40 text-gold font-bold">
                  VERIFIED DELIVERABLE: {service.title}
                </span>
                <span className="bg-black/60 px-3 py-1.5 rounded-sm text-slate-200">
                  SURVEY-GRADE FIDELITY
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Technical Capabilities & Deliverables Grid */}
      <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-subtle-border">
        
        {/* Left: Technical Capabilities */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono text-gold uppercase tracking-wider font-bold block">
              Technical Scope
            </span>
            <h2 className="text-2xl font-display font-bold text-navy">
              Core Capabilities & Execution
            </h2>
          </div>

          <div className="space-y-3">
            {service.technicalCapabilities.map((cap, cIdx) => (
              <div 
                key={cIdx} 
                className="p-4 border border-subtle-border bg-warm-white rounded-sm flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-xs text-navy font-mono leading-relaxed">{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Concrete Deliverables */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono text-gold uppercase tracking-wider font-bold block">
              Tangible Outputs
            </span>
            <h2 className="text-2xl font-display font-bold text-navy">
              Engineering Deliverables
            </h2>
          </div>

          <div className="space-y-3">
            {service.deliverables.map((del, dIdx) => (
              <div 
                key={dIdx} 
                className="p-4 border border-subtle-border bg-warm-white rounded-sm flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-xs text-navy font-mono leading-relaxed">{del}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 4-Step Technical Delivery Process */}
      <div className="py-16 border-b border-subtle-border">
        <div className="max-w-2xl mb-12 space-y-2">
          <span className="text-xs font-mono text-gold uppercase tracking-wider font-bold block">
            Execution Pipeline
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy">
            The {service.title} Methodology
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.workflowSteps.map((step) => (
            <div 
              key={step.step}
              className="p-6 border border-subtle-border bg-warm-white rounded-sm space-y-3 survey-corner hover:border-gold/60 transition-all"
            >
              <div className="text-xl font-mono font-bold text-gold">
                {step.step}
              </div>
              <h3 className="text-base font-display font-bold text-navy">
                {step.title}
              </h3>
              <p className="text-xs text-text-secondary font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Related Services */}
      <div className="py-16">
        <div className="flex items-center justify-between mb-8 font-mono text-xs">
          <span className="text-navy uppercase font-bold">
            Related Spatial Capabilities
          </span>
          <Link to="/#capabilities" className="text-gold font-bold hover:underline">
            View All Capabilities →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((rel) => (
            <Link
              key={rel.id}
              to={`/${rel.slug}`}
              className="p-6 border border-subtle-border bg-warm-white hover:border-gold hover:bg-white rounded-sm transition-all space-y-2 group shadow-sm"
            >
              <span className="text-[10px] font-mono text-text-muted uppercase">
                {rel.category}
              </span>
              <h3 className="text-base font-display font-bold text-navy group-hover:text-gold transition-colors">
                {rel.title}
              </h3>
              <p className="text-xs text-text-secondary font-light line-clamp-2">
                {rel.summary}
              </p>
              <div className="pt-2 text-[11px] font-mono text-gold font-bold flex items-center gap-1">
                <span>Inspect Discipline</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};
