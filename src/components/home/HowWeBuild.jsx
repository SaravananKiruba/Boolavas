import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const steps = [
  { number: '01', title: 'Find a real problem', description: 'We start from an actual pain point in a real workflow — not a feature wishlist.' },
  { number: '02', title: 'Understand the workflow', description: 'We learn how people work today, so the product fits their reality.' },
  { number: '03', title: 'Build a focused solution', description: 'We build a product that solves the problem clearly, without unnecessary scope.' },
  { number: '04', title: 'Keep infrastructure simple', description: 'We favour simple, maintainable systems over heavy, fragile ones.' },
  { number: '05', title: 'Continuously improve', description: 'We refine each product based on how it is actually used.' },
]

const HowWeBuild = () => {
  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg="brand.navy">
      <Container maxW="7xl">
        <VStack spacing={4} textAlign="center" mb={{ base: 12, md: 16 }}>
          <Heading as="h2" size="2xl" color="white">
            How we build
          </Heading>
          <Text fontSize="xl" color="gray.400" maxW="3xl">
            A simple, honest approach to building software products people can rely on.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 5 }} spacing={6}>
          {steps.map((step, index) => (
            <MotionBox
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <VStack align="flex-start" spacing={3} h="100%">
                <HStack spacing={3} align="center">
                  <Text fontSize="3xl" fontWeight="extrabold" color="brand.blue">
                    {step.number}
                  </Text>
                </HStack>
                <Heading as="h3" size="sm" color="white">
                  {step.title}
                </Heading>
                <Text color="gray.400" fontSize="sm">
                  {step.description}
                </Text>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default HowWeBuild
