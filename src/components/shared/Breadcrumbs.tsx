import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-[12px] font-mono text-[#536174]">
        <li className="flex items-center">
          <Link 
            to="/" 
            className="hover:text-[#14233F] transition-colors font-bold text-[#14233F]"
          >
            INDEX
          </Link>
        </li>

        {items.map((crumb, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-[#596579]" />
              {crumb.href && !isLast ? (
                <Link 
                  to={crumb.href} 
                  className="hover:text-[#14233F] transition-colors uppercase font-semibold text-[#536174]"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#14233F] uppercase font-bold" aria-current="page">
                  {crumb.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
