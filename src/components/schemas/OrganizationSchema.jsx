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
    "description": "Boolavas is a software product company building focused software products including MediBoo, MigraSafe and ConfigSafe for healthcare, database and software engineering workflows.",
    "email": "contact@boolavas.in",
    "contactPoint": [{
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "contact@boolavas.in",
      "url": "https://boolavas.in/contact"
    }],
    "knowsAbout": [
      "Clinic Management Software",
      "SQL Migration Risk Analysis",
      "Database Migration Safety",
      "Environment Configuration Risk",
      "Configuration Drift Detection"
    ],
    "sameAs": [],
    "hasProduct": [
      {
        "@type": "SoftwareApplication",
        "name": "MediBoo",
        "applicationCategory": "BusinessApplication",
        "description": "Clinic management software for managing patients, appointments, prescriptions and investigations.",
        "url": "https://boolavas.in/products/mediboo"
      },
      {
        "@type": "SoftwareApplication",
        "name": "MigraSafe",
        "applicationCategory": "DeveloperApplication",
        "description": "SQL migration risk analyzer that identifies potentially dangerous database changes before production.",
        "url": "https://boolavas.in/products/migrasafe"
      },
      {
        "@type": "SoftwareApplication",
        "name": "ConfigSafe",
        "applicationCategory": "DeveloperApplication",
        "description": "Environment configuration risk and drift checker for identifying configuration problems before production.",
        "url": "https://boolavas.in/products/configsafe"
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
