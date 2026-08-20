// app/components/HowItWorks.tsx
'use client';

import { motion } from 'framer-motion';
import { FiFileText, FiDollarSign, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

const steps = [
  { 
    number: 1, 
    title: 'Submit your request', 
    description: 'Fill the quick form or WhatsApp us your requirement',
    icon: FiFileText,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  { 
    number: 2, 
    title: 'Get a fixed quote', 
    description: 'Transparent, no-surprise pricing from qualified professionals',
    icon: FiDollarSign,
    color: 'from-gold-500 to-gold-600',
    bgColor: 'bg-gold-50',
    iconColor: 'text-gold-500',
  },
  { 
    number: 3, 
    title: 'Track & Complete', 
    description: 'Real-time dashboard updates & dedicated support',
    icon: FiCheckCircle,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-500',
  },
];

export function HowItWorks() {
  return (
    <section
        id="how-it-works"
        className="relative bg-gradient-to-b from-gray-50 to-white py-16 md:py-20 px-4 overflow-hidden"
      >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full filter blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-gold-50 text-gold-600 rounded-full text-sm font-semibold mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-900">
            How It <span className="text-gold-500">Works</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Get started in three simple steps and let our experts handle the rest
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-24 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-xl border border-gray-100 hover:border-gold-200/50 transition-all duration-300 text-center h-full hover:-translate-y-2">
                {/* Step Number Circle */}
                <div className="relative inline-block">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl md:text-3xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                  {/* Decorative ring */}
                  <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${step.color} opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300`} />
                </div>

                {/* Icon */}
                <div className={`mt-4 w-12 h-12 ${step.bgColor} rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className={`w-6 h-6 ${step.iconColor}`} />
                </div>

                {/* Title */}
                <h4 className="font-display font-bold text-xl text-primary-900 mt-4 group-hover:text-gold-600 transition-colors duration-300">
                  {step.title}
                </h4>
                
                {/* Description */}
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  {step.description}
                </p>

                {/* Step indicator */}
                <div className="mt-4 flex justify-center gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1 rounded-full transition-all duration-300 ${
                        i === index 
                          ? `w-8 bg-gradient-to-r ${step.color}` 
                          : 'w-1.5 bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
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
          <p className="text-gray-500 text-sm mb-4">
            Ready to get started? It's quick and easy.
          </p>
          <a 
            href="/estimate" 
            className="inline-flex items-center gap-2 bg-gold-500 text-primary-900 font-semibold px-8 py-3.5 rounded-full hover:bg-gold-600 transition-all hover:scale-105 shadow-lg hover:shadow-gold-500/25"
          >
            Get Started Now
            <FiArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}