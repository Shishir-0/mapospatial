import React from 'react';
import { Layers, Compass, Scan, Globe2, Box, Cpu } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const domains = [
    {
      domain: 'BIM & Model Coordination',
      icon: Layers,
      description: 'Parametric modeling, federated model coordination, and clash mitigation.',
      tools: ['Autodesk Revit 2024', 'Navisworks Manage', 'Civil 3D', 'BIM 360 / ACC', 'IFC 4 OpenBIM']
    },
    {
      domain: 'LiDAR & Point Cloud Processing',
      icon: Compass,
      description: 'Point classification, trajectory registration, and elevation extraction.',
      tools: ['TerraSolid (TerraScan/Match)', 'CloudCompare', 'Global Mapper', 'ASPRS LAS 1.4', 'Trimble RealWorks']
    },
    {
      domain: 'Reality Capture & Laser Scanning',
      icon: Scan,
      description: 'Terrestrial and mobile scan registration, georeferencing, and colorization.',
      tools: ['Leica Cyclone REGISTER 360', 'Faro SCENE', 'Autodesk ReCap Pro', 'Pix4Dmatic', 'Agisoft Metashape']
    },
    {
      domain: 'GIS & Spatial Data Infrastructure',
      icon: Globe2,
      description: 'Subsurface utility networks, geodatabase modeling, and spatial analytics.',
      tools: ['ESRI ArcGIS Pro', 'ArcGIS Enterprise', 'QGIS', 'PostGIS', 'FME ETL Pipelines']
    },
    {
      domain: 'Digital Twin Platforms',
      icon: Box,
      description: 'Web streaming 3D tiles, sensor telemetry linkage, and asset lifecycle twins.',
      tools: ['OGC 3D Tiles', 'Cesium Ion', 'Unreal Engine 5', 'Three.js / WebGL', 'glTF / GLB Binary']
    },
    {
      domain: 'Quality Assurance & Standards',
      icon: Cpu,
      description: 'Algorithmic point-to-model tolerance heatmaps and verification protocols.',
      tools: ['Point-to-Mesh Heatmap Analyzers', 'COBie Data Validators', 'ASCE 38-02 SUE Rigor', 'ICAO Annex 14 OLS']
    }
  ];

  return (
    <section className="py-24 bg-navy-900 border-t border-spatial-cyan/15 relative overflow-hidden" id="tech-stack">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-navy-950 border border-spatial-cyan/30 text-spatial-cyan text-xs font-mono uppercase tracking-wider">
            <span>Verified Toolchain & Infrastructure</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-offwhite tracking-tight">
            Engineered with Industry Standards
          </h2>
          
          <p className="text-base text-offwhite/80 font-light leading-relaxed">
            Our engineering pipelines integrate certified industry platforms to ensure seamless compatibility with our international clients' technical environments.
          </p>
        </div>

        {/* 6 Engineering Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((dom, idx) => {
            const Icon = dom.icon;
            return (
              <div
                key={idx}
                className="hud-panel p-6 bg-navy-950/70 border border-spatial-cyan/20 rounded-xl space-y-4 group hover:border-spatial-cyan/40 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded bg-navy-900 border border-spatial-cyan/25 text-spatial-cyan group-hover:border-spatial-cyan transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-offwhite group-hover:text-spatial-cyan transition-colors">
                      {dom.domain}
                    </h3>
                    <p className="text-[11px] text-muted line-clamp-1">
                      {dom.description}
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {dom.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-xs font-mono bg-navy-900/80 border border-navy-700/80 rounded text-offwhite/90 hover:border-spatial-cyan/40 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
