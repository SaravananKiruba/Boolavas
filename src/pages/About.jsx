import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Image,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import SEO from '../components/common/SEO'
import BreadcrumbSchema from '../components/schemas/BreadcrumbSchema'
import CTASection from '../components/sections/CTASection'
import {
  FaCheckCircle,
  FaFeatherAlt,
  FaHandshake,
  FaLightbulb,
  FaShieldAlt,
} from 'react-icons/fa'
import boolavasLogo from '../assets/boolavas logo.png'

const MotionBox = motion(Box)

const principles = [
  {
    icon: FaCheckCircle,
    title: 'Quality',
    description: 'We prioritise clean, maintainable software that stands the test of time.',
  },
  {
    icon: FaFeatherAlt,
    title: 'Simplicity',
    description: 'We keep products focused and easy to use, avoiding unnecessary complexity.',
  },
  {
    icon: FaHandshake,
    title: 'Transparency',
    description: 'We communicate honestly and describe our products for exactly what they do.',
  },
  {
    icon: FaShieldAlt,
    title: 'Security',
    description: 'We design our tools to catch risky changes before they reach production.',
  },
  {
    icon: FaLightbulb,
    title: 'Practical Innovation',
    description: 'We build new ideas around real workflows, not novelty for its own sake.',
  },
]

const philosophy = [
  { step: '01', title: 'Find a real problem', description: 'We start from an actual pain point in a real workflow.' },
  { step: '02', title: 'Understand the workflow', description: 'We learn how people work today before building anything.' },
  { step: '03', title: 'Build a focused solution', description: 'We solve the problem clearly, without unnecessary scope.' },
  { step: '04', title: 'Keep infrastructure simple', description: 'We favour simple, maintainable systems over heavy ones.' },
  { step: '05', title: 'Continuously improve', description: 'We refine each product based on how it is actually used.' },
]

const About = () => {
  return (
    <Box bg="brand.navy">
      <SEO
        title="About Boolavas | Software Product Company"
        description="Boolavas builds focused software products designed to solve practical business and engineering problems."
        keywords="about boolavas, software product company, mediboo, migrasafe, configsafe, product philosophy"
        canonical="https://boolavas.in/about"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://boolavas.in' },
          { name: 'About', url: 'https://boolavas.in/about' },
        ]}
      />

      {/* Hero */}
      <Box as="section" position="relative" overflow="hidden" pt={{ base: 24, md: 32 }} pb={{ base: 16, md: 20 }}>
        <Box
          position="absolute"
          top="-40%"
          right="-15%"
          width="60%"
          height="100%"
          bg="radial-gradient(circle, rgba(255, 49, 49, 0.12) 0%, transparent 70%)"
          pointerEvents="none"
        />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <VStack spacing={6} align="flex-start" maxW="3xl">
            <Box bg="white" borderRadius="2xl" p={3} display="inline-flex" boxShadow="lg">
              <Image
                src={boolavasLogo}
                alt="Boolavas"
                h={{ base: '48px', md: '60px' }}
                objectFit="contain"
              />
            </Box>
            <Heading as="h1" fontSize={{ base: '3xl', md: '5xl' }} color="white" lineHeight="1.1">
              We build focused software products.
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.300">
              Boolavas is a software product company. We build practical, modern software products —
              MediBoo, MigraSafe and ConfigSafe — designed around real problems in healthcare,
              database engineering and application configuration.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* What we do */}
      <Box as="section" py={{ base: 12, md: 20 }} bg="#111111">
        <Container maxW="4xl">
          <VStack align="flex-start" spacing={6}>
            <Heading as="h2" size="xl" color="white">
              What we do
            </Heading>
            <Text fontSize="lg" color="gray.400" lineHeight="tall">
              Boolavas builds focused software products designed around real problems. Rather than
              spreading thin across everything, each product does one thing well: MediBoo helps
              clinics run everyday healthcare workflows, MigraSafe helps engineers catch risky SQL
              migrations before production, and ConfigSafe helps teams find configuration problems
              before they cause incidents.
            </Text>
            <Text fontSize="lg" color="gray.400" lineHeight="tall">
              We keep our products practical and our infrastructure simple, so they stay easy to use
              and easy to maintain.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Principles */}
      <Box as="section" py={{ base: 12, md: 20 }} bg="brand.navy">
        <Container maxW="7xl">
          <VStack spacing={4} textAlign="center" mb={{ base: 10, md: 14 }}>
            <Heading as="h2" size="xl" color="white">
              Our principles
            </Heading>
            <Text fontSize="lg" color="gray.400" maxW="2xl">
              The principles that guide how we build.
            </Text>
          </VStack>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
            {principles.map((value, index) => (
              <MotionBox
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                bg="rgba(255,255,255,0.03)"
                border="1px solid"
                borderColor="whiteAlpha.200"
                borderRadius="2xl"
                p={7}
                h="100%"
              >
                <VStack align="flex-start" spacing={4}>
                  <HStack justify="center" align="center" bg="rgba(255,49,49,0.12)" borderRadius="xl" boxSize={12}>
                    <Icon as={value.icon} boxSize={6} color="brand.blue" />
                  </HStack>
                  <Heading as="h3" size="md" color="white">
                    {value.title}
                  </Heading>
                  <Text color="gray.400" fontSize="sm">
                    {value.description}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Product philosophy */}
      <Box as="section" py={{ base: 12, md: 20 }} bg="#111111">
        <Container maxW="7xl">
          <VStack spacing={4} textAlign="center" mb={{ base: 10, md: 14 }}>
            <Heading as="h2" size="xl" color="white">
              Our product philosophy
            </Heading>
            <Text fontSize="lg" color="gray.400" maxW="2xl">
              How a Boolavas product comes to life.
            </Text>
          </VStack>
          <SimpleGrid columns={{ base: 1, md: 5 }} spacing={6}>
            {philosophy.map((item, index) => (
              <MotionBox
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <VStack align="flex-start" spacing={3} h="100%">
                  <Text fontSize="2xl" fontWeight="extrabold" color="brand.blue">
                    {item.step}
                  </Text>
                  <Heading as="h3" size="sm" color="white">
                    {item.title}
                  </Heading>
                  <Text color="gray.400" fontSize="sm">
                    {item.description}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <CTASection />
    </Box>
  )
}

export default About
