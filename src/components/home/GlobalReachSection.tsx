import React, { useState } from 'react';
import { Globe, MapPin, Building, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RegionNode {
  id: string;
  region: string;
  coordinates: string;
  sectors: string[];
  capabilities: string[];
  deliveryHighlights: string;
}

export const GlobalReachSection: React.FC = () => {
  const regions: RegionNode[] = [
    {
      id: 'uk-europe',
      region: 'United Kingdom & Europe',
      coordinates: '51.5074° N, 0.1278° W',
      sectors: ['Intercity Rail Networks', 'Historic Heritage Renovations', 'Highways & Transport'],
      capabilities: ['Mobile LiDAR Corridor Extraction', 'LOD 350 BIM As-Builts', 'Clearance Analysis'],
      deliveryHighlights: 'Continuous delivery partner to UK Tier-1 architectural and rail engineering consultancies.'
    },
    {
      id: 'americas',
      region: 'Americas (US & Canada)',
      coordinates: '40.7128° N, 74.0060° W',
      sectors: ['AEC Commercial Retrofits', 'Subsurface Utility Engineering (SUE)', 'Power Grids'],
      capabilities: ['ASCE 38-02 GIS Databases', 'Revit Architectural & MEP', 'Vegetation LiDAR'],
      deliveryHighlights: 'Overnight turnaround collaboration leveraging timezone continuity for rapid project timelines.'
    },
    {
      id: 'middle-east',
      region: 'Middle East & Gulf',
      coordinates: '25.2048° N, 55.2708° E',
      sectors: ['Petrochemical Refineries', 'Smart City Megaprojects', 'Industrial Infrastructure'],
      capabilities: ['Plant 3D Spool Modeling', 'Cesium Web Digital Twins', 'High-Density TLS'],
      deliveryHighlights: 'Supporting rapid turnaround plant shutdown cycles with zero-tolerance pre-fabrication modeling.'
    },
    {
      id: 'apac',
      region: 'Asia-Pacific & India',
      coordinates: '12.9716° N, 77.5946° E',
      sectors: ['Urban Transit & Metros', 'Cadastral Land Mapping', 'Airport Obstacle Analysis'],
      capabilities: ['Large-scale Photogrammetry', 'True Ortho Processing', 'ICAO Annex 14 Surveys'],
      deliveryHighlights: 'Headquartered engineering delivery center in Bengaluru with 24/7 high-throughput processing capacity.'
    }
  ];

  const [activeRegion, setActiveRegion] = useState<RegionNode>(regions[0]);

  return (
    <section className="py-24 bg-navy-950 border-t border-spatial-cyan/15 relative overflow-hidden" id="global-reach">
      
      {/* Background World Grid */}
      <div className="absolute inset-0 bg-spatial-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-navy-900 border border-spatial-cyan/30 text-spatial-cyan text-xs font-mono uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5" />
              <span>International Delivery Footprint</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-offwhite tracking-tight">
              Global Engineering Network
            </h2>
            <p className="text-base text-offwhite/80 font-light leading-relaxed">
              Operating as an international spatial engineering partner, Mapo Spatial bridges timezones to deliver precision spatial intelligence worldwide.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-spatial-cyan">
            <span className="w-2.5 h-2.5 rounded-full bg-spatial-cyan animate-pulse"></span>
            <span>24/7 CONTINUOUS TURNAROUND PIPELINES</span>
          </div>
        </div>

        {/* Global Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Region Buttons */}
          <div className="lg:col-span-5 space-y-3">
            {regions.map((node) => {
              const isActive = activeRegion.id === node.id;
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setActiveRegion(node)}
                  className={`w-full text-left p-5 rounded-xl border transition-all ${
                    isActive
                      ? 'bg-navy-900 border-spatial-cyan shadow-[0_0_20px_rgba(82,191,208,0.2)]'
                      : 'bg-navy-950/60 border-navy-800 hover:border-spatial-cyan/30 hover:bg-navy-900/40'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className={isActive ? 'text-spatial-cyan font-bold' : 'text-offwhite/80'}>
                      {node.region}
                    </span>
                    <span className="text-[11px] text-muted">
                      {node.coordinates}
                    </span>
                  </div>

                  <p className="text-xs text-muted font-light line-clamp-1 mt-1">
                    {node.deliveryHighlights}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Region Telemetry Stage */}
          <div className="lg:col-span-7">
            <div className="hud-panel p-8 bg-navy-900/90 border border-spatial-cyan/30 rounded-xl space-y-6 corner-reticle">
              
              <div className="flex items-center justify-between pb-4 border-b border-navy-800">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-spatial-cyan block font-semibold">
                    Target Operating Region
                  </span>
                  <h3 className="text-2xl font-display font-bold text-offwhite mt-1">
                    {activeRegion.region}
                  </h3>
                </div>

                <div className="text-right font-mono text-xs">
                  <span className="text-muted block text-[10px]">GEODETIC REFERENCE</span>
                  <span className="text-spatial-cyan">{activeRegion.coordinates}</span>
                </div>
              </div>

              {/* Delivery Narrative */}
              <p className="text-sm text-offwhite/90 leading-relaxed font-light">
                {activeRegion.deliveryHighlights}
              </p>

              {/* Sectors and Capabilities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                
                <div className="space-y-2 bg-navy-950/60 p-4 rounded-lg border border-navy-800">
                  <div className="text-xs font-mono text-spatial-cyan uppercase tracking-wider font-semibold">
                    Primary Sectors Served
                  </div>
                  <ul className="space-y-1.5 text-xs text-offwhite/80">
                    {activeRegion.sectors.map((sec, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-spatial-cyan"></span>
                        <span>{sec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 bg-navy-950/60 p-4 rounded-lg border border-navy-800">
                  <div className="text-xs font-mono text-spatial-cyan uppercase tracking-wider font-semibold">
                    Frequent Deliverables
                  </div>
                  <ul className="space-y-1.5 text-xs text-offwhite/80">
                    {activeRegion.capabilities.map((cap, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Direct Enquiry Button */}
              <div className="pt-4 border-t border-navy-800 flex items-center justify-between">
                <span className="text-xs font-mono text-muted">
                  Response SLA: Under 24 Business Hours
                </span>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase text-navy-950 bg-spatial-cyan hover:bg-spatial-cyan-bright px-4 py-2 rounded transition-all shadow"
                >
                  <span>Connect with Regional Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
