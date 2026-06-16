import { Helmet } from 'react-helmet-async'

const ServiceSchema = ({ serviceName, description, url }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Boolavas",
      "url": "https://boolavas.in"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceType": serviceName,
    "url": url
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}

export default ServiceSchema
