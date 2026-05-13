/**
 * Menu Data Configuration
 * 
 * Centralized categories and items for the delivery and digital menu system.
 */

export const MENU_CATEGORIES = [
  { id: 'signature', name: 'Signature' },
  { id: 'breakfast', name: 'Desayunos' },
  { id: 'meats', name: 'Carnes' },
  { id: 'seafood', name: 'Mar' },
  { id: 'pasta', name: 'Pastas' },
  { id: 'desserts', name: 'Postres' },
  { id: 'beverages', name: 'Bebidas' }
];

export const MENU_DATA = {
  signature: [
    { id: 'sig-1', name: "Tomahawk Emilios", price: 280000, category: 'Signature', image: "/images/tomahawk_steak.webp" },
    { id: 'sig-2', name: "Mero al Horno", price: 145000, category: 'Signature', image: "/images/mero_horno.webp" },
    { id: 'sig-3', name: "Pasta Trufada", price: 110000, category: 'Signature', image: "/images/1551183053-bf91a1d81141.webp" }
  ],
  breakfast: [
    { id: 'brk-1', name: "Desayuno Emilios", price: 45000, category: 'Desayunos', image: "/images/1533089860892-a7c6f0a88666.webp" },
    { id: 'brk-2', name: "Tostadas Francesas", price: 35000, category: 'Desayunos', image: "/images/tostadas_francesas.webp" },
    { id: 'brk-3', name: "Parfait de Temporada", price: 28000, category: 'Desayunos', image: "/images/1494597564530-871f2b93ac55.webp" }
  ],
  meats: [
    { id: 'mt-1', name: "Ribeye", price: 180000, category: 'Carnes', image: "/images/1600891964092-4316c288032e.webp" },
    { id: 'mt-2', name: "Entraña", price: 120000, category: 'Carnes', image: "/images/1529692236671-f1f6cf9683ba.webp" },
    { id: 'mt-3', name: "Lomo de Res", price: 95000, category: 'Carnes', image: "/images/1558030006-450675393462.webp" }
  ],
  seafood: [
    { id: 'sea-1', name: "Salmón al Grill", price: 85000, category: 'Mar de Autor', image: "/images/1485921325833-c519f76c4927.webp" },
    { id: 'sea-2', name: "Langostinos Jumbo", price: 115000, category: 'Mar de Autor', image: "/images/1565557623262-b51c2513a641.webp" }
  ],
  pasta: [
    { id: 'pst-1', name: "Linguini Frutti di Mare", price: 85000, category: 'Pastas', image: "/images/1563379926898-05f4575a45d8.webp" },
    { id: 'pst-2', name: "Risotto de Setas", price: 80000, category: 'Pastas', image: "/images/risotto_setas.webp" }
  ],
  desserts: [
    { id: 'des-1', name: "Esfera de Chocolate", price: 45000, category: 'Postres', image: "/images/esfera_chocolate.webp" },
    { id: 'des-2', name: "Tiramisú Emilios", price: 35000, category: 'Postres', image: "/images/esfera_chocolate.webp" }
  ],
  beverages: [
    { id: 'bev-1', name: "Limonada de Coco", price: 18000, category: 'Bebidas', image: "/images/1513558161293-cdaf765ed2fd.webp" },
    { id: 'bev-2', name: "Café Espresso", price: 8000, category: 'Bebidas', image: "/images/1510591509098-f4fdc6d0ff04.webp" }
  ]
};

export const FEATURED_DISHES = [
  {
    id: 1,
    image: "/images/tomahawk_steak.webp",
    key: "meat",
    price: "$280.000",
    reason: { es: "Nuestra pieza más majestuosa, madurada a la perfección.", en: "Our most majestic cut, aged to perfection." }
  },
  {
    id: 2,
    image: "/images/mero_horno.webp",
    key: "seafood",
    price: "$145.000",
    reason: { es: "Fresco, delicado y con una costra de hierbas secreta.", en: "Fresh, delicate, and featuring a secret herb crust." }
  },
  {
    id: 3,
    image: "/images/1504674900247-0877df9cc836.webp",
    key: "signature",
    price: "$110.000",
    reason: { es: "La esencia de nuestra cocina en un solo plato.", en: "The essence of our kitchen in a single dish." }
  },
  {
    id: 4,
    image: "/images/esfera_chocolate.webp",
    key: "dessert",
    price: "$45.000",
    reason: { es: "Una explosión de texturas y chocolate de origen.", en: "An explosion of textures and origin chocolate." }
  },
  {
    id: 5,
    image: "/images/1514362545857-3bc16c4c7d1b.webp",
    key: "cocktails",
    price: "$45.000",
    reason: { es: "Alquimia pura servida con un toque de humo.", en: "Pure alchemy served with a touch of smoke." }
  }
];

export const PREVIEW_CATEGORIES = ["meat", "seafood", "signature", "dessert", "cocktails"];

export const PREVIEW_MENU_DATA: Record<string, string[]> = {
  meat: ["item1", "item2", "item3"],
  seafood: ["item1", "item2", "item3"],
  signature: ["item1", "item2"],
  dessert: ["item1", "item2"],
  cocktails: ["item1", "item2", "item3"]
};

export const PREVIEW_PRICES: Record<string, Record<string, string>> = {
  meat: { item1: "$180.000", item2: "$120.000", item3: "$95.000" },
  seafood: { item1: "$145.000", item2: "$85.000", item3: "$65.000" },
  signature: { item1: "$135.000", item2: "$110.000" },
  dessert: { item1: "$45.000", item2: "$35.000" },
  cocktails: { item1: "$38.000", item2: "$42.000", item3: "$36.000" }
};

export const PREVIEW_ITEM_IMAGES: Record<string, Record<string, string>> = {
  meat: { 
    item1: "/images/1600891964092-4316c288032e.webp",
    item2: "/images/1529692236671-f1f6cf9683ba.webp",
    item3: "/images/1558030006-450675393462.webp"
  },
  seafood: { 
    item1: "/images/mero_horno.webp",
    item2: "/images/1485921325833-c519f76c4927.webp",
    item3: "/images/1565557623262-b51c2513a641.webp"
  },
  signature: { 
    item1: "/images/tomahawk_steak.webp",
    item2: "/images/1551183053-bf91a1d81141.webp"
  },
  dessert: { 
    item1: "/images/esfera_chocolate.webp",
    item2: "/images/esfera_chocolate.webp"
  },
  cocktails: { 
    item1: "/images/1514362545857-3bc16c4c7d1b.webp",
    item2: "/images/1514362545857-3bc16c4c7d1b.webp",
    item3: "/images/1587223075055-82e9a937ddff.webp"
  }
};

export const FULL_MENU_DATA: Record<string, { name: string, desc: string, price: string, image: string }[]> = {
  signature: [
    { name: "Tomahawk Emilios", desc: "Corte premium de 1000g, madurado 45 días, servido con puré trufado y vegetales asados.", price: "$280.000", image: "/images/tomahawk_steak.webp" },
    { name: "Mero al Horno", desc: "Filete de mero fresco con costra de finas hierbas sobre risotto de azafrán.", price: "$145.000", image: "/images/mero_horno.webp" },
    { name: "Pasta Trufada", desc: "Pappardelle artesanal con crema de trufa negra, champiñones silvestres y parmesano.", price: "$110.000", image: "/images/1551183053-bf91a1d81141.webp" }
  ],
  breakfast: [
    { name: "Desayuno Emilios", desc: "Huevos pochados sobre pan artesanal, aguacate, salmón ahumado y salsa holandesa.", price: "$45.000", image: "/images/1533089860892-a7c6f0a88666.webp" },
    { name: "Tostadas Francesas", desc: "Pan brioche, frutos rojos frescos, sirope de maple puro y crema batida.", price: "$35.000", image: "/images/tostadas_francesas.webp" },
    { name: "Parfait de Temporada", desc: "Yogur griego, granola artesanal, miel orgánica y selección de frutas.", price: "$28.000", image: "/images/1494597564530-871f2b93ac55.webp" }
  ],
  meats: [
    { name: "Ribeye", desc: "Corte jugoso de 400g, acompañado de papas rústicas y chimichurri de la casa.", price: "$180.000", image: "/images/1600891964092-4316c288032e.webp" },
    { name: "Entraña", desc: "Corte tierno a la parrilla, ensalada fresca y puré de papa criolla.", price: "$120.000", image: "/images/1529692236671-f1f6cf9683ba.webp" },
    { name: "Lomo de Res", desc: "Medallones de lomo en salsa de vino tinto y setas, con espárragos al grill.", price: "$95.000", image: "/images/1558030006-450675393462.webp" }
  ],
  seafood: [
    { name: "Salmón al Grill", desc: "Filete de salmón, quinua cítrica y salsa de maracuyá.", price: "$85.000", image: "/images/1485921325833-c519f76c4927.webp" },
    { name: "Langostinos Jumbo", desc: "Langostinos al ajillo con puré de coliflor y crocante de plátano.", price: "$115.000", image: "/images/1565557623262-b51c2513a641.webp" },
    { name: "Ceviche Peruano", desc: "Pescado blanco, leche de tigre, maíz tostado y camote glaseado.", price: "$65.000", image: "/images/1535399831218-d5bd36d1a6b3.webp" }
  ],
  pasta: [
    { name: "Linguini Frutti di Mare", desc: "Pasta con selección de mariscos frescos en salsa pomodoro rústica.", price: "$85.000", image: "/images/1563379926898-05f4575a45d8.webp" },
    { name: "Raviolis de Res", desc: "Raviolis artesanales rellenos de asado de tira en salsa de queso azul.", price: "$75.000", image: "/images/1588013273468-315fd88ea34c.webp" },
    { name: "Risotto de Setas", desc: "Arroz arborio, mezcla de setas silvestres, trufa y parmesano.", price: "$80.000", image: "/images/risotto_setas.webp" }
  ],
  desserts: [
    { name: "Esfera de Chocolate", desc: "Chocolate oscuro 70%, relleno de mousse de maracuyá y láminas de oro.", price: "$45.000", image: "/images/esfera_chocolate.webp" },
    { name: "Tiramisú Emilios", desc: "Clásico italiano con mascarpone fresco, espresso y cacao en polvo.", price: "$35.000", image: "/images/esfera_chocolate.webp" },
    { name: "Crème Brûlée", desc: "Infusionada con vainilla de Madagascar y frutos rojos.", price: "$30.000", image: "/images/esfera_chocolate.webp" }
  ],
  cocktails: [
    { name: "Emilios Signature", desc: "Ginebra, licor de flor de saúco, pepino, limón y tónica premium.", price: "$42.000", image: "/images/1514362545857-3bc16c4c7d1b.webp" },
    { name: "Old Fashioned Ahumado", desc: "Bourbon, angostura, sirope simple, ahumado con madera de cerezo.", price: "$45.000", image: "/images/1514362545857-3bc16c4c7d1b.webp" },
    { name: "Margarita de Jamaica", desc: "Tequila reposado, Cointreau, reducción de flor de jamaica y sal negra.", price: "$38.000", image: "/images/1587223075055-82e9a937ddff.webp" }
  ],
  beverages: [
    { name: "Limonada de Coco", desc: "Limón fresco, crema de coco natural y hielo frappeado.", price: "$18.000", image: "/images/1513558161293-cdaf765ed2fd.webp" },
    { name: "Jugos Naturales", desc: "Selección de frutas de temporada en agua o leche.", price: "$15.000", image: "/images/1622483767028-3f66f32aef97.webp" },
    { name: "Café Espresso", desc: "Blend de la casa, tostión media, notas de chocolate y caramelo.", price: "$8.000", image: "/images/1510591509098-f4fdc6d0ff04.webp" }
  ]
};
