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
  FaPrescriptionBottleAlt,
  FaMoneyBillWave,
  FaFlask,
  FaChartLine,
  FaBell,
} from 'react-icons/fa'
import CTAButton from '../common/CTAButton'

const MotionBox = motion(Box)

const medibooFeatures = [
  {
    icon: FaUserMd,
    title: 'Patient Management',
    description: 'Complete patient profiles with medical history, chief complaints, and demographic data.',
  },
  {
    icon: FaCalendarAlt,
    title: 'Appointments',
    description: 'Schedule appointments with automated SMS/email confirmations and appointment day reminders to patients.',
  },
  {
    icon: FaPrescriptionBottleAlt,
    title: 'Prescriptions',
    description: 'Generate, print, and manage digital prescriptions instantly.',
  },
  {
    icon: FaMoneyBillWave,
    title: 'Billing',
    description: 'Streamlined billing with invoice generation and payment tracking.',
  },
  {
    icon: FaFlask,
    title: 'Investigations',
    description: 'Record and track clinical investigations with follow-up workflows.',
  },
  {
    icon: FaChartLine,
    title: 'Reports',
    description: 'Real-time analytics and insights exportable to CSV.',
  },
  {
    icon: FaBell,
    title: 'Follow-up Tracking',
    description: 'Automated follow-up reminders with overdue tracking and patient notifications.',
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
            MediBoo Features
          </Badge>
          <Heading as="h2" size="2xl" color="brand.navy">
            Built for Homeopathy, Siddha, Dental & Acupuncture Clinics
          </Heading>
          <Text fontSize="xl" color="gray.600" maxW="3xl">
            MediBoo handles your complete clinic workflow — from patient registration to billing and follow-ups.
          </Text>
        </VStack>

        {/* Features Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mb={12}>
          {medibooFeatures.map((feature, index) => (
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

        {/* Bottom CTA */}
        <VStack spacing={4} textAlign="center" pt={8}>
          <Text fontSize="lg" color="gray.700" fontWeight="medium">
            Ready to streamline your clinic operations?
          </Text>
          <CTAButton href="https://mediboo-platform.vercel.app/" size="lg">
            Start 90-Day Free Trial
          </CTAButton>
          <Text fontSize="sm" color="gray.500">
            No credit card required · Full access to all features
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}

export default Products
