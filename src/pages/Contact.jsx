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
  Link,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import SEO from '../components/common/SEO'
import ContactForm from '../components/sections/ContactForm'
import {
  FaEnvelope,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
  FaCheckCircle,
} from 'react-icons/fa'

const MotionBox = motion(Box)

const contactMethods = [
  {
    icon: FaEnvelope,
    title: 'Email Us',
    detail: 'contact@boolavas.in',
    description: 'Get a response within 24 hours',
    href: 'mailto:contact@boolavas.in',
  },
  {
    icon: FaWhatsapp,
    title: 'WhatsApp',
    detail: '+91 86674 30536',
    description: 'Chat with us on WhatsApp',
    href: 'https://wa.me/918667430536',
  },
  {
    icon: FaPhone,
    title: 'Call Us',
    detail: '+91 86674 30536',
    description: 'Mon – Sat: 9 AM – 7 PM IST',
    href: 'tel:+918667430536',
  },
]

const reasons = [
  'Free initial consultation and project estimation',
  'Dedicated project manager for your account',
  'Transparent pricing with no hidden costs',
  'Agile development with regular updates',
  'Post-launch support and maintenance',
  'NDA and confidentiality guaranteed',
]

const Contact = () => {
  return (
    <Box>
      <SEO
        title="Contact Us - Get in Touch for Software Development | Boolavas"
        description="Contact Boolavas for custom software development, mobile apps, and website development. Get a free consultation and project quote. Email: contact@boolavas.in"
        keywords="contact software development company, hire developers india, software development inquiry, get quote mobile app development"
        canonical="https://boolavas.in/contact"
      />

      {/* Hero Section */}
      <Box bg="brand.navy" pt={32} pb={20}>
        <Container maxW="7xl">
          <VStack spacing={6} textAlign="center">
            <Heading size="3xl" color="white" lineHeight="shorter">
              Let&apos;s Build Something Great Together
            </Heading>
            <Text fontSize="xl" color="gray.300" maxW="3xl">
              Share your project requirements and we&apos;ll get back to you within 24 hours with a detailed proposal
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Contact Info Cards */}
      <Box py={20} bg="white">
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={16}>
            {contactMethods.map((method, index) => (
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
                  textAlign="center"
                  height="100%"
                  _hover={{ boxShadow: 'lg' }}
                  transition="all 0.3s"
                >
                  <VStack spacing={4}>
                    <Box
                      bg="brand.blue"
                      p={4}
                      borderRadius="full"
                      display="inline-flex"
                    >
                      <Icon as={method.icon} boxSize={8} color="white" />
                    </Box>
                    <Heading size="md" color="brand.navy">
                      {method.title}
                    </Heading>
                    <Text
                      as={method.href ? 'a' : 'span'}
                      href={method.href}
                      fontSize="lg"
                      fontWeight="semibold"
                      color="brand.blue"
                      _hover={method.href ? { textDecoration: 'underline' } : {}}
                    >
                      {method.detail}
                    </Text>
                    <Text color="gray.600" fontSize="sm">
                      {method.description}
                    </Text>
                  </VStack>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>

          {/* Contact Form and Reasons */}
          <Stack direction={{ base: 'column', lg: 'row' }} spacing={12} align="flex-start">
            {/* Form */}
            <Box flex={1.5}>
              <VStack spacing={4} align="flex-start" mb={8}>
                <Heading size="xl" color="brand.navy">
                  Send Us a Message
                </Heading>
                <Text color="gray.600" fontSize="lg">
                  Fill out the form below and we&apos;ll respond within 24 hours
                </Text>
              </VStack>
              <ContactForm />
            </Box>

            {/* Why Contact Us */}
            <Box flex={1}>
              <VStack align="flex-start" spacing={6} position="sticky" top={24}>
                <Heading size="lg" color="brand.navy">
                  What to Expect
                </Heading>
                <VStack align="flex-start" spacing={4}>
                  {reasons.map((reason, index) => (
                    <HStack key={index} align="flex-start" spacing={3}>
                      <Icon
                        as={FaCheckCircle}
                        color="brand.blue"
                        boxSize={5}
                        mt={1}
                      />
                      <Text color="gray.700">
                        {reason}
                      </Text>
                    </HStack>
                  ))}
                </VStack>

                <Box
                  bg="brand.50"
                  p={6}
                  borderRadius="xl"
                  mt={8}
                  w="full"
                >
                  <VStack align="flex-start" spacing={3}>
                    <Heading size="sm" color="brand.navy">
                      Reach Us Directly
                    </Heading>
                    <HStack>
                      <Icon as={FaEnvelope} color="brand.blue" />
                      <Link
                        href="mailto:contact@boolavas.in"
                        fontSize="md"
                        fontWeight="bold"
                        color="brand.blue"
                      >
                        contact@boolavas.in
                      </Link>
                    </HStack>
                    <HStack>
                      <Icon as={FaWhatsapp} color="green.500" />
                      <Link
                        href="https://wa.me/918667430536"
                        isExternal
                        fontSize="md"
                        fontWeight="bold"
                        color="green.500"
                      >
                        +91 86674 30536 (WhatsApp)
                      </Link>
                    </HStack>
                    <Text fontSize="sm" color="gray.500" pt={1}>
                      Madurai, Tamil Nadu, India
                    </Text>
                  </VStack>
                </Box>
              </VStack>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Trust Section */}
      <Box py={20} bg="gray.50">
        <Container maxW="5xl">
          <VStack spacing={6} textAlign="center">
            <Heading size="xl" color="brand.navy">
              Your Information is Safe
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="2xl">
              We respect your privacy and will never share your information with third parties. All project discussions are covered under a Non-Disclosure Agreement (NDA).
            </Text>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}

export default Contact
