// app/estimate/EstimateClient.tsx (Client Component)
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  FiCheckCircle, 
  FiClock, 
  FiDollarSign, 
  FiUsers, 
  FiShield,
  FiArrowRight,
  FiSend,
  FiUser,
  FiPhone,
  FiMail,
  FiFileText,
  FiMessageSquare,
  FiTrendingUp,
  FiAward,
  FiAlertCircle
} from 'react-icons/fi';

const pricingTiers = [
  {
    category: 'Taxation',
    services: [
      { name: 'ITR Filing (Salaried)', price: '₹499' },
      { name: 'ITR Filing (Business)', price: '₹1,499' },
      { name: 'GST Return Filing', price: '₹999' },
      { name: 'TDS Return Filing', price: '₹1,499' },
    ]
  },
  {
    category: 'Registration',
    services: [
      { name: 'GST Registration', price: '₹2,999' },
      { name: 'MSME / Udyam Registration', price: 'Free' },
      { name: 'Trademark Registration', price: '₹4,999' },
      { name: 'Company Incorporation', price: '₹6,999' },
    ]
  },
  {
    category: 'Compliance',
    services: [
      { name: 'ROC Annual Filing', price: '₹3,999' },
      { name: 'Statutory Audit', price: '₹4,500' },
      { name: 'Internal Audit', price: '₹3,500' },
      { name: 'Annual Compliance (Pvt Ltd)', price: '₹5,999' },
    ]
  },
];

const features = [
  {
    icon: FiUsers,
    title: 'Qualified Professionals',
    description: 'Handled by CAs, CS & advocates',
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  {
    icon: FiDollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden charges, ever',
    color: 'text-gold-500',
    bg: 'bg-gold-50'
  },
  {
    icon: FiClock,
    title: 'Quick Response',
    description: 'Callback within one working day',
    color: 'text-green-500',
    bg: 'bg-green-50'
  },
  {
    icon: FiShield,
    title: 'Data Security',
    description: 'Your information is safe with us',
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  },
];

export default function EstimateClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    services: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage('');

    try {
      const response = await fetch('https://corporate-api.corporatekaryala-api.workers.dev/api/estimates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          services: formData.services,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }

      // Success
      setIsSubmitted(true);
      setSuccessMessage('Thank you for your request! We will get back to you with a fixed quote within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        services: '',
        message: '',
      });

      setTimeout(() => {
        setIsSubmitted(false);
        setSuccessMessage('');
      }, 5000);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit estimate request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

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
              Get Started
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Get a Quick <span className="text-gold-400">Estimate</span> in Minutes
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl">
              Tell us what you need and a qualified professional will call you back 
              with a clear, fixed quote. Most filings start from 
              <span className="text-gold-400 font-semibold"> ₹499–₹2,999</span> + government fees.
            </p>
          </div>
        </div>
      </section>

      {/* Estimate Form Section */}
      <section className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-xl p-6 md:p-8">
            <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
              Tell Us About Your <span className="text-gold-500">Requirement</span>
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Fill out the form below and we'll get back to you with a fixed quote.
            </p>

            {/* Success Message */}
            {successMessage && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
                <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-green-700 font-medium">Success!</p>
                  <p className="text-green-600 text-sm">{successMessage}</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                <FiAlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-700 font-medium">Error</p>
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
                      required
                      disabled={isLoading || isSubmitted}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 99846 49997"
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
                      required
                      disabled={isLoading || isSubmitted}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
                    required
                    disabled={isLoading || isSubmitted}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Service Required <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FiFileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    name="services"
                    value={formData.services}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
                    required
                    disabled={isLoading || isSubmitted}
                  >
                    <option value="">Select a service...</option>
                    <optgroup label="Taxation">
                      <option value="ITR Filing (Salaried)">ITR Filing (Salaried)</option>
                      <option value="ITR Filing (Business)">ITR Filing (Business)</option>
                      <option value="GST Return Filing">GST Return Filing</option>
                      <option value="TDS Return Filing">TDS Return Filing</option>
                    </optgroup>
                    <optgroup label="Registration">
                      <option value="GST Registration">GST Registration</option>
                      <option value="MSME / Udyam Registration">MSME / Udyam Registration</option>
                      <option value="Trademark Registration">Trademark Registration</option>
                      <option value="Company Incorporation">Company Incorporation</option>
                    </optgroup>
                    <optgroup label="Compliance">
                      <option value="ROC Annual Filing">ROC Annual Filing</option>
                      <option value="Statutory Audit">Statutory Audit</option>
                      <option value="Internal Audit">Internal Audit</option>
                      <option value="Annual Compliance (Pvt Ltd)">Annual Compliance (Pvt Ltd)</option>
                    </optgroup>
                    <optgroup label="Legal">
                      <option value="Legal Consultation">Legal Consultation</option>
                      <option value="Legal Documentation">Legal Documentation</option>
                      <option value="Contract Drafting">Contract Drafting</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Additional Details
                </label>
                <div className="relative">
                  <FiMessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us more about your requirement..."
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition resize-y disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isLoading || isSubmitted}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading || isSubmitted}
                className="w-full bg-gold-500 text-primary-900 font-semibold py-3.5 rounded-xl hover:bg-gold-600 transition-all hover:scale-[1.02] shadow-lg hover:shadow-gold-500/25 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-primary-900 border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : isSubmitted ? (
                  <>
                    <FiCheckCircle className="w-5 h-5" />
                    Submitted Successfully!
                  </>
                ) : (
                  <>
                    <FiSend className="w-5 h-5" />
                    Get My Free Estimate
                  </>
                )}
              </button>

              <div className="flex flex-wrap gap-3 justify-center text-xs text-gray-500">
                <span className="flex items-center gap-1">✅ Handled by CAs/CS/Advocates</span>
                <span className="flex items-center gap-1">💰 No hidden charges</span>
                <span className="flex items-center gap-1">📞 Callback within 1 working day</span>
              </div>

              <p className="text-xs text-gray-400 text-center">
                🔒 Your data is safe. No spam ever. By submitting you agree to our Privacy Policy.
              </p>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-4">
            {/* Features */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h3 className="font-bold text-primary-900 text-lg mb-4">Why Choose Us</h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl hover:shadow-md transition group">
                    <div className={`w-10 h-10 ${feature.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <feature.icon className={`w-5 h-5 ${feature.color}`} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary-900">{feature.title}</p>
                      <p className="text-xs text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Preview */}
            <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl shadow-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-3">Pricing Preview</h3>
              <p className="text-white/70 text-sm mb-4">
                Most services start from these price ranges:
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                  <span className="text-white/70">GST Registration</span>
                  <span className="text-gold-400 font-semibold">₹2,999</span>
                </div>
                <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                  <span className="text-white/70">ITR Filing</span>
                  <span className="text-gold-400 font-semibold">₹1,499</span>
                </div>
                <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                  <span className="text-white/70">Company Incorporation</span>
                  <span className="text-gold-400 font-semibold">₹6,999</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">ROC Compliance</span>
                  <span className="text-gold-400 font-semibold">₹3,999</span>
                </div>
              </div>
              <p className="text-xs text-white/40 mt-3">
                * Government fees and third-party charges are additional
              </p>
            </div>

            {/* Quick Contact */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h3 className="font-bold text-primary-900 text-sm mb-2">Prefer to Call?</h3>
              <a href="tel:+919984649997" className="text-xl font-bold text-gold-500 hover:text-gold-600 transition block">
                +91 99846 49997
              </a>
              <p className="text-xs text-gray-400 mt-1">Mon–Sat, 10am–7pm IST</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Details Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-900 text-center mb-2">
          Transparent <span className="text-gold-500">Pricing</span>
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Here's what you can expect for our most popular services
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-r from-primary-800 to-primary-700 px-6 py-4">
                <h3 className="text-white font-bold text-lg">{tier.category}</h3>
              </div>
              <div className="p-6 space-y-3">
                {tier.services.map((service, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-sm text-gray-600">{service.name}</span>
                    <span className={`font-bold text-sm ${service.price === 'Free' ? 'text-green-500' : 'text-gold-500'}`}>
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          * Prices are professional fees excluding government fees, stamp duty, and third-party charges
        </p>
      </section>

      {/* Trust Section */}
      <section className="max-w-7xl mx-auto px-4 py-8 pb-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gold-50 rounded-2xl mb-3">
                <FiTrendingUp className="w-7 h-7 text-gold-500" />
              </div>
              <h4 className="font-bold text-primary-900 text-lg">66+</h4>
              <p className="text-sm text-gray-500">Services in Catalog</p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gold-50 rounded-2xl mb-3">
                <FiAward className="w-7 h-7 text-gold-500" />
              </div>
              <h4 className="font-bold text-primary-900 text-lg">8</h4>
              <p className="text-sm text-gray-500">Practice Categories</p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gold-50 rounded-2xl mb-3">
                <FiUsers className="w-7 h-7 text-gold-500" />
              </div>
              <h4 className="font-bold text-primary-900 text-lg">1000+</h4>
              <p className="text-sm text-gray-500">Happy Businesses</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}