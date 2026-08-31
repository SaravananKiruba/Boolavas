import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  VStack,
  useToast,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import CTAButton from '../common/CTAButton'

const ENQUIRY_TYPES = {
  mediboo:   ['Demo Request', 'Purchase & Pricing', 'Feature Discussion', 'Enterprise / Premium', 'General Question'],
  migrasafe: ['Feature Discussion', 'Enterprise / Premium', 'Pricing', 'General Question'],
  configsafe:['Feature Discussion', 'Enterprise / Premium', 'Pricing', 'General Question'],
  general:   ['General Question', 'Partnership', 'Other'],
}

const EMPTY = { name: '', email: '', product: '', enquiryType: '', message: '' }

const ContactForm = () => {
  const toast = useToast()
  const [formData, setFormData] = useState(EMPTY)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const updated = { ...formData, [e.target.name]: e.target.value }
    // Reset enquiry type when product changes
    if (e.target.name === 'product') updated.enquiryType = ''
    setFormData(updated)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const json = await res.json()

      if (!res.ok) throw new Error(json.error || 'Server error')

      toast({
        title: 'Message sent!',
        description: "We'll get back to you by email.",
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      })
      setFormData(EMPTY)
    } catch {
      toast({
        title: 'Failed to send.',
        description: 'Please try again or email us at appsupport@boolavas.in',
        status: 'error',
        duration: 6000,
        isClosable: true,
        position: 'top',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const enquiryOptions = ENQUIRY_TYPES[formData.product] ?? []

  const inputStyles = {
    bg: 'white',
    border: '1px solid',
    borderColor: 'brand.border',
    color: 'brand.ink',
    _placeholder: { color: 'gray.400' },
    _hover: { borderColor: 'gray.400' },
    _focus: { borderColor: 'brand.blue', boxShadow: '0 0 0 3px rgba(255,49,49,0.15)' },
  }

  const optStyle = { background: '#ffffff', color: '#0f172a' }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      bg="white"
      border="1px solid"
      borderColor="brand.border"
      p={{ base: 8, md: 10 }}
      borderRadius="2xl"
      boxShadow="0 1px 3px rgba(15,23,42,0.06), 0 4px 24px rgba(15,23,42,0.04)"
    >
      <VStack spacing={6}>
        {/* Name */}
        <FormControl isRequired>
          <FormLabel color="gray.700" fontWeight="semibold" fontSize="sm">Full Name</FormLabel>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            size="lg"
            {...inputStyles}
          />
        </FormControl>

        {/* Email */}
        <FormControl isRequired>
          <FormLabel color="gray.700" fontWeight="semibold" fontSize="sm">Email Address</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            size="lg"
            {...inputStyles}
          />
        </FormControl>

        {/* Product */}
        <FormControl isRequired>
          <FormLabel color="gray.700" fontWeight="semibold" fontSize="sm">
            Which product are you interested in?
          </FormLabel>
          <Select
            name="product"
            value={formData.product}
            onChange={handleChange}
            placeholder="Select a product"
            size="lg"
            {...inputStyles}
          >
            <option value="mediboo"    style={optStyle}>MediBoo — Clinic Management Software</option>
            <option value="migrasafe"  style={optStyle}>MigraSafe — SQL Migration Risk Analyzer</option>
            <option value="configsafe" style={optStyle}>ConfigSafe — Environment Configuration Checker</option>
            <option value="general"    style={optStyle}>General / Not sure yet</option>
          </Select>
        </FormControl>

        {/* Enquiry type — shown only once a product is selected */}
        {formData.product && (
          <FormControl isRequired>
            <FormLabel color="gray.700" fontWeight="semibold" fontSize="sm">What can we help you with?</FormLabel>
            <Select
              name="enquiryType"
              value={formData.enquiryType}
              onChange={handleChange}
              placeholder="Select enquiry type"
              size="lg"
              {...inputStyles}
            >
              {enquiryOptions.map((opt) => (
                <option key={opt} value={opt.toLowerCase().replace(/\W+/g, '-')} style={optStyle}>
                  {opt}
                </option>
              ))}
            </Select>
          </FormControl>
        )}

        {/* Message */}
        <FormControl isRequired>
          <FormLabel color="gray.700" fontWeight="semibold" fontSize="sm">Message</FormLabel>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us what you&#39;re looking for, what you need, or any questions you have..."
            size="lg"
            rows={5}
            resize="vertical"
            {...inputStyles}
          />
        </FormControl>

        <CTAButton
          type="submit"
          w="full"
          size="lg"
          isLoading={isSubmitting}
          loadingText="Sending..."
        >
          Send Message
        </CTAButton>

        <Text fontSize="sm" color="gray.500" textAlign="center">
          We reply by email — usually within 24 hours.
        </Text>
      </VStack>
    </Box>
  )
}

export default ContactForm
