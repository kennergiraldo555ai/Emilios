# 🥂 Restaurant Luxury Template — Architecture & Usage Guide

This project has been architected as a **Premium Reusable Template**. All business-specific logic, branding, and content are centralized in configuration files, allowing you to launch a new restaurant website in minutes.

## 📁 Centralized Configuration

All the data you need to change for a new restaurant is located in `src/config/`:

### 1. `src/config/restaurant.ts`
Contains the core business identity:
- **Name & Tagline**: Updates the Hero, Navbar, Footer, and Browser Title.
- **Contact Info**: Updates all WhatsApp links, phone numbers, and social links.
- **Location**: Updates the address text and Google Maps integration.
- **Hours**: Centralizes the opening/closing schedule.
- **Assets**: Defines the paths for your Logo and Hero visuals.

### 2. `src/config/menu.ts`
Contains the data for the **Digital Menu** and **Delivery System**:
- **MENU_CATEGORIES**: Define categories like "Signature", "Carnes", etc.
- **MENU_DATA**: Full list of items for the delivery page (with prices, images, and categories).
- **FEATURED_DISHES**: Curate the specific items shown in the "Featured" collage.
- **PREVIEW_MENU_DATA**: Manage the items shown in the small interactive "Menu Preview" section.

---

## 🎨 Branding & Aesthetics

### Changing Colors
The luxury aesthetic is driven by Tailwind CSS v4 variables in `src/index.css`. 
Look for the `@theme` block:
```css
@theme {
  --color-gold: #c5a059;       /* Primary Brand Color */
  --color-gold-light: #d4b572; /* Hover/Accent Color */
  --color-dark: #0a0a0a;       /* Background Secondary */
  --color-darker: #050505;     /* Background Primary */
  --color-beige: #f5f0e6;      /* Main Text Color */
}
```

### Changing Typography
The template uses **Playfair Display** (Serif) and **Inter** (Sans). To change them, update the Google Fonts import in `index.html` and the `--font-*` variables in `src/index.css`.

---

## 🚀 How to Launch a New Restaurant

1. **Clone/Duplicate**: Copy this entire folder.
2. **Update Config**: Edit `src/config/restaurant.ts` and `src/config/menu.ts` with the new data.
3. **Swap Assets**: Replace `public/logo.png` and images in `public/images/`.
4. **Deploy**:
   - Create a new GitHub repository.
   - Connect to Vercel.
   - The site will build automatically with the new branding.

---

## 🛠 Technical Notes
- **Language**: Bilingual support is handled in `src/i18n.ts`.
- **Logic**: All components (Navbar, Hero, Footer, Delivery, etc.) are now "dumb" and simply consume the data from `src/config/`.
- **Stability**: Strict TypeScript typing ensures that if you miss a field in the config, the project won't build, preventing production errors.

---
*Created with ❤️ for High-End Culinary Experiences.*
