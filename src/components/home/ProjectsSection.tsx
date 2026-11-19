import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../../data/projectsData';

export const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState(projectsData[0]);

  return (
    <section className="py-28 px-6 sm:px-8 max-w-7xl mx-auto w-full z-10 relative" id="projects">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-subtle-border pb-8">
        <div className="space-y-3 max-w-2xl">
          <span className="text-[11px] font-mono text-copper tracking-widest uppercase">
            [05 // VERIFIED PROJECT EVIDENCE]
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-mineral tracking-tight">
            Selected Engineering Projects
          </h2>
          <p className="text-sm text-text-secondary font-light">
            Documented spatial deliverables across rail transit corridors, heritage hospital conversions, petrochemical refineries, and municipal utility networks.
          </p>
        </div>

        <Link
          to="/projects"
          className="font-mono text-xs uppercase tracking-wider text-text-secondary hover:text-mineral flex items-center gap-1.5 transition-colors"
        >
          <span>All Case Studies</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-copper" />
        </Link>
      </div>

      {/* Projects Grid: 2 Column Asymmetric Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Project Selector Left */}
        <div className="lg:col-span-5 space-y-3">
          {projectsData.map((proj, idx) => {
            const isSelected = activeProject.id === proj.id;
            return (
              <button
                key={proj.id}
                type="button"
                onClick={() => setActiveProject(proj)}
                className={`w-full text-left p-5 border transition-all text-left flex flex-col justify-between ${
                  isSelected
                    ? 'bg-carbon border-copper text-mineral shadow-[0_0_15px_rgba(194,122,80,0.15)]'
                    : 'bg-basalt/60 border-subtle-border/70 text-text-secondary hover:border-subtle-border hover:bg-carbon/40'
                }`}
              >
                <div className="flex items-center justify-between font-mono text-[11px] mb-2">
                  <span className={isSelected ? 'text-copper font-bold' : 'text-text-muted'}>
                    0{idx + 1} // {proj.category}
                  </span>
                  <span className="text-text-muted">{proj.location}</span>
                </div>

                <div className={`text-base font-display font-bold mb-2 leading-snug transition-colors ${
                  isSelected ? 'text-mineral' : 'text-text-secondary'
                }`}>
                  {proj.title}
                </div>

                <div className="text-xs font-mono text-copper">
                  ✦ {proj.highlightMetric}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Project Deep Dive Panel Right */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 border border-subtle-border bg-carbon/90 backdrop-blur-md space-y-6 survey-corner">
            
            <div className="space-y-2 pb-6 border-b border-subtle-border">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-copper uppercase font-semibold">
                  {activeProject.clientSector}
                </span>
                <span className="text-text-muted">
                  Location: {activeProject.location}
                </span>
              </div>

              <h3 className="text-2xl font-display font-bold text-mineral leading-tight">
                {activeProject.title}
              </h3>
            </div>

            <div className="space-y-4 text-sm text-text-secondary font-light leading-relaxed">
              <div>
                <span className="text-xs font-mono text-text-muted uppercase block mb-1">
                  The Engineering Challenge
                </span>
                <p>{activeProject.challenge}</p>
              </div>

              <div>
                <span className="text-xs font-mono text-copper uppercase block mb-1">
                  Methodology & Technology
                </span>
                <p>{activeProject.methodology}</p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-graphite/60 border border-subtle-border font-mono text-xs">
              {activeProject.stats.map((st, sIdx) => (
                <div key={sIdx} className="space-y-1">
                  <div className="text-lg font-display font-bold text-copper">{st.value}</div>
                  <div className="text-[10px] text-text-muted uppercase">{st.label}</div>
                </div>
              ))}
            </div>

            {/* Deliverables */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono text-text-muted uppercase block">
                Deliverables Provided
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-mineral">
                {activeProject.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-copper" />
                    <span className="line-clamp-1">{del}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-subtle-border flex items-center justify-between font-mono text-xs uppercase tracking-wider">
              <span className="text-text-muted text-[11px]">
                VERIFIED METRIC // ±3MM TOLERANCE
              </span>
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-mineral text-basalt hover:bg-white transition-all font-semibold"
              >
                Discuss Similar Project
              </Link>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
