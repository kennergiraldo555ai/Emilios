import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Phone, CalendarDays } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
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
import FullMenuPage from './pages/FullMenuPage';
import WhatsAppButton, { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from './components/WhatsAppButton';
import { MessageCircle } from 'lucide-react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
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
        
        <Routes>
          <Route path="/" element={<HomePage loading={loading} />} />
          <Route path="/menu" element={<FullMenuPage />} />
        </Routes>

        <WhatsAppButton />
        <Footer />
      </div>
    </>
  );
}

export default App;
