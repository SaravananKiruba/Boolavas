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
    gradient: 'linear-gradient(135deg, #ff3131 0%, #e02424 100%)',
    shadow: 'rgba(255,49,49,0.3)',
    description:
      'Each Boolavas product solves one clearly defined problem well, instead of trying to do everything.',
  },
  {
    icon: FaFeatherAlt,
    title: 'Simple to use',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
    shadow: 'rgba(124,58,237,0.3)',
    description:
      'We keep interfaces clean and workflows practical, so the software gets out of your way.',
  },
  {
    icon: FaShieldAlt,
    title: 'Built to be safe',
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
    shadow: 'rgba(14,165,233,0.3)',
    description:
      'Our tools are designed to catch risky changes early — before they become production problems.',
  },
  {
    icon: FaChartLine,
    title: 'Made for real work',
    gradient: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
    shadow: 'rgba(5,150,105,0.3)',
    description:
      'Every product comes from a real workflow, built to fit how people actually work day to day.',
  },
]

const WhyBoolavas = () => {
  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg="brand.surface" position="relative" overflow="hidden">
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
                  y: -6,
                  transition: springFast,
                }}
                bg="white"
                border="1.5px solid"
                borderColor="brand.border"
                borderRadius="2xl"
                p={7}
                h="100%"
                cursor="default"
                position="relative"
                overflow="hidden"
                boxShadow="0 1px 4px rgba(15,23,42,0.05)"
                _hover={{
                  borderColor: 'transparent',
                  boxShadow: '0 20px 48px rgba(15,23,42,0.10)',
                }}
                sx={{
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '15px',
                    padding: '1.5px',
                    background: reason.gradient,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    opacity: 0,
                    transition: 'opacity 0.25s ease',
                  },
                  '&:hover::after': { opacity: 1 },
                }}
              >
                <VStack align="flex-start" spacing={4}>
                  <MotionBox
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="xl"
                    boxSize={12}
                    background={reason.gradient}
                    boxShadow={`0 4px 12px ${reason.shadow}`}
                    whileHover={{ scale: 1.1, rotate: 4, transition: springFast }}
                  >
                    <Icon as={reason.icon} boxSize={6} color="white" />
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
