import { Box } from '@chakra-ui/react'
import SEO from '../components/common/SEO'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Process from '../components/home/Process'
import Technologies from '../components/home/Technologies'
import Testimonials from '../components/home/Testimonials'
import FAQ from '../components/home/FAQ'
import CTASection from '../components/sections/CTASection'

const Home = () => {
  return (
    <Box>
      <SEO />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <Technologies />
      <Testimonials />
      <FAQ />
      <CTASection />
    </Box>
  )
}

export default Home
