
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Royal Flight Travel - Your Trusted Travel Partner</title>
        <meta name="description" content="Royal Flight Travel offers premium travel services, flights, and holiday packages across the UK. Book your next adventure with us!" />
        <meta name="keywords" content="travel agency, flights, UK travel, holiday packages, Royal Flight Travel" />
        <link rel="canonical" href="https://royalflighttravel.co.uk" />
        <meta property="og:title" content="Royal Flight Travel - Your Trusted Travel Partner" />
        <meta property="og:description" content="Royal Flight Travel offers premium travel services, flights, and holiday packages across the UK. Book your next adventure with us!" />
        <meta property="og:url" content="https://royalflighttravel.co.uk" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
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