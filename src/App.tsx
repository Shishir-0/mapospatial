import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SpatialSceneProvider } from './context/SpatialSceneContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';

// Code-split route pages
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage').then(m => ({ default: m.ServiceDetailPage })));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage').then(m => ({ default: m.IndustriesPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const WorkflowPage = lazy(() => import('./pages/WorkflowPage').then(m => ({ default: m.WorkflowPage })));
const InsightsPage = lazy(() => import('./pages/InsightsPage').then(m => ({ default: m.InsightsPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));

const RouteLoadingFallback = () => (
  <div className="min-h-[70vh] flex items-center justify-center bg-white">
    <div className="flex flex-col items-center gap-3 font-mono text-xs text-navy">
      <div className="w-7 h-7 rounded-full border-2 border-gold border-t-transparent animate-spin" />
      <span className="tracking-widest uppercase text-text-muted">INITIALIZING_SPATIAL_LAYER...</span>
    </div>
  </div>
);

export const App: React.FC = () => {
  return (
    <SpatialSceneProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white text-navy font-sans selection:bg-gold selection:text-white relative flex flex-col">
          
          {/* Architectural Navigation */}
          <Navbar />

          {/* Main Content Area */}
          <div className="flex-grow">
            <Suspense fallback={<RouteLoadingFallback />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                
                {/* About Page Routes */}
                <Route path="/about-us" element={<AboutPage />} />
                <Route path="/about" element={<AboutPage />} />

                {/* Existing and Dedicated Service Pages */}
                <Route 
                  path="/reality-capture-scan-to-bim" 
                  element={<ServiceDetailPage explicitSlug="scan-to-bim" />} 
                />
                <Route 
                  path="/scan-to-bim" 
                  element={<ServiceDetailPage explicitSlug="scan-to-bim" />} 
                />
                <Route 
                  path="/reality-capture" 
                  element={<ServiceDetailPage explicitSlug="reality-capture" />} 
                />
                <Route 
                  path="/geospatial-services" 
                  element={<ServiceDetailPage explicitSlug="geospatial-services" />} 
                />
                <Route 
                  path="/lidar-engineering" 
                  element={<ServiceDetailPage explicitSlug="lidar-engineering" />} 
                />
                <Route 
                  path="/digital-twin" 
                  element={<ServiceDetailPage explicitSlug="digital-twin" />} 
                />
                <Route 
                  path="/gis-solutions" 
                  element={<ServiceDetailPage explicitSlug="gis-solutions" />} 
                />
                <Route 
                  path="/services/:slug" 
                  element={<ServiceDetailPage />} 
                />

                {/* Industries Routes */}
                <Route path="/industry" element={<IndustriesPage />} />
                <Route path="/industries" element={<IndustriesPage />} />

                {/* Projects & Portfolio Routes */}
                <Route path="/projects" element={<ProjectsPage />} />

                {/* Engineering Methodology & Workflow Route */}
                <Route path="/workflow" element={<WorkflowPage />} />

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

        </div>
      </BrowserRouter>
    </SpatialSceneProvider>
  );
};

export default App;

