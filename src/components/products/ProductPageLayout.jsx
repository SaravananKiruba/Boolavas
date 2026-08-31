import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Icon,
  Badge,
  Stack,
  List,
  ListItem,
  ListIcon,
  Image,
} from '@chakra-ui/react'
import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa'
import SEO from '../common/SEO'
import CTAButton from '../common/CTAButton'
import BreadcrumbSchema from '../schemas/BreadcrumbSchema'
import SoftwareApplicationSchema from '../schemas/SoftwareApplicationSchema'
import FAQ from '../home/FAQ'
import LeadCaptureModal from '../common/LeadCaptureModal'
import medibooLogo from '../../assets/MediBoo Logo.png'

const MotionBox = motion(Box)

const ProductPageLayout = ({ product }) => {
  const { name, category, icon, appUrl, seo, hero, problem, howItWorks, capabilities, audience, whyMatters, faqs } = product
  const [leadModalOpen, setLeadModalOpen] = useState(false)

  const schemaCategory = product.slug === 'mediboo' ? 'BusinessApplication' : 'DeveloperApplication'

  return (
    <Box bg="brand.surface">
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
        type="website"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://boolavas.in' },
          { name: 'Products', url: 'https://boolavas.in/products' },
          { name, url: seo.canonical },
        ]}
      />
      <SoftwareApplicationSchema
        name={name}
        description={seo.description}
        category={schemaCategory}
        url={seo.canonical}
      />

      {/* Hero */}
      <Box as="section" position="relative" overflow="hidden" pt={{ base: 20, md: 28 }} pb={{ base: 16, md: 24 }}>
        <Box
          position="absolute"
          top="-40%"
          right="-15%"
          width="70%"
          height="100%"
          bg="radial-gradient(circle, rgba(255, 49, 49, 0.08) 0%, transparent 70%)"
          pointerEvents="none"
        />
        <Container maxW="6xl" position="relative" zIndex={1}>
          <VStack spacing={6} align="flex-start" maxW="3xl">
            <HStack spacing={3}>
              {product.slug === 'mediboo' ? (
                <MotionBox
                  initial={{ opacity: 0, scale: 0.9, y: 6 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                  <Image
                    src={medibooLogo}
                    h="40px"
                    objectFit="contain"
                    alt="MediBoo"
                  />
                </MotionBox>
              ) : (
                <HStack justify="center" align="center" bg="brand.50" borderRadius="xl" boxSize={12}>
                  <Icon as={icon} boxSize={6} color="brand.blue" />
                </HStack>
              )}
              <Badge
                bg="gray.100"
                color="gray.700"
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

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Heading as="h1" fontSize={{ base: '3xl', md: '5xl' }} color="brand.navy" lineHeight="1.1" letterSpacing="-0.02em">
                {hero.heading}
              </Heading>
            </MotionBox>

            <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.600" maxW="2xl">
              {hero.description}
            </Text>

            <Stack direction={{ base: 'column', sm: 'row' }} spacing={3} pt={2} w={{ base: 'full', sm: 'auto' }}>
              {appUrl && (
                <CTAButton
                  onClick={() => setLeadModalOpen(true)}
                  size="lg"
                  rightIcon={<Icon as={FaExternalLinkAlt} boxSize={3} />}
                >
                  Open {name}
                </CTAButton>
              )}
              <CTAButton href="/contact" variant={appUrl ? 'outline' : 'primary'} size="lg">
                Contact Boolavas
              </CTAButton>
            </Stack>

            {appUrl && (
              <LeadCaptureModal
                isOpen={leadModalOpen}
                onClose={() => setLeadModalOpen(false)}
                productName={name}
                appUrl={appUrl}
              />
            )}
          </VStack>
        </Container>
      </Box>

      {/* Problem */}
      <Box as="section" py={{ base: 12, md: 20 }} bg="brand.surfaceAlt">
        <Container maxW="4xl">
          <VStack spacing={4} align="flex-start">
            <Heading as="h2" size="xl" color="brand.navy">
              {problem.title}
            </Heading>
            <Text fontSize="lg" color="gray.600" lineHeight="tall">
              {problem.body}
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* How it works */}
      <Box as="section" py={{ base: 12, md: 20 }} bg="brand.surface">
        <Container maxW="6xl">
          <VStack spacing={4} textAlign="center" mb={{ base: 10, md: 14 }}>
            <Heading as="h2" size="xl" color="brand.navy">
              How it works
            </Heading>
          </VStack>
          <SimpleGrid columns={{ base: 1, md: howItWorks.length >= 5 ? 5 : howItWorks.length }} spacing={6}>
            {howItWorks.map((step, index) => (
              <MotionBox
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <VStack align="flex-start" spacing={3} h="100%">
                  <Text fontSize="2xl" fontWeight="extrabold" color="brand.blue" letterSpacing="-0.02em">
                    {String(index + 1).padStart(2, '0')}
                  </Text>
                  <Heading as="h3" size="sm" color="brand.navy">
                    {step.title}
                  </Heading>
                  <Text color="gray.600" fontSize="sm" lineHeight="tall">
                    {step.description}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Capabilities */}
      <Box as="section" py={{ base: 12, md: 20 }} bg="brand.surfaceAlt">
        <Container maxW="6xl">
          <VStack spacing={4} textAlign="center" mb={{ base: 10, md: 14 }}>
            <Heading as="h2" size="xl" color="brand.navy">
              Key capabilities
            </Heading>
          </VStack>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
            {capabilities.map((cap, index) => (
              <MotionBox
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                bg="white"
                border="1px solid"
                borderColor="brand.border"
                borderRadius="2xl"
                p={7}
                h="100%"
                boxShadow="0 1px 3px rgba(15,23,42,0.05)"
                _hover={{ borderColor: 'brand.blue', boxShadow: '0 20px 40px rgba(15,23,42,0.08)', transform: 'translateY(-3px)' }}
                sx={{ transition: 'all 0.25s ease' }}
              >
                <VStack align="flex-start" spacing={4}>
                  <HStack justify="center" align="center" bg="brand.50" borderRadius="xl" boxSize={12}>
                    <Icon as={cap.icon} boxSize={6} color="brand.blue" />
                  </HStack>
                  <Heading as="h3" size="sm" color="brand.navy">
                    {cap.title}
                  </Heading>
                  <Text color="gray.600" fontSize="sm" lineHeight="tall">
                    {cap.description}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Who it's for + Why it matters */}
      <Box as="section" py={{ base: 12, md: 20 }} bg="brand.surface">
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
            <VStack align="flex-start" spacing={6}>
              <Heading as="h2" size="xl" color="brand.navy">
                Who it&apos;s for
              </Heading>
              <List spacing={4}>
                {audience.map((item) => (
                  <ListItem key={item} color="gray.700" display="flex" alignItems="flex-start">
                    <ListIcon as={FaCheckCircle} color="brand.blue" mt={1} />
                    <Text as="span">{item}</Text>
                  </ListItem>
                ))}
              </List>
            </VStack>
            <VStack align="flex-start" spacing={6}>
              <Heading as="h2" size="xl" color="brand.navy">
                {whyMatters.title}
              </Heading>
              <Text fontSize="lg" color="gray.600" lineHeight="tall">
                {whyMatters.body}
              </Text>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* FAQ */}
      <FAQ
        faqs={faqs}
        title={`${name} FAQ`}
        description={`Common questions about ${name}.`}
        id={`${product.slug}-faq`}
      />

      {/* CTA */}
      <Box as="section" py={{ base: 16, md: 20 }} bg="brand.surfaceAlt" position="relative" overflow="hidden">
        <Box
          position="absolute"
          bottom="-20%"
          left="-10%"
          width="50%"
          height="60%"
          bg="radial-gradient(circle, rgba(255, 49, 49, 0.06) 0%, transparent 70%)"
          pointerEvents="none"
        />
        <Container maxW="4xl" position="relative" zIndex={1}>
          <VStack spacing={8} textAlign="center">
            <Heading size="2xl" color="brand.navy">
              Interested in {name}?
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl">
              Reach out to learn more, or explore the rest of the Boolavas product portfolio.
            </Text>
            <HStack spacing={3} flexWrap="wrap" justify="center">
              {appUrl ? (
                <CTAButton href={appUrl} size="lg">
                  Open {name}
                </CTAButton>
              ) : (
                <CTAButton href="/contact" size="lg">
                  Contact Boolavas
                </CTAButton>
              )}
              <CTAButton href="/products" variant="outline" size="lg" rightIcon={<Icon as={FaArrowRight} boxSize={3} />}>
                All products
              </CTAButton>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Back link */}
      <Box bg="brand.surface" py={6} borderTop="1px solid" borderColor="brand.border">
        <Container maxW="6xl">
          <HStack
            as={RouterLink}
            to="/products"
            color="gray.600"
            _hover={{ color: 'brand.blue' }}
            spacing={2}
            w="fit-content"
          >
            <Icon as={FaArrowRight} boxSize={3} transform="rotate(180deg)" />
            <Text fontSize="sm">Back to all products</Text>
          </HStack>
        </Container>
      </Box>
    </Box>
  )
}

export default ProductPageLayout
