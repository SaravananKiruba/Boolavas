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
} from '@chakra-ui/react'
import SEO from '../components/common/SEO'
import BreadcrumbSchema from '../components/schemas/BreadcrumbSchema'
import ContactForm from '../components/sections/ContactForm'
import { FaEnvelope, FaCheckCircle } from 'react-icons/fa'

const reasons = [
  'Ask about MediBoo, MigraSafe or ConfigSafe',
  'Discuss a software requirement or project',
  'Get a response by email',
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
      <Box as="section" py={{ base: 12, md: 20 }} bg="#111111">
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
                  What to expect
                </Heading>
                <VStack align="flex-start" spacing={4}>
                  {reasons.map((reason) => (
                    <HStack key={reason} align="flex-start" spacing={3}>
                      <Icon as={FaCheckCircle} color="brand.blue" boxSize={5} mt={1} />
                      <Text color="gray.300">{reason}</Text>
                    </HStack>
                  ))}
                </VStack>

                <Box
                  bg="rgba(255,255,255,0.03)"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  p={6}
                  borderRadius="xl"
                  mt={4}
                  w="full"
                >
                  <VStack align="flex-start" spacing={3}>
                    <Heading size="sm" color="white">
                      Email us directly
                    </Heading>
                    <HStack>
                      <Icon as={FaEnvelope} color="brand.blue" />
                      <Link
                        href="mailto:contact@boolavas.in"
                        fontSize="md"
                        fontWeight="bold"
                        color="brand.lightBlue"
                      >
                        contact@boolavas.in
                      </Link>
                    </HStack>
                  </VStack>
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
