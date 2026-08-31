import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import CTAButton from '../common/CTAButton'

const MotionBox = motion(Box)

const spring = { type: 'spring', stiffness: 110, damping: 20 }

// Floating orb (reused from Hero pattern)
const Orb = ({ size, color, top, left, right, bottom, delay, duration = 7 }) => (
  <MotionBox
    position="absolute"
    w={size}
    h={size}
    borderRadius="full"
    bg={color}
    filter="blur(80px)"
    top={top}
    left={left}
    right={right}
    bottom={bottom}
    pointerEvents="none"
    animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3], scale: [1, 1.15, 1] }}
    transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
  />
)

const CTASection = ({
  title = "Ready to explore Boolavas products?",
  description = "Discover MediBoo, MigraSafe and ConfigSafe — focused software products built to solve real business and engineering problems.",
  primaryCTA = "Explore Products",
  primaryHref = "/products",
  secondaryCTA = "Contact Boolavas",
  secondaryHref = "/contact",
  bg = "brand.surfaceAlt"
}) => {
  return (
    <Box as="section" bg={bg} py={24} position="relative" overflow="hidden">
      {/* Very subtle ambient orbs */}
      <Orb size="480px" color="rgba(255,49,49,0.08)"  bottom="-25%" right="-12%" delay={0}   duration={9} />
      <Orb size="340px" color="rgba(212,175,55,0.10)" top="-20%"   left="-8%"   delay={1.5} duration={7} />

      <Container maxW="4xl" position="relative" zIndex={1}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={spring}
        >
          <Box
            bg="white"
            border="1px solid"
            borderColor="brand.border"
            borderRadius="3xl"
            p={{ base: 10, md: 16 }}
            textAlign="center"
            boxShadow="0 1px 3px rgba(15,23,42,0.06), 0 20px 48px rgba(15,23,42,0.06)"
          >
            <VStack spacing={8}>
              <Heading
                size="2xl"
                color="brand.navy"
                lineHeight="1.15"
                letterSpacing="-0.02em"
              >
                {title}
              </Heading>
              <Text fontSize="xl" color="gray.600" maxW="2xl">
                {description}
              </Text>
              <HStack spacing={3} flexWrap="wrap" justify="center">
                <CTAButton href={primaryHref} size="lg">
                  {primaryCTA}
                </CTAButton>
                <CTAButton href={secondaryHref} variant="outline" size="lg">
                  {secondaryCTA}
                </CTAButton>
              </HStack>
            </VStack>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  )
}

export default CTASection
