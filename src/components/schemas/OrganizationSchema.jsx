import { Helmet } from 'react-helmet-async'

const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Boolavas",
    "url": "https://boolavas.in",
    "logo": "https://boolavas.in/logo.png",
    "description": "Boolavas is the creator of MediBoo, a clinic management software for Homeopathy, Siddha, Dental, and Acupuncture clinics in India.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8667430356",
      "contactType": "Customer Service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Tamil"]
    },
    "email": "contact@boolavas.in",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Madurai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "sameAs": [],
    "hasProduct": {
      "@type": "SoftwareApplication",
      "name": "MediBoo",
      "applicationCategory": "HealthcareApplication",
      "operatingSystem": "Web",
      "description": "Clinic management software for Homeopathy, Siddha, Dental and Acupuncture clinics in India.",
      "url": "https://mediboo-platform.vercel.app/",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR",
        "description": "90-day free trial"
      }
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}

export default OrganizationSchema
