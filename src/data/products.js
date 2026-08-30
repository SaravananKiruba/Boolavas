import {
  FaHeartbeat,
  FaCalendarCheck,
  FaFilePrescription,
  FaFlask,
  FaUserInjured,
  FaDatabase,
  FaExclamationTriangle,
  FaProjectDiagram,
  FaShieldAlt,
  FaCommentDots,
  FaRoute,
  FaCogs,
  FaBalanceScale,
  FaSearchMinus,
  FaEquals,
  FaWaveSquare,
} from 'react-icons/fa'

export const MIGRASAFE_APP_URL = 'https://migrasafe.vercel.app'
export const CONFIGSAFE_APP_URL = 'https://configsafe.vercel.app'

export const products = [
  {
    slug: 'mediboo',
    name: 'MediBoo',
    category: 'Clinic Management Software',
    route: '/products/mediboo',
    icon: FaHeartbeat,
    // MediBoo is informational only on this site — no application link.
    appUrl: '',
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
  {
    slug: 'migrasafe',
    name: 'MigraSafe',
    category: 'SQL Migration Risk Analyzer',
    route: '/products/migrasafe',
    icon: FaDatabase,
    appUrl: MIGRASAFE_APP_URL,
    summary:
      'Analyze SQL migration scripts and identify potentially dangerous database changes before they reach production.',
    seo: {
      title: 'MigraSafe | SQL Migration Risk Analyzer | Boolavas',
      description:
        'MigraSafe analyzes SQL migration scripts to identify potentially risky database changes before they reach production.',
      canonical: 'https://boolavas.in/products/migrasafe',
      keywords:
        'SQL migration risk analyzer, SQL migration checker, database migration risk, database migration safety, SQL migration analysis, schema migration risk',
    },
    hero: {
      heading: 'Catch risky SQL migrations before production.',
      description:
        'MigraSafe analyzes SQL migration scripts and highlights potentially dangerous schema and data changes before they become deployment problems.',
    },
    problem: {
      title: 'The problem',
      body: 'A single migration can drop a column, rewrite a table or delete data that never comes back. Risky changes often look harmless in a pull request and only reveal their impact once they hit production. Teams need a way to spot dangerous migrations before they ship.',
    },
    howItWorks: [
      { title: 'Bring your migration', description: 'Start with the SQL migration script you are about to run.' },
      { title: 'Analyze the changes', description: 'MigraSafe reviews the script for potentially dangerous operations.' },
      { title: 'Understand the risk', description: 'Get human-readable explanations of what each risky change means.' },
      { title: 'Ship with confidence', description: 'Decide with awareness of the production risk before deploying.' },
    ],
    capabilities: [
      { icon: FaExclamationTriangle, title: 'Migration risk detection', description: 'Surface migration changes that carry production risk.' },
      { icon: FaSearchMinus, title: 'Destructive change identification', description: 'Highlight operations that can drop or lose data.' },
      { icon: FaProjectDiagram, title: 'Schema change analysis', description: 'Review schema modifications for potential impact.' },
      { icon: FaShieldAlt, title: 'Production risk awareness', description: 'Understand the blast radius before a change ships.' },
      { icon: FaCommentDots, title: 'Human-readable explanations', description: 'Plain-language descriptions of why a change is risky.' },
      { icon: FaRoute, title: 'Safer migration guidance', description: 'Guidance toward safer ways to apply a change.' },
    ],
    audience: [
      'Backend and full-stack engineers who write database migrations',
      'Teams that deploy schema changes to production databases',
      'Anyone who wants a safety check before running a migration',
    ],
    whyMatters: {
      title: 'Why it matters',
      body: 'Database changes are some of the hardest to undo. Catching a destructive or risky migration before it runs saves teams from data loss, downtime and painful recovery. MigraSafe adds a clear safety checkpoint to the migration workflow.',
    },
    faqs: [
      { question: 'What is MigraSafe?', answer: 'MigraSafe is an SQL migration risk analyzer that helps identify potentially dangerous database migration changes before they reach production.' },
      { question: 'What does MigraSafe analyze?', answer: 'MigraSafe analyzes SQL migration scripts and highlights potentially risky schema and data changes.' },
      { question: 'Who is MigraSafe for?', answer: 'MigraSafe is built for engineers and teams that write and deploy database migrations and want to reduce production risk.' },
    ],
  },
  {
    slug: 'configsafe',
    name: 'ConfigSafe',
    category: 'Environment Configuration Risk & Drift Checker',
    route: '/products/configsafe',
    icon: FaCogs,
    appUrl: CONFIGSAFE_APP_URL,
    summary:
      'Detect configuration risks, inconsistencies and environment drift before they become production problems.',
    seo: {
      title: 'ConfigSafe | Environment Configuration Risk Checker | Boolavas',
      description:
        'ConfigSafe helps developers identify environment configuration risks, inconsistencies and configuration drift before production.',
      canonical: 'https://boolavas.in/products/configsafe',
      keywords:
        'environment configuration checker, configuration drift checker, environment variable checker, configuration risk checker, environment configuration analysis, configuration consistency',
    },
    hero: {
      heading: 'Find configuration problems before production.',
      description:
        'ConfigSafe helps developers identify risky, inconsistent and potentially drifting environment configuration before it causes deployment or runtime problems.',
    },
    problem: {
      title: 'The problem',
      body: 'Configuration quietly drifts between environments. A variable set in staging goes missing in production, a value changes without anyone noticing, and environments slowly fall out of sync. These small inconsistencies often surface as confusing production incidents.',
    },
    howItWorks: [
      { title: 'Bring your configuration', description: 'Start with the environment configuration you want to check.' },
      { title: 'Compare environments', description: 'ConfigSafe compares configuration across environments.' },
      { title: 'Spot the risks', description: 'Missing, inconsistent or drifting values are surfaced clearly.' },
      { title: 'Fix before it ships', description: 'Resolve configuration problems before they reach production.' },
    ],
    capabilities: [
      { icon: FaExclamationTriangle, title: 'Configuration risk detection', description: 'Surface configuration values that carry risk.' },
      { icon: FaBalanceScale, title: 'Environment comparison', description: 'Compare configuration across your environments.' },
      { icon: FaSearchMinus, title: 'Missing configuration detection', description: 'Find values present in one environment but missing in another.' },
      { icon: FaEquals, title: 'Inconsistent configuration detection', description: 'Highlight values that differ where they should match.' },
      { icon: FaWaveSquare, title: 'Drift awareness', description: 'Notice when environments quietly fall out of sync.' },
      { icon: FaCommentDots, title: 'Human-readable explanations', description: 'Plain-language descriptions of each configuration risk.' },
    ],
    audience: [
      'Developers managing multiple deployment environments',
      'DevOps and platform teams responsible for configuration',
      'Teams that want to prevent configuration-driven incidents',
    ],
    whyMatters: {
      title: 'Why it matters',
      body: 'Configuration problems are a common and frustrating source of production incidents. Detecting missing, inconsistent or drifting configuration early keeps environments predictable and deployments boring — in the best way. ConfigSafe adds that check before things go wrong.',
    },
    faqs: [
      { question: 'What is ConfigSafe?', answer: 'ConfigSafe is an environment configuration risk and drift checker designed to identify configuration problems before they become production issues.' },
      { question: 'What does ConfigSafe check?', answer: 'ConfigSafe checks environment configuration for risks, inconsistencies and drift across environments.' },
      { question: 'Who is ConfigSafe for?', answer: 'ConfigSafe is built for developers and DevOps teams who manage configuration across multiple environments.' },
    ],
  },
]

export const getProduct = (slug) => products.find((p) => p.slug === slug)
