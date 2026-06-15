import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  SimpleGrid,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import {
  FaUserPlus,
  FaClinicMedical,
  FaUserInjured,
  FaCalendarCheck,
  FaPrescriptionBottleAlt,
} from 'react-icons/fa'
import CTAButton from '../common/CTAButton'

const MotionBox = motion(Box)

const steps = [
  {
    icon: FaUserPlus,
    title: 'Sign Up',
    description: 'Create your account in under 2 minutes',
  },
  {
    icon: FaClinicMedical,
    title: 'Setup Clinic',
    description: 'Add your clinic details and branding',
  },
  {
    icon: FaUserInjured,
    title: 'Add Patients',
    description: 'Register patients and maintain records',
  },
  {
    icon: FaCalendarCheck,
    title: 'Book Appointments',
    description: 'Schedule and manage appointments',
  },
  {
    icon: FaPrescriptionBottleAlt,
    title: 'Generate Prescription',
    description: 'Create and print prescriptions instantly',
  },
]

const HowItWorks = () => {
  return (
    <Box py={20} bg="white">
      <Container maxW="7xl">
        <VStack spacing={4} textAlign="center" mb={16}>
          <Heading size="2xl" color="brand.navy">
            How It Works
          </Heading>
          <Text fontSize="xl" color="gray.600" maxW="3xl">
            Get started with MediBoo in 5 simple steps
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 5 }} spacing={8} mb={12}>
          {steps.map((step, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <VStack spacing={4} position="relative">
                {/* Step number */}
                <Box
                  position="absolute"
                  top="-10px"
                  right="20px"
                  bg="brand.lightBlue"
                  color="white"
                  borderRadius="full"
                  w="32px"
                  h="32px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="sm"
                  fontWeight="bold"
                >
                  {index + 1}
                </Box>

                {/* Icon */}
                <Box
                  bg="brand.50"
                  p={4}
                  borderRadius="xl"
                  display="inline-flex"
                  border="2px solid"
                  borderColor="brand.100"
                >
                  <Icon as={step.icon} boxSize={10} color="brand.blue" />
                </Box>

                {/* Title and description */}
                <VStack spacing={2} textAlign="center">
                  <Heading size="sm" color="brand.navy">
                    {step.title}
                  </Heading>
                  <Text color="gray.600" fontSize="sm">
                    {step.description}
                  </Text>
                </VStack>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>

        {/* CTA */}
        <VStack spacing={4} textAlign="center" mt={8}>
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

export default HowItWorks
