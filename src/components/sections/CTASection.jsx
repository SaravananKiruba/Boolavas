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
  bg = "brand.navy"
}) => {
  return (
    <Box as="section" bg={bg} py={24} position="relative" overflow="hidden">
      {/* Animated orbs */}
      <Orb size="500px" color="rgba(255,49,49,0.14)"  bottom="-25%" right="-12%" delay={0} duration={9} />
      <Orb size="300px" color="rgba(230,136,21,0.1)"  top="-20%"   left="-8%"   delay={1.5} duration={7} />

      {/* Dot-grid overlay */}
      <Box
        position="absolute"
        inset={0}
        backgroundImage="radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)"
        backgroundSize="30px 30px"
        pointerEvents="none"
      />

      <Container maxW="4xl" position="relative" zIndex={1}>
        <MotionBox
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={spring}
        >
          {/* Glowing border card */}
          <Box
            bg="rgba(255,255,255,0.03)"
            backdropFilter="blur(10px)"
            border="1px solid"
            borderColor="rgba(255,49,49,0.22)"
            borderRadius="2xl"
            p={{ base: 10, md: 14 }}
            textAlign="center"
            className="glow-border"
          >
            <VStack spacing={8}>
              <Heading size="2xl" color="white" lineHeight="1.2">
                {title}
              </Heading>
              <Text fontSize="xl" color="gray.300" maxW="2xl">
                {description}
              </Text>
              <HStack spacing={4} flexWrap="wrap" justify="center">
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
