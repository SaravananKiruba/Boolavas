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
        description="Boolavas builds focused software products including MediBoo, MigraSafe and ConfigSafe for healthcare, database and software engineering workflows."
        keywords="boolavas, software product company, mediboo, migrasafe, configsafe, clinic management software, sql migration risk analyzer, environment configuration checker"
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
