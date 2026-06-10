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
  FaWhatsapp,
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

  const resources = [
    { name: 'FAQ', path: '/#faq' },
    { name: 'Privacy Policy', path: '/privacy' },
  ]

  return (
    <Box bg="brand.navy" color="white">
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
              A solutions company based in Madurai, Tamil Nadu, India — building powerful software products and custom digital solutions for businesses worldwide.
            </Text>
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
                <Icon as={FaWhatsapp} color="brand.lightBlue" />
                <Link href="https://wa.me/918667430536" isExternal fontSize="sm" _hover={{ color: 'brand.lightBlue' }}>
                  WhatsApp Us
                </Link>
              </HStack>
              <HStack>
                <Icon as={FaMapMarkerAlt} color="brand.lightBlue" />
                <Text fontSize="sm" color="gray.400">Madurai, Tamil Nadu, India</Text>
              </HStack>
            </VStack>
          </VStack>

          {/* Products */}
          <VStack align="flex-start" spacing={4}>
            <Heading size="sm" color="white">
              Our Product
            </Heading>
            <Stack spacing={2}>
              <Text fontSize="sm" color="gray.400" fontWeight="semibold">Boola Vas</Text>
              <Text fontSize="xs" color="gray.500" lineHeight="tall">
                Our flagship SaaS platform powering business solutions across industries.
              </Text>
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
