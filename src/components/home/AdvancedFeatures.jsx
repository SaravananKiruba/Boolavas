import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Icon,
  Badge,
  HStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import {
  FaLock,
  FaShieldAlt,
  FaUserShield,
  FaHistory,
  FaBrain,
  FaChartPie,
  FaDatabase,
  FaCloudUploadAlt,
  FaFileExport,
  FaMobileAlt,
  FaCode,
  FaBolt,
} from 'react-icons/fa'

const MotionBox = motion(Box)

const securityFeatures = [
  {
    icon: FaLock,
    title: 'AES-256 Encryption',
    description: 'PHI data encrypted at rest with AES-256-GCM. Military-grade protection for patient medical history.',
  },
  {
    icon: FaUserShield,
    title: 'Multi-Factor Authentication',
    description: 'OTP-based MFA with email verification. 6-digit codes, bcrypt hashing, 3-attempt limit.',
  },
  {
    icon: FaHistory,
    title: 'Comprehensive Audit Logs',
    description: 'Every CREATE, UPDATE, DELETE operation logged. Complete audit trail for compliance.',
  },
  {
    icon: FaShieldAlt,
    title: 'Role-Based Access Control',
    description: 'Granular permissions for superadmin, clinicadmin, branchadmin, doctor, and receptionist roles.',
  },
]

const analyticsFeatures = [
  {
    icon: FaBrain,
    title: 'Disease Intelligence',
    description: 'Rule-based disease tagging from chief complaints. ICD-10 ready with structured diagnosis tracking.',
  },
  {
    icon: FaChartPie,
    title: 'Advanced Reports',
    description: 'Revenue reports, P&L statements, doctor productivity, disease demographics, and prescribing patterns.',
  },
  {
    icon: FaDatabase,
    title: 'Daily Aggregates',
    description: 'Pre-computed KPIs written daily. Fast analytics with 5-minute in-process cache.',
  },
  {
    icon: FaFileExport,
    title: 'Data Export',
    description: 'Export patient data, reports to CSV/Excel. Full database backup in SQL format (superadmin).',
  },
]

const technicalFeatures = [
  {
    icon: FaCode,
    title: 'Next.js + Prisma ORM',
    description: 'Built on Next.js Pages Router with Prisma for type-safe database access.',
  },
  {
    icon: FaDatabase,
    title: 'MySQL + Cloud Hosting',
    description: 'Reliable MySQL database hosted on Vercel. Automatic backups and 99.9% uptime.',
  },
  {
    icon: FaMobileAlt,
    title: 'Responsive Design',
    description: 'Chakra UI v2 for beautiful, responsive interfaces. Works on desktop, tablet, and mobile.',
  },
  {
    icon: FaBolt,
    title: 'Real-Time Updates',
    description: 'Live queue management, instant notifications, and real-time analytics dashboards.',
  },
]

const AdvancedFeatures = () => {
  return (
    <Box py={20} bg="white">
      <Container maxW="7xl">
        {/* Header */}
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
            Enterprise-Grade Platform
          </Badge>
          <Heading as="h2" size="2xl" color="brand.navy">
            Built for Security, Scale & Performance
          </Heading>
          <Text fontSize="xl" color="gray.600" maxW="3xl">
            MediBoo is not just another clinic software — it's a comprehensive multi-tenant SaaS platform with enterprise-grade security and advanced analytics.
          </Text>
        </VStack>

        {/* Security Features */}
        <Box mb={16}>
          <Heading size="lg" color="brand.navy" mb={6} textAlign="center">
            Security & Compliance
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
            {securityFeatures.map((feature, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <VStack
                  align="center"
                  spacing={3}
                  p={6}
                  bg="gray.50"
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="gray.100"
                  h="full"
                  textAlign="center"
                  _hover={{ bg: 'white', borderColor: 'brand.blue', boxShadow: 'md' }}
                  transition="all 0.2s"
                >
                  <Box bg="brand.blue" p={3} borderRadius="lg">
                    <Icon as={feature.icon} boxSize={6} color="white" />
                  </Box>
                  <Text color="brand.navy" fontWeight="bold" fontSize="md">
                    {feature.title}
                  </Text>
                  <Text color="gray.600" fontSize="sm" lineHeight="tall">
                    {feature.description}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Box>

        {/* Analytics & Intelligence */}
        <Box mb={16}>
          <Heading size="lg" color="brand.navy" mb={6} textAlign="center">
            Analytics & Business Intelligence
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
            {analyticsFeatures.map((feature, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <VStack
                  align="center"
                  spacing={3}
                  p={6}
                  bg="gray.50"
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="gray.100"
                  h="full"
                  textAlign="center"
                  _hover={{ bg: 'white', borderColor: 'brand.blue', boxShadow: 'md' }}
                  transition="all 0.2s"
                >
                  <Box bg="brand.blue" p={3} borderRadius="lg">
                    <Icon as={feature.icon} boxSize={6} color="white" />
                  </Box>
                  <Text color="brand.navy" fontWeight="bold" fontSize="md">
                    {feature.title}
                  </Text>
                  <Text color="gray.600" fontSize="sm" lineHeight="tall">
                    {feature.description}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Box>

        {/* Technical Stack */}
        <Box>
          <Heading size="lg" color="brand.navy" mb={6} textAlign="center">
            Modern Tech Stack
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
            {technicalFeatures.map((feature, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <VStack
                  align="center"
                  spacing={3}
                  p={6}
                  bg="gray.50"
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="gray.100"
                  h="full"
                  textAlign="center"
                  _hover={{ bg: 'white', borderColor: 'brand.blue', boxShadow: 'md' }}
                  transition="all 0.2s"
                >
                  <Box bg="brand.blue" p={3} borderRadius="lg">
                    <Icon as={feature.icon} boxSize={6} color="white" />
                  </Box>
                  <Text color="brand.navy" fontWeight="bold" fontSize="md">
                    {feature.title}
                  </Text>
                  <Text color="gray.600" fontSize="sm" lineHeight="tall">
                    {feature.description}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Box>

        {/* HIPAA Ready Badge */}
        <Box mt={12} textAlign="center">
          <HStack justify="center" spacing={4} flexWrap="wrap">
            <Badge colorScheme="green" fontSize="md" px={4} py={2} borderRadius="lg">
              HIPAA-Ready Architecture
            </Badge>
            <Badge colorScheme="blue" fontSize="md" px={4} py={2} borderRadius="lg">
              99.9% Uptime SLA
            </Badge>
            <Badge colorScheme="purple" fontSize="md" px={4} py={2} borderRadius="lg">
              Daily Automated Backups
            </Badge>
            <Badge colorScheme="red" fontSize="md" px={4} py={2} borderRadius="lg">
              Multi-Tenant Isolation
            </Badge>
          </HStack>
        </Box>
      </Container>
    </Box>
  )
}

export default AdvancedFeatures
