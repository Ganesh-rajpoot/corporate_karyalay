// app/components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiPhone, FiMessageCircle } from 'react-icons/fi';

const services = [
  { icon: '🧾', title: 'GST Registration', price: 'from ₹2,999' },
  { icon: '📊', title: 'ITR Filing', price: 'from ₹1,499' },
  { icon: '🏢', title: 'Company Incorporation', price: 'from ₹6,999' },
  { icon: '📋', title: 'Statutory Audit', price: 'from ₹4,500' },
];

export function Hero() {
  return (
    <section className="bg-primary-900 text-white pt-12 pb-16 md:pt-20 md:pb-24 px-4 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 z-10"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Corporate Compliance & <span className="text-gold-500">Tax Help.</span> Simplified.
          </h1>
          <p className="text-gold-400 text-lg md:text-xl font-display italic">
            Your trusted digital office for GST, ITR, Company Law & Professional Services
          </p>
          <p className="text-white/70 max-w-lg text-base leading-relaxed">
            Access information, submit requests, and track tax, compliance, and legal workflows through one secure platform. Handled by qualified CAs, CS & Advocates.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center pt-2">
            <Link 
              href="/estimate" 
              className="bg-gold-500 text-primary-900 font-semibold px-8 py-3.5 rounded-full inline-flex items-center gap-2 hover:bg-gold-600 transition-all hover:scale-105 shadow-lg hover:shadow-gold-500/25"
            >
              Get Free Estimate →
            </Link>
            <Link 
              href="tel:+919984649997" 
              className="text-white/80 border border-white/20 px-5 py-3 rounded-full text-sm hover:bg-white/5 transition flex items-center gap-2 hover:border-white/40"
            >
              <FiPhone className="text-gold-400" /> Call
            </Link>
            <Link 
              href="https://wa.me/919984649997" 
              className="text-white/80 border border-white/20 px-5 py-3 rounded-full text-sm hover:bg-white/5 transition flex items-center gap-2 hover:border-white/40"
            >
              <FiMessageCircle className="text-gold-400" /> WhatsApp
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 pt-3">
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm border border-white/10">
              ✅ 100% Online
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm border border-white/10">
              ⏱ Expert Callback 24h
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm border border-white/10">
              💰 Transparent Pricing
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm border border-white/10">
              🇮🇳 Pan-India
            </span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:grid grid-cols-2 gap-4 z-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-5 text-white border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <span className="text-3xl block mb-2">{service.icon}</span>
              <h4 className="font-bold text-white mt-1">{service.title}</h4>
              <p className="text-xs text-gold-400 font-medium">{service.price}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/5 to-transparent"></div>
    </section>
  );
}