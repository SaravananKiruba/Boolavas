import { Helmet } from 'react-helmet-async'

const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "MediBoo",
    "applicationCategory": "HealthcareApplication",
    "operatingSystem": "Web",
    "description": "Clinic management software for Homeopathy, Siddha, Dental and Acupuncture clinics in Chennai, Coimbatore, Madurai and across India.",
    "url": "https://mediboo-platform.vercel.app/",
    "provider": {
      "@type": "Organization",
      "name": "Boolavas",
      "url": "https://boolavas.in",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Madurai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "description": "90-day free trial with no credit card required",
      "availability": "https://schema.org/InStock"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Chennai",
        "containedIn": {
          "@type": "State",
          "name": "Tamil Nadu"
        }
      },
      {
        "@type": "City",
        "name": "Coimbatore",
        "containedIn": {
          "@type": "State",
          "name": "Tamil Nadu"
        }
      },
      {
        "@type": "City",
        "name": "Madurai",
        "containedIn": {
          "@type": "State",
          "name": "Tamil Nadu"
        }
      },
      {
        "@type": "Country",
        "name": "India"
      }
    ],
    "featureList": [
      "Patient Management",
      "Appointment Scheduling",
      "Prescription Generation",
      "Billing & Invoicing",
      "Clinical Investigations",
      "Follow-up Tracking",
      "Multi-branch Support",
      "White-label Ready"
    ],
    "audience": {
      "@type": "PeopleAudience",
      "audienceType": "Homeopathy Clinics, Siddha Clinics, Dental Clinics, Acupuncture Clinics"
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

export default LocalBusinessSchema
