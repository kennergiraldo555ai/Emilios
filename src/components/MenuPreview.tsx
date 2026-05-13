import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  PREVIEW_CATEGORIES as categories, 
  PREVIEW_MENU_DATA as menuData, 
  PREVIEW_PRICES as prices, 
  PREVIEW_ITEM_IMAGES as itemImages 
} from '../config/menu';

export default function MenuPreview() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("meat");

  return (
    <section id="menu" className="py-32 bg-darker relative overflow-hidden">
      {/* Optimized Performance CSS Radial Gradients */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.05)_0%,rgba(197,160,89,0)_50%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(235,226,213,0.02)_0%,rgba(235,226,213,0)_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold/70" />
            <h2 className="text-gold uppercase tracking-[0.3em] text-[11px] font-semibold">
              {t('menu.title')}
            </h2>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold/70" />
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-white tracking-tight"
          >
            {t('menu.subtitle')}
          </motion.h3>
        </div>
        
        {/* Top CTA for visibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <Link
            to="/menu"
            className="group inline-flex items-center gap-4 bg-transparent border border-gold/40 text-gold hover:bg-gold hover:text-darker hover:border-gold px-12 py-4 uppercase tracking-[0.25em] text-[11px] font-semibold transition-all duration-500 shadow-[0_0_40px_rgba(197,160,89,0.05)] hover:shadow-[0_0_60px_rgba(197,160,89,0.15)]"
          >
            <span>{t('menu.fullMenuBtn')}</span>
            <ArrowUpRight size={15} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Categories */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center flex-wrap gap-4 md:gap-10 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[11px] uppercase tracking-[0.2em] pb-3 px-2 transition-all duration-300 relative ${
                activeCategory === cat ? 'text-gold font-semibold' : 'text-beige/40 hover:text-beige/80'
              }`}
            >
              {t(`menu.categories.${cat}`)}
              {activeCategory === cat && (
                <motion.div
                  layoutId="menu-underline"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <div className="min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
            >
              {menuData[activeCategory].map((itemKey, index) => (
                <motion.div
                  key={itemKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                  className="group relative flex flex-col bg-dark/40 border border-white/[0.03] hover:border-gold/30 transition-all duration-500 overflow-hidden shadow-xl"
                >
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-darker/30 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                      src={itemImages[activeCategory]?.[itemKey]} 
                      alt="Menu item" 
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col justify-between relative bg-gradient-to-t from-darker via-darker/95 to-darker/80 -mt-2 z-20">
                    <div>
                      <div className="flex justify-between items-start mb-3 gap-4">
                        <h4 className="text-lg font-serif text-white group-hover:text-gold transition-colors duration-500">
                          {t(`menu.items.${activeCategory}.${itemKey}.name`)}
                        </h4>
                        <div className="text-gold font-serif text-lg whitespace-nowrap">
                          {prices[activeCategory][itemKey]}
                        </div>
                      </div>
                      <p className="text-xs text-beige/60 font-light leading-relaxed">
                        {t(`menu.items.${activeCategory}.${itemKey}.desc`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>


      </div>
    </section>
  );
}
