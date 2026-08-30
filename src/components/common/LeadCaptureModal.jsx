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
      <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(6px)" />
      <ModalContent
        bg="gray.900"
        border="1px solid"
        borderColor="whiteAlpha.200"
        borderRadius="2xl"
        mx={4}
      >
        <ModalCloseButton color="gray.400" _hover={{ color: 'white' }} />
        <ModalBody p={8}>
          <VStack spacing={6} align="stretch">
            <VStack spacing={2} align="flex-start">
              <Heading size="md" color="white">
                Quick — before you go
              </Heading>
              <Text color="gray.400" fontSize="sm">
                Share your details and we&apos;ll open {productName} for you right away.
              </Text>
            </VStack>

            <Box as="form" onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel color="gray.300" fontSize="sm" mb={1}>
                    Your name
                  </FormLabel>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Smith"
                    bg="whiteAlpha.50"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    color="white"
                    _placeholder={{ color: 'gray.500' }}
                    _focus={{ borderColor: 'brand.blue', boxShadow: 'none' }}
                    _hover={{ borderColor: 'whiteAlpha.400' }}
                    borderRadius="lg"
                    autoFocus
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="gray.300" fontSize="sm" mb={1}>
                    Email address
                  </FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@example.com"
                    bg="whiteAlpha.50"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    color="white"
                    _placeholder={{ color: 'gray.500' }}
                    _focus={{ borderColor: 'brand.blue', boxShadow: 'none' }}
                    _hover={{ borderColor: 'whiteAlpha.400' }}
                    borderRadius="lg"
                  />
                </FormControl>

                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  loadingText="Opening…"
                  w="full"
                  bg="brand.blue"
                  color="white"
                  _hover={{ bg: 'brand.lightBlue' }}
                  borderRadius="lg"
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
