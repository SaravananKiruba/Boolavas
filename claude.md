# Boolavas Website — Codebase Reference

## Project Overview
**Boolavas** is a software development company website built with React + Vite. It showcases services and promotes **MediBoo**, a clinic management SaaS product. The site targets Indian clients seeking custom software, mobile apps, and web development.

- **Live domain:** `boolavas.in`
- **Stack:** React 18, Vite, Chakra UI v2, Framer Motion, React Router v6, react-helmet-async, react-icons

---

## Tech Stack & Config

| Tool | Version | Purpose |
|------|---------|---------|
| React | ^18.2 | UI library |
| Vite | latest | Build tool (dev port 3000) |
| Chakra UI | ^2.8 | Component library + theming |
| Framer Motion | ^11 | Animations |
| React Router DOM | ^6.22 | Client-side routing |
| react-helmet-async | ^2 | SEO meta tags |
| react-icons | ^5 | Icon sets (fa prefix) |

**Build:** `vite build` → `dist/`, all vendor deps bundled into one `vendor` chunk to avoid React instance conflicts.

---

## Entry Points

### `src/main.jsx`
Renders the app wrapped in (outermost → innermost):
`React.StrictMode` → `HelmetProvider` → `ChakraProvider theme={theme}` → `BrowserRouter` → `App`

### `src/App.jsx`
Layout shell: `ScrollToTop` + `Navbar` (sticky top) + `<Routes>` + `Footer`.

**Routes:**
| Path | Component |
|------|-----------|
| `/` | `Home` |
| `/mobile-app-development` | `MobileAppDevelopment` |
| `/website-development` | `WebsiteDevelopment` |
| `/software-development` | `SoftwareDevelopment` |
| `/about` | `About` |
| `/contact` | `Contact` |

---

## Theme (`src/theme/index.js`)
Extended Chakra theme. Brand colors use a **red palette** (not blue despite variable names):
- `brand.navy` = `#0a0a0a` (dark background)
- `brand.blue` = `#ff3131` (primary red/CTA color)
- `brand.lightBlue` = `#ff6b6b`
- `brand.500` = `#ff3131`

Font: `Inter` (system fallback stack).

---

## Pages

### `src/pages/Home.jsx`
Composes home sections in order:
`SEO` → `Hero` → `Products` → `Services` → `WhyChooseUs` → `Process` → `Technologies` → `FAQ` → `CTASection`

CTA targets MediBoo clinic management product.

### `src/pages/About.jsx`
Company values (Quality, Handshake/Partnership, Innovation, Security). Uses `boolavas logo.png`. Includes `CTASection`.

### `src/pages/Contact.jsx`
Contact methods: Email (`contact@boolavas.in`), WhatsApp, Phone, Location. Embeds `ContactForm`.

### `src/pages/MobileAppDevelopment.jsx`
Service page for mobile apps (Android/iOS/React Native). Lists features, includes `ContactForm` + `CTASection`.

### `src/pages/WebsiteDevelopment.jsx` / `SoftwareDevelopment.jsx`
Similar structure to `MobileAppDevelopment` — service details + `ContactForm` + `CTASection`.

---

## Components

### `src/components/common/`

**`Navbar.jsx`**
- Sticky, scroll-aware: transparent → `rgba(15,23,42,0.95)` + blur on scroll > 50px
- Nav items: Home, About, Contact
- Hamburger menu for mobile (`useDisclosure`)
- Logo: white background box with `boolavas logo.png`

**`Footer.jsx`**
- Dark (`brand.navy`) background, 3-column grid
- Company links: Home, About Us, Contact
- Resources: FAQ, Privacy Policy
- Contact info: email, WhatsApp, phone, location
- Logo image + copyright year (dynamic)

**`SEO.jsx`**
- Wraps `react-helmet-async` Helmet
- Props: `title`, `description`, `keywords`, `canonical`, `ogImage`, `type`
- Defaults set for Boolavas homepage
- Outputs: primary meta, Open Graph, Twitter Card tags

**`CTAButton.jsx`**
- Reusable branded button component

**`ScrollToTop.jsx`**
- Scrolls to top on route change (uses `useLocation` effect)

### `src/components/home/`

| Component | Purpose |
|-----------|---------|
| `Hero.jsx` | Full-width hero; promotes Boolavas + MediBoo; CTA buttons to WhatsApp/Contact; uses both brand logos |
| `Services.jsx` | Cards for service offerings |
| `Products.jsx` | Highlights MediBoo product |
| `WhyChooseUs.jsx` | Differentiators/USPs |
| `Process.jsx` | Development process steps |
| `Technologies.jsx` | Tech stack showcase |
| `FAQ.jsx` | Accordion FAQ section |
| `Testimonials.jsx` | Client testimonials |

### `src/components/sections/`

**`ContactForm.jsx`**
- Controlled form with fields: name, email, phone, businessType, requirement, budget
- Uses Chakra `useToast` for feedback
- `isSubmitting` state for loading UX
- Uses `CTAButton` for submit

**`CTASection.jsx`**
- Reusable section banner
- Props: `title`, `description`, `primaryCTA`, `secondaryCTA`

---

## Assets (`src/assets/`)
- `boolavas logo.png` — Main company logo (used in Navbar, Footer, Hero, About)
- `MediBoo Logo.png` — Product logo (used in Hero)

---

## Public
- `robots.txt` — SEO crawl rules
- `sitemap.xml` — Site map for search engines

---

## Key Patterns
- **Animations:** `motion(Box)` / `motion(Heading)` from Framer Motion throughout
- **Responsive:** Chakra responsive props (`{ base, md, lg }`) used for layout
- **Color mode:** Dark-only design (no light/dark toggle)
- **No global state:** No Redux/Zustand; local `useState` only
- **Forms:** No backend integration visible — `ContactForm` likely submits to a third-party or email service

---

## Commands
```bash
npm run dev      # Start dev server on port 3000
npm run build    # Production build → dist/
npm run preview  # Preview production build
npm run lint     # ESLint check
```
