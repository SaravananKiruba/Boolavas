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
    question: 'What is MediBoo?',
    answer: 'MediBoo is a multi-tenant SaaS clinic management system built for homeopathic and general medical practices. It covers everything from patient registration and medical history to appointment scheduling, clinical investigations, queue/token management, and real-time analytics — all in a single white-labelled platform.',
  },
  {
    question: 'Can MediBoo support multiple clinics and branches?',
    answer: 'Yes. MediBoo is built on a proper multi-tenant architecture. A single deployment hosts multiple independent clinics, each with their own branches, doctors, receptionists, and fully isolated patient data. Each clinic can have its own branding, logo, colors, and custom domain.',
  },
  {
    question: 'What roles are supported in MediBoo?',
    answer: 'MediBoo supports Super Admin, Clinic Admin, Branch Admin, Doctor, and Receptionist roles — each with scoped data access and permissions. Receptionists can manage appointments and demographics but cannot access medical data. Doctors own and manage their patients. Branch and Clinic Admins have aggregated visibility across their hierarchy.',
  },
  {
    question: 'Is MediBoo white-label ready?',
    answer: 'Yes. Each clinic on MediBoo gets its own logo, color scheme, favicon, custom CSS, and custom domain — delivering a fully white-labelled experience. Patients and staff only see the clinic\'s branding, never the underlying platform.',
  },
  {
    question: 'What is the queue/token system in MediBoo?',
    answer: 'MediBoo includes a Kanban-style queue board with token issuance, priority levels (Urgent, Senior, Normal), wait-time indicators, and token status transitions (Waiting → Called → Serving → Done). Tokens can be linked to registered patients or issued to walk-in visitors.',
  },
  {
    question: 'What tech stack does MediBoo use?',
    answer: 'MediBoo is built on Next.js (Pages Router) for the frontend and API layer, MySQL with Prisma ORM for the database, NextAuth.js for authentication, and Chakra UI for the interface. It is deployed on Vercel with Supabase Storage for file uploads.',
  },
  {
    question: 'Who built Boolavas and its products?',
    answer: 'Boolavas is a solo-founder product company. Every product — including MediBoo — is designed, engineered, and maintained by a single tech lead. This means tighter quality control, faster iteration, and no layers of overhead between idea and production.',
  },
  {
    question: 'Can I use MediBoo for my clinic?',
    answer: 'Yes. Get in touch through the contact page and we can discuss onboarding your clinic onto MediBoo. Whether you need a single branch or a multi-branch setup with custom branding, MediBoo can be configured to fit your workflow.',
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
            Everything you need to know about Boolavas and MediBoo
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
