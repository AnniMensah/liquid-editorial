# Liquid Editorial - Premium Mixology Marketplace

[![Vite](https://img.shields.io/badge/vite-%23000000.svg?style=for-the-badge&logo=vite&logoColor=%23646CFF)](https://vite.dev)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev)
[![Tailwind](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

## 🚀 Quick Start

```bash
# Backend
cd backend
npm install
npm start

# Frontend
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view in browser.

## ✨ Features

- **Responsive Design** - Mobile-first with TailwindCSS
- **Auth System** - Login/Register, Protected Routes
- **Marketplace** - Browse mixologists, book services
- **Dashboards** - Admin, Vendor, User panels
- **Component Library** - Reusable UI (GlassCard, Rating, Button)
- **Mock Data** - Sample mixologists, packages, reviews

## 📁 Structure

```
frontend/src/
├── components/     # UI library (layout, common, mixologist...)
├── pages/          # Routes (Home, Profile, Bookings...)
├── context/        # AuthContext, ProtectedRoute
├── hooks/          # useForm, useScrollToTop
├── services/       # API calls
├── data/           # Mock data
└── utils/          # Helpers, constants
```

## 🛠 Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm run lint     # ESLint check
npm run preview  # Preview production build
```

## 🎨 Styling

- **TailwindCSS** - Utility-first CSS
- **Material Symbols** - Icons
- **Glassmorphism** - Modern backdrop-blur effects

## 🚀 Next Steps

1. Connect backend API endpoints
2. Add real user auth (JWT/Firebase)
3. Implement payments (Stripe)
4. Deploy frontend (Vercel/Netlify)

## 📄 License

MIT - see licen