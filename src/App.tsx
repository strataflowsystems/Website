import { Navigate, Route, Routes } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { AboutPage } from '@/pages/AboutPage';
import { CaseStudiesPage } from '@/pages/CaseStudiesPage';
import { ContactPage } from '@/pages/ContactPage';
import { HomePage } from '@/pages/HomePage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { TermsPage } from '@/pages/TermsPage';

const App = () => (
  <PageLayout>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/case-studies" element={<CaseStudiesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </PageLayout>
);

export default App;
