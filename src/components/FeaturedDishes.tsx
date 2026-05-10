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
  const { t } = useTranslation();

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

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {dishes.slice(0, 3).map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative h-[400px] md:h-[480px] overflow-hidden cursor-pointer premium-card"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-darker/90 via-darker/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700 z-10" />
              <img 
                src={dish.image} 
                alt={t(`featured.items.${dish.key}`)} 
                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-white/[0.03] group-hover:border-gold/20 transition-colors duration-700 z-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full p-8 z-30">
                <div className="flex justify-between items-end mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div>
                    <p className="text-gold text-[10px] uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      Featured
                    </p>
                    <h4 className="text-white font-serif text-2xl md:text-3xl">
                      {t(`featured.items.${dish.key}`)}
                    </h4>
                  </div>
                  <p className="text-gold font-serif text-xl">{dish.price}</p>
                </div>
                <p className="text-beige/60 text-[10px] md:text-xs mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                  {dish.reason[t('lang') as 'es' | 'en'] || dish.reason.es}
                </p>
                <div className="h-[1px] w-0 bg-gold group-hover:w-16 transition-all duration-700 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dishes.slice(3, 5).map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, delay: (index + 2) * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative h-[350px] md:h-[400px] overflow-hidden cursor-pointer premium-card"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-darker/90 via-darker/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700 z-10" />
              <img 
                src={dish.image} 
                alt={t(`featured.items.${dish.key}`)} 
                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-white/[0.03] group-hover:border-gold/20 transition-colors duration-700 z-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full p-8 z-30">
                <h4 className="text-white font-serif text-2xl md:text-3xl mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  {t(`featured.items.${dish.key}`)}
                </h4>
                <div className="h-[1px] w-0 bg-gold group-hover:w-16 transition-all duration-700 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <Link
            to="/menu"
            className="group inline-flex items-center gap-3 bg-transparent border border-gold/40 text-gold hover:bg-gold hover:text-darker hover:border-gold px-12 py-4 uppercase tracking-[0.25em] text-[11px] font-semibold transition-all duration-500"
          >
            <span>{t('featured.viewFullMenu')}</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Link>
        </motion.div>
        
      </div>
    </section>
  );
}
