import { InsightArticle } from '../types';

export const insightsData: InsightArticle[] = [
  {
    id: 'scan-to-bim-lod-guide',
    slug: 'scan-to-bim-lod-guide-complex-renovations',
    title: 'The Engineering Guide to Scan-to-BIM: Choosing LOD 200 vs 350 for Retrofit Projects',
    category: 'Engineering Standards',
    readTime: '6 min read',
    date: 'November 2026',
    excerpt: 'Selecting the appropriate Level of Development (LOD) is the single most critical decision in Scan-to-BIM workflows. Discover how over-specifying inflates budgets while under-specifying leads to field clashes.',
    content: [
      'In building renovation and adaptive reuse, the gap between architectural concept and physical reality often results in costly change orders. The industry standard Level of Development (LOD) framework developed by BIMForum defines the degree to which an element’s geometry and attached information can be relied upon.',
      'LOD 200 provides approximate quantities, size, shape, and location, making it ideal for preliminary spatial feasibility and massing studies. However, when coordinating MEP routing or structural steel tie-ins within an existing building envelope, LOD 200 proves inadequate.',
      'LOD 300 and LOD 350 bridge this divide. LOD 300 models elements with specific quantity, size, and orientation, while LOD 350 includes interface connections and clearance envelopes necessary for multi-discipline clash coordination.',
      'At Mapo Spatial, our Scan-to-BIM engineering practice deploys rigorous point cloud deviation heatmaps during the quality assurance phase, verifying that every modeled LOD 350 component falls within 3mm of the verified terrestrial laser scan.'
    ],
    tags: ['Scan to BIM', 'LOD Standards', 'AEC', 'Revit', 'Clash Detection']
  },
  {
    id: 'mobile-lidar-corridor-mapping',
    slug: 'mobile-lidar-rail-highway-infrastructure',
    title: 'High-Speed Mobile LiDAR: Transforming Rail and Highway Infrastructure Asset Management',
    category: 'Geospatial Technology',
    readTime: '8 min read',
    date: 'October 2026',
    excerpt: 'How modern dual-scanner Mobile Mapping Systems (MMS) combined with automated point classification algorithms achieve survey-grade accuracy at highway speeds.',
    content: [
      'Traditional terrestrial surveying along active highways and busy rail lines carries acute safety hazards, requires road closures, and imposes substantial delays on commerce. The maturation of Mobile Mapping Systems (MMS) has fundamentally shifted the economics of infrastructure asset documentation.',
      'Equipped with dual survey-grade laser scanners pulsing at up to 2 million points per second, high-accuracy tactical IMUs, and RTK/PPK GNSS receivers, mobile mapping platforms capture millimeter-resolution 3D point clouds at speeds of up to 80 km/h.',
      'The critical engineering bottleneck is no longer data acquisition, but rapid data processing and feature extraction. Using automated classification pipelines, millions of raw point returns are categorized into pavement surfaces, curbs, barriers, road markings, signs, and overhead catenary lines.',
      'Mapo Spatial processes hundreds of linear kilometers monthly, generating structured asset inventories and clearance violation alerts for infrastructure operators across the globe.'
    ],
    tags: ['Mobile LiDAR', 'Rail Infrastructure', 'Highways', 'ASPRS', 'Point Clouds']
  },
  {
    id: 'demystifying-digital-twins',
    slug: 'demystifying-digital-twins-spatial-baseline',
    title: 'Beyond the Hype: The Crucial Role of Spatial Precision in True Digital Twins',
    category: 'Digital Twins',
    readTime: '7 min read',
    date: 'September 2026',
    excerpt: 'A digital twin without an accurate 3D spatial baseline is merely an ungrounded dashboard. Discover how reality capture and GIS anchor real-time operational context.',
    content: [
      'The term "Digital Twin" is often applied to everything from simple SCADA interfaces to 2D IoT dashboards. However, in physical asset engineering, a true digital twin requires a topologically correct, georeferenced spatial representation of the physical asset.',
      'Without survey-grade 3D geometry from laser scanning and BIM, IoT sensor data lacks physical context. For instance, knowing that a vibration sensor on a chemical pump is alerting is valuable; visualizing that alert directly inside a 3D digital model showing adjacent thermal pipes and escape routes enables immediate, safe action.',
      'By fusing 3D reality capture, LOD 350 BIM models, and enterprise GIS base layers into lightweight OGC 3D Tiles, Mapo Spatial builds digital twin environments that stream seamlessly in web browsers without specialized hardware or software installs.',
      'Our platforms connect physical operational reality with predictive maintenance algorithms, empowering asset managers to conduct virtual walkthroughs, inspect clearance parameters, and simulate modifications prior to physical execution.'
    ],
    tags: ['Digital Twins', 'IoT Integration', '3D Tiles', 'BIM', 'Facility Management']
  }
];
