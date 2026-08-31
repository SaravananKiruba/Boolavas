import { useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  VStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  Icon,
  HStack,
  Box,
} from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'

const LeadCaptureModal = ({ isOpen, onClose, productName, appUrl }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return

    setIsSubmitting(true)
    try {
      await fetch('/lead.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), product: productName }),
      })
    } catch {
      // Fire-and-forget — don't block the user if the request fails
    } finally {
      setIsSubmitting(false)
      onClose()
      window.open(appUrl, '_blank', 'noopener,noreferrer')
    }
  }

  const handleClose = () => {
    setName('')
    setEmail('')
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} isCentered size="sm">
      <ModalOverlay bg="rgba(15,23,42,0.55)" backdropFilter="blur(4px)" />
      <ModalContent
        bg="white"
        border="1px solid"
        borderColor="brand.border"
        borderRadius="2xl"
        boxShadow="xl"
        mx={4}
      >
        <ModalCloseButton color="gray.500" _hover={{ color: 'brand.navy', bg: 'gray.100' }} borderRadius="full" />
        <ModalBody p={8}>
          <VStack spacing={6} align="stretch">
            <VStack spacing={2} align="flex-start">
              <Heading size="md" color="brand.navy">
                Quick — before you go
              </Heading>
              <Text color="gray.600" fontSize="sm">
                Share your details and we&apos;ll open {productName} for you right away.
              </Text>
            </VStack>

            <Box as="form" onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel color="gray.700" fontSize="sm" mb={1}>
                    Your name
                  </FormLabel>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Smith"
                    bg="white"
                    border="1px solid"
                    borderColor="brand.border"
                    color="brand.ink"
                    _placeholder={{ color: 'gray.400' }}
                    _focus={{ borderColor: 'brand.blue', boxShadow: '0 0 0 3px rgba(255,49,49,0.15)' }}
                    _hover={{ borderColor: 'gray.400' }}
                    borderRadius="lg"
                    autoFocus
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="gray.700" fontSize="sm" mb={1}>
                    Email address
                  </FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@example.com"
                    bg="white"
                    border="1px solid"
                    borderColor="brand.border"
                    color="brand.ink"
                    _placeholder={{ color: 'gray.400' }}
                    _focus={{ borderColor: 'brand.blue', boxShadow: '0 0 0 3px rgba(255,49,49,0.15)' }}
                    _hover={{ borderColor: 'gray.400' }}
                    borderRadius="lg"
                  />
                </FormControl>

                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  loadingText="Opening…"
                  w="full"
                  variant="primary"
                  size="md"
                  mt={1}
                  rightIcon={
                    <HStack spacing={1}>
                      <Icon as={FaArrowRight} boxSize={3} />
                    </HStack>
                  }
                >
                  Open {productName}
                </Button>
              </VStack>
            </Box>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default LeadCaptureModal
