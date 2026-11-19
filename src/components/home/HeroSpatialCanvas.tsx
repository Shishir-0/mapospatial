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

    // 1. Scene, Pure White Background (#FFFFFF) & Atmospheric White Fog
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xFFFFFF); // Pure White Environment
    scene.fog = new THREE.FogExp2(0xFFFFFF, 0.006); // Atmospheric depth on white

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(46, width / height, 0.1, 1000);
    // Positioned to provide clear spatial depth with center of visual interest on center-right
    camera.position.set(32, 28, 56);
    camera.lookAt(18, -2, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: false,
      antialias: !isMobile,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5));
    renderer.setClearColor(0xFFFFFF, 1);
    container.appendChild(renderer.domElement);

    // 2. High-Precision Lighting for Clean White Architectural Rendering
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.5);
    scene.add(ambientLight);

    const directionalKey = new THREE.DirectionalLight(0x14233F, 1.2);
    directionalKey.position.set(50, 70, 40);
    scene.add(directionalKey);

    const subtleGoldRim = new THREE.DirectionalLight(0xB69A5A, 1.6);
    subtleGoldRim.position.set(-30, 50, -20);
    scene.add(subtleGoldRim);

    // 3. Expansive 3D Topographic Terrain Surface (Shifted to balance text zone on left)
    const terrainSpan = isMobile ? 160 : 250;
    const gridRes = isMobile ? 54 : 96;
    const terrainGeo = new THREE.PlaneGeometry(terrainSpan, terrainSpan, gridRes, gridRes);
    terrainGeo.rotateX(-Math.PI / 2);

    const pos = terrainGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const dist = Math.sqrt(x * x + z * z);
      
      // Multi-octave natural geodetic terrain elevation
      const elevation =
        Math.sin(x * 0.045) * Math.cos(z * 0.045) * 6.5 +
        Math.sin(x * 0.09 + z * 0.07) * 3.8 +
        Math.cos(x * 0.02 - z * 0.035) * 4.5 -
        (dist * 0.065);

      pos.setY(i, elevation);
    }
    terrainGeo.computeVertexNormals();

    // Muted grey wireframe (Slate 500) with balanced contrast against #FFFFFF
    const terrainMat = new THREE.MeshBasicMaterial({
      color: 0x64748B,
      wireframe: true,
      transparent: true,
      opacity: 0.30,
    });
    const terrainMesh = new THREE.Mesh(terrainGeo, terrainMat);
    terrainMesh.position.set(16, -6, 0); // Subtle shift to right for text clearance
    scene.add(terrainMesh);

    // 4. Topographic Elevation Contour Lines (Slate grey elevation loops)
    const contourGroup = new THREE.Group();
    contourGroup.position.set(16, 0, 0);
    scene.add(contourGroup);

    const contourIntervals = [-4, -1, 2, 5, 8];
    const contourMat = new THREE.LineBasicMaterial({
      color: 0x334155, // Crisp Slate Contour Line
      transparent: true,
      opacity: 0.50,
    });

    contourIntervals.forEach((level) => {
      const segments: number[] = [];
      const step = terrainSpan / gridRes;
      const halfSpan = terrainSpan / 2;

      for (let ix = -halfSpan; ix < halfSpan; ix += step * 3) {
        for (let iz = -halfSpan; iz < halfSpan; iz += step * 3) {
          const elev =
            Math.sin(ix * 0.045) * Math.cos(iz * 0.045) * 6.5 +
            Math.sin(ix * 0.09 + iz * 0.07) * 3.8 +
            Math.cos(ix * 0.02 - iz * 0.035) * 4.5 -
            (Math.sqrt(ix * ix + iz * iz) * 0.065) - 6;

          if (Math.abs(elev - level) < 0.6) {
            segments.push(ix, level, iz);
            segments.push(ix + step * 2, level, iz + step * 1.5);
          }
        }
      }

      if (segments.length > 0) {
        const cGeo = new THREE.BufferGeometry();
        cGeo.setAttribute('position', new THREE.Float32BufferAttribute(segments, 3));
        const cLines = new THREE.LineSegments(cGeo, contourMat);
        contourGroup.add(cLines);
      }
    });

    // 5. Large Spatial LiDAR Point-Cloud Formations (Biased towards right to keep text legible)
    const particleCount = isMobile ? 4200 : 8800;
    const pointGeo = new THREE.BufferGeometry();
    const pointPositions = new Float32Array(particleCount * 3);
    const pointColors = new Float32Array(particleCount * 3);

    const cNavy = new THREE.Color(0x14233F); // Primary navy
    const cSilver = new THREE.Color(0x475569); // Slate silver
    const cGold = new THREE.Color(0xB69A5A); // Restrained Mapo Gold

    for (let i = 0; i < particleCount; i++) {
      // Compositional density bias: more points clustered on the right half (x > -10)
      const u = Math.random();
      const x = (u * 1.2 - 0.3) * (terrainSpan * 0.5) + 16;
      const z = (Math.random() - 0.5) * (terrainSpan * 0.9);
      const dist = Math.sqrt((x - 16) * (x - 16) + z * z);

      const baseElev =
        Math.sin((x - 16) * 0.045) * Math.cos(z * 0.045) * 6.5 +
        Math.sin((x - 16) * 0.09 + z * 0.07) * 3.8 +
        Math.cos((x - 16) * 0.02 - z * 0.035) * 4.5 -
        (dist * 0.065) - 6;

      const y = baseElev + (Math.random() * 1.6 - 0.8);

      pointPositions[i * 3] = x;
      pointPositions[i * 3 + 1] = y;
      pointPositions[i * 3 + 2] = z;

      // 14% Gold survey points, remainder in navy/silver
      const isGold = Math.random() < 0.14;
      const pCol = new THREE.Color();
      if (isGold) {
        pCol.copy(cGold);
      } else {
        const normY = THREE.MathUtils.clamp((y + 12) / 22, 0, 1);
        pCol.lerpColors(cNavy, cSilver, normY);
      }

      pointColors[i * 3] = pCol.r;
      pointColors[i * 3 + 1] = pCol.g;
      pointColors[i * 3 + 2] = pCol.b;
    }

    pointGeo.setAttribute('position', new THREE.BufferAttribute(pointPositions, 3));
    pointGeo.setAttribute('color', new THREE.BufferAttribute(pointColors, 3));

    const pointMat = new THREE.PointsMaterial({
      size: isMobile ? 1.2 : 1.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    const pointCloud = new THREE.Points(pointGeo, pointMat);
    scene.add(pointCloud);

    // 6. Architectural Massing & Structural Coordinates (Gold wireframe in center-right)
    const archGroup = new THREE.Group();
    archGroup.position.set(28, 1, 6);
    scene.add(archGroup);

    const bBox = new THREE.BoxGeometry(22, 16, 22);
    const bEdges = new THREE.EdgesGeometry(bBox);
    const bWireMat = new THREE.LineBasicMaterial({
      color: 0xB69A5A, // Restrained Mapo Gold wireframe
      transparent: true,
      opacity: 0.90,
      linewidth: 1.5,
    });
    const archWire = new THREE.LineSegments(bEdges, bWireMat);
    archGroup.add(archWire);

    // Floor slabs in soft grey
    [-5, 0, 5].forEach((fy) => {
      const slabGeo = new THREE.PlaneGeometry(21.8, 21.8);
      slabGeo.rotateX(-Math.PI / 2);
      const slabMat = new THREE.MeshBasicMaterial({
        color: 0x64748B,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      const slab = new THREE.Mesh(slabGeo, slabMat);
      slab.position.y = fy;
      archGroup.add(slab);
    });

    // 7. Subtle Survey Scanning Laser Plane (Sweeps continuously across terrain)
    const scanPlaneGeo = new THREE.PlaneGeometry(terrainSpan * 0.85, 1.8);
    scanPlaneGeo.rotateX(-Math.PI / 2);
    const scanPlaneMat = new THREE.MeshBasicMaterial({
      color: 0xB69A5A, // Restrained Gold laser
      transparent: true,
      opacity: 0.45,
      side: THREE.DoubleSide,
    });
    const scanBeam = new THREE.Mesh(scanPlaneGeo, scanPlaneMat);
    scanBeam.position.set(16, -5.5, 0);
    scene.add(scanBeam);

    // 8. Spatial Survey Coordinate Markers (+) on the perimeter
    const markerGroup = new THREE.Group();
    markerGroup.position.set(16, 0, 0);
    scene.add(markerGroup);
    const crossMat = new THREE.LineBasicMaterial({ color: 0x334155, transparent: true, opacity: 0.65 });
    
    for (let mx = -50; mx <= 50; mx += 25) {
      for (let mz = -50; mz <= 50; mz += 25) {
        if (Math.random() < 0.4) continue;
        const crossGeo = new THREE.BufferGeometry();
        const pts = new Float32Array([
          mx - 1.2, -5.8, mz, mx + 1.2, -5.8, mz,
          mx, -5.8, mz - 1.2, mx, -5.8, mz + 1.2,
        ]);
        crossGeo.setAttribute('position', new THREE.BufferAttribute(pts, 3));
        const cross = new THREE.LineSegments(crossGeo, crossMat);
        markerGroup.add(cross);
      }
    }

    // Parallax & Smooth Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    if (!isMobile) {
      window.addEventListener('mousemove', onMouseMove, { passive: true });
    }

    // 9. Ambient Continuous Looping Animation Cycle (12 - 15 second smooth loop)
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (document.hidden) return;

      const elapsed = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Continuous smooth sinusoidal scanning beam sweep
        scanBeam.position.z = Math.sin(elapsed * 0.55) * (terrainSpan * 0.35);

        // 12-second ambient smooth camera orbit & breathing (smooth loop, no abrupt reset)
        const ambientOrbitX = Math.sin(elapsed * 0.12) * 4;
        const ambientOrbitY = Math.cos(elapsed * 0.08) * 2;
        const targetCamX = 32 + ambientOrbitX + (mouseX * 4);
        const targetCamY = 28 + ambientOrbitY - (mouseY * 3);

        camera.position.x += (targetCamX - camera.position.x) * 0.035;
        camera.position.y += (targetCamY - camera.position.y) * 0.035;
        camera.lookAt(18, -2, 0);

        // Slow ambient scene rotation
        terrainMesh.rotation.y = elapsed * 0.015;
        pointCloud.rotation.y = elapsed * 0.015;
        contourGroup.rotation.y = elapsed * 0.015;
        markerGroup.rotation.y = elapsed * 0.015;
        archGroup.rotation.y = elapsed * 0.020;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
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
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-white"
      aria-hidden="true"
    />
  );
};
