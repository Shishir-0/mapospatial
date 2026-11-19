import React, { useEffect, useRef, useState } from 'react';

interface StatItem {
  id: string;
  target: number;
  suffix: string;
  formatNumber: (n: number) => string;
  label: string;
  sublabel: string;
  icon: (hasAnimated: boolean) => React.ReactNode;
}

export const CompanyStatistics: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    industries: 0
  });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCounts({
        projects: 1000,
        clients: 100,
        years: 15,
        industries: 20
      });
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect(); // Trigger only once

          const duration = 1800; // 1.8 seconds
          const startTime = performance.now();

          // Smooth exponential deceleration easing (easeOutExpo)
          const easeOutExpo = (t: number): number => {
            return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
          };

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutExpo(progress);

            setCounts({
              projects: Math.round(eased * 1000),
              clients: Math.round(eased * 100),
              years: Math.round(eased * 15),
              industries: Math.round(eased * 20)
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts({
                projects: 1000,
                clients: 100,
                years: 15,
                industries: 20
              });
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  const stats: StatItem[] = [
    {
      id: 'projects',
      target: 1000,
      suffix: '+',
      formatNumber: (n) => n.toLocaleString(),
      label: 'Completed Projects',
      sublabel: 'Survey-grade deliverables across AEC & infrastructure',
      icon: (animated) => (
        <svg
          className="w-6 h-6 text-[#14233F] transition-all duration-700"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Architectural elevation & blueprint structure */}
          <rect x="3" y="4" width="18" height="16" rx="1" className="stroke-[#14233F]" />
          <path
            d="M3 10h18M7 10v10M12 10v10M17 10v10"
            className="stroke-[#536174]"
            style={{
              strokeDasharray: animated ? '0' : '40',
              transition: 'stroke-dasharray 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />
          {/* Engineering benchmark datum badge */}
          <circle cx="12" cy="7" r="1.5" className="fill-[#B69A5A] stroke-[#B69A5A]" />
        </svg>
      )
    },
    {
      id: 'clients',
      target: 100,
      suffix: '+',
      formatNumber: (n) => n.toString(),
      label: 'Global Clients',
      sublabel: 'Tier-1 contractors, asset owners & municipal bodies',
      icon: (animated) => (
        <svg
          className="w-6 h-6 text-[#14233F] transition-all duration-700"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Globe meridian & latitude grid */}
          <circle cx="12" cy="12" r="9" className="stroke-[#14233F]" />
          <path d="M3.6 9h16.8M3.6 15h16.8" className="stroke-[#536174]" />
          <path
            d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 0 18"
            className="stroke-[#536174]"
          />
          {/* Connected telemetry nodes */}
          <circle cx="8" cy="10" r="1.5" className="fill-[#B69A5A] stroke-[#B69A5A]" />
          <circle cx="16" cy="13" r="1.5" className="fill-[#B69A5A] stroke-[#B69A5A]" />
          <path
            d="M8 10 C 11 9, 13 11, 16 13"
            className="stroke-[#B69A5A]"
            strokeDasharray={animated ? '0' : '30'}
            style={{ transition: 'stroke-dasharray 1.4s ease-out' }}
          />
        </svg>
      )
    },
    {
      id: 'years',
      target: 15,
      suffix: '+',
      formatNumber: (n) => n.toString(),
      label: 'Years of Experience',
      sublabel: 'Decades of spatial surveying & modeling mastery',
      icon: (animated) => (
        <svg
          className="w-6 h-6 text-[#14233F] transition-all duration-700"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Precision dial / compass chronometer */}
          <circle cx="12" cy="12" r="9" className="stroke-[#14233F]" />
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2" className="stroke-[#536174]" />
          {/* Restrained indicator sweep */}
          <path
            d="M12 12 L15.5 8.5"
            className="stroke-[#B69A5A] stroke-[2]"
            style={{
              transformOrigin: '12px 12px',
              transform: animated ? 'rotate(0deg)' : 'rotate(-45deg)',
              transition: 'transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />
          <circle cx="12" cy="12" r="2" className="fill-[#14233F] stroke-[#14233F]" />
        </svg>
      )
    },
    {
      id: 'industries',
      target: 20,
      suffix: '+',
      formatNumber: (n) => n.toString(),
      label: 'Industries',
      sublabel: 'AEC, plant, transport, energy, heritage & utilities',
      icon: (animated) => (
        <svg
          className="w-6 h-6 text-[#14233F] transition-all duration-700"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Layered infrastructure grid */}
          <path d="M12 2L2 7l10 5 10-5-10-5z" className="stroke-[#14233F] fill-[#F7F8FA]" />
          <path
            d="M2 12l10 5 10-5"
            className="stroke-[#B69A5A]"
            style={{
              opacity: animated ? 1 : 0.4,
              transition: 'opacity 1s ease-out 0.2s'
            }}
          />
          <path
            d="M2 17l10 5 10-5"
            className="stroke-[#536174]"
            style={{
              opacity: animated ? 1 : 0.2,
              transition: 'opacity 1s ease-out 0.4s'
            }}
          />
          <circle cx="12" cy="7" r="1.5" className="fill-[#B69A5A]" />
        </svg>
      )
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 border-b border-[#DCE1E7] bg-[#F7F8FA] -mx-6 sm:-mx-8 px-6 sm:px-8 relative z-10 transition-colors"
      aria-labelledby="impact-heading"
    >
      <div className="max-w-7xl mx-auto space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DCE1E7] pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-widest text-[#596579] uppercase inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B69A5A] shrink-0" />
              OUR IMPACT IN NUMBERS
            </span>
            <h2
              id="impact-heading"
              className="text-2xl sm:text-4xl font-display font-extrabold text-[#14233F] tracking-tight leading-tight"
            >
              Experience measured in projects. <br className="hidden sm:inline" />
              Trust built across industries.
            </h2>
            <p className="text-base text-[#425168] font-normal leading-relaxed">
              Across projects, clients and industries, our work connects spatial data with practical engineering outcomes.
            </p>
          </div>

          {/* Verification Flag / Audit Badge */}
          <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-sm border border-[#DCE1E7] text-[11px] font-mono text-[#536174] shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B69A5A] animate-pulse" />
            <span className="font-semibold uppercase tracking-wider text-[#14233F]">
              OPERATIONAL METRICS
            </span>
            <span className="text-[#7B8491] hidden lg:inline">
              // PENDING ANNUAL CONCURRENCE
            </span>
          </div>
        </div>

        {/* 4 Balanced Columns: Statistics Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((st) => {
            const currentVal = counts[st.id as keyof typeof counts];
            return (
              <div
                key={st.id}
                className="bg-white p-7 sm:p-8 rounded-sm border border-[#DCE1E7] hover:border-[#14233F] transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between space-y-6 group"
              >
                {/* Top Row: Icon + Technical Marker */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-sm bg-[#F7F8FA] border border-[#DCE1E7] group-hover:border-[#B69A5A] flex items-center justify-center transition-colors">
                    {st.icon(hasAnimated)}
                  </div>
                  <span className="text-[10px] font-mono text-[#7B8491] uppercase tracking-wider">
                    REF: 0{stats.indexOf(st) + 1}
                  </span>
                </div>

                {/* Primary Number Counter */}
                <div className="space-y-1.5">
                  <div className="text-5xl sm:text-6xl font-display font-extrabold text-[#14233F] tracking-tight tabular-nums flex items-baseline">
                    <span>{st.formatNumber(currentVal)}</span>
                    <span className="text-3xl sm:text-4xl text-[#B69A5A] font-bold ml-1 select-none">
                      {st.suffix}
                    </span>
                  </div>

                  <div className="text-[16px] font-display font-bold text-[#14233F] tracking-tight">
                    {st.label}
                  </div>
                </div>

                {/* Subtitle / Engineering Detail */}
                <div className="pt-4 border-t border-[#DCE1E7]/70 text-xs font-normal text-[#536174] leading-relaxed">
                  {st.sublabel}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
