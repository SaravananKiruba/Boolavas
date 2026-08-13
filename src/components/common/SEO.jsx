import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title = "Boolavas — Software Development Company India | Custom Software, Mobile Apps & SaaS Solutions",
  description = "Boolavas is a leading software development company in India specializing in custom software, mobile apps, websites, and healthcare SaaS solutions. Creator of MediBoo clinic management software.",
  keywords = "software development company india, custom software development, mobile app development india, web development company, saas development, healthcare software, clinic management software, mediboo, boolavas, software company chennai, software company madurai, software company coimbatore, software company tamil nadu",
  canonical,
  ogImage = "https://boolavas.in/og-image.jpg",
  ogImageWidth = "1200",
  ogImageHeight = "630",
  type = "website",
  article = null
}) => {
  // Use provided canonical or fallback to current URL or homepage
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : 'https://boolavas.in')

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots Meta */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content={ogImageWidth} />
      <meta property="og:image:height" content={ogImageHeight} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Boolavas" />
      <meta property="og:locale" content="en_IN" />

      {/* Article specific (for blog posts) */}
      {article && type === 'article' && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          {article.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
          {article.author && <meta property="article:author" content={article.author} />}
          {article.section && <meta property="article:section" content={article.section} />}
          {article.tags && article.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />

      {/* Additional Meta Tags */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="India" />
      <meta name="geo.position" content="9.9252;78.1198" />
      <meta name="ICBM" content="9.9252, 78.1198" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="author" content="Boolavas" />
      <meta name="publisher" content="Boolavas" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="7 days" />

      {/* Mobile Meta Tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Boolavas" />
    </Helmet>
  )
}

export default SEO
