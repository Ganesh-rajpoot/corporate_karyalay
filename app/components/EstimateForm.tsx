// // app/components/EstimateForm.tsx
// 'use client';

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FiSend, FiCheckCircle, FiShield, FiClock, FiDollarSign } from 'react-icons/fi';

// export function EstimateForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     service: 'GST Registration',
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
    
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 1500));
    
//     console.log('Form submitted:', formData);
//     setIsLoading(false);
//     setIsSubmitted(true);
    
//     // Reset form after 3 seconds
//     setTimeout(() => {
//       setIsSubmitted(false);
//       setFormData({
//         name: '',
//         phone: '',
//         email: '',
//         service: 'GST Registration',
//       });
//     }, 3000);
//   };

//   const features = [
//     { icon: FiCheckCircle, text: 'Handled by CAs/CS/Advocates', color: 'text-green-500' },
//     { icon: FiDollarSign, text: 'No hidden charges', color: 'text-gold-500' },
//     { icon: FiClock, text: 'Callback within 1 working day', color: 'text-blue-500' },
//   ];

//   return (
//     <motion.section 
//       id="estimate"
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//       className="max-w-5xl mx-auto -mt-8 px-4 relative z-10"
//     >
//       <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
//         <div className="flex items-start gap-3 mb-5">
//           <div className="p-2 bg-gold-50 rounded-xl">
//             <span className="text-2xl">💰</span>
//           </div>
//           <div>
//             <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-900">
//               Get a quick estimate <span className="text-gold-500">in minutes</span>
//             </h2>
//             <p className="text-sm text-gray-500 mt-1">
//               Tell us what you need and get a fixed quote from qualified professionals
//             </p>
//           </div>
//         </div>
        
//         <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4 mt-5">
//           <div className="space-y-1">
//             <label className="text-xs font-medium text-gray-600">Full Name *</label>
//             <input
//               type="text"
//               placeholder="John Doe"
//               className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition bg-gray-50 hover:bg-white"
//               value={formData.name}
//               onChange={(e) => setFormData({...formData, name: e.target.value})}
//               required
//             />
//           </div>
          
//           <div className="space-y-1">
//             <label className="text-xs font-medium text-gray-600">Phone / WhatsApp *</label>
//             <input
//               type="tel"
//               placeholder="+91 99846 49997"
//               className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition bg-gray-50 hover:bg-white"
//               value={formData.phone}
//               onChange={(e) => setFormData({...formData, phone: e.target.value})}
//               required
//             />
//           </div>
          
//           <div className="space-y-1">
//             <label className="text-xs font-medium text-gray-600">Email Address *</label>
//             <input
//               type="email"
//               placeholder="john@example.com"
//               className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition bg-gray-50 hover:bg-white"
//               value={formData.email}
//               onChange={(e) => setFormData({...formData, email: e.target.value})}
//               required
//             />
//           </div>
          
//           <div className="space-y-1">
//             <label className="text-xs font-medium text-gray-600">Service Required</label>
//             <select
//               className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none bg-gray-50 hover:bg-white transition"
//               value={formData.service}
//               onChange={(e) => setFormData({...formData, service: e.target.value})}
//             >
//               <option>GST Registration</option>
//               <option>ITR Filing</option>
//               <option>Company Incorporation</option>
//               <option>ROC Compliance</option>
//               <option>Statutory Audit</option>
//               <option>Legal Consultation</option>
//               <option>Other Service</option>
//             </select>
//           </div>
          
//           <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4 mt-2 pt-2 border-t border-gray-100">
//             <button 
//               type="submit"
//               disabled={isLoading || isSubmitted}
//               className={`group bg-gold-500 text-primary-900 font-semibold px-8 py-3.5 rounded-full hover:bg-gold-600 transition-all hover:scale-105 shadow-lg hover:shadow-gold-500/25 flex items-center gap-2 ${
//                 (isLoading || isSubmitted) ? 'opacity-70 cursor-not-allowed' : ''
//               }`}
//             >
//               {isLoading ? (
//                 <>
//                   <span className="w-5 h-5 border-2 border-primary-900 border-t-transparent rounded-full animate-spin" />
//                   Submitting...
//                 </>
//               ) : isSubmitted ? (
//                 <>
//                   <FiCheckCircle className="w-5 h-5" />
//                   Submitted! ✓
//                 </>
//               ) : (
//                 <>
//                   <FiSend className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   Get my free estimate
//                 </>
//               )}
//             </button>
            
//             <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600">
//               {features.map((feature, index) => (
//                 <span key={index} className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full">
//                   <feature.icon className={`w-3.5 h-3.5 ${feature.color}`} />
//                   {feature.text}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </form>
        
//         <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-100">
//           <FiShield className="w-3.5 h-3.5 text-gray-400" />
//           <p className="text-[0.65rem] text-gray-400">
//             🔒 Your data is safe. No spam ever. By submitting you agree to our Privacy Policy.
//           </p>
//         </div>
//       </div>
//     </motion.section>
//   );
// }


// app/components/EstimateForm.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiCheckCircle, FiShield, FiClock, FiDollarSign, FiAlertCircle } from 'react-icons/fi';

export function EstimateForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'GST Registration',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage('');

    try {
      const response = await fetch('https://api.corporatekaryalay.com/api/estimates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          services: formData.service,
          message: `Estimate request for ${formData.service}`,
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
        phone: '',
        email: '',
        service: 'GST Registration',
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

  const features = [
    { icon: FiCheckCircle, text: 'Handled by CAs/CS/Advocates', color: 'text-green-500' },
    { icon: FiDollarSign, text: 'No hidden charges', color: 'text-gold-500' },
    { icon: FiClock, text: 'Callback within 1 working day', color: 'text-blue-500' },
  ];

  return (
    <motion.section 
      id="estimate"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto -mt-8 px-4 relative z-10"
    >
      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
        <div className="flex items-start gap-3 mb-5">
          <div className="p-2 bg-gold-50 rounded-xl">
            <span className="text-2xl">💰</span>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-900">
              Get a quick estimate <span className="text-gold-500">in minutes</span>
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Tell us what you need and get a fixed quote from qualified professionals
            </p>
          </div>
        </div>
        
        {/* Success Message */}
        {successMessage && (
          <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
            <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-green-700 font-medium">Success!</p>
              <p className="text-green-600 text-sm">{successMessage}</p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
            <FiAlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-red-700 font-medium">Error</p>
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4 mt-5">
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-600">Full Name *</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition bg-gray-50 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              disabled={isLoading || isSubmitted}
            />
          </div>
          
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-600">Phone / WhatsApp *</label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 99846 49997"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition bg-gray-50 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
              disabled={isLoading || isSubmitted}
            />
          </div>
          
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-600">Email Address *</label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none transition bg-gray-50 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              disabled={isLoading || isSubmitted}
            />
          </div>
          
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-600">Service Required</label>
            <select
              name="service"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 outline-none bg-gray-50 hover:bg-white transition disabled:opacity-50 disabled:cursor-not-allowed"
              value={formData.service}
              onChange={(e) => setFormData({...formData, service: e.target.value})}
              disabled={isLoading || isSubmitted}
            >
              <option>GST Registration</option>
              <option>ITR Filing</option>
              <option>Company Incorporation</option>
              <option>ROC Compliance</option>
              <option>Statutory Audit</option>
              <option>Legal Consultation</option>
              <option>Other Service</option>
            </select>
          </div>
          
          <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4 mt-2 pt-2 border-t border-gray-100">
            <button 
              type="submit"
              disabled={isLoading || isSubmitted}
              className={`group bg-gold-500 text-primary-900 font-semibold px-8 py-3.5 rounded-full hover:bg-gold-600 transition-all hover:scale-105 shadow-lg hover:shadow-gold-500/25 flex items-center gap-2 ${
                (isLoading || isSubmitted) ? 'opacity-70 cursor-not-allowed hover:scale-100' : ''
              }`}
            >
              {isLoading ? (
                <>
                  <span className="w-5 h-5 border-2 border-primary-900 border-t-transparent rounded-full animate-spin" />
                  Submitting...
                </>
              ) : isSubmitted ? (
                <>
                  <FiCheckCircle className="w-5 h-5" />
                  Submitted! ✓
                </>
              ) : (
                <>
                  <FiSend className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Get my free estimate
                </>
              )}
            </button>
            
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600">
              {features.map((feature, index) => (
                <span key={index} className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full">
                  <feature.icon className={`w-3.5 h-3.5 ${feature.color}`} />
                  {feature.text}
                </span>
              ))}
            </div>
          </div>
        </form>
        
        <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-100">
          <FiShield className="w-3.5 h-3.5 text-gray-400" />
          <p className="text-[0.65rem] text-gray-400">
            🔒 Your data is safe. No spam ever. By submitting you agree to our Privacy Policy.
          </p>
        </div>
      </div>
    </motion.section>
  );
}