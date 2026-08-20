// app/cookies/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  FiServer, 
  FiShield, 
  FiSettings, 
  FiCheckCircle,
  FiArrowRight,
  FiClock,
  FiMail,
  FiPhone
} from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Cookie Policy - Corporate Karyalay',
  description: 'Learn how Corporate Karyalay uses cookies to enhance your browsing experience and improve our services.',
  keywords: 'cookie policy, cookies, data tracking, privacy, corporate karyalay cookies',
};

const cookieTypes = [
  {
    type: 'Essential Cookies',
    icon: FiShield,
    description: 'Required for the website to function properly. These cannot be disabled.',
    examples: ['Session management', 'Security authentication', 'Load balancing'],
  },
  {
    type: 'Analytics Cookies',
    icon: FiServer,
    description: 'Help us understand how visitors interact with our website and improve user experience.',
    examples: ['Page view tracking', 'User behavior analysis', 'Performance monitoring'],
  },
  {
    type: 'Preference Cookies',
    icon: FiSettings,
    description: 'Remember your choices and preferences for a personalized experience.',
    examples: ['Language preferences', 'Theme settings', 'Saved preferences'],
  },
  {
    type: 'Marketing Cookies',
    icon: FiCheckCircle,
    description: 'Used to deliver relevant advertisements and track campaign effectiveness.',
    examples: ['Ad personalization', 'Campaign tracking', 'Retargeting'],
  },
];

export default function CookiesPage() {
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
              Cookie Policy
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Our <span className="text-gold-400">Cookie Policy</span>
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl">
              We use cookies to enhance your experience on our platform. This policy explains 
              how we use cookies and how you can control them.
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-gray-100">
          {/* Introduction */}
          <div className="mb-8 pb-6 border-b border-gray-100">
            <h2 className="text-xl font-display font-bold text-primary-900 mb-3">
              What Are Cookies?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Cookies are small text files placed on your device when you visit a website. 
              They help us provide you with a better experience by remembering your preferences 
              and understanding how you use our platform.
            </p>
          </div>

          {/* Cookie Types */}
          <div className="mb-8 pb-6 border-b border-gray-100">
            <h2 className="text-xl font-display font-bold text-primary-900 mb-4">
              How We Use Cookies
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {cookieTypes.map((cookie, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-xl hover:bg-gold-50 transition">
                  <div className="flex items-center gap-3 mb-2">
                    <cookie.icon className="w-5 h-5 text-gold-500" />
                    <h3 className="font-bold text-primary-900 text-sm">{cookie.type}</h3>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed mb-2">{cookie.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {cookie.examples.map((example, idx) => (
                      <span key={idx} className="text-[0.6rem] bg-white px-2 py-0.5 rounded-full text-gray-500 border border-gray-200">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Control Cookies */}
          <div className="mb-8 pb-6 border-b border-gray-100">
            <h2 className="text-xl font-display font-bold text-primary-900 mb-3">
              How to Control Cookies
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              You can manage or disable cookies through your browser settings. Please note 
              that disabling certain cookies may affect your experience on our platform.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600">Chrome: Settings → Privacy → Cookies</span>
              <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600">Firefox: Options → Privacy & Security</span>
              <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600">Safari: Preferences → Privacy</span>
              <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600">Edge: Settings → Cookies & Site Permissions</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-display font-bold text-primary-900 mb-3">
              Questions About Cookies?
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              If you have any questions about our use of cookies, please contact us:
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <FiMail className="w-4 h-4 text-gold-500" />
                <a href="mailto:privacy@corporatekaryalay.in" className="text-sm text-primary-600 hover:text-gold-600 transition">
                  privacy@corporatekaryalay.in
                </a>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <FiPhone className="w-4 h-4 text-gold-500" />
                <a href="tel:+91998449997" className="text-sm text-primary-600 hover:text-gold-600 transition">
                  +91 99846 49997
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
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
              href="/terms" 
              className="flex items-center justify-center gap-2 p-3 bg-gray-50 rounded-xl hover:bg-gold-50 transition group"
            >
              <FiCheckCircle className="w-4 h-4 text-gold-500" />
              <span className="text-sm font-medium text-gray-700 group-hover:text-gold-600 transition">
                Terms of Service
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
    </div>
  );
}