import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  HStack,
  VStack,
  Icon,
  SimpleGrid,
  Image,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight, FaEnvelope } from 'react-icons/fa'
import CTAButton from '../common/CTAButton'
import { products } from '../../data/products'
import boolavasLogo from '../../assets/boolavas logo.png'
import MediBooLogo from '../../assets/MediBooLogo'

const MotionBox = motion(Box)
const MotionText = motion(Text)

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

// Floating ambient orb (very subtle on light bg)
const Orb = ({ size, color, top, left, right, bottom, delay, duration = 7 }) => (
  <MotionBox
    position="absolute"
    w={size}
    h={size}
    borderRadius="full"
    bg={color}
    filter="blur(100px)"
    top={top}
    left={left}
    right={right}
    bottom={bottom}
    pointerEvents="none"
    animate={{ y: [0, -28, 0], opacity: [0.5, 0.85, 0.5], scale: [1, 1.12, 1] }}
    transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
  />
)

const Hero = () => {
  return (
    <Box
      as="section"
      bg="brand.surface"
      position="relative"
      overflow="hidden"
      pt={{ base: 20, md: 32 }}
      pb={{ base: 16, md: 24 }}
    >
      {/* Refined mesh-gradient background */}
      <Box
        position="absolute"
        inset={0}
        background="radial-gradient(ellipse 80% 60% at 60% -10%, rgba(124,58,237,0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at -10% 80%, rgba(255,49,49,0.05) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 110% 50%, rgba(14,165,233,0.04) 0%, transparent 60%)"
        pointerEvents="none"
      />
      {/* Subtle grid */}
      <Box
        position="absolute"
        inset={0}
        backgroundImage="linear-gradient(rgba(15,23,42,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.03) 1px, transparent 1px)"
        backgroundSize="48px 48px"
        pointerEvents="none"
        sx={{ maskImage: 'radial-gradient(ellipse 80% 70% at 50% 0%, black 30%, transparent 80%)', WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 0%, black 30%, transparent 80%)' }}
      />

      {/* Soft ambient orbs */}
      <Orb size="500px" color="rgba(124,58,237,0.07)" top="-20%"  right="-10%" delay={0}   duration={10} />
      <Orb size="380px" color="rgba(255,49,49,0.06)"  bottom="-15%" left="-8%"  delay={2}   duration={8} />

      <Container maxW="7xl" position="relative" zIndex={1}>
        <VStack spacing={{ base: 8, md: 10 }} align="center" textAlign="center">
          {/* Boolavas logo */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.92, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Image
              src={boolavasLogo}
              h={{ base: '60px', md: '86px' }}
              objectFit="contain"
              alt="Boolavas"
            />
          </MotionBox>

          <Heading
            as="h1"
            fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
            color="brand.navy"
            lineHeight="1.1"
            letterSpacing="-0.02em"
            maxW="4xl"
          >
            <AnimatedWords text="Software products built for" color="#0f172a" />
            {' '}
            <AnimatedWords text="real-world problems." color="#ff3131" />
          </Heading>

          <MotionText
            fontSize={{ base: 'lg', md: 'xl' }}
            color="gray.600"
            maxW="2xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.6 }}
          >
            Boolavas builds practical, modern software products that simplify complex business and
            engineering workflows.
          </MotionText>

          <MotionBox
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.75 }}
          >
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={3}
              pt={2}
              w={{ base: 'full', sm: 'auto' }}
            >
              <CTAButton href="/products" size="lg" rightIcon={<Icon as={FaArrowRight} boxSize={3} />}>
                Explore Products
              </CTAButton>
              <CTAButton
                href="/contact"
                variant="outline"
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.9 + index * 0.1 }}
              whileHover={{
                y: -4,
                transition: springFast,
              }}
              bg="white"
              backdropFilter="blur(8px)"
              border="1px solid"
              borderColor="brand.border"
              borderRadius="2xl"
              p={5}
              role="group"
              boxShadow="0 1px 3px rgba(15,23,42,0.05)"
              _hover={{
                borderColor: 'brand.blue',
                boxShadow: '0 12px 32px rgba(15,23,42,0.10)',
              }}
              sx={{ transition: 'border-color 0.2s ease, box-shadow 0.2s ease' }}
            >
              <HStack spacing={4} align="center">
                {product.slug === 'mediboo' ? (
                  <Box
                    flexShrink={0}
                    transition="transform 0.25s ease"
                    _groupHover={{ transform: 'scale(1.05)' }}
                  >
                    <MediBooLogo h="28px" />
                  </Box>
              ) : (
                  <Box
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="lg"
                    boxSize="30px"
                    background={product.accentGradient || 'linear-gradient(135deg, #ff3131, #e02424)'}
                    flexShrink={0}
                    transition="transform 0.25s ease"
                    _groupHover={{ transform: 'scale(1.1)' }}
                  >
                    <Icon as={product.icon} boxSize={4} color="white" />
                  </Box>
                )}
                <Box textAlign="left">
                  {product.slug !== 'mediboo' && (
                    <Text color="brand.navy" fontWeight="semibold" fontSize="sm">
                      {product.name}
                    </Text>
                  )}
                  <Text color="gray.500" fontSize="xs">
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
