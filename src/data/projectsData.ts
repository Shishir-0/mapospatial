import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'rail-corridor-lidar',
    slug: 'intercity-rail-corridor-mobile-lidar',
    title: 'Intercity Rail Corridor Mobile LiDAR & Clearance Engineering',
    category: 'LiDAR & Transportation',
    location: 'United Kingdom / Western Europe',
    clientSector: 'National Rail Infrastructure Operator',
    challenge: 'A national rail authority required survey-grade as-built documentation of a heavily congested 140km mainline corridor to evaluate clearance for new electrified rolling stock without interrupting scheduled passenger services.',
    methodology: 'Deployed high-speed dual-head mobile laser scanning mounted on track inspection maintenance cars during nocturnal engineering windows. Raw point clouds were processed through automated trajectory correction, followed by automated track centerline and overhead catenary extraction.',
    technology: [
      'Dual-Head Mobile LiDAR',
      'TerraSolid (TerraScan / TerraMatch)',
      'CloudCompare',
      'Bentley Rail Track',
      'ASPRS LAS 1.4'
    ],
    deliverables: [
      'Survey-grade classified point cloud covering 140km corridor',
      '3D vector models of track centerlines, cant, gauge, and rails',
      'Structure gauge clearance envelope analysis report',
      'Asset inventory database with 12,000+ cataloged railway assets'
    ],
    stats: [
      { label: 'Corridor Length', value: '140 km' },
      { label: 'Relative Accuracy', value: '±5 mm' },
      { label: 'Assets Cataloged', value: '12,450+' },
      { label: 'Turnaround Time', value: '14 Days' }
    ],
    highlightMetric: '140km corridor delivered in 14 days with zero passenger delays'
  },
  {
    id: 'heritage-hospital-bim',
    slug: 'heritage-hospital-scan-to-bim',
    title: 'Historic Civic Hospital Complex: Comprehensive Scan-to-BIM',
    category: 'Scan to BIM & AEC',
    location: 'London & Southeast UK',
    clientSector: 'Major Architectural & Engineering Consultancy',
    challenge: 'A landmark 19th-century hospital undergoing adaptive reuse had no reliable structural documentation. Uneven settled foundations, non-orthogonal load-bearing masonry, and complex ceiling spaces required millimeter-level precision before architectural retrofit designs could commence.',
    methodology: 'Integrated 350+ individual terrestrial laser scans into a unified coordinate system tied to exterior geodetic control. Developed multi-discipline Revit models across LOD 300 (Architecture/Structure) and LOD 350 (MEP services), identifying critical structural settlement variations across wings.',
    technology: [
      'Terrestrial Laser Scanning (Leica RTC360)',
      'Autodesk Revit 2024',
      'Autodesk Navisworks Manage',
      'Leica Cyclone Register 360'
    ],
    deliverables: [
      'Federated Autodesk Revit (.RVT) model (LOD 350)',
      '2D Architectural CAD As-Builts (plans, elevations, cross-sections)',
      'Tolerance deviation heatmap highlighting wall verticality anomalies',
      'MEP pipework and HVAC ductwork routing clash matrices'
    ],
    stats: [
      { label: 'Total Area', value: '38,500 m²' },
      { label: 'Laser Scans', value: '365 Stations' },
      { label: 'LOD Specification', value: 'LOD 350' },
      { label: 'Clashes Mitigated', value: '140+ Detected' }
    ],
    highlightMetric: 'Sub-3mm accuracy across 38,500 m² multi-discipline retrofit'
  },
  {
    id: 'petrochemical-digital-twin',
    slug: 'petrochemical-refinery-digital-twin',
    title: 'Petrochemical Refinery Digital Twin & Pipe Spool Modeling',
    category: 'Digital Twin & Plant Engineering',
    location: 'Middle East / Gulf Industrial Hub',
    clientSector: 'Global Energy & Chemical Corporation',
    challenge: 'A high-throughput refinery planned a turnaround overhaul of its fluid catalytic cracking unit. To fabricate replacement pipe spools offsite and install them within a 7-day plant shutdown, zero measurement error was permitted.',
    methodology: 'Executed dense high-definition 3D laser scanning across congested 4-level steel structures. Scan data was colorized, classified, and converted into intelligent piping components matched to ASME B31.3 specs, outputting exact isometric drawings and tie-in flange coordinates.',
    technology: [
      'High-Definition Terrestrial LiDAR',
      'AutoCAD Plant 3D',
      'AVEVA E3D / PDMS Interop',
      'Cesium 3D Tiles Platform'
    ],
    deliverables: [
      'Intelligent 3D Plant Model with full valve/flange attribute schedules',
      '180+ Piping Isometric fabrication drawings with tie-in coordinates',
      '3D Digital Twin web viewer for remote maintenance team navigation',
      'Pre-installation virtual clash simulation video reports'
    ],
    stats: [
      { label: 'Piping Processed', value: '9,200+ m' },
      { label: 'Flange Accuracy', value: '±1.5 mm' },
      { label: 'Isometrics Created', value: '185 Sheets' },
      { label: 'Shutdown Window', value: '7 Days Met' }
    ],
    highlightMetric: '100% of prefabricated spools fit without on-site field modification'
  },
  {
    id: 'metropolitan-utility-gis',
    slug: 'metropolitan-underground-utility-gis',
    title: 'Metropolitan Subsurface Utility Engineering & GIS Base Mapping',
    category: 'GIS & Utility Mapping',
    location: 'Regional Municipal Authority',
    clientSector: 'Urban Development & Smart City Authority',
    challenge: 'A rapidly expanding city required an authoritative subsurface utility baseline to prevent excavator strikes during a major light rail transit expansion project.',
    methodology: 'Harmonized 20+ years of disparate municipal utility paper records, Ground Penetrating Radar (GPR) subsurface scans, and electromagnetic locating surveys into a unified Enterprise ArcGIS geodatabase conforming to ASCE 38-02 Quality Level A and B standards.',
    technology: [
      'ESRI ArcGIS Pro & Enterprise',
      'PostGIS Spatial Database',
      'Subsurface GPR Vector Ingestion',
      'FME ETL Automation Pipelines'
    ],
    deliverables: [
      '3D Subsurface Utility Geodatabase (Water, Wastewater, Gas, Telecom, Power)',
      'ASCE 38-02 Quality Level classification attribution for all segments',
      'Web-based interactive GIS conflict detection dashboard for contractors',
      'Municipal standard CAD alignment drawings for rail engineering'
    ],
    stats: [
      { label: 'Network Length', value: '420 km' },
      { label: 'Strike Incidents', value: '0 During Rail Works' },
      { label: 'Data Layers Unified', value: '18 Disciplines' },
      { label: 'Compliance Level', value: 'ASCE 38-02 QA/QB' }
    ],
    highlightMetric: 'Zero utility strike incidents across 420km transit construction corridor'
  }
];
