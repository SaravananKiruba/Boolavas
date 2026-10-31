import { Helmet } from 'react-helmet-async'

const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Boolavas",
    "url": "https://boolavas.in",
    "logo": {
      "@type": "ImageObject",
      "url": "https://boolavas.in/logo.png"
    },
    "description": "Boolavas is a software product company building MediBoo, modern clinic management software for healthcare workflows.",
    "email": "contact@boolavas.in",
    "contactPoint": [{
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "contact@boolavas.in",
      "url": "https://boolavas.in/contact"
    }],
    "knowsAbout": [
      "Clinic Management Software",
      "Patient Management",
      "Appointment Scheduling",
      "Prescription Software"
    ],
    "sameAs": [],
    "hasProduct": [
      {
        "@type": "SoftwareApplication",
        "name": "MediBoo",
        "applicationCategory": "BusinessApplication",
        "description": "Clinic management software for managing patients, appointments, prescriptions and investigations.",
        "url": "https://boolavas.in/products/mediboo"
      }
    ]
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
