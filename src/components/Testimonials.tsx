import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Alejandra Gómez",
    text: {
      es: "Una experiencia culinaria sin igual en Pereira. El nivel de detalle en cada plato y el servicio excepcional hacen de Emilios el mejor restaurante de la ciudad.",
      en: "An unparalleled culinary experience in Pereira. The level of detail in each dish and the exceptional service make Emilios the best restaurant in the city."
    },
    role: { es: "Crítica Gastronómica", en: "Food Critic" },
    rating: 5
  },
  {
    name: "Carlos Restrepo",
    text: {
      es: "El Tomahawk es una obra de arte. La atmósfera es perfecta para cenas de negocios o celebraciones especiales. Totalmente recomendado.",
      en: "The Tomahawk is a work of art. The atmosphere is perfect for business dinners or special celebrations. Highly recommended."
    },
    role: { es: "Empresario", en: "Entrepreneur" },
    rating: 5
  },
  {
    name: "María Fernanda López",
    text: {
      es: "Cada bocado cuenta una historia. La fusión de sabores tradicionales con técnicas de alta cocina es deslumbrante. El postre de chocolate con oro es imperdible.",
      en: "Every bite tells a story. The fusion of traditional flavors with haute cuisine techniques is dazzling. The gold leaf chocolate dessert is unmissable."
    },
    role: { es: "Bloguera de Viajes", en: "Travel Blogger" },
    rating: 5
  }
];

export default function Testimonials() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'es' | 'en';

  return (
    <section id="testimonials" className="py-32 bg-darker relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/5 to-transparent pointer-events-none" />

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
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold/70" />
            <h2 className="text-gold uppercase tracking-[0.3em] text-[11px] font-semibold">
              {t('testimonials.title')}
            </h2>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold/70" />
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-serif text-white tracking-tight"
          >
            {t('testimonials.subtitle')}
          </motion.h3>
        </div>

        {/* Testimonials Container */}
        <div className="relative">
          {/* Mobile: Horizontal Slider | Desktop: Grid */}
          <motion.div 
            className="flex md:grid md:grid-cols-3 gap-6 md:gap-10 overflow-x-auto md:overflow-x-visible pb-12 md:pb-0 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((test, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex-shrink-0 w-[85vw] md:w-auto snap-center group bg-dark/40 backdrop-blur-md p-8 md:p-12 border border-white/[0.03] hover:border-gold/20 transition-all duration-700 relative flex flex-col justify-between"
              >
                {/* Quote icon */}
                <Quote size={40} className="absolute top-8 right-8 text-gold/5 group-hover:text-gold/10 transition-colors duration-700 quote-pulse pointer-events-none" />
                
                <div>
                  {/* Stars */}
                  <div className="flex space-x-1.5 mb-8">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={15} className="text-gold drop-shadow-[0_0_8px_rgba(197,160,89,0.5)]" fill="currentColor" />
                    ))}
                  </div>
                  
                  <p className="text-beige/70 font-light italic mb-10 leading-relaxed text-base md:text-lg min-h-[120px]">
                    "{test.text[lang] || test.text.es}"
                  </p>
                </div>
                
                <div className="border-t border-white/[0.05] pt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/30 group-hover:border-gold transition-colors duration-500 flex-shrink-0">
                    <img 
                      src={index === 0 ? "/images/1494790108377-be9c29b29330.webp" : index === 1 ? "/images/1500648767791-00dcc994a43e.webp" : "/images/1534528741775-53994a69daeb.webp"}
                      alt={test.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-serif tracking-wider text-base mb-1">
                      {test.name}
                    </h4>
                    <p className="text-gold/70 text-[9px] uppercase tracking-[0.2em] font-medium">
                      {test.role[lang] || test.role.es}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Mobile Drag Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="md:hidden flex justify-center mt-4 space-x-2"
          >
            {testimonials.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-gold/20" />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
