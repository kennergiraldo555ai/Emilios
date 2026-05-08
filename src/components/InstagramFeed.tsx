import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

const feed = [
  "https://images.unsplash.com/photo-1544025162-811114bd4b3e?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1551223405-f3708e18df04?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=600"
];

export default function InstagramFeed() {
  const { t } = useTranslation();

  return (
    <section className="py-28 bg-dark relative overflow-hidden">
      <div className="max-w-full mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 px-6">
          <motion.a 
            href="https://www.instagram.com/emiliosrestaurante/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-3 mb-6 text-gold hover:text-gold-light transition-colors group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <FaInstagram size={22} className="group-hover:scale-110 transition-transform duration-300" />
            <h2 className="uppercase tracking-[0.3em] text-[11px] font-semibold">
              {t('instagram.title')}
            </h2>
          </motion.a>
          <motion.h3 
            className="text-4xl md:text-5xl font-serif text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a 
              href="https://www.instagram.com/emiliosrestaurante/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors duration-500"
            >
              {t('instagram.subtitle')}
            </a>
          </motion.h3>
        </div>

        {/* Gallery – continuous scroll */}
        <div className="flex overflow-hidden marquee-container">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            className="flex min-w-max marquee-track"
          >
            {[...feed, ...feed].map((img, index) => (
              <a 
                key={index}
                href="https://www.instagram.com/emiliosrestaurante/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex-shrink-0 cursor-pointer overflow-hidden block mx-[2px]"
              >
                <div className="absolute inset-0 bg-darker/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                  <FaInstagram className="text-white w-10 h-10 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] scale-50 group-hover:scale-100 transition-transform duration-500 ease-out" />
                </div>
                <img 
                  src={img} 
                  alt="Instagram @emiliosrestaurante" 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                  loading="lazy"
                />
              </a>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
