import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'scan-to-bim',
    slug: 'scan-to-bim',
    title: 'Scan to BIM',
    category: 'Digital Engineering',
    tagline: 'High-Accuracy As-Built Intelligence from Laser Scans to Coordinated BIM Models',
    summary: 'Transform raw, dense 3D point cloud scans into millimeter-accurate, clash-free Building Information Models (Revit). We bridge the physical and virtual realms across LOD 100 to 500 for complex architectural renovations, heritage conservation, and industrial facility modernization.',
    technicalCapabilities: [
      'Architectural, Structural & MEP Modeling across LOD 100-500',
      'Automated and manual point cloud registration & deviation analysis',
      'As-built vs. design clash detection with Navisworks coordination',
      '2D CAD floor plans, elevations, sections & detailed site plans',
      'Parametric Revit family creation and asset data enrichment',
      'COBie and facilities management data tagging'
    ],
    deliverables: [
      'Autodesk Revit (.RVT) federated multi-discipline models',
      'IFC neutral exchange models for open-BIM workflows',
      'Detailed 2D CAD DWG/DXF drawings (plans, sections, elevations)',
      'Clash detection matrix and tolerance deviation heatmap reports',
      'BIM Execution Plan (BEP) compliance documentation'
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Survey Ingestion & Point Cloud Verification',
        description: 'Validation of terrestrial laser scans (E57/RCP/LAS) with control point networks and global coordinate reference verification.'
      },
      {
        step: '02',
        title: 'Point Cloud Pre-Processing & Noise Filtering',
        description: 'Multi-scan registration clean-up, spatial filtering, density decimation, and geometric segmentation by discipline.'
      },
      {
        step: '03',
        title: 'Parametric BIM Extraction (LOD 100 - 500)',
        description: 'Precise geometry modeling of structural framing, walls, MEP conduits, and equipment tied directly to scan contours.'
      },
      {
        step: '04',
        title: 'Quality Assurance & Deviation Heatmap Analysis',
        description: 'Algorithmic overlay comparing the modeled geometry against the raw scan to ensure strict adherence within 3mm tolerances.'
      }
    ],
    specifications: [
      { label: 'Tolerance Standard', value: '±3mm survey grade' },
      { label: 'Model LOD Levels', value: 'LOD 100, 200, 300, 350, 400, 500' },
      { label: 'Software Ecosystem', value: 'Autodesk Revit, Navisworks, Leica Cyclone, Recap' },
      { label: 'File Formats Supported', value: 'E57, LAS, LAZ, RCP/RCS, RVT, IFC, DWG' }
    ],
    applications: [
      'Historic building conservation & heritage preservation',
      'Commercial retrofit & complex adaptive reuse',
      'Industrial plant MEP coordination & pipe routing',
      'Pre-construction validation & progress verification'
    ],
    relatedIndustries: ['Architecture & Construction', 'Infrastructure', 'Process Plant', 'Heritage']
  },
  {
    id: 'reality-capture',
    slug: 'reality-capture',
    title: 'Reality Capture & Laser Scanning',
    category: 'Spatial Data Acquisition',
    tagline: 'Precision 3D Laser Scanning for Complete Physical Reality Digitization',
    summary: 'Comprehensive reality capture solutions leveraging terrestrial LiDAR, mobile scanners, and drone-based photogrammetry to create exhaustive 3D digital records of complex physical structures, plant sites, and civil infrastructure.',
    technicalCapabilities: [
      'High-definition terrestrial laser scanning (TLS) with HDR photographic capture',
      'Mobile mapping system (MMS) scanning for transport corridors',
      'Unmanned Aerial Vehicle (UAV) aerial LiDAR & oblique photogrammetry',
      'Sub-millimeter dimensional inspection of structural components',
      'Global georeferencing using RTK/PPK GNSS ground control points'
    ],
    deliverables: [
      'Normalized, colorized point clouds (E57, LAS, LAZ, RCP)',
      'High-resolution spherical 360° virtual tours & site walk-throughs',
      'Orthomosaic imagery and Digital Surface Models (DSM)',
      'Dimensional survey verification certificates'
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Geodetic Network Establishment',
        description: 'Deployment of high-precision surveyed ground control points and total station traverses tied to national coordinate systems.'
      },
      {
        step: '02',
        title: 'High-Density Spatial Data Capture',
        description: 'Systematic laser scanning passes across target assets, combining optical imagery and pulsed laser measurements.'
      },
      {
        step: '03',
        title: 'Cloud-to-Cloud & Target Registration',
        description: 'Bundle adjustment and multi-station registration achieving millimeter-level relative alignment.'
      },
      {
        step: '04',
        title: 'Colorization & Deliverable Export',
        description: 'RGB point cloud mapping from calibrated cameras and export to client-specified spatial formats.'
      }
    ],
    specifications: [
      { label: 'Capture Accuracy', value: 'Up to ±1.5mm @ 10m' },
      { label: 'Scan Density', value: 'Up to 1mm point pitch' },
      { label: 'Color Mapping', value: 'Full HDR 360° Photometric' },
      { label: 'Georeferencing', value: 'WGS84, UTM, State Plane, Custom local grid' }
    ],
    applications: [
      'As-built facility audits & structural movement monitoring',
      'Pre-demolition surveys and historic archiving',
      'Brownfield industrial upgrades and clash prevention'
    ],
    relatedIndustries: ['Architecture & Construction', 'Industrial Facilities', 'Heritage', 'Infrastructure']
  },
  {
    id: 'lidar-engineering',
    slug: 'lidar-engineering',
    title: 'LiDAR Engineering & Mobile Mapping',
    category: 'Advanced Spatial Processing',
    tagline: 'High-Throughput Point Cloud Classification, Corridor Mapping & Feature Extraction',
    summary: 'Turn massive raw airborne, mobile, and terrestrial LiDAR datasets into structured geospatial intelligence. Our engineering teams specialize in multi-class point classification, terrain elevation extraction, transmission line corridor mapping, and transport network asset inventories.',
    technicalCapabilities: [
      'Automated and manual point cloud classification (ASPRS Standards)',
      'Digital Terrain Model (DTM) and Digital Surface Model (DSM) production',
      'High-precision contour generation at custom intervals (0.25m, 0.5m, 1m)',
      'Transmission powerline modeling, vegetation clearance & sag analysis',
      'Mobile LiDAR road surface profiling, curb, lane marking & signage extraction',
      'Railway corridor asset extraction (track centerline, catenary, clearance envelope)'
    ],
    deliverables: [
      'Classified ASPRS LAS/LAZ files (Ground, Vegetation, Building, Utility)',
      'High-resolution DTM/DSM elevation rasters (GeoTIFF)',
      'Vectorized CAD/GIS asset layers (SHP, Geodatabase, DXF)',
      'Encroachment and clearance violation reports'
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Data Ingestion & Trajectory Verification',
        description: 'Sensor trajectory smoothing, strip adjustment, and boresight calibration verification.'
      },
      {
        step: '02',
        title: 'Automated Macro Classification',
        description: 'Machine learning algorithms separate ground points, high/low vegetation, and man-made structures.'
      },
      {
        step: '03',
        title: 'Manual Hydro-Enforcement & Micro Clean-Up',
        description: 'Survey engineers refine bridge decks, water bodies, and structural edges to eliminate classification artifacts.'
      },
      {
        step: '04',
        title: 'Vector Feature Extraction & Topography',
        description: 'Extracting 3D breaklines, road edges, track lines, and powerline catenary curves.'
      }
    ],
    specifications: [
      { label: 'Classification Standard', value: 'ASPRS LAS 1.4 classes 1-31' },
      { label: 'Vertical Accuracy', value: '< 5cm RMSExy / RMSEz' },
      { label: 'Capacity', value: '10,000+ linear km / year' },
      { label: 'Core Tools', value: 'TerraSolid (TerraScan/Modeler), CloudCompare, Global Mapper' }
    ],
    applications: [
      'Highways, rail & transit infrastructure asset management',
      'Electric utility transmission line safety & vegetation encroachment',
      'Floodplain modeling and hydraulic hydrological analysis',
      'Mining quarry volume calculations and terrain monitoring'
    ],
    relatedIndustries: ['Transportation', 'Utilities', 'Mining', 'Infrastructure']
  },
  {
    id: 'geospatial-services',
    slug: 'geospatial-services',
    title: 'Geospatial Services & Photogrammetry',
    category: 'Earth Observation & Mapping',
    tagline: 'High-Resolution Aerial Triangulation, Orthophoto Processing & Cadastral Mapping',
    summary: 'Delivering survey-grade photogrammetric processing, large-format aerial mapping, and cadastral boundary digitization. We transform aerial and satellite imagery into seamless, distortion-free orthomosaics and accurate cartographic base layers.',
    technicalCapabilities: [
      'Aerial Triangulation (AT) and bundle adjustment for large imagery blocks',
      'True Ortho and Orthomosaic generation with seamline editing & radiometric balancing',
      'Stereo 3D feature compilation for municipal and topographic mapping',
      'Cadastral parcel mapping, land record digitization and boundary verification',
      'Airport obstacle limitation surface (OLS) mapping conforming to ICAO Annex 14',
      'Satellite image orthorectification and change detection analysis'
    ],
    deliverables: [
      'Seamless geo-referenced True Orthophoto mosaics (ECW, GeoTIFF)',
      'Stereo-extracted 3D vector topographic databases',
      'Cadastral land parcel GIS datasets with attribute topologies',
      'Airport obstruction survey charts and spatial databases'
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Image Quality Assessment & Sensor Calibration',
        description: 'Inspection of camera calibration parameters, sun angle, atmospheric clarity, and overlap ratios.'
      },
      {
        step: '02',
        title: 'Aerial Triangulation & Ground Control Tie',
        description: 'Automatic tie point generation and rigorous bundle block adjustment against surveyed GCPs.'
      },
      {
        step: '03',
        title: 'DSM/DTM Generation & Ortho Rectification',
        description: 'Terrain modeling followed by pixel-by-pixel differential rectification eliminating perspective tilt.'
      },
      {
        step: '04',
        title: 'Mosaicking, Color Harmonization & QA',
        description: 'Automated seamline optimization avoiding building footprints, with regional radiometric balance.'
      }
    ],
    specifications: [
      { label: 'Ground Sampling Distance (GSD)', value: 'Down to 2cm - 15cm per pixel' },
      { label: 'Cartographic Standards', value: 'USGS, NSSDA, Ordnance Survey compliant' },
      { label: 'Coordinate Projections', value: 'Global, national and regional geodetic systems' }
    ],
    applications: [
      'Municipal urban planning & smart city GIS databases',
      'Aviation airport approach zone safety analysis',
      'Land revenue administration & title registration'
    ],
    relatedIndustries: ['Government & Public Sector', 'Aviation', 'Infrastructure', 'Agriculture']
  },
  {
    id: 'gis-solutions',
    slug: 'gis-solutions',
    title: 'GIS Solutions & Base Mapping',
    category: 'Spatial Analytics & Data Systems',
    tagline: 'Enterprise Geographic Information Systems, Underground Utilities & Spatial Data Infrastructure',
    summary: 'Build robust spatial data infrastructures and spatial analytics pipelines. We deliver comprehensive GIS base mapping, underground utility surveys, network topology modeling, and geodatabase structuring for government and infrastructure operators.',
    technicalCapabilities: [
      'Enterprise GIS geodatabase architecture design (ESRI Enterprise Geodatabase)',
      'Subsurface utility engineering (SUE) mapping conforming to ASCE 38-02',
      'Geometric utility network modeling (water, gas, electric, telecom, wastewater)',
      'Spatial data migration, schema standardization, and topological validation',
      'Web GIS portal configuration and spatial dashboard deployment',
      'Automated ETL pipelines for multi-source spatial data integration'
    ],
    deliverables: [
      'Structured GIS Geodatabases (File GDB, Enterprise ArcSDE, PostGIS)',
      'Utility network connectivity models with attribute metadata',
      'Underground utility alignment drawings and 3D pipe models',
      'Executive Web GIS mapping dashboards'
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Schema Definition & Data Architecture',
        description: 'Designing enterprise domain models and topological rule sets compliant with open standards.'
      },
      {
        step: '02',
        title: 'Multi-Source Spatial Data Compilation',
        description: 'Georeferencing historic maps, field survey records, and sensor feeds into unified coordinate space.'
      },
      {
        step: '03',
        title: 'Topology Cleansing & Connectivity Logic',
        description: 'Enforcing node-arc connectivity, eliminating slivers, dangles, and overlapping polygons.'
      },
      {
        step: '04',
        title: 'Database Deployment & Analytical Modeling',
        description: 'Integration into client enterprise systems with API-ready spatial query capabilities.'
      }
    ],
    specifications: [
      { label: 'Data Standards', value: 'OGC, INSPIRE, FGDC, ASCE 38-02' },
      { label: 'GIS Platforms', value: 'ArcGIS Pro, ArcGIS Enterprise, QGIS, PostGIS' },
      { label: 'Topology Rigor', value: '100% automated rule validation' }
    ],
    applications: [
      'Municipal asset management & infrastructure maintenance',
      'Underground utility conflict resolution in pre-construction',
      'Environmental sensitivity mapping and zoning compliance'
    ],
    relatedIndustries: ['Utilities', 'Government & Public Sector', 'Transportation', 'Energy']
  },
  {
    id: 'digital-twin',
    slug: 'digital-twin',
    title: 'Digital Twin Solutions',
    category: 'Next-Generation Spatial Platforms',
    tagline: 'Interactive 3D Virtual Twins Connecting As-Built Reality with Real-Time Operational Context',
    summary: 'Mapo Spatial has long delivered production Digital Twin solutions that connect physical assets with their digital counterparts. We fuse laser scan point clouds, LOD 350+ BIM geometry, GIS spatial layers, and IoT sensor streams into unified, navigable digital twins for proactive facility and infrastructure lifecycle management.',
    technicalCapabilities: [
      'Multi-scale digital twin modeling from single structures to regional infrastructure',
      'Integration of high-density reality capture meshes with parametric BIM components',
      'Interactive 3D web-based visualization engines (WebGL, Cesium, Three.js)',
      'Spatial query integration with asset maintenance management systems (CMMS)',
      'Geospatial contextualization fusing GIS boundary data with microscopic BIM detail',
      'Simulation of predictive maintenance, environmental impact, and energy flows'
    ],
    deliverables: [
      'Interactive Web-Based 3D Digital Twin environment',
      'Lightweight 3D Tiles / glTF spatial asset packages',
      'Centralized asset data dictionary linking components to maintenance manuals',
      'Digital twin operational dashboard integration'
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Reality Foundation & Spatial Indexing',
        description: 'Establishing an ultra-accurate 3D baseline using reality capture and georeferenced spatial bounds.'
      },
      {
        step: '02',
        title: 'Geometry Optimization & 3D Tiling',
        description: 'Converting massive multi-gigabyte models into hierarchical 3D Tiles and glTF assets for instant web streaming.'
      },
      {
        step: '03',
        title: 'Operational Data Linkage',
        description: 'Attaching maintenance schedules, sensor IDs, and physical asset parameters to 3D entities.'
      },
      {
        step: '04',
        title: 'Interactive Viewer & Platform Deployment',
        description: 'Delivering secure, role-based access for stakeholders on browser, desktop, or mobile devices.'
      }
    ],
    specifications: [
      { label: 'Streaming Protocol', value: 'OGC 3D Tiles, glTF / GLB binary' },
      { label: 'Interoperability', value: 'BIM + GIS + IoT sensor telemetry' },
      { label: 'Device Support', value: 'Modern WebGL browsers, zero client plugin install' }
    ],
    applications: [
      'Major airport, hospital, and campus facility operations',
      'Industrial chemical plant shutdown planning & safety simulation',
      'Smart city regional infrastructure coordination'
    ],
    relatedIndustries: ['Infrastructure', 'Process Plant', 'Architecture & Construction', 'Utilities']
  }
];

// Helper to look up service by slug, including aliases like reality-capture-scan-to-bim
export function getServiceBySlug(slug: string): ServiceItem | undefined {
  if (slug === 'reality-capture-scan-to-bim') {
    return servicesData.find(s => s.slug === 'scan-to-bim');
  }
  return servicesData.find(s => s.slug === slug);
}
