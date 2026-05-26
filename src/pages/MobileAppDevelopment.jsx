import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  List,
  ListItem,
  ListIcon,
  Stack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import SEO from '../components/common/SEO'
import CTASection from '../components/sections/CTASection'
import ContactForm from '../components/sections/ContactForm'
import {
  FaAndroid,
  FaApple,
  FaReact,
  FaCheckCircle,
  FaRocket,
  FaUsers,
  FaChartLine,
  FaCog,
  FaBell,
  FaShieldAlt,
} from 'react-icons/fa'
import { SiFlutter } from 'react-icons/si'

const MotionBox = motion(Box)

const platforms = [
  {
    icon: FaAndroid,
    title: 'Android App Development',
    description: 'Native Android apps with Kotlin/Java or cross-platform solutions with Flutter/React Native.',
  },
  {
    icon: FaApple,
    title: 'iOS App Development',
    description: 'Premium iOS apps for iPhone and iPad with Swift or cross-platform frameworks.',
  },
  {
    icon: FaReact,
    title: 'Cross-Platform Apps',
    description: 'Build once, deploy everywhere with React Native or Flutter for cost-effective solutions.',
  },
]

const features = [
  { icon: FaBell, text: 'Push Notifications & In-App Messaging' },
  { icon: FaUsers, text: 'User Authentication & Social Login' },
  { icon: FaChartLine, text: 'Analytics & User Behavior Tracking' },
  { icon: FaCog, text: 'Offline Mode & Data Synchronization' },
  { icon: FaShieldAlt, text: 'Secure Payment Gateway Integration' },
  { icon: FaRocket, text: 'App Store & Play Store Optimization' },
]

const process = [
  {
    title: 'Requirement Analysis',
    description: 'We understand your app vision, target audience, and business objectives.',
  },
  {
    title: 'UI/UX Design',
    description: 'Create intuitive, user-friendly interfaces that enhance user experience.',
  },
  {
    title: 'App Development',
    description: 'Build robust, scalable apps using modern frameworks and best practices.',
  },
  {
    title: 'Quality Testing',
    description: 'Rigorous testing across devices to ensure flawless performance.',
  },
  {
    title: 'Play Store Publishing',
    description: 'We publish your app under YOUR company name on Google Play Store and Apple App Store.',
  },
  {
    title: 'Support & Updates',
    description: 'Ongoing maintenance, bug fixes, and feature enhancements.',
  },
]

const MobileAppDevelopment = () => {
  return (
    <Box>
      <SEO
        title="Mobile App Development Company India - Android & iOS Apps | Boolavas"
        description="Professional mobile app development company in India. Build Android & iOS apps, publish on Play Store under your own brand. Custom mobile solutions for startups and enterprises."
        keywords="mobile app development company india, android app development india, ios app development india, play store app publishing india, mobile app developers, cross-platform app development"
        canonical="https://boolavas.in/mobile-app-development"
      />

      {/* Hero Section */}
      <Box bg="brand.navy" pt={32} pb={20}>
        <Container maxW="7xl">
          <Stack
            direction={{ base: 'column', lg: 'row' }}
            spacing={12}
            align="center"
          >
            <VStack align={{ base: 'center', lg: 'flex-start' }} spacing={6} flex={1} textAlign={{ base: 'center', lg: 'left' }}>
              <Heading size="3xl" color="white" lineHeight="shorter">
                Mobile App Development in India
              </Heading>
              <Text fontSize="xl" color="gray.300" maxW="2xl">
                Build Android & iOS apps that users love. Launch your app on Play Store and App Store under your own company brand name.
              </Text>
              <HStack spacing={4} pt={4}>
                <Icon as={FaAndroid} boxSize={12} color="#3DDC84" />
                <Icon as={FaApple} boxSize={12} color="gray.300" />
                <Icon as={SiFlutter} boxSize={12} color="#02569B" />
                <Icon as={FaReact} boxSize={12} color="#61DAFB" />
              </HStack>
            </VStack>
          </Stack>
        </Container>
      </Box>

      {/* Platforms */}
      <Box py={20} bg="white">
        <Container maxW="7xl">
          <VStack spacing={4} textAlign="center" mb={12}>
            <Heading size="2xl" color="brand.navy">
              Multi-Platform Expertise
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl">
              We develop apps for all major platforms using the best technologies
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {platforms.map((platform, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box
                  bg="gray.50"
                  p={8}
                  borderRadius="xl"
                  height="100%"
                  _hover={{ boxShadow: 'xl' }}
                  transition="all 0.3s"
                >
                  <VStack spacing={4}>
                    <Icon as={platform.icon} boxSize={16} color="brand.blue" />
                    <Heading size="md" color="brand.navy" textAlign="center">
                      {platform.title}
                    </Heading>
                    <Text color="gray.600" textAlign="center">
                      {platform.description}
                    </Text>
                  </VStack>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Play Store Publishing Highlight */}
      <Box py={20} bg="brand.blue" position="relative" overflow="hidden">
        <Container maxW="5xl" position="relative" zIndex={1}>
          <VStack spacing={6} textAlign="center">
            <Icon as={FaRocket} boxSize={20} color="white" />
            <Heading size="2xl" color="white">
              Publish Apps Under Your Own Brand
            </Heading>
            <Text fontSize="xl" color="gray.100" maxW="3xl">
              We help businesses launch apps on Google Play Store and Apple App Store using their own developer account. Your brand, your app, your success—we handle the technical expertise.
            </Text>
            <List spacing={3} pt={4} textAlign="left">
              <ListItem color="white" fontSize="lg">
                <HStack>
                  <ListIcon as={FaCheckCircle} color="brand.lightBlue" />
                  <Text>App published under YOUR company name</Text>
                </HStack>
              </ListItem>
              <ListItem color="white" fontSize="lg">
                <HStack>
                  <ListIcon as={FaCheckCircle} color="brand.lightBlue" />
                  <Text>Complete Play Store/App Store account setup assistance</Text>
                </HStack>
              </ListItem>
              <ListItem color="white" fontSize="lg">
                <HStack>
                  <ListIcon as={FaCheckCircle} color="brand.lightBlue" />
                  <Text>App Store Optimization (ASO) for better visibility</Text>
                </HStack>
              </ListItem>
              <ListItem color="white" fontSize="lg">
                <HStack>
                  <ListIcon as={FaCheckCircle} color="brand.lightBlue" />
                  <Text>Handle all compliance and publishing requirements</Text>
                </HStack>
              </ListItem>
            </List>
          </VStack>
        </Container>
      </Box>

      {/* Features */}
      <Box py={20} bg="gray.50">
        <Container maxW="7xl">
          <VStack spacing={4} textAlign="center" mb={12}>
            <Heading size="2xl" color="brand.navy">
              Powerful Features We Build
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl">
              Modern functionality to create engaging mobile experiences
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {features.map((feature, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <HStack
                  bg="white"
                  p={6}
                  borderRadius="lg"
                  spacing={4}
                  _hover={{ boxShadow: 'md' }}
                  transition="all 0.3s"
                >
                  <Icon as={feature.icon} boxSize={8} color="brand.blue" />
                  <Text fontWeight="semibold" color="brand.navy">
                    {feature.text}
                  </Text>
                </HStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Process */}
      <Box py={20} bg="white">
        <Container maxW="7xl">
          <VStack spacing={4} textAlign="center" mb={12}>
            <Heading size="2xl" color="brand.navy">
              Our App Development Process
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl">
              From concept to Play Store—we handle everything
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {process.map((step, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box position="relative" height="100%">
                  <Box
                    bg="brand.blue"
                    color="white"
                    borderRadius="full"
                    w={12}
                    h={12}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontWeight="bold"
                    fontSize="xl"
                    mb={4}
                  >
                    {index + 1}
                  </Box>
                  <VStack align="flex-start" spacing={3}>
                    <Heading size="md" color="brand.navy">
                      {step.title}
                    </Heading>
                    <Text color="gray.600">
                      {step.description}
                    </Text>
                  </VStack>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Contact Form */}
      <Box py={20} bg="gray.50">
        <Container maxW="5xl">
          <VStack spacing={6} mb={12} textAlign="center">
            <Heading size="2xl" color="brand.navy">
              Ready to Build Your Mobile App?
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl">
              Share your app idea with us and get a free consultation
            </Text>
          </VStack>
          <ContactForm />
        </Container>
      </Box>

      <CTASection
        title="Launch Your App Under Your Own Brand"
        description="From development to Play Store publishing—we've got you covered."
      />
    </Box>
  )
}

export default MobileAppDevelopment
