import { Helmet } from 'react-helmet-async'

const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "SoftwareCompany"],
    "name": "Boolavas",
    "alternateName": "Boolavas Software Development",
    "url": "https://boolavas.in",
    "logo": {
      "@type": "ImageObject",
      "url": "https://boolavas.in/logo.png",
      "width": "300",
      "height": "100"
    },
    "description": "Boolavas is a software development company in India specializing in custom software development, mobile apps, websites, and healthcare SaaS solutions. Creator of MediBoo clinic management software.",
    "slogan": "Building Software That Matters",
    "foundingDate": "2020",
    "founders": [{
      "@type": "Person",
      "name": "Boolavas Team"
    }],
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+91-8667430356",
      "contactType": "Customer Service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Tamil", "Hindi"],
      "email": "contact@boolavas.in"
    }, {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "areaServed": "IN",
      "availableLanguage": ["English", "Tamil"],
      "url": "https://boolavas.in/contact"
    }],
    "email": "contact@boolavas.in",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Madurai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN",
      "postalCode": "625001"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "knowsAbout": [
      "Software Development",
      "Mobile App Development",
      "Web Development",
      "Healthcare Software",
      "SaaS Solutions",
      "Clinic Management Systems",
      "React Development",
      "Next.js Development",
      "Custom Software Solutions"
    ],
    "serviceType": [
      "Custom Software Development",
      "Mobile Application Development",
      "Web Application Development",
      "SaaS Product Development",
      "Healthcare IT Solutions"
    ],
    "sameAs": [],
    "makesOffer": [{
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Custom Software Development",
        "description": "Tailored software solutions for businesses"
      }
    }, {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Mobile App Development",
        "description": "Android and iOS mobile application development"
      }
    }, {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Website Development",
        "description": "Modern, responsive website development"
      }
    }],
    "hasProduct": [{
      "@type": "SoftwareApplication",
      "name": "MediBoo",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "Healthcare Management Software",
      "operatingSystem": "Web Browser",
      "description": "Comprehensive clinic management software for Homeopathy, Siddha, Dental and Acupuncture clinics in India.",
      "url": "https://boolavas.in",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR",
        "description": "90-day free trial",
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "150"
      }
    }]
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
