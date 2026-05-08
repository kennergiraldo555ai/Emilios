import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ["signature", "breakfast", "meats", "seafood", "pasta", "desserts", "cocktails", "beverages"];

const menuData: Record<string, { name: string, desc: string, price: string, image: string }[]> = {
  signature: [
    { name: "Tomahawk Emilios", desc: "Corte premium de 1000g, madurado 45 días, servido con puré trufado y vegetales asados.", price: "$280.000", image: "https://images.unsplash.com/photo-1544025162-811114bd4b3e?auto=format&fit=crop&q=60&w=600" },
    { name: "Mero al Horno", desc: "Filete de mero fresco con costra de finas hierbas sobre risotto de azafrán.", price: "$145.000", image: "https://images.unsplash.com/photo-1511871893393-82cb5f583689?auto=format&fit=crop&q=60&w=600" },
    { name: "Pasta Trufada", desc: "Pappardelle artesanal con crema de trufa negra, champiñones silvestres y parmesano.", price: "$110.000", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=60&w=600" }
  ],
  breakfast: [
    { name: "Desayuno Emilios", desc: "Huevos pochados sobre pan artesanal, aguacate, salmón ahumado y salsa holandesa.", price: "$45.000", image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=60&w=600" },
    { name: "Tostadas Francesas", desc: "Pan brioche, frutos rojos frescos, sirope de maple puro y crema batida.", price: "$35.000", image: "https://images.unsplash.com/photo-1484723091791-0fee59ca0b09?auto=format&fit=crop&q=60&w=600" },
    { name: "Parfait de Temporada", desc: "Yogur griego, granola artesanal, miel orgánica y selección de frutas.", price: "$28.000", image: "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=60&w=600" }
  ],
  meats: [
    { name: "Ribeye", desc: "Corte jugoso de 400g, acompañado de papas rústicas y chimichurri de la casa.", price: "$180.000", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=60&w=600" },
    { name: "Entraña", desc: "Corte tierno a la parrilla, ensalada fresca y puré de papa criolla.", price: "$120.000", image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=60&w=600" },
    { name: "Lomo de Res", desc: "Medallones de lomo en salsa de vino tinto y setas, con espárragos al grill.", price: "$95.000", image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=60&w=600" }
  ],
  seafood: [
    { name: "Salmón al Grill", desc: "Filete de salmón, quinua cítrica y salsa de maracuyá.", price: "$85.000", image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&q=60&w=600" },
    { name: "Langostinos Jumbo", desc: "Langostinos al ajillo con puré de coliflor y crocante de plátano.", price: "$115.000", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=60&w=600" },
    { name: "Ceviche Peruano", desc: "Pescado blanco, leche de tigre, maíz tostado y camote glaseado.", price: "$65.000", image: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&q=60&w=600" }
  ],
  pasta: [
    { name: "Linguini Frutti di Mare", desc: "Pasta con selección de mariscos frescos en salsa pomodoro rústica.", price: "$85.000", image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&q=60&w=600" },
    { name: "Raviolis de Res", desc: "Raviolis artesanales rellenos de asado de tira en salsa de queso azul.", price: "$75.000", image: "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?auto=format&fit=crop&q=60&w=600" },
    { name: "Risotto de Setas", desc: "Arroz arborio, mezcla de setas silvestres, trufa y parmesano.", price: "$80.000", image: "https://images.unsplash.com/photo-1633337474564-1d8bfccbd2bf?auto=format&fit=crop&q=60&w=600" }
  ],
  desserts: [
    { name: "Esfera de Chocolate", desc: "Chocolate oscuro 70%, relleno de mousse de maracuyá y láminas de oro.", price: "$45.000", image: "https://images.unsplash.com/photo-1563805042-7684c8a9e9cb?auto=format&fit=crop&q=60&w=600" },
    { name: "Tiramisú Emilios", desc: "Clásico italiano con mascarpone fresco, espresso y cacao en polvo.", price: "$35.000", image: "https://images.unsplash.com/photo-1571115177098-24deecaff314?auto=format&fit=crop&q=60&w=600" },
    { name: "Crème Brûlée", desc: "Infusionada con vainilla de Madagascar y frutos rojos.", price: "$30.000", image: "https://images.unsplash.com/photo-1473655551229-a39d1a9828dc?auto=format&fit=crop&q=60&w=600" }
  ],
  cocktails: [
    { name: "Emilios Signature", desc: "Ginebra, licor de flor de saúco, pepino, limón y tónica premium.", price: "$42.000", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=60&w=600" },
    { name: "Old Fashioned Ahumado", desc: "Bourbon, angostura, sirope simple, ahumado con madera de cerezo.", price: "$45.000", image: "https://images.unsplash.com/photo-1560508180-04f141bf1632?auto=format&fit=crop&q=60&w=600" },
    { name: "Margarita de Jamaica", desc: "Tequila reposado, Cointreau, reducción de flor de jamaica y sal negra.", price: "$38.000", image: "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?auto=format&fit=crop&q=60&w=600" }
  ],
  beverages: [
    { name: "Limonada de Coco", desc: "Limón fresco, crema de coco natural y hielo frappeado.", price: "$18.000", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=60&w=600" },
    { name: "Jugos Naturales", desc: "Selección de frutas de temporada en agua o leche.", price: "$15.000", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=60&w=600" },
    { name: "Café Espresso", desc: "Blend de la casa, tostión media, notas de chocolate y caramelo.", price: "$8.000", image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=60&w=600" }
  ]
};

export default function FullMenuPage() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("signature");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-32 bg-darker min-h-screen relative overflow-hidden">
      {/* High Performance CSS Radial Gradients instead of heavy blurs */}
      <div className="absolute top-0 right-0 w-full h-[800px] bg-[radial-gradient(circle_at_80%_20%,rgba(197,160,89,0.06)_0%,rgba(197,160,89,0)_50%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[800px] bg-[radial-gradient(circle_at_20%_80%,rgba(235,226,213,0.03)_0%,rgba(235,226,213,0)_50%)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      
      {/* Optimized texture layer with lower opacity and strict bounds */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none bg-repeat z-0" 
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=10&w=100")', backgroundSize: '100px 100px' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold" />
            <h1 className="text-gold uppercase tracking-[0.4em] text-[12px] font-semibold">
              El Menú Completo
            </h1>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-none mb-6"
          >
            Experiencia<br/>
            <span className="italic text-beige/50 text-5xl md:text-6xl lg:text-7xl">Culinaria</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="text-beige/60 font-light max-w-2xl text-lg leading-relaxed"
          >
            Descubra una sinfonía de sabores donde la tradición se encuentra con la alta cocina contemporánea.
          </motion.p>
        </div>

        {/* Categories Navigation */}
        <div className="sticky top-20 md:top-24 z-40 bg-darker/95 backdrop-blur-xl py-5 mb-16 border-y border-white/[0.05] -mx-6 px-6 shadow-2xl">
          <div className="max-w-7xl mx-auto overflow-x-auto no-scrollbar scroll-smooth">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex justify-start md:justify-center gap-6 md:gap-10 min-w-max pb-1"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    const el = document.getElementById('menu-items');
                    if (el) {
                       const y = el.getBoundingClientRect().top + window.scrollY - 150;
                       window.scrollTo({top: y, behavior: 'smooth'});
                    }
                  }}
                  className={`text-[10px] md:text-[11px] uppercase tracking-[0.25em] pb-3 transition-colors duration-300 relative whitespace-nowrap ${
                    activeCategory === cat ? 'text-gold font-semibold' : 'text-beige/40 hover:text-beige/80'
                  }`}
                >
                  {cat === 'signature' ? 'Signature' :
                   cat === 'breakfast' ? 'Desayunos' :
                   cat === 'meats' ? 'Carnes' :
                   cat === 'seafood' ? 'Mar de Autor' :
                   cat === 'pasta' ? 'Pastas & Risottos' :
                   cat === 'desserts' ? 'Postres' :
                   cat === 'cocktails' ? 'Coctelería' : 'Bebidas'}
                   
                  {activeCategory === cat && (
                    <motion.div
                      layoutId="fullmenu-underline"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold"
                      transition={{ type: "spring", stiffness: 400, damping: 40 }}
                    />
                  )}
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div id="menu-items" className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            >
              {menuData[activeCategory].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                  className="group relative flex flex-col bg-dark/20 border border-white/[0.02] hover:border-gold/20 transition-all duration-500 overflow-hidden"
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-dark">
                    <div className="absolute inset-0 bg-darker/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  
                  {/* Content Container */}
                  <div className="p-6 md:p-8 flex-grow flex flex-col justify-between relative bg-gradient-to-t from-darker to-transparent">
                    <div>
                      <div className="flex justify-between items-start mb-4 gap-4">
                        <h4 className="text-xl md:text-2xl font-serif text-white group-hover:text-gold transition-colors duration-500 leading-tight">
                          {item.name}
                        </h4>
                        <div className="text-gold font-serif text-xl whitespace-nowrap mt-1">
                          {item.price}
                        </div>
                      </div>
                      <p className="text-sm text-beige/60 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    
                    {/* Subtle aesthetic line */}
                    <div className="mt-8 h-[1px] w-0 bg-gold/50 group-hover:w-full transition-all duration-700 ease-out" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
      </div>
    </div>
  );
}
