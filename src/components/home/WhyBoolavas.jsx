import { Box, Container, Heading, Text, VStack, SimpleGrid, Icon, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaBullseye, FaFeatherAlt, FaShieldAlt, FaChartLine } from 'react-icons/fa'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)

const spring = { type: 'spring', stiffness: 110, damping: 20 }
const springFast = { type: 'spring', stiffness: 320, damping: 28 }

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show:   { opacity: 1, y: 0,  scale: 1, transition: spring },
}

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
    <Box as="section" py={{ base: 16, md: 24 }} bg="brand.cream" position="relative" overflow="hidden">
      {/* Subtle red radial tint */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="80%"
        h="60%"
        bg="radial-gradient(ellipse, rgba(255,49,49,0.06) 0%, transparent 70%)"
        pointerEvents="none"
      />

      <Container maxW="7xl" position="relative" zIndex={1}>
        <VStack spacing={4} textAlign="center" mb={{ base: 12, md: 16 }}>
          <MotionHeading
            as="h2"
            size="2xl"
            color="brand.navy"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...spring }}
          >
            Why Boolavas
          </MotionHeading>
          <MotionText
            fontSize="xl"
            color="gray.600"
            maxW="3xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...spring, delay: 0.1 }}
          >
            Boolavas builds practical software products that solve real business and engineering
            problems — without unnecessary complexity.
          </MotionText>
        </VStack>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={6}>
            {reasons.map((reason) => (
              <MotionBox
                key={reason.title}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  borderColor: 'rgba(255,49,49,0.4)',
                  boxShadow: '0 24px 60px rgba(255,49,49,0.12)',
                  transition: springFast,
                }}
                bg="white"
                border="1px solid"
                borderColor="rgba(212,175,55,0.3)"
                borderRadius="2xl"
                p={7}
                h="100%"
                cursor="default"
                boxShadow="0 4px 20px rgba(18,0,8,0.08)"
              >
                <VStack align="flex-start" spacing={4}>
                  <MotionBox
                    display="flex"
                    justify="center"
                    align="center"
                    bg="rgba(255,49,49,0.08)"
                    borderRadius="xl"
                    boxSize={12}
                    whileHover={{ scale: 1.15, rotate: 5, transition: springFast }}
                  >
                    <Icon as={reason.icon} boxSize={6} color="brand.blue" />
                  </MotionBox>
                  <Heading as="h3" size="md" color="brand.navy">
                    {reason.title}
                  </Heading>
                  <Text color="gray.600" fontSize="sm" lineHeight="tall">
                    {reason.description}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </motion.div>
      </Container>
    </Box>
  )
}

export default WhyBoolavas
