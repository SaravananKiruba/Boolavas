import { Box, Heading, Text, VStack, HStack, Icon, Badge } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const MotionBox = motion(Box)

const ProductCard = ({ product, index = 0 }) => {
  return (
    <MotionBox
      as={RouterLink}
      to={product.route}
      aria-label={`Explore ${product.name} — ${product.category}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      display="flex"
      flexDirection="column"
      bg="rgba(255,255,255,0.03)"
      border="1px solid"
      borderColor="whiteAlpha.200"
      borderRadius="2xl"
      p={8}
      h="100%"
      role="group"
      _hover={{
        borderColor: 'brand.blue',
        transform: 'translateY(-4px)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
      }}
      sx={{ transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease' }}
    >
      <VStack align="flex-start" spacing={5} h="100%">
        <HStack
          justify="center"
          align="center"
          bg="rgba(255,49,49,0.12)"
          borderRadius="xl"
          boxSize={14}
        >
          <Icon as={product.icon} boxSize={7} color="brand.blue" />
        </HStack>

        <VStack align="flex-start" spacing={2}>
          <Heading as="h3" size="lg" color="white">
            {product.name}
          </Heading>
          <Badge
            bg="whiteAlpha.100"
            color="brand.lightBlue"
            fontSize="xs"
            px={3}
            py={1}
            borderRadius="full"
            textTransform="none"
            fontWeight="medium"
          >
            {product.category}
          </Badge>
        </VStack>

        <Text color="gray.400" fontSize="md" flex={1}>
          {product.summary}
        </Text>

        <HStack
          color="brand.lightBlue"
          fontWeight="semibold"
          fontSize="sm"
          _groupHover={{ color: 'brand.blue' }}
          transition="color 0.2s"
        >
          <Text>Explore {product.name}</Text>
          <Icon
            as={FaArrowRight}
            boxSize={3}
            transition="transform 0.2s"
            _groupHover={{ transform: 'translateX(4px)' }}
          />
        </HStack>
      </VStack>
    </MotionBox>
  )
}

export default ProductCard
