import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
  Badge,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
import CTAButton from '../common/CTAButton'

const MotionBox = motion(Box)

const plans = [
  {
    name: 'Free Trial',
    price: 'Free',
    period: '90 days',
    description: 'Try all features with no commitment',
    features: [
      'Full access to all features',
      'Unlimited patients',
      'Multi-branch support',
      'White-label branding',
      'Automated patient notifications',
      'Email & chat support',
    ],
    cta: 'Start Free Trial',
    ctaLink: 'https://mediboo-platform.vercel.app/',
    featured: true,
  },
  {
    name: 'Monthly Plan',
    price: '₹5,000',
    period: 'per month',
    description: 'Flexible monthly billing',
    features: [
      'Full access to all features',
      'Unlimited patients',
      'Multi-branch support',
      'White-label branding',
      'Automated patient notifications',
      'Priority support',
    ],
    cta: 'Contact Sales',
    ctaLink: '/contact',
    featured: false,
  },
  {
    name: 'Annual Plan',
    price: '₹48,000',
    period: 'per year',
    description: 'Save 20% with annual billing',
    features: [
      'Full access to all features',
      'Unlimited patients',
      'Multi-branch support',
      'White-label branding',
      'Automated patient notifications',
      'Premium support',
    ],
    cta: 'Contact Sales',
    ctaLink: '/contact',
    featured: false,
  },
]

const Pricing = () => {
  return (
    <Box py={20} bg="gray.50" id="pricing">
      <Container maxW="7xl">
        <VStack spacing={4} textAlign="center" mb={16}>
          <Badge
            bg="brand.blue"
            color="white"
            fontSize="sm"
            px={4}
            py={1}
            borderRadius="full"
            textTransform="uppercase"
            letterSpacing="wider"
          >
            Pricing
          </Badge>
          <Heading as="h2" size="2xl" color="brand.navy">
            Trusted by Clinics Across Chennai, Coimbatore & Madurai
          </Heading>
          <Text fontSize="xl" color="gray.600" maxW="3xl">
            Start with a 90-day free trial. No credit card required.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {plans.map((plan, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Box
                bg="white"
                p={8}
                borderRadius="xl"
                boxShadow={plan.featured ? 'xl' : 'md'}
                border="2px solid"
                borderColor={plan.featured ? 'brand.blue' : 'transparent'}
                position="relative"
                height="100%"
                transition="all 0.3s"
              >
                {plan.featured && (
                  <Badge
                    position="absolute"
                    top="-12px"
                    left="50%"
                    transform="translateX(-50%)"
                    bg="brand.blue"
                    color="white"
                    px={4}
                    py={1}
                    borderRadius="full"
                    fontSize="xs"
                    textTransform="uppercase"
                    letterSpacing="wider"
                  >
                    Most Popular
                  </Badge>
                )}

                <VStack align="flex-start" spacing={6}>
                  {/* Plan name */}
                  <Heading size="md" color="brand.navy">
                    {plan.name}
                  </Heading>

                  {/* Price */}
                  <VStack align="flex-start" spacing={0}>
                    <HStack align="baseline">
                      <Heading size="2xl" color="brand.blue">
                        {plan.price}
                      </Heading>
                      <Text color="gray.600" fontSize="md">
                        {plan.period}
                      </Text>
                    </HStack>
                    <Text color="gray.600" fontSize="sm">
                      {plan.description}
                    </Text>
                  </VStack>

                  {/* Features */}
                  <List spacing={3} width="100%">
                    {plan.features.map((feature, idx) => (
                      <ListItem key={idx} display="flex" alignItems="flex-start">
                        <ListIcon
                          as={FaCheckCircle}
                          color="brand.blue"
                          mt={1}
                          fontSize="sm"
                        />
                        <Text color="gray.700" fontSize="sm">
                          {feature}
                        </Text>
                      </ListItem>
                    ))}
                  </List>

                  {/* CTA */}
                  <CTAButton
                    href={plan.ctaLink}
                    width="100%"
                    size="lg"
                    variant={plan.featured ? 'primary' : 'secondary'}
                  >
                    {plan.cta}
                  </CTAButton>
                </VStack>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>

        {/* Additional info */}
        <VStack spacing={2} textAlign="center" mt={12}>
          <Text fontSize="sm" color="gray.600" fontWeight="semibold">
            All plans include the same features — only billing frequency differs
          </Text>
          <Text fontSize="sm" color="gray.500">
            Need a custom plan for multiple clinics? <Text as="span" color="brand.blue" fontWeight="semibold" cursor="pointer">Contact us</Text>
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}

export default Pricing
