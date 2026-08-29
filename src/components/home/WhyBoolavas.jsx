import { Box, Container, Heading, Text, VStack, SimpleGrid, Icon, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaBullseye, FaFeatherAlt, FaShieldAlt, FaChartLine } from 'react-icons/fa'

const MotionBox = motion(Box)

const reasons = [
  {
    icon: FaBullseye,
    title: 'Focused by design',
    description:
      'Each Boolavas product solves one clearly defined problem well, instead of trying to do everything.',
  },
  {
    icon: FaFeatherAlt,
    title: 'Simple to use',
    description:
      'We keep interfaces clean and workflows practical, so the software gets out of your way.',
  },
  {
    icon: FaShieldAlt,
    title: 'Built to be safe',
    description:
      'Our tools are designed to catch risky changes early — before they become production problems.',
  },
  {
    icon: FaChartLine,
    title: 'Made for real work',
    description:
      'Every product comes from a real workflow, built to fit how people actually work day to day.',
  },
]

const WhyBoolavas = () => {
  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg="brand.mid">
      <Container maxW="7xl">
        <VStack spacing={4} textAlign="center" mb={{ base: 12, md: 16 }}>
          <Heading as="h2" size="2xl" color="white">
            Why Boolavas
          </Heading>
          <Text fontSize="xl" color="gray.400" maxW="3xl">
            Boolavas builds practical software products that solve real business and engineering
            problems — without unnecessary complexity.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={6}>
          {reasons.map((reason, index) => (
            <MotionBox
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              bg="rgba(255,255,255,0.03)"
              border="1px solid"
              borderColor="whiteAlpha.200"
              borderRadius="2xl"
              p={7}
              h="100%"
            >
              <VStack align="flex-start" spacing={4}>
                <HStack
                  justify="center"
                  align="center"
                  bg="rgba(255,49,49,0.12)"
                  borderRadius="xl"
                  boxSize={12}
                >
                  <Icon as={reason.icon} boxSize={6} color="brand.blue" />
                </HStack>
                <Heading as="h3" size="md" color="white">
                  {reason.title}
                </Heading>
                <Text color="gray.400" fontSize="sm">
                  {reason.description}
                </Text>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default WhyBoolavas
