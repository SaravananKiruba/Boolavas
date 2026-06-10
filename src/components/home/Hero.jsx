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
import { FaWhatsapp, FaEnvelope, FaCheckCircle } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import boolavasLogo from '../../assets/boolavas logo.png'
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
        bg="radial-gradient(circle, rgba(255, 49, 49, 0.12) 0%, transparent 70%)"
        pointerEvents="none"
      />

      <Container maxW="7xl" position="relative" zIndex={1}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={12}
          align="center"
          justify="space-between"
        >
          {/* Left: Text content */}
          <VStack
            align={{ base: 'center', lg: 'flex-start' }}
            spacing={8}
            flex={1}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            {/* Boolavas logo */}
            <Box bg="white" borderRadius="2xl" px={5} py={3} display="inline-flex" boxShadow="lg">
              <Image
                src={boolavasLogo}
                alt="Boolavas"
                h="52px"
                objectFit="contain"
              />
            </Box>

            <MotionHeading
              as="h1"
              size="3xl"
              color="white"
              lineHeight="shorter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Powering Clinics with{' '}
              <Text as="span" color="brand.blue">MediBoo</Text>
            </MotionHeading>

            <MotionText
              fontSize="xl"
              color="gray.300"
              maxW="xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              MediBoo is Boolavas&apos;s flagship SaaS product — a multi-tenant clinic management
              system with white-label branding, queue management, appointments, and real-time
              analytics. Already live in production.
            </MotionText>

            <VStack align={{ base: 'center', lg: 'flex-start' }} spacing={3}>
              <HStack spacing={3}>
                <FaCheckCircle color="#ff3131" />
                <Text color="gray.300">Multi-Tenant · Multi-Branch · White-Label</Text>
              </HStack>
              <HStack spacing={3}>
                <FaCheckCircle color="#ff3131" />
                <Text color="gray.300">Appointments, Queue & Patient Management</Text>
              </HStack>
              <HStack spacing={3}>
                <FaCheckCircle color="#ff3131" />
                <Text color="gray.300">Live in Production — Trusted by Clinics</Text>
              </HStack>
            </VStack>

            {/* Primary CTAs */}
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} pt={2} w={{ base: 'full', sm: 'auto' }}>
              <Button
                as="a"
                href="mailto:contact@boolavas.in?subject=MediBoo Demo Request"
                leftIcon={<FaEnvelope />}
                size="lg"
                bg="brand.blue"
                color="white"
                _hover={{ bg: 'brand.600', transform: 'translateY(-2px)', boxShadow: 'lg' }}
                transition="all 0.3s"
                borderRadius="xl"
              >
                Request a Demo
              </Button>
              <Button
                as="a"
                href="https://wa.me/918667430536?text=Hi%2C%20I%20want%20a%20demo%20of%20MediBoo"
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<FaWhatsapp />}
                size="lg"
                bg="green.500"
                color="white"
                _hover={{ bg: 'green.600', transform: 'translateY(-2px)', boxShadow: 'lg' }}
                transition="all 0.3s"
                borderRadius="xl"
              >
                WhatsApp Us
              </Button>
            </Stack>
          </VStack>

          {/* Right side — MediBoo showcase */}
          <MotionBox
            flex={1}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Box
              bg="linear-gradient(135deg, #1a0000 0%, #3d0000 50%, #ff3131 100%)"
              borderRadius="2xl"
              p={10}
              boxShadow="0 0 60px rgba(255, 49, 49, 0.3), 0 25px 50px rgba(0,0,0,0.5)"
              position="relative"
              border="1px solid"
              borderColor="rgba(255,49,49,0.3)"
              overflow="hidden"
            >
              {/* Glow top right */}
              <Box
                position="absolute"
                top="-30%"
                right="-20%"
                w="60%"
                h="60%"
                bg="radial-gradient(circle, rgba(255,49,49,0.25) 0%, transparent 70%)"
                pointerEvents="none"
              />
              <VStack spacing={8} position="relative">
                {/* MediBoo Logo — big and centred */}
                <VStack spacing={4}>
                  <Box
                    bg="white"
                    borderRadius="2xl"
                    p={5}
                    boxShadow="0 0 30px rgba(255,49,49,0.5)"
                    display="inline-flex"
                  >
                    <Image
                      src={medibooLogo}
                      alt="MediBoo"
                      h="100px"
                      w="100px"
                      objectFit="cover"
                      borderRadius="xl"
                    />
                  </Box>
                  <VStack spacing={1}>
                    <Text color="white" fontWeight="extrabold" fontSize="3xl" letterSpacing="tight">
                      MediBoo
                    </Text>
                    <Badge bg="green.400" color="white" px={3} py={1} borderRadius="full" fontSize="xs">
                      ✓ Live in Production
                    </Badge>
                  </VStack>
                </VStack>

                {/* Stats row */}
                <HStack spacing={6} justify="center" w="full">
                  {[
                    { label: 'Multi-Tenant', val: 'SaaS' },
                    { label: 'White-Label', val: 'Ready' },
                    { label: 'Healthcare', val: 'Focused' },
                  ].map((s) => (
                    <VStack key={s.label} spacing={1} textAlign="center">
                      <Text color="brand.lightBlue" fontWeight="bold" fontSize="md">{s.val}</Text>
                      <Text color="gray.400" fontSize="xs">{s.label}</Text>
                    </VStack>
                  ))}
                </HStack>

                {/* Divider */}
                <Box w="full" h="1px" bg="rgba(255,49,49,0.3)" />

                {/* Quick feature tags */}
                <HStack flexWrap="wrap" justify="center" spacing={2}>
                  {['Patient Mgmt', 'Appointments', 'Queue System', 'Analytics', 'RBAC', 'Multi-Branch'].map((tag) => (
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
