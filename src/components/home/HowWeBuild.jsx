import { Box, Container, Heading, Text, VStack, SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)

const spring = { type: 'spring', stiffness: 110, damping: 20 }

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: spring },
}

const steps = [
  { number: '01', title: 'Find a real problem', description: 'We start from an actual pain point in a real workflow — not a feature wishlist.' },
  { number: '02', title: 'Understand the workflow', description: 'We learn how people work today, so the product fits their reality.' },
  { number: '03', title: 'Build a focused solution', description: 'We build a product that solves the problem clearly, without unnecessary scope.' },
  { number: '04', title: 'Keep infrastructure simple', description: 'We favour simple, maintainable systems over heavy, fragile ones.' },
  { number: '05', title: 'Continuously improve', description: 'We refine each product based on how it is actually used.' },
]

const HowWeBuild = () => {
  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg="brand.navy" position="relative" overflow="hidden">
      {/* Dot-grid overlay */}
      <Box
        position="absolute"
        inset={0}
        backgroundImage="radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)"
        backgroundSize="28px 28px"
        pointerEvents="none"
      />

      <Container maxW="7xl" position="relative" zIndex={1}>
        <VStack spacing={4} textAlign="center" mb={{ base: 12, md: 16 }}>
          <MotionHeading
            as="h2"
            size="2xl"
            color="white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
          >
            How we build
          </MotionHeading>
          <MotionText
            fontSize="xl"
            color="gray.400"
            maxW="3xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...spring, delay: 0.1 }}
          >
            A simple, honest approach to building software products people can rely on.
          </MotionText>
        </VStack>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <SimpleGrid columns={{ base: 1, md: 5 }} spacing={6}>
            {steps.map((step) => (
              <MotionBox
                key={step.number}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { type: 'spring', stiffness: 320, damping: 28 } }}
                bg="rgba(255,255,255,0.03)"
                backdropFilter="blur(6px)"
                border="1px solid"
                borderColor="whiteAlpha.100"
                borderRadius="xl"
                p={6}
                h="100%"
                position="relative"
                _hover={{ borderColor: 'rgba(255,49,49,0.3)' }}
                sx={{ transition: 'border-color 0.3s ease' }}
              >
                {/* Gradient step number */}
                <Text
                  fontSize="4xl"
                  fontWeight="extrabold"
                  mb={3}
                  sx={{
                    background: 'linear-gradient(135deg, #ff3131 0%, #e68815 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {step.number}
                </Text>
                <Heading as="h3" size="sm" color="white" mb={2}>
                  {step.title}
                </Heading>
                <Text color="gray.400" fontSize="sm" lineHeight="tall">
                  {step.description}
                </Text>
              </MotionBox>
            ))}
          </SimpleGrid>
        </motion.div>
      </Container>
    </Box>
  )
}

export default HowWeBuild
