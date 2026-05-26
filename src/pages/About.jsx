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
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import SEO from '../components/common/SEO'
import CTASection from '../components/sections/CTASection'
import {
  FaRocket,
  FaCode,
  FaHandshake,
  FaLightbulb,
  FaShieldAlt,
} from 'react-icons/fa'

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

const stats = [
  { number: '50+', label: 'Projects Delivered' },
  { number: '30+', label: 'Happy Clients' },
  { number: '5+', label: 'Years Experience' },
  { number: '100%', label: 'Client Satisfaction' },
]

const About = () => {
  return (
    <Box>
      <SEO
        title="About Us - Professional Software Development Company India | Boolavas"
        description="Boolavas is a premium software development company in India. We build custom software, mobile apps, and websites for startups, SMEs, and enterprises. Your trusted technology partner."
        keywords="about boolavas, software development company india, technology partner, custom software developers, app development company"
        canonical="https://boolavas.in/about"
      />

      {/* Hero Section */}
      <Box bg="brand.navy" pt={32} pb={20}>
        <Container maxW="7xl">
          <VStack spacing={6} textAlign="center">
            <Heading size="3xl" color="white" lineHeight="shorter">
              About Boolavas
            </Heading>
            <Text fontSize="xl" color="gray.300" maxW="3xl">
              Your Strategic Technology Partner for Digital Transformation
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
              <Heading size="2xl" color="brand.navy">
                Who We Are
              </Heading>
              <Text fontSize="lg" color="gray.700" lineHeight="tall">
                Boolavas is a premium software development company based in India, specializing in building custom software solutions for businesses across the globe. We&apos;re not just developers—we&apos;re your strategic technology partner committed to your success.
              </Text>
              <Text fontSize="lg" color="gray.700" lineHeight="tall">
                From startups launching their first mobile app to enterprises modernizing legacy systems, we bring technical expertise, business acumen, and a commitment to excellence that sets us apart.
              </Text>
              <Text fontSize="lg" color="gray.700" lineHeight="tall">
                Our unique value proposition includes helping businesses publish mobile apps under their own brand name on Play Store and App Store, offering complete white-label development services where we work as your behind-the-scenes technology team.
              </Text>
            </VStack>

            <Box flex={1}>
              <Box
                bg="linear-gradient(135deg, #2563EB 0%, #38BDF8 100%)"
                borderRadius="2xl"
                p={12}
                boxShadow="2xl"
              >
                <VStack spacing={6} color="white">
                  <Icon as={FaRocket} boxSize={20} />
                  <Heading size="lg" textAlign="center">
                    Our Mission
                  </Heading>
                  <Text textAlign="center" fontSize="lg">
                    To empower businesses with world-class software solutions that drive growth, efficiency, and competitive advantage.
                  </Text>
                </VStack>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Stats */}
      <Box py={20} bg="brand.navy">
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
            {stats.map((stat, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <VStack spacing={2}>
                  <Heading size="2xl" color="brand.lightBlue">
                    {stat.number}
                  </Heading>
                  <Text color="gray.300" fontSize="lg" fontWeight="semibold">
                    {stat.label}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Values */}
      <Box py={20} bg="gray.50">
        <Container maxW="7xl">
          <VStack spacing={4} textAlign="center" mb={12}>
            <Heading size="2xl" color="brand.navy">
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
            <Heading size="2xl" color="brand.navy">
              Why Businesses Choose Boolavas
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl">
              What makes us different from other software companies
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            <Box p={6} bg="gray.50" borderRadius="xl">
              <VStack align="flex-start" spacing={3}>
                <Heading size="sm" color="brand.navy">
                  Enterprise-Grade Quality
                </Heading>
                <Text color="gray.600">
                  We deliver production-ready code that meets enterprise standards, ensuring your software is secure, scalable, and maintainable.
                </Text>
              </VStack>
            </Box>

            <Box p={6} bg="gray.50" borderRadius="xl">
              <VStack align="flex-start" spacing={3}>
                <Heading size="sm" color="brand.navy">
                  Business Understanding
                </Heading>
                <Text color="gray.600">
                  We don&apos;t just code—we understand your business goals and build solutions that deliver measurable ROI.
                </Text>
              </VStack>
            </Box>

            <Box p={6} bg="gray.50" borderRadius="xl">
              <VStack align="flex-start" spacing={3}>
                <Heading size="sm" color="brand.navy">
                  Long-Term Partnership
                </Heading>
                <Text color="gray.600">
                  We&apos;re here for the long haul, providing ongoing support, updates, and strategic guidance as your business grows.
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      <CTASection
        title="Ready to Work Together?"
        description="Let's discuss how we can help transform your business with technology."
      />
    </Box>
  )
}

export default About
