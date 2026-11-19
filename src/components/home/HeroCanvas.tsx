import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const HeroCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x101E32, 0.018);

    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 22, 45);
    camera.lookAt(0, 0, 0);

    const isMobile = window.innerWidth < 768;
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.75));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 1. Terrain Mesh (Topographical wireframe grid)
    const gridX = isMobile ? 36 : 64;
    const gridZ = isMobile ? 36 : 64;
    const terrainGeo = new THREE.PlaneGeometry(90, 90, gridX, gridZ);
    terrainGeo.rotateX(-Math.PI / 2);

    const pos = terrainGeo.attributes.position;
    const originalY: number[] = [];
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      // Realistic multi-frequency elevation function
      const distFromCenter = Math.sqrt(x * x + z * z);
      const elevation = 
        Math.sin(x * 0.08) * Math.cos(z * 0.08) * 4.5 +
        Math.sin(x * 0.16 + z * 0.12) * 2.2 +
        Math.cos(x * 0.04 - z * 0.05) * 3.5 -
        (distFromCenter * 0.08);

      pos.setY(i, elevation);
      originalY.push(elevation);
    }
    terrainGeo.computeVertexNormals();

    const terrainMat = new THREE.MeshBasicMaterial({
      color: 0x223854,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const terrainMesh = new THREE.Mesh(terrainGeo, terrainMat);
    terrainMesh.position.y = -6;
    scene.add(terrainMesh);

    // 2. LiDAR Point Cloud
    const particleCount = isMobile ? 1800 : 4200;
    const pointGeo = new THREE.BufferGeometry();
    const pointPositions = new Float32Array(particleCount * 3);
    const pointColors = new Float32Array(particleCount * 3);

    const colorLow = new THREE.Color(0x182B42);     // deep navy
    const colorMid = new THREE.Color(0x52BFD0);     // spatial cyan
    const colorHigh = new THREE.Color(0x9AF0FF);    // bright elevation

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 85;
      const z = (Math.random() - 0.5) * 85;
      
      const dist = Math.sqrt(x * x + z * z);
      const baseElev =
        Math.sin(x * 0.08) * Math.cos(z * 0.08) * 4.5 +
        Math.sin(x * 0.16 + z * 0.12) * 2.2 +
        Math.cos(x * 0.04 - z * 0.05) * 3.5 -
        (dist * 0.08);

      // Add LiDAR scatter jitter
      const y = baseElev + (Math.random() * 0.9 - 0.45) - 6;

      pointPositions[i * 3] = x;
      pointPositions[i * 3 + 1] = y;
      pointPositions[i * 3 + 2] = z;

      // Color mapping by normalized elevation
      const normY = THREE.MathUtils.clamp((y + 10) / 16, 0, 1);
      const pointColor = new THREE.Color();
      if (normY < 0.5) {
        pointColor.lerpColors(colorLow, colorMid, normY * 2);
      } else {
        pointColor.lerpColors(colorMid, colorHigh, (normY - 0.5) * 2);
      }

      pointColors[i * 3] = pointColor.r;
      pointColors[i * 3 + 1] = pointColor.g;
      pointColors[i * 3 + 2] = pointColor.b;
    }

    pointGeo.setAttribute('position', new THREE.BufferAttribute(pointPositions, 3));
    pointGeo.setAttribute('color', new THREE.BufferAttribute(pointColors, 3));

    // Canvas circular particle texture
    const createPointTexture = () => {
      const c = document.createElement('canvas');
      c.width = 32;
      c.height = 32;
      const ctx = c.getContext('2d');
      if (ctx) {
        const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        grad.addColorStop(0, 'rgba(255,255,255,1)');
        grad.addColorStop(0.3, 'rgba(82,191,208,0.9)');
        grad.addColorStop(0.8, 'rgba(82,191,208,0.2)');
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 32, 32);
      }
      return new THREE.CanvasTexture(c);
    };

    const pointMat = new THREE.PointsMaterial({
      size: isMobile ? 0.75 : 1.1,
      vertexColors: true,
      map: createPointTexture(),
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const pointCloud = new THREE.Points(pointGeo, pointMat);
    scene.add(pointCloud);

    // 3. Sweeping LiDAR Laser Scan Line Plane
    const scanPlaneGeo = new THREE.PlaneGeometry(90, 2);
    scanPlaneGeo.rotateX(-Math.PI / 2);
    const scanPlaneMat = new THREE.MeshBasicMaterial({
      color: 0x52BFD0,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });
    const scanBeam = new THREE.Mesh(scanPlaneGeo, scanPlaneMat);
    scanBeam.position.y = -5.5;
    scene.add(scanBeam);

    // Mouse parallax tracking
    let targetX = 0;
    let targetY = 22;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    // Animation loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Continuous subtle camera drift (seamless sinusoidal loop)
        const driftAngle = elapsedTime * 0.08;
        targetX = Math.sin(driftAngle) * 6 + mouseX * 8;
        targetY = 22 - mouseY * 4;

        camera.position.x += (targetX - camera.position.x) * 0.03;
        camera.position.y += (targetY - camera.position.y) * 0.03;
        camera.lookAt(0, -4, 0);

        // Slow terrain rotation
        terrainMesh.rotation.y = elapsedTime * 0.02;
        pointCloud.rotation.y = elapsedTime * 0.02;

        // LiDAR laser sweep line oscillation
        scanBeam.position.z = Math.sin(elapsedTime * 0.8) * 35;
        scanBeam.rotation.y = elapsedTime * 0.02;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      terrainGeo.dispose();
      terrainMat.dispose();
      pointGeo.dispose();
      pointMat.dispose();
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
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      {/* Fallback if WebGL is unavailable */}
      {!hasWebGL && (
        <div className="absolute inset-0 bg-navy-950 flex items-center justify-center">
          <div className="w-full h-full bg-spatial-grid opacity-30 animate-pulse-slow" />
        </div>
      )}

      {/* Ambient gradient vignettes */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-950/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-transparent to-navy-950/80" />
    </div>
  );
};
