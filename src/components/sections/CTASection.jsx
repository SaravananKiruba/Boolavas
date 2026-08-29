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
    <Box as="section" bg={bg} py={20} position="relative" overflow="hidden">
      {/* Background decoration */}
      <Box
        position="absolute"
        bottom="-20%"
        right="-10%"
        width="50%"
        height="50%"
        bg="radial-gradient(circle, rgba(255, 49, 49, 0.12) 0%, transparent 70%)"
        pointerEvents="none"
      />

      <Container maxW="4xl" position="relative" zIndex={1}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <VStack spacing={8} textAlign="center">
            <Heading size="2xl" color="white">
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
        </MotionBox>
      </Container>
    </Box>
  )
}

export default CTASection
