import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroSpatialCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // WebGL support check
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) return;
    } catch {
      return;
    }

    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xF7F8F6, 0.015);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(18, 22, 38);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Directional & Ambient Lights
    const ambientLight = new THREE.AmbientLight(0x14233F, 0.75);
    scene.add(ambientLight);

    const goldKeyLight = new THREE.DirectionalLight(0xB69A5A, 1.4);
    goldKeyLight.position.set(30, 40, 20);
    scene.add(goldKeyLight);

    // 1. Topographic Terrain Geometry (Styled in Navy Wireframe on Light Surface)
    const gridRes = isMobile ? 40 : 64;
    const terrainGeo = new THREE.PlaneGeometry(90, 90, gridRes, gridRes);
    terrainGeo.rotateX(-Math.PI / 2);

    const pos = terrainGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const dist = Math.sqrt(x * x + z * z);
      const elevation =
        Math.sin(x * 0.07) * Math.cos(z * 0.07) * 4.8 +
        Math.sin(x * 0.14 + z * 0.1) * 2.4 +
        Math.cos(x * 0.03 - z * 0.05) * 3.2 -
        (dist * 0.08);

      pos.setY(i, elevation);
    }
    terrainGeo.computeVertexNormals();

    const terrainMat = new THREE.MeshBasicMaterial({
      color: 0x14233F, // Primary Brand Navy
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const terrainMesh = new THREE.Mesh(terrainGeo, terrainMat);
    terrainMesh.position.y = -5;
    scene.add(terrainMesh);

    // 2. Point Cloud Representation with Refined Gold & Navy Points
    const particleCount = isMobile ? 1800 : 3800;
    const pointGeo = new THREE.BufferGeometry();
    const pointPositions = new Float32Array(particleCount * 3);
    const pointColors = new Float32Array(particleCount * 3);

    const cNavy = new THREE.Color(0x14233F);
    const cMuted = new THREE.Color(0x808A96);
    const cGold = new THREE.Color(0xB69A5A); // Refined Gold accent

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 85;
      const z = (Math.random() - 0.5) * 85;
      const dist = Math.sqrt(x * x + z * z);

      const baseElev =
        Math.sin(x * 0.07) * Math.cos(z * 0.07) * 4.8 +
        Math.sin(x * 0.14 + z * 0.1) * 2.4 +
        Math.cos(x * 0.03 - z * 0.05) * 3.2 -
        (dist * 0.08);

      const y = baseElev + (Math.random() * 1.0 - 0.5) - 4.8;

      pointPositions[i * 3] = x;
      pointPositions[i * 3 + 1] = y;
      pointPositions[i * 3 + 2] = z;

      // 12% gold survey points, remainder in slate/navy
      const isGold = Math.random() < 0.14;
      const pCol = new THREE.Color();
      if (isGold) {
        pCol.copy(cGold);
      } else {
        const normY = THREE.MathUtils.clamp((y + 10) / 16, 0, 1);
        pCol.lerpColors(cNavy, cMuted, normY);
      }

      pointColors[i * 3] = pCol.r;
      pointColors[i * 3 + 1] = pCol.g;
      pointColors[i * 3 + 2] = pCol.b;
    }

    pointGeo.setAttribute('position', new THREE.BufferAttribute(pointPositions, 3));
    pointGeo.setAttribute('color', new THREE.BufferAttribute(pointColors, 3));

    const pointMat = new THREE.PointsMaterial({
      size: isMobile ? 0.9 : 1.3,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    const pointCloud = new THREE.Points(pointGeo, pointMat);
    scene.add(pointCloud);

    // 3. Architectural Structure Massing (Wireframe Cube and Coordinate Columns)
    const archGroup = new THREE.Group();
    archGroup.position.set(4, 2, 2);
    scene.add(archGroup);

    const bBox = new THREE.BoxGeometry(16, 12, 16);
    const bEdges = new THREE.EdgesGeometry(bBox);
    const bWireMat = new THREE.LineBasicMaterial({
      color: 0xB69A5A, // Refined Gold
      linewidth: 1.5,
      transparent: true,
      opacity: 0.85,
    });
    const archWire = new THREE.LineSegments(bEdges, bWireMat);
    archGroup.add(archWire);

    // Subtle inner floor slabs
    [-3, 1, 5].forEach((fy) => {
      const slabGeo = new THREE.PlaneGeometry(15.8, 15.8);
      slabGeo.rotateX(-Math.PI / 2);
      const slabMat = new THREE.MeshBasicMaterial({
        color: 0x14233F,
        wireframe: true,
        transparent: true,
        opacity: 0.18,
      });
      const slab = new THREE.Mesh(slabGeo, slabMat);
      slab.position.y = fy;
      archGroup.add(slab);
    });

    // 4. Sweeping Gold Laser Scan Beam
    const scanPlaneGeo = new THREE.PlaneGeometry(85, 1.2);
    scanPlaneGeo.rotateX(-Math.PI / 2);
    const scanPlaneMat = new THREE.MeshBasicMaterial({
      color: 0xB69A5A, // Refined Gold
      transparent: true,
      opacity: 0.45,
      side: THREE.DoubleSide,
    });
    const scanBeam = new THREE.Mesh(scanPlaneGeo, scanPlaneMat);
    scanBeam.position.y = -4.5;
    scene.add(scanBeam);

    // Parallax & Mouse
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    if (!isMobile) {
      window.addEventListener('mousemove', onMouseMove, { passive: true });
    }

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (document.hidden) return;

      const elapsed = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Continuous smooth sinusoidal laser sweep
        scanBeam.position.z = Math.sin(elapsed * 0.7) * 35;

        // Subtle camera orbit and parallax
        const targetCamX = 18 + Math.sin(elapsed * 0.12) * 5 + (mouseX * 4);
        const targetCamY = 22 - (mouseY * 3);

        camera.position.x += (targetCamX - camera.position.x) * 0.04;
        camera.position.y += (targetCamY - camera.position.y) * 0.04;
        camera.lookAt(0, -1, 0);

        // Slow scene rotation
        terrainMesh.rotation.y = elapsed * 0.012;
        pointCloud.rotation.y = elapsed * 0.012;
        archGroup.rotation.y = elapsed * 0.018;
      }

      renderer.render(scene, camera);
    };

    animate();

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
      if (!isMobile) {
        window.removeEventListener('mousemove', onMouseMove);
      }
      terrainGeo.dispose();
      terrainMat.dispose();
      pointGeo.dispose();
      pointMat.dispose();
      bBox.dispose();
      bEdges.dispose();
      bWireMat.dispose();
      scanPlaneGeo.dispose();
      scanPlaneMat.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full min-h-[460px] sm:min-h-[560px] lg:min-h-[640px] relative pointer-events-none"
      aria-hidden="true"
    />
  );
};
