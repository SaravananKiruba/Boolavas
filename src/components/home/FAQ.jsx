import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const faqs = [
  {
    question: 'Can I publish the app under my own company name on Play Store?',
    answer: 'Absolutely! We specialize in helping businesses launch apps under their own brand name. We handle the entire development process and guide you through Play Store publishing using your own developer account.',
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on complexity. A basic mobile app typically takes 8-12 weeks, while complex enterprise software can take 3-6 months. We provide detailed timelines during the planning phase and maintain transparent communication throughout.',
  },
  {
    question: 'Do you provide white-label development services?',
    answer: 'Yes, we offer white-label solutions where we work as your behind-the-scenes technology partner. Your clients will only see your brand while we handle all the technical development and support.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'We work with modern, industry-standard technologies including React, Node.js, Python, Flutter, React Native, AWS, and more. We choose the best tech stack based on your specific project requirements and long-term goals.',
  },
  {
    question: 'Do you provide post-launch support and maintenance?',
    answer: 'Yes, we offer comprehensive post-launch support including bug fixes, updates, feature enhancements, and technical assistance. We provide various support packages to match your needs.',
  },
  {
    question: 'How do you ensure code quality and security?',
    answer: 'We follow industry best practices including code reviews, automated testing, security audits, and adherence to OWASP guidelines. All our code is production-ready and built for scalability.',
  },
  {
    question: 'Can you integrate AI and automation into existing systems?',
    answer: 'Yes, we specialize in AI-powered automation and intelligent systems. We can integrate AI capabilities into your existing software or build new AI-driven solutions from scratch.',
  },
  {
    question: 'What is the cost of developing a mobile app or website?',
    answer: 'Costs vary based on features, complexity, and timeline. We provide detailed quotes after understanding your requirements. Our pricing is transparent with no hidden charges, and we offer flexible engagement models.',
  },
]

const FAQ = () => {
  return (
    <Box py={20} bg="white" id="faq">
      <Container maxW="4xl">
        <VStack spacing={4} textAlign="center" mb={12}>
          <Heading size="2xl" color="brand.navy">
            Frequently Asked Questions
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Everything you need to know about working with us
          </Text>
        </VStack>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion allowToggle>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} border="none" mb={4}>
                <AccordionButton
                  bg="gray.50"
                  _hover={{ bg: 'brand.50' }}
                  _expanded={{ bg: 'brand.50', borderColor: 'brand.blue' }}
                  borderRadius="lg"
                  p={6}
                  border="2px solid"
                  borderColor="gray.100"
                  transition="all 0.3s"
                >
                  <Box flex="1" textAlign="left">
                    <Text fontWeight="semibold" fontSize="lg" color="brand.navy">
                      {faq.question}
                    </Text>
                  </Box>
                  <AccordionIcon color="brand.blue" />
                </AccordionButton>
                <AccordionPanel pb={4} pt={4} px={6}>
                  <Text color="gray.700" lineHeight="tall">
                    {faq.answer}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </MotionBox>
      </Container>
    </Box>
  )
}

export default FAQ
