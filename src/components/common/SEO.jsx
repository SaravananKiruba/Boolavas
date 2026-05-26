import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title = "Boolavas - Custom Software & Mobile App Development Company India",
  description = "Leading software development company in India specializing in custom software, mobile apps, websites, and SaaS products. Launch your digital product under your own brand.",
  keywords = "software development company india, website development company india, mobile app development company india, custom software development india, android app development india, SaaS development company india, play store app publishing india",
  canonical = "https://boolavas.in",
  ogImage = "https://boolavas.in/og-image.jpg",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Boolavas" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="author" content="Boolavas" />
    </Helmet>
  )
}

export default SEO
