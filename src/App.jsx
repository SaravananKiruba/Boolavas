import { Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import MobileAppDevelopment from './pages/MobileAppDevelopment'
import WebsiteDevelopment from './pages/WebsiteDevelopment'
import SoftwareDevelopment from './pages/SoftwareDevelopment'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import ScrollToTop from './components/common/ScrollToTop'

function App() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <ScrollToTop />
      <Navbar />
      <Box flex={1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/website-development" element={<WebsiteDevelopment />} />
          <Route path="/software-development" element={<SoftwareDevelopment />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  )
}

export default App
