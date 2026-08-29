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

const companyFaqs = [
  {
    question: 'What is Boolavas?',
    answer: 'Boolavas is a software product company building focused tools for healthcare, database engineering and application configuration workflows.',
  },
  {
    question: 'What products does Boolavas build?',
    answer: 'Boolavas currently builds MediBoo, MigraSafe and ConfigSafe.',
  },
  {
    question: 'What is MediBoo?',
    answer: 'MediBoo is clinic management software designed for modern clinics and healthcare businesses.',
  },
  {
    question: 'What is MigraSafe?',
    answer: 'MigraSafe is an SQL migration risk analyzer that helps identify potentially dangerous database migration changes before production.',
  },
  {
    question: 'What is ConfigSafe?',
    answer: 'ConfigSafe is an environment configuration risk and drift checker designed to identify configuration problems before they become production issues.',
  },
  {
    question: 'How can I contact Boolavas?',
    answer: 'Email Boolavas at contact@boolavas.in.',
  },
]

const FAQ = ({
  faqs = companyFaqs,
  title = 'Frequently asked questions',
  description = 'Answers to common questions about Boolavas and its products.',
  id = 'faq',
  withSchema = true,
}) => {
  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg="#111111" id={id}>
      {withSchema && <FAQSchema faqs={faqs} />}
      <Container maxW="4xl">
        <VStack spacing={4} textAlign="center" mb={12}>
          <Heading as="h2" size="2xl" color="white">
            {title}
          </Heading>
          <Text fontSize="xl" color="gray.400">
            {description}
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
                  bg="rgba(255,255,255,0.03)"
                  _hover={{ bg: 'whiteAlpha.100' }}
                  _expanded={{ bg: 'whiteAlpha.100', borderColor: 'brand.blue' }}
                  borderRadius="lg"
                  p={6}
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  transition="all 0.3s"
                >
                  <Box flex="1" textAlign="left">
                    <Text fontWeight="semibold" fontSize="lg" color="white">
                      {faq.question}
                    </Text>
                  </Box>
                  <AccordionIcon color="brand.blue" />
                </AccordionButton>
                <AccordionPanel pb={4} pt={4} px={6}>
                  <Text color="gray.400" lineHeight="tall">
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
