import { Box, Container, Heading, Text, VStack, SimpleGrid } from '@chakra-ui/react'
import SEO from '../components/common/SEO'
import BreadcrumbSchema from '../components/schemas/BreadcrumbSchema'
import ProductCard from '../components/products/ProductCard'
import CTASection from '../components/sections/CTASection'
import { products } from '../data/products'

const Products = () => {
  return (
    <Box bg="brand.navy">
      <SEO
        title="Software Products | Boolavas"
        description="Explore Boolavas software products including MediBoo clinic management software, MigraSafe SQL migration risk analyzer and ConfigSafe configuration risk checker."
        keywords="boolavas products, mediboo, migrasafe, configsafe, clinic management software, sql migration risk analyzer, environment configuration checker"
        canonical="https://boolavas.in/products"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://boolavas.in' },
          { name: 'Products', url: 'https://boolavas.in/products' },
        ]}
      />

      {/* Hero */}
      <Box as="section" position="relative" overflow="hidden" pt={{ base: 24, md: 32 }} pb={{ base: 12, md: 16 }}>
        <Box
          position="absolute"
          top="-40%"
          right="-15%"
          width="60%"
          height="100%"
          bg="radial-gradient(circle, rgba(255, 49, 49, 0.12) 0%, transparent 70%)"
          pointerEvents="none"
        />
        <Container maxW="7xl" position="relative" zIndex={1}>
          <VStack spacing={5} textAlign="center">
            <Heading as="h1" fontSize={{ base: '3xl', md: '5xl' }} color="white" lineHeight="1.1" maxW="3xl">
              Software products from Boolavas
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.300" maxW="2xl">
              A focused portfolio of software products designed to solve specific business and
              engineering problems.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Product grid */}
      <Box as="section" pb={{ base: 16, md: 24 }}>
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {products.map((product, index) => (
              <ProductCard key={product.slug} product={product} index={index} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <CTASection
        title="Not sure which product fits?"
        description="Tell us about your workflow and we'll point you to the right Boolavas product."
        primaryCTA="Contact Boolavas"
        primaryHref="/contact"
        secondaryCTA="About Boolavas"
        secondaryHref="/about"
      />
    </Box>
  )
}

export default Products
