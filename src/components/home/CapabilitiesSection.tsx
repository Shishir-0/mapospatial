import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';

interface CapabilityItem {
  id: string;
  name: string;
  category: string;
  headline: string;
  summary: string;
  deliverables: string[];
  specs: string;
  slug: string;
  image: string;
  secondaryImage?: string;
}

export const CapabilitiesSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('scan-to-bim');

  const capabilities: CapabilityItem[] = [
    {
      id: 'scan-to-bim',
      name: 'Scan to BIM',
      category: 'Digital Engineering',
      headline: 'LOD 100 - 500 Parametric Architectural, Structural & MEP Modeling',
      summary: 'Transform dense terrestrial laser scans into millimeter-accurate, clash-free Autodesk Revit models. We model complex architectural geometry, structural steel frames, and mechanical pipe conduits tied directly to real-world point cloud coordinates.',
      deliverables: ['Federated Revit RVT models', '2D CAD As-Built drawings', 'Navisworks clash detection matrices', 'Point-to-model deviation heatmaps'],
      specs: 'Tolerance: ±3mm // LOD: 100-500',
      slug: '/scan-to-bim',
      image: '/assets/Plant.png',
      secondaryImage: '/assets/Plant-room3.jpg'
    },
    {
      id: 'reality-capture',
      name: 'Reality Capture & Laser Scanning',
      category: 'Spatial Acquisition',
      headline: 'High-Definition Terrestrial & Mobile Laser Scanning',
      summary: 'Comprehensive 3D laser scanning capturing complex industrial facilities, heritage facades, and civil infrastructure. We register, colorize, and normalize multi-gigabyte point clouds into survey-grade E57 and LAS datasets.',
      deliverables: ['Normalized E57 & LAS point clouds', '360° Photometric HDR tours', 'Geodetic ground control tie reports', 'Asset condition registers'],
      specs: 'Accuracy: Sub-2mm // Density: 1mm pitch',
      slug: '/reality-capture',
      image: '/assets/Building-3.jpg',
      secondaryImage: '/assets/Plant-room3.jpg'
    },
    {
      id: 'lidar-engineering',
      name: 'LiDAR Engineering',
      category: 'Advanced Classification',
      headline: 'Airborne & Mobile Point Cloud Processing at Scale',
      summary: 'High-throughput LiDAR classification for highway corridors, transmission lines, and railway networks. Automated and supervised algorithms separate bare earth ground, canopy vegetation, power lines, and structural envelopes.',
      deliverables: ['Classified ASPRS LAS 1.4 files', 'DTM / DSM elevation rasters', 'Transmission sag & vegetation encroachment reports', 'Corridor vector breaklines'],
      specs: 'Standard: ASPRS LAS 1.4 // Capacity: 10,000+ km',
      slug: '/lidar-engineering',
      image: '/assets/Power-line1.png',
      secondaryImage: '/assets/Lider1.png'
    },
    {
      id: 'geospatial-services',
      name: 'Geospatial & Photogrammetry',
      category: 'Earth Observation',
      headline: 'True Ortho Processing & Cadastral Base Mapping',
      summary: 'Transforming aerial and satellite imagery into distortion-free orthomosaics and 3D topographic contours. Rigorous aerial triangulation ensures survey-grade accuracy for municipal planning, urban zoning, and land administration.',
      deliverables: ['Seamless True Orthophoto mosaics (GeoTIFF)', 'Digital Elevation Models (DEM/DTM)', 'Topographic vector layers (DWG/SHP)', 'Volumetric stockpile reports'],
      specs: 'GSD: Down to 2cm // Projections: UTM / State Plane',
      slug: '/geospatial-services',
      image: '/assets/Mapping.png',
      secondaryImage: '/assets/Photogrammetry-Terrain-Based-3D-Model-1.png'
    },
    {
      id: 'surveying',
      name: 'Surveying & Geodetic Control',
      category: 'Geodetic Engineering',
      headline: 'Precision Geodetic Control & Structural Monitoring',
      summary: 'High-precision total station traverses, RTK/PPK GNSS baseline networks, and sub-millimeter deformation monitoring for critical civil engineering infrastructure, bridges, quarries, and underground tunnels.',
      deliverables: ['Geodetic traverse network reports', 'Control point monument registers', 'Longitudinal structural displacement charts', 'Quarry volumetric analysis'],
      specs: 'Accuracy: Sub-millimeter // Geodetic Datum: ITRF / WGS84',
      slug: '/about-us',
      image: '/assets/Mining.png',
      secondaryImage: '/assets/Mobile-mapping4.png'
    },
    {
      id: 'digital-twin',
      name: 'Digital Twin Platforms',
      category: 'Operational Systems',
      headline: 'Interactive 3D Virtual Twins with Telemetry Integration',
      summary: 'Mapo Spatial delivers production Digital Twin solutions that connect physical assets with their digital counterparts. We fuse laser scan point clouds, LOD 350+ BIM geometry, GIS spatial layers, and IoT sensor streams into unified, navigable digital twins.',
      deliverables: ['Web-based 3D Cesium / Three.js twins', 'Lightweight 3D Tiles & glTF assets', 'Asset dictionary & maintenance linkage', 'Real-time spatial sensor dashboards'],
      specs: 'Protocol: OGC 3D Tiles // Zero-Plugin Browser Streaming',
      slug: '/digital-twin',
      image: '/assets/Mobile-mapping-1.png',
      secondaryImage: '/assets/Utilities-mapping1.jpg.png'
    },
  ];

  const active = capabilities.find(c => c.id === selectedId) || capabilities[0];

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto w-full z-10 relative bg-[#FFFFFF]" id="capabilities">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 border-b border-[#DCE1E7] pb-8">
        <div className="space-y-3 max-w-2xl">
          <span className="text-[13px] font-mono font-bold tracking-[0.08em] text-[#596579] uppercase block">
            [02 // CORE TECHNICAL DISCIPLINES]
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#14233F] tracking-tight">
            Engineering Capabilities
          </h2>
          <p className="text-[17px] text-[#425168] font-normal leading-[1.6]">
            Verified reality capture, LiDAR processing, BIM modeling, and spatial digital twins delivered to global survey tolerances.
          </p>
        </div>

        <div className="font-mono text-xs text-[#536174] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#B69A5A]" />
          <span className="text-[#14233F] font-bold">AUTHENTIC ASSETS // REAL DELIVERABLES</span>
        </div>
      </div>

      {/* Main Interactive Stage: Capability Selector on Left, Deep Dive Panel on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Capability Nav Tabs (Left Column) */}
        <div className="lg:col-span-5 space-y-3">
          {capabilities.map((cap, idx) => {
            const isSelected = selectedId === cap.id;
            return (
              <button
                key={cap.id}
                type="button"
                onClick={() => setSelectedId(cap.id)}
                className={`w-full text-left p-4 sm:p-5 transition-all border rounded-sm flex items-center justify-between group ${
                  isSelected
                    ? 'bg-[#FFFFFF] border-[#B69A5A] text-[#14233F] shadow-sm ring-1 ring-[#B69A5A]'
                    : 'bg-[#F7F8FA] border-[#DCE1E7] text-[#14233F] hover:border-[#B69A5A]/50 hover:bg-[#FFFFFF]'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[12px] font-mono">
                    <span className={isSelected ? 'text-[#B69A5A] font-bold' : 'text-[#596579] font-bold'}>
                      0{idx + 1}
                    </span>
                    <span className="text-[#DCE1E7]">/</span>
                    <span className="text-[#596579] font-semibold uppercase tracking-wider text-[11px]">
                      {cap.category}
                    </span>
                  </div>
                  <div className="text-[17px] font-display font-bold text-[#14233F]">
                    {cap.name}
                  </div>
                </div>

                <div className={`text-sm font-mono font-bold transition-all ${
                  isSelected ? 'text-[#B69A5A] translate-x-1' : 'text-[#596579] group-hover:text-[#B69A5A]'
                }`}>
                  →
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Capability Panel (Right Column) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 border border-[#DCE1E7] bg-[#FFFFFF] rounded-sm space-y-6 survey-corner shadow-sm">
            
            {/* Real Deliverable Image Preview */}
            <div className="relative rounded-sm overflow-hidden border border-[#DCE1E7] bg-[#F7F8FA] aspect-[16/9] group">
              <img 
                src={active.image} 
                alt={`${active.name} Technical Deliverable`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14233F]/90 via-[#14233F]/20 to-transparent flex items-end p-4">
                <div className="font-mono text-xs text-white flex items-center justify-between w-full">
                  <span className="bg-[#14233F] px-3 py-1 rounded-sm border border-[#B69A5A]/50 text-[#B69A5A] font-bold uppercase text-[11px]">
                    DELIVERABLE: {active.name}
                  </span>
                  <span className="hidden sm:inline-block bg-black/70 px-2.5 py-1 rounded-sm text-slate-200 text-[11px]">
                    {active.specs}
                  </span>
                </div>
              </div>
            </div>

            {/* Capability Info Header */}
            <div className="space-y-2 pb-4 border-b border-[#DCE1E7]">
              <div className="flex items-center justify-between font-mono text-[13px]">
                <span className="text-[#596579] uppercase tracking-[0.08em] font-bold text-xs">
                  {active.category}
                </span>
                <span className="text-[#536174] font-semibold text-[13px]">
                  {active.specs}
                </span>
              </div>

              <h3 className="text-2xl sm:text-[34px] font-display font-extrabold text-[#14233F] leading-tight">
                {active.name}
              </h3>

              <div className="text-[14px] font-mono text-[#536174] font-medium">
                {active.headline}
              </div>
            </div>

            {/* Service Description */}
            <p className="text-[17px] text-[#425168] font-normal leading-[1.65]">
              {active.summary}
            </p>

            {/* Deliverables List (High Contrast Deliverable Cards) */}
            <div className="space-y-3 pt-1">
              <div className="text-xs font-mono text-[#596579] font-bold uppercase tracking-[0.08em]">
                Engineering Deliverables
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {active.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2.5 p-3 bg-[#F7F8FA] rounded-sm border border-[#DCE1E7]">
                    <Check className="w-4 h-4 text-[#B69A5A] shrink-0 font-bold" />
                    <span className="text-[13px] font-semibold text-[#425168] leading-snug">{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Action */}
            <div className="pt-4 border-t border-[#DCE1E7] flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider">
              <span className="text-[#657184] text-[12px] font-medium">
                DELIVERY PROTOCOL // SUB-MILLIMETER AUDIT
              </span>

              <Link
                to={active.slug}
                className="px-5 py-2.5 bg-[#14233F] hover:bg-[#0E1930] text-white border border-[#14233F] hover:border-[#B69A5A] transition-all flex items-center gap-2 font-semibold shadow-xs rounded-sm"
              >
                <span>Read Technical Specs</span>
                <ArrowUpRight className="w-4 h-4 text-[#B69A5A]" />
              </Link>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
