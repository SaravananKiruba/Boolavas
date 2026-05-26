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
    title: 'Enterprise-Grade Quality',
    description: 'Production-ready code with best practices, security standards, and scalable architecture.',
  },
  {
    icon: FaClock,
    title: 'On-Time Delivery',
    description: 'Agile development process with transparent timelines and regular progress updates.',
  },
  {
    icon: FaUsers,
    title: 'Dedicated Development Team',
    description: 'Experienced engineers focused on your project success with direct communication.',
  },
  {
    icon: FaCode,
    title: 'Modern Tech Stack',
    description: 'Latest technologies and frameworks to ensure your product stays competitive and maintainable.',
  },
  {
    icon: FaChartLine,
    title: 'Business-Focused Approach',
    description: 'We understand your business goals and build solutions that deliver measurable ROI.',
  },
  {
    icon: FaHandshake,
    title: 'White-Label Partnership',
    description: 'Publish apps under your own brand name. We stay behind the scenes as your tech partner.',
  },
]

const WhyChooseUs = () => {
  return (
    <Box py={20} bg="white">
      <Container maxW="7xl">
        <VStack spacing={4} textAlign="center" mb={16}>
          <Heading size="2xl" color="brand.navy">
            Why Choose Boolavas?
          </Heading>
          <Text fontSize="xl" color="gray.600" maxW="3xl">
            We&apos;re not just developers—we&apos;re your strategic technology partner committed to your success
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
