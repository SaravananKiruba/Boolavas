import { Box } from '@chakra-ui/react'
import SEO from '../components/common/SEO'
import Hero from '../components/home/Hero'
import Products from '../components/home/Products'
import WhyBoolavas from '../components/home/WhyBoolavas'
import HowWeBuild from '../components/home/HowWeBuild'
import FAQ from '../components/home/FAQ'
import CTASection from '../components/sections/CTASection'

const Home = () => {
  return (
    <Box>
      <SEO
        title="Boolavas | Modern Software Products for Real-World Problems"
        description="Boolavas builds MediBoo — modern clinic management software for managing patients, appointments, prescriptions and everyday healthcare workflows."
        keywords="boolavas, software product company, mediboo, clinic management software, patient management, appointment scheduling, prescription software"
        canonical="https://boolavas.in/"
      />
      <Hero />
      <Products />
      <WhyBoolavas />
      <HowWeBuild />
      <FAQ />
      <CTASection />
    </Box>
  )
}

export default Home
