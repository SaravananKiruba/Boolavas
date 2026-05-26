import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import CTAButton from '../common/CTAButton'
import { FaRocket, FaCheckCircle } from 'react-icons/fa'

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
            <MotionHeading
              as="h1"
              size="3xl"
              color="white"
              lineHeight="shorter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Custom Software, Website & Mobile App Development in India
            </MotionHeading>

            <MotionText
              fontSize="xl"
              color="gray.300"
              maxW="xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Launch your digital product under your own brand. We build premium software solutions
              that drive business growth and deliver exceptional user experiences.
            </MotionText>

            <VStack align={{ base: 'center', lg: 'flex-start' }} spacing={3}>
              <HStack spacing={3}>
                <FaCheckCircle color="#38BDF8" />
                <Text color="gray.300">Play Store Publishing Under Your Brand</Text>
              </HStack>
              <HStack spacing={3}>
                <FaCheckCircle color="#38BDF8" />
                <Text color="gray.300">Enterprise-Grade Development</Text>
              </HStack>
              <HStack spacing={3}>
                <FaCheckCircle color="#38BDF8" />
                <Text color="gray.300">White-Label Solutions Available</Text>
              </HStack>
            </VStack>

            <HStack spacing={4} pt={4}>
              <CTAButton href="/contact" size="lg">
                Start Your Project
              </CTAButton>
              <CTAButton href="/services" variant="secondary" size="lg">
                View Services
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
              bg="linear-gradient(135deg, #2563EB 0%, #38BDF8 100%)"
              borderRadius="2xl"
              p={12}
              boxShadow="2xl"
              position="relative"
            >
              <VStack spacing={6} color="white">
                <FaRocket size={80} />
                <Heading size="lg" textAlign="center">
                  Ready to Build Your Vision?
                </Heading>
                <Text textAlign="center" fontSize="lg">
                  From concept to launch, we handle everything—development, design, testing, and deployment.
                </Text>
              </VStack>
            </Box>
          </MotionBox>
        </Stack>
      </Container>
    </Box>
  )
}

export default Hero
