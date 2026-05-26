import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Tag,
  Image,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import SEO from '../components/common/SEO'
import CTASection from '../components/sections/CTASection'
import { FaCalendar, FaClock } from 'react-icons/fa'

const MotionBox = motion(Box)

// Sample blog posts - In production, these would come from a CMS or API
const blogPosts = [
  {
    title: 'Complete Guide to Play Store App Publishing in 2026',
    excerpt: 'Learn how to publish your mobile app on Google Play Store under your own company name. Step-by-step guide with screenshots and best practices.',
    category: 'Mobile Development',
    date: '2026-05-20',
    readTime: '8 min read',
    image: 'https://via.placeholder.com/600x400/2563EB/FFFFFF?text=Play+Store+Publishing',
  },
  {
    title: 'Why Custom Software is Better Than Off-the-Shelf Solutions',
    excerpt: 'Discover the advantages of custom software development for your business. Real-world case studies and ROI analysis.',
    category: 'Software Development',
    date: '2026-05-15',
    readTime: '6 min read',
    image: 'https://via.placeholder.com/600x400/2563EB/FFFFFF?text=Custom+Software',
  },
  {
    title: 'React Native vs Flutter: Which is Best for Your App?',
    excerpt: 'A comprehensive comparison of cross-platform mobile frameworks. Performance benchmarks, pros, cons, and real-world recommendations.',
    category: 'Mobile Development',
    date: '2026-05-10',
    readTime: '10 min read',
    image: 'https://via.placeholder.com/600x400/2563EB/FFFFFF?text=React+vs+Flutter',
  },
  {
    title: 'Building SaaS Products: Complete Guide for Startups',
    excerpt: 'Everything you need to know about building a successful SaaS product—from architecture to subscription billing and scaling.',
    category: 'SaaS Development',
    date: '2026-05-05',
    readTime: '12 min read',
    image: 'https://via.placeholder.com/600x400/2563EB/FFFFFF?text=SaaS+Guide',
  },
  {
    title: 'SEO Best Practices for Website Development in 2026',
    excerpt: 'Technical SEO strategies to improve your website rankings. Core Web Vitals, schema markup, and optimization techniques.',
    category: 'Website Development',
    date: '2026-04-28',
    readTime: '7 min read',
    image: 'https://via.placeholder.com/600x400/2563EB/FFFFFF?text=SEO+Best+Practices',
  },
  {
    title: 'AI Automation: How to Reduce Manual Work by 80%',
    excerpt: 'Real-world examples of AI-powered automation in business processes. Tools, technologies, and implementation strategies.',
    category: 'AI & Automation',
    date: '2026-04-20',
    readTime: '9 min read',
    image: 'https://via.placeholder.com/600x400/2563EB/FFFFFF?text=AI+Automation',
  },
]

const categories = [
  'All Posts',
  'Mobile Development',
  'Software Development',
  'Website Development',
  'SaaS Development',
  'AI & Automation',
]

const Blog = () => {
  return (
    <Box>
      <SEO
        title="Blog - Software Development Tips & Guides | Boolavas"
        description="Expert insights on software development, mobile apps, website development, SaaS, and technology trends. Learn from experienced developers at Boolavas."
        keywords="software development blog, mobile app development guides, website development tips, SaaS development, technology blog india"
        canonical="https://boolavas.in/blog"
      />

      {/* Hero Section */}
      <Box bg="brand.navy" pt={32} pb={20}>
        <Container maxW="7xl">
          <VStack spacing={6} textAlign="center">
            <Heading size="3xl" color="white" lineHeight="shorter">
              Insights & Guides
            </Heading>
            <Text fontSize="xl" color="gray.300" maxW="3xl">
              Expert articles on software development, mobile apps, and technology trends
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Categories */}
      <Box py={8} bg="white" borderBottom="1px solid" borderColor="gray.200">
        <Container maxW="7xl">
          <HStack spacing={3} flexWrap="wrap" justify="center">
            {categories.map((category, index) => (
              <Tag
                key={index}
                size="lg"
                variant={index === 0 ? 'solid' : 'outline'}
                colorScheme={index === 0 ? 'blue' : 'gray'}
                cursor="pointer"
                _hover={{ transform: 'translateY(-2px)' }}
                transition="all 0.2s"
              >
                {category}
              </Tag>
            ))}
          </HStack>
        </Container>
      </Box>

      {/* Blog Posts Grid */}
      <Box py={20} bg="gray.50">
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {blogPosts.map((post, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box
                  bg="white"
                  borderRadius="xl"
                  overflow="hidden"
                  boxShadow="md"
                  _hover={{ boxShadow: 'xl', transform: 'translateY(-4px)' }}
                  transition="all 0.3s"
                  cursor="pointer"
                  height="100%"
                  display="flex"
                  flexDirection="column"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    height="200px"
                    width="100%"
                    objectFit="cover"
                  />
                  <VStack align="flex-start" spacing={4} p={6} flex={1}>
                    <Tag colorScheme="blue" size="sm">
                      {post.category}
                    </Tag>
                    <Heading size="md" color="brand.navy" lineHeight="shorter">
                      {post.title}
                    </Heading>
                    <Text color="gray.600" fontSize="sm" noOfLines={3}>
                      {post.excerpt}
                    </Text>
                    <HStack spacing={4} pt={2} fontSize="sm" color="gray.500" mt="auto">
                      <HStack>
                        <FaCalendar />
                        <Text>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</Text>
                      </HStack>
                      <HStack>
                        <FaClock />
                        <Text>{post.readTime}</Text>
                      </HStack>
                    </HStack>
                  </VStack>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Newsletter Section */}
      <Box py={20} bg="white">
        <Container maxW="4xl">
          <VStack spacing={6} textAlign="center" bg="brand.50" p={12} borderRadius="2xl">
            <Heading size="xl" color="brand.navy">
              Stay Updated
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Get the latest articles, guides, and insights delivered to your inbox
            </Text>
            <Text fontSize="sm" color="gray.500">
              Newsletter coming soon. Follow us on social media for updates.
            </Text>
          </VStack>
        </Container>
      </Box>

      <CTASection
        title="Need Expert Development Services?"
        description="From blogs to building—let's turn your ideas into reality."
      />
    </Box>
  )
}

export default Blog
