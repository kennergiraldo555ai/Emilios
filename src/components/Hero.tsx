import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const { t } = useTranslation();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <section 
      id="hero" 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden perspective-2000"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image with Ken Burns */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-bg-image scale-110"
        style={{ 
          backgroundImage: 'url("/images/1544148103-0773bf10d330.webp")',
        }}
        animate={{
          x: mousePos.x * -1.5,
          y: mousePos.y * -1.5,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
      
      {/* Dark cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-darker/80 via-darker/50 to-darker z-[1]" />
      
      {/* Vignette */}
      <div className="cinematic-vignette" />

      {/* Grain overlay */}
      <div className="absolute inset-0 grain-overlay z-[3]" />

      {/* Subtle ambient glow - optimized with radial gradient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.06)_0%,rgba(197,160,89,0)_60%)] pointer-events-none z-[3]" />

      <motion.div 
        className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center"
        animate={{
          rotateY: mousePos.x * 0.5,
          rotateX: mousePos.y * -0.5,
          z: 50
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-20 h-[1px] bg-gradient-to-r from-transparent via-gold/80 to-transparent mb-8 origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-gold uppercase tracking-[0.4em] text-[10px] md:text-xs font-medium mb-8"
        >
          {t('hero.tagline')}
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-7xl md:text-8xl lg:text-[10rem] font-serif text-white mb-3 leading-[0.85] tracking-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          style={{ translateZ: '80px' }}
        >
          Emilios
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="text-2xl md:text-4xl lg:text-5xl italic font-serif font-light text-beige/50 mb-16 tracking-wider"
          style={{ translateZ: '40px' }}
        >
          Restaurante
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          style={{ translateZ: '60px' }}
        >
          <Link
            to="reservations"
            smooth={true}
            duration={800}
            offset={-80}
            className="cursor-pointer bg-gold hover:bg-gold-light text-darker px-12 py-4 uppercase tracking-[0.25em] text-[11px] font-semibold transition-all duration-500 w-full sm:w-auto text-center shadow-[0_0_40px_rgba(197,160,89,0.15)] hover:shadow-[0_0_60px_rgba(197,160,89,0.3)] btn-glow"
          >
            {t('hero.reserve')}
          </Link>
          <Link
            to="menu"
            smooth={true}
            duration={800}
            offset={-80}
            className="cursor-pointer bg-transparent border border-gold/40 text-gold hover:bg-gold/[0.08] hover:border-gold/70 px-12 py-4 uppercase tracking-[0.25em] text-[11px] font-semibold transition-all duration-500 w-full sm:w-auto text-center"
          >
            {t('hero.viewMenu')}
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
      >
        <Link to="about" smooth={true} duration={800} className="cursor-pointer flex flex-col items-center group">
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold/50 to-transparent mb-2" />
          <ChevronDown size={14} className="text-gold/40 group-hover:text-gold transition-colors duration-300 float-animation" />
        </Link>
      </motion.div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-darker to-transparent z-[4]" />
    </section>
  );
}
