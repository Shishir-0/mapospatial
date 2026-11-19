import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CredentialsSection } from '../components/home/CredentialsSection';
import { CapabilitiesSection } from '../components/home/CapabilitiesSection';
import { RealityComparison } from '../components/home/RealityComparison';
import { Interactive3DViewer } from '../components/home/Interactive3DViewer';
import { IndustriesSection } from '../components/home/IndustriesSection';
import { ProjectsSection } from '../components/home/ProjectsSection';
import { TechStackSection } from '../components/home/TechStackSection';
import { GlobalReachSection } from '../components/home/GlobalReachSection';
import { ConversionCTA } from '../components/home/ConversionCTA';
import { Compass, Box } from 'lucide-react';

interface HomePageProps {
  onOpenEstimator?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenEstimator }) => {
  return (
    <main id="main-content" className="relative overflow-hidden">
      
      {/* 1. Cinematic Hero Section */}
      <HeroSection onOpenEstimator={onOpenEstimator} />

      {/* 2. Company Credentials & Spatial Intelligence Introduction */}
      <CredentialsSection />

      {/* 3. Core Capabilities Presentation */}
      <CapabilitiesSection />

      {/* 4. Signature Feature: Reality to Digital Intelligence (Point Cloud vs BIM Slider) */}
      <RealityComparison />

      {/* 5. Signature Feature: Interactive 3D Digital Twin & LiDAR Inspector */}
      <section className="py-24 bg-navy-900 border-t border-spatial-cyan/15 relative overflow-hidden" id="interactive-3d">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-navy-950 border border-spatial-cyan/30 text-spatial-cyan text-xs font-mono uppercase tracking-wider">
                <Box className="w-3.5 h-3.5" />
                <span>Interactive WebGL Inspection Engine</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-offwhite tracking-tight">
                Navigable 3D Spatial Environment
              </h2>
              <p className="text-base text-offwhite/80 font-light leading-relaxed">
                Interact with this real-time 3D spatial asset. Switch between classified LiDAR returns, structural BIM wireframes, and shaded digital twin surface representations.
              </p>
            </div>
            <div className="text-xs font-mono text-spatial-cyan flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-spatial-cyan animate-pulse"></span>
              <span>ZERO-PLUGIN BROWSER STREAMING</span>
            </div>
          </div>

          <Interactive3DViewer />
        </div>
      </section>

      {/* 6. Industries Served */}
      <IndustriesSection />

      {/* 7. Selected Projects & Engineering Case Studies */}
      <ProjectsSection />

      {/* 8. Technical Expertise & Standards Toolchain */}
      <TechStackSection />

      {/* 9. Global Reach & International Network */}
      <GlobalReachSection />

      {/* 10. Final Conversion Section */}
      <ConversionCTA onOpenEstimator={onOpenEstimator} />

    </main>
  );
};
