import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';

const HomePage = lazy(() => import('@/pages/HomePage').then((module) => ({ default: module.HomePage })));
const ServicesPage = lazy(() => import('@/pages/ServicesPage').then((module) => ({ default: module.ServicesPage })));
const M365AutomationPage = lazy(() => import('@/pages/M365AutomationPage').then((module) => ({ default: module.M365AutomationPage })));
const ComplianceAuditTrailsPage = lazy(() => import('@/pages/ComplianceAuditTrailsPage').then((module) => ({ default: module.ComplianceAuditTrailsPage })));
const GeospatialFieldOpsPage = lazy(() => import('@/pages/GeospatialFieldOpsPage').then((module) => ({ default: module.GeospatialFieldOpsPage })));
const CaseStudiesPage = lazy(() => import('@/pages/CaseStudiesPage').then((module) => ({ default: module.CaseStudiesPage })));
const AboutPage = lazy(() => import('@/pages/AboutPage').then((module) => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import('@/pages/ContactPage').then((module) => ({ default: module.ContactPage })));
const AiConsultancySessionPage = lazy(() => import('@/pages/AiConsultancySessionPage').then((module) => ({ default: module.AiConsultancySessionPage })));
const StrataBotTestingPage = lazy(() => import('@/pages/StrataBotTestingPage').then((module) => ({ default: module.StrataBotTestingPage })));
const PrivacyPage = lazy(() => import('@/pages/PrivacyPage').then((module) => ({ default: module.PrivacyPage })));
const TermsPage = lazy(() => import('@/pages/TermsPage').then((module) => ({ default: module.TermsPage })));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage })));

const App = () => (
  <PageLayout>
    <Suspense fallback={<main className="mx-auto max-w-6xl px-6 py-16 text-slate-600 dark:text-slate-400">Loading…</main>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/microsoft-365-workflow-automation" element={<M365AutomationPage />} />
        <Route path="/services/operations-compliance-audit-trails" element={<ComplianceAuditTrailsPage />} />
        <Route path="/services/geospatial-field-ops-workflows" element={<GeospatialFieldOpsPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/ai-consultancy-session" element={<AiConsultancySessionPage />} />
        <Route path="/stratabot-testing" element={<StrataBotTestingPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  </PageLayout>
);

export default App;
