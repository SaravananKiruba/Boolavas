import { Button, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const MotionButton = motion(Button)
const MotionLink = motion(Link)

const CTAButton = ({ children, variant = "primary", size = "lg", href, onClick, ...props }) => {
  // Handle hash links (smooth scroll)
  const handleHashClick = (e) => {
    if (href?.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
    if (onClick) onClick(e)
  }

  // External link (crawlable <a> tag)
  if (href?.startsWith('http')) {
    return (
      <MotionLink
        as="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow"
        variant={variant}
        size={size}
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        px={8}
        py={size === 'lg' ? 6 : size === 'md' ? 4 : 3}
        fontSize={size === 'lg' ? 'lg' : size === 'md' ? 'md' : 'sm'}
        fontWeight="semibold"
        borderRadius="md"
        bg={variant === 'primary' ? 'brand.blue' : variant === 'outline' ? 'transparent' : 'gray.700'}
        color="white"
        border={variant === 'outline' ? '2px solid' : 'none'}
        borderColor={variant === 'outline' ? 'brand.blue' : 'transparent'}
        _hover={{
          bg: variant === 'primary' ? 'brand.lightBlue' : variant === 'outline' ? 'brand.blue' : 'gray.600',
          textDecoration: 'none'
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </MotionLink>
    )
  }

  // Internal link (crawlable RouterLink)
  if (href && !href.startsWith('#')) {
    return (
      <MotionLink
        as={RouterLink}
        to={href}
        variant={variant}
        size={size}
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        px={8}
        py={size === 'lg' ? 6 : size === 'md' ? 4 : 3}
        fontSize={size === 'lg' ? 'lg' : size === 'md' ? 'md' : 'sm'}
        fontWeight="semibold"
        borderRadius="md"
        bg={variant === 'primary' ? 'brand.blue' : variant === 'outline' ? 'transparent' : 'gray.700'}
        color="white"
        border={variant === 'outline' ? '2px solid' : 'none'}
        borderColor={variant === 'outline' ? 'brand.blue' : 'transparent'}
        _hover={{
          bg: variant === 'primary' ? 'brand.lightBlue' : variant === 'outline' ? 'brand.blue' : 'gray.600',
          textDecoration: 'none'
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        {...props}
      >
        {children}
      </MotionLink>
    )
  }

  // Hash link or button (no href or #hash)
  return (
    <MotionButton
      variant={variant}
      size={size}
      onClick={href?.startsWith('#') ? handleHashClick : onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      as={href?.startsWith('#') ? 'a' : 'button'}
      href={href?.startsWith('#') ? href : undefined}
      {...props}
    >
      {children}
    </MotionButton>
  )
}

export default CTAButton
