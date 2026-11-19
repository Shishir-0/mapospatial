import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { ProjectItem } from '../types';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { ArrowUpRight, CheckCircle2, X, Image as ImageIcon } from 'lucide-react';

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
    <div className="pt-28 pb-24 px-6 sm:px-8 max-w-7xl mx-auto w-full z-10 relative bg-white">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Engineering Projects' }]} />

      {/* Hero Banner */}
      <div className="py-12 border-b border-subtle-border">
        <div className="max-w-3xl space-y-4">
          
          <span className="text-xs font-mono text-gold font-bold tracking-widest uppercase block">
            [DOCUMENTED DELIVERABLES & GROUND-TRUTH ASSETS]
          </span>

          <h1 className="text-4xl sm:text-6xl font-display font-bold text-navy leading-[1.08] tracking-tight">
            Spatial Engineering Portfolio
          </h1>

          <p className="text-base sm:text-lg text-text-secondary font-light leading-relaxed pt-2">
            Explore verified engineering outcomes across intercity rail corridors, heritage building conversions, petrochemical refinery digital twins, and metropolitan utility GIS.
          </p>

        </div>
      </div>

      {/* Filter Categories */}
      <div className="py-6 flex flex-wrap items-center gap-2 border-b border-subtle-border font-mono text-xs">
        <span className="text-text-muted uppercase mr-2 font-semibold">FILTER DISCIPLINE:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-2 transition-all border rounded-sm ${
              selectedCategory === cat
                ? 'bg-navy text-white border-navy font-bold shadow-sm'
                : 'bg-warm-white text-navy border-subtle-border hover:border-gold hover:bg-white'
            }`}
          >
            {cat === 'all' ? 'All Disciplines' : cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((proj, idx) => (
          <div
            key={proj.id}
            className="border border-subtle-border bg-white rounded-sm overflow-hidden flex flex-col justify-between survey-corner shadow-md hover:shadow-xl transition-all duration-300 group"
          >
            {/* Visual Hero Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-warm-white border-b border-subtle-border">
              <img 
                src={proj.heroImage} 
                alt={proj.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent flex items-end p-5">
                <div className="font-mono text-xs text-white flex items-center justify-between w-full">
                  <span className="bg-navy px-3 py-1 rounded-sm border border-gold/40 text-gold font-bold">
                    0{idx + 1} // {proj.category}
                  </span>
                  <span className="bg-black/60 px-2.5 py-1 rounded-sm text-slate-200">
                    {proj.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-5 flex-grow flex flex-col justify-between">
              
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs text-text-muted">
                  <span className="uppercase text-gold font-bold">{proj.clientSector}</span>
                  <span>TOLERANCE: ±3MM</span>
                </div>

                <h2 className="text-2xl font-display font-bold text-navy leading-snug group-hover:text-navy transition-colors">
                  {proj.title}
                </h2>

                <div className="p-3 bg-warm-white border border-subtle-border rounded-sm font-mono text-xs text-navy font-semibold flex items-center gap-2">
                  <span className="text-gold font-bold">✦</span>
                  <span>{proj.highlightMetric}</span>
                </div>

                <p className="text-xs text-text-secondary font-light leading-relaxed line-clamp-3">
                  {proj.challenge}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 py-3 border-y border-subtle-border font-mono text-xs bg-warm-white/50 p-3 rounded-sm">
                {proj.stats.slice(0, 2).map((st, sIdx) => (
                  <div key={sIdx}>
                    <span className="text-text-muted text-[10px] uppercase block font-medium">{st.label}</span>
                    <span className="text-navy font-bold text-sm">{st.value}</span>
                  </div>
                ))}
              </div>

              {/* Deliverables snippet */}
              <div className="space-y-1.5 font-mono text-xs text-navy">
                <span className="text-[10px] text-text-muted uppercase font-bold block">Key Deliverables</span>
                <div className="flex flex-wrap gap-1.5">
                  {proj.deliverables.slice(0, 2).map((d, dIdx) => (
                    <span key={dIdx} className="bg-warm-white px-2 py-1 rounded-sm text-[11px] border border-subtle-border text-navy line-clamp-1">
                      • {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-4 border-t border-subtle-border flex items-center justify-between font-mono text-xs uppercase tracking-wider">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(proj)}
                  className="text-navy hover:text-gold flex items-center gap-1.5 font-bold transition-colors"
                >
                  <ImageIcon className="w-4 h-4 text-gold" />
                  <span>View Case Study & Deliverables</span>
                </button>

                <Link
                  to="/contact"
                  className="px-4 py-2 bg-navy hover:bg-navy-deep text-white border border-navy hover:border-gold transition-all rounded-sm font-semibold text-[11px]"
                >
                  Discuss Scope
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Modal Detail View with Full Image Gallery */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-white border border-gold p-6 sm:p-10 max-h-[92vh] overflow-y-auto space-y-6 rounded-sm shadow-2xl">
            
            <button
              type="button"
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 text-text-muted hover:text-navy font-mono text-xs p-1.5 border border-subtle-border rounded-sm hover:border-navy transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-navy" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pb-4 border-b border-subtle-border pr-12 font-mono text-xs">
              <span className="text-gold font-bold uppercase">
                {activeModalProject.category} // {activeModalProject.location}
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy">
                {activeModalProject.title}
              </h2>
              <div className="text-text-muted">
                Client Sector: <span className="text-navy font-semibold">{activeModalProject.clientSector}</span>
              </div>
            </div>

            {/* Gallery Section */}
            {activeModalProject.gallery && activeModalProject.gallery.length > 0 && (
              <div className="space-y-3">
                <div className="text-xs font-mono text-navy font-bold uppercase tracking-wider">
                  Verified Engineering Assets & Progression
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeModalProject.gallery.map((img, gIdx) => (
                    <div key={gIdx} className="border border-subtle-border rounded-sm overflow-hidden bg-warm-white">
                      <img 
                        src={img.url} 
                        alt={img.caption} 
                        className="w-full aspect-[16/10] object-cover"
                      />
                      <div className="p-2.5 bg-warm-white font-mono text-[10px] text-navy border-t border-subtle-border flex justify-between">
                        <span className="font-semibold">{img.caption}</span>
                        <span className="text-gold uppercase font-bold">{img.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Narrative: Challenge & Methodology */}
            <div className="space-y-4 text-xs font-light text-text-secondary leading-relaxed">
              <div>
                <span className="font-mono text-navy font-bold uppercase block mb-1">
                  The Engineering Challenge
                </span>
                <p className="text-sm">{activeModalProject.challenge}</p>
              </div>

              <div>
                <span className="font-mono text-gold font-bold uppercase block mb-1">
                  Methodology & Technology
                </span>
                <p className="text-sm">{activeModalProject.methodology}</p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-warm-white border border-subtle-border rounded-sm font-mono text-xs">
              {activeModalProject.stats.map((st, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-lg font-display font-bold text-navy">{st.value}</div>
                  <div className="text-[10px] text-text-muted uppercase leading-tight">{st.label}</div>
                </div>
              ))}
            </div>

            {/* Deliverables List */}
            <div>
              <span className="text-xs font-mono text-navy font-bold uppercase block mb-2">
                Client Deliverables Provided
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-navy">
                {activeModalProject.deliverables.map((d, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-warm-white border border-subtle-border rounded-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-subtle-border flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider">
              <span className="text-text-muted text-[11px]">VERIFIED OUTCOME // ±3MM SURVEY ACCURACY</span>
              <Link
                to="/contact"
                className="px-6 py-3 bg-navy hover:bg-navy-deep text-white border border-navy hover:border-gold transition-all font-semibold rounded-sm shadow-md"
              >
                Discuss Similar Project
              </Link>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
