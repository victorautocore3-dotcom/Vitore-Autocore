import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {Layout} from './components/Layout';
import {HomePage} from './pages/HomePage';
import {AiVideoAdsPage} from './pages/AiVideoAdsPage';
import {SocialMediaManagementPage} from './pages/SocialMediaManagementPage';
import {StoreFixesPage} from './pages/StoreFixesPage';
import {GoogleVisibilityPage} from './pages/GoogleVisibilityPage';
import {WebsiteDesignPage} from './pages/WebsiteDesignPage';
import {GraphicsDesignPage} from './pages/GraphicsDesignPage';
import {AboutPage} from './pages/AboutPage';
import {ContactPage} from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ai-video-ads" element={<AiVideoAdsPage />} />
          <Route path="/social-media-management" element={<SocialMediaManagementPage />} />
          <Route path="/store-fixes" element={<StoreFixesPage />} />
          <Route path="/google-visibility" element={<GoogleVisibilityPage />} />
          <Route path="/website-design" element={<WebsiteDesignPage />} />
          <Route path="/graphics-design" element={<GraphicsDesignPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
