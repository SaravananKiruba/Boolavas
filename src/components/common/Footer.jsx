import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  Heading,
  HStack,
  VStack,
  Divider,
  Icon,
  Image,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from 'react-icons/fa'
import boolavasLogo from '../../assets/boolavas logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const company = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const products = [
    { name: 'MediBoo', path: '/#products' },
    { name: 'Features', path: '/#features' },
    { name: 'Pricing', path: '/#pricing' },
  ]

  const resources = [
    { name: 'FAQ', path: '/#faq' },
    { name: 'Privacy Policy', path: '/privacy' },
  ]

  return (
    <Box as="footer" bg="brand.navy" color="white">
      <Container maxW="7xl" py={16}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={12}>
          {/* Company Info */}
          <VStack align="flex-start" spacing={4}>
            <Box bg="white" borderRadius="xl" p={2} display="inline-flex">
              <Image
                src={boolavasLogo}
                alt="Boolavas"
                h="52px"
                objectFit="contain"
              />
            </Box>
            <Text color="gray.400" fontSize="sm">
              Boolavas is the creator of MediBoo, a clinic management software built for Homeopathy, Siddha, Dental, and Acupuncture clinics across India.
            </Text>
            <Box as="address" fontStyle="normal">
              <VStack align="flex-start" spacing={2} pt={4}>
                <HStack>
                  <Icon as={FaEnvelope} color="brand.lightBlue" />
                  <Link href="mailto:contact@boolavas.in" fontSize="sm" _hover={{ color: 'brand.lightBlue' }}>
                    contact@boolavas.in
                  </Link>
                </HStack>
                <HStack>
                  <Icon as={FaPhone} color="brand.lightBlue" />
                  <Link href="tel:+918667430536" fontSize="sm" _hover={{ color: 'brand.lightBlue' }}>
                    +91 86674 30536
                  </Link>
                </HStack>
                <HStack>
                  <Icon as={FaMapMarkerAlt} color="brand.lightBlue" />
                  <Text fontSize="sm" color="gray.400">Madurai, Tamil Nadu, India</Text>
                </HStack>
              </VStack>
            </Box>
          </VStack>

          {/* Products */}
          <VStack align="flex-start" spacing={4}>
            <Heading size="sm" color="white">
              Products
            </Heading>
            <Stack spacing={2}>
              {products.map((item) => (
                <Link
                  key={item.path}
                  as={RouterLink}
                  to={item.path}
                  fontSize="sm"
                  color="gray.400"
                  _hover={{ color: 'brand.lightBlue', textDecoration: 'none' }}
                  transition="color 0.2s"
                >
                  {item.name}
                </Link>
              ))}
            </Stack>
          </VStack>

          {/* Company */}
          <VStack align="flex-start" spacing={4}>
            <Heading size="sm" color="white">
              Company
            </Heading>
            <Stack spacing={2}>
              {company.map((item) => (
                <Link
                  key={item.path}
                  as={RouterLink}
                  to={item.path}
                  fontSize="sm"
                  color="gray.400"
                  _hover={{ color: 'brand.lightBlue', textDecoration: 'none' }}
                  transition="color 0.2s"
                >
                  {item.name}
                </Link>
              ))}
            </Stack>
          </VStack>

          {/* Resources */}
          <VStack align="flex-start" spacing={4}>
            <Heading size="sm" color="white">
              Resources
            </Heading>
            <Stack spacing={2}>
              {resources.map((item) => (
                <Link
                  key={item.path}
                  as={RouterLink}
                  to={item.path}
                  fontSize="sm"
                  color="gray.400"
                  _hover={{ color: 'brand.lightBlue', textDecoration: 'none' }}
                  transition="color 0.2s"
                >
                  {item.name}
                </Link>
              ))}
            </Stack>
          </VStack>
        </SimpleGrid>

        <Divider my={8} borderColor="gray.700" />

        {/* Bottom Section */}
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          spacing={4}
        >
          <Text fontSize="sm" color="gray.500">
            © {currentYear} Boolavas. All rights reserved.
          </Text>
          <Text fontSize="sm" color="gray.500">
            Madurai, Tamil Nadu, India
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
