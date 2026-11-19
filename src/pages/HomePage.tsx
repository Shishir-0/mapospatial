import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { IntroSection } from '../components/home/IntroSection';
import { CapabilitiesSection } from '../components/home/CapabilitiesSection';
import { RealityWorkflowSection } from '../components/home/RealityWorkflowSection';
import { IndustriesSection } from '../components/home/IndustriesSection';
import { ProjectsSection } from '../components/home/ProjectsSection';
import { AboutSection } from '../components/home/AboutSection';
import { ConversionSection } from '../components/home/ConversionSection';

export const HomePage: React.FC = () => {
  return (
    <main id="main-content" className="relative">
      
      {/* 01. Cinematic Hero */}
      <HeroSection />

      {/* 02. Spatial Intelligence Philosophy Introduction */}
      <IntroSection />

      {/* 03. Interactive Capabilities System (Syncs live 3D modes on hover/select) */}
      <CapabilitiesSection />

      {/* 04. Signature Workflow: From Reality to Digital (3-Stage 3D Morph) */}
      <RealityWorkflowSection />

      {/* 05. Industries We Transform (Editorial Presentation) */}
      <IndustriesSection />

      {/* 06. Selected Projects & Technical Proof */}
      <ProjectsSection />

      {/* 07. About Mapo Spatial */}
      <AboutSection />

      {/* 08. Concluding Conversion Experience */}
      <ConversionSection />

    </main>
  );
};
