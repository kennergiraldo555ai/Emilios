import { useState, useEffect, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { CalendarDays, MessageCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { RESTAURANT_INFO } from './config/restaurant';
import './App.css';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedDishes from './components/FeaturedDishes';
import MenuPreview from './components/MenuPreview';
import Reservations from './components/Reservations';
import Testimonials from './components/Testimonials';
import InstagramFeed from './components/InstagramFeed';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppButton, { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from './components/WhatsAppButton';

// Lazy load non-essential pages
const FullMenuPage = lazy(() => import('./pages/FullMenuPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const DeliveryPage = lazy(() => import('./pages/DeliveryPage'));

// Elegant Loader for lazy routes
const PageLoader = () => (
  <div className="min-h-screen bg-darker flex items-center justify-center">
    <div className="relative">
      <div className="w-16 h-16 border-2 border-gold/20 border-t-gold rounded-full animate-spin" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 bg-gold/10 rounded-full animate-pulse" />
      </div>
    </div>
  </div>
);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    // Dynamic document title
    document.title = `${RESTAURANT_INFO.name} — ${RESTAURANT_INFO.tagline}`;
  }, [pathname]);
  return null;
}

function HomePage({ loading }: { loading: boolean }) {
  const { t } = useTranslation();
  const [showMobileCta, setShowMobileCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowMobileCta(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <main>
        <Hero />
        <div className="section-divider" />
        <MenuPreview />
        <div className="section-divider" />
        <Reservations />
        <div className="section-divider" />
        <FeaturedDishes />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Testimonials />
        <div className="section-divider" />
        <InstagramFeed />
        <div className="section-divider" />
        <Location />
      </main>

      {/* Mobile Sticky CTA */}
      <AnimatePresence>
        {showMobileCta && !loading && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mobile-sticky-cta z-50"
          >
            <ScrollLink
              to="reservations"
              smooth={true}
              duration={800}
              offset={-80}
              className="flex-1 flex items-center justify-center gap-2 bg-gold text-darker py-3.5 uppercase tracking-[0.15em] text-[11px] font-semibold cursor-pointer btn-glow"
            >
              <CalendarDays size={15} />
              {t('mobileCta.reserve')}
            </ScrollLink>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-transparent border border-gold/30 text-gold py-3.5 px-5 uppercase tracking-[0.15em] text-[11px] font-semibold hover:bg-gold/10 transition-colors"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <ScrollToTop />
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className={`bg-darker min-h-screen text-beige selection:bg-gold/30 selection:text-beige font-sans ${loading ? 'overflow-hidden h-screen' : ''}`}>
        <Navbar />
        
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage loading={loading} />} />
            <Route path="/menu" element={<FullMenuPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/delivery" element={<DeliveryPage />} />
          </Routes>
        </Suspense>

        <WhatsAppButton />
        <Footer />
      </div>
    </>
  );
}

export default App;
