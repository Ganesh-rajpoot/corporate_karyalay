// app/about/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  FiCheckCircle, 
  FiArrowRight, 
  FiUsers, 
  FiShield, 
  FiTrendingUp,
  FiAward,
  FiBriefcase,
  FiMapPin,
  FiClock,
  FiMail,
  FiPhone,
  FiStar,
  FiHeart,
  FiTarget,
  FiEye,
  FiGlobe,
  FiBookOpen,
  FiLayers,
  FiCalendar,
  FiUserCheck
} from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'About Us - Corporate कार्यालय | India\'s Leading Compliance Platform',
  description: 'Learn about Corporate कार्यालय - India\'s leading digital platform for tax, compliance, and professional services. Trusted by 1000+ businesses across India.',
  keywords: 'about corporate कार्यालय, compliance platform, tax services, legal services, corporate compliance, professional services India',
  openGraph: {
    title: 'About Us - Corporate कार्यालय',
    description: 'India\'s leading digital platform for tax, compliance, and professional services. Trusted by 1000+ businesses.',
    type: 'website',
    url: 'https://corporatekaryalay.com/about',
  },
};

const values = [
  {
    icon: FiTarget,
    title: 'Purpose-Driven',
    description: 'We exist to simplify compliance and make professional services accessible to every business in India.',
  },
  {
    icon: FiShield,
    title: 'Trust & Integrity',
    description: 'We operate with complete transparency, honesty, and integrity in everything we do.',
  },
  {
    icon: FiUsers,
    title: 'Client First',
    description: 'Your success is our success. We go above and beyond to deliver exceptional value.',
  },
  {
    icon: FiTrendingUp,
    title: 'Continuous Improvement',
    description: 'We constantly evolve our processes and technology to serve you better.',
  },
];

const teamMembers = [
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Founder & CEO',
    qualification: 'PhD in Corporate Law',
    experience: '25+ Years',
    icon: '👨‍⚖️',
  },
  {
    name: 'CA Priya Sharma',
    role: 'Head - Taxation',
    qualification: 'Chartered Accountant',
    experience: '18+ Years',
    icon: '📊',
  },
  {
    name: 'CS Amit Patel',
    role: 'Head - Compliance',
    qualification: 'Company Secretary',
    experience: '15+ Years',
    icon: '📋',
  },
  {
    name: 'Adv. Sneha Reddy',
    role: 'Head - Legal',
    qualification: 'Advocate, LL.M.',
    experience: '12+ Years',
    icon: '⚖️',
  },
];

const milestones = [
  {
    year: '2020',
    title: 'Platform Launched',
    description: 'Corporate कार्यालय was founded with a vision to simplify compliance.',
    icon: '🚀',
  },
  {
    year: '2021',
    title: '100+ Clients Served',
    description: 'Reached 100+ satisfied clients across 10+ industries.',
    icon: '🎯',
  },
  {
    year: '2022',
    title: 'Pan-India Presence',
    description: 'Expanded operations to 4 major cities across India.',
    icon: '🇮🇳',
  },
  {
    year: '2023',
    title: '500+ Clients Milestone',
    description: 'Served 500+ businesses with 100% satisfaction rate.',
    icon: '⭐',
  },
  {
    year: '2024',
    title: '1000+ Trusted Partners',
    description: 'Reached 1000+ businesses and professionals across India.',
    icon: '🏆',
  },
];

const stats = [
  { number: '1000+', label: 'Happy Clients', icon: FiUsers },
  { number: '66+', label: 'Professional Services', icon: FiLayers },
  { number: '8', label: 'Practice Categories', icon: FiBriefcase },
  { number: '4', label: 'Office Locations', icon: FiMapPin },
];

const testimonials = [
  {
    quote: 'Corporate कार्यालय made our GST registration so smooth. Their team is professional and responsive. Highly recommended!',
    name: 'Mr. Suresh Mehta',
    company: 'Mehta Enterprises',
    rating: 5,
  },
  {
    quote: 'The ITR filing service was excellent. They saved us significant tax through proper planning and filing.',
    name: 'Ms. Neha Gupta',
    company: 'Gupta & Associates',
    rating: 5,
  },
  {
    quote: 'Professional, reliable, and always available. Corporate कार्यालय has been our compliance partner for 2 years now.',
    name: 'Mr. Vikram Singh',
    company: 'Singh Trading Co.',
    rating: 5,
  },
];

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Your Trusted <span className="text-gold-400">Compliance Partner</span>
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl">
              We are India's leading digital platform for tax, compliance, and professional services. 
              Trusted by 1000+ businesses across the country.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/10">
                🇮🇳 Pan-India Presence
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/10">
                ✓ 1000+ Happy Clients
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/10">
                ✓ 66+ Services
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gold-50 rounded-xl mb-3">
                  <stat.icon className="w-6 h-6 text-gold-500" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary-900">{stat.number}</div>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1 bg-gold-50 text-gold-600 rounded-full text-sm font-semibold mb-4">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-4">
              Building <span className="text-gold-500">Trust</span> Through Excellence
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Corporate कार्यालय was founded with a simple yet powerful vision: 
                to simplify compliance and make professional services accessible to 
                every business in India. What started as a small initiative has now 
                grown into a trusted platform serving 1000+ businesses across the country.
              </p>
              <p>
                We believe that every business deserves access to high-quality tax, 
                compliance, and legal services without the complexity and opacity that 
                often comes with traditional service providers.
              </p>
              <p>
                Our team of qualified Chartered Accountants, Company Secretaries, and 
                Advocates work together to deliver exceptional value to our clients, 
                combining deep expertise with a commitment to transparency and excellence.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <Link 
                href="/services" 
                className="inline-flex items-center gap-2 bg-gold-500 text-primary-900 font-semibold px-6 py-3 rounded-xl hover:bg-gold-600 transition-all hover:scale-105"
              >
                Explore Our Services
                <FiArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 border-2 border-gray-200 text-primary-700 font-semibold px-6 py-3 rounded-xl hover:border-gold-500 hover:text-gold-600 transition"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-6 text-white">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold text-lg">Our Mission</h3>
              <p className="text-white/70 text-sm mt-1">
                To simplify compliance and make professional services accessible to every business.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gold-500 to-gold-600 rounded-3xl p-6 text-primary-900">
              <div className="text-4xl mb-3">👁️</div>
              <h3 className="font-bold text-lg">Our Vision</h3>
              <p className="text-primary-900/70 text-sm mt-1">
                To be India's most trusted digital platform for professional services.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-6 text-white col-span-2">
              <div className="text-4xl mb-3">💎</div>
              <h3 className="font-bold text-lg">Our Promise</h3>
              <p className="text-white/70 text-sm mt-1">
                Transparency, quality, and exceptional service – guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-gold-50 text-gold-600 rounded-full text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900">
              What We <span className="text-gold-500">Stand For</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              These core values guide everything we do and how we serve our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="group bg-gray-50 rounded-2xl p-6 hover:bg-gold-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-14 h-14 bg-gold-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold-200 transition">
                  <value.icon className="w-7 h-7 text-gold-600" />
                </div>
                <h3 className="font-bold text-primary-900 text-lg mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-gold-50 text-gold-600 rounded-full text-sm font-semibold mb-4">
              Leadership Team
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900">
              Meet Our <span className="text-gold-500">Experts</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Our team of qualified professionals brings decades of collective experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-xl hover:border-gold-200/50 transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{member.icon}</div>
                <h3 className="font-bold text-primary-900 text-lg">{member.name}</h3>
                <p className="text-gold-600 text-sm font-medium">{member.role}</p>
                <div className="mt-3 pt-3 border-t border-gray-100 space-y-1">
                  <p className="text-xs text-gray-500">{member.qualification}</p>
                  <p className="text-xs text-gray-400">Experience: {member.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-gold-50 text-gold-600 rounded-full text-sm font-semibold mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900">
              Milestones & <span className="text-gold-500">Achievements</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              A glimpse of our journey and the milestones we've achieved along the way.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gold-200 hidden md:block" />
            
            <div className="space-y-8 md:space-y-0">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gold-500 rounded-full border-4 border-white shadow-md hidden md:block z-10" />
                  
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12'}`}>
                    <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gold-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl">{milestone.icon}</span>
                        <span className="text-sm font-bold text-gold-600">{milestone.year}</span>
                      </div>
                      <h3 className="font-bold text-primary-900 text-lg">{milestone.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:block w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-gold-50 text-gold-600 rounded-full text-sm font-semibold mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900">
              What Our <span className="text-gold-500">Clients Say</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Real stories from real clients who trust Corporate कार्यालय.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-1 text-gold-500 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 fill-gold-500" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="font-bold text-primary-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-gold-500/20 text-gold-300 rounded-full text-sm font-semibold mb-4 border border-gold-500/20">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Why <span className="text-gold-400">Corporate कार्यालय</span>
            </h2>
            <p className="text-white/70 mt-3 max-w-2xl mx-auto">
              We combine expertise with technology to deliver exceptional service.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-gold-500/20 rounded-xl flex items-center justify-center mb-4">
                <FiUserCheck className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="font-bold text-lg">Qualified Experts</h3>
              <p className="text-white/60 text-sm mt-1">CA, CS & Advocates with years of experience</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-gold-500/20 rounded-xl flex items-center justify-center mb-4">
                <FiShield className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="font-bold text-lg">100% Transparency</h3>
              <p className="text-white/60 text-sm mt-1">No hidden charges, clear pricing always</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-gold-500/20 rounded-xl flex items-center justify-center mb-4">
                <FiGlobe className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="font-bold text-lg">Pan-India Coverage</h3>
              <p className="text-white/60 text-sm mt-1">Serving clients across India</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-gold-500/20 rounded-xl flex items-center justify-center mb-4">
                <FiTrendingUp className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="font-bold text-lg">Digital-First</h3>
              <p className="text-white/60 text-sm mt-1">Modern, online-first service delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-900">
                Ready to Work <span className="text-gold-500">With Us?</span>
              </h2>
              <p className="text-gray-500 mt-2">
                Let's start your compliance journey today. Our team is here to help.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-gold-500 text-primary-900 font-semibold px-6 py-3 rounded-xl hover:bg-gold-600 transition-all hover:scale-105"
                >
                  Contact Us
                  <FiArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/estimate" 
                  className="inline-flex items-center gap-2 border-2 border-gray-200 text-primary-700 font-semibold px-6 py-3 rounded-xl hover:border-gold-500 hover:text-gold-600 transition"
                >
                  Get Free Estimate
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 justify-center md:justify-end">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-500">1000+</div>
                <p className="text-xs text-gray-500">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-500">66+</div>
                <p className="text-xs text-gray-500">Services</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-500">99%</div>
                <p className="text-xs text-gray-500">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}