import { IndustryItem } from '../types';

export const industriesData: IndustryItem[] = [
  {
    id: 'aec',
    slug: 'architecture-engineering-construction',
    name: 'Architecture, Engineering & Construction',
    iconName: 'Building2',
    imageAsset: '/assets/Building-3.jpg',
    shortDesc: 'Precision Scan-to-BIM, clash detection, and as-built validation across complex building projects.',
    fullDesc: 'We empower architects, structural engineers, and general contractors with high-precision digital baselines. By converting laser scan point clouds into intelligent Revit models (LOD 100-500), we eliminate on-site rework, verify pre-pour concrete geometry, and de-risk complex adaptive reuse projects.',
    challenges: [
      'Unreliable or missing historical archive drawings for retrofits',
      'On-site design clashes discovered during active construction phase',
      'Costly contractor delays caused by inaccurate manual measurements'
    ],
    solutions: [
      'Sub-millimeter 3D laser scan documentation of existing structures',
      'Multi-disciplinary Revit modeling with automated tolerance verification',
      'Pre-construction clash detection reports and clearance analytics'
    ],
    typicalDeliverables: [
      'Coordinated Revit RVT models',
      '2D CAD As-Built floor plans, elevations & sections',
      'Clash detection matrices & deviation color heatmaps'
    ],
    caseStudyHighlight: 'Delivered LOD 350 BIM models for a 45,000 m² heritage commercial conversion with zero structural clashes during renovation.'
  },
  {
    id: 'infrastructure',
    slug: 'infrastructure-civil',
    name: 'Infrastructure & Civil Works',
    iconName: 'Landmark',
    imageAsset: '/assets/Photogrammetry-Terrain-Based-3D-Model-1.png',
    shortDesc: 'Comprehensive geospatial surveys, terrain elevation modeling, and asset lifecycle intelligence.',
    fullDesc: 'Large-scale civil infrastructure demands rigorous geodetic control and uncompromising spatial precision. Mapo Spatial provides end-to-end geospatial surveys, DTM/DSM elevation modeling, and asset digitization for dams, bridges, ports, and regional civil undertakings.',
    challenges: [
      'Extreme terrain variability across vast geographic project footprints',
      'Coordinating multiple disparate coordinate systems and datum transformations',
      'Continuous structural displacement monitoring during excavation'
    ],
    solutions: [
      'High-precision geodetic network control using RTK/PPK GNSS baseline arrays',
      'Airborne and mobile LiDAR terrain extraction for cut/fill analysis',
      'Longitudinal deformation monitoring and structural baseline reporting'
    ],
    typicalDeliverables: [
      'Classified ASPRS LAS/LAZ point clouds',
      'Digital Terrain Models (DTM) and 0.5m elevation contours',
      'Civil 3D surface models and earthwork volume calculation spreadsheets'
    ],
    caseStudyHighlight: 'Surveyed and modeled 120km of civil infrastructure corridor providing high-precision terrain models within 4cm vertical tolerance.'
  },
  {
    id: 'transportation',
    slug: 'transportation-rail-aviation',
    name: 'Transportation, Rail & Aviation',
    iconName: 'TrainTrack',
    imageAsset: '/assets/Mobile-mapping4.png',
    shortDesc: 'Mobile LiDAR corridor mapping, track centerline extraction, and airport obstacle analysis.',
    fullDesc: 'We deliver mission-critical spatial data to railway network operators, highway authorities, and international airports. Using mobile mapping systems and aerial LiDAR, we capture linear corridors at speed without disrupting active passenger operations.',
    challenges: [
      'Zero downtime requirements on active rail and highway corridors',
      'Complex catenary, signal, and structure clearance envelope regulations',
      'Strict ICAO Annex 14 airport obstacle limitation compliance'
    ],
    solutions: [
      'High-speed Mobile LiDAR mapping with dual-scanner configurations',
      'Automated extraction of rail centerlines, gauge, cant, and overhead wire profiles',
      '3D Airport Obstacle Limitation Surface (OLS) modeling and penetration verification'
    ],
    typicalDeliverables: [
      'Classified rail corridor point clouds with catenary wire models',
      'Vector highway inventory databases (curbs, barriers, signage, road geometry)',
      'Aviation obstruction charts and 3D terrain flight approaches'
    ],
    caseStudyHighlight: 'Completed mobile mapping and feature extraction for 350+ kilometers of intercity rail corridor, identifying 80+ critical clearance anomalies.'
  },
  {
    id: 'energy-utilities',
    slug: 'power-energy-utilities',
    name: 'Power, Energy & Utilities',
    iconName: 'Zap',
    imageAsset: '/assets/Power-line1.png',
    shortDesc: 'Transmission line corridor analytics, vegetation management, and underground utility engineering.',
    fullDesc: 'Protecting energy transmission grids and underground utility networks requires high-resolution spatial visibility. We provide powerline catenary sag calculations, vegetation encroachment danger indexing, and ASCE 38-02 compliant underground utility base mapping.',
    challenges: [
      'Rapidly growing vegetation posing severe wildfire and outage hazards',
      'Thermal conductor sag under peak load conditions threatening ground clearance',
      'Undocumented subsurface pipes and electrical cables during excavation'
    ],
    solutions: [
      'LiDAR classification separating conductors, shield wires, and towers',
      'Algorithmic vegetation growth modeling predicting fall-in tree risks',
      'Subsurface Utility Engineering (SUE) mapping combining GPR and historic GIS records'
    ],
    typicalDeliverables: [
      'PLS-CADD compatible powerline models and wire geometry',
      'Vegetation danger tree classification tables and work orders',
      '3D subterranean utility network geodatabases'
    ],
    caseStudyHighlight: 'Classified 1,200 km of high-voltage transmission lines, generating automated tree encroachment warning reports with millimeter precision.'
  },
  {
    id: 'process-plant',
    slug: 'process-plant-engineering',
    name: 'Process Plant Engineering',
    iconName: 'Factory',
    imageAsset: '/assets/Plant.png',
    shortDesc: 'High-density laser scanning, pipe spool modeling, and intelligent plant digital twins.',
    fullDesc: 'In complex chemical refineries, pharmaceutical sites, and power plants, spatial accuracy is a safety mandate. We capture labyrinthine pipe racks, vessels, and structural steel, converting laser scan point clouds into intelligent 3D plant models with complete piping metadata.',
    challenges: [
      'Densely congested mechanical spaces where manual measurement is hazardous',
      'Tight tie-in tolerances for pre-fabricated replacement pipe spools',
      'Expensive plant shutdowns requiring round-the-clock rapid data turnaround'
    ],
    solutions: [
      'Dense terrestrial laser scanning with sub-2mm coordinate precision',
      'Automated pipe extraction with standard ASME/ANSI flange and valve catalog matching',
      'Tie-in point verification and spool replacement clash simulation'
    ],
    typicalDeliverables: [
      'Smart 3D Plant Models (Revit, AutoCAD Plant 3D, AVEVA PDMS/E3D format)',
      'Piping isometric drawings and tie-in point schedules',
      'Pre-fabrication clash detection clearance reports'
    ],
    caseStudyHighlight: 'As-built 3D modeling of an active petrochemical processing unit containing over 8,000 meters of process piping completed during a 5-day shutdown.'
  },
  {
    id: 'heritage-public',
    slug: 'heritage-mining-public',
    name: 'Heritage, Mining & Public Sector',
    iconName: 'Compass',
    imageAsset: '/assets/Mining.png',
    shortDesc: 'Digital archiving of historic monuments, open-pit quarry volume calculations, and municipal GIS.',
    fullDesc: 'From preserving irreplaceable historical monuments through millimetric 3D digital records to computing monthly cut/fill volumes in open-pit mines and building cadastral databases for municipal revenue authorities, we support diverse specialized sectors.',
    challenges: [
      'Fragile, non-orthogonal historic geometry requiring delicate, non-contact measurement',
      'Dangerous active mining faces prohibiting physical surveyor presence',
      'Complex municipal land ownership disputes arising from outdated paper deeds'
    ],
    solutions: [
      'Ultra-high definition non-contact optical laser scanning and drone photogrammetry',
      'UAV LiDAR volumetric terrain extraction for quarry pit monitoring',
      'Cadastral land parcel digitization and topological validation'
    ],
    typicalDeliverables: [
      'Textured 3D digital heritage mesh archives and orthophoto elevation drawings',
      'Volumetric quarry calculation reports with cut/fill isopach maps',
      'Enterprise municipal geodatabases with land record topology'
    ],
    caseStudyHighlight: 'Documented a 150-year-old historic civic structure with over 180 laser scans, producing comprehensive preservation drawings within 2mm accuracy.'
  }
];
