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
    image: "/images/1494790108377-be9c29b29330.webp",
    rating: 5
  },
  {
    name: "Carlos Restrepo",
    text: {
      es: "El Tomahawk es una obra de arte. La atmósfera es perfecta para cenas de negocios o celebraciones especiales. Totalmente recomendado.",
      en: "The Tomahawk is a work of art. The atmosphere is perfect for business dinners or special celebrations. Highly recommended."
    },
    role: { es: "Empresario", en: "Entrepreneur" },
    image: "/images/1500648767791-00dcc994a43e.webp",
    rating: 5
  },
  {
    name: "María Fernanda López",
    text: {
      es: "Cada bocado cuenta una historia. La fusión de sabores tradicionales con técnicas de alta cocina es deslumbrante. El postre de chocolate con oro es imperdible.",
      en: "Every bite tells a story. The fusion of traditional flavors with haute cuisine techniques is dazzling. The gold leaf chocolate dessert is unmissable."
    },
    role: { es: "Bloguera de Viajes", en: "Travel Blogger" },
    image: "/images/1534528741775-53994a69daeb.webp",
    rating: 5
  }
];

export default function Testimonials() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'es' | 'en';

  // Duplicate items for seamless loop
  const loopItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-32 bg-darker relative overflow-hidden">
      {/* Decorative gradient lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      <div className="max-w-full relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24 px-6">
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
            className="text-4xl md:text-6xl font-serif text-white tracking-tight"
          >
            {t('testimonials.subtitle')}
          </motion.h3>
        </div>

        {/* Looping Slider Container */}
        <div className="relative flex overflow-hidden marquee-container group">
          <motion.div 
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{ 
              ease: "linear", 
              duration: 35, 
              repeat: Infinity 
            }}
            className="flex space-x-6 md:space-x-8 marquee-track px-3"
          >
            {loopItems.map((test, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[300px] md:w-[450px] bg-dark/40 backdrop-blur-md p-8 md:p-12 border border-white/[0.03] group-hover/track:border-gold/20 transition-all duration-700 relative flex flex-col justify-between"
              >
                {/* Quote icon */}
                <Quote size={32} className="absolute top-8 right-8 text-gold/5 group-hover:text-gold/10 transition-colors duration-700" />
                
                <div>
                  {/* Stars */}
                  <div className="flex space-x-1 mb-6">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={12} className="text-gold" fill="currentColor" />
                    ))}
                  </div>
                  
                  <p className="text-beige/70 font-light italic mb-10 leading-relaxed text-sm md:text-base">
                    "{test.text[lang] || test.text.es}"
                  </p>
                </div>
                
                <div className="border-t border-white/[0.05] pt-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-gold/30">
                    <img 
                      src={test.image}
                      alt={test.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-serif tracking-wider text-sm mb-0.5">
                      {test.name}
                    </h4>
                    <p className="text-gold/70 text-[8px] uppercase tracking-[0.2em] font-medium">
                      {test.role[lang] || test.role.es}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
