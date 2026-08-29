import { Helmet } from 'react-helmet-async'

// Page-specific structured data for an individual Boolavas software product.
const SoftwareApplicationSchema = ({
  name,
  description,
  category = 'BusinessApplication',
  url,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "applicationCategory": category,
    "operatingSystem": "Web",
    "description": description,
    "url": url,
    "publisher": {
      "@type": "Organization",
      "name": "Boolavas",
      "url": "https://boolavas.in"
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

export default SoftwareApplicationSchema
