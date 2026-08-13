# MediBoo — Complete Feature List
**Multi-Tenant SaaS Clinic Management Platform by Boolavas**

---

## 🏥 Core Clinical Features

### Patient Management
- **Complete Patient Profiles** — Name, age, sex, contact, address, occupation, guardian details
- **Medical History** — Encrypted JSON storage for past history (allergies, chronic conditions, surgeries)
- **Family History** — Track hereditary conditions (mother, father, siblings)
- **Chief Complaints** — Free-text entry with disease intelligence tagging
- **Physical Generals** — Appetite, bowel, urine, sweating, sleep, thirst, addictions
- **Menstrual History** — For female patients (menses, menopause, leucorrhoea, discharges)
- **Food & Habit** — Dietary preferences, addictions, lifestyle factors
- **Patient Number** — Auto-generated or custom patient IDs
- **Next Appointment Tracking** — Auto-synced from appointment records
- **Patient Search** — By name, mobile number, patient number (indexed fields only)
- **Patient Privacy** — Receptionist can only see demographic fields, not medical data

### Appointment Management
- **Smart Scheduling** — Date, time, appointment type (General, New Consultation, Follow-up, Review)
- **Appointment Status Tracking** — Scheduled, Completed, Cancelled, No-Show
- **One-Click Check-In** — Creates follow-up appointment + issues queue token automatically
- **Automated Reminders** — WhatsApp appointment reminders sent before appointment date
- **Appointment Notes** — Add notes for each appointment
- **Calendar View** — Daily/weekly/monthly appointment overview
- **Appointment History** — Full timeline per patient

### Digital Prescriptions
- **Prescription Generation** — Digital prescriptions with medicines, dosage, frequency, duration
- **Prescription Templates** — Save frequently used prescriptions for quick re-use
- **Medicine Autocomplete** — Suggests medicines from doctor's prescribing history
- **Medicine Master Database** — Per-clinic drug formulary with generic names, strengths, forms
- **Prescription Numbering** — Auto-generated (RX-YYYYMMDD-NNNN format)
- **PDF Generation** — Print-ready prescription PDFs with clinic branding
- **WhatsApp Sharing** — Share prescription PDF directly via WhatsApp
- **Prescription Status** — Active, Superseded, Cancelled
- **Structured Medicine Data** — Dual-write to structured tables for analytics
- **Follow-Up Date** — Set follow-up date on prescriptions
- **Advice Section** — General advice, lifestyle recommendations

### Investigation Tracking
- **Investigation Records** — Type, details, date, ordering doctor, normal range
- **File Attachments** — Upload lab reports, X-rays, ultrasounds, imaging files
- **Investigation Results** — Record results with follow-up requirements
- **Follow-Up Workflow** — Track investigations needing follow-up, mark as resolved
- **Investigation Notes** — Encrypted notes for clinical observations
- **Investigation Timeline** — Patient-wise chronological investigation view
- **Investigation Categories** — Lab tests, imaging, pathology, special investigations
- **Antenatal Support** — Dedicated investigation types for gynaecology/obstetrics

---

## 💰 Billing & Financial Management

### Billing Module (Plugin)
- **Service Catalogue** — Per-clinic service items (Consultation, Investigation, Procedure, Other)
- **Invoice Generation** — Auto-numbered bills (PREFIX-YYYYMMDD-NNNN)
- **Line Item Billing** — Multiple services per bill with quantity, unit fee, tax
- **GST Compliance** — Configurable tax percentages, GST-ready invoices
- **Discount Management** — Line-level or bill-level discounts with reason tracking
- **Invoice Status** — Draft, Unpaid, PartiallyPaid, Paid, Cancelled, Waived
- **Partial Payments** — Accept multiple payments per bill (installments)
- **Payment Methods** — Cash, Card, UPI, NetBanking, Cheque, Insurance, Other
- **Payment Tracking** — Payment date, amount, reference number, recorded by
- **Invoice PDF** — Print-ready invoices with clinic branding and GST details
- **Outstanding Bills Report** — Track receivables, overdue payments
- **Revenue Analytics** — Time-series revenue reports, billing summary

### Expense Management (Plugin)
- **Expense Recording** — Title, description, amount, category, date, payment method
- **Expense Categories** — Operational, Personnel, Clinical, Marketing, Administrative, Travel, Miscellaneous
- **GST/Tax Handling** — CGST+SGST, IGST, or tax-inclusive amounts
- **Expense Numbering** — Auto-generated (EXP-YYYYMMDD-NNNN)
- **Vendor Management** — Clinic-scoped vendor directory with contact, GSTIN, PAN, bank details
- **Expense Attachments** — Upload invoices, receipts, bills (Vercel Blob storage)
- **Approval Workflow** — Expense status: Draft, PendingApproval, Approved, Rejected, Paid, Voided
- **Recurring Expenses** — Auto-create expenses (Daily, Weekly, Monthly, Quarterly, Annual)
- **Expense Reports** — Category-wise breakdown, P&L statements, expense summaries
- **GST Compliance** — GSTIN validation, tax calculation, invoice management

---

## 📊 Analytics & Business Intelligence

### Disease Intelligence
- **Rule-Based Disease Tagging** — Automatically categorizes chief complaints into disease categories
- **ICD-10 Ready** — Structured condition codes (internal, ICD-10, SNOMED support)
- **Diagnosis Tracking** — Structured diagnosis per encounter (active, provisional, ruled-out, resolved)
- **Disease Demographics** — Breakdown by age group, sex, branch, doctor
- **Disease Heatmap** — Frequency by calendar month/week
- **Disease Trends** — Disease category trends over time
- **Top Diseases** — Most common conditions in clinic/branch/doctor

### Prescribing Analytics
- **Top Prescribed Medicines** — Most frequently prescribed drugs by clinic/branch/doctor
- **Medicine Patterns** — Prescribing trends, formulary optimization
- **Doctor Prescribing Analysis** — Compare prescribing patterns across doctors

### Revenue & Financial Reports
- **Revenue Overview** — Daily/weekly/monthly/yearly revenue summaries
- **Billing Analytics** — Bills issued, bills paid, outstanding receivables
- **Payment Breakdown** — By payment method (Cash, UPI, Card, etc.)
- **Income Statement** — Monthly income vs expenses
- **P&L Statement** — Profit & Loss with expense categorization
- **End-of-Day Reports** — Daily snapshot for branch managers
- **Outstanding Receivables** — Aging analysis, overdue tracking

### Operational Reports
- **Patient Visit Trends** — New patients, follow-ups, appointment completion rates
- **Doctor Productivity** — Patients seen, prescriptions written, revenue generated
- **Branch Performance** — Multi-branch KPI comparison
- **Queue Statistics** — Average wait time, token utilization, queue efficiency
- **Appointment Analytics** — No-show rates, cancellation rates, scheduling patterns
- **Follow-Up Compliance** — Patients who returned vs patients who didn't
- **Daily Aggregates** — Pre-computed KPIs for fast reporting

### Platform-Level Analytics (Superadmin)
- **SaaS Overview** — Total clinics, active users, platform revenue
- **Per-Clinic KPIs** — Usage, subscription status, feature adoption
- **Subscription Analytics** — Trial conversions, churn rate, renewal rates

---

## 🔒 Security & Compliance

### Data Encryption
- **AES-256-GCM Encryption** — PHI fields encrypted at rest (medical history, investigations, notes)
- **Idempotent Decryption** — Legacy plaintext data passes through unchanged
- **Key Management** — Dedicated `FIELD_ENCRYPTION_KEY` env variable (32-byte)
- **Encrypted Fields** — medicalHistory, physicalGenerals, menstrualHistory, foodAndHabit, notes (Patient); details, results, notes (Investigation)

### Authentication & Authorization
- **NextAuth.js JWT** — Session-based authentication with JWT tokens
- **Multi-Factor Authentication** — Email OTP, 6-digit codes, bcrypt hashed, 3-attempt limit
- **Password Security** — bcrypt hashing with configurable salt rounds
- **Device Session Tracking** — Active session management per JWT `jti`, revocable sessions
- **Role-Based Access Control** — 5 roles: superadmin, clinicadmin, branchadmin, doctor, receptionist
- **Tenant Scoping** — Automatic data isolation per clinic/branch

### Audit & Compliance
- **Comprehensive Audit Trail** — All CREATE, UPDATE, DELETE operations logged
- **Audit Log Viewer** — Paginated audit viewer for superadmin
- **HIPAA-Ready Architecture** — PHI encryption, access logs, audit trails
- **Secure File Storage** — Private file serving with session auth or HMAC-signed URLs
- **Rate Limiting** — Login and OTP endpoints protected from brute-force attacks

---

## 🚀 Enterprise Features

### Multi-Tenant SaaS Architecture
- **Clinic Isolation** — Complete data separation per clinic
- **Branch Management** — Multiple branches per clinic
- **User Hierarchy** — Clinic → Branch → Doctor/Receptionist
- **Subscription Management** — Plans: Free, Starter, Professional, Enterprise
- **Trial Periods** — 90-day free trial on paid plans
- **Grace Periods** — 7-day grace period before suspension
- **Auto-Suspension** — Expired subscriptions moved to expired status automatically
- **Renewal Reminders** — WhatsApp/email alerts before expiry

### White-Label Branding
- **Custom Logo & Favicon** — Per-clinic branding (Vercel Blob storage)
- **Color Customization** — Primary and secondary brand colors
- **Custom CSS** — Per-clinic CSS injection
- **Custom Domain** — Support for clinic-specific domains (CNAME)
- **Branded Prescriptions** — Clinic logo, colors on prescription PDFs
- **Branded Invoices** — Clinic branding on invoice PDFs

### Plugin System
- **Modular Architecture** — Features as independently toggleable plugins
- **Core Plugins:**
  - ✅ **Billing** — Invoice generation, payment tracking
  - ✅ **Expenses** — Expense management, vendor directory
  - ✅ **WhatsApp** — Appointment reminders, prescription sharing
  - 🔜 **Inventory** — Stock management, low-stock alerts
  - 🔜 **Laboratory** — In-house lab module
  - 🔜 **Online Appointments** — Patient self-scheduling
  - 🔜 **Telemedicine** — Video consultation integration
  - 🔜 **Advanced Reports** — Custom report builder
- **Plugin Guard** — Write operations blocked on inactive plugins
- **Plugin Trial** — Per-clinic plugin activation with trial/expiry dates
- **Plugin Pricing** — Per-plugin pricing, free vs paid plugins

### Plan-Based Resource Limits
- **Doctor Limit** — Max doctors per clinic (plan-dependent)
- **Branch Limit** — Max branches per clinic
- **Patient Limit** — Max patients (100 for Free, unlimited for paid)
- **Invoice Limit** — Invoices per month (plan-dependent)
- **Expense Limit** — Expenses per month (plan-dependent)
- **Limit Enforcement** — Automatic blocking when limit reached
- **Upgrade Prompts** — Notify clinic when approaching limits

---

## 🎯 Queue & Token Management

### Queue System
- **Daily Queue** — One queue per branch per day
- **Token Generation** — Auto-numbered tokens (1, 2, 3...)
- **Priority Levels** — Normal, Urgent, Senior (sorted by priority)
- **Token Status Tracking** — Waiting → Called → Serving → Done | Skipped
- **Kanban Board UI** — Drag-and-drop token management
- **Queue Dashboard Widget** — Real-time queue status (polls every 6s)
- **Queue Open/Close** — Manually open/close queue per branch
- **Queue Closing Time** — Stamped `closedAt` when closed

---

## 📱 Communication & Notifications

### WhatsApp Integration (Plugin)
- **Appointment Reminders** — Sent automatically before appointment date
- **Prescription Sharing** — Share prescription PDF via WhatsApp
- **Document Messages** — Upload PDF to Vercel Blob, send as document
- **Template Messages** — Pre-approved templates (My Dreams Technology API)
- **Bulk Reminders** — Cron job sends reminders daily
- **Template Parameters** — patientName, clinicName, date, time

### Email Notifications
- **OTP Email** — MFA verification codes sent via email
- **Appointment Confirmation** — Email sent on appointment creation
- **Follow-Up Reminders** — Email reminders for overdue follow-ups
- **Renewal Reminders** — Subscription expiry alerts to clinicadmin

---

## 🛠️ Administration & System Management

### Superadmin Dashboard
- **Platform Overview** — Total clinics, users, patients, revenue
- **Clinic Management** — View/edit/delete clinics
- **Subscription Management** — Update subscription status, extend trials, change plans
- **Plugin Management** — Enable/disable plugins per clinic
- **Audit Logs** — Platform-wide audit viewer
- **Data Export** — Full database export (SQL/CSV)
- **Data Import** — Bulk import patients, investigations from CSV/Excel
- **Clinic Export/Import** — Per-clinic data export/import

### Clinic Admin Dashboard
- **Clinic Settings** — Name, address, phone, speciality, timezone, currency
- **Branch Management** — Create/edit/delete branches
- **User Management** — Add/edit/delete doctors, receptionists, branch admins
- **Subscription Status** — View plan, trial status, expiry date, grace period
- **Plugin Management** — View active plugins, upgrade plans
- **Billing Settings** — GST name, bill prefix, tax configuration
- **Expense Settings** — Approval workflows, auto-approve limits

### Branch Admin Dashboard
- **Branch Settings** — Branch timings, contact info
- **User Management** — Manage doctors and receptionists for own branch
- **Queue Management** — Open/close queue, manage tokens
- **Branch Reports** — Branch-specific KPIs, revenue, patient visits

### Doctor Dashboard
- **My Patients** — Scoped to own patients (primaryDoctorId)
- **Today's Schedule** — Appointments, queue tokens, pending investigations
- **Quick Actions** — Register patient, issue prescription, check in patient
- **Prescription Templates** — Manage saved prescription templates
- **Favourite Medicines** — Quick-access medicine list
- **E-Signature Upload** — Doctor signature for prescriptions (PNG/JPEG/WebP, max 2MB)
- **Password Change** — Change own password

### Receptionist Dashboard
- **Patient Registration** — Register new patients (demographic fields only)
- **Appointment Scheduling** — Book appointments for patients
- **Queue Management** — Issue tokens, advance token status
- **Patient Search** — Find patients by name/mobile/patient number
- **Billing Access** — Create bills, accept payments (if billing plugin active)
- **Medical Data Blocked** — Cannot read/write medical history, investigations, prescriptions

---

## 🔧 Technical Features

### Database & Storage
- **Prisma ORM** — Type-safe database access
- **MySQL** — Reliable relational database
- **Vercel Hosting** — Serverless deployment, 99.9% uptime
- **Vercel Blob Storage** — Logo, favicon, signatures, shared PDFs
- **Local Private Storage** — Investigation files in `storage/` directory
- **Signed URLs** — HMAC-SHA256 signed URLs for private file access
- **Daily Backups** — Automated database backups via cron
- **Backup Upload** — Optional POST to external backup endpoint

### API Architecture
- **RESTful API** — Pages Router API routes (`pages/api/`)
- **Session Middleware** — `getServerSession` on all authenticated routes
- **Tenant Scoping** — `buildPatientWhereAsync` for automatic data filtering
- **Plugin Guards** — `requirePlugin` middleware for plugin-gated features
- **Plan Limits** — `checkPlanLimit` middleware for resource cap enforcement
- **Subscription Guards** — Block write operations on expired subscriptions
- **Rate Limiting** — In-memory rate limiter on sensitive endpoints
- **Response Caching** — 5-minute in-process cache for analytics APIs

### Frontend
- **Chakra UI v2** — Modern, accessible component library
- **Framer Motion** — Smooth animations and transitions
- **Formik + Yup** — Form validation and management
- **React Context** — `AppContext`, `ThemeContext` for global state
- **React Icons** — Icon library (fa prefix)
- **react-helmet-async** — SEO meta tag management
- **React Router v6** — Client-side routing
- **localStorage** — View preferences, onboarding state
- **Toast Notifications** — Chakra `useToast` for user feedback

### Developer Experience
- **TypeScript-Ready** — Prisma types for full type safety
- **Code Conventions** — kebab-case APIs, PascalCase components, camelCase utils
- **Audit Logging** — `logAudit` utility for all mutations
- **Debug Logging** — `debugLog` utility (dev-only console logs)
- **No Console.log** — Clean production logs
- **Lean Queries** — Count aggregates instead of heavy includes
- **Indexed Searches** — Only indexed fields in search queries

---

## 📈 Data Import/Export

### CSV Import (Superadmin)
- **Patient Import** — Bulk import patients from CSV
- **Investigation Import** — Bulk import investigation records
- **Automatic Encryption** — Imported PHI automatically encrypted
- **Validation** — Pre-import data validation
- **Templates** — CSV templates for patient/investigation imports

### Excel Import/Export
- **Clinic Import** — Import full clinic dataset from Excel template
- **Clinic Export** — Export entire clinic data to Excel
- **Template Download** — Excel import template with all required columns

### Database Export (Superadmin)
- **SQL Export** — Full database dump in SQL format
- **CSV Export** — Per-table CSV exports
- **Secure Export** — Encrypted fields remain as ciphertext
- **Clinic Export** — Export single clinic data (SQL/Excel)

---

## 🌐 Multi-Language Support
- **English** — Primary language
- **Tamil** — Contact support
- **Hindi** — Contact support (planned)

---

## 📞 Support & Training

### Support Channels
- **Email Support** — contact@boolavas.in
- **Phone Support** — +91 86674 30536 (Mon-Sat, 9 AM - 7 PM IST)
- **WhatsApp Support** — Business queries and support
- **In-App Support** — Contact form, support tickets (planned)

### Training & Onboarding
- **Free Onboarding** — Personalized onboarding for all paid plans
- **Video Tutorials** — Step-by-step guides (planned)
- **User Manual** — Comprehensive documentation (planned)
- **Live Training** — Scheduled training sessions (enterprise)

---

## 🏆 Specialties Supported

- ✅ **Homeopathy** — Chief complaints, repertorization, miasmatic analysis
- ✅ **Siddha** — Traditional Siddha medicine workflows
- ✅ **Dental** — Dental procedures, imaging, treatment plans
- ✅ **Acupuncture** — Acupuncture points, treatment tracking
- ✅ **Gynaecology** — Menstrual history, antenatal investigations, obstetric records
- ✅ **General Practice** — Multi-speciality support

---

## 🚀 Roadmap (Coming Soon)

### Planned Features
- 📦 **Inventory Management** — Medicine stock, expiry tracking, supplier management
- 🧪 **Laboratory Module** — In-house lab with test catalogue, result entry
- 📅 **Online Appointments** — Patient self-scheduling, online booking portal
- 🎥 **Telemedicine** — Video consultation integration (Zoom, Google Meet)
- 📊 **Advanced Report Builder** — Custom report builder with drag-drop
- 🤖 **AI-Powered Insights** — Predictive analytics, treatment recommendations
- 📱 **Mobile App** — Native Android/iOS app for doctors (on-the-go access)
- 🌍 **Multi-Language UI** — Tamil, Hindi, Malayalam UI translations
- 💳 **Payment Gateway** — Razorpay, Stripe integration for online payments
- 📧 **Email Marketing** — Patient newsletters, health tips, appointment campaigns

---

## 📜 Compliance & Certifications

- 🛡️ **HIPAA-Ready** — Architecture supports HIPAA compliance
- 🔒 **Data Privacy** — GDPR-inspired data handling practices
- 🇮🇳 **GST Compliance** — GST-ready invoicing, GSTIN validation
- 📋 **ICD-10 Ready** — Diagnosis codes compatible with ICD-10
- 🏥 **Medical Practice Standards** — Follows best practices for EMR/EHR systems

---

**MediBoo by Boolavas** — Built for clinics that care about security, scale, and patient outcomes.

**Website:** [boolavas.in](https://boolavas.in)  
**Product:** [MediBoo Platform](https://mediboo-platform.vercel.app)  
**Email:** contact@boolavas.in  
**Phone:** +91 86674 30536
