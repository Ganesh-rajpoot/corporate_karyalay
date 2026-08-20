// app/components/FinalCTA.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiCheckCircle, FiShield, FiClock, FiUsers } from 'react-icons/fi';

const features = [
  { icon: FiCheckCircle, text: '100% Online Process' },
  { icon: FiShield, text: 'Data Security Guaranteed' },
  { icon: FiClock, text: 'Quick Turnaround' },
  { icon: FiUsers, text: 'Expert Team Support' },
];

export function FinalCTA() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-16 md:py-20 px-4 overflow-hidden"
    >
      {/* Animated Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/5 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '-6s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="inline-block mb-6"
        >
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 text-sm font-medium text-white/90">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Trusted by 1000+ Businesses
          </span>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">
            Ready to Simplify <br />
            <span className="text-gold-400">Compliance?</span>
          </h2>
          
          <p className="text-white/70 max-w-lg mx-auto mt-4 text-base md:text-lg leading-relaxed">
            Join thousands of businesses that trust Corporate Karyalay for their tax, 
            compliance, and legal needs.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-8 max-w-2xl mx-auto"
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm rounded-xl px-3 py-2.5 border border-white/5 hover:bg-white/10 transition-colors duration-300"
            >
              <feature.icon className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <span className="text-xs md:text-sm font-medium text-white/80">
                {feature.text}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
        >
          <Link 
            href="/estimate" 
            className="group bg-gold-500 text-primary-900 font-semibold inline-flex items-center gap-2 px-10 py-4 rounded-full hover:bg-gold-600 transition-all hover:scale-105 shadow-lg hover:shadow-gold-500/25 text-base"
          >
            Get Free Estimate
            <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            href="/services" 
            className="group bg-white/10 backdrop-blur-sm text-white font-medium inline-flex items-center gap-2 px-8 py-4 rounded-full hover:bg-white/20 transition-all border border-white/20 hover:border-white/40"
          >
            Browse Services
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 md:gap-8 mt-8 pt-6 border-t border-white/10"
        >
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <span className="text-green-400">✓</span>
            No hidden charges
          </div>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <span className="text-green-400">✓</span>
            Qualified professionals
          </div>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <span className="text-green-400">✓</span>
            Pan-India coverage
          </div>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <span className="text-green-400">✓</span>
            24/7 support
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}