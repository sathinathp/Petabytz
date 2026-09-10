# PetaBytz Technologies - Modern Enterprise Web Platform

This is the modernized, high-performance web platform for **PetaBytz Technologies**, migrated and elevated from the legacy PHP codebase into a modern full-stack web architecture.

---

## Tech Stack

- **Frontend**:
  - React 18
  - Vite 6
  - Tailwind CSS v4 & PostCSS
  - Lucide React Icons
  - Framer Motion
  - React Router DOM v6
- **Backend**:
  - Node.js & Express API server
  - RESTful endpoints for Lead Capture, Contact Inquiries, Newsletter Subscriptions, and Whitepaper Downloads.
- **Assets**:
  - All brand logos, service diagrams, partner badges, and illustration graphics preserved in `public/images/`.

---

## Project Structure

```
p2/
├── public/
│   └── images/              # 350+ brand assets, logos, service graphics
├── src/
│   ├── components/          # Reusable UI (Topbar, Header with MegaMenu, Footer, CTA, etc.)
│   ├── data/                # Navigation, 25+ detailed services, case studies, whitepapers, locations
│   ├── pages/               # Home, AboutUs, Clients, Partners, Accreditation, Careers, ContactUs, etc.
│   ├── App.jsx              # Comprehensive routing
│   ├── main.jsx             # React DOM root
│   └── index.css            # Modern styling, glassmorphism & gradients
├── server/
│   ├── index.js             # Express API server for lead handling
│   └── package.json
├── package.json
├── vite.config.js
└── index.html
```

---

## How to Run

### 1. Frontend (Vite + React)
```bash
# In the p2 directory
npm install
npm run dev
```
The frontend will start at: `http://localhost:5173`

To create an optimized production build:
```bash
npm run build
npm run preview
```

### 2. Backend (Node + Express)
```bash
# In the p2/server directory
cd server
npm install
npm start
```
The API server will run at: `http://localhost:5000`

---

## Key Features & Pages

- **Interactive Mega-Menus**: Multi-column categorization across Cloud, Digital, Managed Services, ITSM, AI Solutions, Salesforce, Knowledge Hub, and Company.
- **Global Office Switcher**: Interactive switcher between India (HQ), USA, and Canada offices.
- **25+ Service Pages**: In-depth architecture overviews, key capabilities, outcome metrics, and inquiry forms for every single practice area.
- **Knowledge Hub**: Real case studies, technical whitepapers with PDF download modal, and technical data sheets.
- **Contact & Careers**: Validated lead capture forms with mutual NDA requests and job application modals.
