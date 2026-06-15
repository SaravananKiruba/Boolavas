import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  HStack,
  VStack,
  Badge,
  Image,
  Button,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaHeadset } from 'react-icons/fa'
import medibooLogo from '../../assets/MediBoo Logo.png'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)

const Hero = () => {
  return (
    <Box
      bg="brand.navy"
      position="relative"
      overflow="hidden"
      pt={{ base: 12, md: 24 }}
      pb={{ base: 12, md: 24 }}
    >
      {/* Background gradient effect */}
      <Box
        position="absolute"
        top="-50%"
        right="-20%"
        width="100%"
        height="100%"
        bg="radial-gradient(circle, rgba(255, 49, 49, 0.12) 0%, transparent 70%)"
        pointerEvents="none"
      />

      <Container maxW="7xl" position="relative" zIndex={1}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: 8, lg: 12 }}
          align="center"
          justify="space-between"
        >
          {/* Left: Text content */}
          <VStack
            align={{ base: 'center', lg: 'flex-start' }}
            spacing={{ base: 5, md: 6 }}
            flex={1}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            {/* Badge */}
            <Badge
              bg="brand.blue"
              color="white"
              fontSize="xs"
              px={3}
              py={1}
              borderRadius="full"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              Healthcare SaaS Platform
            </Badge>

            <MotionHeading
              as="h1"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              color="white"
              lineHeight="shorter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Modern Clinic Management Software{' '}
              <Text as="span" color="brand.blue" display="block">
                for Homeopathy & Medical Clinics
              </Text>
            </MotionHeading>

            <MotionText
              fontSize={{ base: 'lg', md: 'xl' }}
              color="gray.300"
              maxW="xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Streamline patient management, appointments, prescriptions, billing, 
              investigations, and follow-ups — all in one powerful platform.
            </MotionText>

            <VStack align={{ base: 'center', lg: 'flex-start' }} spacing={2} pt={2}>
              <HStack spacing={2}>
                <FaCheckCircle color="#ff3131" size={16} />
                <Text color="gray.300" fontSize="sm">90-Day Free Trial · No Credit Card Required</Text>
              </HStack>
              <HStack spacing={2}>
                <FaCheckCircle color="#ff3131" size={16} />
                <Text color="gray.300" fontSize="sm">Multi-Branch Support · White-Label Ready</Text>
              </HStack>
              <HStack spacing={2}>
                <FaCheckCircle color="#ff3131" size={16} />
                <Text color="gray.300" fontSize="sm">Trusted by Clinics · Live in Production</Text>
              </HStack>
            </VStack>

            {/* Primary CTAs */}
            <Stack 
              direction={{ base: 'column', sm: 'row' }} 
              spacing={4} 
              pt={4} 
              w={{ base: 'full', sm: 'auto' }}
            >
              <Button
                as="a"
                href="https://mediboo-platform.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                size={{ base: 'lg', md: 'lg' }}
                bg="brand.blue"
                color="white"
                _hover={{ bg: 'brand.600', transform: 'translateY(-2px)', boxShadow: 'xl' }}
                transition="all 0.3s"
                borderRadius="xl"
                px={8}
                fontWeight="bold"
              >
                Start 90-Day Free Trial
              </Button>
              <Button
                as="a"
                href="/contact"
                leftIcon={<FaHeadset />}
                size={{ base: 'lg', md: 'lg' }}
                bg="whiteAlpha.200"
                color="white"
                borderWidth="1px"
                borderColor="whiteAlpha.300"
                _hover={{ bg: 'whiteAlpha.300', transform: 'translateY(-2px)', boxShadow: 'lg' }}
                transition="all 0.3s"
                borderRadius="xl"
                px={8}
              >
                Contact Support
              </Button>
            </Stack>
          </VStack>

          {/* Right side — MediBoo showcase */}
          <MotionBox
            flex={1}
            display={{ base: 'none', lg: 'block' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Box
              bg="linear-gradient(135deg, #1a0000 0%, #3d0000 50%, #ff3131 100%)"
              borderRadius="2xl"
              p={8}
              boxShadow="0 0 60px rgba(255, 49, 49, 0.3), 0 25px 50px rgba(0,0,0,0.5)"
              position="relative"
              border="1px solid"
              borderColor="rgba(255,49,49,0.3)"
              overflow="hidden"
            >
              {/* Glow effect */}
              <Box
                position="absolute"
                top="-30%"
                right="-20%"
                w="60%"
                h="60%"
                bg="radial-gradient(circle, rgba(255,49,49,0.25) 0%, transparent 70%)"
                pointerEvents="none"
              />
              <VStack spacing={6} position="relative">
                {/* MediBoo Logo */}
                <VStack spacing={3}>
                  <Box
                    bg="white"
                    borderRadius="2xl"
                    p={4}
                    boxShadow="0 0 30px rgba(255,49,49,0.5)"
                    display="inline-flex"
                  >
                    <Image
                      src={medibooLogo}
                      alt="MediBoo"
                      h="80px"
                      w="80px"
                      objectFit="cover"
                      borderRadius="xl"
                    />
                  </Box>
                  <VStack spacing={1}>
                    <Text color="white" fontWeight="extrabold" fontSize="2xl" letterSpacing="tight">
                      MediBoo
                    </Text>
                    <Badge bg="green.400" color="white" px={3} py={1} borderRadius="full" fontSize="xs">
                      ✓ Live in Production
                    </Badge>
                  </VStack>
                </VStack>

                {/* Divider */}
                <Box w="full" h="1px" bg="rgba(255,49,49,0.3)" />

                {/* Feature tags */}
                <HStack flexWrap="wrap" justify="center" spacing={2}>
                  {['Patients', 'Appointments', 'Prescriptions', 'Billing', 'Reports'].map((tag) => (
                    <Badge
                      key={tag}
                      bg="rgba(255,49,49,0.15)"
                      color="red.200"
                      border="1px solid"
                      borderColor="rgba(255,49,49,0.3)"
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontSize="xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </HStack>
              </VStack>
            </Box>
          </MotionBox>
        </Stack>
      </Container>
    </Box>
  )
}

export default Hero
