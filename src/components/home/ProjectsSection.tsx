import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projectsData';
import { ProjectItem } from '../../types';
import { ArrowUpRight, CheckCircle2, MapPin, Cpu, Layers, ExternalLink } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem>(projectsData[0]);

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden" id="projects-section">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-spatial-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-spatial-cyan font-semibold block">
              Verified Project Evidence
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-offwhite tracking-tight">
              Selected Engineering Case Studies
            </h2>
            <p className="text-base text-offwhite/80 font-light leading-relaxed">
              Explore how our reality capture, Scan-to-BIM, and LiDAR processing workflows solve mission-critical challenges across international infrastructure.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-spatial-cyan hover:text-spatial-cyan-bright transition-colors"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Interactive Case Study Layout: Project Selector Tabs + Detailed Spotlight Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Project Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {projectsData.map((project) => {
              const isSelected = selectedProject.id === project.id;
              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className={`w-full text-left p-5 rounded-xl border transition-all text-left flex flex-col justify-between ${
                    isSelected
                      ? 'bg-navy-900 border-spatial-cyan shadow-[0_0_20px_rgba(82,191,208,0.2)]'
                      : 'bg-navy-950/60 border-navy-800 hover:border-spatial-cyan/40 hover:bg-navy-900/40'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className={isSelected ? 'text-spatial-cyan font-bold' : 'text-muted'}>
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-muted">
                      <MapPin className="w-3 h-3 text-spatial-cyan" />
                      <span>{project.location}</span>
                    </span>
                  </div>

                  <h3 className={`text-base font-display font-bold leading-snug mb-2 ${
                    isSelected ? 'text-offwhite' : 'text-offwhite/80'
                  }`}>
                    {project.title}
                  </h3>

                  <p className="text-xs text-spatial-cyan font-mono">
                    ✦ {project.highlightMetric}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Project Deep Dive Spotlight */}
          <div className="lg:col-span-7">
            <div className="hud-panel p-8 bg-navy-900/90 border border-spatial-cyan/30 rounded-xl space-y-6 corner-reticle">
              
              {/* Header */}
              <div className="space-y-2 pb-6 border-b border-navy-800">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-spatial-cyan uppercase tracking-wider font-semibold">
                    {selectedProject.clientSector}
                  </span>
                  <span className="text-muted">
                    Location: {selectedProject.location}
                  </span>
                </div>
                
                <h3 className="text-2xl font-display font-bold text-offwhite leading-tight">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Challenge & Methodology */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="space-y-2 bg-navy-950/60 p-4 rounded-lg border border-navy-800">
                  <div className="text-xs font-mono text-rose-400 font-semibold uppercase tracking-wider">
                    Client Challenge
                  </div>
                  <p className="text-xs text-offwhite/80 leading-relaxed font-light">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div className="space-y-2 bg-navy-950/60 p-4 rounded-lg border border-navy-800">
                  <div className="text-xs font-mono text-spatial-cyan font-semibold uppercase tracking-wider">
                    Engineering Methodology
                  </div>
                  <p className="text-xs text-offwhite/80 leading-relaxed font-light">
                    {selectedProject.methodology}
                  </p>
                </div>

              </div>

              {/* Verified Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-navy-800">
                {selectedProject.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="space-y-1">
                    <div className="text-lg sm:text-xl font-display font-bold text-spatial-cyan">
                      {stat.value}
                    </div>
                    <div className="text-[10px] font-mono text-muted uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Technology Stack & Deliverables */}
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-mono text-muted uppercase mb-2">
                    Technologies & Software Utilized
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technology.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-xs font-mono bg-navy-950 border border-spatial-cyan/20 rounded text-offwhite/90"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-muted uppercase mb-2">
                    Engineering Deliverables
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-offwhite/80">
                    {selectedProject.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-spatial-cyan shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 flex items-center justify-between border-t border-navy-800">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-spatial-cyan hover:text-white transition-colors"
                >
                  <span>Explore All Project Case Studies</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/contact"
                  className="px-4 py-2 text-xs font-mono font-semibold uppercase text-navy-950 bg-spatial-cyan hover:bg-spatial-cyan-bright transition-all rounded shadow"
                >
                  Discuss Similar Scope
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
