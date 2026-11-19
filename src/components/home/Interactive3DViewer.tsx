import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, ZoomIn, ZoomOut, Maximize2, Layers, Cpu, Compass, Info } from 'lucide-react';

export const Interactive3DViewer: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [renderMode, setRenderMode] = useState<'points' | 'wireframe' | 'solid' | 'heatmap'>('points');
  const [activeLayer, setActiveLayer] = useState<'all' | 'structure' | 'mep' | 'terrain'>('all');
  const [pointCount, setPointCount] = useState(3600);
  const [isRotating, setIsRotating] = useState(true);

  // References to three objects for runtime state changes
  const pointsObjRef = useRef<THREE.Points | null>(null);
  const meshObjRef = useRef<THREE.Mesh | null>(null);
  const wireObjRef = useRef<THREE.LineSegments | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Three setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0c1524);

    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      500
    );
    camera.position.set(24, 18, 30);
    camera.lookAt(0, 2, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    // Ambient & Directional Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x52BFD0, 1.4);
    dirLight.position.set(20, 40, 20);
    scene.add(dirLight);

    const dirLight2 = new THREE.DirectionalLight(0x182B42, 0.8);
    dirLight2.position.set(-20, -20, -20);
    scene.add(dirLight2);

    // Group for entire interactive asset
    const assetGroup = new THREE.Group();
    scene.add(assetGroup);

    // 1. Point Cloud Representation (LiDAR capture of building & infrastructure)
    const ptsCount = 4200;
    const ptsGeo = new THREE.BufferGeometry();
    const ptsPos = new Float32Array(ptsCount * 3);
    const ptsColors = new Float32Array(ptsCount * 3);

    for (let i = 0; i < ptsCount; i++) {
      // Create multi-tier structural points (floors, columns, terrain)
      let x, y, z;
      const tier = Math.random();

      if (tier < 0.35) {
        // Base terrain points
        x = (Math.random() - 0.5) * 32;
        z = (Math.random() - 0.5) * 32;
        y = Math.sin(x * 0.2) * Math.cos(z * 0.2) * 1.5 - 2;
      } else if (tier < 0.75) {
        // Main structural core (columns & slabs)
        x = (Math.random() - 0.5) * 18;
        z = (Math.random() - 0.5) * 18;
        y = Math.random() * 14 - 2;
      } else {
        // Upper roof & MEP elements
        x = (Math.random() - 0.5) * 14;
        z = (Math.random() - 0.5) * 14;
        y = 12 + Math.random() * 4;
      }

      ptsPos[i * 3] = x;
      ptsPos[i * 3 + 1] = y;
      ptsPos[i * 3 + 2] = z;

      // Color based on elevation or intensity
      const normY = (y + 2) / 16;
      let c = new THREE.Color();
      if (normY < 0.2) {
        c.setHex(0x1A3654); // Ground
      } else if (normY < 0.6) {
        c.setHex(0x52BFD0); // Spatial cyan core
      } else {
        c.setHex(0x9AF0FF); // High elevation
      }

      ptsColors[i * 3] = c.r;
      ptsColors[i * 3 + 1] = c.g;
      ptsColors[i * 3 + 2] = c.b;
    }

    ptsGeo.setAttribute('position', new THREE.BufferAttribute(ptsPos, 3));
    ptsGeo.setAttribute('color', new THREE.BufferAttribute(ptsColors, 3));

    const ptsMat = new THREE.PointsMaterial({
      size: 0.7,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
    });
    const pointsMesh = new THREE.Points(ptsGeo, ptsMat);
    assetGroup.add(pointsMesh);
    pointsObjRef.current = pointsMesh;

    // 2. Solid BIM Model Representation
    const buildingGeo = new THREE.BoxGeometry(16, 14, 16);
    const buildingMat = new THREE.MeshStandardMaterial({
      color: 0x182B42,
      roughness: 0.4,
      metalness: 0.6,
      transparent: true,
      opacity: 0.85,
    });
    const solidMesh = new THREE.Mesh(buildingGeo, buildingMat);
    solidMesh.position.y = 5;
    solidMesh.visible = false;
    assetGroup.add(solidMesh);
    meshObjRef.current = solidMesh;

    // 3. Structural Wireframe Representation
    const wireGeo = new THREE.EdgesGeometry(buildingGeo);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0x52BFD0,
      linewidth: 1.5,
    });
    const wireMesh = new THREE.LineSegments(wireGeo, wireMat);
    wireMesh.position.y = 5;
    wireMesh.visible = false;
    assetGroup.add(wireMesh);
    wireObjRef.current = wireMesh;

    // Orbit Drag Interaction
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      assetGroup.rotation.y += deltaX * 0.008;
      assetGroup.rotation.x += deltaY * 0.005;
    };

    // Touch support
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMouseX;
      const deltaY = e.touches[0].clientY - prevMouseY;
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;

      assetGroup.rotation.y += deltaX * 0.008;
      assetGroup.rotation.x += deltaY * 0.005;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    domElement.addEventListener('touchstart', onTouchStart);
    domElement.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onMouseUp);

    // Animation Loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (isRotating && !isDragging) {
        assetGroup.rotation.y += 0.004;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
      domElement.removeEventListener('touchstart', onTouchStart);
      domElement.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onMouseUp);

      ptsGeo.dispose();
      ptsMat.dispose();
      buildingGeo.dispose();
      buildingMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isRotating]);

  // Update render mode
  useEffect(() => {
    if (!pointsObjRef.current || !meshObjRef.current || !wireObjRef.current) return;

    if (renderMode === 'points') {
      pointsObjRef.current.visible = true;
      meshObjRef.current.visible = false;
      wireObjRef.current.visible = false;
    } else if (renderMode === 'wireframe') {
      pointsObjRef.current.visible = false;
      meshObjRef.current.visible = false;
      wireObjRef.current.visible = true;
    } else if (renderMode === 'solid') {
      pointsObjRef.current.visible = false;
      meshObjRef.current.visible = true;
      wireObjRef.current.visible = true;
    } else if (renderMode === 'heatmap') {
      pointsObjRef.current.visible = true;
      meshObjRef.current.visible = true;
      wireObjRef.current.visible = false;
    }
  }, [renderMode]);

  const handleZoom = (delta: number) => {
    if (!cameraRef.current) return;
    cameraRef.current.position.multiplyScalar(delta);
    cameraRef.current.updateProjectionMatrix();
  };

  const handleReset = () => {
    if (!cameraRef.current) return;
    cameraRef.current.position.set(24, 18, 30);
    cameraRef.current.lookAt(0, 2, 0);
  };

  return (
    <div className="relative w-full h-[520px] rounded-xl overflow-hidden border border-spatial-cyan/30 bg-navy-950 shadow-2xl">
      
      {/* 3D WebGL Canvas */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top Controls Overlay */}
      <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        
        <div className="flex items-center gap-2 pointer-events-auto bg-navy-950/85 backdrop-blur-md p-1.5 rounded-lg border border-spatial-cyan/20">
          <button
            type="button"
            onClick={() => setRenderMode('points')}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
              renderMode === 'points' 
                ? 'bg-spatial-cyan text-navy-950 font-bold' 
                : 'text-offwhite/80 hover:text-spatial-cyan'
            }`}
          >
            LiDAR Points
          </button>
          <button
            type="button"
            onClick={() => setRenderMode('wireframe')}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
              renderMode === 'wireframe' 
                ? 'bg-spatial-cyan text-navy-950 font-bold' 
                : 'text-offwhite/80 hover:text-spatial-cyan'
            }`}
          >
            BIM Wireframe
          </button>
          <button
            type="button"
            onClick={() => setRenderMode('solid')}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
              renderMode === 'solid' 
                ? 'bg-spatial-cyan text-navy-950 font-bold' 
                : 'text-offwhite/80 hover:text-spatial-cyan'
            }`}
          >
            Digital Twin
          </button>
        </div>

        <div className="flex items-center gap-1.5 pointer-events-auto bg-navy-950/85 backdrop-blur-md p-1.5 rounded-lg border border-spatial-cyan/20">
          <button
            type="button"
            onClick={() => handleZoom(0.85)}
            className="p-1.5 rounded hover:bg-navy-800 text-offwhite hover:text-spatial-cyan transition-colors"
            title="Zoom In"
            aria-label="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => handleZoom(1.15)}
            className="p-1.5 rounded hover:bg-navy-800 text-offwhite hover:text-spatial-cyan transition-colors"
            title="Zoom Out"
            aria-label="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setIsRotating(!isRotating)}
            className={`p-1.5 rounded transition-colors ${isRotating ? 'text-spatial-cyan' : 'text-offwhite/50'}`}
            title="Toggle Auto Rotation"
            aria-label="Toggle Auto Rotation"
          >
            <RotateCw className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-2 py-1 text-[10px] font-mono rounded hover:bg-navy-800 text-offwhite hover:text-spatial-cyan transition-colors"
          >
            Reset
          </button>
        </div>

      </div>

      {/* Bottom Telemetry HUD */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        
        <div className="bg-navy-950/90 backdrop-blur-md px-3.5 py-2 rounded-lg border border-spatial-cyan/25 text-[11px] font-mono pointer-events-auto flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-spatial-cyan">
            <span className="w-2 h-2 rounded-full bg-spatial-cyan animate-ping"></span>
            <span>INSPECTION_MODE: {renderMode.toUpperCase()}</span>
          </div>
          <span className="text-navy-700">|</span>
          <span className="text-muted">DRAG TO ORBIT / TOUCH TO ROTATE</span>
        </div>

        <div className="bg-navy-950/90 backdrop-blur-md px-3 py-2 rounded-lg border border-spatial-cyan/25 text-[11px] font-mono pointer-events-auto text-offwhite/80">
          <span>COORDINATES: UTM 43N / WGS84</span>
        </div>

      </div>

    </div>
  );
};
