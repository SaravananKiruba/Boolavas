import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Stack,
  Link,
  Badge,
} from '@chakra-ui/react'
import SEO from '../components/common/SEO'
import BreadcrumbSchema from '../components/schemas/BreadcrumbSchema'
import ContactForm from '../components/sections/ContactForm'
import { FaEnvelope, FaCheckCircle, FaHeartbeat, FaDatabase, FaCogs } from 'react-icons/fa'

const productTopics = [
  {
    icon: FaHeartbeat,
    name: 'MediBoo',
    topics: ['Demo request', 'Purchase & pricing', 'Enterprise plan'],
  },
  {
    icon: FaDatabase,
    name: 'MigraSafe',
    topics: ['Feature discussion', 'Premium / enterprise', 'Pricing'],
  },
  {
    icon: FaCogs,
    name: 'ConfigSafe',
    topics: ['Feature discussion', 'Premium / enterprise', 'Pricing'],
  },
]

const Contact = () => {
  return (
    <Box bg="brand.navy">
      <SEO
        title="Contact Boolavas | Software Products"
        description="Contact Boolavas to learn more about MediBoo, MigraSafe, ConfigSafe or discuss a software requirement."
        keywords="contact boolavas, mediboo, migrasafe, configsafe, software product inquiry"
        canonical="https://boolavas.in/contact"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://boolavas.in' },
          { name: 'Contact', url: 'https://boolavas.in/contact' },
        ]}
      />

      {/* Hero */}
      <Box as="section" position="relative" overflow="hidden" pt={{ base: 24, md: 32 }} pb={{ base: 12, md: 16 }}>
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
          <VStack spacing={5} align="flex-start" maxW="2xl">
            <Heading as="h1" fontSize={{ base: '3xl', md: '5xl' }} color="white" lineHeight="1.1">
              Let&apos;s talk.
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.300">
              Have a question about a Boolavas product or want to discuss a software project? Send us
              a message.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Form + details */}
      <Box as="section" py={{ base: 12, md: 20 }} bg="brand.mid">
        <Container maxW="6xl">
          <Stack direction={{ base: 'column', lg: 'row' }} spacing={12} align="flex-start">
            {/* Form */}
            <Box flex={1.5} w="full">
              <VStack spacing={3} align="flex-start" mb={8}>
                <Heading size="lg" color="white">
                  Send us a message
                </Heading>
                <Text color="gray.400" fontSize="lg">
                  Fill out the form below and we&apos;ll get back to you by email.
                </Text>
              </VStack>
              <ContactForm />
            </Box>

            {/* Details */}
            <Box flex={1} w="full">
              <VStack align="flex-start" spacing={6} position={{ lg: 'sticky' }} top={24}>
                <Heading size="md" color="white">
                  What can we discuss?
                </Heading>

                <VStack align="flex-start" spacing={5} w="full">
                  {productTopics.map((product) => (
                    <Box
                      key={product.name}
                      bg="rgba(255,255,255,0.03)"
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                      borderRadius="xl"
                      p={5}
                      w="full"
                    >
                      <HStack spacing={3} mb={3}>
                        <Icon as={product.icon} color="brand.blue" boxSize={4} />
                        <Text color="white" fontWeight="bold" fontSize="sm">
                          {product.name}
                        </Text>
                      </HStack>
                      <HStack flexWrap="wrap" spacing={2}>
                        {product.topics.map((t) => (
                          <Badge
                            key={t}
                            bg="rgba(255,49,49,0.12)"
                            color="brand.lightBlue"
                            fontSize="xs"
                            px={2}
                            py={1}
                            borderRadius="full"
                            textTransform="none"
                          >
                            {t}
                          </Badge>
                        ))}
                      </HStack>
                    </Box>
                  ))}
                </VStack>

                <Box
                  bg="rgba(255,255,255,0.03)"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  p={5}
                  borderRadius="xl"
                  w="full"
                >
                  <HStack spacing={3} mb={1}>
                    <Icon as={FaCheckCircle} color="brand.blue" boxSize={4} />
                    <Text color="white" fontWeight="bold" fontSize="sm">We reply by email</Text>
                  </HStack>
                  <Text color="gray.400" fontSize="sm" pl={7}>Usually within 24 hours.</Text>
                </Box>

                <Box w="full">
                  <Text color="gray.500" fontSize="xs" mb={1}>Email us directly</Text>
                  <HStack>
                    <Icon as={FaEnvelope} color="brand.blue" boxSize={4} />
                    <Link
                      href="mailto:contact@boolavas.in"
                      fontSize="sm"
                      fontWeight="bold"
                      color="brand.lightBlue"
                      _hover={{ color: 'white' }}
                    >
                      contact@boolavas.in
                    </Link>
                  </HStack>
                </Box>
              </VStack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default Contact
