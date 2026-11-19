import React, { useState, useRef, useCallback } from 'react';
import { Sliders, Eye, CheckCircle2, Layers, Cpu, Compass } from 'lucide-react';

export const RealityComparison: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(52); // percentage 0-100
  const [viewMode, setViewMode] = useState<'split' | 'cloud' | 'bim' | 'blend'>('split');
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handlePointerMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const onMouseDown = () => {
    isDragging.current = true;
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handlePointerMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handlePointerMove(e.touches[0].clientX);
    }
  };

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden" id="reality-transformation">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-spatial-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-spatial-cyan/30 text-spatial-cyan text-xs font-mono uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Engineering Transformation</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-offwhite tracking-tight">
            From Reality to Digital Intelligence
          </h2>
          
          <p className="text-base sm:text-lg text-offwhite/80 leading-relaxed font-light">
            Drag the slider to inspect how Mapo Spatial converts unstructured, dense 3D laser scan point clouds into parametric, clash-free BIM models with survey-grade tolerances.
          </p>
        </div>

        {/* Mode Selector Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 font-mono text-xs">
          <button
            type="button"
            onClick={() => setViewMode('split')}
            className={`px-4 py-2 rounded border transition-all flex items-center gap-2 ${
              viewMode === 'split' 
                ? 'bg-spatial-cyan text-navy-950 border-spatial-cyan font-bold shadow-[0_0_15px_rgba(82,191,208,0.3)]' 
                : 'bg-navy-900/80 text-offwhite/80 border-navy-700 hover:border-spatial-cyan/50'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Split Slider</span>
          </button>

          <button
            type="button"
            onClick={() => { setViewMode('cloud'); setSliderPosition(100); }}
            className={`px-4 py-2 rounded border transition-all flex items-center gap-2 ${
              viewMode === 'cloud' 
                ? 'bg-spatial-cyan text-navy-950 border-spatial-cyan font-bold' 
                : 'bg-navy-900/80 text-offwhite/80 border-navy-700 hover:border-spatial-cyan/50'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Raw LiDAR Point Cloud</span>
          </button>

          <button
            type="button"
            onClick={() => { setViewMode('bim'); setSliderPosition(0); }}
            className={`px-4 py-2 rounded border transition-all flex items-center gap-2 ${
              viewMode === 'bim' 
                ? 'bg-spatial-cyan text-navy-950 border-spatial-cyan font-bold' 
                : 'bg-navy-900/80 text-offwhite/80 border-navy-700 hover:border-spatial-cyan/50'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Parametric BIM Model (LOD 350)</span>
          </button>
        </div>

        {/* Comparison Stage Container */}
        <div 
          ref={containerRef}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onMouseMove={onMouseMove}
          onTouchMove={onTouchMove}
          className="relative w-full h-[460px] sm:h-[580px] rounded-xl overflow-hidden border border-spatial-cyan/30 shadow-2xl bg-navy-900 select-none cursor-ew-resize group"
          role="region"
          aria-label="Interactive Scan to BIM Comparison Viewer"
        >
          
          {/* Base Layer: Structured BIM Model (Right Side View) */}
          <div className="absolute inset-0 w-full h-full bg-[#0d1726] flex items-center justify-center overflow-hidden">
            
            {/* Architectural & Structural BIM Graphic Representation */}
            <svg className="w-full h-full opacity-90" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="bimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E3A5F" />
                  <stop offset="100%" stopColor="#0E1E33" />
                </linearGradient>
                <linearGradient id="mepPipe" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#52BFD0" />
                  <stop offset="100%" stopColor="#186270" />
                </linearGradient>
                <pattern id="bimGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(82, 191, 208, 0.08)" strokeWidth="1"/>
                </pattern>
              </defs>

              <rect width="1000" height="600" fill="url(#bimGrid)" />

              {/* Structural Columns */}
              <g stroke="#52BFD0" strokeWidth="1.5" fill="#14263D">
                {/* Columns */}
                <rect x="120" y="80" width="40" height="440" rx="2" />
                <rect x="360" y="80" width="40" height="440" rx="2" />
                <rect x="600" y="80" width="40" height="440" rx="2" />
                <rect x="840" y="80" width="40" height="440" rx="2" />

                {/* Horizontal Beams */}
                <rect x="80" y="160" width="840" height="30" rx="2" fill="#1A3350" />
                <rect x="80" y="320" width="840" height="30" rx="2" fill="#1A3350" />
                <rect x="80" y="480" width="840" height="40" rx="2" fill="#13263B" />
              </g>

              {/* MEP Ducts & Piping Systems */}
              <g stroke="#52BFD0" strokeWidth="2.5" fill="none">
                {/* HVAC Main Duct */}
                <path d="M 80 120 L 920 120" stroke="#9AF0FF" strokeWidth="14" strokeLinecap="square" opacity="0.8" />
                <path d="M 380 120 L 380 280 L 580 280" stroke="#9AF0FF" strokeWidth="8" strokeDasharray="4 2" />
                
                {/* High-Pressure Chilled Water Piping */}
                <path d="M 90 230 L 910 230" stroke="#52BFD0" strokeWidth="6" />
                <circle cx="280" cy="230" r="8" fill="#52BFD0" />
                <circle cx="520" cy="230" r="8" fill="#52BFD0" />
                <circle cx="760" cy="230" r="8" fill="#52BFD0" />

                {/* Conduit Electrical Cable Trays */}
                <path d="M 90 260 L 910 260" stroke="#FFB4AB" strokeWidth="4" strokeDasharray="8 4" opacity="0.7" />
              </g>

              {/* Parametric Dimension & Room Tags */}
              <g fill="#F5F6F3" fontFamily="Space Grotesk" fontSize="11" opacity="0.9">
                <rect x="180" y="210" width="130" height="34" rx="4" fill="#0A1320" stroke="#52BFD0" strokeWidth="1"/>
                <text x="190" y="226" fill="#52BFD0" fontWeight="600">BEAM_W18x50</text>
                <text x="190" y="238" fill="#A7BAD7" fontSize="9">LOD 350 | ELEV: +4.200M</text>

                <rect x="420" y="360" width="140" height="34" rx="4" fill="#0A1320" stroke="#52BFD0" strokeWidth="1"/>
                <text x="430" y="376" fill="#52BFD0" fontWeight="600">MEP_DUCT_600x400</text>
                <text x="430" y="388" fill="#A7BAD7" fontSize="9">AUTODESK REVIT 2024</text>
              </g>
            </svg>

            {/* Label Overlay for Right Side */}
            <div className="absolute top-6 right-6 px-4 py-2 rounded bg-navy-950/90 border border-spatial-cyan/30 text-right backdrop-blur-md">
              <span className="text-[10px] font-mono uppercase tracking-widest text-spatial-cyan block font-semibold">
                BIM Delivery Layer
              </span>
              <span className="text-sm font-display font-bold text-offwhite">
                Coordinated Revit Model (LOD 350)
              </span>
              <div className="text-[10px] font-mono text-emerald-400 flex items-center justify-end gap-1 mt-0.5">
                <CheckCircle2 className="w-3 h-3" />
                <span>Zero Clashes Verified</span>
              </div>
            </div>

          </div>

          {/* Top Layer: Raw Point Cloud (Left Side View, clipped by sliderPosition) */}
          <div 
            className="absolute inset-0 w-full h-full bg-[#070D16] overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            {/* High-density LiDAR Point Cloud Graphic Representation */}
            <div className="absolute inset-0 w-[1000px] h-[600px] max-w-none">
              <svg className="w-full h-full opacity-85" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
                <defs>
                  {/* Dense point cloud pattern */}
                  <pattern id="pointPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="#52BFD0" opacity="0.6"/>
                    <circle cx="8" cy="14" r="1.2" fill="#9AF0FF" opacity="0.8"/>
                    <circle cx="15" cy="6" r="0.8" fill="#3D628C" opacity="0.5"/>
                    <circle cx="18" cy="18" r="1.1" fill="#52BFD0" opacity="0.7"/>
                  </pattern>
                </defs>

                <rect width="1000" height="600" fill="url(#pointPattern)" />

                {/* Point Cloud Intensity Contour Lines */}
                <g stroke="#52BFD0" strokeWidth="1" fill="none" opacity="0.6" strokeDasharray="2 3">
                  {/* Column points simulation */}
                  <path d="M 120 80 L 160 80 L 160 520 L 120 520 Z" />
                  <path d="M 360 80 L 400 80 L 400 520 L 360 520 Z" />
                  <path d="M 600 80 L 640 80 L 640 520 L 600 520 Z" />

                  {/* Beam points */}
                  <path d="M 80 160 L 920 160 L 920 190 L 80 190 Z" />
                  <path d="M 80 320 L 920 320 L 920 350 L 80 350 Z" />

                  {/* Laser Scan Rings */}
                  <circle cx="380" cy="300" r="120" stroke="#52BFD0" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.4" />
                  <circle cx="380" cy="300" r="220" stroke="#52BFD0" strokeWidth="0.6" strokeDasharray="2 6" opacity="0.3" />
                  <circle cx="380" cy="300" r="320" stroke="#52BFD0" strokeWidth="0.5" strokeDasharray="1 8" opacity="0.2" />
                </g>

                {/* Survey Telemetry Markers */}
                <g fill="#52BFD0" fontFamily="JetBrains Mono" fontSize="9" opacity="0.85">
                  <text x="130" y="110">+ SCAN_STATION_04</text>
                  <text x="130" y="122">X: 521402.14m</text>
                  <text x="130" y="134">Y: 174092.88m</text>
                  <text x="130" y="146">Z: +4.218m (±1.8mm)</text>
                  
                  {/* Survey Reticle */}
                  <circle cx="380" cy="300" r="6" stroke="#9AF0FF" strokeWidth="1.5" fill="none" />
                  <line x1="370" y1="300" x2="390" y2="300" stroke="#9AF0FF" strokeWidth="1.5" />
                  <line x1="380" y1="290" x2="380" y2="310" stroke="#9AF0FF" strokeWidth="1.5" />
                </g>
              </svg>
            </div>

            {/* Label Overlay for Left Side */}
            <div className="absolute top-6 left-6 px-4 py-2 rounded bg-navy-950/90 border border-spatial-cyan/30 text-left backdrop-blur-md">
              <span className="text-[10px] font-mono uppercase tracking-widest text-spatial-cyan block font-semibold">
                Captured Physical Reality
              </span>
              <span className="text-sm font-display font-bold text-offwhite">
                Terrestrial LiDAR Point Cloud
              </span>
              <div className="text-[10px] font-mono text-muted flex items-center gap-1 mt-0.5">
                <span>E57 Format | Density: 1.2M pts/m²</span>
              </div>
            </div>

          </div>

          {/* Draggable Divider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-spatial-cyan shadow-[0_0_15px_#52BFD0] cursor-ew-resize z-30"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-navy-950 border-2 border-spatial-cyan flex items-center justify-center text-spatial-cyan shadow-xl group-hover:scale-110 transition-transform">
              <Sliders className="w-4 h-4" />
            </div>
          </div>

          {/* Bottom Telemetry Bar */}
          <div className="absolute bottom-4 inset-x-4 px-4 py-2.5 rounded-lg bg-navy-950/90 border border-spatial-cyan/20 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 text-xs font-mono z-20">
            <div className="flex items-center gap-4">
              <span className="text-spatial-cyan flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-spatial-cyan animate-pulse"></span>
                <span>DEVIATION CALIBRATION: ±2.1MM</span>
              </span>
              <span className="text-muted hidden sm:inline">|</span>
              <span className="text-offwhite hidden sm:inline">
                ALGORITHM: ICP POINT-TO-PLANE REGISTRATION
              </span>
            </div>
            <div className="text-spatial-cyan font-bold">
              POSITION: {Math.round(sliderPosition)}% SPLIT
            </div>
          </div>

        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          
          <div className="hud-panel p-5 bg-navy-900/60 rounded-lg border border-spatial-cyan/20 space-y-2">
            <div className="text-xs font-mono text-spatial-cyan uppercase tracking-wider font-semibold">
              01. Raw Scan Ingestion
            </div>
            <h3 className="text-base font-display font-bold text-offwhite">
              Full E57 / LAS Normalization
            </h3>
            <p className="text-xs text-offwhite/75 leading-relaxed">
              We ingest multi-gigabyte point clouds from Leica, Faro, Trimble, and mobile systems, executing rigorous geodetic bundle adjustments and noise decimation.
            </p>
          </div>

          <div className="hud-panel p-5 bg-navy-900/60 rounded-lg border border-spatial-cyan/20 space-y-2">
            <div className="text-xs font-mono text-spatial-cyan uppercase tracking-wider font-semibold">
              02. Parametric Extraction
            </div>
            <h3 className="text-base font-display font-bold text-offwhite">
              Intelligent Revit Families
            </h3>
            <p className="text-xs text-offwhite/75 leading-relaxed">
              Instead of dumb meshes, our BIM engineers create parametric architectural walls, structural framing, and MEP systems enriched with COBie asset metadata.
            </p>
          </div>

          <div className="hud-panel p-5 bg-navy-900/60 rounded-lg border border-spatial-cyan/20 space-y-2">
            <div className="text-xs font-mono text-spatial-cyan uppercase tracking-wider font-semibold">
              03. Deviation Heatmaps
            </div>
            <h3 className="text-base font-display font-bold text-offwhite">
              Survey-Grade QA Verification
            </h3>
            <p className="text-xs text-offwhite/75 leading-relaxed">
              Every deliverable is verified via automated point-to-model deviation heatmaps, ensuring complete alignment within strict ±3mm client tolerances.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};
