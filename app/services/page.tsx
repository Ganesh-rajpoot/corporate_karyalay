// // app/services/page.tsx
// import { Metadata } from 'next';
// import Link from 'next/link';
// import { FiArrowRight, FiCheckCircle, FiSearch } from 'react-icons/fi';

// export const metadata: Metadata = {
//   title: 'Our Services - Corporate Karyalay',
//   description: 'Comprehensive corporate compliance, tax, legal, and professional services for businesses in India.',
//   keywords: 'GST registration, ITR filing, company incorporation, ROC compliance, legal services, tax services',
// };

// const services = [
//   { 
//     id: 1,
//     icon: '📄', 
//     title: 'GST Registration', 
//     description: 'Business registration under GST for individuals and companies', 
//     price: 'from ₹2,999',
//     category: 'Registration',
//     features: ['New GST registration', 'GST amendment', 'GST cancellation', 'GST consultancy'],
//     slug: 'gst-registration',
//   },
//   { 
//     id: 2,
//     icon: '📊', 
//     title: 'ITR Filing', 
//     description: 'Income tax returns for individuals, professionals & companies', 
//     price: 'from ₹1,499',
//     category: 'Taxation',
//     features: ['ITR-1 to ITR-7 filing', 'NRI income tax filing', 'Tax planning & advice'],
//     slug: 'itr-filing',
//   },
//   { 
//     id: 3,
//     icon: '🏛️', 
//     title: 'Company Incorporation', 
//     description: 'Private limited, LLP, OPC & partnership registration', 
//     price: 'from ₹6,999',
//     category: 'Registration',
//     features: ['Private Limited Company', 'LLP Registration', 'One Person Company', 'Partnership Firm'],
//     slug: 'company-incorporation',
//   },
//   { 
//     id: 4,
//     icon: '📋', 
//     title: 'Statutory Audit', 
//     description: 'Compliance audit & financial reporting for businesses', 
//     price: 'from ₹4,500',
//     category: 'Audit',
//     features: ['Company audit', 'Tax audit under 44AB', 'Internal audit', 'GST audit'],
//     slug: 'statutory-audit',
//   },
//   { 
//     id: 5,
//     icon: '⚖️', 
//     title: 'ROC Compliance', 
//     description: 'Annual returns, board resolutions & MCA filings', 
//     price: 'from ₹3,999',
//     category: 'Compliance',
//     features: ['Annual filing', 'Board resolutions', 'Compliance checklist', 'MCA forms'],
//     slug: 'roc-compliance',
//   },
//   { 
//     id: 6,
//     icon: '📝', 
//     title: 'Legal Documentation', 
//     description: 'Contracts, agreements & legal notice drafting', 
//     price: 'from ₹2,499',
//     category: 'Legal',
//     features: ['Contract drafting', 'Legal notice', 'Agreement review', 'NDA drafting'],
//     slug: 'legal-documentation',
//   },
//   { 
//     id: 7,
//     icon: '💰', 
//     title: 'GST Return Filing', 
//     description: 'Monthly & annual GST returns for businesses', 
//     price: 'from ₹999',
//     category: 'Taxation',
//     features: ['GSTR-1 filing', 'GSTR-3B filing', 'GSTR-9 annual return', 'GSTR-4 composition'],
//     slug: 'gst-return-filing',
//   },
//   { 
//     id: 8,
//     icon: '🔐', 
//     title: 'Trademark Registration', 
//     description: 'Brand protection & intellectual property registration', 
//     price: 'from ₹4,999',
//     category: 'Registration',
//     features: ['Trademark search', 'TM filing', 'Opposition response', 'Renewal support'],
//     slug: 'trademark-registration',
//   },
//   { 
//     id: 9,
//     icon: '👨‍⚖️', 
//     title: 'Legal Consultation', 
//     description: '30-min call with a verified advocate', 
//     price: 'from ₹499',
//     category: 'Legal',
//     features: ['Legal advice', 'Document review', 'Case strategy', 'Legal opinion'],
//     slug: 'legal-consultation',
//   },
//   { 
//     id: 10,
//     icon: '📈', 
//     title: 'TDS Return Filing', 
//     description: 'Quarterly TDS returns & TAN management', 
//     price: 'from ₹1,499',
//     category: 'Taxation',
//     features: ['TDS return filing', 'TAN registration', 'TDS certificate issuance', 'TDS compliance'],
//     slug: 'tds-return-filing',
//   },
//   { 
//     id: 11,
//     icon: '🏢', 
//     title: 'MSME / Udyam Registration', 
//     description: 'Free MSME registration with Udyam portal', 
//     price: 'Free',
//     category: 'Registration',
//     features: ['Udyam registration', 'MSME certificate', 'EM-II filing', 'Benefits advisory'],
//     slug: 'msme-registration',
//   },
//   { 
//     id: 12,
//     icon: '📑', 
//     title: 'Annual Compliance (Pvt Ltd)', 
//     description: 'ROC annual compliance for private limited companies', 
//     price: 'from ₹5,999',
//     category: 'Compliance',
//     features: ['MGT-7 filing', 'AOC-4 filing', 'DIR-3 KYC', 'ADT-1 appointment'],
//     slug: 'annual-compliance',
//   },
// ];

// const categories = ['All', 'Taxation', 'Registration', 'Audit', 'Compliance', 'Legal'];

// export default function ServicesPage() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-16 md:py-20 overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full filter blur-3xl" />
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/10 rounded-full filter blur-3xl" />
//         </div>
        
//         <div className="relative max-w-7xl mx-auto px-4">
//           <div className="max-w-3xl">
//             <span className="inline-block px-4 py-1 bg-gold-500/20 text-gold-300 rounded-full text-sm font-semibold mb-4 border border-gold-500/20">
//               Our Services
//             </span>
//             <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight">
//               Comprehensive <span className="text-gold-400">Solutions</span> for Your Business
//             </h1>
//             <p className="text-white/70 text-lg mt-4 max-w-2xl">
//               One platform for tax, compliance, documentation and professional-service workflows. 
//               Pan-India support with a presence in Prayagraj, Delhi, Chennai, and Mumbai.
//             </p>
            
//             {/* Search Bar */}
//             <div className="mt-6 relative max-w-md">
//               <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
//               <input
//                 type="text"
//                 placeholder="Search services..."
//                 className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-transparent transition"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="max-w-7xl mx-auto px-4 py-12">
//         {/* Category Filters */}
//         <div className="flex flex-wrap gap-2 mb-8">
//           {categories.map((category) => (
//             <button
//               key={category}
//               className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                 category === 'All' 
//                   ? 'bg-gold-500 text-primary-900 shadow-lg shadow-gold-500/25' 
//                   : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:border-gold-300'
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Services Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service) => (
//             <div
//               key={service.id}
//               className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-xl hover:border-gold-200/50 transition-all duration-300 hover:-translate-y-1"
//             >
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 bg-gold-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
//                   {service.icon}
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-500 rounded text-[0.6rem] font-medium uppercase tracking-wider">
//                     {service.category}
//                   </span>
//                   <h3 className="font-bold text-primary-900 text-lg mt-1 group-hover:text-gold-600 transition-colors">
//                     {service.title}
//                   </h3>
//                   <p className="text-sm text-gray-500 mt-1 line-clamp-2">
//                     {service.description}
//                   </p>
//                 </div>
//               </div>

//               {/* Features */}
//               <div className="mt-4 grid grid-cols-2 gap-1">
//                 {service.features.slice(0, 4).map((feature, idx) => (
//                   <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-600">
//                     <FiCheckCircle className="w-3 h-3 text-gold-500 flex-shrink-0" />
//                     <span className="truncate">{feature}</span>
//                   </div>
//                 ))}
//               </div>

//               {/* Footer */}
//               <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
//                 <span className="text-gold-600 font-bold text-sm">
//                   {service.price}
//                 </span>
//                 <Link 
//                   href={`/service/${service.slug}`}
//                   className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-gold-600 transition-colors group/link"
//                 >
//                   Learn More
//                   <FiArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-12 text-center">
//           <p className="text-gray-500 text-sm mb-4">
//             Don't see what you're looking for? We offer customized solutions.
//           </p>
//           <Link 
//             href="/estimate" 
//             className="inline-flex items-center gap-2 bg-gold-500 text-primary-900 font-semibold px-8 py-3.5 rounded-full hover:bg-gold-600 transition-all hover:scale-105 shadow-lg hover:shadow-gold-500/25"
//           >
//             Get Free Estimate
//             <FiArrowRight className="w-5 h-5" />
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }



// app/services/page.tsx
'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  FiArrowRight,
  FiCheckCircle,
  FiSearch,
  FiX,
} from 'react-icons/fi';

const services = [
  {
    id: 1,
    icon: '📄',
    title: 'GST Registration',
    description:
      'Business registration under GST for individuals and companies',
    price: 'from ₹999',
    category: 'Registration',
    features: [
      'New GST registration',
      'GST amendment',
      'GST cancellation',
      'GST consultancy',
    ],
    slug: 'gst-registration',
  },
  {
    id: 2,
    icon: '📊',
    title: 'ITR Filing',
    description:
      'Income tax returns for individuals, professionals & companies',
    price: 'from ₹1,499',
    category: 'Taxation',
    features: [
      'ITR-1 to ITR-7 filing',
      'NRI income tax filing',
      'Tax planning & advice',
    ],
    slug: 'itr-filing',
  },
  {
    id: 3,
    icon: '🏛️',
    title: 'Company Incorporation',
    description:
      'Private limited, LLP, OPC & partnership registration',
    price: 'from ₹6,999',
    category: 'Registration',
    features: [
      'Private Limited Company',
      'LLP Registration',
      'One Person Company',
      'Partnership Firm',
    ],
    slug: 'company-incorporation',
  },
  {
    id: 4,
    icon: '📋',
    title: 'Statutory Audit',
    description:
      'Compliance audit & financial reporting for businesses',
    price: 'from ₹4,500',
    category: 'Audit',
    features: [
      'Company audit',
      'Tax audit under 44AB',
      'Internal audit',
      'GST audit',
    ],
    slug: 'statutory-audit',
  },
  {
    id: 5,
    icon: '⚖️',
    title: 'ROC Compliance',
    description:
      'Annual returns, board resolutions & MCA filings',
    price: 'from ₹3,999',
    category: 'Compliance',
    features: [
      'Annual filing',
      'Board resolutions',
      'Compliance checklist',
      'MCA forms',
    ],
    slug: 'roc-compliance',
  },
  {
    id: 6,
    icon: '📝',
    title: 'Legal Documentation',
    description:
      'Contracts, agreements & legal notice drafting',
    price: 'from ₹2,499',
    category: 'Legal',
    features: [
      'Contract drafting',
      'Legal notice',
      'Agreement review',
      'NDA drafting',
    ],
    slug: 'legal-documentation',
  },
  {
    id: 7,
    icon: '💰',
    title: 'GST Return Filing',
    description:
      'Monthly & annual GST returns for businesses',
    price: 'from ₹999',
    category: 'Taxation',
    features: [
      'GSTR-1 filing',
      'GSTR-3B filing',
      'GSTR-9 annual return',
      'GSTR-4 composition',
    ],
    slug: 'gst-return-filing',
  },
  {
    id: 8,
    icon: '🔐',
    title: 'Trademark Registration',
    description:
      'Brand protection & intellectual property registration',
    price: 'from ₹5,999',
    category: 'Registration',
    features: [
      'Trademark search',
      'TM filing',
      'Opposition response',
      'Renewal support',
    ],
    slug: 'trademark-registration',
  },
  {
    id: 9,
    icon: '👨‍⚖️',
    title: 'Legal Consultation',
    description:
      '30-min call with a verified advocate',
    price: 'from ₹499',
    category: 'Legal',
    features: [
      'Legal advice',
      'Document review',
      'Case strategy',
      'Legal opinion',
    ],
    slug: 'legal-consultation',
  },
  {
    id: 10,
    icon: '📈',
    title: 'TDS Return Filing',
    description:
      'Quarterly TDS returns & TAN management',
    price: 'from ₹1,499',
    category: 'Taxation',
    features: [
      'TDS return filing',
      'TAN registration',
      'TDS certificate issuance',
      'TDS compliance',
    ],
    slug: 'tds-return-filing',
  },
  {
    id: 11,
    icon: '🏢',
    title: 'MSME / Udyam Registration',
    description:
      'Free MSME registration with Udyam portal',
    price: 'Free',
    category: 'Registration',
    features: [
      'Udyam registration',
      'MSME certificate',
      'EM-II filing',
      'Benefits advisory',
    ],
    slug: 'msme-registration',
  },
  {
    id: 12,
    icon: '📑',
    title: 'Annual Compliance (Pvt Ltd)',
    description:
      'ROC annual compliance for private limited companies',
    price: 'from ₹5,999',
    category: 'Compliance',
    features: [
      'MGT-7 filing',
      'AOC-4 filing',
      'DIR-3 KYC',
      'ADT-1 appointment',
    ],
    slug: 'annual-compliance',
  },
];

const categories = [
  'All',
  'Taxation',
  'Registration',
  'Audit',
  'Compliance',
  'Legal',
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  /*
   * Filter services based on:
   * 1. Selected category
   * 2. Search query
   *
   * Search works on:
   * - Service title
   * - Description
   * - Category
   * - Features
   */
  const filteredServices = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return services.filter((service) => {
      // Category filter
      const categoryMatch =
        selectedCategory === 'All' ||
        service.category === selectedCategory;

      // If search is empty, only category filter matters
      if (!query) {
        return categoryMatch;
      }

      // Search through all useful service information
      const searchableText = [
        service.title,
        service.description,
        service.category,
        service.price,
        ...service.features,
      ]
        .join(' ')
        .toLowerCase();

      const searchMatch = searchableText.includes(query);

      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, searchQuery]);

  /*
   * Clear all filters
   */
  const clearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* =========================================================
          HERO SECTION
      ========================================================== */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-16 md:py-20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full filter blur-3xl" />

          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/10 rounded-full filter blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            {/* Badge */}
            <span className="inline-block px-4 py-1 bg-gold-500/20 text-gold-300 rounded-full text-sm font-semibold mb-4 border border-gold-500/20">
              Our Services
            </span>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Comprehensive{' '}
              <span className="text-gold-400">Solutions</span> for Your
              Business
            </h1>

            {/* Description */}
            <p className="text-white/70 text-lg mt-4 max-w-2xl">
              One platform for tax, compliance, documentation and
              professional-service workflows. Pan-India support with a
              presence in Prayagraj, Delhi, Chennai, and Mumbai.
            </p>

            {/* =====================================================
                SEARCH BAR
            ====================================================== */}
            <div className="mt-6 relative max-w-md">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5 pointer-events-none" />

              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition"
              />

              {/* Clear search button */}
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition"
                >
                  <FiX className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Search result count */}
            <div className="mt-3 text-sm text-white/50">
              {searchQuery ? (
                <>
                  Showing{' '}
                  <span className="text-gold-300 font-semibold">
                    {filteredServices.length}
                  </span>{' '}
                  result
                  {filteredServices.length !== 1 ? 's' : ''} for "
                  {searchQuery}"
                </>
              ) : (
                <>
                  Showing{' '}
                  <span className="text-gold-300 font-semibold">
                    {filteredServices.length}
                  </span>{' '}
                  service
                  {filteredServices.length !== 1 ? 's' : ''}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES SECTION
      ========================================================== */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* =======================================================
            CATEGORY FILTERS
        ======================================================== */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-gold-500 text-primary-900 shadow-lg shadow-gold-500/25 scale-105'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:border-gold-300'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Active filter information */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {selectedCategory !== 'All' && (
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gold-50 text-gold-700 rounded-full text-xs font-medium">
                Category: {selectedCategory}

                <button
                  type="button"
                  onClick={() => setSelectedCategory('All')}
                  className="hover:text-primary-900"
                  aria-label="Remove category filter"
                >
                  <FiX className="w-3.5 h-3.5" />
                </button>
              </span>
            )}

            {searchQuery && (
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">
                Search: "{searchQuery}"

                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="hover:text-primary-900"
                  aria-label="Remove search filter"
                >
                  <FiX className="w-3.5 h-3.5" />
                </button>
              </span>
            )}

            {(selectedCategory !== 'All' || searchQuery) && (
              <button
                type="button"
                onClick={clearFilters}
                className="text-xs font-semibold text-gray-500 hover:text-gold-600 transition-colors"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* =======================================================
            RESULTS
        ======================================================== */}
        {filteredServices.length === 0 ? (
          /* No Results */
          <div className="py-20 text-center bg-white rounded-3xl border border-gray-100">
            <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
              <FiSearch className="w-7 h-7 text-gray-400" />
            </div>

            <h3 className="text-xl font-bold text-primary-900 mt-5">
              No services found
            </h3>

            <p className="text-gray-500 mt-2 max-w-md mx-auto px-4">
              We couldn't find any service matching your search or selected
              category.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 inline-flex items-center gap-2 bg-gold-500 text-primary-900 font-semibold px-6 py-3 rounded-full hover:bg-gold-600 transition-all hover:scale-105"
            >
              Clear Filters
              <FiX className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <>
            {/* Result heading */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-xl font-bold text-primary-900">
                  {selectedCategory === 'All'
                    ? 'All Services'
                    : `${selectedCategory} Services`}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {filteredServices.length} service
                  {filteredServices.length !== 1 ? 's' : ''} available
                </p>
              </div>
            </div>

            {/* ===================================================
                SERVICES GRID
            ==================================================== */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-xl hover:border-gold-200/50 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Card Header */}
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gold-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Category */}
                      <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-500 rounded text-[0.6rem] font-medium uppercase tracking-wider">
                        {service.category}
                      </span>

                      {/* Title */}
                      <h3 className="font-bold text-primary-900 text-lg mt-1 group-hover:text-gold-600 transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* =================================================
                      FEATURES
                  ================================================== */}
                  <div className="mt-4 grid grid-cols-2 gap-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1.5 text-xs text-gray-600"
                      >
                        <FiCheckCircle className="w-3 h-3 text-gold-500 flex-shrink-0" />

                        <span className="truncate">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* =================================================
                      CARD FOOTER
                  ================================================== */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    {/* Price */}
                    <span className="text-gold-600 font-bold text-sm">
                      {service.price}
                    </span>

                    {/* Learn More */}
                    <Link
                      href={`/service/${service.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-gold-600 transition-colors group/link"
                    >
                      Learn More

                      <FiArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* =========================================================
            BOTTOM CTA
        ========================================================== */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Don't see what you're looking for? We offer customized
            solutions.
          </p>

          <Link
            href="/#estimate"
            className="inline-flex items-center gap-2 bg-gold-500 text-primary-900 font-semibold px-8 py-3.5 rounded-full hover:bg-gold-600 transition-all hover:scale-105 shadow-lg hover:shadow-gold-500/25"
          >
            Get Free Estimate

            <FiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

