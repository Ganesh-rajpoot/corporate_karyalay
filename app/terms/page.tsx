// app/terms/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { FaBalanceScale } from 'react-icons/fa';
import { 
  FiFileText, 
  FiShield, 
  FiLock, 
  FiUserCheck, 
  FiAlertCircle,
  FiCheckCircle,
  FiArrowRight,
  FiClock,
  FiGlobe,
  FiServer,
  FiBookOpen,
  FiMail,
  FiPhone,
  FiAward
} from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Terms of Service - Corporate Karyalay',
  description: 'Read the Terms of Service for Corporate Karyalay. Understand the terms and conditions governing your use of our platform and services.',
  keywords: 'terms of service, terms and conditions, legal terms, service agreement, corporate karyalay terms',
};

const sections = [
  {
    id: 'acceptance',
    icon: FiCheckCircle,
    title: '1. Acceptance of Terms',
    content: [
      'By using the Corporate Karyalay platform, you agree to be bound by these Terms of Service.',
      'If you do not agree with any part of these terms, please do not use our services.',
      'We reserve the right to update these terms at any time. Continued use constitutes acceptance.',
      'These terms apply to all users, including visitors, clients, and professionals.',
    ],
  },
  {
    id: 'services',
    icon: FiFileText,
    title: '2. Description of Services',
    content: [
      'Corporate Karyalay provides a digital platform for tax, compliance, and professional services.',
      'Our services include but are not limited to:',
      '• GST registration and filing',
      '• Income tax return (ITR) filing',
      '• Company incorporation and registration',
      '• ROC compliance and filings',
      '• Legal documentation and consultation',
      '• Audit and accounting services',
      '• Professional advisory services',
    ],
  },
  {
    id: 'user-obligations',
    icon: FiUserCheck,
    title: '3. User Obligations',
    content: [
      'As a user of our platform, you agree to:',
      '• Provide accurate and complete information',
      '• Keep your account credentials secure',
      '• Notify us of any unauthorized use of your account',
      '• Comply with all applicable laws and regulations',
      '• Not misuse or abuse our services',
      '• Respect the intellectual property rights of others',
      '• Use the platform in good faith and for legitimate purposes',
    ],
  },
  {
    id: 'professional-services',
    icon: FiAward,
    title: '4. Professional Services Disclaimer',
    content: [
      'Corporate Karyalay is a technology platform that connects users with professionals.',
      'Professional services are provided by independent CAs, CS, and Advocates.',
      'We are not a law firm and do not practice law.',
      'Professionals remain accountable to their respective regulatory bodies.',
      'Professional advice is provided after review of your specific circumstances.',
      'Service outcomes depend on various factors beyond our control.',
    ],
  },
  {
    id: 'fees-payments',
    icon: FiLock,
    title: '5. Fees and Payments',
    content: [
      'Service fees are quoted and confirmed before work begins.',
      'Government fees, stamp duty, and third-party charges are additional.',
      'Payment terms are communicated at the time of service confirmation.',
      'Refunds are processed according to our refund policy.',
      'All fees are in Indian Rupees (INR) unless otherwise specified.',
      'We reserve the right to update our pricing at any time.',
    ],
  },
  {
    id: 'intellectual-property',
    icon: FiBookOpen,
    title: '6. Intellectual Property',
    content: [
      'All content on this platform is the property of Corporate Karyalay.',
      'This includes text, graphics, logos, icons, images, and software.',
      'You may not reproduce, distribute, or create derivative works without permission.',
      'You retain ownership of documents and information you provide.',
      'We grant you a limited license to access and use our platform.',
      'Unauthorized use of our intellectual property is prohibited.',
    ],
  },
  {
    id: 'data-privacy',
    icon: FiShield,
    title: '7. Data Privacy and Security',
    content: [
      'We are committed to protecting your personal information.',
      'Our Privacy Policy governs the collection and use of your data.',
      'We implement appropriate security measures to protect your information.',
      'Your data is stored securely and accessed only when necessary.',
      'We do not share your data without consent except as required by law.',
      'You have rights regarding your personal data under applicable laws.',
    ],
  },
  {
    id: 'limitation-liability',
    icon: FiAlertCircle,
    title: '8. Limitation of Liability',
    content: [
      'Corporate Karyalay provides services "as is" and "as available."',
      'We are not liable for any indirect, incidental, or consequential damages.',
      'Our liability is limited to the amount paid for the specific service.',
      'We do not guarantee specific outcomes or results.',
      'We are not responsible for delays caused by third parties or authorities.',
      'Users assume full responsibility for their decisions and actions.',
    ],
  },
  {
    id: 'indemnification',
    icon: FiServer,
    title: '9. Indemnification',
    content: [
      'You agree to indemnify and hold Corporate Karyalay harmless from:',
      '• Any claims arising from your use of the platform',
      '• Violation of these terms by you or your representatives',
      '• Infringement of third-party rights by your actions',
      '• Any content you submit to the platform',
      '• Any loss or damage caused by your negligence',
    ],
  },
  {
    id: 'termination',
    icon: FiClock,
    title: '10. Termination',
    content: [
      'We may terminate or suspend your account at any time without notice if:',
      '• You violate these terms of service',
      '• You engage in fraudulent or illegal activities',
      '• You misuse or abuse our services',
      '• We decide to discontinue our services',
      '• We are required to do so by law',
      'You may terminate your account at any time by contacting us.',
    ],
  },
  {
    id: 'governing-law',
    icon: FiGlobe,
    title: '11. Governing Law',
    content: [
      'These terms are governed by the laws of India.',
      'Any disputes shall be subject to the exclusive jurisdiction of courts in Prayagraj.',
      'We make no representation that our services comply with laws outside India.',
      'International users are responsible for compliance with local laws.',
      'Any legal proceeding must be brought within one year of the claim arising.',
    ],
  },
  {
    id: 'changes',
    icon: FiFileText,
    title: '12. Changes to Terms',
    content: [
      'We may update these terms from time to time.',
      'We will post changes on this page with a revised date.',
      'Significant changes will be communicated via email.',
      'Your continued use constitutes acceptance of the updated terms.',
      'It is your responsibility to review these terms periodically.',
      'The most current version will always be available on this page.',
    ],
  },
];

const contactInfo = {
  email: 'legal@corporatekaryalay.in',
  phone: '+91 99846 49997',
  address: 'Corporate Karyalay, 123 Civil Lines, Prayagraj, Uttar Pradesh - 211001',
};

export default function TermsPage() {
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
              Terms of Service
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Our <span className="text-gold-400">Terms & Conditions</span>
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl">
              Please read these terms carefully before using our platform. By using our services, 
              you agree to be bound by these terms and conditions.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/10">
                <FiCheckCircle className="w-4 h-4 text-gold-400" /> Legally Compliant
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/10">
                <FiShield className="w-4 h-4 text-gold-400" /> Fair & Transparent
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/10">
                <FiUserCheck className="w-4 h-4 text-gold-400" /> User Rights
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

      {/* Terms Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-gray-100">
          {/* Introduction */}
          <div className="mb-10 pb-8 border-b border-gray-100">
            <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
              Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Welcome to Corporate Karyalay. These Terms of Service ("Terms") govern your use 
              of our website, platform, and services. By accessing or using our services, you 
              agree to comply with and be bound by these Terms.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Please read these Terms carefully before using our platform. If you do not agree 
              to these Terms, please do not use our services. We reserve the right to update 
              these Terms at any time, and your continued use constitutes acceptance of the 
              updated Terms.
            </p>
          </div>

          {/* Terms Sections */}
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
              Questions About These Terms?
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              If you have any questions, concerns, or requests regarding these Terms of Service, 
              please contact our legal team:
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
              href="/privacy" 
              className="flex items-center justify-center gap-2 p-3 bg-gray-50 rounded-xl hover:bg-gold-50 transition group"
            >
              <FiShield className="w-4 h-4 text-gold-500" />
              <span className="text-sm font-medium text-gray-700 group-hover:text-gold-600 transition">
                Privacy Policy
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
            Have Questions About Our Terms?
          </h3>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            We're here to clarify any questions you have about our terms of service.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-gold-500 text-primary-900 font-semibold px-8 py-3 rounded-full hover:bg-gold-600 transition-all hover:scale-105 shadow-lg hover:shadow-gold-500/25"
            >
              Contact Legal Team
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