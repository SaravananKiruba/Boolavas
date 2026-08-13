import { Box } from '@chakra-ui/react'
import SEO from '../components/common/SEO'
import OrganizationSchema from '../components/schemas/OrganizationSchema'
import SoftwareProductSchema from '../components/schemas/SoftwareProductSchema'
import Hero from '../components/home/Hero'
import Products from '../components/home/Products'
import HowItWorks from '../components/home/HowItWorks'
import WhyChooseUs from '../components/home/WhyChooseUs'
import AdvancedFeatures from '../components/home/AdvancedFeatures'
import FAQ from '../components/home/FAQ'
import Pricing from '../components/home/Pricing'
import CTASection from '../components/sections/CTASection'

const Home = () => {
  return (
    <Box>
      <SEO 
        title="Boolavas — Software Development Company India | MediBoo Multi-Tenant Clinic Management SaaS"
        description="Boolavas is a leading software development company in India. Creator of MediBoo — enterprise-grade multi-tenant clinic management SaaS with AES-256 encryption, disease intelligence, WhatsApp integration, billing, expense management, and advanced analytics for Homeopathy, Siddha, Dental, Acupuncture & Gynaecology clinics."
        keywords="software development company india, mediboo clinic management saas, multi-tenant clinic software, healthcare saas india, clinic management software with encryption, homeopathy clinic software, dental clinic software, medical practice management software, enterprise clinic software, disease intelligence software, prescription management system, clinic billing software india"
        canonical="https://boolavas.in/"
      />
      <OrganizationSchema />
      <SoftwareProductSchema />
      <Hero />
      <Products />
      <AdvancedFeatures />
      <HowItWorks />
      <WhyChooseUs />
      <Pricing />
      <FAQ />
      <CTASection
        title="Ready to Transform Your Clinic?"
        description="Join clinics already using MediBoo to streamline operations, improve patient care, and scale their practice with enterprise-grade technology."
        primaryCTA="Start 90-Day Free Trial"
        secondaryCTA="Schedule Demo"
      />
    </Box>
  )
}

export default Home
