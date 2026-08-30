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
const MotionText = motion(Text)
const MotionBadge = motion(Badge)

const spring = { type: 'spring', stiffness: 110, damping: 20 }
const springFast = { type: 'spring', stiffness: 320, damping: 28 }

// Word-level blur-fade-slide animation (Vercel/Linear style)
const wordVariants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(10px)' },
  show:   { opacity: 1, y: 0,  filter: 'blur(0px)', transition: spring },
}
const wordContainer = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.07 } },
}

const AnimatedWords = ({ text, color }) => (
  <motion.span variants={wordContainer} initial="hidden" animate="show">
    {text.split(' ').map((word, i) => (
      <motion.span
        key={i}
        variants={wordVariants}
        style={{ display: 'inline-block', marginRight: '0.28em', color }}
      >
        {word}
      </motion.span>
    ))}
  </motion.span>
)

// Floating ambient orb
const Orb = ({ size, color, top, left, right, bottom, delay, duration = 7 }) => (
  <MotionBox
    position="absolute"
    w={size}
    h={size}
    borderRadius="full"
    bg={color}
    filter="blur(90px)"
    top={top}
    left={left}
    right={right}
    bottom={bottom}
    pointerEvents="none"
    animate={{ y: [0, -38, 0], opacity: [0.35, 0.65, 0.35], scale: [1, 1.18, 1] }}
    transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
  />
)

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
      {/* Dot-grid overlay */}
      <Box
        position="absolute"
        inset={0}
        backgroundImage="radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)"
        backgroundSize="32px 32px"
        pointerEvents="none"
      />

      {/* Floating orbs */}
      <Orb size="520px" color="rgba(255,49,49,0.16)"  top="-25%" right="-12%" delay={0} duration={8} />
      <Orb size="360px" color="rgba(230,136,21,0.11)" bottom="-12%" left="4%"  delay={2} duration={6} />
      <Orb size="260px" color="rgba(255,49,49,0.09)"  top="42%"  left="18%"   delay={1} duration={9} />

      <Container maxW="7xl" position="relative" zIndex={1}>
        <VStack spacing={{ base: 8, md: 10 }} align="center" textAlign="center">
          <MotionBadge
            bg="rgba(255,49,49,0.1)"
            color="brand.lightBlue"
            fontSize="xs"
            px={4}
            py={1.5}
            borderRadius="full"
            textTransform="uppercase"
            letterSpacing="wider"
            border="1px solid"
            borderColor="rgba(255,82,82,0.22)"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...springFast, delay: 0.05 }}
          >
            Boolavas
          </MotionBadge>

          <Heading
            as="h1"
            fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
            color="white"
            lineHeight="1.15"
            maxW="4xl"
          >
            <AnimatedWords text="Software products built for" color="white" />
            {' '}
            <AnimatedWords text="real-world problems." color="#ff3131" />
          </Heading>

          <MotionText
            fontSize={{ base: 'lg', md: 'xl' }}
            color="gray.300"
            maxW="2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.75 }}
          >
            Boolavas builds practical, modern software products that simplify complex business and
            engineering workflows.
          </MotionText>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.95 }}
          >
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
          </MotionBox>
        </VStack>

        {/* Product quick-glance strip */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} pt={{ base: 12, md: 16 }}>
          {products.map((product, index) => (
            <MotionBox
              key={product.slug}
              as={RouterLink}
              to={product.route}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 1.1 + index * 0.12 }}
              whileHover={{
                y: -7,
                boxShadow: '0 22px 60px rgba(255,49,49,0.18)',
                borderColor: 'rgba(255,49,49,0.55)',
                transition: springFast,
              }}
              bg="rgba(255,255,255,0.03)"
              backdropFilter="blur(8px)"
              border="1px solid"
              borderColor="whiteAlpha.200"
              borderRadius="xl"
              p={5}
              role="group"
            >
              <HStack spacing={4} align="center">
                <Box
                  p={2.5}
                  borderRadius="lg"
                  bg="rgba(255,49,49,0.1)"
                  transition="all 0.25s ease"
                  _groupHover={{ bg: 'rgba(255,49,49,0.22)', transform: 'scale(1.12)' }}
                >
                  <Icon as={product.icon} boxSize={5} color="brand.blue" />
                </Box>
                <Box textAlign="left">
                  <Text color="white" fontWeight="bold" fontSize="sm">
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
