// // app/contact/ContactClient.tsx (Client Component)
// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { 
//   FiMapPin, 
//   FiPhone, 
//   FiMail, 
//   FiClock, 
//   FiMessageCircle,
//   FiSend,
//   FiUser,
//   FiFileText,
//   FiCheckCircle,
//   FiArrowRight,
//   FiAlertCircle
// } from 'react-icons/fi';

// const offices = [
//   {
//     city: 'Prayagraj',
//     address: '123, Civil Lines, Prayagraj, Uttar Pradesh - 211001',
//     phone: '+91 9005357255',
//     email: 'prayagraj@corporatekaryalay.in',
//   },
//   {
//     city: 'Delhi NCR (Noida)',
//     address: 'Sector 66, Near Noida Sector 59 Metro, 201301',
//     phone: '+91 99846 49997',
//     email: 'noida@corporatekaryalay.in',
//   },
// //   {
// //     city: 'Chennai',
// //     address: '789, Anna Salai, Chennai, Tamil Nadu - 600002',
// //     phone: '+91 98765 43212',
// //     email: 'chennai@corporatekaryalay.in',
// //   },
// //   {
// //     city: 'Mumbai',
// //     address: '101, Nariman Point, Mumbai, Maharashtra - 400021',
// //     phone: '+91 98765 43213',
// //     email: 'mumbai@corporatekaryalay.in',
// //   },
// ];

// const faqs = [
//   {
//     question: 'How quickly can I get a response?',
//     answer: 'We aim to respond to all inquiries within 24 hours during business days.',
//   },
//   {
//     question: 'What services do you offer?',
//     answer: 'We offer GST registration, ITR filing, company incorporation, ROC compliance, legal documentation, and more.',
//   },
//   {
//     question: 'Are your professionals qualified?',
//     answer: 'Yes, all our professionals are qualified CAs, CS, and advocates with relevant experience.',
//   },
//   {
//     question: 'Is my data secure?',
//     answer: 'Absolutely. We follow strict data protection protocols and never share your information with third parties.',
//   },
// ];

// export default function ContactClient() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     services: '',
//     message: '',
//   });

//   const [isLoading, setIsLoading] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     if (error) setError(null);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError(null);
//     setSuccessMessage('');

//     try {
//       const response = await fetch('https://api.corporatekaryalay.com/api/contacts', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,
//           services: formData.services,
//           message: formData.message,
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || 'Something went wrong. Please try again.');
//       }

//       setIsSubmitted(true);
//       setSuccessMessage('Thank you for contacting us! We will get back to you within 24 hours.');
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         services: '',
//         message: '',
//       });

//       setTimeout(() => {
//         setIsSubmitted(false);
//         setSuccessMessage('');
//       }, 5000);

//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

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
//               Get in Touch
//             </span>
//             <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight">
//               Let's <span className="text-gold-400">Connect</span>
//             </h1>
//             <p className="text-white/70 text-lg mt-4 max-w-2xl">
//               Have questions about our services? Need professional assistance? 
//               We're here to help. Reach out to us through any of the channels below.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
//         <div className="grid lg:grid-cols-5 gap-6">
//           {/* Contact Form */}
//           <div className="lg:col-span-3 bg-white rounded-3xl shadow-xl p-6 md:p-8">
//             <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
//               Send Us a <span className="text-gold-500">Message</span>
//             </h2>
//             <p className="text-gray-500 text-sm mb-6">
//               Fill out the form below and we'll get back to you within 24 hours.
//             </p>

//             {/* Success Message */}
//             {successMessage && (
//               <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
//                 <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
//                 <div>
//                   <p className="text-green-700 font-medium">Success!</p>
//                   <p className="text-green-600 text-sm">{successMessage}</p>
//                 </div>
//               </div>
//             )}

//             {/* Error Message */}
//             {error && (
//               <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
//                 <FiAlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
//                 <div>
//                   <p className="text-red-700 font-medium">Error</p>
//                   <p className="text-red-600 text-sm">{error}</p>
//                 </div>
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="grid sm:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                     Full Name <span className="text-red-500">*</span>
//                   </label>
//                   <div className="relative">
//                     <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="John Doe"
//                       className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
//                       required
//                       disabled={isLoading || isSubmitted}
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                     Phone Number <span className="text-red-500">*</span>
//                   </label>
//                   <div className="relative">
//                     <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       placeholder="+91 99846 49997"
//                       className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
//                       required
//                       disabled={isLoading || isSubmitted}
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                   Email Address <span className="text-red-500">*</span>
//                 </label>
//                 <div className="relative">
//                   <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="john@example.com"
//                     className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
//                     required
//                     disabled={isLoading || isSubmitted}
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                   Service Required <span className="text-red-500">*</span>
//                 </label>
//                 <div className="relative">
//                   <FiFileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                   <select
//                     name="services"
//                     value={formData.services}
//                     onChange={handleChange}
//                     className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
//                     required
//                     disabled={isLoading || isSubmitted}
//                   >
//                     <option value="">Select a service...</option>
//                     <option value="GST Registration">GST Registration</option>
//                     <option value="ITR Filing">ITR Filing</option>
//                     <option value="Company Incorporation">Company Incorporation</option>
//                     <option value="ROC Compliance">ROC Compliance</option>
//                     <option value="Statutory Audit">Statutory Audit</option>
//                     <option value="Legal Consultation">Legal Consultation</option>
//                     <option value="Other Service">Other Service</option>
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                   Your Message <span className="text-red-500">*</span>
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={4}
//                   placeholder="Tell us about your requirement..."
//                   className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition resize-y disabled:opacity-50 disabled:cursor-not-allowed"
//                   required
//                   disabled={isLoading || isSubmitted}
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isLoading || isSubmitted}
//                 className="w-full bg-gold-500 text-primary-900 font-semibold py-3.5 rounded-xl hover:bg-gold-600 transition-all hover:scale-[1.02] shadow-lg hover:shadow-gold-500/25 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
//               >
//                 {isLoading ? (
//                   <>
//                     <span className="w-5 h-5 border-2 border-primary-900 border-t-transparent rounded-full animate-spin" />
//                     Sending...
//                   </>
//                 ) : isSubmitted ? (
//                   <>
//                     <FiCheckCircle className="w-5 h-5" />
//                     Sent Successfully!
//                   </>
//                 ) : (
//                   <>
//                     <FiSend className="w-5 h-5" />
//                     Send Message
//                   </>
//                 )}
//               </button>

//               <p className="text-xs text-gray-400 text-center">
//                 🔒 Your data is safe. We'll never share your information.
//               </p>
//             </form>
//           </div>

//           {/* Contact Info */}
//           <div className="lg:col-span-2 space-y-4">
//             {/* Quick Contact */}
//             <div className="bg-white rounded-3xl shadow-xl p-6">
//               <h3 className="font-bold text-primary-900 text-lg mb-4">Quick Contact</h3>
//               <div className="space-y-4">
//                 <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gold-50 transition group">
//                   <div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold-200 transition">
//                     <FiPhone className="w-5 h-5 text-gold-600" />
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500">Phone</p>
//                     <a href="tel:+919984649997" className="text-primary-900 font-medium hover:text-gold-600 transition">
//                       +91 99846 49997
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gold-50 transition group">
//                   <div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold-200 transition">
//                     <FiMail className="w-5 h-5 text-gold-600" />
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500">Email</p>
//                     <a href="mailto:info@corporatekaryalay.in" className="text-primary-900 font-medium hover:text-gold-600 transition break-all">
//                       info@corporatekaryalay.in
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gold-50 transition group">
//                   <div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold-200 transition">
//                     <FiClock className="w-5 h-5 text-gold-600" />
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500">Working Hours</p>
//                     <p className="text-primary-900 font-medium">Mon–Sat, 10am–7pm IST</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gold-50 transition group">
//                   <div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold-200 transition">
//                     <FiMessageCircle className="w-5 h-5 text-gold-600" />
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500">WhatsApp</p>
//                     <a href="#" className="text-primary-900 font-medium hover:text-gold-600 transition">
//                       Chat with us
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* CTA Card */}
//             <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl shadow-xl p-6 text-white">
//               <h3 className="font-bold text-lg mb-2">Need a Quick Estimate?</h3>
//               <p className="text-white/70 text-sm mb-4">
//                 Get a free, no-obligation quote in minutes.
//               </p>
//               <Link 
//                 href="/estimate" 
//                 className="inline-flex items-center gap-2 bg-gold-500 text-primary-900 font-semibold px-6 py-3 rounded-xl hover:bg-gold-600 transition-all hover:scale-105 w-full justify-center"
//               >
//                 Get Free Estimate
//                 <FiArrowRight className="w-5 h-5" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Office Locations */}
//       <section className="max-w-7xl mx-auto px-4 py-12">
//         <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-900 text-center mb-2">
//           Our <span className="text-gold-500">Offices</span>
//         </h2>
//         <p className="text-gray-500 text-center mb-8">
//           We have a presence across India to serve you better.
//         </p>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           {offices.map((office, index) => (
//             <div key={index} className="bg-white rounded-2xl p-5 shadow-soft border border-gray-100 hover:shadow-xl hover:border-gold-200/50 transition-all duration-300 hover:-translate-y-1 group">
//               <div className="flex items-center gap-2 mb-3">
//                 <FiMapPin className="w-5 h-5 text-gold-500" />
//                 <h4 className="font-bold text-primary-900 group-hover:text-gold-600 transition-colors">
//                   {office.city}
//                 </h4>
//               </div>
//               <p className="text-sm text-gray-500 leading-relaxed">{office.address}</p>
//               <div className="mt-3 pt-3 border-t border-gray-100 space-y-1">
//                 <a href={`tel:${office.phone}`} className="text-sm text-primary-600 hover:text-gold-600 transition flex items-center gap-2">
//                   <FiPhone className="w-3.5 h-3.5" /> {office.phone}
//                 </a>
//                 <a href={`mailto:${office.email}`} className="text-sm text-primary-600 hover:text-gold-600 transition flex items-center gap-2">
//                   <FiMail className="w-3.5 h-3.5" /> {office.email}
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="max-w-4xl mx-auto px-4 py-12">
//         <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-900 text-center mb-2">
//           Frequently Asked <span className="text-gold-500">Questions</span>
//         </h2>
//         <p className="text-gray-500 text-center mb-8">
//           Find quick answers to common questions.
//         </p>

//         <div className="space-y-3">
//           {faqs.map((faq, index) => (
//             <div key={index} className="bg-white rounded-2xl p-5 shadow-soft border border-gray-100 hover:shadow-md transition">
//               <h4 className="font-semibold text-primary-900 flex items-start gap-2">
//                 <FiCheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
//                 {faq.question}
//               </h4>
//               <p className="text-gray-500 text-sm mt-1 ml-7">{faq.answer}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }



// app/contact/ContactClient.tsx (Client Component)
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiClock, 
  FiMessageCircle,
  FiSend,
  FiUser,
  FiFileText,
  FiCheckCircle,
  FiArrowRight,
  FiAlertCircle
} from 'react-icons/fi';

const offices = [
  {
    city: 'Prayagraj',
    address: '123, Civil Lines, Prayagraj, Uttar Pradesh - 211001',
    phone: '+91 9005357255',
    email: 'prayagraj@corporatekaryalay.in',
  },
  {
    city: 'Delhi NCR (Noida)',
    address: 'Sector 66, Near Noida Sector 59 Metro, 201301',
    phone: '+91 99846 49997',
    email: 'noida@corporatekaryalay.in',
  },
];

const faqs = [
  {
    question: 'How quickly can I get a response?',
    answer: 'We aim to respond to all inquiries within 24 hours during business days.',
  },
  {
    question: 'What services do you offer?',
    answer: 'We offer GST registration, ITR filing, company incorporation, ROC compliance, legal documentation, and more.',
  },
  {
    question: 'Are your professionals qualified?',
    answer: 'Yes, all our professionals are qualified CAs, CS, and advocates with relevant experience.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We follow strict data protection protocols and never share your information with third parties.',
  },
];

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    services: '',
    message: '',
  });

  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    services?: string;
    email?: string;
  }>({});

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState('');

  // --- API Base URL ---
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.corporatekaryalay.com/api';

  // --- Validation Functions ---
  const validateName = (name: string): string | null => {
    if (!name || name.trim().length === 0) {
      return 'Full name is required';
    }
    if (name.trim().length < 2) {
      return 'Name must be at least 2 characters';
    }
    return null;
  };

  const validatePhone = (phone: string): string | null => {
    const cleaned = phone.replace(/[\s\-+]/g, '');
    
    if (!cleaned || cleaned.length === 0) {
      return 'Phone number is required';
    }
    if (cleaned.length < 10) {
      return 'Phone number must be at least 10 digits';
    }
    if (cleaned.length > 13) {
      return 'Phone number must be at most 13 digits';
    }
    if (!/^\d+$/.test(cleaned)) {
      return 'Phone number must contain only digits';
    }
    return null;
  };

  const validateServices = (services: string): string | null => {
    if (!services || services.trim().length === 0 || services === '') {
      return 'Please select a service';
    }
    return null;
  };

  const validateEmail = (email: string): string | null => {
    if (!email || email.trim().length === 0) {
      return 'Email address is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return null;
  };

  const validateForm = (): boolean => {
    const newErrors: {
      name?: string;
      phone?: string;
      services?: string;
      email?: string;
    } = {};

    const nameError = validateName(formData.name);
    if (nameError) newErrors.name = nameError;

    const phoneError = validatePhone(formData.phone);
    if (phoneError) newErrors.phone = phoneError;

    const servicesError = validateServices(formData.services);
    if (servicesError) newErrors.services = servicesError;

    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- Handle Change ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }

    if (name === 'phone') {
      const phoneError = validatePhone(value);
      if (phoneError) {
        setErrors((prev) => ({
          ...prev,
          phone: phoneError,
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          phone: undefined,
        }));
      }
    }
  };

  // --- Handle Submit ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      const firstErrorField = document.querySelector('[data-error="true"]');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccessMessage('');

    try {
      // Prepare payload - match the API expected format
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        services: formData.services,
        message: formData.message.trim(),
        // Add any other fields your API expects
        // source: 'website_contact', // if your API expects this
        // status: 'new', // if your API expects this
      };

      console.log('Sending payload:', payload); // For debugging

      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Get the response text first to see what's happening
      const responseText = await response.text();
      let data;
      try {
        data = JSON.parse(responseText);
      } catch {
        data = { message: responseText };
      }

      if (!response.ok) {
        // Show detailed error message from API
        const errorMessage = data.message || data.error || `Server error: ${response.status}`;
        throw new Error(errorMessage);
      }

      setIsSubmitted(true);
      setSuccessMessage('Thank you for contacting us! We will get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        services: '',
        message: '',
      });
      setErrors({});

      setTimeout(() => {
        setIsSubmitted(false);
        setSuccessMessage('');
      }, 5000);

    } catch (err) {
      console.error('Form submission error:', err);
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
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
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Let's <span className="text-gold-400">Connect</span>
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl">
              Have questions about our services? Need professional assistance? 
              We're here to help. Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-xl p-6 md:p-8">
            <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
              Send Us a <span className="text-gold-500">Message</span>
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Fill out the form below and we'll get back to you within 24 hours.
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

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
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
                      data-error={!!errors.name}
                      className={`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition disabled:opacity-50 disabled:cursor-not-allowed ${
                        errors.name ? 'border-red-500 focus:ring-red-500/50' : 'border-gray-200'
                      }`}
                      required
                      disabled={isLoading || isSubmitted}
                      aria-invalid={!!errors.name}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <FiAlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 99846 49997"
                      data-error={!!errors.phone}
                      className={`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition disabled:opacity-50 disabled:cursor-not-allowed font-mono ${
                        errors.phone ? 'border-red-500 focus:ring-red-500/50' : 'border-gray-200'
                      }`}
                      required
                      disabled={isLoading || isSubmitted}
                      aria-invalid={!!errors.phone}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <FiAlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </p>
                  )}
                  <p className="text-gray-400 text-[0.6rem] mt-1">
                    Enter 10-13 digits (e.g., 9984649997 or +91 99846 49997)
                  </p>
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
                    data-error={!!errors.email}
                    className={`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition disabled:opacity-50 disabled:cursor-not-allowed ${
                      errors.email ? 'border-red-500 focus:ring-red-500/50' : 'border-gray-200'
                    }`}
                    required
                    disabled={isLoading || isSubmitted}
                    aria-invalid={!!errors.email}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <FiAlertCircle className="w-3 h-3" />
                    {errors.email}
                  </p>
                )}
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
                    data-error={!!errors.services}
                    className={`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition appearance-none disabled:opacity-50 disabled:cursor-not-allowed ${
                      errors.services ? 'border-red-500 focus:ring-red-500/50' : 'border-gray-200'
                    }`}
                    required
                    disabled={isLoading || isSubmitted}
                    aria-invalid={!!errors.services}
                  >
                    <option value="">Select a service...</option>
                    <option value="GST Registration">GST Registration</option>
                    <option value="ITR Filing">ITR Filing</option>
                    <option value="Company Incorporation">Company Incorporation</option>
                    <option value="ROC Compliance">ROC Compliance</option>
                    <option value="Statutory Audit">Statutory Audit</option>
                    <option value="Legal Consultation">Legal Consultation</option>
                    <option value="Other Service">Other Service</option>
                  </select>
                </div>
                {errors.services && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <FiAlertCircle className="w-3 h-3" />
                    {errors.services}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your requirement..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition resize-y disabled:opacity-50 disabled:cursor-not-allowed"
                  required
                  disabled={isLoading || isSubmitted}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || isSubmitted}
                className="w-full bg-gold-500 text-primary-900 font-semibold py-3.5 rounded-xl hover:bg-gold-600 transition-all hover:scale-[1.02] shadow-lg hover:shadow-gold-500/25 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-primary-900 border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <FiCheckCircle className="w-5 h-5" />
                    Sent Successfully!
                  </>
                ) : (
                  <>
                    <FiSend className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-xs text-gray-400 text-center">
                🔒 Your data is safe. We'll never share your information.
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {/* Quick Contact */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h3 className="font-bold text-primary-900 text-lg mb-4">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gold-50 transition group">
                  <div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold-200 transition">
                    <FiPhone className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Phone</p>
                    <a href="tel:+919984649997" className="text-primary-900 font-medium hover:text-gold-600 transition">
                      +91 99846 49997
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gold-50 transition group">
                  <div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold-200 transition">
                    <FiMail className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <a href="mailto:info@corporatekaryalay.in" className="text-primary-900 font-medium hover:text-gold-600 transition break-all">
                      info@corporatekaryalay.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gold-50 transition group">
                  <div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold-200 transition">
                    <FiClock className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Working Hours</p>
                    <p className="text-primary-900 font-medium">Mon–Sat, 10am–7pm IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gold-50 transition group">
                  <div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold-200 transition">
                    <FiMessageCircle className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">WhatsApp</p>
                    <a href="#" className="text-primary-900 font-medium hover:text-gold-600 transition">
                      Chat with us
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl shadow-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Need a Quick Estimate?</h3>
              <p className="text-white/70 text-sm mb-4">
                Get a free, no-obligation quote in minutes.
              </p>
              <Link 
                href="/estimate" 
                className="inline-flex items-center gap-2 bg-gold-500 text-primary-900 font-semibold px-6 py-3 rounded-xl hover:bg-gold-600 transition-all hover:scale-105 w-full justify-center"
              >
                Get Free Estimate
                <FiArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-900 text-center mb-2">
          Our <span className="text-gold-500">Offices</span>
        </h2>
        <p className="text-gray-500 text-center mb-8">
          We have a presence across India to serve you better.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {offices.map((office, index) => (
            <div key={index} className="bg-white rounded-2xl p-5 shadow-soft border border-gray-100 hover:shadow-xl hover:border-gold-200/50 transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex items-center gap-2 mb-3">
                <FiMapPin className="w-5 h-5 text-gold-500" />
                <h4 className="font-bold text-primary-900 group-hover:text-gold-600 transition-colors">
                  {office.city}
                </h4>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">{office.address}</p>
              <div className="mt-3 pt-3 border-t border-gray-100 space-y-1">
                <a href={`tel:${office.phone}`} className="text-sm text-primary-600 hover:text-gold-600 transition flex items-center gap-2">
                  <FiPhone className="w-3.5 h-3.5" /> {office.phone}
                </a>
                <a href={`mailto:${office.email}`} className="text-sm text-primary-600 hover:text-gold-600 transition flex items-center gap-2">
                  <FiMail className="w-3.5 h-3.5" /> {office.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-900 text-center mb-2">
          Frequently Asked <span className="text-gold-500">Questions</span>
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Find quick answers to common questions.
        </p>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl p-5 shadow-soft border border-gray-100 hover:shadow-md transition">
              <h4 className="font-semibold text-primary-900 flex items-start gap-2">
                <FiCheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                {faq.question}
              </h4>
              <p className="text-gray-500 text-sm mt-1 ml-7">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}