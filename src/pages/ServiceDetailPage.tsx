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
    <div className="pt-28 pb-24 px-6 sm:px-8 max-w-7xl mx-auto w-full z-10 relative bg-[#FFFFFF] text-[#425168]">
      
      {/* Breadcrumb Navigation */}
      <Breadcrumbs 
        items={[
          { label: 'Capabilities', href: '/#capabilities' },
          { label: service.title }
        ]} 
      />

      {/* Hero Banner for Service */}
      <div className="py-12 border-b border-[#DCE1E7]">
        
        <span className="text-[13px] font-mono text-[#596579] font-bold tracking-[0.08em] uppercase block mb-4">
          [ENGINEERING CAPABILITY // {service.category.toUpperCase()}]
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-8 space-y-5">
            <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-[#14233F] leading-[1.05] tracking-tight">
              {service.title}
            </h1>

            <p className="text-lg sm:text-[20px] text-[#14233F] font-mono font-bold">
              {service.tagline}
            </p>

            <p className="text-base sm:text-[17px] text-[#425168] font-normal leading-[1.65]">
              {service.summary}
            </p>

            {/* Direct Service CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4 font-mono text-xs uppercase tracking-wider">
              <Link
                to="/contact"
                className="px-6 py-3.5 bg-[#14233F] hover:bg-[#0E1930] text-white border border-[#14233F] hover:border-[#B69A5A] transition-all font-semibold rounded-sm shadow-md flex items-center gap-2"
              >
                <span>Discuss {service.title} Project</span>
                <ArrowRight className="w-4 h-4 text-[#B69A5A]" />
              </Link>
            </div>
          </div>

          {/* Quick Specs Panel */}
          <div className="lg:col-span-4">
            <div className="p-6 border border-[#DCE1E7] bg-[#F7F8FA] rounded-sm space-y-4 survey-corner shadow-xs">
              <div className="text-[12px] font-mono text-[#596579] uppercase tracking-wider font-bold pb-2 border-b border-[#DCE1E7]">
                Technical Specifications
              </div>
              
              <div className="space-y-3 font-mono text-xs">
                {service.specifications.map((spec, sIdx) => (
                  <div key={sIdx} className="flex flex-col py-1 border-b border-[#DCE1E7]/70">
                    <span className="text-[#536174] text-[11px] uppercase font-bold">{spec.label}</span>
                    <span className="text-[#14233F] font-extrabold mt-0.5 text-sm">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[11px] font-mono text-[#14233F] font-bold">
                ✓ STRICT VERIFIED GEOMETRY
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Real Deliverable Photographic Preview */}
      {service.imageAsset && (
        <div className="py-12 border-b border-[#DCE1E7]">
          <div className="relative rounded-sm overflow-hidden border border-[#DCE1E7] bg-[#F7F8FA] aspect-[21/9] max-h-[460px] shadow-sm group">
            <img 
              src={service.imageAsset} 
              alt={`${service.title} Engineering Output`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14233F]/90 via-[#14233F]/20 to-transparent flex items-end p-6">
              <div className="font-mono text-xs text-white flex items-center justify-between w-full">
                <span className="bg-[#14233F] px-3 py-1.5 rounded-sm border border-[#B69A5A]/50 text-[#B69A5A] font-bold">
                  VERIFIED DELIVERABLE: {service.title}
                </span>
                <span className="bg-black/70 px-3 py-1.5 rounded-sm text-slate-200 font-medium">
                  SURVEY-GRADE FIDELITY
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Technical Capabilities & Deliverables Grid */}
      <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-[#DCE1E7]">
        
        {/* Left: Technical Capabilities */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono text-[#596579] uppercase tracking-wider font-bold block">
              Technical Scope
            </span>
            <h2 className="text-2xl font-display font-extrabold text-[#14233F]">
              Core Capabilities & Execution
            </h2>
          </div>

          <div className="space-y-3">
            {service.technicalCapabilities.map((cap, cIdx) => (
              <div 
                key={cIdx} 
                className="p-4 border border-[#DCE1E7] bg-[#F7F8FA] rounded-sm flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-[#B69A5A] mt-0.5 shrink-0 font-bold" />
                <span className="text-xs text-[#14233F] font-mono leading-relaxed font-semibold">{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Concrete Deliverables */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono text-[#596579] uppercase tracking-wider font-bold block">
              Tangible Outputs
            </span>
            <h2 className="text-2xl font-display font-extrabold text-[#14233F]">
              Engineering Deliverables
            </h2>
          </div>

          <div className="space-y-3">
            {service.deliverables.map((del, dIdx) => (
              <div 
                key={dIdx} 
                className="p-4 border border-[#DCE1E7] bg-[#F7F8FA] rounded-sm flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-[#B69A5A] mt-0.5 shrink-0 font-bold" />
                <span className="text-xs text-[#14233F] font-mono leading-relaxed font-semibold">{del}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 4-Step Technical Delivery Process */}
      <div className="py-16 border-b border-[#DCE1E7]">
        <div className="max-w-2xl mb-12 space-y-2">
          <span className="text-xs font-mono text-[#596579] uppercase tracking-wider font-bold block">
            Execution Pipeline
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#14233F]">
            The {service.title} Methodology
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.workflowSteps.map((step) => (
            <div 
              key={step.step}
              className="p-6 border border-[#DCE1E7] bg-[#F7F8FA] rounded-sm space-y-3 survey-corner hover:border-[#B69A5A]/60 transition-all shadow-xs"
            >
              <div className="text-xl font-mono font-extrabold text-[#14233F]">
                {step.step}
              </div>
              <h3 className="text-base font-display font-bold text-[#14233F]">
                {step.title}
              </h3>
              <p className="text-[13px] text-[#425168] font-normal leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Related Services */}
      <div className="py-16">
        <div className="flex items-center justify-between mb-8 font-mono text-xs">
          <span className="text-[#14233F] uppercase font-bold text-sm">
            Related Spatial Capabilities
          </span>
          <Link to="/#capabilities" className="text-[#14233F] font-bold hover:text-[#B69A5A] underline">
            View All Capabilities →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((rel) => (
            <Link
              key={rel.id}
              to={`/${rel.slug}`}
              className="p-6 border border-[#DCE1E7] bg-[#F7F8FA] hover:border-[#B69A5A] hover:bg-[#FFFFFF] rounded-sm transition-all space-y-2 group shadow-xs"
            >
              <span className="text-[11px] font-mono text-[#596579] uppercase font-bold">
                {rel.category}
              </span>
              <h3 className="text-base font-display font-bold text-[#14233F] group-hover:text-[#B69A5A] transition-colors">
                {rel.title}
              </h3>
              <p className="text-xs text-[#425168] font-normal line-clamp-2">
                {rel.summary}
              </p>
              <div className="pt-2 text-[12px] font-mono text-[#14233F] font-bold flex items-center gap-1">
                <span>Inspect Discipline</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#B69A5A]" />
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};
