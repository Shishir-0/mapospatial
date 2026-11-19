import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getServiceBySlug, servicesData } from '../data/servicesData';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Cpu, 
  Compass, 
  FileText, 
  ShieldCheck, 
  Activity, 
  ArrowUpRight 
} from 'lucide-react';

interface ServiceDetailPageProps {
  onOpenEstimator?: () => void;
  explicitSlug?: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onOpenEstimator, explicitSlug }) => {
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

  // Related services
  const relatedServices = servicesData.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div className="pt-24 pb-20 bg-navy-950 min-h-screen text-offwhite relative">
      
      {/* Background Spatial Grid */}
      <div className="absolute inset-0 bg-spatial-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <Breadcrumbs 
          items={[
            { label: 'Capabilities', href: '/#capabilities-section' },
            { label: service.title }
          ]} 
        />

        {/* Hero Banner for Service */}
        <div className="py-12 border-b border-spatial-cyan/20">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-navy-900 border border-spatial-cyan/30 text-spatial-cyan text-xs font-mono uppercase tracking-wider mb-6">
            <Cpu className="w-3.5 h-3.5" />
            <span>{service.category} Discipline</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-offwhite tracking-tight leading-[1.1]">
                {service.title}
              </h1>

              <p className="text-lg sm:text-xl text-spatial-cyan font-mono font-normal">
                {service.tagline}
              </p>

              <p className="text-base sm:text-lg text-offwhite/80 font-light leading-relaxed pt-2">
                {service.summary}
              </p>

              {/* Direct Service CTAs */}
              <div className="pt-6 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider text-navy-950 bg-spatial-cyan hover:bg-spatial-cyan-bright transition-all rounded shadow-lg flex items-center gap-2"
                >
                  <span>Discuss {service.title} Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {onOpenEstimator && (
                  <button
                    type="button"
                    onClick={onOpenEstimator}
                    className="px-6 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-offwhite bg-navy-900 hover:bg-navy-800 border border-spatial-cyan/30 rounded transition-all flex items-center gap-2"
                  >
                    <Activity className="w-3.5 h-3.5 text-spatial-cyan" />
                    <span>Configure Specification</span>
                  </button>
                )}
              </div>
            </div>

            {/* Quick Specs Panel */}
            <div className="lg:col-span-4">
              <div className="hud-panel p-6 bg-navy-900/90 border border-spatial-cyan/25 rounded-xl space-y-4 corner-reticle">
                <div className="text-xs font-mono text-spatial-cyan uppercase tracking-wider font-semibold pb-2 border-b border-navy-700">
                  Engineering Specifications
                </div>
                
                <div className="space-y-3 font-mono text-xs">
                  {service.specifications.map((spec, sIdx) => (
                    <div key={sIdx} className="flex flex-col py-1 border-b border-navy-800">
                      <span className="text-muted text-[10px] uppercase">{spec.label}</span>
                      <span className="text-offwhite font-medium mt-0.5">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-mono">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Quality Assured Delivery</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Technical Capabilities & Deliverables Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-navy-800">
          
          {/* Left: Technical Capabilities */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-spatial-cyan uppercase tracking-wider font-semibold block">
                Technical Scope
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-offwhite">
                Core Capabilities & Scope of Work
              </h2>
            </div>

            <div className="space-y-3">
              {service.technicalCapabilities.map((cap, cIdx) => (
                <div 
                  key={cIdx} 
                  className="p-4 rounded-lg bg-navy-900/60 border border-navy-800 hover:border-spatial-cyan/30 transition-colors flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-spatial-cyan shrink-0 mt-0.5" />
                  <span className="text-sm text-offwhite/90 leading-relaxed">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Concrete Deliverables */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-spatial-cyan uppercase tracking-wider font-semibold block">
                Tangible Outputs
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-offwhite">
                Client Engineering Deliverables
              </h2>
            </div>

            <div className="space-y-3">
              {service.deliverables.map((del, dIdx) => (
                <div 
                  key={dIdx} 
                  className="p-4 rounded-lg bg-navy-900/60 border border-navy-800 hover:border-spatial-cyan/30 transition-colors flex items-start gap-3"
                >
                  <FileText className="w-4 h-4 text-spatial-cyan shrink-0 mt-0.5" />
                  <span className="text-sm text-offwhite/90 leading-relaxed">{del}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 4-Step Technical Delivery Process */}
        <div className="py-16 border-b border-navy-800">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono text-spatial-cyan uppercase tracking-wider font-semibold block">
              Execution Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-offwhite">
              The {service.title} Delivery Pipeline
            </h2>
            <p className="text-sm text-offwhite/80 font-light">
              A structured 4-phase engineering pipeline engineered for repeatability, precision tolerances, and continuous quality audits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.workflowSteps.map((step) => (
              <div 
                key={step.step}
                className="hud-panel p-6 bg-navy-900/70 border border-spatial-cyan/20 rounded-xl space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-2xl font-mono font-bold text-spatial-cyan">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-display font-bold text-offwhite">
                    {step.title}
                  </h3>
                  <p className="text-xs text-offwhite/75 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Applications */}
        <div className="py-16 border-b border-navy-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono text-spatial-cyan uppercase tracking-wider font-semibold block">
                Target Applications
              </span>
              <h2 className="text-3xl font-display font-bold text-offwhite">
                Where {service.title} is Deployed
              </h2>
              <p className="text-sm text-offwhite/80 font-light leading-relaxed">
                Our deliverables support mission-critical decisions across capital projects, complex plant shutdowns, and infrastructure monitoring.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.applications.map((app, aIdx) => (
                  <div 
                    key={aIdx} 
                    className="p-4 rounded-lg bg-navy-900 border border-navy-800 flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-spatial-cyan mt-1.5 shrink-0" />
                    <span className="text-xs text-offwhite/90 leading-relaxed">{app}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Related Services */}
        <div className="py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-display font-bold text-offwhite">
              Related Spatial Capabilities
            </h2>
            <Link to="/#capabilities-section" className="text-xs font-mono text-spatial-cyan hover:underline">
              View All Capabilities →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.id}
                to={`/${rel.slug}`}
                className="hud-panel p-6 bg-navy-900/60 border border-spatial-cyan/20 rounded-xl hover:border-spatial-cyan/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] font-mono text-muted uppercase">
                    {rel.category}
                  </span>
                  <h3 className="text-lg font-display font-bold text-offwhite group-hover:text-spatial-cyan transition-colors mt-1 mb-2">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-offwhite/70 font-light line-clamp-2">
                    {rel.summary}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-navy-800 flex items-center justify-between text-xs font-mono text-spatial-cyan">
                  <span>Explore Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="hud-panel p-8 sm:p-12 bg-gradient-to-r from-navy-900 via-navy-900 to-navy-800 border border-spatial-cyan/30 rounded-2xl text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-offwhite">
            Ready to integrate {service.title} into your next project?
          </h2>
          <p className="text-sm text-offwhite/80 max-w-xl mx-auto font-light">
            Contact our engineering directors to discuss specifications, sample datasets, tolerances, and proposal timelines.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider text-navy-950 bg-spatial-cyan hover:bg-spatial-cyan-bright transition-all rounded shadow-md"
            >
              Discuss Your Requirements
            </Link>
            <a
              href="mailto:enquiry@mapospatial.com"
              className="px-6 py-3 text-xs font-mono uppercase text-offwhite hover:text-spatial-cyan border border-navy-700 rounded transition-colors"
            >
              Email enquiry@mapospatial.com
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
