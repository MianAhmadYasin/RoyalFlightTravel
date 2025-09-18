
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e40af" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <meta name="author" content="Royal Flight Travel" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="London" />
        
        {/* Default Meta Tags (will be overridden by page-specific ones) */}
        <title>Royal Flight Travel - Premium Travel Agency | Luxury Holidays UK</title>
        <meta name="description" content="Royal Flight Travel is a leading luxury travel agency in London. ATOL protected flights, premium holiday packages, and personalized travel planning across the UK and worldwide." />
        <meta name="keywords" content="luxury travel agency London, premium flights UK, ATOL protected travel, holiday packages, Royal Flight Travel, business travel, luxury holidays" />
        
        {/* Open Graph */}
        <meta property="og:site_name" content="Royal Flight Travel" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Royal Flight Travel - Premium Travel Agency | Luxury Holidays UK" />
        <meta property="og:description" content="Experience luxury travel with Royal Flight Travel. ATOL protected flights, exclusive hotels, and tailored holiday packages from London's leading travel agency." />
        <meta property="og:url" content="https://royalflighttravel.co.uk" />
        <meta property="og:image" content="https://royalflighttravel.co.uk/hero-images/london.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Royal Flight Travel - Premium Travel Services" />
        <meta name="twitter:description" content="Luxury travel experiences crafted by experts. Premium flights, hotels, and tailored holiday packages." />
        <meta name="twitter:image" content="https://royalflighttravel.co.uk/hero-images/london.jpg" />
        
        {/* Additional SEO */}
        <link rel="canonical" href="https://royalflighttravel.co.uk" />
        <meta name="format-detection" content="telephone=no" />
      </Helmet>
      <TopBar />
      <Header />
      <main>
        <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;