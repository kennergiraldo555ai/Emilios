import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ["meat", "seafood", "signature", "dessert", "cocktails"];

const menuData: Record<string, string[]> = {
  meat: ["item1", "item2", "item3"],
  seafood: ["item1", "item2", "item3"],
  signature: ["item1", "item2"],
  dessert: ["item1", "item2"],
  cocktails: ["item1", "item2", "item3"]
};

const prices: Record<string, Record<string, string>> = {
  meat: { item1: "$180.000", item2: "$120.000", item3: "$95.000" },
  seafood: { item1: "$145.000", item2: "$85.000", item3: "$65.000" },
  signature: { item1: "$135.000", item2: "$110.000" },
  dessert: { item1: "$45.000", item2: "$35.000" },
  cocktails: { item1: "$38.000", item2: "$42.000", item3: "$36.000" }
};

const itemImages: Record<string, Record<string, string>> = {
  meat: { 
    item1: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=60&w=600",
    item2: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=60&w=600",
    item3: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=60&w=600"
  },
  seafood: { 
    item1: "https://images.unsplash.com/photo-1511871893393-82cb5f583689?auto=format&fit=crop&q=60&w=600",
    item2: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&q=60&w=600",
    item3: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=60&w=600"
  },
  signature: { 
    item1: "https://images.unsplash.com/photo-1544025162-811114bd4b3e?auto=format&fit=crop&q=60&w=600",
    item2: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=60&w=600"
  },
  dessert: { 
    item1: "https://images.unsplash.com/photo-1563805042-7684c8a9e9cb?auto=format&fit=crop&q=60&w=600",
    item2: "https://images.unsplash.com/photo-1571115177098-24deecaff314?auto=format&fit=crop&q=60&w=600"
  },
  cocktails: { 
    item1: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=60&w=600",
    item2: "https://images.unsplash.com/photo-1560508180-04f141bf1632?auto=format&fit=crop&q=60&w=600",
    item3: "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?auto=format&fit=crop&q=60&w=600"
  }
};

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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <Link
            to="/menu"
            className="group inline-flex items-center gap-4 bg-gold hover:bg-gold-light text-darker px-12 py-4 uppercase tracking-[0.25em] text-[11px] font-semibold transition-all duration-500 shadow-[0_0_40px_rgba(197,160,89,0.15)] hover:shadow-[0_0_60px_rgba(197,160,89,0.3)] btn-glow"
          >
            <span>{t('menu.fullMenuBtn')}</span>
            <ArrowUpRight size={15} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
