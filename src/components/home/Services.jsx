import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
  HStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import {
  FaLaptopCode,
  FaMobileAlt,
  FaGlobe,
  FaCloud,
  FaRobot,
  FaBuilding,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const MotionBox = motion(Box)

const services = [
  {
    icon: FaLaptopCode,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your specific business requirements and scale with your growth.',
    link: '/software-development',
  },
  {
    icon: FaGlobe,
    title: 'Website Development',
    description: 'SEO-optimized, high-performance websites that convert visitors into customers and drive business results.',
    link: '/website-development',
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for Android & iOS. Publish on Play Store under your own brand name.',
    link: '/mobile-app-development',
  },
  {
    icon: FaCloud,
    title: 'SaaS Product Development',
    description: 'Build scalable SaaS platforms with modern architecture, subscription management, and cloud infrastructure.',
    link: '/services',
  },
  {
    icon: FaBuilding,
    title: 'Enterprise Applications',
    description: 'ERP, CRM, billing systems, and custom business applications to streamline your operations.',
    link: '/software-development',
  },
  {
    icon: FaRobot,
    title: 'AI-Powered Automation',
    description: 'Intelligent automation and agentic systems to reduce manual work and increase efficiency.',
    link: '/services',
  },
]

const Services = () => {
  return (
    <Box py={20} bg="gray.50">
      <Container maxW="7xl">
        <VStack spacing={4} textAlign="center" mb={16}>
          <Heading size="2xl" color="brand.navy">
            Our Services
          </Heading>
          <Text fontSize="xl" color="gray.600" maxW="3xl">
            Comprehensive software development solutions to transform your business ideas into powerful digital products
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {services.map((service, index) => (
            <MotionBox
              key={index}
              as={Link}
              to={service.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Box
                bg="white"
                p={8}
                borderRadius="xl"
                boxShadow="md"
                _hover={{ boxShadow: 'xl' }}
                transition="all 0.3s"
                height="100%"
                cursor="pointer"
              >
                <VStack align="flex-start" spacing={4}>
                  <Icon as={service.icon} boxSize={12} color="brand.blue" />
                  <Heading size="md" color="brand.navy">
                    {service.title}
                  </Heading>
                  <Text color="gray.600">
                    {service.description}
                  </Text>
                  <HStack color="brand.blue" fontWeight="semibold" pt={2}>
                    <Text>Learn More</Text>
                    <Text>→</Text>
                  </HStack>
                </VStack>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Services
