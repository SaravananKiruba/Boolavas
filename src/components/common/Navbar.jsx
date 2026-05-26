import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Stack,
  Container,
  Text,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { motion, useScroll } from 'framer-motion'
import { useState, useEffect } from 'react'

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
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  const servicesMenu = [
    { name: 'Software Development', path: '/software-development' },
    { name: 'Website Development', path: '/website-development' },
    { name: 'Mobile App Development', path: '/mobile-app-development' },
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
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color="white"
              _hover={{ color: 'brand.lightBlue' }}
              transition="color 0.3s"
            >
              Boolavas
            </Text>
          </RouterLink>

          {/* Desktop Navigation */}
          <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
            {navItems.map((item) => {
              if (item.name === 'Services') {
                return (
                  <Menu key={item.name}>
                    <MenuButton
                      as={Button}
                      variant="ghost"
                      color="white"
                      rightIcon={<ChevronDownIcon />}
                      _hover={{ color: 'brand.lightBlue', bg: 'whiteAlpha.100' }}
                      _active={{ bg: 'whiteAlpha.200' }}
                    >
                      Services
                    </MenuButton>
                    <MenuList bg="white" borderColor="gray.200">
                      {servicesMenu.map((service) => (
                        <MenuItem
                          key={service.path}
                          as={RouterLink}
                          to={service.path}
                          _hover={{ bg: 'brand.50', color: 'brand.blue' }}
                        >
                          {service.name}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                )
              }

              return (
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
              )
            })}
          </HStack>

          {/* CTA Button - Desktop */}
          <Button
            as={RouterLink}
            to="/contact"
            variant="primary"
            display={{ base: 'none', md: 'flex' }}
            size="md"
          >
            Start Your Project
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
              
              <Text color="gray.400" fontSize="sm" fontWeight="semibold" px={4} pt={2}>
                Our Services
              </Text>
              
              {servicesMenu.map((service) => (
                <RouterLink key={service.path} to={service.path} onClick={onClose}>
                  <Button
                    w="full"
                    variant="ghost"
                    color="white"
                    justifyContent="flex-start"
                    pl={8}
                    _hover={{ bg: 'whiteAlpha.100' }}
                  >
                    {service.name}
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
                Start Your Project
              </Button>
            </Stack>
          </Box>
        )}
      </Container>
    </MotionBox>
  )
}

export default Navbar
