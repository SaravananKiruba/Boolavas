import { extendTheme } from '@chakra-ui/react'

/**
 * Boolavas theme — Google-inspired light UI.
 * brand.navy = deep graphite for headings / strong text on light bg.
 * Legacy tokens (brand.mid, brand.cream, brand.surface) kept as aliases
 * that now map to light-mode surfaces so existing components stay valid.
 */
const theme = extendTheme({
  colors: {
    brand: {
      navy:       '#0f172a',  // graphite — used for headings + strong text
      ink:        '#1f2937',  // body copy
      mid:        '#f1f3f4',  // legacy alias → soft grey alt section
      surface:    '#ffffff',  // primary page surface
      surfaceAlt: '#f8f9fa',  // Google-style soft grey
      border:     '#e5e7eb',  // hairline outline
      blue:       '#ff3131',  // primary red CTA
      lightBlue:  '#ff5c5c',  // hover / lighter red
      gold:       '#D4AF37',
      goldLight:  '#f5d76e',
      amber:      '#D4AF37',
      cream:      '#f8f9fa',  // legacy alias → surfaceAlt
      light:      '#ffffff',
      50:  '#fff0f0',
      100: '#ffd4d4',
      200: '#ffaaaa',
      300: '#ff7777',
      400: '#ff5252',
      500: '#ff3131',
      600: '#e02424',
      700: '#b91c1c',
      800: '#7f1d1d',
      900: '#450a0a',
    },
    // Neutral cool-grey scale (Material / Tailwind slate-inspired)
    gray: {
      50:  '#f8fafc',
      100: '#f1f5f9',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
  },
  fonts: {
    heading: `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`,
    body:    `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`,
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
  shadows: {
    xs:   '0 1px 2px rgba(15,23,42,0.04)',
    sm:   '0 1px 3px rgba(15,23,42,0.06), 0 1px 2px rgba(15,23,42,0.04)',
    card: '0 1px 3px rgba(15,23,42,0.06), 0 4px 24px rgba(15,23,42,0.04)',
    md:   '0 4px 12px rgba(15,23,42,0.08)',
    lg:   '0 12px 32px rgba(15,23,42,0.10)',
    xl:   '0 20px 48px rgba(15,23,42,0.12)',
  },
  styles: {
    global: {
      'html, body': {
        bg: 'brand.surface',
        color: 'brand.ink',
        lineHeight: 'tall',
        scrollBehavior: 'smooth',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
      'h1, h2, h3, h4, h5, h6': {
        fontWeight: 'bold',
        lineHeight: 'shorter',
        letterSpacing: '-0.01em',
        color: 'brand.navy',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'full',
      },
      sizes: {
        lg: {
          h: '52px',
          fontSize: 'md',
          px: '28px',
        },
      },
      variants: {
        primary: {
          bg: 'brand.blue',
          color: 'white',
          _hover: {
            bg: 'brand.lightBlue',
            transform: 'translateY(-1px)',
            boxShadow: '0 8px 20px rgba(255,49,49,0.28)',
          },
          _active: { bg: 'brand.600' },
          transition: 'all 0.2s ease',
        },
        outline: {
          bg: 'transparent',
          color: 'brand.navy',
          border: '1px solid',
          borderColor: 'brand.border',
          _hover: {
            bg: 'brand.surfaceAlt',
            borderColor: 'brand.blue',
            color: 'brand.blue',
          },
          transition: 'all 0.2s ease',
        },
        ghost: {
          bg: 'transparent',
          color: 'brand.ink',
          _hover: { bg: 'gray.100', color: 'brand.navy' },
          _active: { bg: 'gray.200' },
          transition: 'all 0.2s ease',
        },
        amber: {
          bg: 'brand.gold',
          color: 'brand.navy',
          _hover: {
            bg: 'brand.goldLight',
            transform: 'translateY(-1px)',
            boxShadow: '0 8px 20px rgba(212,175,55,0.30)',
          },
          transition: 'all 0.2s ease',
        },
        gold: {
          bg: 'brand.gold',
          color: 'brand.navy',
          fontWeight: 'bold',
          _hover: {
            bg: 'brand.goldLight',
            transform: 'translateY(-1px)',
            boxShadow: '0 8px 20px rgba(212,175,55,0.30)',
          },
          transition: 'all 0.2s ease',
        },
        secondary: {
          bg: 'white',
          color: 'brand.navy',
          border: '1px solid',
          borderColor: 'brand.border',
          _hover: {
            bg: 'brand.surfaceAlt',
            borderColor: 'brand.blue',
            color: 'brand.blue',
          },
          transition: 'all 0.2s ease',
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
        letterSpacing: '-0.01em',
      },
    },
    Container: {
      baseStyle: {
        maxW: '7xl',
        px: { base: 4, md: 8 },
      },
    },
    Link: {
      baseStyle: {
        _hover: { textDecoration: 'none' },
      },
    },
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
})

export default theme
