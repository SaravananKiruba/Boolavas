import { Button, Link, HStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const MotionButton = motion(Button)
const MotionLink = motion(Link)

/**
 * Google-style pill CTA with three variants:
 *   primary → filled red brand button
 *   outline → hairline border, dark text, red hover
 *   ghost   → transparent, dark text, subtle hover
 */
const styleFor = (variant) => {
  if (variant === 'primary') {
    return {
      bg: 'brand.blue',
      color: 'white',
      border: 'none',
      _hover: {
        bg: 'brand.lightBlue',
        textDecoration: 'none',
        boxShadow: '0 8px 20px rgba(255,49,49,0.28)',
      },
    }
  }
  if (variant === 'outline') {
    return {
      bg: 'transparent',
      color: 'brand.navy',
      border: '1px solid',
      borderColor: 'brand.border',
      _hover: {
        bg: 'brand.surfaceAlt',
        borderColor: 'brand.blue',
        color: 'brand.blue',
        textDecoration: 'none',
      },
    }
  }
  // ghost
  return {
    bg: 'transparent',
    color: 'brand.ink',
    border: 'none',
    _hover: { bg: 'gray.100', color: 'brand.navy', textDecoration: 'none' },
  }
}

const CTAButton = ({ children, variant = 'primary', size = 'lg', href, onClick, leftIcon, rightIcon, ...props }) => {
  const handleHashClick = (e) => {
    if (href?.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
    if (onClick) onClick(e)
  }

  const linkContent = (leftIcon || rightIcon) ? (
    <HStack as="span" spacing={2}>
      {leftIcon}
      <span>{children}</span>
      {rightIcon}
    </HStack>
  ) : children

  const commonProps = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    px: size === 'lg' ? 7 : 5,
    py: size === 'lg' ? '14px' : size === 'md' ? '10px' : '8px',
    fontSize: size === 'lg' ? 'md' : size === 'md' ? 'sm' : 'sm',
    fontWeight: 'semibold',
    borderRadius: 'full',
    transition: 'all 0.2s ease',
    ...styleFor(variant),
  }

  // External link (crawlable <a>)
  if (href?.startsWith('http')) {
    return (
      <MotionLink
        as="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.97 }}
        {...commonProps}
        {...props}
      >
        {linkContent}
      </MotionLink>
    )
  }

  // Internal RouterLink
  if (href && !href.startsWith('#')) {
    return (
      <MotionLink
        as={RouterLink}
        to={href}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.97 }}
        onClick={onClick}
        {...commonProps}
        {...props}
      >
        {linkContent}
      </MotionLink>
    )
  }

  // Hash link or button
  return (
    <MotionButton
      variant={variant}
      size={size}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      onClick={href?.startsWith('#') ? handleHashClick : onClick}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      as={href?.startsWith('#') ? 'a' : 'button'}
      href={href?.startsWith('#') ? href : undefined}
      {...props}
    >
      {children}
    </MotionButton>
  )
}

export default CTAButton
