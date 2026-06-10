import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Container,
  Image,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { motion, useScroll } from 'framer-motion'
import { useState, useEffect } from 'react'
import boolavasLogo from '../../assets/boolavas logo.png'

const MotionBox = motion(Box)

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setScrolled(latest > 50)
    })
    return () => unsubscribe()
  }, [scrollY])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <MotionBox
      as="nav"
      bg={scrolled ? 'rgba(15, 23, 42, 0.95)' : 'brand.navy'}
      backdropFilter={scrolled ? 'blur(10px)' : 'none'}
      position="sticky"
      top={0}
      zIndex={1000}
      boxShadow={scrolled ? 'lg' : 'none'}
      transition="all 0.3s ease"
    >
      <Container maxW="7xl">
        <Flex h={20} alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <RouterLink to="/">
            <Box
              bg="white"
              borderRadius="xl"
              px={3}
              py={1}
              display="inline-flex"
              _hover={{ opacity: 0.85 }}
              transition="opacity 0.3s"
            >
              <Image
                src={boolavasLogo}
                alt="Boolavas"
                h="44px"
                objectFit="contain"
              />
            </Box>
          </RouterLink>

          {/* Desktop Navigation */}
          <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
            {navItems.map((item) => (
              <RouterLink key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  color={location.pathname === item.path ? 'brand.lightBlue' : 'white'}
                  _hover={{ color: 'brand.lightBlue', bg: 'whiteAlpha.100' }}
                  fontWeight={location.pathname === item.path ? 'bold' : 'medium'}
                >
                  {item.name}
                </Button>
              </RouterLink>
            ))}
          </HStack>

          {/* CTA Button - Desktop */}
          <Button
            as={RouterLink}
            to="/contact"
            variant="primary"
            display={{ base: 'none', md: 'flex' }}
            size="md"
          >
            Get in Touch
          </Button>

          {/* Mobile menu button */}
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Toggle Navigation"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            bg="whiteAlpha.200"
            color="white"
            _hover={{ bg: 'whiteAlpha.300' }}
          />
        </Flex>

        {/* Mobile Navigation */}
        {isOpen && (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              {navItems.map((item) => (
                <RouterLink key={item.path} to={item.path} onClick={onClose}>
                  <Button
                    w="full"
                    variant="ghost"
                    color={location.pathname === item.path ? 'brand.lightBlue' : 'white'}
                    justifyContent="flex-start"
                    _hover={{ bg: 'whiteAlpha.100' }}
                  >
                    {item.name}
                  </Button>
                </RouterLink>
              ))}

              <Button
                as={RouterLink}
                to="/contact"
                variant="primary"
                mt={4}
                onClick={onClose}
              >
                Get in Touch
              </Button>
            </Stack>
          </Box>
        )}
      </Container>
    </MotionBox>
  )
}

export default Navbar
