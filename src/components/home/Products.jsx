import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Icon,
  Badge,
  Divider,
  Image,
  Flex,
  Button,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import {
  FaUserMd,
  FaCalendarAlt,
  FaTicketAlt,
  FaChartBar,
  FaLock,
  FaPalette,
  FaFlask,
  FaBuilding,
  FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa'
import agaramLogo from '../../assets/agaram logo new.jpg'
import medibooLogo from '../../assets/MediBoo Logo.png'

const MotionBox = motion(Box)

const medibooFeatures = [
  {
    icon: FaUserMd,
    title: 'Patient Management',
    description: 'Complete patient profiles with medical history, chief complaints, investigations, and demographic data.',
  },
  {
    icon: FaCalendarAlt,
    title: 'Appointments & Follow-ups',
    description: 'Day-agenda view, follow-up queue with overdue tracking, and auto-sync of next appointment dates.',
  },
  {
    icon: FaTicketAlt,
    title: 'Queue / Token System',
    description: 'Kanban-style queue board with priority tokens (Urgent / Senior / Normal) and live updates.',
  },
  {
    icon: FaFlask,
    title: 'Clinical Investigations',
    description: 'Record, track, and manage clinical investigations with follow-up resolution workflows.',
  },
  {
    icon: FaChartBar,
    title: 'Reports & Analytics',
    description: 'Real-time analytics with demographics, appointment rates, and investigation summaries — exportable to CSV.',
  },
  {
    icon: FaLock,
    title: 'Role-Based Access Control',
    description: 'Doctor, Receptionist, Branch Admin, Clinic Admin, and Super Admin roles with scoped access.',
  },
  {
    icon: FaPalette,
    title: 'White-Label Branding',
    description: 'Each clinic gets its own logo, colors, favicon, and custom domain — fully white-labelled experience.',
  },
  {
    icon: FaBuilding,
    title: 'Multi-Branch Multi-Tenant',
    description: 'Multiple independent clinics, each with multiple branches — isolated data, unified management.',
  },
]

const Products = () => {
  return (
    <Box py={20} bg="gray.50" id="products">
      <Container maxW="7xl">
        {/* Section Header */}
        <VStack spacing={4} textAlign="center" mb={16}>
          <Badge
            bg="brand.blue"
            color="white"
            fontSize="sm"
            px={4}
            py={1}
            borderRadius="full"
            textTransform="uppercase"
            letterSpacing="wider"
          >
            Our Product
          </Badge>
          <Heading size="2xl" color="brand.navy">
            MediBoo — Clinic Management, Reimagined
          </Heading>
          <Text fontSize="xl" color="gray.600" maxW="3xl">
            A full-featured, multi-tenant SaaS clinic management system by Boolavas — built for
            homeopathic and general medical practices, live in production.
          </Text>
        </VStack>

        {/* MediBoo Product Card */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          mb={16}
        >
          <Box
            bg="brand.navy"
            borderRadius="2xl"
            overflow="hidden"
            boxShadow="2xl"
          >
            {/* Product Header */}
            <Box
              bg="linear-gradient(135deg, #1a0000 0%, #2d0000 40%, #ff3131 100%)"
              p={{ base: 8, md: 12 }}
            >
              <Flex
                direction={{ base: 'column', md: 'row' }}
                align={{ base: 'center', md: 'center' }}
                justify="space-between"
                gap={8}
              >
                {/* MediBoo logo — large and prominent */}
                <HStack spacing={6} align="center">
                  <Box
                    bg="white"
                    borderRadius="2xl"
                    p={4}
                    boxShadow="0 0 40px rgba(255,49,49,0.5), 0 10px 30px rgba(0,0,0,0.4)"
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
                  <VStack align="flex-start" spacing={2}>
                    <Text
                      color="white"
                      fontWeight="extrabold"
                      fontSize={{ base: '3xl', md: '4xl' }}
                      letterSpacing="tight"
                      lineHeight="1"
                    >
                      MediBoo
                    </Text>
                    <Text color="red.200" fontSize="md" fontWeight="medium">
                      by Boolavas
                    </Text>
                    <Badge
                      bg="green.400"
                      color="white"
                      fontSize="xs"
                      px={3}
                      py={1}
                      borderRadius="full"
                    >
                      ✓ Live in Production
                    </Badge>
                  </VStack>
                </HStack>

                <VStack align={{ base: 'center', md: 'flex-end' }} spacing={4}>
                  <HStack spacing={2} flexWrap="wrap" justify={{ base: 'center', md: 'flex-end' }}>
                    <Badge colorScheme="red" variant="subtle">SaaS</Badge>
                    <Badge colorScheme="purple" variant="subtle">Multi-Tenant</Badge>
                    <Badge colorScheme="orange" variant="subtle">White-Label</Badge>
                    <Badge colorScheme="green" variant="subtle">Healthcare</Badge>
                  </HStack>
                  <Text color="gray.300" fontSize="sm">
                    Next.js · MySQL · Prisma · Chakra UI
                  </Text>
                  {/* Demo CTAs */}
                  <HStack spacing={3} flexWrap="wrap" justify={{ base: 'center', md: 'flex-end' }}>
                    <Button
                      as="a"
                      href="mailto:contact@boolavas.in?subject=MediBoo Demo Request"
                      leftIcon={<FaEnvelope />}
                      size="md"
                      bg="white"
                      color="brand.navy"
                      fontWeight="bold"
                      _hover={{ bg: 'gray.100', transform: 'translateY(-2px)' }}
                      transition="all 0.3s"
                      borderRadius="xl"
                    >
                      Request Demo
                    </Button>
                    <Button
                      as="a"
                      href="https://wa.me/918667430536?text=Hi%2C%20I%20want%20a%20demo%20of%20MediBoo"
                      target="_blank"
                      rel="noopener noreferrer"
                      leftIcon={<FaWhatsapp />}
                      size="md"
                      bg="green.500"
                      color="white"
                      _hover={{ bg: 'green.400', transform: 'translateY(-2px)' }}
                      transition="all 0.3s"
                      borderRadius="xl"
                    >
                      WhatsApp
                    </Button>
                  </HStack>
                </VStack>
              </Flex>
            </Box>

            {/* Product Description */}
            <Box px={{ base: 8, md: 12 }} py={8} bg="rgba(255,255,255,0.04)">
              <Text color="gray.200" fontSize="lg" lineHeight="tall" maxW="4xl">
                MediBoo is Boolavas&apos;s flagship SaaS product — a multi-tenant clinic management
                system for homeopathic and general medical practices. A single platform hosts multiple
                independent clinics, each with their own branches, doctors, receptionists, and fully
                white-labelled branding. From patient registration and clinical investigations to
                appointment scheduling, token queues, and real-time analytics — MediBoo covers the
                complete clinic workflow end-to-end.
              </Text>
            </Box>

            {/* Features Grid */}
            <Box px={{ base: 8, md: 12 }} pb={12}>
              <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={6}>
                {medibooFeatures.map((feature, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.07 }}
                  >
                    <VStack
                      align="flex-start"
                      spacing={3}
                      p={5}
                      bg="whiteAlpha.100"
                      borderRadius="xl"
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                      h="full"
                      _hover={{ bg: 'whiteAlpha.150', borderColor: 'brand.lightBlue' }}
                      transition="all 0.2s"
                    >
                      <Box bg="brand.blue" p={2} borderRadius="lg">
                        <Icon as={feature.icon} boxSize={5} color="white" />
                      </Box>
                      <Text color="white" fontWeight="semibold" fontSize="sm">
                        {feature.title}
                      </Text>
                      <Text color="gray.400" fontSize="xs" lineHeight="tall">
                        {feature.description}
                      </Text>
                    </VStack>
                  </MotionBox>
                ))}
              </SimpleGrid>
            </Box>
          </Box>
        </MotionBox>

        {/* Trusted By Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <VStack spacing={8}>
            <HStack w="full" spacing={4} align="center">
              <Divider borderColor="gray.300" />
              <Text
                color="gray.500"
                fontSize="sm"
                fontWeight="semibold"
                textTransform="uppercase"
                letterSpacing="wider"
                whiteSpace="nowrap"
                px={2}
              >
                Trusted By
              </Text>
              <Divider borderColor="gray.300" />
            </HStack>

            {/* Client: Agaram Institute */}
            <Box
              bg="white"
              borderRadius="2xl"
              boxShadow="lg"
              p={{ base: 8, md: 10 }}
              w="full"
              border="1px solid"
              borderColor="gray.100"
              _hover={{ boxShadow: 'xl', borderColor: 'brand.100' }}
              transition="all 0.3s"
            >
              <Flex
                direction={{ base: 'column', md: 'row' }}
                align="center"
                gap={8}
              >
                <Box
                  borderRadius="xl"
                  overflow="hidden"
                  minW={{ base: '180px', md: '220px' }}
                  maxW="220px"
                  flexShrink={0}
                  bg="white"
                  p={3}
                  boxShadow="sm"
                  border="1px solid"
                  borderColor="gray.100"
                >
                  <Image
                    src={agaramLogo}
                    alt="Agaram Institute of Life Science Studies"
                    w="full"
                    h="auto"
                    objectFit="contain"
                  />
                </Box>

                <VStack align="flex-start" spacing={3} flex={1}>
                  <HStack spacing={3} flexWrap="wrap">
                    <Heading size="md" color="brand.navy">
                      Agaram Institute of Life Science Studies
                    </Heading>
                    <Badge colorScheme="green" fontSize="xs">Live on MediBoo</Badge>
                  </HStack>
                  <Text color="gray.600" lineHeight="tall">
                    A leading homeopathic and life science institution using MediBoo to manage their
                    clinic operations — from patient registration and medical history to appointment
                    scheduling and queue management. MediBoo powers their entire patient workflow
                    under their own branded experience.
                  </Text>
                  <HStack spacing={4} flexWrap="wrap" pt={2}>
                    <HStack spacing={2}>
                      <Icon as={FaUserMd} color="brand.blue" boxSize={4} />
                      <Text fontSize="sm" color="gray.600">Patient Management</Text>
                    </HStack>
                    <HStack spacing={2}>
                      <Icon as={FaCalendarAlt} color="brand.blue" boxSize={4} />
                      <Text fontSize="sm" color="gray.600">Appointments</Text>
                    </HStack>
                    <HStack spacing={2}>
                      <Icon as={FaTicketAlt} color="brand.blue" boxSize={4} />
                      <Text fontSize="sm" color="gray.600">Queue System</Text>
                    </HStack>
                    <HStack spacing={2}>
                      <Icon as={FaPalette} color="brand.blue" boxSize={4} />
                      <Text fontSize="sm" color="gray.600">White-Label Branding</Text>
                    </HStack>
                  </HStack>
                </VStack>
              </Flex>
            </Box>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  )
}

export default Products
