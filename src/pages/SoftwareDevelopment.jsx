import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import SEO from '../components/common/SEO'
import CTASection from '../components/sections/CTASection'
import ContactForm from '../components/sections/ContactForm'
import {
  FaDatabase,
  FaClipboardList,
  FaUsers,
  FaChartLine,
  FaCog,
  FaCheckCircle,
  FaShieldAlt,
  FaCloud,
  FaSync,
} from 'react-icons/fa'

const MotionBox = motion(Box)

const softwareTypes = [
  {
    icon: FaClipboardList,
    title: 'ERP Systems',
    description: 'Comprehensive Enterprise Resource Planning software to manage all business operations in one place.',
  },
  {
    icon: FaUsers,
    title: 'CRM Platforms',
    description: 'Customer Relationship Management systems to track leads, manage sales, and improve customer satisfaction.',
  },
  {
    icon: FaDatabase,
    title: 'Inventory Management',
    description: 'Smart inventory tracking, stock management, and warehouse automation solutions.',
  },
  {
    icon: FaChartLine,
    title: 'Billing & Invoicing',
    description: 'Automated billing systems with GST compliance, invoicing, and payment tracking.',
  },
  {
    icon: FaCog,
    title: 'Business Automation',
    description: 'Custom workflow automation to eliminate repetitive tasks and boost productivity.',
  },
  {
    icon: FaCloud,
    title: 'SaaS Products',
    description: 'Scalable cloud-based software products with subscription management and multi-tenancy.',
  },
]

const benefits = [
  { icon: FaShieldAlt, text: 'Secure & Compliant' },
  { icon: FaSync, text: 'Cloud-Based & Accessible Anywhere' },
  { icon: FaChartLine, text: 'Real-time Analytics & Reports' },
  { icon: FaUsers, text: 'Multi-User Role Management' },
  { icon: FaDatabase, text: 'Scalable Database Architecture' },
  { icon: FaCog, text: 'Customizable to Your Workflow' },
]

const industries = [
  'Healthcare & Medical',
  'Retail & E-commerce',
  'Manufacturing',
  'Education & E-learning',
  'Real Estate',
  'Finance & Accounting',
  'Logistics & Supply Chain',
  'Hospitality & Hotels',
  'Professional Services',
]

const features = [
  'Custom Dashboard & Analytics',
  'User Authentication & Authorization',
  'API Integration & Development',
  'Cloud Deployment (AWS/Azure)',
  'Automated Workflows',
  'Payment Gateway Integration',
  'Email & SMS Notifications',
  'Export/Import Data (Excel, PDF)',
  'Multi-language Support',
  'Audit Logs & Activity Tracking',
]

const SoftwareDevelopment = () => {
  return (
    <Box>
      <SEO
        title="Custom Software Development Company India - ERP, CRM, SaaS | Boolavas"
        description="Leading custom software development company in India. Build ERP, CRM, billing systems, inventory management, and enterprise applications. Scalable software solutions for businesses."
        keywords="custom software development india, ERP development company, CRM software development, business software development, enterprise application development india, SaaS development company india"
        canonical="https://boolavas.in/software-development"
      />

      {/* Hero Section */}
      <Box bg="brand.navy" pt={32} pb={20}>
        <Container maxW="7xl">
          <VStack spacing={6} textAlign="center">
            <Heading size="3xl" color="white" lineHeight="shorter">
              Custom Software Development in India
            </Heading>
            <Text fontSize="xl" color="gray.300" maxW="3xl">
              Tailored software solutions designed for your unique business requirements. From ERP to SaaS—we build software that drives efficiency and growth.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Software Types */}
      <Box py={20} bg="white">
        <Container maxW="7xl">
          <VStack spacing={4} textAlign="center" mb={12}>
            <Heading size="2xl" color="brand.navy">
              Software Solutions We Build
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl">
              Comprehensive business software for every industry
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {softwareTypes.map((type, index) => (
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
                  <VStack spacing={4} align="flex-start">
                    <Icon as={type.icon} boxSize={12} color="brand.blue" />
                    <Heading size="md" color="brand.navy">
                      {type.title}
                    </Heading>
                    <Text color="gray.600">
                      {type.description}
                    </Text>
                  </VStack>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Benefits */}
      <Box py={20} bg="gray.50">
        <Container maxW="7xl">
          <VStack spacing={4} textAlign="center" mb={12}>
            <Heading size="2xl" color="brand.navy">
              Why Choose Custom Software?
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl">
              Tailored solutions that fit your exact business needs
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {benefits.map((benefit, index) => (
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
                  <Icon as={benefit.icon} boxSize={8} color="brand.blue" />
                  <Text fontWeight="semibold" color="brand.navy">
                    {benefit.text}
                  </Text>
                </HStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Features */}
      <Box py={20} bg="white">
        <Container maxW="7xl">
          <VStack spacing={4} textAlign="center" mb={12}>
            <Heading size="2xl" color="brand.navy">
              Features We Build Into Your Software
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl">
              Enterprise-grade functionality for modern businesses
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
            {features.map((feature, index) => (
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
                    {feature}
                  </Text>
                </HStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Industries */}
      <Box py={20} bg="brand.blue" position="relative" overflow="hidden">
        <Container maxW="5xl" position="relative" zIndex={1}>
          <VStack spacing={6} textAlign="center">
            <Heading size="2xl" color="white">
              Industries We Serve
            </Heading>
            <Text fontSize="xl" color="gray.100" maxW="3xl">
              We&apos;ve built custom software solutions for businesses across various industries
            </Text>
            <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4} pt={8} w="full">
              {industries.map((industry, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Box
                    bg="whiteAlpha.200"
                    backdropFilter="blur(10px)"
                    px={6}
                    py={4}
                    borderRadius="lg"
                    textAlign="center"
                    _hover={{ bg: 'whiteAlpha.300' }}
                    transition="all 0.2s"
                  >
                    <Text color="white" fontWeight="semibold">
                      {industry}
                    </Text>
                  </Box>
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Process Highlight */}
      <Box py={20} bg="gray.50">
        <Container maxW="7xl">
          <VStack spacing={4} textAlign="center" mb={12}>
            <Heading size="2xl" color="brand.navy">
              Our Development Approach
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl">
              Agile methodology with regular updates and transparent communication
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box bg="white" p={8} borderRadius="xl" boxShadow="md">
              <VStack align="flex-start" spacing={4}>
                <Heading size="md" color="brand.navy">
                  Discovery & Planning
                </Heading>
                <Text color="gray.600">
                  We thoroughly understand your business processes, pain points, and goals to create a comprehensive software specification document.
                </Text>
              </VStack>
            </Box>
            <Box bg="white" p={8} borderRadius="xl" boxShadow="md">
              <VStack align="flex-start" spacing={4}>
                <Heading size="md" color="brand.navy">
                  Iterative Development
                </Heading>
                <Text color="gray.600">
                  Agile sprints with regular demos, feedback sessions, and progress updates to ensure the software meets your expectations.
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Contact Form */}
      <Box py={20} bg="white">
        <Container maxW="5xl">
          <VStack spacing={6} mb={12} textAlign="center">
            <Heading size="2xl" color="brand.navy">
              Let&apos;s Build Your Custom Software
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl">
              Share your requirements and we&apos;ll create a tailored solution
            </Text>
          </VStack>
          <ContactForm />
        </Container>
      </Box>

      <CTASection
        title="Transform Your Business with Custom Software"
        description="From automation to enterprise systems—we build software that delivers ROI."
      />
    </Box>
  )
}

export default SoftwareDevelopment
