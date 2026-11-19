import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { Compass, Home, Layers, Workflow, ArrowRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = '404: Coordinate Not Found | Mapo Spatial Engineering';
  }, []);

  return (
    <div className="pt-28 pb-24 px-6 sm:px-8 max-w-7xl mx-auto w-full z-10 relative bg-[#FFFFFF] text-[#425168]">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs items={[{ label: '404 Geodetic Exception' }]} />

      {/* Main Error Container */}
      <div className="py-16 border-b border-[#DCE1E7]">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F8FA] border border-[#DCE1E7] rounded-sm font-mono text-xs text-[#596579] font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-[#B69A5A]" />
            <span>HTTP STATUS 404 // SPATIAL INDEX EXCEPTION</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-[#14233F] leading-[1.08] tracking-tight">
            Spatial Coordinate Not Found
          </h1>

          <p className="text-base sm:text-lg text-[#425168] font-normal leading-relaxed">
            The requested spatial coordinate or route reference does not exist within the Mapo Spatial index. 
            The resource may have been decommissioned, relocated, or indexed under an alternate projection system.
          </p>

          {/* Telemetry Debug Panel */}
          <div className="p-5 bg-[#F7F8FA] border border-[#DCE1E7] rounded-sm font-mono text-xs text-[#14233F] space-y-2">
            <div className="flex justify-between items-center pb-2 border-b border-[#DCE1E7]/70">
              <span className="text-[#596579] uppercase font-bold text-[11px]">DIAGNOSTIC TELEMETRY</span>
              <span className="text-[#B69A5A] font-bold text-[11px]">ERR_404_UNRESOLVED</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[12px] pt-1">
              <div>
                <span className="text-[#596579]">TARGET_ROUTE: </span>
                <span className="font-bold text-[#14233F]">{location.pathname}</span>
              </div>
              <div>
                <span className="text-[#596579]">GEODETIC_DATUM: </span>
                <span className="font-bold text-[#14233F]">WGS84 / EPSG:4326</span>
              </div>
              <div>
                <span className="text-[#596579]">SPATIAL_ENGINE: </span>
                <span className="font-bold text-[#14233F]">WebGL Three.js Core</span>
              </div>
              <div>
                <span className="text-[#596579]">RESOLUTION: </span>
                <span className="font-bold text-[#14233F]">REDIRECT_RECOMMENDED</span>
              </div>
            </div>
          </div>

          {/* Suggested Destinations */}
          <div className="pt-4 space-y-4">
            <span className="font-mono text-xs text-[#596579] font-bold uppercase tracking-wider block">
              VALIDATED SPATIAL HUBS
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                to="/"
                className="p-4 border border-[#DCE1E7] hover:border-[#B69A5A] bg-[#FFFFFF] hover:bg-[#F7F8FA] rounded-sm flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-[#F7F8FA] border border-[#DCE1E7] flex items-center justify-center text-[#14233F] group-hover:border-[#B69A5A]">
                    <Home className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-[#14233F] text-sm">Platform Overview</div>
                    <div className="font-mono text-[11px] text-[#596579]">Return to main homepage</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#596579] group-hover:text-[#B69A5A] group-hover:translate-x-1 transition-all" />
              </Link>

              <Link
                to="/workflow"
                className="p-4 border border-[#DCE1E7] hover:border-[#B69A5A] bg-[#FFFFFF] hover:bg-[#F7F8FA] rounded-sm flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-[#F7F8FA] border border-[#DCE1E7] flex items-center justify-center text-[#14233F] group-hover:border-[#B69A5A]">
                    <Workflow className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-[#14233F] text-sm">Engineering Workflow</div>
                    <div className="font-mono text-[11px] text-[#596579]">6-Stage Reality-to-Digital Pipeline</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#596579] group-hover:text-[#B69A5A] group-hover:translate-x-1 transition-all" />
              </Link>

              <Link
                to="/industry"
                className="p-4 border border-[#DCE1E7] hover:border-[#B69A5A] bg-[#FFFFFF] hover:bg-[#F7F8FA] rounded-sm flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-[#F7F8FA] border border-[#DCE1E7] flex items-center justify-center text-[#14233F] group-hover:border-[#B69A5A]">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-[#14233F] text-sm">Industries Served</div>
                    <div className="font-mono text-[11px] text-[#596579]">AEC, Civil, Rail, Energy & Mining</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#596579] group-hover:text-[#B69A5A] group-hover:translate-x-1 transition-all" />
              </Link>

              <Link
                to="/contact"
                className="p-4 border border-[#DCE1E7] hover:border-[#B69A5A] bg-[#FFFFFF] hover:bg-[#F7F8FA] rounded-sm flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-[#F7F8FA] border border-[#DCE1E7] flex items-center justify-center text-[#14233F] group-hover:border-[#B69A5A]">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-[#14233F] text-sm">Contact Support</div>
                    <div className="font-mono text-[11px] text-[#596579]">Connect with geomatics team</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#596579] group-hover:text-[#B69A5A] group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
