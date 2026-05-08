import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.menu'), to: 'menu', route: '/menu' },
    { name: t('nav.reservations'), to: 'reservations' },
    { name: t('nav.featured'), to: 'featured' },
    { name: t('nav.about'), to: 'about' },
    { name: t('nav.location'), to: 'location' }
  ];

  const handleNavClick = (to: string, route?: string) => {
    setIsOpen(false);
    if (route) {
      navigate(route);
    } else if (!isHomePage) {
      navigate('/');
      // Need a small delay to let page render before scrolling
      setTimeout(() => {
        const element = document.getElementById(to);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-700 ${
        scrolled ? 'bg-darker/95 py-4 shadow-lg border-b border-white/[0.02]' : 'bg-transparent py-6'
      } ${scrolled && !isOpen ? 'backdrop-blur-md' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <RouterLink to="/" className="z-50 flex items-center gap-3 group">
          {/* Logo integration point */}
          <div className="h-16 md:h-20 flex items-center justify-center overflow-hidden transition-all duration-500">
            <img 
              src="/logo.png" 
              alt="Emilios Logo" 
              className="h-full w-auto object-contain scale-[1.15]"
              onLoad={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.nextElementSibling) {
                  (target.nextElementSibling as HTMLElement).style.display = 'none'; // Hide fallback E
                }
                const textContainer = target.parentElement?.nextElementSibling as HTMLElement;
                if (textContainer) {
                  textContainer.style.display = 'none'; // Hide text since logo has it
                }
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                if (target.nextElementSibling) {
                  (target.nextElementSibling as HTMLElement).style.display = 'flex';
                }
              }}
            />
            <div className="hidden w-10 h-10 border border-gold/50 rounded-sm items-center justify-center group-hover:border-gold transition-colors">
              <span className="text-gold font-serif text-xl leading-none">E</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-serif text-gold tracking-widest leading-none group-hover:text-gold-light transition-colors duration-500">
              EMILIOS
            </span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-beige/50 mt-1">
              Restaurante
            </span>
          </div>
        </RouterLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            link.route ? (
              <RouterLink
                key={link.name}
                to={link.route}
                className="text-[10px] uppercase tracking-[0.25em] font-semibold text-beige/80 hover:text-gold transition-colors cursor-pointer"
              >
                {link.name}
              </RouterLink>
            ) : (
              isHomePage ? (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={800}
                  offset={-100}
                  className="text-[10px] uppercase tracking-[0.25em] font-semibold text-beige/80 hover:text-gold transition-colors cursor-pointer"
                >
                  {link.name}
                </ScrollLink>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.to)}
                  className="text-[10px] uppercase tracking-[0.25em] font-semibold text-beige/80 hover:text-gold transition-colors cursor-pointer"
                >
                  {link.name}
                </button>
              )
            )
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-50 flex items-center gap-4">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gold p-1"
          >
            {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-darker z-40 flex flex-col justify-center px-10"
          >
            {/* Decorative background */}
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="flex flex-col space-y-8"
            >
              {navLinks.map((link) => (
                link.route ? (
                  <RouterLink
                    key={link.name}
                    to={link.route}
                    onClick={() => handleNavClick(link.to, link.route)}
                    className="text-3xl font-serif text-white hover:text-gold transition-colors tracking-wide"
                  >
                    {link.name}
                  </RouterLink>
                ) : (
                  isHomePage ? (
                    <ScrollLink
                      key={link.name}
                      to={link.to}
                      smooth={true}
                      duration={800}
                      offset={-80}
                      onClick={() => setIsOpen(false)}
                      className="text-3xl font-serif text-white hover:text-gold transition-colors tracking-wide"
                    >
                      {link.name}
                    </ScrollLink>
                  ) : (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link.to)}
                      className="text-3xl font-serif text-white hover:text-gold transition-colors tracking-wide text-left"
                    >
                      {link.name}
                    </button>
                  )
                )
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-12 left-10 flex flex-col space-y-4"
            >
              <p className="text-gold/50 uppercase tracking-[0.2em] text-[10px] font-semibold">Reservas</p>
              <a href="tel:+573208990331" className="text-white text-lg tracking-widest">+57 320 899 0331</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
