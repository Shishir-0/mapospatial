import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { SpatialSceneProvider } from './context/SpatialSceneContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { WorkflowPage } from './pages/WorkflowPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

const ScrollHandler: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        const timeout = setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return () => clearTimeout(timeout);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
};

export const App: React.FC = () => {
  return (
    <SpatialSceneProvider>
      <BrowserRouter>
        <ScrollHandler />
        <div className="min-h-screen bg-white text-navy font-sans selection:bg-gold selection:text-white relative flex flex-col">
          
          {/* Architectural Navigation */}
          <Navbar />

          {/* Main Content Area */}
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              
              {/* Capabilities Route */}
              <Route path="/capabilities" element={<Navigate to="/#capabilities" replace />} />

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
              <Route path="/projects/:slug" element={<ProjectsPage />} />

              {/* Engineering Methodology & Workflow Route */}
              <Route path="/workflow" element={<WorkflowPage />} />

              {/* Insights Routes */}
              <Route path="/insights" element={<InsightsPage />} />

              {/* Contact Routes */}
              <Route path="/contact" element={<ContactPage />} />

              {/* Catch-all 404 Geodetic Exception Route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>

          {/* Architectural Footer */}
          <Footer />

        </div>
      </BrowserRouter>
    </SpatialSceneProvider>
  );
};

export default App;
