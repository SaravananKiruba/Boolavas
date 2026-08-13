import { Helmet } from 'react-helmet-async'

const SoftwareProductSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "MediBoo",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "Healthcare Management Software",
    "operatingSystem": "Web Browser",
    "description": "MediBoo is a comprehensive clinic management software designed for Homeopathy, Siddha, Dental, and Acupuncture clinics. Features include patient management, appointment scheduling, digital prescriptions, billing, investigations tracking, and analytics.",
    "url": "https://boolavas.in",
    "screenshot": "https://boolavas.in/mediboo-screenshot.jpg",
    "softwareVersion": "2.0",
    "datePublished": "2024-01-01",
    "author": {
      "@type": "Organization",
      "name": "Boolavas",
      "url": "https://boolavas.in"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "description": "90-day free trial available",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://boolavas.in"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": [
      "Patient Management with Medical History",
      "Appointment Scheduling & Reminders",
      "Digital Prescription Generation",
      "Billing & Payment Tracking",
      "Clinical Investigation Records",
      "Real-time Analytics & Reports",
      "Multi-clinic & Multi-branch Support",
      "WhatsApp Integration",
      "Automated Follow-up Tracking",
      "Queue Management System"
    ],
    "softwareRequirements": "Modern web browser (Chrome, Firefox, Safari, Edge)",
    "memoryRequirements": "512MB RAM",
    "storageRequirements": "Cloud-based, no local storage needed",
    "releaseNotes": "Version 2.0 includes enhanced billing, expense tracking, and advanced analytics"
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}

export default SoftwareProductSchema
