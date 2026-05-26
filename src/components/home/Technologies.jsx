import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiFlutter,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiTensorflow,
  SiTypescript,
  SiFirebase,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

const MotionBox = motion(Box)

const technologies = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
]

const Technologies = () => {
  return (
    <Box py={20} bg="white">
      <Container maxW="7xl">
        <VStack spacing={4} textAlign="center" mb={16}>
          <Heading size="2xl" color="brand.navy">
            Technology Stack
          </Heading>
          <Text fontSize="xl" color="gray.600" maxW="3xl">
            We leverage cutting-edge technologies to build scalable, performant, and future-proof solutions
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 3, md: 4, lg: 6 }} spacing={8}>
          {technologies.map((tech, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
            >
              <VStack
                p={6}
                bg="gray.50"
                borderRadius="lg"
                _hover={{ bg: 'brand.50' }}
                transition="all 0.3s"
                spacing={3}
              >
                <Box as={tech.icon} boxSize={12} color={tech.color} />
                <Text fontWeight="semibold" fontSize="sm" color="brand.navy">
                  {tech.name}
                </Text>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>

        <Box mt={12} textAlign="center">
          <Text color="gray.600" fontSize="lg">
            And many more technologies tailored to your project needs
          </Text>
        </Box>
      </Container>
    </Box>
  )
}

export default Technologies
