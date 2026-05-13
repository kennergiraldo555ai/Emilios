import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { RESTAURANT_INFO } from '../config/restaurant';

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 bg-dark min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mb-6">
            <Shield size={32} />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Política de Privacidad</h1>
          <p className="text-gold uppercase tracking-[0.3em] text-[11px] font-semibold">{RESTAURANT_INFO.name}</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-invert max-w-none space-y-8 text-beige/70 font-light leading-relaxed"
        >
          <section>
            <h2 className="text-2xl font-serif text-white mb-4 italic">1. Introducción</h2>
            <p>
              En {RESTAURANT_INFO.name}, valoramos su privacidad y estamos comprometidos a proteger sus datos personales. Esta política explica cómo recopilamos, usamos y protegemos la información que nos proporciona a través de nuestro sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4 italic">2. Información que Recopilamos</h2>
            <p>
              Recopilamos información que usted nos proporciona directamente cuando realiza una reserva o solicita un domicilio, incluyendo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nombre completo</li>
              <li>Número de teléfono (WhatsApp)</li>
              <li>Dirección de entrega (para domicilios)</li>
              <li>Preferencias gastronómicas y comentarios adicionales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4 italic">3. Uso de la Información</h2>
            <p>
              Utilizamos su información exclusivamente para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gestionar y confirmar sus reservas</li>
              <li>Procesar y entregar sus pedidos a domicilio</li>
              <li>Brindar una atención personalizada durante su visita</li>
              <li>Comunicarnos con usted respecto a sus solicitudes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4 italic">4. Protección de Datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra el acceso no autorizado, la pérdida o la alteración. No compartimos su información personal con terceros con fines comerciales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4 italic">5. Sus Derechos</h2>
            <p>
              Usted tiene derecho a acceder, rectificar o eliminar sus datos personales en cualquier momento. Para ejercer estos derechos, puede ponerse en contacto con nosotros a través de nuestro canal oficial de WhatsApp.
            </p>
          </section>

          <section className="pt-8 border-t border-white/10 text-center">
            <p className="text-sm italic">Última actualización: Mayo 2026</p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
