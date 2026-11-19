import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { ProjectItem } from '../types';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { 
  CheckCircle2, 
  MapPin, 
  Layers, 
  ExternalLink, 
  Search, 
  Filter, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Selected Projects & Case Studies | Mapo Spatial';
  }, []);

  const categories = ['all', 'LiDAR & Transportation', 'Scan to BIM & AEC', 'Digital Twin & Plant Engineering', 'GIS & Utility Mapping'];

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-24 pb-20 bg-navy-950 min-h-screen text-offwhite relative">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-spatial-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: 'Engineering Projects' }]} />

        {/* Hero Banner */}
        <div className="py-12 border-b border-spatial-cyan/20">
          <div className="max-w-3xl space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-navy-900 border border-spatial-cyan/30 text-spatial-cyan text-xs font-mono uppercase tracking-wider">
              <span>Verified Case Studies</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-offwhite tracking-tight leading-[1.1]">
              Spatial Engineering Portfolio
            </h1>

            <p className="text-lg text-offwhite/85 font-light leading-relaxed pt-2">
              Explore documented engineering outcomes across intercity rail corridors, heritage hospital BIM conversions, petrochemical plant digital twins, and metropolitan utility GIS.
            </p>

          </div>
        </div>

        {/* Filter Categories */}
        <div className="py-8 flex flex-wrap items-center gap-2 border-b border-navy-800">
          <span className="text-xs font-mono text-muted uppercase mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-spatial-cyan" />
            <span>Filter Sector:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? 'bg-spatial-cyan text-navy-950 font-bold border border-spatial-cyan'
                  : 'bg-navy-900/80 text-offwhite/80 border border-navy-700 hover:border-spatial-cyan/40'
              }`}
            >
              {cat === 'all' ? 'All Projects' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="hud-panel p-7 sm:p-8 bg-navy-900/80 border border-spatial-cyan/20 rounded-2xl hover:border-spatial-cyan/50 transition-all flex flex-col justify-between group corner-reticle"
            >
              <div className="space-y-4">
                
                {/* Header */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-spatial-cyan font-semibold">
                    {project.category}
                  </span>
                  <span className="flex items-center gap-1 text-muted">
                    <MapPin className="w-3 h-3 text-spatial-cyan" />
                    <span>{project.location}</span>
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-display font-bold text-offwhite group-hover:text-spatial-cyan transition-colors">
                  {project.title}
                </h2>

                <div className="p-3 rounded-lg bg-navy-950/80 border-l-2 border-spatial-cyan text-xs font-mono text-spatial-cyan">
                  ✦ {project.highlightMetric}
                </div>

                <p className="text-xs text-offwhite/80 leading-relaxed font-light line-clamp-3">
                  {project.challenge}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-3 py-3 border-y border-navy-800 font-mono text-xs">
                  {project.stats.slice(0, 2).map((st, idx) => (
                    <div key={idx}>
                      <span className="text-muted text-[10px] uppercase block">{st.label}</span>
                      <span className="text-offwhite font-bold">{st.value}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technology.slice(0, 3).map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[10px] font-mono bg-navy-950 rounded text-offwhite/75 border border-navy-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-navy-800/80 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase text-spatial-cyan hover:text-white transition-colors"
                >
                  <span>Read Full Case Study</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                <Link
                  to="/contact"
                  className="px-3.5 py-1.5 text-xs font-mono uppercase bg-navy-950 hover:bg-navy-800 text-offwhite border border-spatial-cyan/30 rounded transition-colors"
                >
                  Discuss Scope
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Case Study Modal Detail Viewer */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md">
            <div className="hud-panel relative w-full max-w-3xl bg-navy-900 border border-spatial-cyan/40 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6 corner-reticle">
              
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 text-offwhite/70 hover:text-spatial-cyan text-sm font-mono px-2 py-1 rounded bg-navy-950 border border-navy-700"
              >
                [Close ESC]
              </button>

              <div className="space-y-2 pb-4 border-b border-navy-800 pr-12">
                <span className="text-xs font-mono text-spatial-cyan uppercase">
                  {activeModalProject.category} // {activeModalProject.location}
                </span>
                <h2 className="text-2xl font-display font-bold text-offwhite">
                  {activeModalProject.title}
                </h2>
                <div className="text-xs font-mono text-muted">
                  Client Sector: {activeModalProject.clientSector}
                </div>
              </div>

              <div className="space-y-4 text-sm text-offwhite/85 font-light leading-relaxed">
                <div>
                  <h3 className="text-xs font-mono text-rose-400 uppercase font-semibold mb-1">
                    The Challenge
                  </h3>
                  <p>{activeModalProject.challenge}</p>
                </div>

                <div>
                  <h3 className="text-xs font-mono text-spatial-cyan uppercase font-semibold mb-1">
                    Engineering Methodology & Execution
                  </h3>
                  <p>{activeModalProject.methodology}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-navy-950 border border-navy-800">
                {activeModalProject.stats.map((st, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-lg font-display font-bold text-spatial-cyan">
                      {st.value}
                    </div>
                    <div className="text-[10px] font-mono text-muted uppercase">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Deliverables */}
              <div>
                <h3 className="text-xs font-mono text-spatial-cyan uppercase font-semibold mb-2">
                  Client Deliverables
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-offwhite/80">
                  {activeModalProject.deliverables.map((d, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-spatial-cyan shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-navy-800 flex items-center justify-between">
                <span className="text-xs font-mono text-muted">
                  Strictly Verified Engineering Outcome
                </span>
                <Link
                  to="/contact"
                  className="px-5 py-2.5 text-xs font-mono font-bold uppercase text-navy-950 bg-spatial-cyan hover:bg-spatial-cyan-bright rounded shadow"
                >
                  Request Similar Project Proposal
                </Link>
              </div>

            </div>
          </div>
        )}

      </div>

    </div>
  );
};
