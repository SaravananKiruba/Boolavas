import { Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionButton = motion(Button)

const CTAButton = ({ children, variant = "primary", size = "lg", href, onClick, ...props }) => {
  const handleClick = () => {
    if (href) {
      if (href.startsWith('http')) {
        window.open(href, '_blank', 'noopener,noreferrer')
      } else if (href.startsWith('#')) {
        const element = document.querySelector(href)
        element?.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.location.href = href
      }
    }
    if (onClick) onClick()
  }

  return (
    <MotionButton
      variant={variant}
      size={size}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </MotionButton>
  )
}

export default CTAButton
