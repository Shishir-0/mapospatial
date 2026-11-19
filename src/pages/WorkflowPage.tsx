import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { 
  ArrowUpRight, 
  ArrowRight, 
  CheckCircle2, 
  FileCheck, 
  Cpu, 
  PackageCheck
} from 'lucide-react';

interface WorkflowStep {
  stepNumber: string;
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  narrative: string[];
  inputs: string[];
  activities: string[];
  outputs: string[];
  deliverablesSupported: string[];
  visualImage: string;
  visualCaption: string;
  connectedCapability: {
    name: string;
    href: string;
  };
  technicalNotes?: string;
}

export const WorkflowPage: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<string>('step-01');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Engineering Methodology & Workflow | Mapo Spatial';
  }, []);

  const workflowSteps: WorkflowStep[] = [
    {
      stepNumber: '01',
      id: 'step-01',
      eyebrow: 'PHASE 01 // SCOPE DEFINITION & PLANNING',
      title: 'Project Discovery and Requirement Definition',
      summary: 'Establishing the spatial scope, precision thresholds, reference geodetic systems, and downstream modeling requirements before deployment.',
      narrative: [
        'Every spatial engineering engagement begins with a rigorous technical review of the physical environment and the client\'s operational objectives. Rather than applying a generic scanning protocol, we identify the specific engineering decisions the resulting spatial data must support.',
        'We evaluate available archive drawings, assess structural and operational access constraints, establish geodetic control requirements (WGS84, UTM, or local site grid), and determine the appropriate level of development (LOD 100 to 500) and feature classification standards mandated for the project.'
      ],
      inputs: [
        'Client project brief & execution milestones',
        'Existing 2D archive CAD drawings and structural schematics',
        'Site access logistics and operational health & safety parameters',
        'Specified geodetic coordinate system and datum requirements',
        'Required downstream software ecosystem (Revit, Civil 3D, GIS, etc.)'
      ],
      activities: [
        'Detailed client objective and stakeholder alignment',
        'Site reconnaissance and physical environment assessment',
        'Definition of required spatial fidelity and geometric detail',
        'Sensor and methodology selection (TLS, Mobile LiDAR, UAV)',
        'Reference control network strategy and survey monument planning',
        'Delivery schedule and phased handover structuring'
      ],
      outputs: [
        'Project Spatial Execution Plan (PSEP)',
        'Sensor & methodology deployment matrix',
        'Geodetic control reference baseline definition',
        'Agreed deliverable format and LOD specification structure'
      ],
      deliverablesSupported: [
        'Project Execution Plan',
        'Geodetic Control Strategy',
        'Scope Specification Matrix'
      ],
      visualImage: '/assets/Building-3.jpg',
      visualCaption: 'Initial site reconnaissance and spatial control planning for complex infrastructure.',
      connectedCapability: {
        name: 'Explore Reality Capture Capabilities',
        href: '/reality-capture'
      },
      technicalNotes: 'Pre-mobilization alignment eliminates on-site coverage gaps and prevents costly sensor redeployments.'
    },
    {
      stepNumber: '02',
      id: 'step-02',
      eyebrow: 'PHASE 02 // REAL-WORLD SPATIAL DATA COLLECTION',
      title: 'Site Survey and Reality Capture',
      summary: 'Acquiring high-density, millimetric physical observations through terrestrial laser scanning, mobile LiDAR, and geodetic surveying.',
      narrative: [
        'Data acquisition is executed utilizing professional-grade optical and laser instrumentation selected specifically for the physical characteristics of the site. From confined industrial mechanical rooms to high-speed railway corridors, our survey engineers systematically capture ground-truth geometry.',
        'Permanent or semi-permanent geodetic control points are tied via high-precision GNSS baselines and total station traverses, ensuring that every millimeter of captured point cloud data is mathematically tied to the established coordinate framework.'
      ],
      inputs: [
        'Approved Project Spatial Execution Plan (PSEP)',
        'Established geodetic control monuments and survey benchmarks',
        'Site access authorizations and scheduled scanning windows',
        'Calibrated sensor arrays (Terrestrial Laser Scanners, Mobile LiDAR, Total Stations)'
      ],
      activities: [
        'Total station control traverses and GNSS benchmark observation',
        'High-density terrestrial laser scanning (TLS) across multiple vantage points',
        'Mobile LiDAR corridor mapping for linear transportation networks',
        '360° high-dynamic-range (HDR) photometric imagery capture',
        'Real-time field registration checks and coverage verification',
        'Daily field data backup and checksum validation'
      ],
      outputs: [
        'Raw point clouds in sensor-native and standardized exchange formats (E57, LAS)',
        'Total station and GNSS raw observation logs and traverse closure sheets',
        'Calibrated 360° HDR spherical photography tours',
        'Site field notes and control point recovery sheets'
      ],
      deliverablesSupported: [
        'Raw E57 Point Cloud Datasets',
        'Survey Control Traverse Records',
        '360° Photometric Site Documentation'
      ],
      visualImage: '/assets/Plant-room3.jpg',
      visualCaption: 'High-density terrestrial laser scanning capturing dense piping and MEP assemblies.',
      connectedCapability: {
        name: 'Explore Terrestrial & Mobile LiDAR',
        href: '/lidar-engineering'
      },
      technicalNotes: 'Redundant scan overlaps guarantee zero geometric shadowing in intricate mechanical spaces.'
    },
    {
      stepNumber: '03',
      id: 'step-03',
      eyebrow: 'PHASE 03 // POINT CLOUD PROCESSING & NORMALIZATION',
      title: 'Data Processing and Registration',
      summary: 'Translating millions of raw spatial observations into registered, noise-filtered, and classified point-cloud datasets.',
      narrative: [
        'Following site demobilization, our Bengaluru data engineering hub initiates high-throughput post-processing. Individual scan setups are registered using a hybrid methodology combining surveyed target coordinates with algorithmic cloud-to-cloud point matching.',
        'Noise decimation filters remove atmospheric artifacts, moving vehicles, and transient personnel. For aerial and mobile LiDAR datasets, automated and manual classification algorithms separate raw points into ASPRS standard classes—such as bare-earth ground, low/medium/high vegetation, catenary power lines, and structural surfaces.'
      ],
      inputs: [
        'Raw multi-scan E57, LAS, and proprietary sensor point clouds',
        'Survey traverse coordinates and control network tie measurements',
        'Environmental calibration metadata and sensor calibration files'
      ],
      activities: [
        'Rigorous scan registration with residual error matrix analysis',
        'Coordinate system transformation and georeferencing',
        'Ghost point removal, foliage filtering, and noise decimation',
        'ASPRS LiDAR point classification (ground, vegetation, structures, wires)',
        'Breakline and terrain feature vector extraction',
        'Point cloud normalization and multi-gigabyte tiling for performance'
      ],
      outputs: [
        'Fully registered, colorized, and unified point cloud (E57, LAS 1.4, RCP)',
        'ASPRS classified LAS/LAZ files with verified classification accuracy',
        'Registration quality report detailing mean target residuals and overlap metrics',
        'Digital Terrain Models (DTM) and elevation contour files'
      ],
      deliverablesSupported: [
        'Unified E57 / LAS 1.4 Datasets',
        'Classified Point Clouds (ASPRS)',
        'Registration Residual & QA Reports'
      ],
      visualImage: '/assets/Power-line1.png',
      visualCaption: 'LiDAR point classification separating transmission conductors, structural steel, and terrain.',
      connectedCapability: {
        name: 'Explore Geospatial Services & Classification',
        href: '/geospatial-services'
      },
      technicalNotes: 'Strict geodetic transformation algorithms preserve true coordinate integrity across large geographic areas.'
    },
    {
      stepNumber: '04',
      id: 'step-04',
      eyebrow: 'PHASE 04 // PARAMETRIC MODELING & FEATURE EXTRACTION',
      title: 'Engineering Modelling and Interpretation',
      summary: 'Converting unstructured point clouds into intelligent, parametric Autodesk Revit BIM models, CAD drawings, and GIS datasets.',
      narrative: [
        'This critical phase bridges raw spatial data and actionable engineering intelligence. Skilled BIM modelers extract architectural geometry, structural frames, and MEP conduits directly aligned to the registered point cloud.',
        'Depending on the agreed project scope, models are developed from LOD 100 conceptual masses up to LOD 500 verified as-builts. Every wall, column, steel beam, flange, and duct is modeled to exact real-world dimensions and slopes, incorporating operational metadata, family classifications, and maintenance tags.'
      ],
      inputs: [
        'Unified, registered point clouds (E57, RCP, LAS)',
        'Project BIM Execution Plan (BEP) and modeling standards',
        'Specified Level of Development (LOD) matrix (LOD 100 - 500)',
        'Client family template files, shared parameters, and naming conventions'
      ],
      activities: [
        'Parametric architectural modeling (walls, slabs, doors, fenestration, finishes)',
        'Structural steel frame and reinforced concrete modeling',
        'Mechanical, electrical, plumbing, and piping (MEP) system extraction',
        '2D CAD As-Built drawing generation (plans, elevations, sections)',
        'Civil 3D corridor and surface modeling for rail and highways',
        'Digital Twin asset parameter tagging and COBie metadata integration'
      ],
      outputs: [
        'Federated Autodesk Revit (.RVT) models organized by discipline',
        'buildingSMART IFC 4 neutral exchange models for open coordination',
        '2D CAD (.DWG) architectural and MEP as-built drawings',
        'Spatial GIS vector datasets (ESRI Shapefile / Geodatabase)',
        'Lightweight 3D Tiles and glTF assets for browser visualization'
      ],
      deliverablesSupported: [
        'Autodesk Revit RVT Models (LOD 100-500)',
        'IFC 4 Open BIM Models',
        '2D CAD DWG Drawing Packages',
        'Digital Twin 3D Assets'
      ],
      visualImage: '/assets/Plant.png',
      visualCaption: 'Parametric LOD 400 MEP Revit model generated directly from industrial laser scans.',
      connectedCapability: {
        name: 'Explore Scan to BIM Capabilities',
        href: '/scan-to-bim'
      },
      technicalNotes: 'Elements are modeled to genuine physical conditions—reflecting real-world deflections, uneven slopes, and settlements.'
    },
    {
      stepNumber: '05',
      id: 'step-05',
      eyebrow: 'PHASE 05 // QUALITY ASSURANCE & METRIC VERIFICATION',
      title: 'Quality Assurance and Validation',
      summary: 'Validating model alignment against source point clouds through automated deviation heatmaps and rigorous coordination audits.',
      narrative: [
        'Quality assurance at Mapo Spatial is an objective, mathematically verifiable discipline. We do not rely on subjective visual inspections alone. Every engineering model undergoes algorithmic point-to-model deviation analysis.',
        'Using specialized inspection software, we calculate perpendicular distances from the source point cloud returns to the modeled surfaces. Color-coded deviation heatmaps immediately highlight any element exceeding the project\'s specified tolerance thresholds (typically within ±3mm for architectural and MEP elements). Multi-discipline models are simultaneously verified in Autodesk Navisworks for internal clashes.'
      ],
      inputs: [
        'Modeled Revit and CAD geometry',
        'Original raw and registered point cloud datasets',
        'Agreed project tolerance thresholds and acceptance criteria',
        'Multi-discipline coordination matrices'
      ],
      activities: [
        'Algorithmic surface-to-point deviation heatmap generation',
        'Verification of coordinate origin, rotation, and shared coordinate systems',
        'Discipline clash detection and resolution in Autodesk Navisworks',
        'Model integrity checks (unconnected pipes, duplicate geometry, unbound rooms)',
        'Metadata and parameter audit verifying COBie and attribute completeness',
        'Senior Engineering Director review and sign-off'
      ],
      outputs: [
        'Point-to-model deviation heatmap inspection reports',
        'Navisworks clash detection and coordination matrix reports',
        'Model audit checklist verifying compliance with the project BEP',
        'Formal Quality Assurance Certificate'
      ],
      deliverablesSupported: [
        'Deviation Heatmap Reports',
        'Clash Detection Matrices',
        'QA / BEP Compliance Documentation'
      ],
      visualImage: '/assets/Utilities-mapping1.jpg.png',
      visualCaption: 'Algorithmic point-to-geometry verification ensuring sub-centimeter alignment.',
      connectedCapability: {
        name: 'Explore Digital Twin & QA Standards',
        href: '/digital-twin'
      },
      technicalNotes: 'Deviation heatmaps provide undeniable visual proof that digital models strictly mirror physical reality.'
    },
    {
      stepNumber: '06',
      id: 'step-06',
      eyebrow: 'PHASE 06 // PACKAGING & KNOWLEDGE TRANSFER',
      title: 'Delivery and Project Handover',
      summary: 'Structured packaging in native and open formats, comprehensive technical handover, and post-delivery client integration support.',
      narrative: [
        'The final phase ensures that verified spatial data transitions seamlessly into your organization\'s operational workflow. Deliverables are packaged according to strict file hierarchies, with standardized folder conventions, accompanying documentation, and format exports.',
        'We facilitate technical walkthrough sessions with your engineering, design, or facility management teams to review coordinate benchmarks, model structures, and family libraries. We remain available for follow-up support, design team coordination, and downstream operational integration.'
      ],
      inputs: [
        'QA-approved federated Revit models, CAD packages, and point clouds',
        'Final inspection and deviation verification reports',
        'Client-specific delivery portal or transfer specifications'
      ],
      activities: [
        'Final format conversions (RVT, IFC, DWG, NWD, LAS, E57, 3D Tiles)',
        'Directory structure organization and metadata packaging',
        'Secure, high-bandwidth encrypted data transfer',
        'Client engineering handover briefing and walkthrough session',
        'Post-delivery technical support and query resolution'
      ],
      outputs: [
        'Fully packaged engineering deliverable archive',
        'Interactive web-based viewing links where included in scope',
        'Deliverable register and transmittal documentation',
        'Formal project completion sign-off'
      ],
      deliverablesSupported: [
        'Complete Handover Package (RVT, IFC, DWG, LAS)',
        'Deliverable Transmittal Register',
        'Web-Streamable 3D Tile Assets'
      ],
      visualImage: '/assets/Mobile-mapping4.png',
      visualCaption: 'Final handover of verified spatial datasets ready for capital project execution.',
      connectedCapability: {
        name: 'Initiate a Project Consultation',
        href: '/contact'
      },
      technicalNotes: 'Open standards and organized file hierarchies ensure immediate usability across all multidisciplinary teams.'
    }
  ];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-8 max-w-7xl mx-auto w-full z-10 relative bg-[#FFFFFF] text-[#425168]">
      
      {/* Breadcrumb Navigation */}
      <Breadcrumbs items={[{ label: 'Engineering Methodology & Workflow' }]} />

      {/* WORKFLOW OPENING HERO */}
      <div className="py-12 border-b border-[#DCE1E7]">
        <div className="max-w-4xl space-y-5">
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B69A5A]" />
            <span className="text-[13px] font-mono text-[#596579] font-bold tracking-[0.08em] uppercase block">
              ENGINEERING METHODOLOGY // END-TO-END LIFECYCLE
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-[#14233F] leading-[1.08] tracking-tight">
            From physical reality to <br />
            <span className="text-[#14233F]">
              engineering-ready intelligence.
            </span>
          </h1>

          <p className="text-[18px] sm:text-[20px] text-[#425168] font-normal leading-[1.6] pt-1 max-w-3xl">
            Every project follows a structured process that transforms physical environments into accurate, coordinated and usable digital information.
          </p>

          {/* Quick Technical Architecture Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#DCE1E7] font-mono text-xs">
            <div>
              <span className="text-[11px] text-[#536174] uppercase block font-medium">METHODOLOGY</span>
              <span className="text-[#14233F] font-bold text-sm">6-Stage Structured Flow</span>
            </div>
            <div>
              <span className="text-[11px] text-[#536174] uppercase block font-medium">VERIFICATION</span>
              <span className="text-[#14233F] font-bold text-sm">Deviation Heatmaps (±3mm)</span>
            </div>
            <div>
              <span className="text-[11px] text-[#536174] uppercase block font-medium">DELIVERABLE STANDARDS</span>
              <span className="text-[#14233F] font-bold text-sm">LOD 100 - 500 / ASPRS</span>
            </div>
            <div>
              <span className="text-[11px] text-[#536174] uppercase block font-medium">EXECUTION HUB</span>
              <span className="text-[#14233F] font-bold text-sm">Bengaluru // UK Operations</span>
            </div>
          </div>

        </div>
      </div>

      {/* QUICK STEP JUMP BAR (Sticky Navigation with Zero Faded Inactive States) */}
      <div className="py-4 border-b border-[#DCE1E7] sticky top-[60px] sm:top-[68px] bg-[#FFFFFF]/95 backdrop-blur-md z-30 overflow-x-auto">
        <div className="flex items-center space-x-2 sm:space-x-3 min-w-max font-mono text-xs">
          <span className="text-[#596579] text-[12px] uppercase mr-2 font-bold">STAGES:</span>
          {workflowSteps.map((st) => {
            const isActive = activeStepId === st.id;
            return (
              <button
                key={st.id}
                type="button"
                onClick={() => {
                  setActiveStepId(st.id);
                  const el = document.getElementById(st.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`px-3.5 py-2 transition-all duration-200 border rounded-sm flex items-center gap-1.5 hover:-translate-y-0.5 active:translate-y-0 ${
                  isActive
                    ? 'bg-[#14233F] text-white border-[#14233F] font-bold shadow-xs'
                    : 'bg-[#F7F8FA] text-[#14233F] border-[#DCE1E7] hover:border-[#B69A5A] hover:bg-[#FFFFFF] font-semibold'
                }`}
              >
                <span className={isActive ? 'text-[#B69A5A]' : 'text-[#596579] font-bold'}>{st.stepNumber}</span>
                <span>{st.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* VERTICAL PROCESS TIMELINE WITH DETAILED 6 STAGES */}
      <div className="py-14 relative">
        
        {/* Continuous Connecting Technical Line */}
        <div className="hidden lg:block absolute left-[31px] top-20 bottom-20 w-[2px] bg-gradient-to-b from-[#14233F] via-[#B69A5A]/60 to-[#DCE1E7]" />

        <div className="space-y-20">
          {workflowSteps.map((step, idx) => (
            <article
              key={step.id}
              id={step.id}
              className="relative lg:pl-20 scroll-mt-36"
            >
              
              {/* Timeline Marker Pin */}
              <div className="hidden lg:flex absolute left-0 top-0 w-16 h-16 rounded-full bg-[#FFFFFF] border-2 border-[#14233F] items-center justify-center font-mono font-bold text-[#14233F] shadow-sm z-10 transition-transform duration-300 hover:scale-105 hover:border-[#B69A5A]">
                <span className="text-lg">{step.stepNumber}</span>
              </div>

              {/* Step Card Container (No low opacity anywhere) */}
              <div className="p-6 sm:p-10 border border-[#DCE1E7] bg-[#FFFFFF] rounded-sm space-y-8 survey-corner shadow-xs hover:shadow-md transition-shadow duration-300">
                
                {/* Step Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between pb-6 border-b border-[#DCE1E7] gap-4">
                  <div className="space-y-2 max-w-3xl">
                    <span className="text-[12px] font-mono text-[#596579] font-bold tracking-[0.08em] uppercase block">
                      {step.eyebrow}
                    </span>
                    <h2 className="text-2xl sm:text-[30px] font-display font-extrabold text-[#14233F] leading-tight">
                      Step {step.stepNumber}: {step.title}
                    </h2>
                    <p className="text-[16px] text-[#425168] font-normal leading-[1.6]">
                      {step.summary}
                    </p>
                  </div>

                  <Link
                    to={step.connectedCapability.href}
                    className="font-mono text-xs uppercase tracking-wider text-[#14233F] hover:text-[#B69A5A] flex items-center gap-1.5 transition-all duration-200 font-bold shrink-0 mt-2 bg-[#F7F8FA] px-4 py-2.5 rounded-sm border border-[#DCE1E7] hover:border-[#B69A5A] hover:-translate-y-0.5 active:translate-y-0 group"
                  >
                    <span>{step.connectedCapability.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#B69A5A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </Link>
                </div>

                {/* Visual Demonstration Frame & Narrative Row */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left: Authentic Deliverable Visual */}
                  <div className="lg:col-span-6 space-y-3">
                    <div className="relative rounded-sm overflow-hidden border border-[#DCE1E7] bg-[#F7F8FA] aspect-[16/10] shadow-xs group">
                      <img 
                        src={step.visualImage} 
                        alt={step.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#14233F]/90 via-transparent to-transparent flex items-end p-4">
                        <div className="font-mono text-xs text-white flex items-center justify-between w-full">
                          <span className="bg-[#14233F] px-3 py-1 rounded-sm border border-[#B69A5A]/50 text-[#B69A5A] font-bold">
                            PHASE 0{idx + 1} ASSET
                          </span>
                          <span className="bg-black/70 px-2.5 py-1 rounded-sm text-slate-200">
                            VERIFIED METHODOLOGY
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="font-mono text-[12px] text-[#536174] px-1 flex items-center justify-between font-medium">
                      <span>{step.visualCaption}</span>
                      <span className="text-[#14233F] font-bold">STAGE {step.stepNumber}/06</span>
                    </div>
                  </div>

                  {/* Right: Substantial Engineering Narrative */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="text-[13px] font-mono text-[#14233F] font-bold uppercase tracking-[0.08em] border-b border-[#DCE1E7] pb-2">
                      Engineering Execution Details
                    </div>
                    {step.narrative.map((p, pIdx) => (
                      <p key={pIdx} className="text-[16px] text-[#425168] font-normal leading-[1.6]">
                        {p}
                      </p>
                    ))}

                    {step.technicalNotes && (
                      <div className="p-4 bg-[#F7F8FA] border border-[#DCE1E7] rounded-sm font-mono text-xs text-[#14233F] space-y-1">
                        <span className="text-[#596579] block text-[11px] uppercase font-bold">
                          TECHNICAL ASSURANCE:
                        </span>
                        <p className="font-semibold text-[#14233F] text-[13px]">{step.technicalNotes}</p>
                      </div>
                    )}
                  </div>

                </div>

                {/* Structured Inputs, Activities & Expected Outputs (Engineering Matrix) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#DCE1E7] font-mono text-xs">
                  
                  {/* Inputs */}
                  <div className="space-y-3 p-5 bg-[#F7F8FA] border border-[#DCE1E7] rounded-sm">
                    <div className="flex items-center gap-2 text-[#14233F] font-bold uppercase tracking-wider pb-2 border-b border-[#DCE1E7] text-[13px]">
                      <FileCheck className="w-4 h-4 text-[#B69A5A]" />
                      <span>Required Inputs</span>
                    </div>
                    <ul className="space-y-2 text-[#425168] text-[12px]">
                      {step.inputs.map((inp, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2">
                          <span className="text-[#14233F] font-bold">•</span>
                          <span className="font-medium">{inp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Process Activities */}
                  <div className="space-y-3 p-5 bg-[#F7F8FA] border border-[#DCE1E7] rounded-sm">
                    <div className="flex items-center gap-2 text-[#14233F] font-bold uppercase tracking-wider pb-2 border-b border-[#DCE1E7] text-[13px]">
                      <Cpu className="w-4 h-4 text-[#B69A5A]" />
                      <span>Process Activities</span>
                    </div>
                    <ul className="space-y-2 text-[#425168] text-[12px]">
                      {step.activities.map((act, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2">
                          <span className="text-[#B69A5A] font-bold">→</span>
                          <span className="font-medium">{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expected Outputs */}
                  <div className="space-y-3 p-5 bg-[#F7F8FA] border border-[#DCE1E7] rounded-sm">
                    <div className="flex items-center gap-2 text-[#14233F] font-bold uppercase tracking-wider pb-2 border-b border-[#DCE1E7] text-[13px]">
                      <PackageCheck className="w-4 h-4 text-[#B69A5A]" />
                      <span>Expected Outputs</span>
                    </div>
                    <ul className="space-y-2 text-[#14233F] text-[12px]">
                      {step.outputs.map((out, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B69A5A] shrink-0 mt-0.5" />
                          <span className="font-bold">{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Supported Deliverable Badges */}
                <div className="pt-4 border-t border-[#DCE1E7] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] text-[#596579] uppercase font-bold">Supported Deliverables:</span>
                    {step.deliverablesSupported.map((del, dIdx) => (
                      <span key={dIdx} className="px-2.5 py-1 bg-[#FFFFFF] border border-[#DCE1E7] rounded-sm text-[12px] text-[#14233F] font-bold shadow-xs">
                        {del}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={step.connectedCapability.href}
                    className="text-[#14233F] hover:text-[#B69A5A] flex items-center gap-1 font-bold transition-colors text-[13px]"
                  >
                    <span>Inspect Related Capability</span>
                    <ArrowRight className="w-4 h-4 text-[#B69A5A]" />
                  </Link>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>

      {/* CLOSING CONVERSION SECTION */}
      <div className="py-16">
        <div className="p-8 sm:p-14 border border-[#DCE1E7] bg-[#F7F8FA] rounded-sm space-y-8 survey-corner shadow-sm">
          
          <div className="max-w-3xl space-y-4">
            <span className="text-[12px] font-mono text-[#596579] font-bold tracking-[0.08em] uppercase block">
              [INITIATE METHODOLOGY ENGAGEMENT]
            </span>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#14233F] leading-tight">
              Ready to move from site data <br />
              to engineering decisions?
            </h2>

            <p className="text-base sm:text-[18px] text-[#425168] font-normal leading-relaxed pt-1">
              Discuss your project scope, site environment, and precision requirements with our senior spatial engineering directors. We provide formal feasibility reviews, methodology recommendations, and proposals within 24 business hours.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 font-mono text-xs uppercase tracking-wider">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#14233F] hover:bg-[#0E1930] text-white border border-[#14233F] hover:border-[#B69A5A] transition-all font-semibold rounded-sm shadow-md flex items-center justify-center gap-2"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-4 h-4 text-[#B69A5A]" />
            </Link>

            <Link
              to="/projects"
              className="px-8 py-4 bg-[#FFFFFF] text-[#14233F] hover:bg-[#F0F2F5] border border-[#DCE1E7] hover:border-[#B69A5A] transition-all rounded-sm flex items-center justify-center gap-2 font-semibold shadow-xs"
            >
              <span>Explore Verified Case Studies</span>
              <ArrowRight className="w-4 h-4 text-[#B69A5A]" />
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
};
