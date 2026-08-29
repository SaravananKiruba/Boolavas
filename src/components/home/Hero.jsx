import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  HStack,
  VStack,
  Badge,
  Icon,
  SimpleGrid,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight, FaEnvelope } from 'react-icons/fa'
import CTAButton from '../common/CTAButton'
import { products } from '../../data/products'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)

const Hero = () => {
  return (
    <Box
      as="section"
      bg="brand.navy"
      position="relative"
      overflow="hidden"
      pt={{ base: 16, md: 28 }}
      pb={{ base: 16, md: 24 }}
    >
      {/* Background gradient effect */}
      <Box
        position="absolute"
        top="-40%"
        right="-15%"
        width="70%"
        height="100%"
        bg="radial-gradient(circle, rgba(255, 49, 49, 0.12) 0%, transparent 70%)"
        pointerEvents="none"
      />

      <Container maxW="7xl" position="relative" zIndex={1}>
        <VStack spacing={{ base: 8, md: 10 }} align="center" textAlign="center">
          <Badge
            bg="whiteAlpha.100"
            color="brand.lightBlue"
            fontSize="xs"
            px={4}
            py={1.5}
            borderRadius="full"
            textTransform="uppercase"
            letterSpacing="wider"
          >
            Boolavas
          </Badge>

          <MotionHeading
            as="h1"
            fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
            color="white"
            lineHeight="1.1"
            maxW="4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Software products built for{' '}
            <Text as="span" color="brand.blue">
              real-world problems.
            </Text>
          </MotionHeading>

          <MotionText
            fontSize={{ base: 'lg', md: 'xl' }}
            color="gray.300"
            maxW="2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Boolavas builds practical, modern software products that simplify complex business and
            engineering workflows.
          </MotionText>

          <Stack
            direction={{ base: 'column', sm: 'row' }}
            spacing={4}
            pt={2}
            w={{ base: 'full', sm: 'auto' }}
          >
            <CTAButton href="/products" size="lg" rightIcon={<Icon as={FaArrowRight} boxSize={3} />}>
              Explore Products
            </CTAButton>
            <CTAButton
              href="/contact"
              variant="ghost"
              size="lg"
              leftIcon={<Icon as={FaEnvelope} boxSize={4} />}
            >
              Contact Boolavas
            </CTAButton>
          </Stack>
        </VStack>

        {/* Product quick-glance strip */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} pt={{ base: 12, md: 16 }}>
          {products.map((product, index) => (
            <MotionBox
              key={product.slug}
              as={RouterLink}
              to={product.route}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              bg="rgba(255,255,255,0.03)"
              border="1px solid"
              borderColor="whiteAlpha.200"
              borderRadius="xl"
              p={5}
              role="group"
              _hover={{ borderColor: 'brand.blue', bg: 'rgba(255,49,49,0.06)' }}
              sx={{ transition: 'border-color 0.3s ease, background 0.3s ease' }}
            >
              <HStack spacing={4} align="center">
                <Icon as={product.icon} boxSize={6} color="brand.blue" />
                <Box textAlign="left">
                  <Text color="white" fontWeight="bold">
                    {product.name}
                  </Text>
                  <Text color="gray.400" fontSize="xs">
                    {product.category}
                  </Text>
                </Box>
              </HStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Hero
