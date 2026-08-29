# Boolavas Website — Codebase Reference

## Project Overview
**Boolavas** is a software development company website built with React + Vite. Primary focus is promoting **MediBoo** — a multi-tenant clinic management SaaS. Targets Indian clients (healthcare + general software).

- **Live domain:** `boolavas.in`
- **MediBoo app:** `mediboo-platform.vercel.app`
- **Location:** Madurai, Tamil Nadu, India
- **Contact:** `contact@boolavas.in` | `+91 86674 30536`
- **Stack:** React 18, Vite, Chakra UI v2, Framer Motion, React Router v6, react-helmet-async, react-icons

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | ^18.2 | UI library |
| Vite | latest | Build tool (dev port 3000) |
| Chakra UI | ^2.8 | Component library + theming |
| Framer Motion | ^11 | Animations |
| React Router DOM | ^6.22 | Client-side routing |
| react-helmet-async | ^2 | SEO meta tags |
| react-icons | ^5 | Icon sets (`fa`, `si` prefixes) |

**Build:** `vite build` → `dist/`, all vendor deps in one `vendor` chunk (avoids React instance conflicts).

---

## Entry Points

### `src/main.jsx`
Provider wrap order: `React.StrictMode` → `HelmetProvider` → `ChakraProvider theme={theme}` → `BrowserRouter` → `App`

### `src/App.jsx`
- Layout: `ScrollToTop` + `OrganizationSchema` + `LocalBusinessSchema` + `Navbar` + `<main>` + `Footer`
- Pages are **lazy-loaded** with `React.lazy` + `Suspense` (CSS spinner fallback)
- `OrganizationSchema` and `LocalBusinessSchema` injected globally (not per-page)

**Routes:**
| Path | Component |
|------|-----------|
| `/` | `Home` |
| `/about` | `About` |
| `/contact` | `Contact` |
| `*` | `NotFound` |

> Service pages (`/mobile-app-development`, `/website-development`, `/software-development`) and `Blog`, `Services` pages exist as files but are **not registered in routes** — they are dead code / future use.

---

## Theme (`src/theme/index.js`)
Brand uses a **red palette** (variable names say "blue"):
- `brand.navy` = `#0a0a0a` (dark bg)
- `brand.blue` = `#ff3131` (primary CTA red)
- `brand.lightBlue` = `#ff6b6b`
- `brand.500` = `#ff3131`

Font: `Inter` (system fallback stack). Dark-only design — no color mode toggle.

---

## Pages

### `src/pages/Home.jsx`
Section order: `SEO` → `OrganizationSchema` → `SoftwareProductSchema` → `Hero` → `Products` → `AdvancedFeatures` → `HowItWorks` → `WhyChooseUs` → `Pricing` → `FAQ` → `CTASection`

CTA: "Start 90-Day Free Trial" / "Schedule Demo" → MediBoo.

### `src/pages/About.jsx`
Company values (Quality, Transparency, Innovation, Security). Includes `BreadcrumbSchema` + `CTASection`.

### `src/pages/Contact.jsx`
Contact info: Email, Phone (`+91 86674 30536`). Embeds `ContactForm`. Includes `BreadcrumbSchema`.

### `src/pages/NotFound.jsx`
404 page with links back to Home and Contact.

### Unused page files (not in routes)
- `Blog.jsx` — static blog posts (placeholder images), no routing
- `Services.jsx` — services overview page
- `MobileAppDevelopment.jsx` — Android/iOS/React Native service page
- `WebsiteDevelopment.jsx` — corporate/e-commerce/PWA service page
- `SoftwareDevelopment.jsx` — ERP/CRM/SaaS/billing software page

---

## Components

### `src/components/common/`

**`Navbar.jsx`**
- Sticky, scroll-aware: `brand.navy` → `rgba(15,23,42,0.95)` + `blur(10px)` after 50px scroll
- Nav items: Home, About, Contact
- Mobile hamburger via `useDisclosure`
- Logo: white `<Box>` containing `boolavas logo.png`

**`Footer.jsx`**
- 4-column grid (`base:1, md:2, lg:4`)
- Columns: Company info+logo, Company links, Products links (MediBoo/Features/Pricing), Resources (FAQ/Privacy)
- Contact: email, phone, location (Madurai)
- Dynamic copyright year

**`SEO.jsx`**
- Props: `title`, `description`, `keywords`, `canonical`, `ogImage`, `type`
- Outputs: primary meta + Open Graph + Twitter Card tags

**`CTAButton.jsx`**
- Variants: `primary` (red bg), `outline` (red border), `ghost` (gray.700 bg)
- Handles: external URLs (`<a>` with `noopener`), hash links (smooth scroll), internal routes (`RouterLink`)

**`ScrollToTop.jsx`**
- `useEffect` on `useLocation()` → `window.scrollTo(0,0)` on route change

### `src/components/home/`

| Component | Purpose |
|-----------|---------|
| `Hero.jsx` | Full-width hero; Boolavas + MediBoo logos; CTAs to MediBoo app + contact |
| `Products.jsx` | MediBoo feature showcase with tabbed UI (`Tabs/TabList/TabPanel`) |
| `AdvancedFeatures.jsx` | Security features: AES-256, MFA, audit logs, disease intelligence, analytics |
| `HowItWorks.jsx` | 5-step onboarding flow (Sign Up → Setup → Patients → Appointments → Prescribe) |
| `WhyChooseUs.jsx` | USP cards |
| `Pricing.jsx` | 4 plans: Free / Starter ₹2,999 / Professional ₹5,999 / Enterprise (custom) |
| `FAQ.jsx` | Accordion FAQ |
| `Process.jsx` | Dev process steps (unused on current Home) |
| `Services.jsx` | Service cards (unused on current Home) |
| `Technologies.jsx` | Tech stack logos (unused on current Home) |
| `Testimonials.jsx` | Client testimonials (unused on current Home) |

### `src/components/sections/`

**`ContactForm.jsx`**
- Fields: `name`, `email`, `phone`, `businessType`, `requirement`, `budget`
- `isSubmitting` state; `useToast` feedback; simulated submit (no real API yet)
- Uses `CTAButton` for submit action

**`CTASection.jsx`**
- Props: `title`, `description`, `primaryCTA`, `secondaryCTA`, `bg`
- Radial gradient bg decoration; animated with Framer Motion

### `src/components/schemas/`
JSON-LD structured data injected via `react-helmet-async`:

| File | Schema Type | Where Used |
|------|-------------|------------|
| `OrganizationSchema.jsx` | `Organization` + `SoftwareCompany` | `App.jsx` (global) |
| `LocalBusinessSchema.jsx` | `SoftwareApplication` (MediBoo) | `App.jsx` (global) |
| `SoftwareProductSchema.jsx` | `SoftwareApplication` (detailed) | `Home.jsx` |
| `ServiceSchema.jsx` | `Service` | Service pages |
| `BreadcrumbSchema.jsx` | `BreadcrumbList` | `About`, `Contact`, service pages |
| `FAQSchema.jsx` | `FAQPage` | FAQ sections |
| `WebPageSchema.jsx` | `WebPage` | Individual pages |

---

## Assets (`src/assets/`)
- `boolavas logo.png` — Company logo (Navbar, Footer, Hero, About)
- `MediBoo Logo.png` — Product logo (Hero)

## Public
- `robots.txt` — SEO crawl rules
- `sitemap.xml` — Search engine sitemap

---

## Key Patterns
- **Animations:** `motion(Box)` from Framer Motion; `initial/whileInView/viewport={{ once:true }}` pattern
- **Responsive:** Chakra responsive props `{ base, md, lg }` throughout
- **No global state:** Local `useState` only
- **Forms:** No backend wired — `ContactForm` uses `setTimeout` simulation

---

## Commands
```bash
npm run dev      # Dev server → localhost:3000
npm run build    # Production build → dist/
npm run preview  # Preview production build
npm run lint     # ESLint
```
