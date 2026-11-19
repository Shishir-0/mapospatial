import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../../data/projectsData';

export const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState(projectsData[0]);

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto w-full z-10 relative bg-[#FFFFFF]" id="projects">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#DCE1E7] pb-8">
        <div className="space-y-3 max-w-2xl">
          <span className="text-[13px] font-mono font-bold tracking-[0.08em] text-[#596579] uppercase block">
            [04 // VERIFIED PROJECT EVIDENCE]
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#14233F] tracking-tight">
            Selected Engineering Projects
          </h2>
          <p className="text-[17px] text-[#425168] font-normal leading-[1.6]">
            Documented spatial deliverables across rail transit corridors, industrial plant rooms, power transmission networks, and municipal GIS.
          </p>
        </div>

        <Link
          to="/projects"
          className="font-mono text-xs uppercase tracking-wider text-[#14233F] hover:text-[#B69A5A] flex items-center gap-1.5 transition-colors font-bold"
        >
          <span>View All Case Studies</span>
          <ArrowUpRight className="w-4 h-4 text-[#B69A5A]" />
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
                className={`w-full text-left p-5 border rounded-sm transition-all flex flex-col justify-between group ${isSelected
                    ? 'bg-[#FFFFFF] border-[#B69A5A] text-[#14233F] shadow-sm ring-1 ring-[#B69A5A]'
                    : 'bg-[#F7F8FA] border-[#DCE1E7] text-[#14233F] hover:border-[#B69A5A]/50 hover:bg-[#FFFFFF]'
                  }`}
              >
                <div className="flex items-center justify-between font-mono text-[12px] mb-2">
                  <span className={isSelected ? 'text-[#B69A5A] font-bold' : 'text-[#596579] font-bold'}>
                    0{idx + 1} // {proj.category}
                  </span>
                  <span className="text-[#536174] font-medium">{proj.location}</span>
                </div>

                <div className="text-[17px] font-display font-bold mb-2 leading-snug text-[#14233F]">
                  {proj.title}
                </div>

                <div className="text-xs font-mono text-[#14233F] font-bold">
                  ✦ {proj.highlightMetric}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Project Deep Dive Panel Right Column */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 border border-[#DCE1E7] bg-[#FFFFFF] rounded-sm space-y-6 survey-corner shadow-sm">

            {/* Real Project Deliverable Imagery */}
            <div className="relative rounded-sm overflow-hidden border border-[#DCE1E7] aspect-[16/9] group bg-[#F7F8FA]">
              <img
                src={activeProject.heroImage}
                alt={activeProject.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14233F]/90 via-transparent to-transparent flex items-end p-4">
                <div className="font-mono text-xs text-white flex items-center justify-between w-full">
                  <span className="bg-[#14233F] px-3 py-1 rounded-sm border border-[#B69A5A]/50 text-[#B69A5A] font-bold">
                    SECTOR: {activeProject.clientSector}
                  </span>
                  <span className="bg-black/70 px-2.5 py-1 rounded-sm text-slate-200">
                    {activeProject.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Title & Metadata */}
            <div className="space-y-2 pb-4 border-b border-[#DCE1E7]">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-[#596579] uppercase font-bold tracking-wider">
                  {activeProject.category}
                </span>
                <span className="text-[#536174] text-[12px] font-bold">
                  VERIFIED DELIVERABLE
                </span>
              </div>

              <h3 className="text-2xl sm:text-[30px] font-display font-extrabold text-[#14233F] leading-tight">
                {activeProject.title}
              </h3>
            </div>

            {/* Narrative: Challenge & Methodology */}
            <div className="space-y-4 text-[16px] text-[#425168] font-normal leading-[1.65]">
              <div>
                <span className="text-xs font-mono text-[#14233F] font-bold uppercase tracking-wider block mb-1">
                  The Engineering Challenge
                </span>
                <p>{activeProject.challenge}</p>
              </div>

              <div>
                <span className="text-xs font-mono text-[#14233F] font-bold uppercase tracking-wider block mb-1">
                  Methodology & Technology
                </span>
                <p>{activeProject.methodology}</p>
              </div>
            </div>

            {/* Key Verified Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#F7F8FA] border border-[#DCE1E7] rounded-sm font-mono text-xs">
              {activeProject.stats.map((st, sIdx) => (
                <div key={sIdx} className="space-y-0.5">
                  <div className="text-xl font-display font-bold text-[#14233F]">{st.value}</div>
                  <div className="text-[11px] text-[#536174] uppercase leading-tight font-medium">{st.label}</div>
                </div>
              ))}
            </div>

            {/* Deliverables Provided */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-mono text-[#596579] font-bold uppercase tracking-wider block">
                Deliverables Provided
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#14233F]">
                {activeProject.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 bg-[#F7F8FA] p-2.5 rounded-sm border border-[#DCE1E7]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B69A5A] shrink-0 font-bold" />
                    <span className="font-semibold text-[#425168] line-clamp-1">{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-[#DCE1E7] flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider">
              <span className="text-[#657184] text-[12px] font-medium">
                METRIC: {activeProject.highlightMetric}
              </span>
              <Link
                to="/projects"
                className="px-5 py-2.5 bg-[#14233F] hover:bg-[#0E1930] text-white border border-[#14233F] hover:border-[#B69A5A] transition-all font-semibold rounded-sm shadow-xs flex items-center gap-2"
              >
                <span>View Full Portfolio</span>
                <ArrowUpRight className="w-4 h-4 text-[#B69A5A]" />
              </Link>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
