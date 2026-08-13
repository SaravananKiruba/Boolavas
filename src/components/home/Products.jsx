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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import {
  FaUserMd,
  FaCalendarAlt,
  FaPrescriptionBottleAlt,
  FaMoneyBillWave,
  FaFlask,
  FaChartLine,
  FaBell,
  FaUsers,
  FaShieldAlt,
  FaCloud,
  FaCog,
  FaWhatsapp,
  FaBoxes,
  FaMicroscope,
  FaVideo,
  FaListAlt,
  FaFileInvoiceDollar,
  FaBrain,
  FaPalette,
  FaKey,
  FaLock,
} from 'react-icons/fa'
import CTAButton from '../common/CTAButton'

const MotionBox = motion(Box)

const coreFeatures = [
  {
    icon: FaUserMd,
    title: 'Patient Management',
    description: 'Complete patient profiles with encrypted medical history, chief complaints, and structured clinical data.',
  },
  {
    icon: FaCalendarAlt,
    title: 'Smart Appointments',
    description: 'Schedule appointments with automated reminders, WhatsApp integration, and calendar sync.',
  },
  {
    icon: FaPrescriptionBottleAlt,
    title: 'Digital Prescriptions',
    description: 'Generate, print, and share prescriptions via WhatsApp. Medicine templates for faster prescribing.',
  },
  {
    icon: FaMoneyBillWave,
    title: 'Billing & Invoicing',
    description: 'GST-compliant billing with partial payments, invoice PDFs, and revenue tracking.',
  },
  {
    icon: FaFlask,
    title: 'Investigation Tracking',
    description: 'Lab reports, imaging, file attachments with follow-up workflows and reminders.',
  },
  {
    icon: FaListAlt,
    title: 'Queue Management',
    description: 'Token-based queue system with priorities (Normal, Urgent, Senior) and real-time Kanban board.',
  },
  {
    icon: FaChartLine,
    title: 'Advanced Analytics',
    description: 'Disease intelligence, prescribing patterns, revenue reports, and KPI dashboards.',
  },
  {
    icon: FaBell,
    title: 'Automated Reminders',
    description: 'WhatsApp & SMS appointment reminders, follow-up tracking, and overdue notifications.',
  },
]

const advancedModules = [
  {
    icon: FaFileInvoiceDollar,
    title: 'Expense Management',
    description: 'Track clinic expenses, vendor management, GST compliance, recurring expenses, and approval workflows.',
    badge: 'Plugin',
  },
  {
    icon: FaWhatsapp,
    title: 'WhatsApp Integration',
    description: 'Send appointment reminders, share prescriptions, and communicate with patients via WhatsApp.',
    badge: 'Plugin',
  },
  {
    icon: FaBoxes,
    title: 'Inventory Management',
    description: 'Track medicine stock, low-stock alerts, supplier management, and purchase orders.',
    badge: 'Plugin',
  },
  {
    icon: FaMicroscope,
    title: 'Laboratory Module',
    description: 'In-house lab management with test catalogue, result entry, and report generation.',
    badge: 'Plugin',
  },
  {
    icon: FaVideo,
    title: 'Telemedicine',
    description: 'Video consultation integration, online appointment booking, and remote patient management.',
    badge: 'Plugin',
  },
  {
    icon: FaBrain,
    title: 'Disease Intelligence',
    description: 'Rule-based disease tagging, ICD-10 coding, diagnosis tracking, and epidemiological reports.',
    badge: 'Advanced',
  },
]

const enterpriseFeatures = [
  {
    icon: FaCloud,
    title: 'Multi-Tenant SaaS',
    description: 'Host multiple clinics with isolated data, role-based access, and per-clinic branding.',
  },
  {
    icon: FaPalette,
    title: 'White-Label Branding',
    description: 'Custom logo, colors, CSS, and domain for each clinic. Fully branded experience.',
  },
  {
    icon: FaUsers,
    title: 'Multi-Branch Support',
    description: 'Manage multiple branches, doctors, and receptionists with centralized reporting.',
  },
  {
    icon: FaCog,
    title: 'Subscription Management',
    description: 'Flexible plans (Free, Starter, Professional, Enterprise) with trial periods and grace periods.',
  },
  {
    icon: FaShieldAlt,
    title: 'Advanced Security',
    description: 'AES-256 PHI encryption, MFA/OTP, audit logs, device session tracking, and HIPAA-ready.',
  },
  {
    icon: FaKey,
    title: 'Role-Based Access',
    description: 'Granular permissions for superadmin, clinicadmin, branchadmin, doctor, and receptionist roles.',
  },
]

const Products = () => {
  return (
    <Box as="section" py={20} bg="white" id="products">
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
            MediBoo Platform
          </Badge>
          <Heading as="h2" size="2xl" color="brand.navy">
            Complete Multi-Tenant Clinic Management SaaS
          </Heading>
          <Text fontSize="xl" color="gray.600" maxW="3xl">
            Enterprise-grade platform for Homeopathy, Siddha, Dental, Acupuncture & Gynaecology clinics. Secure, scalable, and fully customizable.
          </Text>
        </VStack>

        {/* Features Tabs */}
        <Tabs variant="soft-rounded" colorScheme="red" align="center">
          <TabList mb={8} flexWrap="wrap" justifyContent="center" gap={2}>
            <Tab fontWeight="semibold" fontSize="md" _selected={{ bg: 'brand.blue', color: 'white' }}>
              Core Features
            </Tab>
            <Tab fontWeight="semibold" fontSize="md" _selected={{ bg: 'brand.blue', color: 'white' }}>
              Advanced Modules
            </Tab>
            <Tab fontWeight="semibold" fontSize="md" _selected={{ bg: 'brand.blue', color: 'white' }}>
              Enterprise
            </Tab>
          </TabList>

          <TabPanels>
            {/* Core Features Panel */}
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
                {coreFeatures.map((feature, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <VStack
                      align="flex-start"
                      spacing={3}
                      p={6}
                      bg="gray.50"
                      borderRadius="xl"
                      border="1px solid"
                      borderColor="gray.100"
                      h="full"
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
            </TabPanel>

            {/* Advanced Modules Panel */}
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                {advancedModules.map((feature, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <VStack
                      align="flex-start"
                      spacing={3}
                      p={6}
                      bg="gray.50"
                      borderRadius="xl"
                      border="1px solid"
                      borderColor="gray.100"
                      h="full"
                      position="relative"
                      _hover={{ bg: 'white', borderColor: 'brand.blue', boxShadow: 'md' }}
                      transition="all 0.2s"
                    >
                      {feature.badge && (
                        <Badge
                          position="absolute"
                          top={3}
                          right={3}
                          colorScheme="purple"
                          fontSize="xs"
                          px={2}
                          py={1}
                        >
                          {feature.badge}
                        </Badge>
                      )}
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
            </TabPanel>

            {/* Enterprise Features Panel */}
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                {enterpriseFeatures.map((feature, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <VStack
                      align="flex-start"
                      spacing={3}
                      p={6}
                      bg="gray.50"
                      borderRadius="xl"
                      border="1px solid"
                      borderColor="gray.100"
                      h="full"
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
            </TabPanel>
          </TabPanels>
        </Tabs>

        {/* Tech Highlights */}
        <Box mt={16} p={8} bg="gray.50" borderRadius="2xl" border="1px solid" borderColor="gray.200">
          <Heading as="h3" size="lg" color="brand.navy" mb={6} textAlign="center">
            Built with Enterprise-Grade Technology
          </Heading>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6} textAlign="center">
            <VStack>
              <Icon as={FaLock} boxSize={8} color="brand.blue" />
              <Text fontWeight="bold" color="brand.navy">AES-256 Encryption</Text>
              <Text fontSize="sm" color="gray.600">PHI Data Protection</Text>
            </VStack>
            <VStack>
              <Icon as={FaShieldAlt} boxSize={8} color="brand.blue" />
              <Text fontWeight="bold" color="brand.navy">MFA & OTP</Text>
              <Text fontSize="sm" color="gray.600">Multi-Factor Auth</Text>
            </VStack>
            <VStack>
              <Icon as={FaCloud} boxSize={8} color="brand.blue" />
              <Text fontWeight="bold" color="brand.navy">Cloud-Based</Text>
              <Text fontSize="sm" color="gray.600">Hosted on Vercel</Text>
            </VStack>
            <VStack>
              <Icon as={FaChartLine} boxSize={8} color="brand.blue" />
              <Text fontWeight="bold" color="brand.navy">Real-Time Analytics</Text>
              <Text fontSize="sm" color="gray.600">Business Intelligence</Text>
            </VStack>
          </SimpleGrid>
        </Box>

        {/* Bottom CTA */}
        <VStack spacing={4} textAlign="center" pt={12}>
          <Heading size="lg" color="brand.navy">
            Ready to Transform Your Clinic?
          </Heading>
          <Text fontSize="lg" color="gray.700" fontWeight="medium" maxW="2xl">
            Join clinics already using MediBoo to streamline operations, improve patient care, and grow their practice.
          </Text>
          <HStack spacing={4} pt={4}>
            <CTAButton href="https://mediboo-platform.vercel.app/" size="lg">
              Start 90-Day Free Trial
            </CTAButton>
            <Button
              as="a"
              href="/contact"
              size="lg"
              variant="outline"
              borderColor="brand.blue"
              color="brand.blue"
              _hover={{ bg: 'brand.blue', color: 'white' }}
            >
              Schedule Demo
            </Button>
          </HStack>
          <Text fontSize="sm" color="gray.500">
            No credit card required · Full access to all features · Free onboarding & training
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}

export default Products
