import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      navy:      '#120008',   // deep crimson-black page background
      mid:       '#260010',   // dark crimson alternating section
      surface:   '#3c0018',   // elevated card / modal surface
      blue:      '#ff3131',   // primary red CTA
      lightBlue: '#ff5c5c',   // hover / lighter red
      gold:      '#D4AF37',   // primary gold accent
      goldLight: '#f5d76e',   // light gold highlight
      amber:     '#D4AF37',   // alias → gold
      cream:     '#fff8f2',   // warm white for light sections
      light:     '#ffffff',   // pure white text
      50:  '#fff0f0',
      100: '#ffd4d4',
      200: '#ffaaaa',
      300: '#ff7777',
      400: '#ff5252',
      500: '#ff3131',
      600: '#cc0000',
      700: '#8c000a',
      800: '#520010',
      900: '#120008',
    },
    // Warm-tinted grays — every gray.* reference across the site gets a red warmth
    gray: {
      50:  '#fff5f5',
      100: '#ffe8e8',
      200: '#f0d0d0',
      300: '#d9b0b0',
      400: '#c49090',
      500: '#a87070',
      600: '#7a4848',
      700: '#4e2424',
      800: '#2e1010',
      900: '#180808',
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
          bg: 'brand.gold',
          color: 'brand.navy',
          _hover: {
            bg: 'brand.goldLight',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
          _active: {
            bg: 'brand.gold',
          },
          transition: 'all 0.3s ease',
        },
        gold: {
          bg: 'brand.gold',
          color: 'brand.navy',
          fontWeight: 'bold',
          _hover: {
            bg: 'brand.goldLight',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 24px rgba(212,175,55,0.35)',
          },
          _active: {
            bg: 'brand.gold',
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
