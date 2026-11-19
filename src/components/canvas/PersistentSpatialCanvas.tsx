import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useSpatialScene, SpatialMode } from '../../context/SpatialSceneContext';

export const PersistentSpatialCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { mode } = useSpatialScene();
  const modeRef = useRef<SpatialMode>(mode);
  modeRef.current = mode;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL support
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) return;
    } catch {
      return;
    }

    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene, Camera & Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x090B0C); // Deep Basalt
    scene.fog = new THREE.FogExp2(0x090B0C, 0.016);

    const camera = new THREE.PerspectiveCamera(
      48,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 24, 48);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      antialias: !isMobile,
      alpha: false,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5));
    renderer.setClearColor(0x090B0C, 1);
    container.appendChild(renderer.domElement);

    // 2. Ambient & Subtle Directional Lighting
    const ambientLight = new THREE.AmbientLight(0xF0EEE8, 0.45);
    scene.add(ambientLight);

    const copperLight = new THREE.DirectionalLight(0xC27A50, 1.2);
    copperLight.position.set(30, 45, 25);
    scene.add(copperLight);

    const coolRimLight = new THREE.DirectionalLight(0x191E20, 0.8);
    coolRimLight.position.set(-30, -20, -30);
    scene.add(coolRimLight);

    // 3. Procedural Topographic Terrain Geometry
    const gridRes = isMobile ? 48 : 80;
    const terrainGeo = new THREE.PlaneGeometry(120, 120, gridRes, gridRes);
    terrainGeo.rotateX(-Math.PI / 2);

    const pos = terrainGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const dist = Math.sqrt(x * x + z * z);
      
      // Multi-octave natural terrain formula
      const elevation =
        Math.sin(x * 0.06) * Math.cos(z * 0.06) * 5.5 +
        Math.sin(x * 0.12 + z * 0.08) * 3.0 +
        Math.cos(x * 0.03 - z * 0.04) * 4.0 -
        (dist * 0.09);

      pos.setY(i, elevation);
    }
    terrainGeo.computeVertexNormals();

    const terrainMat = new THREE.MeshBasicMaterial({
      color: 0x292F30, // Subtle border color
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const terrainMesh = new THREE.Mesh(terrainGeo, terrainMat);
    terrainMesh.position.y = -6;
    scene.add(terrainMesh);

    // 4. LiDAR Point Cloud Particle Field
    const particleCount = isMobile ? 2200 : 5400;
    const pointGeo = new THREE.BufferGeometry();
    const pointPositions = new Float32Array(particleCount * 3);
    const pointColors = new Float32Array(particleCount * 3);

    const cGraphite = new THREE.Color(0x191E20);
    const cMineral = new THREE.Color(0xF0EEE8);
    const cCopper = new THREE.Color(0xC27A50); // Selective copper survey points

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 110;
      const z = (Math.random() - 0.5) * 110;
      const dist = Math.sqrt(x * x + z * z);

      const baseElev =
        Math.sin(x * 0.06) * Math.cos(z * 0.06) * 5.5 +
        Math.sin(x * 0.12 + z * 0.08) * 3.0 +
        Math.cos(x * 0.03 - z * 0.04) * 4.0 -
        (dist * 0.09);

      const y = baseElev + (Math.random() * 1.2 - 0.6) - 5.8;

      pointPositions[i * 3] = x;
      pointPositions[i * 3 + 1] = y;
      pointPositions[i * 3 + 2] = z;

      // Color distribution: mostly mineral/graphite, with selective copper points (approx 8%)
      const isCopper = Math.random() < 0.09;
      let pCol = new THREE.Color();
      if (isCopper) {
        pCol.copy(cCopper);
      } else {
        const normY = THREE.MathUtils.clamp((y + 12) / 18, 0, 1);
        pCol.lerpColors(cGraphite, cMineral, normY);
      }

      pointColors[i * 3] = pCol.r;
      pointColors[i * 3 + 1] = pCol.g;
      pointColors[i * 3 + 2] = pCol.b;
    }

    pointGeo.setAttribute('position', new THREE.BufferAttribute(pointPositions, 3));
    pointGeo.setAttribute('color', new THREE.BufferAttribute(pointColors, 3));

    const pointMat = new THREE.PointsMaterial({
      size: isMobile ? 0.8 : 1.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    const pointCloud = new THREE.Points(pointGeo, pointMat);
    scene.add(pointCloud);

    // 5. Survey Copper Laser Sweep Plane
    const scanPlaneGeo = new THREE.PlaneGeometry(120, 1.5);
    scanPlaneGeo.rotateX(-Math.PI / 2);
    const scanPlaneMat = new THREE.MeshBasicMaterial({
      color: 0xC27A50, // Survey Copper
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });
    const scanBeam = new THREE.Mesh(scanPlaneGeo, scanPlaneMat);
    scanBeam.position.y = -5.4;
    scene.add(scanBeam);

    // 6. Architectural BIM Structure Model Group (for Scan-to-BIM & Digital Twin modes)
    const bimGroup = new THREE.Group();
    bimGroup.position.set(0, 0, 0);
    bimGroup.visible = false;
    scene.add(bimGroup);

    // Structural columns
    const colGeo = new THREE.BoxGeometry(1.2, 14, 1.2);
    const colWire = new THREE.EdgesGeometry(colGeo);
    const wireMat = new THREE.LineBasicMaterial({ color: 0xC27A50, linewidth: 1.5 });
    const colSolidMat = new THREE.MeshStandardMaterial({
      color: 0x191E20,
      metalness: 0.8,
      roughness: 0.3,
      transparent: true,
      opacity: 0.75,
    });

    const positions = [
      [-12, 1, -12], [0, 1, -12], [12, 1, -12],
      [-12, 1, 0],   [0, 1, 0],   [12, 1, 0],
      [-12, 1, 12],  [0, 1, 12],  [12, 1, 12],
    ];

    positions.forEach(([cx, cy, cz]) => {
      const colMesh = new THREE.Mesh(colGeo, colSolidMat);
      colMesh.position.set(cx, cy, cz);
      const colEdges = new THREE.LineSegments(colWire, wireMat);
      colEdges.position.set(cx, cy, cz);
      bimGroup.add(colMesh);
      bimGroup.add(colEdges);
    });

    // Floor slabs
    const slabGeo = new THREE.BoxGeometry(28, 0.8, 28);
    const slabWire = new THREE.EdgesGeometry(slabGeo);
    [ -5.5, 1.5, 8.5 ].forEach((sy) => {
      const slabMesh = new THREE.Mesh(slabGeo, colSolidMat);
      slabMesh.position.set(0, sy, 0);
      const slabEdges = new THREE.LineSegments(slabWire, wireMat);
      slabEdges.position.set(0, sy, 0);
      bimGroup.add(slabMesh);
      bimGroup.add(slabEdges);
    });

    // 7. Survey Triangulation Network Vector Lines (for Surveying mode)
    const surveyGroup = new THREE.Group();
    surveyGroup.visible = false;
    scene.add(surveyGroup);

    const surveyLineGeo = new THREE.BufferGeometry();
    const surveyLineCoords: number[] = [];
    for (let i = 0; i < 24; i++) {
      const p1 = [ (Math.random() - 0.5) * 60, -3 + Math.random() * 8, (Math.random() - 0.5) * 60 ];
      const p2 = [ (Math.random() - 0.5) * 60, -3 + Math.random() * 8, (Math.random() - 0.5) * 60 ];
      surveyLineCoords.push(...p1, ...p2);
    }
    surveyLineGeo.setAttribute('position', new THREE.Float32BufferAttribute(surveyLineCoords, 3));
    const surveyLineMat = new THREE.LineBasicMaterial({
      color: 0xC27A50,
      transparent: true,
      opacity: 0.6,
    });
    const surveyLines = new THREE.LineSegments(surveyLineGeo, surveyLineMat);
    surveyGroup.add(surveyLines);

    // Mouse Tracking for Parallax
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    // Scroll Tracking
    let scrollProgress = 0;
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        scrollProgress = window.scrollY / docHeight;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (document.hidden) return;

      const elapsed = clock.getElapsedTime();
      const currentMode = modeRef.current;

      // Update mode visibility
      if (currentMode === 'SCAN_TO_BIM' || currentMode === 'DIGITAL_TWIN' || currentMode === 'STAGE_3_MODEL') {
        bimGroup.visible = true;
        surveyGroup.visible = false;
        terrainMat.opacity = THREE.MathUtils.lerp(terrainMat.opacity, 0.2, 0.05);
        pointMat.opacity = THREE.MathUtils.lerp(pointMat.opacity, 0.4, 0.05);
      } else if (currentMode === 'SURVEYING') {
        bimGroup.visible = false;
        surveyGroup.visible = true;
        terrainMat.opacity = THREE.MathUtils.lerp(terrainMat.opacity, 0.5, 0.05);
        pointMat.opacity = THREE.MathUtils.lerp(pointMat.opacity, 0.7, 0.05);
      } else if (currentMode === 'STAGE_1_REALITY' || currentMode === 'REALITY_CAPTURE' || currentMode === 'LIDAR') {
        bimGroup.visible = false;
        surveyGroup.visible = false;
        terrainMat.opacity = THREE.MathUtils.lerp(terrainMat.opacity, 0.25, 0.05);
        pointMat.opacity = THREE.MathUtils.lerp(pointMat.opacity, 0.95, 0.05);
      } else {
        // Default TERRAIN_HERO / GEOSPATIAL
        bimGroup.visible = false;
        surveyGroup.visible = false;
        terrainMat.opacity = THREE.MathUtils.lerp(terrainMat.opacity, 0.45, 0.05);
        pointMat.opacity = THREE.MathUtils.lerp(pointMat.opacity, 0.85, 0.05);
      }

      if (!prefersReducedMotion) {
        // Continuous slow scanning motion (seamless sinusoidal cycle, period ~10s)
        scanBeam.position.z = Math.sin(elapsed * 0.6) * 45;

        // Camera path driven by scroll + subtle idle drift + mouse parallax
        const idleDrift = Math.sin(elapsed * 0.12) * 4;
        const targetCamX = (mouseX * 7) + idleDrift + (Math.sin(scrollProgress * Math.PI * 2) * 12);
        
        // As user scrolls, camera moves through sections
        const targetCamY = 24 - (scrollProgress * 12) - (mouseY * 3);
        const targetCamZ = 48 - (scrollProgress * 20);

        camera.position.x += (targetCamX - camera.position.x) * 0.035;
        camera.position.y += (targetCamY - camera.position.y) * 0.035;
        camera.position.z += (targetCamZ - camera.position.z) * 0.035;

        const lookTargetY = -2 - (scrollProgress * 4);
        camera.lookAt(0, lookTargetY, 0);

        // Continuous subtle terrain & model rotation
        terrainMesh.rotation.y = elapsed * 0.012;
        pointCloud.rotation.y = elapsed * 0.012;
        scanBeam.rotation.y = elapsed * 0.012;
        if (bimGroup.visible) {
          bimGroup.rotation.y = elapsed * 0.018;
        }
        if (surveyGroup.visible) {
          surveyGroup.rotation.y = elapsed * 0.015;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      terrainGeo.dispose();
      terrainMat.dispose();
      pointGeo.dispose();
      pointMat.dispose();
      scanPlaneGeo.dispose();
      scanPlaneMat.dispose();
      colGeo.dispose();
      colWire.dispose();
      colSolidMat.dispose();
      slabGeo.dispose();
      slabWire.dispose();
      wireMat.dispose();
      surveyLineGeo.dispose();
      surveyLineMat.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden" 
      aria-hidden="true"
    >
      {/* Subtle depth vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-basalt via-transparent to-basalt/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-basalt/70 via-transparent to-basalt/70 pointer-events-none" />
    </div>
  );
};
