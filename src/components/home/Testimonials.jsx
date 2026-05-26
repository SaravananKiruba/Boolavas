import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Avatar,
  Icon,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const MotionBox = motion(Box)

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Founder, TechStart Solutions',
    content: 'Boolavas delivered our SaaS platform ahead of schedule with exceptional quality. Their team understood our vision and executed it perfectly. The attention to detail and professional approach made all the difference.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'CEO, HealthCare Plus',
    content: 'We needed a custom hospital management system, and Boolavas exceeded our expectations. The software has streamlined our operations significantly. Their post-launch support has been outstanding.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'Director, RetailHub India',
    content: 'Publishing our e-commerce app under our own brand on Play Store was seamless with Boolavas. They handled everything professionally from development to deployment. Highly recommended for serious businesses.',
    rating: 5,
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const current = testimonials[currentIndex]

  return (
    <Box py={20} bg="brand.navy" position="relative" overflow="hidden">
      {/* Background decoration */}
      <Box
        position="absolute"
        top="-10%"
        left="-10%"
        width="50%"
        height="50%"
        bg="radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%)"
        pointerEvents="none"
      />

      <Container maxW="5xl" position="relative" zIndex={1}>
        <VStack spacing={4} textAlign="center" mb={16}>
          <Heading size="2xl" color="white">
            Client Success Stories
          </Heading>
          <Text fontSize="xl" color="gray.300" maxW="3xl">
            Trusted by forward-thinking businesses across India
          </Text>
        </VStack>

        <MotionBox
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            bg="white"
            p={{ base: 8, md: 12 }}
            borderRadius="2xl"
            boxShadow="2xl"
            position="relative"
          >
            <Icon
              as={FaQuoteLeft}
              boxSize={12}
              color="brand.100"
              position="absolute"
              top={8}
              left={8}
            />

            <VStack spacing={6} pt={8}>
              <HStack spacing={1}>
                {[...Array(current.rating)].map((_, i) => (
                  <Icon key={i} as={FaStar} color="yellow.400" boxSize={5} />
                ))}
              </HStack>

              <Text
                fontSize="xl"
                color="gray.700"
                textAlign="center"
                fontStyle="italic"
                maxW="3xl"
              >
                &ldquo;{current.content}&rdquo;
              </Text>

              <VStack spacing={2} pt={4}>
                <Avatar name={current.name} size="lg" />
                <Heading size="sm" color="brand.navy">
                  {current.name}
                </Heading>
                <Text color="gray.600" fontSize="sm">
                  {current.role}
                </Text>
              </VStack>
            </VStack>
          </Box>
        </MotionBox>

        {/* Indicators */}
        <HStack justify="center" spacing={2} mt={8}>
          {testimonials.map((_, index) => (
            <Box
              key={index}
              w={index === currentIndex ? 8 : 2}
              h={2}
              bg={index === currentIndex ? 'brand.lightBlue' : 'whiteAlpha.400'}
              borderRadius="full"
              cursor="pointer"
              onClick={() => setCurrentIndex(index)}
              transition="all 0.3s"
            />
          ))}
        </HStack>
      </Container>
    </Box>
  )
}

export default Testimonials
