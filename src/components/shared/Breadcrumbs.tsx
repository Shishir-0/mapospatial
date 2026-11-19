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
      <ol className="flex items-center space-x-2 text-[11px] font-mono text-text-muted">
        <li className="flex items-center">
          <Link 
            to="/" 
            className="hover:text-mineral transition-colors"
          >
            INDEX
          </Link>
        </li>

        {items.map((crumb, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center space-x-2">
              <ChevronRight className="w-3 h-3 text-subtle-border" />
              {crumb.href && !isLast ? (
                <Link 
                  to={crumb.href} 
                  className="hover:text-mineral transition-colors uppercase"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-copper uppercase font-medium" aria-current="page">
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
