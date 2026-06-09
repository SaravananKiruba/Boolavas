import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import {
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaCode,
  FaChartLine,
  FaHandshake,
} from 'react-icons/fa'

const MotionBox = motion(Box)

const features = [
  {
    icon: FaShieldAlt,
    title: 'Production-Grade Engineering',
    description: 'Every product is built to production standards — secure, scalable, and maintainable from day one, not as an afterthought.',
  },
  {
    icon: FaCode,
    title: 'Full-Stack Ownership',
    description: 'One tech lead owns the entire stack — frontend, backend, database, deployment, and infrastructure. No gaps, no handoffs.',
  },
  {
    icon: FaChartLine,
    title: 'Domain-Driven Design',
    description: 'Products are built by deeply understanding the domain — not just technical requirements. MediBoo was built by studying real clinic workflows.',
  },
  {
    icon: FaHandshake,
    title: 'White-Label Ready',
    description: 'Every product is designed for white-labelling — custom domain, branding, logo, colors, and CSS per client, out of the box.',
  },
  {
    icon: FaUsers,
    title: 'Multi-Tenant Architecture',
    description: 'SaaS products with proper tenant isolation, role-based access control, and data scoping — built right from the schema level.',
  },
  {
    icon: FaClock,
    title: 'Fast Iteration',
    description: 'Solo founder advantage: no meetings overhead, no committee decisions. Features ship fast, feedback loops are tight.',
  },
]

const WhyChooseUs = () => {
  return (
    <Box py={20} bg="white">
      <Container maxW="7xl">
        <VStack spacing={4} textAlign="center" mb={16}>
          <Heading size="2xl" color="brand.navy">
            Why Boolavas?
          </Heading>
          <Text fontSize="xl" color="gray.600" maxW="3xl">
            A solo tech lead who builds complete SaaS products end-to-end. No bloat, no layers — just focused, high-quality engineering.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {features.map((feature, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <VStack align="flex-start" spacing={4} p={6}>
                <Box
                  bg="brand.50"
                  p={3}
                  borderRadius="lg"
                  display="inline-flex"
                >
                  <Icon as={feature.icon} boxSize={8} color="brand.blue" />
                </Box>
                <Heading size="md" color="brand.navy">
                  {feature.title}
                </Heading>
                <Text color="gray.600">
                  {feature.description}
                </Text>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default WhyChooseUs
