import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const WHATSAPP_NUMBER = "+573208990331";
export const WHATSAPP_MESSAGE = "¡Hola Emilios! 🥂 Me encantaría vivir la experiencia. ✨ Me gustaría solicitar información sobre reservas/el menú. 🍽️ Muchas gracias.";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] group cursor-pointer"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      <MessageCircle size={32} className="relative z-10" fill="currentColor" />
      
      {/* Tooltip */}
      <span className="absolute right-20 bg-darker/90 backdrop-blur-md text-gold px-4 py-2 rounded-lg text-xs uppercase tracking-[0.2em] font-semibold border border-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Chat with us
      </span>
    </motion.a>
  );
}
