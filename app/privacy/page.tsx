// app/privacy/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  FiShield, 
  FiLock, 
  FiEye, 
  FiServer, 
  FiMail, 
  FiPhone,
  FiCheckCircle,
  FiArrowRight,
  FiClock,
  FiGlobe,
  FiUserCheck,
  FiDatabase,
  FiFileText,
  FiAlertCircle
} from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Privacy Policy - Corporate Karyalay',
  description: 'Learn how Corporate Karyalay protects your privacy and handles your data. Read our comprehensive privacy policy to understand your rights.',
  keywords: 'privacy policy, data protection, GDPR compliance, information security, privacy rights, corporate karyalay privacy',
};

const sections = [
  {
    id: 'information-collection',
    icon: FiDatabase,
    title: '1. Information We Collect',
    content: [
      'We collect information that you provide directly to us when you:',
      '• Register for an account or create a profile',
      '• Submit a service request or inquiry',
      '• Fill out forms on our website',
      '• Communicate with us via email, phone, or chat',
      '• Subscribe to our newsletters or updates',
      '• Participate in surveys or promotions',
    ],
  },
  {
    id: 'information-usage',
    icon: FiEye,
    title: '2. How We Use Your Information',
    content: [
      'We use the information we collect to:',
      '• Provide, maintain, and improve our services',
      '• Process your service requests and transactions',
      '• Communicate with you about your account and services',
      '• Send you technical updates and security alerts',
      '• Respond to your comments and questions',
      '• Personalize your experience on our platform',
    ],
  },
  {
    id: 'information-sharing',
    icon: FiUserCheck,
    title: '3. Information Sharing',
    content: [
      'We may share your information in the following circumstances:',
      '• With service providers who assist us in delivering our services',
      '• With professional partners (CAs, CS, Advocates) to fulfill your service requests',
      '• When required by law or to protect rights and safety',
      '• With your consent or at your direction',
      '• In connection with a business transfer or merger',
    ],
  },
  {
    id: 'data-security',
    icon: FiLock,
    title: '4. Data Security',
    content: [
      'We implement appropriate technical and organizational measures to protect your data:',
      '• End-to-end encryption for data transmission',
      '• Secure data storage with industry-standard protocols',
      '• Regular security audits and vulnerability assessments',
      '• Access controls and authentication mechanisms',
      '• Regular employee training on data protection',
      '• Incident response and breach notification procedures',
    ],
  },
  {
    id: 'data-retention',
    icon: FiClock,
    title: '5. Data Retention',
    content: [
      'We retain your personal information for as long as necessary to:',
      '• Provide our services and fulfill your requests',
      '• Comply with legal and regulatory obligations',
      '• Resolve disputes and enforce agreements',
      '• Maintain records for accounting and tax purposes',
      '• Improve our services and user experience',
    ],
  },
  {
    id: 'your-rights',
    icon: FiShield,
    title: '6. Your Rights',
    content: [
      'You have the following rights regarding your personal information:',
      '• Access: Request a copy of your personal data',
      '• Correction: Update or correct your personal data',
      '• Deletion: Request deletion of your personal data',
      '• Restriction: Limit how we use your data',
      '• Portability: Receive your data in a portable format',
      '• Withdrawal: Withdraw consent at any time',
      '• Objection: Object to certain data processing',
      '• Complaint: Lodge a complaint with a supervisory authority',
    ],
  },
  {
    id: 'cookies',
    icon: FiServer,
    title: '7. Cookies & Tracking',
    content: [
      'We use cookies and similar tracking technologies to:',
      '• Remember your preferences and settings',
      '• Understand how you interact with our platform',
      '• Improve our services and user experience',
      '• Deliver relevant content and advertisements',
      '• Analyze traffic and user behavior',
      '• You can control cookie preferences in your browser settings',
    ],
  },
  {
    id: 'third-party',
    icon: FiGlobe,
    title: '8. Third-Party Services',
    content: [
      'Our platform may contain links to third-party services and integrations:',
      '• We are not responsible for the privacy practices of third parties',
      '• Review their privacy policies before using their services',
      '• We use trusted service providers for payment processing',
      '• Analytics services help us improve our platform',
      '• Social media integrations are subject to their privacy policies',
    ],
  },
  {
    id: 'children-privacy',
    icon: FiAlertCircle,
    title: '9. Children\'s Privacy',
    content: [
      'Our services are not directed to children under 18:',
      '• We do not knowingly collect information from children',
      '• If you believe a child has provided data, contact us immediately',
      '• We will take steps to remove such information promptly',
      '• Parents or guardians may request review and deletion of data',
    ],
  },
  {
    id: 'policy-changes',
    icon: FiFileText,
    title: '10. Changes to This Policy',
    content: [
      'We may update this privacy policy from time to time:',
      '• We will post changes on this page with a revised date',
      '• Significant changes will be communicated via email',
      '• Your continued use constitutes acceptance of changes',
      '• Review this policy periodically for updates',
    ],
  },
];

const contactInfo = {
  email: 'privacy@corporatekaryalay.in',
  phone: '+91 99846 49997',
  address: 'Corporate Karyalay, 123 Civil Lines, Prayagraj, Uttar Pradesh - 211001',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/10 rounded-full filter blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-gold-500/20 text-gold-300 rounded-full text-sm font-semibold mb-4 border border-gold-500/20">
              Privacy Policy
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Your Privacy <span className="text-gold-400">Matters</span>
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl">
              We are committed to protecting your personal information and being transparent 
              about how we collect, use, and safeguard your data.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/10">
                <FiLock className="w-4 h-4 text-gold-400" /> GDPR Compliant
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/10">
                <FiShield className="w-4 h-4 text-gold-400" /> Data Protection
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/10">
                <FiUserCheck className="w-4 h-4 text-gold-400" /> Your Rights
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="max-w-4xl mx-auto px-4 -mt-6 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl p-4 md:p-6 border border-gray-100">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <FiClock className="w-5 h-5 text-gold-500" />
              <span className="text-sm text-gray-600">
                <span className="font-medium">Last Updated:</span> August 20, 2026
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FiCheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm text-green-700 font-medium">Effective Immediately</span>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-gray-100">
          {/* Introduction */}
          <div className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
              Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Corporate Karyalay, we take your privacy seriously. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your personal information 
              when you use our platform and services.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By using our platform, you agree to the collection and use of information in 
              accordance with this policy. We are committed to protecting your privacy and 
              ensuring the security of your personal information.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gold-50 rounded-xl flex items-center justify-center mt-1">
                    <section.icon className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-primary-900 mb-3">
                      {section.title}
                    </h2>
                    <ul className="space-y-2 text-gray-600">
                      {section.content.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm leading-relaxed">
                          {item.startsWith('•') ? (
                            <span className="text-gold-500 font-bold mr-1">•</span>
                          ) : (
                            <span className="font-medium text-primary-700">{item}</span>
                          )}
                          <span>{item.startsWith('•') ? item.substring(1) : ''}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-10 pt-8 border-t border-gray-100">
            <h2 className="text-xl font-bold text-primary-900 mb-4">
              Contact Us About Privacy
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              If you have any questions, concerns, or requests regarding this privacy policy 
              or our data practices, please contact us:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <FiMail className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-sm text-primary-600 hover:text-gold-600 transition">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <FiPhone className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <a href={`tel:${contactInfo.phone}`} className="text-sm text-primary-600 hover:text-gold-600 transition">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-gray-50 rounded-xl">
              <div className="flex items-start gap-3">
                <FiShield className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500">Address</p>
                  <p className="text-sm text-gray-600">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-gray-100">
          <h3 className="text-lg font-bold text-primary-900 text-center mb-4">
            Related Policies
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link 
              href="/terms" 
              className="flex items-center justify-center gap-2 p-3 bg-gray-50 rounded-xl hover:bg-gold-50 transition group"
            >
              <FiFileText className="w-4 h-4 text-gold-500" />
              <span className="text-sm font-medium text-gray-700 group-hover:text-gold-600 transition">
                Terms of Service
              </span>
              <FiArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gold-500 transition group-hover:translate-x-1" />
            </Link>
            <Link 
              href="/cookies" 
              className="flex items-center justify-center gap-2 p-3 bg-gray-50 rounded-xl hover:bg-gold-50 transition group"
            >
              <FiServer className="w-4 h-4 text-gold-500" />
              <span className="text-sm font-medium text-gray-700 group-hover:text-gold-600 transition">
                Cookie Policy
              </span>
              <FiArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gold-500 transition group-hover:translate-x-1" />
            </Link>
            <Link 
              href="/contact" 
              className="flex items-center justify-center gap-2 p-3 bg-gray-50 rounded-xl hover:bg-gold-50 transition group"
            >
              <FiMail className="w-4 h-4 text-gold-500" />
              <span className="text-sm font-medium text-gray-700 group-hover:text-gold-600 transition">
                Contact Us
              </span>
              <FiArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gold-500 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl shadow-xl p-8 md:p-10 text-white text-center">
          <h3 className="text-2xl font-display font-bold mb-2">
            Have Privacy Concerns?
          </h3>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            We're here to answer your questions and address your concerns about privacy and data protection.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-gold-500 text-primary-900 font-semibold px-8 py-3 rounded-full hover:bg-gold-600 transition-all hover:scale-105 shadow-lg hover:shadow-gold-500/25"
            >
              Contact Privacy Team
              <FiArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-full hover:bg-white/20 transition"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}