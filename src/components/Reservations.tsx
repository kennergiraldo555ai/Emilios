import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, ChevronRight, ChevronLeft } from 'lucide-react';

export default function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    comments: ''
  });

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');

  const scrollRef = useRef<HTMLDivElement>(null);

  // Generate next 30 days, skipping Mondays (1)
  const availableDates = Array.from({ length: 30 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d;
  }).filter(d => d.getDay() !== 1);

  useEffect(() => {
    if (availableDates.length > 0 && !selectedDate) {
      setSelectedDate(availableDates[0]);
    }
  }, []);

  const getAvailableTimes = (date: Date | null) => {
    if (!date) return [];
    const day = date.getDay();
    if (day === 1) return []; // Monday closed
  
    let startHour = 7;
    let startMin = 30;
    let endHour = 21; // 9 PM Tue-Thu
  
    if (day === 5 || day === 6) { // Fri, Sat
      endHour = 23; // 11 PM
    } else if (day === 0) { // Sun
      endHour = 15; // 3 PM
    }
  
    const times = [];
    for (let h = startHour; h <= endHour; h++) {
      for (let m of [0, 30]) {
        if (h === startHour && m < startMin) continue;
        if (h === endHour && m > 0) continue; // Last booking at exact endHour
        
        const ampm = h >= 12 ? 'PM' : 'AM';
        const hour12 = h > 12 ? h - 12 : (h === 0 ? 12 : h);
        const mins = m === 0 ? '00' : '30';
        times.push(`${hour12}:${mins} ${ampm}`);
      }
    }
    return times;
  };

  const availableTimes = getAvailableTimes(selectedDate).filter(time => {
    if (!selectedDate) return false;
    
    const isToday = selectedDate.toDateString() === new Date().toDateString();
    if (!isToday) return true;

    // Parse time like "2:30 PM"
    const [timeStr, ampm] = time.split(' ');
    let [hours, minutes] = timeStr.split(':').map(Number);
    
    if (ampm === 'PM' && hours !== 12) hours += 12;
    if (ampm === 'AM' && hours === 12) hours = 0;

    const reservationTime = new Date(selectedDate);
    reservationTime.setHours(hours, minutes, 0, 0);

    // Only allow times at least 30 minutes in the future
    const minTime = new Date();
    minTime.setMinutes(minTime.getMinutes() + 30);

    return reservationTime > minTime;
  });

  // Reset time if it's not available in the new date
  useEffect(() => {
    if (selectedTime && !availableTimes.includes(selectedTime)) {
      setSelectedTime('');
    }
  }, [selectedDate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert("Por favor selecciona una fecha y hora válidas.");
      return;
    }
    
    const formattedDate = selectedDate.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    
    const message = `*SOLICITUD DE RESERVA — EMILIOS*%0A%0A` +
      `Estimados, deseo solicitar una reserva con los siguientes detalles:%0A%0A` +
      `*• Nombre:* ${formData.name}%0A` +
      `*• Fecha:* ${formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)}%0A` +
      `*• Hora:* ${selectedTime}%0A` +
      `*• Personas:* ${formData.guests}%0A` +
      `*• Teléfono:* ${formData.phone}%0A` +
      `*• Comentarios:* ${formData.comments || 'Sin comentarios adicionales.'}%0A%0A` +
      `_Quedo atento a su confirmación. Muchas gracias._`;
    
    window.open(`https://wa.me/573208990331?text=${message}`, '_blank');
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const inputClasses = "w-full bg-transparent border-b border-white/[0.08] pb-4 pt-2 text-white focus:outline-none focus:border-gold transition-colors duration-500 font-light placeholder:text-beige/20 text-base md:text-lg";
  const labelClasses = "text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-beige/50 font-semibold mb-1 block";

  return (
    <section id="reservations" className="py-32 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.05)_0%,rgba(197,160,89,0)_50%)] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(235,226,213,0.03)_0%,rgba(235,226,213,0)_50%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold/70" />
            <h2 className="text-gold uppercase tracking-[0.3em] text-[11px] font-semibold">
              Reserva tu mesa
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
            Asegura tu Experiencia
          </motion.h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-darker/80 backdrop-blur-2xl p-8 md:p-14 border border-white/[0.03] shadow-[0_30px_100px_rgba(0,0,0,0.8)] relative"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          
          <form onSubmit={handleSubmit} className="space-y-12">
            
            {/* Custom Date Selector */}
            <div className="space-y-4">
              <label className={labelClasses}>Selecciona la Fecha</label>
              <div className="relative group/slider">
                <button 
                  type="button" 
                  onClick={() => scroll('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-darker/90 border border-white/10 p-2 text-gold opacity-0 group-hover/slider:opacity-100 transition-opacity disabled:opacity-0"
                >
                  <ChevronLeft size={16} />
                </button>
                
                <div 
                  ref={scrollRef}
                  className="flex gap-4 overflow-x-auto no-scrollbar py-2 scroll-smooth px-1"
                >
                  {availableDates.map((date, idx) => {
                    const isSelected = selectedDate?.toDateString() === date.toDateString();
                    const dayName = date.toLocaleDateString('es-ES', { weekday: 'short' });
                    const dayNum = date.getDate();
                    const month = date.toLocaleDateString('es-ES', { month: 'short' });
                    
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedDate(date)}
                        className={`flex-shrink-0 flex flex-col items-center justify-center w-20 h-24 border transition-all duration-300 ${
                          isSelected 
                            ? 'border-gold bg-gold/5 shadow-[0_0_20px_rgba(197,160,89,0.15)]' 
                            : 'border-white/[0.05] bg-dark/40 hover:border-gold/30 hover:bg-dark/80'
                        }`}
                      >
                        <span className={`text-[10px] uppercase tracking-wider mb-1 ${isSelected ? 'text-gold' : 'text-beige/50'}`}>{dayName}</span>
                        <span className={`text-2xl font-serif mb-1 ${isSelected ? 'text-white' : 'text-beige/80'}`}>{dayNum}</span>
                        <span className={`text-[9px] uppercase tracking-wider ${isSelected ? 'text-gold' : 'text-beige/40'}`}>{month}</span>
                      </button>
                    );
                  })}
                </div>

                <button 
                  type="button" 
                  onClick={() => scroll('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-darker/90 border border-white/10 p-2 text-gold opacity-0 group-hover/slider:opacity-100 transition-opacity"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Custom Time Selector */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className={labelClasses}>Hora Disponible</label>
                {!selectedTime && <span className="text-gold/80 text-[10px] tracking-wider italic">Requerido *</span>}
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                {availableTimes.length > 0 ? (
                  availableTimes.map((time, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 px-2 text-sm font-light tracking-wide border transition-all duration-300 ${
                        selectedTime === time
                          ? 'border-gold bg-gold text-darker font-medium shadow-[0_0_15px_rgba(197,160,89,0.3)]'
                          : 'border-white/[0.05] bg-dark/40 text-beige/70 hover:border-gold/40 hover:text-white'
                      }`}
                    >
                      {time}
                    </button>
                  ))
                ) : (
                  <div className="col-span-full text-center py-8 text-beige/50 font-light italic">
                    No hay horarios disponibles para este día.
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 pt-4">
              <div className="space-y-1 relative group">
                <label className={labelClasses}>Nombre Completo</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Tu nombre"
                />
              </div>

              <div className="space-y-1 relative group">
                <label className={labelClasses}>Teléfono / WhatsApp</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="+57"
                />
              </div>

              <div className="space-y-1 relative group">
                <label className={labelClasses}>Número de Personas</label>
                <select 
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className={`${inputClasses} appearance-none cursor-pointer`}
                >
                  {[1,2,3,4,5,6,7,8].map(num => (
                    <option key={num} value={num} className="bg-darker text-beige">{num} {num === 1 ? 'Persona' : 'Personas'}</option>
                  ))}
                  <option value="9+" className="bg-darker text-beige">9+ Personas (Evento Especial)</option>
                </select>
              </div>

              <div className="space-y-1 relative group">
                <label className={labelClasses}>Comentarios (Opcional)</label>
                <input 
                  type="text"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Alergias, celebraciones..."
                />
              </div>
            </div>

            <div className="pt-8 text-center md:text-right">
              <button 
                type="submit"
                disabled={!selectedDate || !selectedTime}
                className="group inline-flex items-center gap-4 bg-gold hover:bg-gold-light text-darker px-14 py-5 uppercase tracking-[0.25em] text-[11px] font-semibold transition-all duration-500 w-full md:w-auto justify-center shadow-[0_0_40px_rgba(197,160,89,0.15)] hover:shadow-[0_0_60px_rgba(197,160,89,0.3)] btn-glow disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gold disabled:hover:shadow-none"
              >
                <span>Confirmar Reserva por WhatsApp</span>
                <Send size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
