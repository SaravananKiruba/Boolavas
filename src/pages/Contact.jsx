import { Box, Container, Heading, Text, VStack, HStack, Icon, Link } from '@chakra-ui/react'
import { FaEnvelope } from 'react-icons/fa'
import SEO from '../components/common/SEO'
import BreadcrumbSchema from '../components/schemas/BreadcrumbSchema'

const Contact = () => {
  return (
    <Box bg="brand.surface" minH="100vh">
      <SEO
        title="Contact Boolavas"
        description="Get in touch with Boolavas — email us at contact@boolavas.in."
        keywords="contact boolavas, email boolavas"
        canonical="https://boolavas.in/contact"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://boolavas.in' },
          { name: 'Contact', url: 'https://boolavas.in/contact' },
        ]}
      />

      <Container maxW="2xl" pt={{ base: 28, md: 40 }} pb={24}>
        <VStack spacing={8} align="flex-start">
          <VStack spacing={3} align="flex-start">
            <Heading as="h1" fontSize={{ base: '3xl', md: '5xl' }} color="brand.navy" lineHeight="1.1" letterSpacing="-0.02em">
              Get in touch
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.600">
              Questions about our products or anything else? Drop us an email — we reply within 24 hours.
            </Text>
          </VStack>

          <HStack
            spacing={4}
            bg="white"
            border="1px solid"
            borderColor="brand.border"
            borderRadius="2xl"
            p={6}
            w="full"
            boxShadow="0 1px 3px rgba(15,23,42,0.06), 0 4px 24px rgba(15,23,42,0.04)"
          >
            <Box
              bg="brand.50"
              borderRadius="xl"
              p={3}
              flexShrink={0}
            >
              <Icon as={FaEnvelope} boxSize={6} color="brand.blue" />
            </Box>
            <VStack align="flex-start" spacing={1}>
              <Text color="gray.500" fontSize="sm">Email us at</Text>
              <Link
                href="mailto:contact@boolavas.in"
                fontWeight="bold"
                fontSize="lg"
                color="brand.navy"
                _hover={{ color: 'brand.blue', textDecoration: 'none' }}
              >
                contact@boolavas.in
              </Link>
            </VStack>
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default Contact
