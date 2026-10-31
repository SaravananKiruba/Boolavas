import {
  FaHeartbeat,
  FaCalendarCheck,
  FaFilePrescription,
  FaFlask,
  FaUserInjured,
} from 'react-icons/fa'

export const products = [
  {
    slug: 'mediboo',
    name: 'MediBoo',
    category: 'Clinic Management Software',
    route: '/products/mediboo',
    icon: FaHeartbeat,
    accentGradient: 'linear-gradient(135deg, #A66BEF 0%, #8f4fe6 100%)',
    accentColor: '#A66BEF',
    appUrl: 'https://mediboo.in',
    summary:
      'A modern clinic management platform for managing patients, appointments, prescriptions, investigations and everyday clinic workflows.',
    seo: {
      title: 'MediBoo | Clinic Management Software | Boolavas',
      description:
        'MediBoo is modern clinic management software for managing patients, appointments, prescriptions, investigations and everyday clinic workflows.',
      canonical: 'https://boolavas.in/products/mediboo',
      keywords:
        'clinic management software, patient management, appointment scheduling, prescription software, healthcare software, mediboo',
    },
    hero: {
      heading: 'Modern clinic management, without the complexity.',
      description:
        'MediBoo helps clinics manage patients, appointments, prescriptions, investigations and everyday healthcare workflows from one modern platform.',
    },
    problem: {
      title: 'The problem',
      body: 'Many clinics still run on paper registers and scattered spreadsheets. Patient histories get lost, appointments overlap, prescriptions are hard to reproduce, and follow-ups slip through the cracks. Clinic staff spend more time on paperwork than on patients.',
    },
    howItWorks: [
      { title: 'Set up your clinic', description: 'Configure your clinic profile, doctors and consultation workflow.' },
      { title: 'Add patients', description: 'Capture patient records and medical history in one organised place.' },
      { title: 'Manage appointments', description: 'Schedule visits and keep the daily queue moving smoothly.' },
      { title: 'Prescribe & record', description: 'Generate prescriptions and record investigations during consultation.' },
      { title: 'Follow up', description: 'Track follow-ups so no patient is forgotten between visits.' },
    ],
    capabilities: [
      { icon: FaUserInjured, title: 'Patient management', description: 'Organised patient records with medical history in one place.' },
      { icon: FaCalendarCheck, title: 'Appointment scheduling', description: 'Plan visits and manage the daily clinic queue.' },
      { icon: FaFilePrescription, title: 'Digital prescriptions', description: 'Generate clear, repeatable prescriptions during consultation.' },
      { icon: FaFlask, title: 'Investigations', description: 'Record clinical investigations alongside the patient record.' },
      { icon: FaHeartbeat, title: 'Everyday workflows', description: 'Handle routine clinic tasks from a single modern interface.' },
    ],
    audience: [
      'Independent clinics moving away from paper registers',
      'Multi-doctor practices that need shared patient records',
      'Healthcare businesses that want organised day-to-day operations',
    ],
    whyMatters: {
      title: 'Why it matters',
      body: 'When patient information, appointments and prescriptions live in one place, clinics spend less time on admin and more time on care. MediBoo keeps everyday clinic operations organised, consistent and easy to run.',
    },
    faqs: [
      { question: 'What is MediBoo?', answer: 'MediBoo is clinic management software designed for modern clinics and healthcare businesses to manage patients, appointments, prescriptions and investigations.' },
      { question: 'Who is MediBoo for?', answer: 'MediBoo is built for independent clinics, multi-doctor practices and healthcare businesses that want to organise everyday clinic workflows.' },
      { question: 'What can MediBoo manage?', answer: 'MediBoo manages patients, appointments, prescriptions, investigations and routine clinic workflows from one platform.' },
    ],
  },
]

export const getProduct = (slug) => products.find((p) => p.slug === slug)
