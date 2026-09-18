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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Icon,
  Collapse,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { motion, useScroll } from 'framer-motion'
import { useState, useEffect } from 'react'
import boolavasLogo from '../../assets/boolavas logo.png'
import MediBooLogo from '../../assets/MediBooLogo'
import { products } from '../../data/products'

const MotionBox = motion(Box)

const navItems = [
  { name: 'Products', path: '/products' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isProductsOpen, onToggle: onProductsToggle } = useDisclosure()
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => setScrolled(latest > 8))
    return () => unsubscribe()
  }, [scrollY])

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + '/')

  return (
    <MotionBox
      as="nav"
      aria-label="Primary"
      bg="rgba(255,255,255,0.85)"
      backdropFilter="saturate(180%) blur(14px)"
      position="sticky"
      top={0}
      zIndex={1000}
      borderBottom="1px solid"
      borderColor={scrolled ? 'brand.border' : 'transparent'}
      boxShadow={scrolled ? '0 1px 3px rgba(15,23,42,0.06)' : 'none'}
      transition="all 0.25s ease"
    >
      <Container maxW="7xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <RouterLink to="/" aria-label="Boolavas home">
            <Box
              display="inline-flex"
              _hover={{ opacity: 0.8 }}
              transition="opacity 0.2s"
            >
              <Image src={boolavasLogo} alt="Boolavas" h="36px" objectFit="contain" />
            </Box>
          </RouterLink>

          {/* Desktop Navigation */}
          <HStack spacing={1} display={{ base: 'none', md: 'flex' }}>
            {/* Products menu */}
            <Menu>
              <MenuButton
                as={Button}
                variant="ghost"
                size="sm"
                rightIcon={<ChevronDownIcon />}
                color={isActive('/products') ? 'brand.blue' : 'gray.700'}
                fontWeight={isActive('/products') ? 'semibold' : 'medium'}
                _hover={{ color: 'brand.navy', bg: 'gray.100' }}
                _active={{ bg: 'gray.100' }}
                px={4}
              >
                Products
              </MenuButton>
              <MenuList
                bg="white"
                borderColor="brand.border"
                borderRadius="xl"
                boxShadow="lg"
                py={2}
                minW="280px"
              >
                {products.map((product) => (
                  <MenuItem
                    key={product.slug}
                    as={RouterLink}
                    to={product.route}
                    bg="transparent"
                    _hover={{ bg: 'gray.50' }}
                    _focus={{ bg: 'gray.50' }}
                    px={4}
                    py={3}
                  >
                    <HStack spacing={3} align="center">
                      {product.slug === 'mediboo' ? (
                        <Box flexShrink={0}>
                          <MediBooLogo h="28px" />
                        </Box>
                      ) : (
                        <Box
                          p={2}
                          background={product.accentGradient}
                          borderRadius="lg"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          flexShrink={0}
                          boxShadow={`0 2px 8px ${product.accentColor}33`}
                        >
                          <Icon as={product.icon} color="white" boxSize={4} />
                        </Box>
                      )}
                      <Box>
                        {product.slug !== 'mediboo' && (
                          <Text color="brand.navy" fontWeight="semibold" fontSize="sm">
                            {product.name}
                          </Text>
                        )}
                        <Text color="gray.500" fontSize="xs">
                          {product.category}
                        </Text>
                      </Box>
                    </HStack>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>

            {navItems
              .filter((item) => item.name !== 'Products')
              .map((item) => (
                <RouterLink key={item.path} to={item.path}>
                  <Button
                    variant="ghost"
                    size="sm"
                    color={isActive(item.path) ? 'brand.blue' : 'gray.700'}
                    fontWeight={isActive(item.path) ? 'semibold' : 'medium'}
                    _hover={{ color: 'brand.navy', bg: 'gray.100' }}
                    px={4}
                  >
                    {item.name}
                  </Button>
                </RouterLink>
              ))}
          </HStack>

          {/* CTA - Desktop */}
          <Button
            as={RouterLink}
            to="/products"
            variant="primary"
            display={{ base: 'none', md: 'flex' }}
            size="sm"
            px={5}
          >
            Explore Products
          </Button>

          {/* Mobile menu button */}
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon boxSize={3} /> : <HamburgerIcon />}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
            color="gray.700"
            _hover={{ bg: 'gray.100' }}
          />
        </Flex>

        {/* Mobile Navigation */}
        {isOpen && (
          <Box pb={4} pt={2} display={{ md: 'none' }}>
            <Stack as="nav" aria-label="Mobile" spacing={1}>
              {/* Products (expandable) */}
              <Button
                w="full"
                variant="ghost"
                color={isActive('/products') ? 'brand.blue' : 'gray.700'}
                justifyContent="space-between"
                rightIcon={
                  <ChevronDownIcon
                    transform={isProductsOpen ? 'rotate(180deg)' : undefined}
                    transition="transform 0.2s"
                  />
                }
                _hover={{ bg: 'gray.100' }}
                onClick={onProductsToggle}
                aria-expanded={isProductsOpen}
              >
                Products
              </Button>
              <Collapse in={isProductsOpen} animateOpacity>
                <Stack pl={4} spacing={1} borderLeft="1px solid" borderColor="brand.border" ml={3}>
                  {products.map((product) => (
                    <RouterLink key={product.slug} to={product.route} onClick={onClose}>
                      <Button
                        w="full"
                        variant="ghost"
                        size="sm"
                        color="gray.600"
                        justifyContent="flex-start"
                        _hover={{ bg: 'gray.100', color: 'brand.blue' }}
                      >
                        {product.name}
                      </Button>
                    </RouterLink>
                  ))}
                </Stack>
              </Collapse>

              {navItems
                .filter((item) => item.name !== 'Products')
                .map((item) => (
                  <RouterLink key={item.path} to={item.path} onClick={onClose}>
                    <Button
                      w="full"
                      variant="ghost"
                      color={isActive(item.path) ? 'brand.blue' : 'gray.700'}
                      justifyContent="flex-start"
                      _hover={{ bg: 'gray.100' }}
                    >
                      {item.name}
                    </Button>
                  </RouterLink>
                ))}

              <Button as={RouterLink} to="/products" variant="primary" mt={3} onClick={onClose}>
                Explore Products
              </Button>
            </Stack>
          </Box>
        )}
      </Container>
    </MotionBox>
  )
}

export default Navbar
