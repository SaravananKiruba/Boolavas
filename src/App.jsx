import { Routes, Route, useLocation } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { lazy, Suspense } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import OrganizationSchema from './components/schemas/OrganizationSchema'

// Lazy load page components
const Home = lazy(() => import('./pages/Home'))
const Products = lazy(() => import('./pages/Products'))
const MediBoo = lazy(() => import('./pages/MediBoo'))
const MigraSafe = lazy(() => import('./pages/MigraSafe'))
const ConfigSafe = lazy(() => import('./pages/ConfigSafe'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Loading fallback component
const PageLoader = () => (
  <Box 
    minH="60vh" 
    display="flex" 
    alignItems="center" 
    justifyContent="center"
    bg="brand.surface"
  >
    <Box
      as="div"
      w="42px"
      h="42px"
      border="3px solid"
      borderColor="gray.200"
      borderTopColor="brand.blue"
      borderRadius="50%"
      animation="spin 0.9s linear infinite"
      sx={{
        '@keyframes spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      }}
    />
  </Box>
)

function App() {
  const location = useLocation()

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <ScrollToTop />
      <OrganizationSchema />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: 'easeInOut' }}
          style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
        >
          <Box as="main" flex={1}>
            <Suspense fallback={<PageLoader />}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/mediboo" element={<MediBoo />} />
                <Route path="/products/migrasafe" element={<MigraSafe />} />
                <Route path="/products/configsafe" element={<ConfigSafe />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Box>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </Box>
  )
}

export default App
