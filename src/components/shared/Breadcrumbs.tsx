import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

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
      <ol className="flex items-center space-x-2 text-xs font-mono text-muted">
        <li className="flex items-center">
          <Link 
            to="/" 
            className="hover:text-spatial-cyan flex items-center gap-1 transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-spatial-cyan" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {items.map((crumb, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center space-x-2">
              <ChevronRight className="w-3 h-3 text-navy-700" />
              {crumb.href && !isLast ? (
                <Link 
                  to={crumb.href} 
                  className="hover:text-spatial-cyan transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-spatial-cyan font-medium" aria-current="page">
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
