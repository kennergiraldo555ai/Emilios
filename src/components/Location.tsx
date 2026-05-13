import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../config/restaurant';

export default function Location() {
  const { t } = useTranslation();

  return (
    <section id="location" className="py-32 bg-dark relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

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
              {t('location.title')}
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
            {t('location.subtitle')}
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-stretch">
          
          {/* Info Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-2 flex flex-col justify-center bg-darker/95 p-10 md:p-14 border border-white/[0.03] shadow-2xl relative"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

            <div className="space-y-12">
              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-gold/5 rounded-full text-gold group-hover:bg-gold group-hover:text-darker transition-colors duration-500">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-white font-serif text-2xl mb-3">Dirección</h4>
                  <p className="text-beige/60 font-light leading-relaxed text-base">
                    {RESTAURANT_INFO.location.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-gold/5 rounded-full text-gold group-hover:bg-gold group-hover:text-darker transition-colors duration-500">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-white font-serif text-2xl mb-3">Teléfono</h4>
                  <p className="text-beige/60 font-light text-base">
                    <a href={`tel:${RESTAURANT_INFO.contact.whatsapp.replace(/\s/g, '')}`} className="hover:text-gold transition-colors">{RESTAURANT_INFO.contact.whatsapp}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-gold/5 rounded-full text-gold group-hover:bg-gold group-hover:text-darker transition-colors duration-500">
                  <Clock size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-white font-serif text-2xl mb-3">Horario</h4>
                  <ul className="text-beige/60 font-light space-y-2 text-base">
                    <li className="flex flex-col">
                      <span className="text-white/80 font-medium text-sm">Martes a Jueves</span>
                      <span>7:30 am - 9:00 pm</span>
                    </li>
                    <li className="flex flex-col mt-2">
                      <span className="text-white/80 font-medium text-sm">Viernes y Sábado</span>
                      <span>7:30 am - 11:00 pm</span>
                    </li>
                    <li className="flex flex-col mt-2">
                      <span className="text-white/80 font-medium text-sm">Domingos</span>
                      <span>7:30 am - 3:00 pm</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Container */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-3 h-[500px] lg:h-auto min-h-[500px] relative overflow-hidden group border border-white/[0.03] shadow-2xl"
          >
            {/* Overlay to enforce dark cinematic look on the map */}
            <div className="absolute inset-0 bg-darker/60 pointer-events-none z-10 transition-opacity duration-700 group-hover:opacity-10" />
            
            {/* Cinematic vignette for the map */}
            <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(10,10,10,1)] pointer-events-none z-20" />

            {/* Glowing borders */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent z-30" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent z-30" />

            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.6427389816093!2d-75.68819548466657!3d4.809312696434442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38874895690b27%3A0x6b1cc428b4a2e573!2sCra.%2016%20%238-60%2C%20Pereira%2C%20Risaralda!5e0!3m2!1sen!2sco!4v1700000000000!5m2!1sen!2sco" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(1.2)' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out"
            />

            {/* Explore overlay that disappears on hover */}
            <div className="absolute inset-0 z-30 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
              <div className="bg-darker/80 backdrop-blur-sm border border-gold/30 px-6 py-3 rounded-full text-gold uppercase tracking-[0.2em] text-[10px] font-semibold flex items-center gap-2">
                <MapPin size={12} />
                Explorar Mapa
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
