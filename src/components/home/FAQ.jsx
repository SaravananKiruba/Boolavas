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
import FAQSchema from '../schemas/FAQSchema'

const MotionBox = motion(Box)

const faqs = [
  {
    question: 'What is the best clinic management software for homeopathy clinics?',
    answer: 'MediBoo by Boolavas is clinic management software built specifically for Homeopathy clinics. It includes patient management, appointment scheduling, prescription generation, billing, and follow-up tracking designed for homeopathic practitioners.',
  },
  {
    question: 'Does MediBoo support Siddha and Ayurveda clinics?',
    answer: 'Yes. MediBoo is designed for traditional medicine practices including Siddha, Ayurveda, and Homeopathy clinics. The platform supports custom prescription templates, treatment protocols, and medicine catalogs specific to each practice.',
  },
  {
    question: 'Is MediBoo suitable for dental clinics?',
    answer: 'Absolutely. MediBoo works for Dental clinics and supports procedures tracking, treatment plans, dental charts, and specialized billing. Dental practitioners in Chennai, Coimbatore, and Madurai are already using MediBoo.',
  },
  {
    question: 'Can I manage appointments and billing with MediBoo?',
    answer: 'Yes. MediBoo provides complete appointment management with automated SMS/email reminders, calendar scheduling, and integrated billing with invoice generation, payment tracking, and GST support.',
  },
  {
    question: 'Is MediBoo useful for acupuncture clinics?',
    answer: 'Yes. MediBoo supports Acupuncture clinics with patient history tracking, treatment session logging, and appointment management. The platform is flexible enough to adapt to various alternative medicine practices.',
  },
  {
    question: 'Does MediBoo work for small clinics?',
    answer: 'Yes. MediBoo is perfect for small clinics, solo practitioners, and multi-branch setups. You can start with a single doctor and scale to multiple branches as your practice grows. There\'s a 90-day free trial with no credit card required.',
  },
  {
    question: 'Can doctors manage patient history in MediBoo?',
    answer: 'Yes. MediBoo provides comprehensive patient history management including chief complaints, medical history, treatment records, investigation results, prescriptions, and follow-up notes — all stored securely and accessible anytime.',
  },
  {
    question: 'Is MediBoo available in India?',
    answer: 'Yes. MediBoo is built for Indian clinics and supports clinics across Chennai, Coimbatore, Madurai, and all of Tamil Nadu. The platform supports Indian billing standards, GST compliance, and local payment methods.',
  },
  {
    question: 'Can MediBoo support multiple clinics and branches?',
    answer: 'Yes. MediBoo is built on a multi-tenant architecture that supports multiple independent clinics, each with their own branches, doctors, receptionists, and fully isolated patient data. Each clinic can have custom branding and domain.',
  },
  {
    question: 'Is MediBoo white-label ready?',
    answer: 'Yes. Each clinic on MediBoo gets its own logo, color scheme, favicon, custom CSS, and custom domain — delivering a fully white-labelled experience. Patients and staff only see the clinic\'s branding.',
  },
]

const FAQ = () => {
  return (
    <Box as="section" py={20} bg="white" id="faq">
      <FAQSchema faqs={faqs} />
      <Container maxW="4xl">
        <VStack spacing={4} textAlign="center" mb={12}>
          <Heading as="h2" size="2xl" color="brand.navy">
            Frequently Asked Questions
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Common questions about MediBoo clinic management software
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
