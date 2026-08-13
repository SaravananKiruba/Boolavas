import { Helmet } from 'react-helmet-async'

const WebPageSchema = ({ 
  name, 
  description, 
  url,
  breadcrumbs = [],
  datePublished,
  dateModified 
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": name,
    "description": description,
    "url": url,
    "inLanguage": "en-IN",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Boolavas",
      "url": "https://boolavas.in",
      "publisher": {
        "@type": "Organization",
        "name": "Boolavas",
        "logo": {
          "@type": "ImageObject",
          "url": "https://boolavas.in/logo.png"
        }
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Boolavas",
      "url": "https://boolavas.in"
    }
  }

  if (datePublished) {
    schema.datePublished = datePublished
  }

  if (dateModified) {
    schema.dateModified = dateModified
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    schema.breadcrumb = {
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
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

export default WebPageSchema
