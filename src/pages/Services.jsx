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
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import SEO from '../components/common/SEO'
import CTASection from '../components/sections/CTASection'
import {
  FaLaptopCode,
  FaMobileAlt,
  FaGlobe,
  FaCloud,
  FaRobot,
  FaBuilding,
  FaCheckCircle,
  FaCode,
  FaShieldAlt,
  FaChartLine,
} from 'react-icons/fa'

const MotionBox = motion(Box)

const services = [
  {
    icon: FaLaptopCode,
    title: 'Custom Software Development',
    description: 'Tailored software solutions built specifically for your business processes and workflows.',
    features: [
      'Business Process Automation',
      'Legacy System Modernization',
      'Custom CRM & ERP Solutions',
      'Integration with Existing Systems',
      'Scalable Architecture',
    ],
    link: '/software-development',
  },
  {
    icon: FaGlobe,
    title: 'Website Development',
    description: 'High-performance, SEO-optimized websites that drive conversions and business growth.',
    features: [
      'Corporate Websites',
      'E-commerce Platforms',
      'Progressive Web Apps (PWA)',
      'Content Management Systems',
      'SEO Optimization',
    ],
    link: '/website-development',
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for Android and iOS platforms.',
    features: [
      'Android & iOS Apps',
      'Cross-Platform Development',
      'Play Store Publishing',
      'App Store Optimization',
      'Push Notifications & Analytics',
    ],
    link: '/mobile-app-development',
  },
  {
    icon: FaCloud,
    title: 'SaaS Product Development',
    description: 'Build scalable Software-as-a-Service platforms with subscription management.',
    features: [
      'Multi-Tenant Architecture',
      'Subscription & Billing Integration',
      'Cloud Infrastructure Setup',
      'API Development',
      'Real-time Features',
    ],
  },
  {
    icon: FaBuilding,
    title: 'Enterprise Applications',
    description: 'Comprehensive business applications to streamline your operations.',
    features: [
      'ERP Systems',
      'CRM Platforms',
      'Inventory Management',
      'Billing & Invoicing',
      'HR Management Systems',
    ],
  },
  {
    icon: FaRobot,
    title: 'AI & Automation',
    description: 'Intelligent automation and AI-powered solutions to optimize your workflow.',
    features: [
      'Process Automation',
      'AI Chatbots & Assistants',
      'Machine Learning Models',
      'Data Analytics & Insights',
      'Workflow Optimization',
    ],
  },
]

const benefits = [
  {
    icon: FaCode,
    title: 'Clean, Maintainable Code',
    description: 'Production-ready code following industry best practices',
  },
  {
    icon: FaShieldAlt,
    title: 'Security First',
    description: 'OWASP compliant with comprehensive security measures',
  },
  {
    icon: FaChartLine,
    title: 'Scalable Solutions',
    description: 'Built to grow with your business needs',
  },
]

const Services = () => {
  return (
    <Box>
      <SEO
        title="Our Services - Custom Software Development Company India | Boolavas"
        description="Comprehensive software development services including custom software, mobile apps, websites, SaaS, enterprise applications, and AI automation. Trusted by businesses across India."
        keywords="software development services india, mobile app development services, website development services, SaaS development, enterprise software, AI automation services"
        canonical="https://boolavas.in/services"
      />

      {/* Hero Section */}
      <Box bg="brand.navy" pt={32} pb={20}>
        <Container maxW="7xl">
          <VStack spacing={6} textAlign="center">
            <Heading size="3xl" color="white">
              Comprehensive Software Development Services
            </Heading>
            <Text fontSize="xl" color="gray.300" maxW="3xl">
              From mobile apps to enterprise software, we deliver end-to-end solutions that transform your business
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box py={20} bg="white">
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {services.map((service, index) => (
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
                  _hover={{ boxShadow: 'xl', transform: 'translateY(-4px)' }}
                  transition="all 0.3s"
                >
                  <VStack align="flex-start" spacing={4}>
                    <Icon as={service.icon} boxSize={12} color="brand.blue" />
                    <Heading size="md" color="brand.navy">
                      {service.title}
                    </Heading>
                    <Text color="gray.600">
                      {service.description}
                    </Text>
                    <List spacing={2} pt={2}>
                      {service.features.map((feature, idx) => (
                        <ListItem key={idx} fontSize="sm" color="gray.700">
                          <HStack align="flex-start">
                            <ListIcon as={FaCheckCircle} color="brand.blue" mt={1} />
                            <Text>{feature}</Text>
                          </HStack>
                        </ListItem>
                      ))}
                    </List>
                  </VStack>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box py={20} bg="gray.50">
        <Container maxW="7xl">
          <VStack spacing={4} textAlign="center" mb={12}>
            <Heading size="2xl" color="brand.navy">
              Why Our Services Stand Out
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl">
              We go beyond just coding—we deliver complete solutions
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {benefits.map((benefit, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <VStack
                  bg="white"
                  p={8}
                  borderRadius="xl"
                  spacing={4}
                  height="100%"
                  _hover={{ boxShadow: 'lg' }}
                  transition="all 0.3s"
                >
                  <Icon as={benefit.icon} boxSize={12} color="brand.blue" />
                  <Heading size="md" color="brand.navy" textAlign="center">
                    {benefit.title}
                  </Heading>
                  <Text color="gray.600" textAlign="center">
                    {benefit.description}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <CTASection
        title="Let's Build Your Next Project"
        description="Whether you need a mobile app, website, or custom software—we've got you covered."
      />
    </Box>
  )
}

export default Services
