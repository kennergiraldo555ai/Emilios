import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const dishes = [
  {
    id: 1,
    image: "/images/tomahawk_steak.webp",
    key: "meat",
    price: "$280.000",
    reason: { es: "Nuestra pieza más majestuosa, madurada a la perfección.", en: "Our most majestic cut, aged to perfection." }
  },
  {
    id: 2,
    image: "/images/mero_horno.webp",
    key: "seafood",
    price: "$145.000",
    reason: { es: "Fresco, delicado y con una costra de hierbas secreta.", en: "Fresh, delicate, and featuring a secret herb crust." }
  },
  {
    id: 3,
    image: "/images/1504674900247-0877df9cc836.webp",
    key: "signature",
    price: "$110.000",
    reason: { es: "La esencia de nuestra cocina en un solo plato.", en: "The essence of our kitchen in a single dish." }
  },
  {
    id: 4,
    image: "/images/esfera_chocolate.webp",
    key: "dessert",
    price: "$45.000",
    reason: { es: "Una explosión de texturas y chocolate de origen.", en: "An explosion of textures and origin chocolate." }
  },
  {
    id: 5,
    image: "/images/1514362545857-3bc16c4c7d1b.webp",
    key: "cocktails",
    price: "$45.000",
    reason: { es: "Alquimia pura servida con un toque de humo.", en: "Pure alchemy served with a touch of smoke." }
  }
];

export default function FeaturedDishes() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'es' | 'en';

  return (
    <section id="featured" className="py-32 bg-dark relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold" />
            <h2 className="text-gold uppercase tracking-[0.3em] text-[11px] font-semibold">
              {t('featured.title')}
            </h2>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold" />
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-white tracking-tight"
          >
            {t('featured.subtitle')}
          </motion.h3>
        </div>

        {/* Highly Dynamic Irregular Collage */}
        <div className="grid grid-cols-12 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[220px]">
          
          {/* Main Hero Item */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-7 row-span-2 group relative overflow-hidden premium-card rounded-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/20 to-transparent opacity-90 z-10" />
            <img 
              src={dishes[0].image} 
              alt={t(`featured.items.${dishes[0].key}`)} 
              className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[2.5s]"
            />
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-30">
              <span className="text-gold text-[9px] uppercase tracking-[0.4em] mb-2 block font-bold">{t('featured.title')}</span>
              <h4 className="text-white font-serif text-3xl md:text-5xl lg:text-6xl mb-3 leading-none">{t(`featured.items.${dishes[0].key}`)}</h4>
              <p className="text-beige/50 text-[10px] md:text-xs max-w-sm line-clamp-2 mb-4 font-light italic">{dishes[0].reason[lang]}</p>
              <div className="text-gold font-serif text-xl md:text-2xl">{dishes[0].price}</div>
            </div>
          </motion.div>

          {/* Secondary Tall Item */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-6 md:col-span-5 row-span-2 md:row-span-3 group relative overflow-hidden premium-card rounded-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/20 to-transparent opacity-80 z-10" />
            <img 
              src={dishes[1].image} 
              alt={t(`featured.items.${dishes[1].key}`)} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 z-30">
              <h4 className="text-white font-serif text-xl md:text-3xl mb-2">{t(`featured.items.${dishes[1].key}`)}</h4>
              <p className="text-gold font-serif text-lg">{dishes[1].price}</p>
            </div>
          </motion.div>

          {/* Horizontal Item */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-6 md:col-span-4 row-span-1 group relative overflow-hidden premium-card rounded-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/20 to-transparent opacity-80 z-10" />
            <img 
              src={dishes[2].image} 
              alt={t(`featured.items.${dishes[2].key}`)} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.8s]"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 z-30">
              <h4 className="text-white font-serif text-lg md:text-xl">{t(`featured.items.${dishes[2].key}`)}</h4>
              <p className="text-gold font-serif text-sm">{dishes[2].price}</p>
            </div>
          </motion.div>

          {/* Small Square Items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-6 md:col-span-3 row-span-1 group relative overflow-hidden premium-card rounded-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/20 to-transparent opacity-80 z-10" />
            <img 
              src={dishes[3].image} 
              alt={t(`featured.items.${dishes[3].key}`)} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 z-30">
              <h4 className="text-white font-serif text-sm md:text-base leading-tight">{t(`featured.items.${dishes[3].key}`)}</h4>
              <p className="text-gold font-serif text-xs">{dishes[3].price}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-6 md:col-span-4 row-span-1 group relative overflow-hidden premium-card rounded-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/20 to-transparent opacity-80 z-10" />
            <img 
              src={dishes[4].image} 
              alt={t(`featured.items.${dishes[4].key}`)} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 z-30">
              <h4 className="text-white font-serif text-sm md:text-base leading-tight">{t(`featured.items.${dishes[4].key}`)}</h4>
              <p className="text-gold font-serif text-xs">{dishes[4].price}</p>
            </div>
          </motion.div>

        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            to="/menu"
            className="group inline-flex items-center gap-3 bg-transparent border border-gold/40 text-gold hover:bg-gold hover:text-darker hover:border-gold px-12 py-4 uppercase tracking-[0.25em] text-[10px] font-semibold transition-all duration-500"
          >
            <span>{t('featured.viewFullMenu')}</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Link>
        </motion.div>
        
      </div>
    </section>
  );
}
