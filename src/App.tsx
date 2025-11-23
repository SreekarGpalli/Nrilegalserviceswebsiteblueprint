import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ServicesOverviewPage } from './components/pages/ServicesOverviewPage';
import { PropertyServicesPage } from './components/pages/PropertyServicesPage';
import { FamilyServicesPage } from './components/pages/FamilyServicesPage';
import { CivilCriminalServicesPage } from './components/pages/CivilCriminalServicesPage';
import { FinancialServicesPage } from './components/pages/FinancialServicesPage';
import { DocumentationServicesPage } from './components/pages/DocumentationServicesPage';
import { WhyChooseUsPage } from './components/pages/WhyChooseUsPage';
import { CaseStudiesPage } from './components/pages/CaseStudiesPage';
import { ResourcesPage } from './components/pages/ResourcesPage';
import { BlogPage } from './components/pages/BlogPage';
import { BlogPostPage } from './components/pages/BlogPostPage';
import { ContactPage } from './components/pages/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesOverviewPage />} />
            <Route path="/services/property" element={<PropertyServicesPage />} />
            <Route path="/services/family" element={<FamilyServicesPage />} />
            <Route path="/services/civil-criminal" element={<CivilCriminalServicesPage />} />
            <Route path="/services/financial" element={<FinancialServicesPage />} />
            <Route path="/services/documentation" element={<DocumentationServicesPage />} />
            <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}
