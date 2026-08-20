// app/components/ServicesGrid.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const categories = ['All', 'Taxation', 'Registration', 'Audit', 'Compliance', 'Legal'];

const allServices = [
  { 
    id: 1,
    icon: '📄', 
    title: 'GST Registration', 
    description: 'Business registration under GST', 
    price: 'from ₹2,999',
    category: 'Registration',
    features: ['New GST registration', 'GST amendment', 'GST cancellation'],
  },
  { 
    id: 2,
    icon: '📊', 
    title: 'ITR Filing', 
    description: 'Income tax returns for individuals & companies', 
    price: 'from ₹1,499',
    category: 'Taxation',
    features: ['ITR-1 to ITR-7', 'NRI filing', 'Tax planning'],
  },
  { 
    id: 3,
    icon: '🏛️', 
    title: 'Company Incorporation', 
    description: 'Private limited, LLP, OPC', 
    price: 'from ₹6,999',
    category: 'Registration',
    features: ['Private Limited', 'LLP Registration', 'One Person Company'],
  },
  { 
    id: 4,
    icon: '📋', 
    title: 'Statutory Audit', 
    description: 'Compliance audit & reporting', 
    price: 'from ₹4,500',
    category: 'Audit',
    features: ['Company audit', 'Tax audit', 'Internal audit'],
  },
  { 
    id: 5,
    icon: '⚖️', 
    title: 'ROC Compliance', 
    description: 'Annual returns & filings', 
    price: 'from ₹3,999',
    category: 'Compliance',
    features: ['Annual filing', 'Board resolutions', 'Compliance checklist'],
  },
  { 
    id: 6,
    icon: '📝', 
    title: 'Legal Documentation', 
    description: 'Contracts & agreements', 
    price: 'from ₹2,499',
    category: 'Legal',
    features: ['Contract drafting', 'Legal notice', 'Agreement review'],
  },
  { 
    id: 7,
    icon: '💰', 
    title: 'GST Return Filing', 
    description: 'Monthly & annual GST returns', 
    price: 'from ₹999',
    category: 'Taxation',
    features: ['GSTR-1', 'GSTR-3B', 'GSTR-9'],
  },
  { 
    id: 8,
    icon: '🔐', 
    title: 'Trademark Registration', 
    description: 'Brand protection & IP registration', 
    price: 'from ₹4,999',
    category: 'Registration',
    features: ['Trademark search', 'Filing', 'Opposition response'],
  },
  { 
    id: 9,
    icon: '👨‍⚖️', 
    title: 'Legal Consultation', 
    description: '30-min call with a verified advocate', 
    price: 'from ₹499',
    category: 'Legal',
    features: ['Legal advice', 'Document review', 'Case strategy'],
  },
];

export function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredServices = activeCategory === 'All' 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <span className="inline-block px-4 py-1 bg-gold-50 text-gold-600 rounded-full text-sm font-semibold mb-3">
            Professional Services
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900">
            Every Service <span className="text-gold-500">You Need</span>
          </h2>
          <p className="text-gray-500 mt-2 max-w-2xl">
            Browse tax, compliance, documentation and professional-service workflows 
            managed through a secure digital platform.
          </p>
        </div>
        <Link 
          href="/services" 
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-800 font-medium transition group whitespace-nowrap"
        >
          View All Services
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mt-4 pb-4 border-b border-gray-200">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category 
                ? 'bg-gold-500 text-primary-900 shadow-lg shadow-gold-500/25 scale-105' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-xl hover:border-gold-200/50 transition-all duration-300 cursor-default"
            >
              {/* Decorative gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative">
                {/* Icon with animated background */}
                <div className="relative mb-4 w-14 h-14">
                  <div className="absolute inset-0 bg-gold-500/10 rounded-xl blur-md group-hover:blur-xl transition-all duration-300" />
                  <div className="relative w-full h-full bg-gold-50 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h4 className="font-bold text-primary-900 text-lg group-hover:text-gold-600 transition-colors duration-300">
                  {service.title}
                </h4>
                
                {/* Description */}
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="mt-3 space-y-1">
                  {service.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                      <FiCheckCircle className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 2 && (
                    <span className="text-xs text-gray-400">+{service.features.length - 2} more</span>
                  )}
                </div>
                
                {/* Price and CTA */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <span className="text-gold-600 font-bold text-sm">
                    {service.price}
                  </span>
                  <Link 
                    href={`/service/${service.title.toLowerCase().replace(/\s/g, '-')}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-gold-600 transition-colors group/link"
                  >
                    Learn More
                    <FiArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Bottom accent bar */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 to-gold-500 rounded-b-2xl transition-all duration-500 ${
                hoveredId === service.id ? 'opacity-100' : 'opacity-0'
              }`} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty state */}
      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No services found in this category.</p>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="text-center mt-10">
        <Link 
          href="/estimate" 
          className="inline-flex items-center gap-2 bg-gold-500 text-primary-900 font-semibold px-8 py-3.5 rounded-full hover:bg-gold-600 transition-all hover:scale-105 shadow-lg hover:shadow-gold-500/25"
        >
          Get Your Free Estimate
          <FiArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}