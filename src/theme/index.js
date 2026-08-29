import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      navy:      '#630919',   // primary dark background — deep maroon
      mid:       '#500816',   // alternating section background
      blue:      '#ff3131',   // primary red
      lightBlue: '#ff5252',   // lighter red for hovers/badges
      light:     '#f6f6f6',   // off-white text / light surfaces
      amber:     '#e68815',   // secondary accent — amber
      50:  '#fff0f0',
      100: '#ffd4d4',
      200: '#ffaaaa',
      300: '#ff7777',
      400: '#ff5252',
      500: '#ff3131',         // = brand.blue
      600: '#801d1d',         // hover darken
      700: '#630919',         // = brand.navy
      800: '#3d0808',
      900: '#1a0306',
    },
  },
  fonts: {
    heading: `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,
    body: `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
  },
  styles: {
    global: {
      'html, body': {
        color: 'gray.800',
        lineHeight: 'tall',
        scrollBehavior: 'smooth',
      },
      'h1, h2, h3, h4, h5, h6': {
        fontWeight: 'bold',
        lineHeight: 'shorter',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'lg',
      },
      sizes: {
        lg: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      variants: {
        primary: {
          bg: 'brand.blue',
          color: 'white',
          _hover: {
            bg: 'brand.600',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
          _active: {
            bg: 'brand.700',
          },
          transition: 'all 0.3s ease',
        },
        amber: {
          bg: 'brand.amber',
          color: 'white',
          _hover: {
            bg: '#c97510',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
          _active: {
            bg: '#a85e0d',
          },
          transition: 'all 0.3s ease',
        },
        secondary: {
          bg: 'white',
          color: 'brand.navy',
          border: '2px solid',
          borderColor: 'brand.blue',
          _hover: {
            bg: 'brand.50',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
          transition: 'all 0.3s ease',
        },
      },
      defaultProps: {
        variant: 'primary',
      },
    },
    Heading: {
      baseStyle: {
        color: 'brand.navy',
        fontWeight: 'bold',
      },
    },
    Container: {
      baseStyle: {
        maxW: '7xl',
        px: { base: 4, md: 8 },
      },
    },
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
})

export default theme
