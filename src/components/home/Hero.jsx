import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  HStack,
  VStack,
  Badge,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import CTAButton from '../common/CTAButton'
import { FaCheckCircle, FaCubes, FaUserTie } from 'react-icons/fa'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)

const Hero = () => {
  return (
    <Box
      bg="brand.navy"
      position="relative"
      overflow="hidden"
      pt={{ base: 20, md: 32 }}
      pb={{ base: 20, md: 32 }}
    >
      {/* Background gradient effect */}
      <Box
        position="absolute"
        top="-50%"
        right="-20%"
        width="100%"
        height="100%"
        bg="radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%)"
        pointerEvents="none"
      />

      <Container maxW="7xl" position="relative" zIndex={1}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={12}
          align="center"
          justify="space-between"
        >
          <VStack
            align={{ base: 'center', lg: 'flex-start' }}
            spacing={8}
            flex={1}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            <Badge
              colorScheme="blue"
              fontSize="sm"
              px={4}
              py={1}
              borderRadius="full"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              Product Company · Solo Tech Lead
            </Badge>

            <MotionHeading
              as="h1"
              size="3xl"
              color="white"
              lineHeight="shorter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              We Build Products That Solve Real Problems
            </MotionHeading>

            <MotionText
              fontSize="xl"
              color="gray.300"
              maxW="xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Boolavas is a solo-founder product company. We design, build, and ship
              production-grade SaaS products from the ground up — not templates, not shortcuts,
              just real engineering.
            </MotionText>

            <VStack align={{ base: 'center', lg: 'flex-start' }} spacing={3}>
              <HStack spacing={3}>
                <FaCheckCircle color="#38BDF8" />
                <Text color="gray.300">Multi-Tenant SaaS Architecture</Text>
              </HStack>
              <HStack spacing={3}>
                <FaCheckCircle color="#38BDF8" />
                <Text color="gray.300">White-Label & Custom Domain Support</Text>
              </HStack>
              <HStack spacing={3}>
                <FaCheckCircle color="#38BDF8" />
                <Text color="gray.300">Built, Owned & Operated by One Tech Lead</Text>
              </HStack>
            </VStack>

            <HStack spacing={4} pt={4}>
              <CTAButton href="#products" size="lg">
                See Our Products
              </CTAButton>
              <CTAButton href="/contact" variant="secondary" size="lg">
                Get in Touch
              </CTAButton>
            </HStack>
          </VStack>

          {/* Right side - Visual Element */}
          <MotionBox
            flex={1}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Box
              bg="linear-gradient(135deg, #1e3a5f 0%, #2563EB 100%)"
              borderRadius="2xl"
              p={10}
              boxShadow="2xl"
              position="relative"
              border="1px solid"
              borderColor="whiteAlpha.200"
            >
              <VStack spacing={6} color="white">
                {/* Boolavas Logo Placeholder */}
                <Box
                  bg="whiteAlpha.100"
                  border="2px dashed"
                  borderColor="whiteAlpha.300"
                  borderRadius="xl"
                  px={8}
                  py={6}
                  w="full"
                  textAlign="center"
                >
                  <Text color="whiteAlpha.500" fontSize="xs" mb={1}>
                    [ Boolavas Logo ]
                  </Text>
                  <Text fontWeight="bold" fontSize="3xl" letterSpacing="widest" color="white">
                    BOOLAVAS
                  </Text>
                </Box>
                <VStack spacing={3} w="full">
                  <HStack justify="space-between" w="full" bg="whiteAlpha.100" p={4} borderRadius="lg">
                    <HStack spacing={3}>
                      <FaCubes />
                      <Text fontSize="sm">Flagship Product</Text>
                    </HStack>
                    <Text fontWeight="bold" color="brand.lightBlue">MediBoo</Text>
                  </HStack>
                  <HStack justify="space-between" w="full" bg="whiteAlpha.100" p={4} borderRadius="lg">
                    <HStack spacing={3}>
                      <FaUserTie />
                      <Text fontSize="sm">Founded & Built by</Text>
                    </HStack>
                    <Text fontWeight="bold" color="brand.lightBlue">1 Tech Lead</Text>
                  </HStack>
                </VStack>
              </VStack>
            </Box>
          </MotionBox>
        </Stack>
      </Container>
    </Box>
  )
}

export default Hero
