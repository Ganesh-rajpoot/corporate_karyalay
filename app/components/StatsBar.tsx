// app/components/StatsBar.tsx
'use client';

import { motion } from 'framer-motion';
import { FiBriefcase, FiLayers, FiMapPin, FiClock, FiTrendingUp } from 'react-icons/fi';

const stats = [
  { 
    number: '65+', 
    label: 'Services', 
    icon: FiBriefcase,
    description: 'Professional services available',
    color: 'from-blue-500/10 to-blue-500/5'
  },
  { 
    number: '8', 
    label: 'Practice Areas', 
    icon: FiLayers,
    description: 'Specialized categories',
    color: 'from-purple-500/10 to-purple-500/5'
  },
  { 
    number: '🌐', 
    label: 'Pan-India Coverage', 
    icon: FiMapPin,
    description: 'Serving across India',
    color: 'from-green-500/10 to-green-500/5'
  },
  { 
    number: '⏱️', 
    label: 'Response within 48h', 
    icon: FiClock,
    description: 'Quick turnaround time',
    color: 'from-gold-500/10 to-gold-500/5'
  },
];

export function StatsBar() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white" />
      
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1 bg-gold-50 text-gold-600 rounded-full text-sm font-semibold mb-3">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900">
            Trusted by <span className="text-gold-500">Businesses</span> Across India
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative bg-gradient-to-br ${stat.color} bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover:border-gold-200/50 overflow-hidden`}
            >
              {/* Decorative circle */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-gold-500/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative flex flex-col items-center text-center">
                {/* Icon with animated background */}
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gold-500/10 rounded-xl blur-md group-hover:blur-xl transition-all duration-300" />
                  <div className="relative p-3 bg-white rounded-xl shadow-sm group-hover:shadow-gold-500/20 transition-shadow duration-300">
                    {typeof stat.number === 'string' && (stat.number.includes('🌐') || stat.number.includes('⏱️')) ? (
                      <span className="text-2xl">{stat.number}</span>
                    ) : (
                      <stat.icon className="w-6 h-6 text-gold-500 group-hover:scale-110 transition-transform duration-300" />
                    )}
                  </div>
                </div>
                
                {/* Number */}
                <div className="text-3xl md:text-4xl font-bold text-primary-900 group-hover:text-gold-500 transition-colors duration-300">
                  {stat.number}
                </div>
                
                {/* Label */}
                <p className="text-sm font-semibold text-primary-800 mt-1.5">
                  {stat.label}
                </p>
                
                {/* Description */}
                <p className="text-xs text-gray-400 mt-1">
                  {stat.description}
                </p>

                {/* Underline accent on hover */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gold-500 group-hover:w-1/2 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-400 mt-8"
        >
          Counts reflect our live catalog. First-response timelines are indicative and vary by matter.
        </motion.p>
      </div>
    </section>
  );
}