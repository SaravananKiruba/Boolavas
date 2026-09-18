import { Box, Container, Heading, Text, VStack, SimpleGrid, Badge } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import ProductCard from '../products/ProductCard'
import { products } from '../../data/products'

const MotionVStack = motion(VStack)

const Products = () => {
  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg="brand.surfaceAlt" id="products">
      <Container maxW="7xl">
        <MotionVStack
          spacing={4}
          textAlign="center"
          mb={{ base: 12, md: 16 }}
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
            boxShadow="0 2px 8px rgba(15,23,42,0.15)"
          >
            Our Products
          </Badge>
          <Heading as="h2" size="2xl" color="brand.navy">
            A focused portfolio of software products
          </Heading>
          <Text fontSize="xl" color="gray.600" maxW="3xl">
            A focused portfolio of software products designed to solve specific business and
            engineering problems.
          </Text>
        </MotionVStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {products.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Products
