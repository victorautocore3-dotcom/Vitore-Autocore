import {BrowserRouter, Navigate, Route, Routes, useLocation} from 'react-router-dom';
import {Layout} from './components/Layout';
import {PageTransition} from './components/MotionPrimitives';
import {HomePage} from './pages/HomePage';
import {AiVideoAdsPage} from './pages/AiVideoAdsPage';
import {SocialMediaManagementPage} from './pages/SocialMediaManagementPage';
import {StoreFixesPage} from './pages/StoreFixesPage';
import {GoogleVisibilityPage} from './pages/GoogleVisibilityPage';
import {WebsiteDesignPage} from './pages/WebsiteDesignPage';
import {AboutPage} from './pages/AboutPage';
import {ContactPage} from './pages/ContactPage';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <PageTransition routeKey={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/ai-video-ads" element={<AiVideoAdsPage />} />
        <Route path="/social-media-management" element={<SocialMediaManagementPage />} />
        <Route path="/store-fixes" element={<StoreFixesPage />} />
        <Route path="/google-visibility" element={<GoogleVisibilityPage />} />
        <Route path="/website-design" element={<WebsiteDesignPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </PageTransition>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  );
}
