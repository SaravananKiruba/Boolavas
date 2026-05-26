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
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import {
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaMapMarkerAlt,
} from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'Software Development', path: '/software-development' },
    { name: 'Website Development', path: '/website-development' },
    { name: 'Mobile App Development', path: '/mobile-app-development' },
    { name: 'SaaS Development', path: '/services' },
    { name: 'Enterprise Solutions', path: '/services' },
  ]

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  const resources = [
    { name: 'Case Studies', path: '/blog' },
    { name: 'Technology Stack', path: '/services' },
    { name: 'FAQ', path: '/#faq' },
    { name: 'Privacy Policy', path: '/privacy' },
  ]

  return (
    <Box bg="brand.navy" color="white">
      <Container maxW="7xl" py={16}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={12}>
          {/* Company Info */}
          <VStack align="flex-start" spacing={4}>
            <Heading size="lg" color="white">
              Boolavas
            </Heading>
            <Text color="gray.400" fontSize="sm">
              Premium software development company delivering custom solutions for businesses across India.
            </Text>
            <VStack align="flex-start" spacing={2} pt={4}>
              <HStack>
                <Icon as={FaEnvelope} color="brand.lightBlue" />
                <Link href="mailto:contact@boolavas.in" fontSize="sm" _hover={{ color: 'brand.lightBlue' }}>
                  contact@boolavas.in
                </Link>
              </HStack>
              <HStack>
                <Icon as={FaMapMarkerAlt} color="brand.lightBlue" />
                <Text fontSize="sm" color="gray.400">India</Text>
              </HStack>
            </VStack>
          </VStack>

          {/* Services */}
          <VStack align="flex-start" spacing={4}>
            <Heading size="sm" color="white">
              Services
            </Heading>
            <Stack spacing={2}>
              {services.map((service) => (
                <Link
                  key={service.path}
                  as={RouterLink}
                  to={service.path}
                  fontSize="sm"
                  color="gray.400"
                  _hover={{ color: 'brand.lightBlue', textDecoration: 'none' }}
                  transition="color 0.2s"
                >
                  {service.name}
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

          {/* Social Links */}
          <HStack spacing={4}>
            <Link
              href="https://linkedin.com/company/boolavas"
              isExternal
              _hover={{ color: 'brand.lightBlue' }}
              transition="color 0.2s"
            >
              <Icon as={FaLinkedin} boxSize={5} />
            </Link>
            <Link
              href="https://twitter.com/boolavas"
              isExternal
              _hover={{ color: 'brand.lightBlue' }}
              transition="color 0.2s"
            >
              <Icon as={FaTwitter} boxSize={5} />
            </Link>
            <Link
              href="https://github.com/boolavas"
              isExternal
              _hover={{ color: 'brand.lightBlue' }}
              transition="color 0.2s"
            >
              <Icon as={FaGithub} boxSize={5} />
            </Link>
          </HStack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
