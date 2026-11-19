import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getServiceBySlug, servicesData } from '../data/servicesData';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useSpatialScene } from '../context/SpatialSceneContext';

interface ServiceDetailPageProps {
  explicitSlug?: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ explicitSlug }) => {
  const { slug } = useParams<{ slug: string }>();
  const activeSlug = explicitSlug || slug || 'scan-to-bim';
  const service = getServiceBySlug(activeSlug);
  const { setMode } = useSpatialScene();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (service) {
      document.title = `${service.title} | Mapo Spatial Engineering`;
      if (service.slug === 'scan-to-bim') setMode('SCAN_TO_BIM');
      else if (service.slug === 'reality-capture') setMode('REALITY_CAPTURE');
      else if (service.slug === 'lidar-engineering') setMode('LIDAR');
      else if (service.slug === 'geospatial-services') setMode('GEOSPATIAL');
      else if (service.slug === 'digital-twin') setMode('DIGITAL_TWIN');
      else setMode('TERRAIN_HERO');
    }
  }, [service, setMode]);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const relatedServices = servicesData.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div className="pt-28 pb-24 px-6 sm:px-8 max-w-7xl mx-auto w-full z-10 relative">
      
      {/* Breadcrumb Navigation */}
      <Breadcrumbs 
        items={[
          { label: 'Capabilities', href: '/#capabilities' },
          { label: service.title }
        ]} 
      />

      {/* Hero Banner for Service */}
      <div className="py-12 border-b border-subtle-border">
        
        <span className="text-[11px] font-mono text-copper tracking-widest uppercase block mb-4">
          [ENGINEERING CAPABILITY // {service.category.toUpperCase()}]
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-8 space-y-4">
            <h1 className="text-4xl sm:text-6xl font-display font-bold text-mineral leading-[1.05] tracking-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-text-secondary font-mono">
              {service.tagline}
            </p>

            <p className="text-sm sm:text-base text-text-secondary font-light leading-relaxed pt-2">
              {service.summary}
            </p>

            {/* Direct Service CTAs */}
            <div className="pt-6 flex flex-wrap items-center gap-4 font-mono text-xs uppercase tracking-wider">
              <Link
                to="/contact"
                className="px-6 py-3.5 bg-mineral text-basalt hover:bg-white transition-all font-semibold flex items-center gap-2"
              >
                <span>Discuss {service.title} Project</span>
                <ArrowRight className="w-3.5 h-3.5 text-copper" />
              </Link>
            </div>
          </div>

          {/* Quick Specs Panel */}
          <div className="lg:col-span-4">
            <div className="p-6 border border-subtle-border bg-carbon/90 backdrop-blur-md space-y-4 survey-corner">
              <div className="text-[11px] font-mono text-copper uppercase tracking-wider font-semibold pb-2 border-b border-subtle-border">
                Technical Specifications
              </div>
              
              <div className="space-y-3 font-mono text-xs">
                {service.specifications.map((spec, sIdx) => (
                  <div key={sIdx} className="flex flex-col py-1 border-b border-subtle-border/60">
                    <span className="text-text-muted text-[10px] uppercase">{spec.label}</span>
                    <span className="text-mineral font-medium mt-0.5">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[10px] font-mono text-text-muted">
                3D SCENE SYNCHRONIZED
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Technical Capabilities & Deliverables Grid */}
      <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-subtle-border">
        
        {/* Left: Technical Capabilities */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono text-copper uppercase tracking-wider block">
              Technical Scope
            </span>
            <h2 className="text-2xl font-display font-bold text-mineral">
              Core Capabilities & Execution
            </h2>
          </div>

          <div className="space-y-3">
            {service.technicalCapabilities.map((cap, cIdx) => (
              <div 
                key={cIdx} 
                className="p-4 border border-subtle-border/70 bg-carbon/60 flex items-start gap-3"
              >
                <span className="w-1.5 h-1.5 bg-copper mt-1.5 shrink-0" />
                <span className="text-xs text-mineral font-mono leading-relaxed">{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Concrete Deliverables */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono text-copper uppercase tracking-wider block">
              Tangible Outputs
            </span>
            <h2 className="text-2xl font-display font-bold text-mineral">
              Engineering Deliverables
            </h2>
          </div>

          <div className="space-y-3">
            {service.deliverables.map((del, dIdx) => (
              <div 
                key={dIdx} 
                className="p-4 border border-subtle-border/70 bg-carbon/60 flex items-start gap-3"
              >
                <span className="w-1.5 h-1.5 bg-copper mt-1.5 shrink-0" />
                <span className="text-xs text-mineral font-mono leading-relaxed">{del}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 4-Step Technical Delivery Process */}
      <div className="py-16 border-b border-subtle-border">
        <div className="max-w-2xl mb-12 space-y-2">
          <span className="text-xs font-mono text-copper uppercase tracking-wider block">
            Execution Pipeline
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-mineral">
            The {service.title} Methodology
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.workflowSteps.map((step) => (
            <div 
              key={step.step}
              className="p-6 border border-subtle-border bg-carbon/70 space-y-3 survey-corner"
            >
              <div className="text-xl font-mono font-bold text-copper">
                {step.step}
              </div>
              <h3 className="text-base font-display font-bold text-mineral">
                {step.title}
              </h3>
              <p className="text-xs text-text-muted font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Related Services */}
      <div className="py-16">
        <div className="flex items-center justify-between mb-8 font-mono text-xs">
          <span className="text-mineral uppercase font-semibold">
            Related Spatial Capabilities
          </span>
          <Link to="/#capabilities" className="text-copper hover:underline">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((rel) => (
            <Link
              key={rel.id}
              to={`/${rel.slug}`}
              className="p-6 border border-subtle-border bg-carbon/60 hover:border-copper hover:bg-carbon/90 transition-all space-y-2 group"
            >
              <span className="text-[10px] font-mono text-text-muted uppercase">
                {rel.category}
              </span>
              <h3 className="text-base font-display font-bold text-mineral group-hover:text-copper transition-colors">
                {rel.title}
              </h3>
              <p className="text-xs text-text-muted font-light line-clamp-2">
                {rel.summary}
              </p>
              <div className="pt-2 text-[11px] font-mono text-copper flex items-center gap-1">
                <span>Inspect Discipline</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};
