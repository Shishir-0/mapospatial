import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'rail-corridor-lidar',
    slug: 'intercity-rail-corridor-mobile-lidar',
    title: 'Intercity Rail Corridor Mobile LiDAR & Clearance Engineering',
    category: 'Mobile Mapping',
    industry: 'Transportation & Rail',
    location: 'United Kingdom / Western Europe',
    heroImage: '/assets/Mobile-mapping4.png',
    clientSector: 'National Rail Infrastructure Operator',
    shortDesc: 'Survey-grade mobile LiDAR acquisition and automated feature extraction across 140km of active mainline railway corridor.',
    challenge: 'A national rail authority required survey-grade as-built documentation of a heavily congested 140km mainline corridor to evaluate clearance envelopes for new electrified rolling stock without interrupting scheduled passenger timetables.',
    methodology: 'Deployed dual-head mobile laser scanning systems mounted on track inspection maintenance vehicles during scheduled nocturnal engineering windows. Raw point clouds were processed through trajectory smoothing, automated track centerline extraction, and overhead catenary wire modeling.',
    technology: [
      'Dual-Head Mobile LiDAR MMS',
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
    gallery: [
      {
        url: '/assets/Mobile-mapping4.png',
        caption: 'Classified mobile LiDAR track point cloud displaying rail geometry and overhead electrification.',
        category: 'scan'
      },
      {
        url: '/assets/Mobile-mapping-1.png',
        caption: 'Mobile mapping survey system and dual-scanner array used during corridor data acquisition.',
        category: 'site'
      },
      {
        url: '/assets/Mobile-mapping2.png',
        caption: 'High-density point cloud profile illustrating road and rail infrastructure clearance interfaces.',
        category: 'deliverable'
      }
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
    id: 'industrial-plant-scan-to-bim',
    slug: 'industrial-plant-facility-scan-to-bim',
    title: 'Industrial Plant Room & Complex Mechanical Piping Scan-to-BIM',
    category: 'Scan to BIM',
    industry: 'Process Plant Engineering',
    location: 'Industrial Energy Hub',
    heroImage: '/assets/Plant-room3.jpg',
    clientSector: 'Global Energy & Chemical Corporation',
    shortDesc: 'Millimeter-accurate 3D laser scanning and intelligent Revit MEP modeling of high-density mechanical plant rooms.',
    challenge: 'A major processing facility scheduled a plant overhaul requiring pre-fabrication of replacement piping spools offsite. The mechanical rooms contained dense, overlapping pipe racks, valves, and structural framing with zero tolerance for installation rework.',
    methodology: 'Conducted high-definition terrestrial laser scanning across multi-level congested plant spaces. Raw E57 point clouds were registered to geodetic benchmarks, filtered, and converted into intelligent Autodesk Revit MEP and Plant 3D models with full ASME flange metadata.',
    technology: [
      'Terrestrial Laser Scanning (TLS)',
      'Autodesk Revit 2024 MEP',
      'AutoCAD Plant 3D',
      'Leica Cyclone REGISTER 360',
      'Navisworks Manage'
    ],
    deliverables: [
      'Intelligent 3D Plant Model with full valve, flange, and pipe metadata',
      'Detailed 2D Piping Isometric fabrication drawings with tie-in coordinates',
      'Navisworks clash detection matrices & clearance verification reports',
      'Point-to-model deviation heatmaps confirming ±2mm fit'
    ],
    gallery: [
      {
        url: '/assets/Plant-room3.jpg',
        caption: 'Actual complex industrial mechanical plant room surveyed during laser scanning operations.',
        category: 'site'
      },
      {
        url: '/assets/Plant.png',
        caption: 'Parametric 3D mechanical model and pipe spool routing extracted from the registered scan data.',
        category: 'model'
      },
      {
        url: '/assets/Building-3.jpg',
        caption: 'Structural building envelope and coordinate tie-in alignment deliverable.',
        category: 'deliverable'
      }
    ],
    stats: [
      { label: 'Piping Processed', value: '8,500+ m' },
      { label: 'Flange Accuracy', value: '±2.0 mm' },
      { label: 'Isometrics Created', value: '140 Sheets' },
      { label: 'Field Rework', value: '0% Recorded' }
    ],
    highlightMetric: '100% of prefabricated spools fit on site with zero field rework'
  },
  {
    id: 'transmission-corridor-lidar',
    slug: 'high-voltage-transmission-corridor-lidar',
    title: 'High-Voltage Transmission Line LiDAR & Vegetation Management',
    category: 'LiDAR Engineering',
    industry: 'Power & Energy Utilities',
    location: 'Regional Power Transmission Grid',
    heroImage: '/assets/Power-line1.png',
    clientSector: 'Electric Utility Transmission Authority',
    shortDesc: 'Airborne LiDAR classification, catenary wire sag analysis, and automated vegetation danger tree modeling.',
    challenge: 'An electrical utility needed to identify dangerous tree encroachment and calculate conductor thermal sag across 850 km of transmission corridors traversing rugged, heavily forested mountainous terrain.',
    methodology: 'Processed high-density aerial LiDAR returns using automated machine learning classification algorithms adhering to ASPRS standards. Extracted conductor centerlines, computed catenary sag curves under maximum operating temperatures, and calculated 3D vegetation clearance buffers.',
    technology: [
      'Airborne LiDAR (16 pts/m²)',
      'TerraScan / TerraModeler',
      'PLS-CADD Interoperability',
      'Global Mapper',
      'ASPRS LAS 1.4'
    ],
    deliverables: [
      'Classified ASPRS LAS point clouds (Ground, Low/Med/High Veg, Conductor, Tower)',
      'PLS-CADD compatible transmission wire models and tower attachments',
      'Automated vegetation encroachment danger tree tables with GPS coordinates',
      'High-resolution Digital Terrain Models (DTM) and 0.5m contours'
    ],
    gallery: [
      {
        url: '/assets/Power-line1.png',
        caption: 'LiDAR point cloud classification showing powerline catenary curves and surrounding vegetation risk zones.',
        category: 'scan'
      },
      {
        url: '/assets/Lider1.png',
        caption: 'Classified terrain elevation returns and digital surface model extraction.',
        category: 'model'
      },
      {
        url: '/assets/Photogrammetry-Terrain-Based-3D-Model-1.png',
        caption: '3D photogrammetric terrain model used for watershed and access route planning.',
        category: 'deliverable'
      }
    ],
    stats: [
      { label: 'Corridor Mapped', value: '850 km' },
      { label: 'Risk Trees Flagged', value: '420 Trees' },
      { label: 'Vertical Accuracy', value: '< 4 cm' },
      { label: 'Turnaround Time', value: '18 Days' }
    ],
    highlightMetric: '850km transmission grid classified with millimeter-level catenary precision'
  },
  {
    id: 'subsurface-utility-gis',
    slug: 'metropolitan-subsurface-utility-gis',
    title: 'Metropolitan Subsurface Utility Engineering & 3D GIS Mapping',
    category: 'GIS & Utility Mapping',
    industry: 'Municipal Infrastructure',
    location: 'Metropolitan Smart City District',
    heroImage: '/assets/Utilities-mapping1.jpg.png',
    clientSector: 'Urban Development & Smart City Authority',
    shortDesc: 'Subsurface Utility Engineering (SUE) mapping and Enterprise GIS geodatabase integration.',
    challenge: 'Prior to construction of a major urban transit expansion, the city needed an authoritative 3D digital model of all subterranean gas, water, electric, and telecommunication networks to prevent high-risk utility strike incidents.',
    methodology: 'Harmonized 20+ years of disparate utility drawings, Ground Penetrating Radar (GPR) scans, and electromagnetic locator surveys into a unified Enterprise ArcGIS geodatabase compliant with ASCE 38-02 Quality Level A and B criteria.',
    technology: [
      'ESRI ArcGIS Pro & Enterprise',
      'PostGIS Spatial Database',
      'GPR Subsurface Ingestion',
      'FME ETL Automation Pipelines'
    ],
    deliverables: [
      '3D Subsurface Utility Geodatabase with ASCE 38-02 quality attributes',
      'CAD alignment drawings for civil transit contractors',
      'Web-based conflict detection dashboard for municipal engineers',
      'Comprehensive utility clash matrix identifying 85 subsurface pinch points'
    ],
    gallery: [
      {
        url: '/assets/Utilities-mapping1.jpg.png',
        caption: '3D subterranean utility network model illustrating multi-utility depth alignments.',
        category: 'model'
      },
      {
        url: '/assets/Mapping.png',
        caption: 'High-resolution true orthophoto base map combined with municipal GIS cadastral boundaries.',
        category: 'deliverable'
      }
    ],
    stats: [
      { label: 'Network Mapped', value: '380 km' },
      { label: 'Utility Strikes', value: '0 Strikes' },
      { label: 'Disciplines Unified', value: '16 Layers' },
      { label: 'SUE Rigor', value: 'ASCE 38-02' }
    ],
    highlightMetric: 'Zero excavator utility strikes across 380km transit development'
  },
  {
    id: 'open-pit-mining-survey',
    slug: 'open-pit-mining-terrain-volumetric-survey',
    title: 'Open-Pit Mining Terrain Modeling & Volumetric Surveying',
    category: 'Geospatial Services',
    industry: 'Mining & Quarry Operations',
    location: 'Active Mineral Extraction Basin',
    heroImage: '/assets/Mining.png',
    clientSector: 'International Natural Resources Producer',
    shortDesc: 'High-precision drone photogrammetry, monthly quarry pit volume calculations, and slope stability monitoring.',
    challenge: 'An active mining site required monthly volumetric cut/fill stockpile audits and continuous geotechnical slope deformation tracking without sending surveying personnel into hazardous active blast pits.',
    methodology: 'Deployed UAV photogrammetry and aerial LiDAR with RTK ground control networks to compute high-density 3D digital elevation models. Automated volume calculation software compared monthly isopach surfaces to determine exact extracted tonnages.',
    technology: [
      'UAV Aerial Photogrammetry',
      'Pix4Dmatic / Metashape',
      'Global Mapper',
      'Civil 3D Volumetric Engines'
    ],
    deliverables: [
      'Stockpile volume reconciliation certificates (m³ and metric tons)',
      'Digital Terrain Models (DTM) and high-density contour maps',
      'Geotechnical slope inclination and displacement heatmaps',
      'High-resolution ortho-mosaic aerial imagery'
    ],
    gallery: [
      {
        url: '/assets/Mining.png',
        caption: '3D volumetric mesh of open-pit mining faces and active excavation benches.',
        category: 'scan'
      },
      {
        url: '/assets/Photogrammetry-Terrain-Based-3D-Model-1.png',
        caption: 'Photogrammetric 3D digital surface model used for volumetric cut/fill computations.',
        category: 'deliverable'
      }
    ],
    stats: [
      { label: 'Area Covered', value: '2,400 Hectares' },
      { label: 'Volume Precision', value: '< 1.5% Error' },
      { label: 'Survey Frequency', value: 'Monthly Audits' },
      { label: 'Safety Incidents', value: '0 Personnel in Pit' }
    ],
    highlightMetric: 'Monthly volume reconciliation delivered with less than 1.5% margin of error'
  }
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projectsData.find(p => p.slug === slug || p.id === slug);
}
