import { Box } from '@chakra-ui/react'
import SEO from '../components/common/SEO'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Process from '../components/home/Process'
import Technologies from '../components/home/Technologies'
import Products from '../components/home/Products'
import FAQ from '../components/home/FAQ'
import CTASection from '../components/sections/CTASection'

const Home = () => {
  return (
    <Box>
      <SEO />
      <Hero />
      <Products />
      <Services />
      <WhyChooseUs />
      <Process />
      <Technologies />
      <FAQ />
      <CTASection
        title="Interested in MediBoo for Your Clinic?"
        description="Whether you run a homeopathic practice, a general clinic, or a multi-branch healthcare institution — get in touch and let\'s see how MediBoo fits your workflow."
        primaryCTA="Contact Us"
        secondaryCTA="Learn More"
      />
    </Box>
  )
}

export default Home
