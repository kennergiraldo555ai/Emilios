import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, MapPin, Phone, User, MessageSquare, Plus, Minus, Trash2, Send, ChevronRight, Target, Search, CheckCircle2, Loader2, X, Edit3, Navigation } from 'lucide-react';
import { MapContainer, TileLayer, useMapEvents, useMap } from 'react-leaflet';
import L from 'leaflet';
import { RESTAURANT_INFO } from '../config/restaurant';
import { MENU_DATA, MENU_CATEGORIES } from '../config/menu';

// Leaflet styles
import 'leaflet/dist/leaflet.css';



function MapEventsHandler({ onMoveEnd }: { onMoveEnd: (center: L.LatLng) => void }) {
  const map = useMapEvents({
    moveend: () => {
      onMoveEnd(map.getCenter());
    },
  });
  return null;
}

function MapController({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 18, { animate: true, duration: 1.2 });
  }, [center, map]);
  return null;
}

const reverseGeocode = async (lat: number, lon: number) => {
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&addressdetails=1`);
    const data = await response.json();
    return data?.display_name || "";
  } catch (error) {
    return "";
  }
};

const searchPlaces = async (query: string) => {
  if (query.length < 3) return [];
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query + ", Colombia")}&format=json&addressdetails=1&limit=6`);
    return await response.json();
  } catch (error) {
    return [];
  }
};

export default function DeliveryPage() {
  const [activeCategory, setActiveCategory] = useState('signature');
  const [cart, setCart] = useState<{ id: string, quantity: number, name: string, price: number }[]>([]);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', confirmedAddress: '', comments: '' });
  const [coords, setCoords] = useState<[number, number]>([4.8133, -75.6961]);
  const [step, setStep] = useState(1);
  const [mapCenter, setMapCenter] = useState<[number, number]>([4.8133, -75.6961]);
  const [isSearching, setIsSearching] = useState(false);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isMapLoading, setIsMapLoading] = useState(false);
  const checkoutRef = useRef<HTMLDivElement>(null);
  const searchTimeout = useRef<any>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setSuggestions([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const addToCart = (item: { id: string, name: string, price: number }) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => setCart(prev => prev.filter(i => i.id !== id));
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const formatCurrency = (val: number) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(val);

  const handleContinue = () => {
    setStep(2);
    setTimeout(() => checkoutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  };

  const handleAddressSearch = (val: string) => {
    setFormData(prev => ({ ...prev, address: val }));
    if (searchTimeout.current) clearTimeout(searchTimeout.current);
    if (val.length > 2) {
      setIsSearching(true);
      searchTimeout.current = setTimeout(async () => {
        const results = await searchPlaces(val);
        setSuggestions(results);
        setIsSearching(false);
      }, 600);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectSuggestion = (suggestion: any) => {
    const newCoords: [number, number] = [parseFloat(suggestion.lat), parseFloat(suggestion.lon)];
    setFormData(prev => ({ ...prev, address: suggestion.display_name, confirmedAddress: suggestion.display_name }));
    setMapCenter(newCoords);
    setCoords(newCoords);
    setSuggestions([]);
  };

  const handleMapMoveEnd = useCallback(async (center: L.LatLng) => {
    setIsMapLoading(true);
    const address = await reverseGeocode(center.lat, center.lng);
    setFormData(prev => ({ ...prev, confirmedAddress: address }));
    setCoords([center.lat, center.lng]);
    setIsMapLoading(false);
  }, []);

  const handleDetectLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const newCoords: [number, number] = [latitude, longitude];
        setMapCenter(newCoords);
        setCoords(newCoords);
        const address = await reverseGeocode(latitude, longitude);
        setFormData(prev => ({ ...prev, address: address, confirmedAddress: address }));
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.confirmedAddress) {
      alert("Por favor, confirma tu dirección exacta.");
      return;
    }

    const cartItemsText = cart.map(item => 
      `• ${item.quantity}x ${item.name} - ${formatCurrency(item.price * item.quantity)}`
    ).join('\n');

    const mapLink = `https://www.google.com/maps?q=${coords[0]},${coords[1]}`;

    const messageText = `✨ NUEVA ORDEN DE DOMICILIO - ${RESTAURANT_INFO.name.toUpperCase()} ✨\n\n` +
      `Estimados ${RESTAURANT_INFO.name}, deseo realizar el siguiente pedido:\n\n` +
      `🛒 DETALLE DEL PEDIDO:\n${cartItemsText}\n\n` +
      `💰 RESUMEN:\n` +
      `• TOTAL ESTIMADO: ${formatCurrency(subtotal)}\n\n` +
      `👤 CLIENTE:\n` +
      `• Nombre: ${formData.name}\n` +
      `• Teléfono: ${formData.phone}\n\n` +
      `📍 DATOS DE ENTREGA:\n` +
      `• Dirección: ${formData.confirmedAddress}\n` +
      `• Ubicación GPS: ${mapLink}\n\n` +
      `📝 NOTAS:\n${formData.comments || 'Sin notas.'}`;
    
    // Proper URL encoding for the entire message
    const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.contact.whatsapp.replace('+', '')}?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-28 pb-24 bg-darker min-h-screen text-beige selection:bg-gold/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-gold/50" />
            <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold">Emilios a tu puerta</span>
            <div className="h-[1px] w-8 bg-gold/50" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-serif text-white mb-4 italic">
            Domicilios de Autor
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-8 space-y-10">
            {/* Category Tabs */}
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 border-b border-white/5">
              {MENU_CATEGORIES.map((cat) => (
                <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`text-[10px] uppercase tracking-[0.2em] whitespace-nowrap px-4 py-2 transition-all ${activeCategory === cat.id ? 'text-gold border-b-2 border-gold font-bold' : 'text-beige/40 hover:text-beige/70'}`}>
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Menu Grid */}
            <AnimatePresence mode="wait">
              <motion.div key={activeCategory} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(MENU_DATA as any)[activeCategory].map((item: any) => (
                  <motion.div key={item.id} layoutId={item.id} className="bg-dark/40 border border-white/5 p-4 flex gap-5 group hover:border-gold/20 transition-all duration-500 rounded-sm">
                    <div className="w-24 h-24 overflow-hidden flex-shrink-0 bg-darker">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <h3 className="text-white font-serif text-lg leading-tight group-hover:text-gold transition-colors">{item.name}</h3>
                        <p className="text-gold font-serif mt-1">{formatCurrency(item.price)}</p>
                      </div>
                      <motion.button whileTap={{ scale: 0.95 }} onClick={() => addToCart(item)} className="self-end flex items-center gap-2 bg-gold/10 hover:bg-gold text-gold hover:text-darker px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all duration-300">
                        <Plus size={14} /> Agregar
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Checkout Form */}
            <AnimatePresence>
              {step === 2 && (
                <motion.div ref={checkoutRef} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="bg-darker/60 backdrop-blur-3xl border border-white/10 p-8 md:p-12 space-y-10 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                  <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-serif text-white italic">Confirmar Entrega</h2>
                    <button onClick={() => setStep(1)} className="text-gold/50 text-[10px] uppercase tracking-widest hover:text-gold transition-colors flex items-center gap-2">
                      <ChevronRight size={12} className="rotate-180" /> Volver
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-beige/50 flex items-center gap-2 font-bold italic">
                        <User size={12} className="text-gold" /> Nombre Completo
                      </label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-transparent border-b border-white/10 py-3 focus:border-gold outline-none transition-all font-light" placeholder="Ingresa tu nombre" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-beige/50 flex items-center gap-2 font-bold italic">
                        <Phone size={12} className="text-gold" /> WhatsApp
                      </label>
                      <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-transparent border-b border-white/10 py-3 focus:border-gold outline-none transition-all font-light" placeholder="+57" />
                    </div>
                    
                    <div className="md:col-span-2 space-y-8">
                      {/* 1. Search Box */}
                      <div className="space-y-2 relative" ref={searchContainerRef}>
                        <div className="flex justify-between items-end">
                          <label className="text-[10px] uppercase tracking-widest text-beige/50 flex items-center gap-2 font-bold italic">
                            <Search size={12} className="text-gold" /> 1. Buscar en el Mapa
                          </label>
                          <button type="button" onClick={handleDetectLocation} className="text-gold/60 text-[9px] uppercase tracking-widest hover:text-gold flex items-center gap-1 transition-colors bg-gold/5 px-3 py-1 rounded-full border border-gold/10">
                            GPS <Target size={10} />
                          </button>
                        </div>
                        <div className="relative group">
                          <input type="text" value={formData.address} onChange={(e) => handleAddressSearch(e.target.value)} className="w-full bg-dark/20 border border-white/5 rounded-md px-4 py-4 pr-10 focus:border-gold/50 outline-none transition-all font-light text-base" placeholder="Busca tu dirección o un lugar cercano..." />
                          <div className="absolute right-3 top-4">
                            {isSearching ? <Loader2 size={20} className="text-gold animate-spin" /> : formData.address && <X size={18} className="text-gold/30 cursor-pointer hover:text-gold transition-colors" onClick={() => setFormData({...formData, address: ''})} />}
                          </div>
                        </div>

                        <AnimatePresence>
                          {suggestions.length > 0 && (
                            <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="absolute z-[100] left-0 right-0 bg-darker/95 border border-gold/20 shadow-2xl mt-2 max-h-[200px] overflow-y-auto rounded-md backdrop-blur-2xl">
                              {suggestions.map((s, i) => (
                                <button key={i} type="button" onClick={() => handleSelectSuggestion(s)} className="w-full text-left p-4 hover:bg-gold/10 border-b border-white/5 last:border-0 transition-all flex gap-4 items-start">
                                  <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
                                  <div className="flex flex-col">
                                    <span className="text-[13px] text-white font-medium">{s.display_name.split(',')[0]}</span>
                                    <span className="text-[10px] text-beige/40 truncate">{s.display_name.split(',').slice(1).join(',')}</span>
                                  </div>
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Map */}
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                             <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold"><Navigation size={14} /></div>
                             <p className="text-[10px] uppercase tracking-widest font-bold text-gold">2. Ajustar Punto de Entrega</p>
                          </div>
                          <div className="flex items-center gap-2">
                             {isMapLoading ? <Loader2 size={12} className="animate-spin text-gold" /> : <CheckCircle2 size={12} className="text-green-500" />}
                             <span className="text-[9px] text-beige/50 italic">Desliza para micro-ajustes</span>
                          </div>
                        </div>
                        <div className="w-full h-[300px] rounded-sm border border-gold/20 relative overflow-hidden bg-dark">
                          <MapContainer center={mapCenter} zoom={18} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }} className="grayscale contrast-[1.1] invert-[0.9] hue-rotate-[180deg]">
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <MapController center={mapCenter} />
                            <MapEventsHandler onMoveEnd={handleMapMoveEnd} />
                          </MapContainer>
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1000]">
                            <div className="relative mb-10 flex flex-col items-center">
                              <div className="absolute -bottom-1 w-6 h-2 bg-black/40 rounded-full blur-[2px] animate-pulse" />
                              <MapPin size={46} className="text-gold drop-shadow-[0_4px_20px_rgba(197,160,89,0.7)]" fill="currentColor" />
                              <div className="mt-2 bg-gold text-darker text-[8px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">Punto de Entrega</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Mandatory Confirmation */}
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3 bg-gold/5 p-6 border border-gold/20 rounded-sm">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-gold flex items-center gap-2 font-black italic">
                          <Edit3 size={14} /> 3. CONFIRMAR DIRECCIÓN EXACTA (OBLIGATORIO)
                        </label>
                        <p className="text-[9px] text-beige/40 mb-2 italic">* Asegúrate de incluir torre, apartamento o local.</p>
                        <input 
                          type="text" 
                          required 
                          value={formData.confirmedAddress} 
                          onChange={(e) => setFormData({...formData, confirmedAddress: e.target.value})} 
                          className="w-full bg-darker border-b-2 border-gold py-4 px-4 focus:bg-dark transition-all outline-none text-white font-medium text-lg placeholder:text-beige/20" 
                          placeholder="Tu dirección final aquí..." 
                        />
                      </motion.div>
                    </div>

                    <div className="md:col-span-2 space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-beige/50 flex items-center gap-2 font-bold italic">
                        <MessageSquare size={12} className="text-gold" /> Notas del Pedido
                      </label>
                      <textarea value={formData.comments} onChange={(e) => setFormData({...formData, comments: e.target.value})} className="w-full bg-transparent border border-white/10 p-4 focus:border-gold outline-none transition-all min-h-[60px] resize-none font-light text-sm" placeholder="Ej: Portería, timbre dañado..." />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="bg-darker border border-white/5 p-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-2xl font-serif text-white mb-8 flex items-center gap-3 italic"><ShoppingBag size={22} className="text-gold" /> Resumen</h3>
              <div className="space-y-6 mb-10 max-h-[45vh] overflow-y-auto pr-2 custom-scrollbar">
                <AnimatePresence initial={false}>
                  {cart.length === 0 ? (
                    <p className="text-beige/30 italic text-sm text-center py-10">Bolsa vacía.</p>
                  ) : (
                    cart.map((item) => (
                      <motion.div key={item.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, scale: 0.95 }} className="flex flex-col gap-3 pb-6 border-b border-white/5 last:border-0">
                        <div className="flex justify-between items-start">
                          <h4 className="text-white text-sm font-medium pr-4 leading-tight">{item.name}</h4>
                          <button onClick={() => removeFromCart(item.id)} className="text-beige/20 hover:text-red-400 transition-colors"><Trash2 size={16} /></button>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-4 bg-dark/40 px-3 py-1.5 border border-white/10 rounded-full">
                            <button onClick={() => updateQuantity(item.id, -1)} className="text-gold/60 hover:text-gold transition-colors"><Minus size={14} /></button>
                            <span className="text-sm font-serif min-w-[24px] text-center text-white">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="text-gold/60 hover:text-gold transition-colors"><Plus size={14} /></button>
                          </div>
                          <span className="text-gold font-serif">{formatCurrency(item.price * item.quantity)}</span>
                        </div>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>

              {cart.length > 0 && (
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between text-[10px] uppercase tracking-widest text-beige/50"><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></div>
                    <div className="h-[1px] bg-white/10 my-4" />
                    <div className="flex justify-between items-end">
                      <span className="text-xs uppercase tracking-widest font-bold text-white">Total</span>
                      <span className="text-3xl font-serif text-gold leading-none">{formatCurrency(subtotal)}</span>
                    </div>
                  </div>
                  {step === 1 ? (
                    <button onClick={handleContinue} className="w-full bg-gold text-darker py-5 uppercase tracking-[0.25em] text-[11px] font-black hover:bg-gold-light transition-all flex items-center justify-center gap-3 btn-glow shadow-xl">Continuar <ChevronRight size={16} /></button>
                  ) : (
                    <button onClick={handleSubmit} disabled={!formData.name || !formData.phone || !formData.confirmedAddress} className="w-full bg-gold text-darker py-5 uppercase tracking-[0.25em] text-[11px] font-black hover:bg-gold-light transition-all flex items-center justify-center gap-3 btn-glow shadow-xl disabled:opacity-50 disabled:cursor-not-allowed">Solicitar por WhatsApp <Send size={16} /></button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
