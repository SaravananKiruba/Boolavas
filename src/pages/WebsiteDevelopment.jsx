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
import ContactForm from '../components/sections/ContactForm'
import {
  FaGlobe,
  FaShoppingCart,
  FaChartBar,
  FaSearch,
  FaMobile,
  FaRocket,
  FaCheckCircle,
  FaLock,
  FaBolt,
  FaPalette,
} from 'react-icons/fa'

const MotionBox = motion(Box)

const websiteTypes = [
  {
    icon: FaGlobe,
    title: 'Corporate Websites',
    description: 'Professional business websites that establish your brand credibility and generate leads.',
  },
  {
    icon: FaShoppingCart,
    title: 'E-commerce Platforms',
    description: 'Full-featured online stores with payment gateways, inventory management, and order processing.',
  },
  {
    icon: FaChartBar,
    title: 'Web Applications',
    description: 'Custom web applications, dashboards, and admin panels for business operations.',
  },
]

const keyFeatures = [
  { icon: FaSearch, title: 'SEO Optimized', description: 'Built for search engines to rank higher on Google' },
  { icon: FaMobile, title: 'Mobile Responsive', description: 'Perfect display on all devices and screen sizes' },
  { icon: FaBolt, title: 'Lightning Fast', description: 'Optimized performance for quick page loads' },
  { icon: FaLock, title: 'Secure & Reliable', description: 'SSL, HTTPS, and security best practices' },
  { icon: FaPalette, title: 'Custom Design', description: 'Unique designs tailored to your brand' },
  { icon: FaRocket, title: 'Scalable', description: 'Built to grow with your business' },
]

const technologies = [
  'React.js',
  'Next.js',
  'Node.js',
  'WordPress',
  'PHP/Laravel',
  'Python/Django',
  'MongoDB',
  'PostgreSQL',
  'AWS/Azure',
]

const services = [
  'Website Design & Development',
  'E-commerce Development',
  'Progressive Web Apps (PWA)',
  'Website Redesign & Modernization',
  'CMS Development (WordPress, Custom)',
  'Landing Page Development',
  'API Integration & Development',
  'Website Maintenance & Support',
  'Performance Optimization',
  'SEO & Digital Marketing Setup',
]

const WebsiteDevelopment = () => {
  return (
    <Box>
      <SEO
        title="Website Development Company India - SEO Optimized Websites | Boolavas"
        description="Professional website development company in India. Custom websites, e-commerce platforms, and web applications. SEO optimized, mobile responsive, and high-converting websites for businesses."
        keywords="website development company india, web development services india, ecommerce website development, SEO website development, responsive website design, web application development india"
        canonical="https://boolavas.in/website-development"
      />

      {/* Hero Section */}
      <Box bg="brand.navy" pt={32} pb={20}>
        <Container maxW="7xl">
          <VStack spacing={6} textAlign="center">
            <Heading size="3xl" color="white" lineHeight="shorter">
              Website Development Company in India
            </Heading>
            <Text fontSize="xl" color="gray.300" maxW="3xl">
              SEO-optimized, high-performance websites that convert visitors into customers and drive business growth
            </Text>
            <HStack spacing={3} flexWrap="wrap" justify="center" pt={4}>
              {['SEO Optimized', 'Mobile Responsive', 'Fast Loading', 'Secure'].map((tag) => (
                <Box
                  key={tag}
                  bg="brand.lightBlue"
                  color="brand.navy"
                  px={4}
                  py={2}
                  borderRadius="full"
                  fontWeight="semibold"
                  fontSize="sm"
                >
                  {tag}
                </Box>
              ))}
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Website Types */}
      <Box py={20} bg="white">
        <Container maxW="7xl">
          <VStack spacing={4} textAlign="center" mb={12}>
            <Heading size="2xl" color="brand.navy">
              Types of Websites We Build
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl">
              Professional websites designed for your specific business needs
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {websiteTypes.map((type, index) => (
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
                    <Icon as={type.icon} boxSize={16} color="brand.blue" />
                    <Heading size="md" color="brand.navy" textAlign="center">
                      {type.title}
                    </Heading>
                    <Text color="gray.600" textAlign="center">
                      {type.description}
                    </Text>
                  </VStack>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Key Features */}
      <Box py={20} bg="gray.50">
        <Container maxW="7xl">
          <VStack spacing={4} textAlign="center" mb={12}>
            <Heading size="2xl" color="brand.navy">
              Why Our Websites Stand Out
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl">
              Built with modern technologies and best practices
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {keyFeatures.map((feature, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Box
                  bg="white"
                  p={6}
                  borderRadius="lg"
                  _hover={{ boxShadow: 'md' }}
                  transition="all 0.3s"
                  height="100%"
                >
                  <VStack align="flex-start" spacing={3}>
                    <Icon as={feature.icon} boxSize={10} color="brand.blue" />
                    <Heading size="sm" color="brand.navy">
                      {feature.title}
                    </Heading>
                    <Text color="gray.600" fontSize="sm">
                      {feature.description}
                    </Text>
                  </VStack>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Services List */}
      <Box py={20} bg="white">
        <Container maxW="7xl">
          <VStack spacing={4} textAlign="center" mb={12}>
            <Heading size="2xl" color="brand.navy">
              Our Website Development Services
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl">
              Comprehensive solutions for all your web needs
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
            {services.map((service, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
              >
                <HStack
                  bg="gray.50"
                  p={5}
                  borderRadius="lg"
                  _hover={{ bg: 'brand.50' }}
                  transition="all 0.2s"
                >
                  <Icon as={FaCheckCircle} color="brand.blue" boxSize={5} />
                  <Text fontWeight="semibold" color="brand.navy">
                    {service}
                  </Text>
                </HStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* SEO Focus Section */}
      <Box py={20} bg="brand.blue" position="relative" overflow="hidden">
        <Container maxW="5xl" position="relative" zIndex={1}>
          <VStack spacing={6} textAlign="center">
            <Icon as={FaSearch} boxSize={20} color="white" />
            <Heading size="2xl" color="white">
              SEO-Optimized for Google Rankings
            </Heading>
            <Text fontSize="xl" color="gray.100" maxW="3xl">
              Every website we build is optimized for search engines from the ground up. We follow SEO best practices to help your business rank higher on Google and attract organic traffic.
            </Text>
            <List spacing={3} pt={4} textAlign="left">
              <ListItem color="white" fontSize="lg">
                <HStack>
                  <ListIcon as={FaCheckCircle} color="brand.lightBlue" />
                  <Text>Semantic HTML & proper heading hierarchy</Text>
                </HStack>
              </ListItem>
              <ListItem color="white" fontSize="lg">
                <HStack>
                  <ListIcon as={FaCheckCircle} color="brand.lightBlue" />
                  <Text>Fast page load speeds & Core Web Vitals optimization</Text>
                </HStack>
              </ListItem>
              <ListItem color="white" fontSize="lg">
                <HStack>
                  <ListIcon as={FaCheckCircle} color="brand.lightBlue" />
                  <Text>Mobile-first responsive design</Text>
                </HStack>
              </ListItem>
              <ListItem color="white" fontSize="lg">
                <HStack>
                  <ListIcon as={FaCheckCircle} color="brand.lightBlue" />
                  <Text>Meta tags, Open Graph, and Schema markup</Text>
                </HStack>
              </ListItem>
            </List>
          </VStack>
        </Container>
      </Box>

      {/* Technologies */}
      <Box py={20} bg="gray.50">
        <Container maxW="7xl">
          <VStack spacing={4} textAlign="center" mb={12}>
            <Heading size="2xl" color="brand.navy">
              Technologies We Use
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl">
              Modern tech stack for robust, scalable websites
            </Text>
          </VStack>

          <HStack spacing={4} flexWrap="wrap" justify="center">
            {technologies.map((tech, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Box
                  bg="white"
                  px={6}
                  py={3}
                  borderRadius="full"
                  fontWeight="semibold"
                  color="brand.navy"
                  boxShadow="sm"
                  _hover={{ boxShadow: 'md', transform: 'translateY(-2px)' }}
                  transition="all 0.2s"
                >
                  {tech}
                </Box>
              </MotionBox>
            ))}
          </HStack>
        </Container>
      </Box>

      {/* Contact Form */}
      <Box py={20} bg="white">
        <Container maxW="5xl">
          <VStack spacing={6} mb={12} textAlign="center">
            <Heading size="2xl" color="brand.navy">
              Get Your Website Built Today
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl">
              Share your requirements and receive a detailed proposal
            </Text>
          </VStack>
          <ContactForm />
        </Container>
      </Box>

      <CTASection
        title="Ready to Launch Your Professional Website?"
        description="Let's create a website that drives results for your business."
      />
    </Box>
  )
}

export default WebsiteDevelopment
