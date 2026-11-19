import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SpatialSceneProvider } from './context/SpatialSceneContext';
import { PersistentSpatialCanvas } from './components/canvas/PersistentSpatialCanvas';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';

// Code-split route pages
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage').then(m => ({ default: m.ServiceDetailPage })));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage').then(m => ({ default: m.IndustriesPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const InsightsPage = lazy(() => import('./pages/InsightsPage').then(m => ({ default: m.InsightsPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));

const RouteLoadingFallback = () => (
  <div className="min-h-[70vh] flex items-center justify-center">
    <div className="flex flex-col items-center gap-3 font-mono text-xs text-copper">
      <div className="w-6 h-6 rounded-full border border-copper border-t-transparent animate-spin" />
      <span className="tracking-widest uppercase text-text-muted">LOADING_SPATIAL_LAYER...</span>
    </div>
  </div>
);

export const App: React.FC = () => {
  return (
    <SpatialSceneProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-basalt text-mineral font-sans selection:bg-copper selection:text-basalt relative">
          
          {/* Continuous Persistent 3D WebGL Canvas */}
          <PersistentSpatialCanvas />

          {/* HTML UI Layer positioned above the 3D Canvas */}
          <div className="relative z-10 flex flex-col min-h-screen">
            
            {/* Minimal Architectural Navigation */}
            <Navbar />

            {/* Main Routed Content */}
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

                  {/* Insights Routes */}
                  <Route path="/insights" element={<InsightsPage />} />

                  {/* Contact Routes */}
                  <Route path="/contact" element={<ContactPage />} />

                  {/* Catch-all redirect to Home */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Suspense>
            </div>

            {/* Minimal Architectural Footer */}
            <Footer />

          </div>

        </div>
      </BrowserRouter>
    </SpatialSceneProvider>
  );
};

export default App;
