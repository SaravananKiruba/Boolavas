import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import {
  FaLightbulb,
  FaPencilRuler,
  FaCode,
  FaVial,
  FaRocket,
  FaHeadset,
} from 'react-icons/fa'

const MotionBox = motion(Box)

const steps = [
  {
    icon: FaLightbulb,
    title: 'Discovery & Planning',
    description: 'We understand your requirements, business goals, and create a detailed project roadmap.',
  },
  {
    icon: FaPencilRuler,
    title: 'Design & Architecture',
    description: 'UI/UX design and technical architecture planning for scalability and performance.',
  },
  {
    icon: FaCode,
    title: 'Development',
    description: 'Agile development with regular sprints, code reviews, and progress updates.',
  },
  {
    icon: FaVial,
    title: 'Testing & QA',
    description: 'Comprehensive testing including functionality, security, performance, and user acceptance.',
  },
  {
    icon: FaRocket,
    title: 'Deployment & Launch',
    description: 'Smooth deployment to production with Play Store publishing under your brand name.',
  },
  {
    icon: FaHeadset,
    title: 'Support & Maintenance',
    description: 'Ongoing support, updates, and enhancements to keep your product running smoothly.',
  },
]

const Process = () => {
  return (
    <Box py={20} bg="gray.50">
      <Container maxW="7xl">
        <VStack spacing={4} textAlign="center" mb={16}>
          <Heading size="2xl" color="brand.navy">
            Our Development Process
          </Heading>
          <Text fontSize="xl" color="gray.600" maxW="3xl">
            A proven approach to deliver high-quality software on time and within budget
          </Text>
        </VStack>

        <VStack spacing={8} align="stretch">
          {steps.map((step, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <HStack
                bg="white"
                p={8}
                borderRadius="xl"
                boxShadow="md"
                _hover={{ boxShadow: 'xl' }}
                transition="all 0.3s"
                spacing={6}
                align="flex-start"
              >
                <Box
                  bg="brand.blue"
                  color="white"
                  p={4}
                  borderRadius="lg"
                  minW="fit-content"
                >
                  <Icon as={step.icon} boxSize={8} />
                </Box>
                <VStack align="flex-start" spacing={2} flex={1}>
                  <HStack>
                    <Box
                      bg="brand.blue"
                      color="white"
                      borderRadius="full"
                      w={8}
                      h={8}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontWeight="bold"
                      fontSize="sm"
                    >
                      {index + 1}
                    </Box>
                    <Heading size="md" color="brand.navy">
                      {step.title}
                    </Heading>
                  </HStack>
                  <Text color="gray.600" fontSize="lg">
                    {step.description}
                  </Text>
                </VStack>
              </HStack>
            </MotionBox>
          ))}
        </VStack>
      </Container>
    </Box>
  )
}

export default Process
