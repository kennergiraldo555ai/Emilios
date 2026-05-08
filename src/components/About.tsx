import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-28 md:py-40 bg-darker relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-beige/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Images */}
          <div className="relative order-2 lg:order-1 mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative h-[400px] md:h-[600px] w-full lg:w-[85%] overflow-hidden parallax-container"
            >
              <img 
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=1200" 
                alt="Chef preparing luxury dish" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s]"
                loading="lazy"
              />
              {/* Subtle gold border accent */}
              <div className="absolute inset-4 border border-gold/20 -z-10" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute -bottom-12 -right-2 md:right-0 w-[70%] md:w-[65%] h-48 md:h-72 border-4 border-darker overflow-hidden shadow-2xl z-20"
            >
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800" 
                alt="Elegant dining atmosphere" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Years badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
              className="absolute top-6 right-2 md:right-[-5%] w-24 h-24 md:w-28 md:h-28 bg-gold flex flex-col items-center justify-center shadow-xl z-30"
            >
              <span className="text-darker font-serif text-3xl md:text-4xl font-bold leading-none">{t('about.years')}</span>
              <span className="text-darker/80 text-[8px] md:text-[9px] uppercase tracking-[0.15em] font-semibold mt-1 text-center leading-tight px-2">{t('about.yearsLabel')}</span>
            </motion.div>
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col justify-center lg:pl-8 order-1 lg:order-2"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="h-[1px] w-12 bg-gradient-to-r from-gold to-transparent" />
              <h2 className="text-gold uppercase tracking-[0.3em] text-[11px] font-semibold">
                {t('about.title')}
              </h2>
            </div>
            
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-10 leading-[1.1] tracking-tight">
              {t('about.subtitle')}
            </h3>
            
            <div className="space-y-6 text-beige/60 leading-relaxed font-light text-base md:text-lg">
              <p>{t('about.description1')}</p>
              <p>{t('about.description2')}</p>
            </div>

            {/* Chef Signature */}
            <div className="mt-16 pt-10 border-t border-white/[0.05] relative">
              <div className="absolute top-0 left-0 w-20 h-[1px] bg-gradient-to-r from-gold/50 to-transparent" />
              <p className="text-gold/80 font-serif text-4xl italic mb-4 gold-shimmer">Emilios</p>
              <p className="text-beige/40 uppercase tracking-[0.3em] text-[10px] font-semibold">{t('about.chef')}</p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
