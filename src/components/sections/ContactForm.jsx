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

const ContactForm = () => {
  const toast = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    requirement: '',
    budget: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    // In production, replace this with actual API call
    setTimeout(() => {
      toast({
        title: 'Message Sent Successfully!',
        description: "We'll get back to you within 24 hours.",
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      })
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessType: '',
        requirement: '',
        budget: '',
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      bg="white"
      p={{ base: 8, md: 10 }}
      borderRadius="xl"
      boxShadow="xl"
    >
      <VStack spacing={6}>
        <FormControl isRequired>
          <FormLabel color="brand.navy" fontWeight="semibold">Full Name</FormLabel>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            size="lg"
            focusBorderColor="brand.blue"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel color="brand.navy" fontWeight="semibold">Email Address</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            size="lg"
            focusBorderColor="brand.blue"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel color="brand.navy" fontWeight="semibold">Phone Number</FormLabel>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            size="lg"
            focusBorderColor="brand.blue"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel color="brand.navy" fontWeight="semibold">Business Type</FormLabel>
          <Select
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            placeholder="Select your business type"
            size="lg"
            focusBorderColor="brand.blue"
          >
            <option value="startup">Startup</option>
            <option value="sme">Small/Medium Business</option>
            <option value="enterprise">Enterprise</option>
            <option value="agency">Agency</option>
            <option value="individual">Individual/Entrepreneur</option>
          </Select>
        </FormControl>

        <FormControl isRequired>
          <FormLabel color="brand.navy" fontWeight="semibold">Project Requirements</FormLabel>
          <Textarea
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            size="lg"
            rows={5}
            focusBorderColor="brand.blue"
          />
        </FormControl>

        <FormControl>
          <FormLabel color="brand.navy" fontWeight="semibold">Budget Range (Optional)</FormLabel>
          <Select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Select budget range"
            size="lg"
            focusBorderColor="brand.blue"
          >
            <option value="under-5">Under ₹5 Lakhs</option>
            <option value="5-10">₹5-10 Lakhs</option>
            <option value="10-25">₹10-25 Lakhs</option>
            <option value="25-50">₹25-50 Lakhs</option>
            <option value="above-50">Above ₹50 Lakhs</option>
          </Select>
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

        <Text fontSize="sm" color="gray.600" textAlign="center">
          We typically respond within 24 hours
        </Text>
      </VStack>
    </Box>
  )
}

export default ContactForm
