// app/components/WhyUs.tsx
'use client';

import { motion } from 'framer-motion';
import { FiFileText, FiDollarSign, FiTrendingUp, FiAward, FiCheckCircle } from 'react-icons/fi';

const reasons = [
  { 
    icon: '📄', 
    title: 'Document-led intake', 
    description: 'Clear checklist & secure upload',
    color: 'from-blue-500/10 to-blue-500/5',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  { 
    icon: '💰', 
    title: 'Confirmed transparent quotes', 
    description: 'No hidden fees, ever',
    color: 'from-gold-500/10 to-gold-500/5',
    iconBg: 'bg-gold-50',
    iconColor: 'text-gold-500',
  },
  { 
    icon: '📊', 
    title: 'Status visibility dashboard', 
    description: 'Track every step in real time',
    color: 'from-green-500/10 to-green-500/5',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-500',
  },
  { 
    icon: '🎓', 
    title: 'ICAI / ICSI / Bar Council', 
    description: 'Credentialed professionals',
    color: 'from-purple-500/10 to-purple-500/5',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-500',
  },
];

export function WhyUs() {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-16 md:py-20 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full filter blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-900">
            Why <span className="text-gold-500">Corporate Karyalay</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Built for clarity. Built to deliver. We combine disciplined workflows with technology.
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative bg-white rounded-2xl p-6 md:p-8 shadow-soft border border-gray-100 hover:shadow-xl hover:border-gold-200/50 transition-all duration-300 overflow-hidden`}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative">
                {/* Icon with animated background */}
                <div className="relative w-16 h-16 mb-4">
                  <div className={`absolute inset-0 ${reason.iconBg} rounded-xl blur-md group-hover:blur-xl transition-all duration-300`} />
                  <div className={`relative w-full h-full ${reason.iconBg} rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                    {reason.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h4 className="font-bold text-primary-900 text-lg group-hover:text-gold-600 transition-colors duration-300">
                  {reason.title}
                </h4>
                
                {/* Description */}
                <p className="text-gray-500 text-sm mt-2 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                  {reason.description}
                </p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-gold-400 to-gold-500 group-hover:w-1/2 transition-all duration-500 rounded-full`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="/about" 
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-800 font-medium transition group"
          >
            Learn more about us
            <FiCheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}