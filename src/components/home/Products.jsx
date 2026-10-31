import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Badge,
  Icon,
  Stack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa'
import MediBooLogo from '../../assets/MediBooLogo'
import CTAButton from '../common/CTAButton'
import { products } from '../../data/products'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)

const Products = () => {
  const product = products[0]
  const { name, category, summary, route, appUrl, accentGradient, capabilities } = product

  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg="brand.surfaceAlt" id="products">
      <Container maxW="6xl">
        <MotionVStack
          spacing={4}
          textAlign="center"
          mb={{ base: 10, md: 14 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            display="inline-flex"
            alignItems="center"
            bg="brand.navy"
            color="white"
            fontSize="xs"
            px={4}
            py={1.5}
            borderRadius="full"
            textTransform="uppercase"
            letterSpacing="widest"
            fontWeight="semibold"
          >
            Our Product
          </Badge>
          <Heading as="h2" size="2xl" color="brand.navy" maxW="3xl">
            One focused product, built to do its job well
          </Heading>
        </MotionVStack>

        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          bg="white"
          border="1.5px solid"
          borderColor="brand.border"
          borderRadius="3xl"
          overflow="hidden"
          boxShadow="0 1px 3px rgba(15,23,42,0.06), 0 24px 60px rgba(15,23,42,0.08)"
        >
          {/* Accent top bar */}
          <Box h="6px" background={accentGradient} />

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 10, lg: 16 }} p={{ base: 8, md: 12 }}>
            {/* Left: identity + summary + CTAs */}
            <VStack align="flex-start" spacing={6} justify="center">
              <HStack spacing={4} align="center">
                <MediBooLogo h="48px" />
                <Badge
                  bg="brand.50"
                  color="brand.700"
                  fontSize="xs"
                  px={3}
                  py={1}
                  borderRadius="full"
                  textTransform="none"
                  fontWeight="medium"
                >
                  {category}
                </Badge>
              </HStack>

              <Heading as="h3" fontSize={{ base: '3xl', md: '4xl' }} color="brand.navy" lineHeight="1.1" letterSpacing="-0.02em">
                {name}
              </Heading>

              <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="tall">
                {summary}
              </Text>

              <Stack direction={{ base: 'column', sm: 'row' }} spacing={3} pt={2} w={{ base: 'full', sm: 'auto' }}>
                <CTAButton href={route} size="lg" rightIcon={<Icon as={FaArrowRight} boxSize={3} />}>
                  Explore {name}
                </CTAButton>
                {appUrl && (
                  <CTAButton href={appUrl} variant="outline" size="lg" rightIcon={<Icon as={FaExternalLinkAlt} boxSize={3} />}>
                    Open app
                  </CTAButton>
                )}
              </Stack>
            </VStack>

            {/* Right: capabilities */}
            <VStack align="stretch" spacing={4} justify="center">
              {capabilities.slice(0, 4).map((cap) => (
                <HStack
                  key={cap.title}
                  align="flex-start"
                  spacing={4}
                  p={4}
                  borderRadius="xl"
                  bg="brand.surfaceAlt"
                  border="1px solid"
                  borderColor="brand.border"
                >
                  <Box
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    background={accentGradient}
                    borderRadius="lg"
                    boxSize={10}
                    flexShrink={0}
                  >
                    <Icon as={cap.icon} boxSize={5} color="white" />
                  </Box>
                  <Box>
                    <Text fontWeight="semibold" color="brand.navy" fontSize="sm">
                      {cap.title}
                    </Text>
                    <Text color="gray.600" fontSize="sm" lineHeight="tall">
                      {cap.description}
                    </Text>
                  </Box>
                </HStack>
              ))}
            </VStack>
          </SimpleGrid>
        </MotionBox>
      </Container>
    </Box>
  )
}

export default Products

