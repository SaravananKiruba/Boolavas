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
  title = "Ready to Start Your Project?",
  description = "Let's discuss your requirements and build something amazing together. Get in touch with our team today.",
  primaryCTA = "Start Your Project",
  secondaryCTA = "Book Free Consultation",
  bg = "brand.navy"
}) => {
  return (
    <Box bg={bg} py={20} position="relative" overflow="hidden">
      {/* Background decoration */}
      <Box
        position="absolute"
        bottom="-20%"
        right="-10%"
        width="50%"
        height="50%"
        bg="radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)"
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
              <CTAButton href="/contact" size="lg">
                {primaryCTA}
              </CTAButton>
              <CTAButton href="/contact" variant="secondary" size="lg">
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
