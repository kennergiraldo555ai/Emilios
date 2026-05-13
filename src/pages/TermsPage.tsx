import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function TermsPage() {
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
            <FileText size={32} />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Términos y Condiciones</h1>
          <p className="text-gold uppercase tracking-[0.3em] text-[11px] font-semibold">Emilios Restaurante</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-invert max-w-none space-y-8 text-beige/70 font-light leading-relaxed"
        >
          <section>
            <h2 className="text-2xl font-serif text-white mb-4 italic">1. Aceptación de Términos</h2>
            <p>
              Al acceder y utilizar este sitio web, usted acepta estar sujeto a los siguientes términos y condiciones. Si no está de acuerdo con alguno de estos términos, le rogamos que no utilice el sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4 italic">2. Reservas</h2>
            <p>
              Las reservas realizadas a través de nuestra plataforma están sujetas a disponibilidad. Emilios Restaurante se reserva el derecho de cancelar o modificar una reserva en caso de fuerza mayor, comunicándolo oportunamente al cliente.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Se recomienda llegar 10 minutos antes de la hora reservada.</li>
              <li>La mesa se mantendrá por un máximo de 15 minutos después de la hora pactada.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4 italic">3. Domicilios</h2>
            <p>
              Nuestro servicio de domicilio está sujeto a cobertura geográfica y horarios de operación.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Los tiempos de entrega son estimados y pueden variar según el tráfico o la demanda.</li>
              <li>El pago se realizará mediante los métodos acordados previamente por WhatsApp (no se procesan pagos en este sitio).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4 italic">4. Propiedad Intelectual</h2>
            <p>
              Todo el contenido de este sitio (logos, imágenes, textos, menús) es propiedad exclusiva de Emilios Restaurante y está protegido por las leyes de derechos de autor. Queda prohibida su reproducción sin consentimiento previo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-white mb-4 italic">5. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.
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
