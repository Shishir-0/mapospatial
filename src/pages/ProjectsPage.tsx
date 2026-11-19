import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { ProjectItem } from '../types';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { ArrowUpRight } from 'lucide-react';

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
    <div className="pt-28 pb-24 px-6 sm:px-8 max-w-7xl mx-auto w-full z-10 relative">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Engineering Projects' }]} />

      {/* Hero Banner */}
      <div className="py-12 border-b border-subtle-border">
        <div className="max-w-3xl space-y-4">
          
          <span className="text-[11px] font-mono text-copper tracking-widest uppercase block">
            [DOCUMENTED DELIVERABLES]
          </span>

          <h1 className="text-4xl sm:text-6xl font-display font-bold text-mineral leading-[1.08] tracking-tight">
            Spatial Engineering Portfolio
          </h1>

          <p className="text-base sm:text-lg text-text-secondary font-light leading-relaxed pt-2">
            Explore verified engineering outcomes across intercity rail corridors, heritage hospital BIM conversions, petrochemical refinery digital twins, and metropolitan utility GIS.
          </p>

        </div>
      </div>

      {/* Filter Categories */}
      <div className="py-8 flex flex-wrap items-center gap-2 border-b border-subtle-border font-mono text-xs">
        <span className="text-text-muted uppercase mr-2">FILTER DISCIPLINE:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 transition-all border ${
              selectedCategory === cat
                ? 'bg-carbon text-mineral border-copper font-semibold'
                : 'bg-basalt/60 text-text-muted border-subtle-border hover:border-text-muted'
            }`}
          >
            {cat === 'all' ? 'All Disciplines' : cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((proj, idx) => (
          <div
            key={proj.id}
            className="p-8 border border-subtle-border bg-carbon/90 backdrop-blur-md space-y-5 survey-corner flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono text-[11px]">
                <span className="text-copper">0{idx + 1} // {proj.category}</span>
                <span className="text-text-muted">{proj.location}</span>
              </div>

              <h2 className="text-2xl font-display font-bold text-mineral leading-snug">
                {proj.title}
              </h2>

              <div className="p-3 bg-graphite/60 border border-subtle-border font-mono text-xs text-copper">
                ✦ {proj.highlightMetric}
              </div>

              <p className="text-xs text-text-secondary font-light leading-relaxed line-clamp-3">
                {proj.challenge}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 py-3 border-y border-subtle-border font-mono text-xs">
                {proj.stats.slice(0, 2).map((st, sIdx) => (
                  <div key={sIdx}>
                    <span className="text-text-muted text-[10px] uppercase block">{st.label}</span>
                    <span className="text-mineral font-bold">{st.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-subtle-border flex items-center justify-between font-mono text-xs uppercase tracking-wider">
              <button
                type="button"
                onClick={() => setActiveModalProject(proj)}
                className="text-mineral hover:text-copper flex items-center gap-1 transition-colors"
              >
                <span>Full Case Deck</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-copper" />
              </button>

              <Link
                to="/contact"
                className="px-3.5 py-1.5 bg-graphite hover:bg-carbon text-mineral border border-subtle-border hover:border-copper transition-all"
              >
                Discuss Scope
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Detail View */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-basalt/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-carbon border border-copper p-8 sm:p-10 max-h-[90vh] overflow-y-auto space-y-6 survey-corner">
            
            <button
              type="button"
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 text-text-muted hover:text-mineral font-mono text-xs px-2 py-1 border border-subtle-border"
            >
              [CLOSE ESC]
            </button>

            <div className="space-y-2 pb-4 border-b border-subtle-border pr-12 font-mono text-xs">
              <span className="text-copper uppercase">
                {activeModalProject.category} // {activeModalProject.location}
              </span>
              <h2 className="text-2xl font-display font-bold text-mineral">
                {activeModalProject.title}
              </h2>
              <div className="text-text-muted">
                Client Sector: {activeModalProject.clientSector}
              </div>
            </div>

            <div className="space-y-4 text-xs font-light text-text-secondary leading-relaxed">
              <div>
                <span className="font-mono text-text-muted uppercase block mb-1">
                  The Engineering Challenge
                </span>
                <p>{activeModalProject.challenge}</p>
              </div>

              <div>
                <span className="font-mono text-copper uppercase block mb-1">
                  Methodology & Technology
                </span>
                <p>{activeModalProject.methodology}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-graphite/60 border border-subtle-border font-mono text-xs">
              {activeModalProject.stats.map((st, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-lg font-display font-bold text-copper">{st.value}</div>
                  <div className="text-[10px] text-text-muted uppercase">{st.label}</div>
                </div>
              ))}
            </div>

            <div>
              <span className="text-xs font-mono text-copper uppercase block mb-2">
                Client Deliverables
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-mineral">
                {activeModalProject.deliverables.map((d, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-copper">•</span>
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-subtle-border flex items-center justify-between font-mono text-xs uppercase tracking-wider">
              <span className="text-text-muted text-[11px]">VERIFIED OUTCOME</span>
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-mineral text-basalt hover:bg-white transition-all font-semibold"
              >
                Request Proposal
              </Link>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
