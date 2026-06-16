import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title = "MediBoo by Boolavas | Clinic Management Software for Homeopathy, Siddha & Dental Clinics",
  description = "MediBoo by Boolavas is clinic management software for Homeopathy, Siddha, Dental and Acupuncture clinics in Chennai, Coimbatore & Madurai. Manage appointments, patients, billing and prescriptions.",
  keywords = "clinic management software, homeopathy clinic software, siddha clinic software, dental clinic software, acupuncture clinic software, clinic software chennai, clinic management software india, patient management software, clinic billing software, appointment booking software, mediboo, boolavas",
  canonical,
  ogImage = "https://boolavas.in/og-image.jpg",
  ogImageWidth = "1200",
  ogImageHeight = "630",
  type = "website"
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

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="author" content="Boolavas" />
    </Helmet>
  )
}

export default SEO
