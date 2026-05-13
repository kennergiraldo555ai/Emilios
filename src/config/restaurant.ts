/**
 * Centralized Restaurant Information
 * 
 * This file contains all the business-specific data.
 * Update these values to adapt the template for a new restaurant.
 */

export const RESTAURANT_INFO = {
  name: "Emilios",
  fullName: "Emilios Restaurante",
  tagline: "Alta cocina, experiencia inmersiva",
  description: "Emilios Restaurante nació de una pasión por la excelencia culinaria. Combinamos técnicas modernas con los sabores tradicionales más refinados de Colombia y el mundo.",
  
  // Contact & Social
  contact: {
    whatsapp: "+573208990331",
    phone: "+573001234567",
    whatsappMessage: "¡Hola Emilios! 🥂 Me encantaría vivir la experiencia. ✨ Me gustaría solicitar información sobre reservas/el menú. 🍽️ Muchas gracias.",
    instagram: "@emiliosrestaurante",
    instagramUrl: "https://instagram.com/emiliosrestaurante",
  },

  // Location
  location: {
    address: "Pereira / Dosquebradas, Colombia",
    shortAddress: "Zona Gastronómica, Pereira",
    city: "Pereira",
    country: "Colombia",
    googleMapsUrl: "https://maps.app.goo.gl/YourActualLinkHere", // Replace with real link
    coordinates: {
      lat: 4.8133,
      lng: -75.6961
    }
  },

  // Hours
  hours: {
    regular: "Mar - Dom: 12:00 PM - 11:00 PM",
    closed: "Lunes: Cerrado"
  },

  // Branding Assets (Paths relative to /public)
  assets: {
    logo: "/logo.png",
    favicon: "/logo.png",
    heroVideo: "/videos/hero_background.mp4", // If applicable
  }
};
