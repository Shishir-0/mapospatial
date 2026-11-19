import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../../data/projectsData';

export const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState(projectsData[0]);

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto w-full z-10 relative bg-white" id="projects">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-subtle-border pb-8">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono text-gold font-bold tracking-widest uppercase block">
            [04 // VERIFIED PROJECT EVIDENCE]
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-navy tracking-tight">
            Selected Engineering Projects
          </h2>
          <p className="text-sm text-text-secondary font-light">
            Documented spatial deliverables across rail transit corridors, industrial plant rooms, power transmission networks, and municipal GIS.
          </p>
        </div>

        <Link
          to="/projects"
          className="font-mono text-xs uppercase tracking-wider text-navy hover:text-gold flex items-center gap-1.5 transition-colors font-bold"
        >
          <span>View All Case Studies</span>
          <ArrowUpRight className="w-4 h-4 text-gold" />
        </Link>
      </div>

      {/* Projects Grid: 2 Column Asymmetric Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Project Selector Left Column */}
        <div className="lg:col-span-5 space-y-3">
          {projectsData.map((proj, idx) => {
            const isSelected = activeProject.id === proj.id;
            return (
              <button
                key={proj.id}
                type="button"
                onClick={() => setActiveProject(proj)}
                className={`w-full text-left p-5 border rounded-sm transition-all flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-warm-white border-gold text-navy shadow-md ring-1 ring-gold/20'
                    : 'bg-white border-subtle-border text-text-secondary hover:border-gold/40 hover:bg-warm-white/50'
                }`}
              >
                <div className="flex items-center justify-between font-mono text-[11px] mb-2">
                  <span className={isSelected ? 'text-gold font-bold' : 'text-text-muted'}>
                    0{idx + 1} // {proj.category}
                  </span>
                  <span className="text-text-muted">{proj.location}</span>
                </div>

                <div className={`text-base font-display font-bold mb-2 leading-snug transition-colors ${
                  isSelected ? 'text-navy' : 'text-navy/80 group-hover:text-navy'
                }`}>
                  {proj.title}
                </div>

                <div className="text-xs font-mono text-gold font-semibold">
                  ✦ {proj.highlightMetric}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Project Deep Dive Panel Right Column */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 border border-subtle-border bg-white rounded-sm space-y-6 survey-corner shadow-lg">
            
            {/* Real Project Deliverable Imagery */}
            <div className="relative rounded-sm overflow-hidden border border-subtle-border aspect-[16/9] group bg-warm-white">
              <img 
                src={activeProject.heroImage} 
                alt={activeProject.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent flex items-end p-4">
                <div className="font-mono text-xs text-white flex items-center justify-between w-full">
                  <span className="bg-navy px-3 py-1 rounded-sm border border-gold/40 text-gold font-bold">
                    SECTOR: {activeProject.clientSector}
                  </span>
                  <span className="bg-black/60 px-2 py-1 rounded-sm text-text-muted">
                    {activeProject.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Title & Metadata */}
            <div className="space-y-2 pb-4 border-b border-subtle-border">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-gold uppercase font-bold">
                  {activeProject.category}
                </span>
                <span className="text-text-muted text-[11px]">
                  VERIFIED DELIVERABLE
                </span>
              </div>

              <h3 className="text-2xl font-display font-bold text-navy leading-tight">
                {activeProject.title}
              </h3>
            </div>

            {/* Narrative: Challenge & Methodology */}
            <div className="space-y-4 text-sm text-text-secondary font-light leading-relaxed">
              <div>
                <span className="text-xs font-mono text-navy font-bold uppercase block mb-1">
                  The Engineering Challenge
                </span>
                <p>{activeProject.challenge}</p>
              </div>

              <div>
                <span className="text-xs font-mono text-gold font-bold uppercase block mb-1">
                  Methodology & Technology
                </span>
                <p>{activeProject.methodology}</p>
              </div>
            </div>

            {/* Key Verified Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-warm-white border border-subtle-border rounded-sm font-mono text-xs">
              {activeProject.stats.map((st, sIdx) => (
                <div key={sIdx} className="space-y-0.5">
                  <div className="text-lg font-display font-bold text-navy">{st.value}</div>
                  <div className="text-[10px] text-text-muted uppercase leading-tight">{st.label}</div>
                </div>
              ))}
            </div>

            {/* Deliverables Provided */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-mono text-navy font-bold uppercase block">
                Deliverables Provided
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-navy">
                {activeProject.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 bg-warm-white p-2 rounded-sm border border-subtle-border/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span className="line-clamp-1">{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-subtle-border flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider">
              <span className="text-text-muted text-[11px]">
                METRIC: {activeProject.highlightMetric}
              </span>
              <Link
                to="/projects"
                className="px-5 py-2.5 bg-navy hover:bg-navy-deep text-white border border-navy hover:border-gold transition-all font-semibold rounded-sm shadow-sm flex items-center gap-2"
              >
                <span>View Full Portfolio</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
              </Link>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
