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
import { FaEnvelope } from 'react-icons/fa'
import boolavasLogo from '../../assets/boolavas logo.png'
import { products } from '../../data/products'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const company = [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <Box as="footer" bg="brand.surfaceAlt" color="gray.700" borderTop="1px solid" borderColor="brand.border">
      <Container maxW="7xl" py={16}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={12}>
          {/* Company Info */}
          <VStack align="flex-start" spacing={4}>
            <Image
              src={boolavasLogo}
              alt="Boolavas"
              h="44px"
              objectFit="contain"
            />
            <Text color="gray.600" fontSize="sm" lineHeight="tall">
              Software products built for real-world problems. Focused tools for healthcare,
              database engineering and application configuration workflows.
            </Text>
          </VStack>

          {/* Products */}
          <VStack align="flex-start" spacing={4}>
            <Heading size="xs" color="brand.navy" textTransform="uppercase" letterSpacing="wider">
              Products
            </Heading>
            <Stack spacing={2}>
              {products.map((item) => (
                <Link
                  key={item.slug}
                  as={RouterLink}
                  to={item.route}
                  fontSize="sm"
                  color="gray.600"
                  _hover={{ color: 'brand.blue', textDecoration: 'none' }}
                  transition="color 0.2s"
                >
                  {item.name}
                </Link>
              ))}
            </Stack>
          </VStack>

          {/* Company */}
          <VStack align="flex-start" spacing={4}>
            <Heading size="xs" color="brand.navy" textTransform="uppercase" letterSpacing="wider">
              Company
            </Heading>
            <Stack spacing={2}>
              {company.map((item) => (
                <Link
                  key={item.path}
                  as={RouterLink}
                  to={item.path}
                  fontSize="sm"
                  color="gray.600"
                  _hover={{ color: 'brand.blue', textDecoration: 'none' }}
                  transition="color 0.2s"
                >
                  {item.name}
                </Link>
              ))}
            </Stack>
          </VStack>

          {/* Contact */}
          <VStack align="flex-start" spacing={4}>
            <Heading size="xs" color="brand.navy" textTransform="uppercase" letterSpacing="wider">
              Contact
            </Heading>
            <HStack>
              <Icon as={FaEnvelope} color="brand.blue" />
              <Link
                href="mailto:contact@boolavas.in"
                fontSize="sm"
                color="gray.600"
                _hover={{ color: 'brand.blue' }}
              >
                contact@boolavas.in
              </Link>
            </HStack>
          </VStack>
        </SimpleGrid>

        <Divider my={8} borderColor="brand.border" />

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
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
