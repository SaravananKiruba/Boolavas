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
    const unsubscribe = scrollY.on('change', (latest) => {
      setScrolled(latest > 50)
    })
    return () => unsubscribe()
  }, [scrollY])

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + '/')

  return (
    <MotionBox
      as="nav"
      aria-label="Primary"
      bg={scrolled ? 'rgba(18, 0, 8, 0.95)' : 'brand.navy'}
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
          <RouterLink to="/" aria-label="Boolavas home">
            <Box
              display="inline-flex"
              _hover={{ opacity: 0.85 }}
              transition="opacity 0.3s"
            >
              <Image
                src={boolavasLogo}
                alt="Boolavas"
                h="44px"
                objectFit="contain"
                style={{ filter: 'drop-shadow(0 0 10px rgba(212,175,55,0.5))' }}
              />
            </Box>
          </RouterLink>

          {/* Desktop Navigation */}
          <HStack spacing={6} display={{ base: 'none', md: 'flex' }}>
            {/* Products menu */}
            <Menu>
              <MenuButton
                as={Button}
                variant="ghost"
                rightIcon={<ChevronDownIcon />}
                color={isActive('/products') ? 'brand.gold' : 'white'}
                fontWeight={isActive('/products') ? 'bold' : 'medium'}
                _hover={{ color: 'brand.gold', bg: 'whiteAlpha.100' }}
                _active={{ bg: 'whiteAlpha.100' }}
              >
                Products
              </MenuButton>
              <MenuList bg="brand.navy" borderColor="whiteAlpha.200" py={2} minW="260px">
                {products.map((product) => (
                  <MenuItem
                    key={product.slug}
                    as={RouterLink}
                    to={product.route}
                    bg="transparent"
                    _hover={{ bg: 'whiteAlpha.100' }}
                    _focus={{ bg: 'whiteAlpha.100' }}
                    px={4}
                    py={3}
                  >
                    <HStack spacing={3} align="flex-start">
                      <Icon as={product.icon} color="brand.gold" boxSize={5} mt={1} />
                      <Box>
                        <Text color="white" fontWeight="semibold" fontSize="sm">
                          {product.name}
                        </Text>
                        <Text color="gray.400" fontSize="xs">
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
                    color={isActive(item.path) ? 'brand.gold' : 'white'}
                    _hover={{ color: 'brand.gold', bg: 'whiteAlpha.100' }}
                    fontWeight={isActive(item.path) ? 'bold' : 'medium'}
                  >
                    {item.name}
                  </Button>
                </RouterLink>
              ))}
          </HStack>

          {/* CTA Button - Desktop */}
          <Button
            as={RouterLink}
            to="/products"
            variant="primary"
            display={{ base: 'none', md: 'flex' }}
            size="md"
          >
            Explore Products
          </Button>

          {/* Mobile menu button */}
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
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
            <Stack as="nav" aria-label="Mobile" spacing={2}>
              {/* Products (expandable) */}
              <Button
                w="full"
                variant="ghost"
                color={isActive('/products') ? 'brand.gold' : 'white'}
                justifyContent="space-between"
                rightIcon={
                  <ChevronDownIcon
                    transform={isProductsOpen ? 'rotate(180deg)' : undefined}
                    transition="transform 0.2s"
                  />
                }
                _hover={{ bg: 'whiteAlpha.100' }}
                onClick={onProductsToggle}
                aria-expanded={isProductsOpen}
              >
                Products
              </Button>
              <Collapse in={isProductsOpen} animateOpacity>
                <Stack pl={4} spacing={1} borderLeft="1px solid" borderColor="whiteAlpha.200" ml={2}>
                  {products.map((product) => (
                    <RouterLink key={product.slug} to={product.route} onClick={onClose}>
                      <Button
                        w="full"
                        variant="ghost"
                        size="sm"
                        color="gray.300"
                        justifyContent="flex-start"
                        _hover={{ bg: 'whiteAlpha.100', color: 'brand.lightBlue' }}
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
                      color={isActive(item.path) ? 'brand.lightBlue' : 'white'}
                      justifyContent="flex-start"
                      _hover={{ bg: 'whiteAlpha.100' }}
                    >
                      {item.name}
                    </Button>
                  </RouterLink>
                ))}

              <Button as={RouterLink} to="/products" variant="primary" mt={4} onClick={onClose}>
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
