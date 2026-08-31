import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
  Icon,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/common/SEO'
import { FaHome, FaEnvelope } from 'react-icons/fa'

const MotionBox = motion(Box)

const NotFound = () => {
  return (
    <Box>
      <SEO
        title="404 - Page Not Found | Boolavas"
        description="The page you are looking for does not exist."
        canonical="https://boolavas.in/404"
      />

      <Box bg="brand.surface" minH="80vh" display="flex" alignItems="center" py={20}>
        <Container maxW="5xl">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <VStack spacing={8} textAlign="center">
              <Heading
                as="h1"
                fontSize={{ base: '6xl', md: '9xl' }}
                fontWeight="bold"
                color="brand.blue"
                lineHeight="1"
                letterSpacing="-0.03em"
              >
                404
              </Heading>
              
              <Heading
                as="h2"
                size="2xl"
                color="brand.navy"
                lineHeight="shorter"
              >
                Page Not Found
              </Heading>

              <Text fontSize="xl" color="gray.600" maxW="2xl">
                Sorry, the page you are looking for does not exist or has been moved.
              </Text>

              <VStack spacing={4} pt={4}>
                <Button
                  as={RouterLink}
                  to="/"
                  size="lg"
                  variant="primary"
                  leftIcon={<Icon as={FaHome} />}
                >
                  Go to Homepage
                </Button>

                <Button
                  as={RouterLink}
                  to="/contact"
                  size="lg"
                  variant="outline"
                  leftIcon={<Icon as={FaEnvelope} />}
                >
                  Contact Us
                </Button>
              </VStack>

              <Text fontSize="sm" color="gray.500" pt={6}>
                If you think this is a mistake, please{' '}
                <Text
                  as={RouterLink}
                  to="/contact"
                  color="brand.blue"
                  fontWeight="semibold"
                  _hover={{ textDecoration: 'underline' }}
                >
                  let us know
                </Text>
                .
              </Text>
            </VStack>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  )
}

export default NotFound
