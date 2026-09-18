import { Box, Heading, Text, VStack, HStack, Icon, Badge } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import MediBooLogo from '../../assets/MediBooLogo'

const MotionBox = motion(Box)

const ProductCard = ({ product, index = 0 }) => {
  const gradient = product.accentGradient || 'linear-gradient(135deg, #ff3131 0%, #e02424 100%)'
  const accent = product.accentColor || '#ff3131'

  return (
    <MotionBox
      as={RouterLink}
      to={product.route}
      aria-label={`Explore ${product.name} — ${product.category}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      display="flex"
      flexDirection="column"
      bg="white"
      border="1.5px solid"
      borderColor="brand.border"
      borderRadius="2xl"
      p={8}
      h="100%"
      role="group"
      position="relative"
      overflow="hidden"
      boxShadow="0 1px 4px rgba(15,23,42,0.05)"
      _hover={{
        borderColor: accent,
        transform: 'translateY(-5px)',
        boxShadow: `0 20px 48px rgba(15,23,42,0.10), 0 0 0 1px ${accent}22`,
      }}
      sx={{
        transition: 'border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: gradient,
          borderRadius: '16px 16px 0 0',
          opacity: 0,
          transition: 'opacity 0.25s ease',
        },
        '&:hover::before': { opacity: 1 },
      }}
    >
      <VStack align="flex-start" spacing={5} h="100%">
        {/* Icon / Logo */}
        {product.slug === 'mediboo' ? (
          <Box
            transition="transform 0.25s ease"
            _groupHover={{ transform: 'scale(1.05)' }}
          >
            <MediBooLogo h="36px" />
          </Box>
        ) : (
          <Box
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="xl"
            boxSize={14}
            background={gradient}
            boxShadow={`0 4px 14px ${accent}33`}
            transition="transform 0.25s ease, box-shadow 0.25s ease"
            _groupHover={{ transform: 'scale(1.08)', boxShadow: `0 8px 20px ${accent}44` }}
          >
            <Icon as={product.icon} boxSize={7} color="white" />
          </Box>
        )}

        <VStack align="flex-start" spacing={2}>
          {product.slug !== 'mediboo' && (
            <Heading as="h3" size="lg" color="brand.navy">
              {product.name}
            </Heading>
          )}
          <Badge
            bg="gray.100"
            color="gray.600"
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

        <Text color="gray.600" fontSize="md" flex={1} lineHeight="tall">
          {product.summary}
        </Text>

        <HStack
          color={accent}
          fontWeight="semibold"
          fontSize="sm"
          transition="gap 0.2s"
          _groupHover={{ gap: '10px' }}
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
