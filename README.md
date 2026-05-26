# Boolavas - Premium Software Development Company Website

A production-ready, SEO-optimized business website built with React, Chakra UI, and modern web technologies.

## 🚀 Tech Stack

- **React 18** - Modern UI library
- **Vite** - Lightning-fast build tool
- **Chakra UI** - Professional component library
- **Framer Motion** - Smooth animations
- **React Router** - Client-side routing
- **React Helmet Async** - SEO meta management

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

### Deploy to Netlify

1. Build: `npm run build`
2. Deploy the `dist` folder
3. Configure redirects for SPA routing

### Deploy to cPanel/Traditional Hosting

1. Build: `npm run build`
2. Upload contents of `dist` folder to public_html
3. Add `.htaccess` for React Router:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## 🎨 Project Structure

```
src/
├── components/
│   ├── common/        # Reusable components (Navbar, Footer, SEO)
│   ├── home/          # Home page sections
│   └── sections/      # Shared sections (CTA, Forms)
├── pages/             # Route pages
├── theme/             # Chakra UI theme configuration
├── App.jsx            # Main app component
└── main.jsx           # Entry point
```

## 🔧 Configuration

### Update Contact Information

Edit `src/components/common/Footer.jsx` and `src/pages/Contact.jsx`

### Customize Theme

Edit `src/theme/index.js` for colors, fonts, and styles

### SEO Optimization

Each page uses the `<SEO />` component. Update meta tags in individual pages.

## 📱 Features

- ✅ Fully responsive mobile-first design
- ✅ SEO optimized with meta tags and semantic HTML
- ✅ Fast page loads with code splitting
- ✅ Smooth animations and micro-interactions
- ✅ Accessible components (WCAG compliant)
- ✅ Contact form with validation
- ✅ Premium professional design
- ✅ Production-ready code architecture

## 🎯 SEO Keywords Targeted

- Software development company India
- Website development company India
- Mobile app development company India
- Custom software development India
- Android app development India
- Play Store app publishing India
- SaaS development company India

## 📧 Contact

Email: contact@boolavas.in
Website: https://boolavas.in

## 📄 License

Proprietary - All rights reserved by Boolavas
