import { Box, Container, Heading, Text, VStack, SimpleGrid } from '@chakra-ui/react'
import SEO from '../components/common/SEO'
import BreadcrumbSchema from '../components/schemas/BreadcrumbSchema'
import ProductCard from '../components/products/ProductCard'
import CTASection from '../components/sections/CTASection'
import { products } from '../data/products'

const Products = () => {
  return (
    <Box bg="brand.surface">
      <SEO
        title="Software Products | Boolavas"
        description="Explore MediBoo — Boolavas clinic management software for managing patients, appointments, prescriptions and everyday healthcare workflows."
        keywords="boolavas products, mediboo, clinic management software, patient management, appointment scheduling, prescription software"
        canonical="https://boolavas.in/products"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://boolavas.in' },
          { name: 'Products', url: 'https://boolavas.in/products' },
        ]}
      />

      {/* Hero */}
      <Box as="section" position="relative" overflow="hidden" pt={{ base: 20, md: 28 }} pb={{ base: 12, md: 16 }}>
        <Box
          position="absolute"
          top="-40%"
          right="-15%"
          width="60%"
          height="100%"
          bg="radial-gradient(circle, rgba(166,107,239,0.12) 0%, transparent 70%)"
          pointerEvents="none"
        />
        <Container maxW="7xl" position="relative" zIndex={1}>
          <VStack spacing={5} textAlign="center">
            <Heading as="h1" fontSize={{ base: '3xl', md: '5xl' }} color="brand.navy" lineHeight="1.1" letterSpacing="-0.02em" maxW="3xl">
              The Boolavas product
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.600" maxW="2xl">
              One focused product, designed to solve a specific real-world problem — without
              unnecessary complexity.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Product */}
      <Box as="section" pb={{ base: 16, md: 24 }} bg="brand.surface">
        <Container maxW="md">
          <SimpleGrid columns={1} spacing={6}>
            {products.map((product, index) => (
              <ProductCard key={product.slug} product={product} index={index} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <CTASection
        title="Want to know if MediBoo fits your clinic?"
        description="Tell us about your workflow and we'll show you how MediBoo can help."
        primaryCTA="Contact Boolavas"
        primaryHref="/contact"
        secondaryCTA="About Boolavas"
        secondaryHref="/about"
      />
    </Box>
  )
}

export default Products
