import { Image } from '@chakra-ui/react'
import medibooLogoPng from './mediboo-logo.png'

/**
 * MediBoo brand logo. Pass `h` to control height; width scales automatically.
 */
const MediBooLogo = ({ h = '40px', ...props }) => (
  <Image
    src={medibooLogoPng}
    h={h}
    w="auto"
    objectFit="contain"
    alt="MediBoo"
    display="inline-block"
    {...props}
  />
)

export default MediBooLogo
