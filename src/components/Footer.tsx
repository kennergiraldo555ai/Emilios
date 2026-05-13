import { useTranslation } from 'react-i18next';
import { Link as ScrollLink } from 'react-scroll';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-darker pt-24 pb-12 border-t border-white/[0.02] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-20">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6 group cursor-pointer w-max">
              {/* Logo integration point */}
              <div className="h-16 md:h-20 flex items-center justify-start overflow-hidden transition-all duration-500">
                <img 
                  src="/logo.png" 
                  alt="Emilios Logo" 
                  className="h-full w-auto object-contain"
                  onLoad={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.nextElementSibling) {
                      (target.nextElementSibling as HTMLElement).style.display = 'none';
                    }
                    const textContainer = target.parentElement?.nextElementSibling as HTMLElement;
                    if (textContainer && textContainer.classList.contains('fallback-text')) {
                      textContainer.style.display = 'none';
                    }
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.nextElementSibling) {
                      (target.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                <div className="hidden w-12 h-12 border border-gold/30 rounded-sm items-center justify-center group-hover:border-gold transition-colors">
                  <span className="text-gold font-serif text-2xl leading-none">E</span>
                </div>
              </div>
              <div className="flex flex-col fallback-text">
                <span className="text-3xl font-serif text-gold tracking-widest leading-none group-hover:text-gold-light transition-colors duration-500">
                  EMILIOS
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-beige/50 mt-1">
                  Restaurante
                </span>
              </div>
            </div>
            <p className="text-beige/60 font-light leading-relaxed mb-8 max-w-sm">
              {t('hero.tagline')}
            </p>
            <div className="flex space-x-6">
              <a 
                href="https://www.instagram.com/emiliosrestaurante/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 border border-white/10 hover:border-gold/50 transition-all duration-500 rounded-full hover:bg-gold/5"
              >
                <FaInstagram size={18} className="text-beige/40 group-hover:text-gold transition-colors duration-300" />
              </a>
              <a 
                href="https://www.facebook.com/share/1KDP9ocRaX/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 border border-white/10 hover:border-gold/50 transition-all duration-500 rounded-full hover:bg-gold/5"
              >
                <FaFacebook size={18} className="text-beige/40 group-hover:text-gold transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif text-xl mb-6">Contacto</h4>
            <ul className="space-y-4 text-beige/60 font-light text-sm">
              <li>
                <a href="tel:+573208990331" className="hover:text-gold transition-colors duration-300">
                  +57 320 899 0331
                </a>
              </li>
              <li>
                <a href="mailto:info@emilios.com.co" className="hover:text-gold transition-colors duration-300">
                  info@emilios.com.co
                </a>
              </li>
              <li className="leading-relaxed">
                Cra 16 No. 8-60 Los Alpes<br />
                Pereira, Risaralda 660003
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-serif text-xl mb-6">Horario</h4>
            <ul className="space-y-4 text-beige/60 font-light text-sm">
              <li className="flex flex-col">
                <span className="text-white/80 font-medium mb-1">Martes a Jueves</span>
                <span>7:30 am - 9:00 pm</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white/80 font-medium mb-1">Viernes y Sábado</span>
                <span>7:30 am - 11:00 pm</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white/80 font-medium mb-1">Domingos</span>
                <span>7:30 am - 3:00 pm</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-xl mb-6">Navegación</h4>
            <ul className="space-y-3">
              {['menu', 'reservations', 'about', 'location'].map((item) => (
                <li key={item}>
                  <ScrollLink
                    to={item}
                    smooth={true}
                    duration={800}
                    className="text-beige/60 hover:text-gold text-sm font-light uppercase tracking-widest cursor-pointer transition-colors duration-300"
                  >
                    {t(`nav.${item}`)}
                  </ScrollLink>
                </li>
              ))}
              <li>
                <RouterLink
                  to="/delivery"
                  className="text-gold hover:text-gold-light text-sm font-medium uppercase tracking-widest cursor-pointer transition-colors duration-300 flex items-center gap-2 group"
                >
                  Domicilios
                  <div className="w-0 group-hover:w-4 h-[1px] bg-gold-light transition-all duration-300" />
                </RouterLink>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-beige/40 text-[10px] uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Emilios Restaurante. All rights reserved.
          </p>
          <div className="flex gap-6">
            <RouterLink to="/privacy" className="text-beige/40 hover:text-white text-[10px] uppercase tracking-[0.1em] transition-colors">
              Política de Privacidad
            </RouterLink>
            <RouterLink to="/terms" className="text-beige/40 hover:text-white text-[10px] uppercase tracking-[0.1em] transition-colors">
              Términos y Condiciones
            </RouterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
