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
    name: 'Free',
    price: '₹0',
    period: 'forever',
    description: 'Perfect for single-doctor clinics getting started',
    features: [
      '1 Doctor',
      '1 Branch',
      '100 Patients',
      'Core features only',
      'Basic billing & invoicing',
      'Appointments & prescriptions',
      'Email support',
    ],
    limits: {
      doctors: 1,
      branches: 1,
      patients: 100,
    },
    cta: 'Start Free',
    ctaLink: 'https://mediboo-platform.vercel.app/',
    featured: false,
  },
  {
    name: 'Starter',
    price: '₹2,999',
    period: 'per month',
    description: 'For growing clinics with 2-3 doctors',
    features: [
      '3 Doctors',
      '2 Branches',
      'Unlimited Patients',
      'All core features',
      'Billing plugin included',
      'WhatsApp integration',
      '1,000 invoices/month',
      'Priority email support',
    ],
    limits: {
      doctors: 3,
      branches: 2,
      patients: -1,
      invoices: 1000,
    },
    cta: 'Start 90-Day Free Trial',
    ctaLink: 'https://mediboo-platform.vercel.app/',
    featured: false,
  },
  {
    name: 'Professional',
    price: '₹5,999',
    period: 'per month',
    description: 'For multi-doctor clinics with advanced needs',
    features: [
      '10 Doctors',
      '5 Branches',
      'Unlimited Patients',
      'All features unlocked',
      'Billing + Expense management',
      'WhatsApp + Queue system',
      'Disease intelligence',
      'Unlimited invoices & expenses',
      'Phone + email support',
    ],
    limits: {
      doctors: 10,
      branches: 5,
      patients: -1,
      invoices: -1,
      expenses: -1,
    },
    cta: 'Start 90-Day Free Trial',
    ctaLink: 'https://mediboo-platform.vercel.app/',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'per month',
    description: 'For large clinics and multi-location hospitals',
    features: [
      'Unlimited Doctors',
      'Unlimited Branches',
      'Unlimited Patients',
      'All advanced modules',
      'White-label branding',
      'Custom domain support',
      'Telemedicine integration',
      'Dedicated account manager',
      'On-premise deployment option',
      '24/7 phone support',
    ],
    limits: {
      doctors: -1,
      branches: -1,
      patients: -1,
      invoices: -1,
      expenses: -1,
    },
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
            Flexible Pricing
          </Badge>
          <Heading as="h2" size="2xl" color="brand.navy">
            Choose the Right Plan for Your Clinic
          </Heading>
          <Text fontSize="xl" color="gray.600" maxW="3xl">
            Start with a 90-day free trial on any paid plan. No credit card required. Cancel anytime.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
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
                p={6}
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

                <VStack align="flex-start" spacing={4}>
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
                      {plan.period && (
                        <Text color="gray.600" fontSize="sm">
                          {plan.period}
                        </Text>
                      )}
                    </HStack>
                    <Text color="gray.600" fontSize="xs" mt={1}>
                      {plan.description}
                    </Text>
                  </VStack>

                  {/* Features */}
                  <List spacing={2} width="100%" flex="1">
                    {plan.features.map((feature, idx) => (
                      <ListItem key={idx} display="flex" alignItems="flex-start">
                        <ListIcon
                          as={FaCheckCircle}
                          color="brand.blue"
                          mt={1}
                          fontSize="sm"
                          flexShrink={0}
                        />
                        <Text color="gray.700" fontSize="xs">
                          {feature}
                        </Text>
                      </ListItem>
                    ))}
                  </List>

                  {/* CTA */}
                  <CTAButton
                    href={plan.ctaLink}
                    width="100%"
                    size="md"
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
        <VStack spacing={3} textAlign="center" mt={12}>
          <Text fontSize="md" color="brand.navy" fontWeight="bold">
            All paid plans include a 90-day free trial period
          </Text>
          <Text fontSize="sm" color="gray.600">
            Need a custom plan for multiple locations or special requirements?
          </Text>
          <Text fontSize="sm" color="gray.500">
            <Text as="a" href="/contact" color="brand.blue" fontWeight="semibold" textDecoration="underline">
              Contact our sales team
            </Text>{' '}
            for enterprise pricing and volume discounts
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}

export default Pricing
