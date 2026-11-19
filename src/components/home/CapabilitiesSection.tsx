import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useSpatialScene, SpatialMode } from '../../context/SpatialSceneContext';

interface CapabilityItem {
  id: string;
  name: string;
  category: string;
  mode: SpatialMode;
  headline: string;
  summary: string;
  deliverables: string[];
  specs: string;
  slug: string;
}

export const CapabilitiesSection: React.FC = () => {
  const { setMode } = useSpatialScene();
  const [selectedId, setSelectedId] = useState<string>('scan-to-bim');

  const capabilities: CapabilityItem[] = [
    {
      id: 'scan-to-bim',
      name: 'Scan to BIM',
      category: 'Digital Engineering',
      mode: 'SCAN_TO_BIM',
      headline: 'LOD 100 - 500 Parametric Architectural & MEP Modeling',
      summary: 'Transform dense terrestrial laser scans into millimeter-accurate, clash-free Autodesk Revit models. We model complex architectural geometry, structural steel, and mechanical conduits tied directly to real-world point cloud coordinates.',
      deliverables: ['Federated Revit RVT models', '2D CAD As-Built drawings', 'Navisworks clash detection matrices'],
      specs: 'Tolerance: ±3mm // LOD: 100-500',
      slug: '/scan-to-bim',
    },
    {
      id: 'reality-capture',
      name: 'Reality Capture',
      category: 'Spatial Acquisition',
      mode: 'REALITY_CAPTURE',
      headline: 'High-Definition Terrestrial & Mobile Laser Scanning',
      summary: 'Comprehensive 3D laser scanning capturing complex industrial facilities, heritage facades, and civil infrastructure. We register, colorize, and normalize multi-gigabyte point clouds into survey-grade E57 and LAS datasets.',
      deliverables: ['Normalized E57 & LAS point clouds', '360° Photometric HDR tours', 'Geodetic ground control tie reports'],
      specs: 'Accuracy: Sub-2mm // Density: 1mm pitch',
      slug: '/reality-capture',
    },
    {
      id: 'lidar-engineering',
      name: 'LiDAR Engineering',
      category: 'Advanced Classification',
      mode: 'LIDAR',
      headline: 'Airborne & Mobile Point Cloud Processing at Scale',
      summary: 'High-throughput LiDAR classification for highway corridors, transmission lines, and railway networks. Automated algorithms separate ground returns, canopy vegetation, power lines, and structural envelopes.',
      deliverables: ['Classified ASPRS LAS 1.4 files', 'DTM / DSM elevation rasters', 'Transmission sag & encroachment reports'],
      specs: 'Standard: ASPRS LAS 1.4 // Capacity: 10,000+ km',
      slug: '/lidar-engineering',
    },
    {
      id: 'geospatial-services',
      name: 'Geospatial & Photogrammetry',
      category: 'Earth Observation',
      mode: 'GEOSPATIAL',
      headline: 'True Ortho Processing & Cadastral Base Mapping',
      summary: 'Transforming aerial and satellite imagery into distortion-free orthomosaics and 3D topographic contours. Rigorous aerial triangulation ensures survey-grade accuracy for municipal planning and land administration.',
      deliverables: ['Seamless True Orthophoto mosaics (GeoTIFF)', 'Digital Elevation Models (DEM)', 'Topographic vector layers'],
      specs: 'GSD: Down to 2cm // Projections: UTM / State Plane',
      slug: '/geospatial-services',
    },
    {
      id: 'surveying',
      name: 'Surveying Engineering',
      category: 'Geodetic Control',
      mode: 'SURVEYING',
      headline: 'Precision Geodetic Control & Structural Monitoring',
      summary: 'High-precision total station traverses, RTK/PPK GNSS baseline networks, and sub-millimeter deformation monitoring for critical civil engineering infrastructure, bridges, and tunnels.',
      deliverables: ['Geodetic traverse reports', 'Control point network coordinates', 'Longitudinal displacement charts'],
      specs: 'Accuracy: Sub-millimeter // Geodetic Datum: ITRF / WGS84',
      slug: '/about-us',
    },
    {
      id: 'digital-twin',
      name: 'Digital Twin Platforms',
      category: 'Operational Systems',
      mode: 'DIGITAL_TWIN',
      headline: 'Interactive 3D Virtual Twins with Telemetry Integration',
      summary: 'Mapo Spatial has long delivered production Digital Twin solutions that connect physical assets with their digital counterparts. We fuse laser scan point clouds, LOD 350+ BIM geometry, GIS spatial layers, and IoT sensor streams into unified, navigable digital twins.',
      deliverables: ['Web-based 3D Cesium / WebGL twins', 'Lightweight 3D Tiles & glTF assets', 'Asset dictionary & maintenance linkage'],
      specs: 'Protocol: OGC 3D Tiles // Zero-Plugin Browser Streaming',
      slug: '/digital-twin',
    },
  ];

  const activeCapability = capabilities.find(c => c.id === selectedId) || capabilities[0];

  const handleSelect = (cap: CapabilityItem) => {
    setSelectedId(cap.id);
    setMode(cap.mode);
  };

  return (
    <section className="py-28 px-6 sm:px-8 max-w-7xl mx-auto w-full z-10 relative" id="capabilities">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-subtle-border pb-8">
        <div className="space-y-3 max-w-2xl">
          <span className="text-[11px] font-mono text-copper tracking-widest uppercase">
            [02 // CORE TECHNICAL OFFERINGS]
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-mineral tracking-tight">
            Engineering Capabilities
          </h2>
          <p className="text-sm text-text-secondary font-light">
            Hover or select an engineering discipline to transform the background 3D spatial canvas in real-time.
          </p>
        </div>

        <div className="font-mono text-xs text-text-muted flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-copper animate-ping" />
          <span>INTERACTIVE 3D SCENE SYNC</span>
        </div>
      </div>

      {/* Main Interactive Stage: Capability Selector on Left, Deep Dive Panel on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Capability Nav Tabs (Left Column) */}
        <div className="lg:col-span-5 space-y-2">
          {capabilities.map((cap, idx) => {
            const isSelected = selectedId === cap.id;
            return (
              <button
                key={cap.id}
                type="button"
                onMouseEnter={() => handleSelect(cap)}
                onClick={() => handleSelect(cap)}
                className={`w-full text-left p-4 transition-all border flex items-center justify-between group ${
                  isSelected
                    ? 'bg-carbon border-copper text-mineral shadow-[0_0_15px_rgba(194,122,80,0.15)]'
                    : 'bg-basalt/60 border-subtle-border/70 text-text-secondary hover:border-subtle-border hover:bg-carbon/40'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[10px] font-mono">
                    <span className={isSelected ? 'text-copper font-bold' : 'text-text-muted'}>
                      0{idx + 1}
                    </span>
                    <span className="text-text-muted">/</span>
                    <span className={isSelected ? 'text-mineral' : 'text-text-muted'}>
                      {cap.category}
                    </span>
                  </div>
                  <div className={`text-base font-display font-semibold transition-colors ${
                    isSelected ? 'text-mineral' : 'text-text-secondary group-hover:text-mineral'
                  }`}>
                    {cap.name}
                  </div>
                </div>

                <div className="text-[11px] font-mono text-copper opacity-0 group-hover:opacity-100 transition-opacity">
                  [VIEW 3D]
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Capability Panel (Right Column) */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 border border-subtle-border bg-carbon/90 backdrop-blur-md space-y-6 survey-corner">
            
            <div className="space-y-2 pb-6 border-b border-subtle-border">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-copper uppercase tracking-wider font-semibold">
                  {activeCapability.category}
                </span>
                <span className="text-text-muted">
                  {activeCapability.specs}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-mineral leading-tight">
                {activeCapability.name}
              </h3>

              <div className="text-sm font-mono text-text-secondary">
                {activeCapability.headline}
              </div>
            </div>

            <p className="text-sm text-text-secondary font-light leading-relaxed">
              {activeCapability.summary}
            </p>

            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono text-text-muted uppercase tracking-wider">
                Engineering Deliverables
              </div>
              <div className="space-y-2">
                {activeCapability.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2.5 text-xs text-mineral font-mono">
                    <span className="w-1.5 h-1.5 bg-copper" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-subtle-border flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider">
              <span className="text-text-muted text-[11px]">
                3D SCENE: {activeCapability.mode}
              </span>

              <Link
                to={activeCapability.slug}
                className="px-5 py-2.5 bg-graphite hover:bg-carbon text-mineral border border-subtle-border hover:border-copper transition-all flex items-center gap-2"
              >
                <span>Read Technical Specs</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-copper" />
              </Link>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
