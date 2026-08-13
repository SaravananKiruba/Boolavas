import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Stack,
  Image,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import SEO from '../components/common/SEO'
import BreadcrumbSchema from '../components/schemas/BreadcrumbSchema'
import CTASection from '../components/sections/CTASection'
import {
  FaCode,
  FaHandshake,
  FaLightbulb,
  FaShieldAlt,
} from 'react-icons/fa'
import boolavasLogo from '../assets/boolavas logo.png'

const MotionBox = motion(Box)

const values = [
  {
    icon: FaCode,
    title: 'Quality Over Speed',
    description: 'We prioritize writing clean, maintainable code that stands the test of time over quick fixes.',
  },
  {
    icon: FaHandshake,
    title: 'Transparent Communication',
    description: 'We believe in honest, clear communication throughout the development process.',
  },
  {
    icon: FaLightbulb,
    title: 'Innovation-Driven',
    description: 'We stay updated with the latest technologies to deliver cutting-edge solutions.',
  },
  {
    icon: FaShieldAlt,
    title: 'Security First',
    description: 'Security is built into every layer of our development process, not added as an afterthought.',
  },
]

const About = () => {
  return (
    <Box>
      <SEO
        title="About Boolavas — Software Development Company Creating Innovative Solutions"
        description="Boolavas is a software development company in India building custom software, mobile apps, websites, and healthcare SaaS solutions. Creator of MediBoo clinic management software. Based in Madurai, Tamil Nadu."
        keywords="about boolavas, software development company india, custom software development, mediboo creator, boolavas team, madurai software company, tamil nadu tech company"
        canonical="https://boolavas.in/about"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://boolavas.in' },
          { name: 'About Us', url: 'https://boolavas.in/about' }
        ]}
      />

      {/* Hero Section */}
      <Box bg="brand.navy" pt={32} pb={20}>
        <Container maxW="7xl">
          <VStack spacing={6} textAlign="center">
            <Box bg="white" borderRadius="2xl" p={4} display="inline-flex" boxShadow="lg">
              <Image
                src={boolavasLogo}
                alt="Boolavas Software Development Company"
                h={{ base: '72px', md: '96px' }}
                objectFit="contain"
              />
            </Box>
            <Heading as="h1" size="3xl" color="white" lineHeight="shorter">
              About Boolavas — Building Software That Matters
            </Heading>
            <Text fontSize="xl" color="gray.300" maxW="3xl">
              Creator of MediBoo Clinic Management Software
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box py={20} bg="white">
        <Container maxW="7xl">
          <Stack
            direction={{ base: 'column', lg: 'row' }}
            spacing={12}
            align="center"
          >
            <VStack align="flex-start" spacing={6} flex={1}>
              <Heading as="h2" size="2xl" color="brand.navy">
                Who We Are
              </Heading>
              <Text fontSize="lg" color="gray.700" lineHeight="tall">
                Boolavas is the company behind <strong>MediBoo</strong>, a clinic management software built for Homeopathy, Siddha, Dental, and Acupuncture clinics across India. Based in Madurai, Tamil Nadu, we focus on building healthcare software that solves real problems for Indian clinics.
              </Text>
              <Text fontSize="lg" color="gray.700" lineHeight="tall">
                MediBoo is our flagship product — a multi-tenant SaaS platform already live in production, helping clinics in Chennai, Coimbatore, Madurai, and beyond manage their patients, appointments, prescriptions, billing, and follow-ups efficiently.
              </Text>
              <Text fontSize="lg" color="gray.700" lineHeight="tall">
                We understand the unique needs of Indian healthcare practices and build software that fits seamlessly into their workflows.
              </Text>
            </VStack>

            <Box flex={1}>
              <Box
                bg="linear-gradient(135deg, #1a0000 0%, #ff3131 100%)"
                borderRadius="2xl"
                p={12}
                boxShadow="2xl"
              >
                <VStack spacing={6} color="white">
                  <Box bg="white" borderRadius="2xl" p={5} display="inline-flex">
                    <Image
                      src={boolavasLogo}
                      alt="Boolavas"
                      h="100px"
                      objectFit="contain"
                    />
                  </Box>
                  <Heading size="lg" textAlign="center">
                    Our Mission
                  </Heading>
                  <Text textAlign="center" fontSize="lg">
                    To empower Indian clinics with modern, affordable clinic management software that simplifies operations and improves patient care.
                  </Text>
                </VStack>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Values */}
      <Box py={20} bg="gray.50">
        <Container maxW="7xl">
          <VStack spacing={4} textAlign="center" mb={12}>
            <Heading as="h2" size="2xl" color="brand.navy">
              Our Core Values
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl">
              The principles that guide everything we do
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {values.map((value, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box
                  bg="white"
                  p={8}
                  borderRadius="xl"
                  boxShadow="md"
                  height="100%"
                  _hover={{ boxShadow: 'xl' }}
                  transition="all 0.3s"
                >
                  <HStack align="flex-start" spacing={4}>
                    <Box
                      bg="brand.50"
                      p={3}
                      borderRadius="lg"
                      display="inline-flex"
                    >
                      <Icon as={value.icon} boxSize={8} color="brand.blue" />
                    </Box>
                    <VStack align="flex-start" spacing={2} flex={1}>
                      <Heading size="md" color="brand.navy">
                        {value.title}
                      </Heading>
                      <Text color="gray.600">
                        {value.description}
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Why Choose Us */}
      <Box py={20} bg="white">
        <Container maxW="7xl">
          <VStack spacing={4} textAlign="center" mb={12}>
            <Heading as="h2" size="2xl" color="brand.navy">
              Why Clinics Choose MediBoo
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl">
              What makes MediBoo the right choice for your clinic
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            <Box p={6} bg="gray.50" borderRadius="xl">
              <VStack align="flex-start" spacing={3}>
                <Heading size="sm" color="brand.navy">
                  Built for Indian Clinics
                </Heading>
                <Text color="gray.600">
                  MediBoo is designed specifically for Indian healthcare practices with features tailored to local needs, billing standards, and workflows.
                </Text>
              </VStack>
            </Box>

            <Box p={6} bg="gray.50" borderRadius="xl">
              <VStack align="flex-start" spacing={3}>
                <Heading size="sm" color="brand.navy">
                  Multi-Specialty Support
                </Heading>
                <Text color="gray.600">
                  Whether you run a Homeopathy, Siddha, Dental, or Acupuncture clinic, MediBoo adapts to your specialty with customizable templates and workflows.
                </Text>
              </VStack>
            </Box>

            <Box p={6} bg="gray.50" borderRadius="xl">
              <VStack align="flex-start" spacing={3}>
                <Heading size="sm" color="brand.navy">
                  90-Day Free Trial
                </Heading>
                <Text color="gray.600">
                  Try MediBoo risk-free for 90 days with full access to all features. No credit card required, no strings attached.
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      <CTASection
        title="Ready to Transform Your Clinic?"
        description="Join clinics already using MediBoo to streamline their operations and improve patient care."
        primaryCTA="Start 90-Day Free Trial"
        secondaryCTA="Contact Support"
      />
    </Box>
  )
}

export default About
