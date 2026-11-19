import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { ProjectItem } from '../types';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { X, Image as ImageIcon } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Selected Projects & Case Studies | Mapo Spatial';
  }, []);

  useEffect(() => {
    if (slug) {
      const matched = projectsData.find(p => p.slug === slug || p.id === slug);
      if (matched) {
        setActiveModalProject(matched);
      }
    }
  }, [slug]);

  const categories = ['all', 'LiDAR & Transportation', 'Scan to BIM & AEC', 'Digital Twin & Plant Engineering', 'GIS & Utility Mapping'];

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-28 pb-24 px-6 sm:px-8 max-w-7xl mx-auto w-full z-10 relative bg-[#FFFFFF] text-[#425168]">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Engineering Projects' }]} />

      {/* Hero Banner */}
      <div className="py-12 border-b border-[#DCE1E7]">
        <div className="max-w-3xl space-y-4">
          
          <span className="text-[13px] font-mono text-[#596579] font-bold tracking-[0.08em] uppercase block">
            [DOCUMENTED DELIVERABLES & GROUND-TRUTH ASSETS]
          </span>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-[#14233F] leading-[1.08] tracking-tight">
            Spatial Engineering Portfolio
          </h1>

          <p className="text-base sm:text-lg text-[#425168] font-normal leading-relaxed pt-2">
            Explore verified engineering outcomes across intercity rail corridors, heritage building conversions, petrochemical refinery digital twins, and metropolitan utility GIS.
          </p>

        </div>
      </div>

      {/* Filter Categories */}
      <div className="py-6 flex flex-wrap items-center gap-2.5 border-b border-[#DCE1E7] font-mono text-xs">
        <span className="text-[#596579] uppercase mr-2 font-bold text-[12px]">FILTER DISCIPLINE:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 transition-all border rounded-sm font-semibold ${
              selectedCategory === cat
                ? 'bg-[#14233F] text-white border-[#14233F] font-bold shadow-xs'
                : 'bg-[#F7F8FA] text-[#14233F] border-[#DCE1E7] hover:border-[#B69A5A] hover:bg-[#FFFFFF]'
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
            className="border border-[#DCE1E7] bg-[#FFFFFF] rounded-sm overflow-hidden flex flex-col justify-between survey-corner shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            {/* Visual Hero Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[#F7F8FA] border-b border-[#DCE1E7]">
              <img 
                src={proj.heroImage} 
                alt={proj.title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14233F]/90 via-[#14233F]/20 to-transparent flex items-end p-5">
                <div className="font-mono text-xs text-white flex items-center justify-between w-full">
                  <span className="bg-[#14233F] px-3 py-1 rounded-sm border border-[#B69A5A]/50 text-[#B69A5A] font-bold">
                    0{idx + 1} // {proj.category}
                  </span>
                  <span className="bg-black/70 px-2.5 py-1 rounded-sm text-slate-200">
                    {proj.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-5 flex-grow flex flex-col justify-between">
              
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs text-[#536174]">
                  <span className="uppercase text-[#596579] font-bold">{proj.clientSector}</span>
                  <span className="font-bold text-[#14233F]">TOLERANCE: ±3MM</span>
                </div>

                <h2 className="text-2xl font-display font-extrabold text-[#14233F] leading-snug">
                  {proj.title}
                </h2>

                <div className="p-3 bg-[#F7F8FA] border border-[#DCE1E7] rounded-sm font-mono text-xs text-[#14233F] font-bold flex items-center gap-2">
                  <span className="text-[#B69A5A] font-bold">✦</span>
                  <span>{proj.highlightMetric}</span>
                </div>

                <p className="text-sm text-[#425168] font-normal leading-relaxed">
                  {proj.challenge}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 py-3 border-y border-[#DCE1E7] font-mono text-xs bg-[#F7F8FA] p-3 rounded-sm">
                {proj.stats.slice(0, 2).map((st, sIdx) => (
                  <div key={sIdx}>
                    <span className="text-[#596579] text-[11px] uppercase block font-bold">{st.label}</span>
                    <span className="text-[#14233F] font-extrabold text-base">{st.value}</span>
                  </div>
                ))}
              </div>

              {/* Deliverables snippet */}
              <div className="space-y-1.5 font-mono text-xs text-[#14233F]">
                <span className="text-[11px] text-[#596579] uppercase font-bold block">Key Deliverables</span>
                <div className="flex flex-wrap gap-1.5">
                  {proj.deliverables.slice(0, 2).map((d, dIdx) => (
                    <span key={dIdx} className="bg-[#F7F8FA] px-2.5 py-1 rounded-sm text-[12px] border border-[#DCE1E7] text-[#14233F] font-semibold line-clamp-1">
                      • {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-4 border-t border-[#DCE1E7] flex items-center justify-between font-mono text-xs uppercase tracking-wider">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(proj)}
                  className="text-[#14233F] hover:text-[#B69A5A] flex items-center gap-1.5 font-bold transition-colors"
                >
                  <ImageIcon className="w-4 h-4 text-[#B69A5A]" />
                  <span>View Case Study & Deliverables</span>
                </button>

                <Link
                  to="/contact"
                  className="px-4 py-2 bg-[#14233F] hover:bg-[#0E1930] text-white border border-[#14233F] hover:border-[#B69A5A] transition-all rounded-sm font-semibold text-[11px]"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#14233F]/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl bg-[#FFFFFF] border border-[#DCE1E7] p-6 sm:p-10 max-h-[92vh] overflow-y-auto space-y-6 rounded-sm shadow-2xl animate-scale-in">
            
            <button
              type="button"
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 text-[#536174] hover:text-[#14233F] font-mono text-xs p-1.5 border border-[#DCE1E7] rounded-sm hover:border-[#14233F] transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-[#14233F]" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pb-4 border-b border-[#DCE1E7] pr-12 font-mono text-xs">
              <span className="text-[#596579] font-bold uppercase">
                {activeModalProject.category} // {activeModalProject.location}
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#14233F]">
                {activeModalProject.title}
              </h2>
              <div className="text-[#536174] font-medium text-sm">
                Client Sector: <span className="text-[#14233F] font-bold">{activeModalProject.clientSector}</span>
              </div>
            </div>

            {/* Gallery Section */}
            {activeModalProject.gallery && activeModalProject.gallery.length > 0 && (
              <div className="space-y-3">
                <div className="text-xs font-mono text-[#14233F] font-bold uppercase tracking-wider">
                  Verified Engineering Assets & Progression
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeModalProject.gallery.map((img, gIdx) => (
                    <div key={gIdx} className="border border-[#DCE1E7] rounded-sm overflow-hidden bg-[#F7F8FA]">
                      <img 
                        src={img.url} 
                        alt={img.caption} 
                        className="w-full aspect-[16/10] object-cover"
                      />
                      <div className="p-2.5 bg-[#F7F8FA] font-mono text-[12px] text-[#14233F] border-t border-[#DCE1E7] flex justify-between font-bold">
                        <span>{img.caption}</span>
                        <span className="text-[#596579] uppercase">{img.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Narrative: Challenge & Methodology */}
            <div className="space-y-4 text-sm text-[#425168] font-normal leading-relaxed">
              <div>
                <span className="font-mono text-[#14233F] font-bold uppercase tracking-wider block mb-1 text-xs">
                  The Engineering Challenge
                </span>
                <p className="text-[15px]">{activeModalProject.challenge}</p>
              </div>

              <div>
                <span className="font-mono text-[#14233F] font-bold uppercase tracking-wider block mb-1 text-xs">
                  Methodology & Technology
                </span>
                <p className="text-[15px]">{activeModalProject.methodology}</p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#F7F8FA] border border-[#DCE1E7] rounded-sm font-mono text-xs">
              {activeModalProject.stats.map((st, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-xl font-display font-bold text-[#14233F]">{st.value}</div>
                  <div className="text-[11px] text-[#536174] uppercase leading-tight font-medium">{st.label}</div>
                </div>
              ))}
            </div>

            {/* Deliverables List */}
            <div>
              <span className="text-xs font-mono text-[#14233F] font-bold uppercase tracking-wider block mb-2">
                Client Deliverables Provided
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#14233F]">
                {activeModalProject.deliverables.map((d, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 bg-[#F7F8FA] border border-[#DCE1E7] rounded-sm font-semibold">
                    <span className="text-[#B69A5A] font-bold">•</span>
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-[#DCE1E7] flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider">
              <span className="text-[#536174] text-[12px] font-bold">VERIFIED OUTCOME // ±3MM SURVEY ACCURACY</span>
              <Link
                to="/contact"
                className="px-6 py-3 bg-[#14233F] hover:bg-[#0E1930] text-white border border-[#14233F] hover:border-[#B69A5A] transition-all font-semibold rounded-sm shadow-md"
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
