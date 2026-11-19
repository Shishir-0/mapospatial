import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ProjectEstimatorModal } from './components/shared/ProjectEstimatorModal';

// Code-split route pages
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage').then(m => ({ default: m.ServiceDetailPage })));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage').then(m => ({ default: m.IndustriesPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const InsightsPage = lazy(() => import('./pages/InsightsPage').then(m => ({ default: m.InsightsPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));

const RouteLoadingFallback = () => (
  <div className="min-h-[70vh] flex items-center justify-center bg-navy-950">
    <div className="flex flex-col items-center gap-3 font-mono text-xs text-spatial-cyan">
      <div className="w-8 h-8 rounded-full border-2 border-spatial-cyan border-t-transparent animate-spin" />
      <span className="tracking-widest uppercase">STREAMING_SPATIAL_LAYER...</span>
    </div>
  </div>
);

export const App: React.FC = () => {
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-navy-900 text-offwhite font-sans selection:bg-spatial-cyan selection:text-navy-950">
        
        {/* Navigation Bar */}
        <Navbar onOpenEstimator={() => setIsEstimatorOpen(true)} />

        {/* Main Routed Content */}
        <div className="flex-grow">
          <Suspense fallback={<RouteLoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage onOpenEstimator={() => setIsEstimatorOpen(true)} />} />
              
              {/* About Page Routes */}
              <Route path="/about-us" element={<AboutPage />} />
              <Route path="/about" element={<AboutPage />} />

              {/* Existing and Dedicated Service Pages */}
              <Route 
                path="/reality-capture-scan-to-bim" 
                element={<ServiceDetailPage onOpenEstimator={() => setIsEstimatorOpen(true)} explicitSlug="scan-to-bim" />} 
              />
              <Route 
                path="/scan-to-bim" 
                element={<ServiceDetailPage onOpenEstimator={() => setIsEstimatorOpen(true)} explicitSlug="scan-to-bim" />} 
              />
              <Route 
                path="/reality-capture" 
                element={<ServiceDetailPage onOpenEstimator={() => setIsEstimatorOpen(true)} explicitSlug="reality-capture" />} 
              />
              <Route 
                path="/geospatial-services" 
                element={<ServiceDetailPage onOpenEstimator={() => setIsEstimatorOpen(true)} explicitSlug="geospatial-services" />} 
              />
              <Route 
                path="/lidar-engineering" 
                element={<ServiceDetailPage onOpenEstimator={() => setIsEstimatorOpen(true)} explicitSlug="lidar-engineering" />} 
              />
              <Route 
                path="/digital-twin" 
                element={<ServiceDetailPage onOpenEstimator={() => setIsEstimatorOpen(true)} explicitSlug="digital-twin" />} 
              />
              <Route 
                path="/gis-solutions" 
                element={<ServiceDetailPage onOpenEstimator={() => setIsEstimatorOpen(true)} explicitSlug="gis-solutions" />} 
              />
              <Route 
                path="/services/:slug" 
                element={<ServiceDetailPage onOpenEstimator={() => setIsEstimatorOpen(true)} />} 
              />

              {/* Industries Routes */}
              <Route path="/industry" element={<IndustriesPage />} />
              <Route path="/industries" element={<IndustriesPage />} />

              {/* Projects & Portfolio Routes */}
              <Route path="/projects" element={<ProjectsPage />} />

              {/* Insights Routes */}
              <Route path="/insights" element={<InsightsPage />} />

              {/* Contact Routes */}
              <Route path="/contact" element={<ContactPage />} />

              {/* Catch-all redirect to Home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </div>

        {/* Global Footer */}
        <Footer />

        {/* Interactive Scope & Specification Calculator Modal */}
        <ProjectEstimatorModal
          isOpen={isEstimatorOpen}
          onClose={() => setIsEstimatorOpen(false)}
        />

      </div>
    </BrowserRouter>
  );
};

export default App;
