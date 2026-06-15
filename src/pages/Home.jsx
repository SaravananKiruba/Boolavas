import { Box } from '@chakra-ui/react'
import SEO from '../components/common/SEO'
import Hero from '../components/home/Hero'
import Products from '../components/home/Products'
import HowItWorks from '../components/home/HowItWorks'
import WhyChooseUs from '../components/home/WhyChooseUs'
import FAQ from '../components/home/FAQ'
import Pricing from '../components/home/Pricing'
import CTASection from '../components/sections/CTASection'

const Home = () => {
  return (
    <Box>
      <SEO />
      <Hero />
      <Products />
      <HowItWorks />
      <WhyChooseUs />
      <FAQ />
      <Pricing />
      <CTASection
        title="Ready to Modernize Your Clinic?"
        description="Join clinics already using MediBoo to manage patients, appointments, and prescriptions effortlessly."
        primaryCTA="Start 90-Day Free Trial"
        secondaryCTA="Contact Support"
      />
    </Box>
  )
}

export default Home
