import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

import { RESTAURANT_INFO } from '../config/restaurant';

export const WHATSAPP_NUMBER = RESTAURANT_INFO.contact.whatsapp;
export const WHATSAPP_MESSAGE = RESTAURANT_INFO.contact.whatsappMessage;

export default function WhatsAppButton() {
  const [isScrolled, setIsScrolled] = useState(false);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        bottom: isScrolled ? "100px" : "32px" // Move up when mobile CTA is visible
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed right-6 z-[60] w-14 h-14 bg-darker/80 backdrop-blur-xl text-gold rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.6)] border border-gold/30 group cursor-pointer"
    >
      <div className="absolute inset-0 rounded-full bg-gold/10 animate-pulse" />
      <MessageCircle size={26} className="relative z-10" fill="currentColor" />
      
      {/* Label - Desktop only */}
      <span className="hidden md:block absolute right-18 bg-darker/90 backdrop-blur-md text-gold px-4 py-2 rounded-lg text-[10px] uppercase tracking-[0.2em] font-semibold border border-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        RESERVAS
      </span>
    </motion.a>
  );
}
