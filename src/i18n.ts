import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Spanish translation
const es = {
  translation: {
    hero: {
      tagline: "Alta cocina, experiencia inmersiva",
      reserve: "Reservar Ahora",
      viewMenu: "Ver Menú"
    },
    nav: {
      about: "Nosotros",
      featured: "Destacados",
      menu: "Menú",
      reservations: "Reservas",
      testimonials: "Testimonios",
      location: "Ubicación"
    },
    about: {
      title: "Nuestra Historia",
      subtitle: "Un Legado de Sabor",
      description1: "Emilios Restaurante nació de una pasión por la excelencia culinaria. Combinamos técnicas modernas con los sabores tradicionales más refinados de Colombia y el mundo.",
      description2: "Ubicados en el corazón de Pereira, ofrecemos una atmósfera íntima, iluminación elegante y un servicio inigualable para los paladares más exigentes. Cada visita es una experiencia que trasciende lo gastronómico.",
      chef: "Chef Ejecutivo",
      yearsLabel: "Años de Excelencia",
      years: "10+"
    },
    featured: {
      title: "Platos Destacados",
      subtitle: "Arte en cada bocado",
      viewFullMenu: "Ver Menú Completo",
      items: {
        meat: "Cortes Premium",
        seafood: "Mariscos Selectos",
        signature: "Plato Insignia",
        dessert: "Postres de Autor",
        cocktails: "Coctelería Fina"
      }
    },
    menu: {
      title: "Experiencia Digital",
      subtitle: "Nuestro Menú",
      fullMenuBtn: "Ver Menú Completo",
      categories: {
        meat: "Cortes",
        seafood: "Mar",
        signature: "Insignia",
        dessert: "Postres",
        cocktails: "Cócteles"
      },
      items: {
        meat: {
          item1: { name: "Tomahawk Steak", desc: "Corte premium de 1.2kg, mantequilla de romero, ajo rostizado" },
          item2: { name: "Ribeye Reserva", desc: "400g de res madurada, puré de papa trufado" },
          item3: { name: "Filet Mignon", desc: "Envuelto en tocino, reducción de vino tinto" }
        },
        seafood: {
          item1: { name: "Cola de Langosta", desc: "Estilo Thermidor, risotto de azafrán" },
          item2: { name: "Pulpo a la Parrilla", desc: "Pimentón, aceite de oliva, papas baby" },
          item3: { name: "Tartar de Salmón", desc: "Crema de aguacate, alcaparras crujientes" }
        },
        signature: {
          item1: { name: "Lomo Emilios", desc: "Nuestra creación insignia, lomo en costra de hierbas finas, salsa de la casa" },
          item2: { name: "Bandeja Gourmet", desc: "Reinvención premium de los sabores colombianos" }
        },
        dessert: {
          item1: { name: "Chocolate Hoja de Oro", desc: "Mousse de cacao al 70%, oro comestible" },
          item2: { name: "Mille-feuille de Pistacho", desc: "Hojaldre caramelizado, vainilla de Madagascar" }
        },
        cocktails: {
          item1: { name: "Old Fashioned Emilios", desc: "Whisky reserva, bitter artesanal, naranja ahumada" },
          item2: { name: "Espresso Martini Gold", desc: "Vodka premium, café colombiano, licor de café, hoja de oro" },
          item3: { name: "Negroni del Eje", desc: "Gin importado, Campari, Vermut rojo, twist de naranja" }
        }
      }
    },
    reservation: {
      title: "Haz tu Reserva",
      subtitle: "Asegura tu mesa en Emilios",
      form: {
        name: "Nombre Completo",
        phone: "Número de Teléfono",
        date: "Fecha",
        time: "Hora",
        guests: "Número de Personas",
        comments: "Comentarios o Peticiones Especiales",
        submit: "Confirmar Reserva vía WhatsApp"
      }
    },
    testimonials: {
      title: "Lo que dicen nuestros clientes",
      subtitle: "Experiencias Inolvidables"
    },
    instagram: {
      title: "Síguenos en Instagram",
      subtitle: "@emiliosrestaurante"
    },
    location: {
      title: "Encuéntranos",
      subtitle: "Visítanos",
      address: "Pereira / Dosquebradas, Colombia",
      addressDesc: "Ubicados en la zona más exclusiva de la ciudad.",
      hours: "Horarios",
      hoursDetail: "Mar - Dom: 12:00 PM - 11:00 PM",
      hoursClosed: "Lunes: Cerrado",
      contact: "Contacto",
      getDirections: "Cómo Llegar"
    },
    footer: {
      location: "Ubicación",
      hours: "Horarios",
      contact: "Contacto",
      rights: "Todos los derechos reservados.",
      navigation: "Navegación",
      digitalMenu: "Menú Digital Completo",
      tagline: "Diseñado para una experiencia culinaria de lujo."
    },
    mobileCta: {
      reserve: "Reservar",
      call: "Llamar"
    }
  }
};

// English translation
const en = {
  translation: {
    hero: {
      tagline: "Haute cuisine, immersive experience",
      reserve: "Reserve Now",
      viewMenu: "View Menu"
    },
    nav: {
      about: "About",
      featured: "Featured",
      menu: "Menu",
      reservations: "Reservations",
      testimonials: "Testimonials",
      location: "Location"
    },
    about: {
      title: "Our Story",
      subtitle: "A Legacy of Flavor",
      description1: "Emilios Restaurante was born from a passion for culinary excellence. We combine modern techniques with the most refined traditional flavors of Colombia and the world.",
      description2: "Located in the heart of Pereira, we offer an intimate atmosphere, elegant lighting, and unparalleled service for the most demanding palates. Every visit is an experience that transcends gastronomy.",
      chef: "Executive Chef",
      yearsLabel: "Years of Excellence",
      years: "10+"
    },
    featured: {
      title: "Featured Dishes",
      subtitle: "Art in every bite",
      viewFullMenu: "View Full Menu",
      items: {
        meat: "Premium Cuts",
        seafood: "Select Seafood",
        signature: "Signature Dish",
        dessert: "Signature Desserts",
        cocktails: "Fine Mixology"
      }
    },
    menu: {
      title: "Digital Experience",
      subtitle: "Our Menu",
      fullMenuBtn: "View Complete Menu",
      categories: {
        meat: "Cuts",
        seafood: "Sea",
        signature: "Signature",
        dessert: "Desserts",
        cocktails: "Cocktails"
      },
      items: {
        meat: {
          item1: { name: "Tomahawk Steak", desc: "Premium 1.2kg cut, rosemary butter, roasted garlic" },
          item2: { name: "Ribeye Reserva", desc: "400g aged beef, truffle mashed potatoes" },
          item3: { name: "Filet Mignon", desc: "Bacon wrapped, red wine reduction" }
        },
        seafood: {
          item1: { name: "Lobster Tail", desc: "Thermidor style, saffron risotto" },
          item2: { name: "Grilled Octopus", desc: "Paprika, olive oil, baby potatoes" },
          item3: { name: "Salmon Tartare", desc: "Avocado cream, crispy capers" }
        },
        signature: {
          item1: { name: "Lomo Emilios", desc: "Our signature creation, herb-crusted loin, house special sauce" },
          item2: { name: "Gourmet Bandeja", desc: "Premium reinvention of Colombian flavors" }
        },
        dessert: {
          item1: { name: "Gold Leaf Chocolate", desc: "70% cacao mousse, edible gold" },
          item2: { name: "Pistachio Mille-feuille", desc: "Caramelized puff pastry, Madagascar vanilla" }
        },
        cocktails: {
          item1: { name: "Old Fashioned Emilios", desc: "Reserve whisky, artisanal bitters, smoked orange" },
          item2: { name: "Espresso Martini Gold", desc: "Premium vodka, Colombian coffee, coffee liqueur, gold leaf" },
          item3: { name: "Negroni del Eje", desc: "Imported gin, Campari, red Vermouth, orange twist" }
        }
      }
    },
    reservation: {
      title: "Make a Reservation",
      subtitle: "Secure your table at Emilios",
      form: {
        name: "Full Name",
        phone: "Phone Number",
        date: "Date",
        time: "Time",
        guests: "Number of Guests",
        comments: "Comments or Special Requests",
        submit: "Confirm Reservation via WhatsApp"
      }
    },
    testimonials: {
      title: "What our clients say",
      subtitle: "Unforgettable Experiences"
    },
    instagram: {
      title: "Follow us on Instagram",
      subtitle: "@emiliosrestaurante"
    },
    location: {
      title: "Find Us",
      subtitle: "Visit Us",
      address: "Pereira / Dosquebradas, Colombia",
      addressDesc: "Located in the city's most exclusive area.",
      hours: "Opening Hours",
      hoursDetail: "Tue - Sun: 12:00 PM - 11:00 PM",
      hoursClosed: "Monday: Closed",
      contact: "Contact",
      getDirections: "Get Directions"
    },
    footer: {
      location: "Location",
      hours: "Opening Hours",
      contact: "Contact",
      rights: "All rights reserved.",
      navigation: "Navigation",
      digitalMenu: "Full Digital Menu",
      tagline: "Designed for a luxury dining experience."
    },
    mobileCta: {
      reserve: "Reserve",
      call: "Call"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
      es
    },
    lng: "es", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
