// 'use client'

// import { motion } from 'framer-motion'
// import { FiMessageCircle } from 'react-icons/fi'

// export function WhatsAppFloat() {
//   return (
//     <motion.a
//       href="#"
//       initial={{ scale: 0 }}
//       animate={{ scale: 1 }}
//       transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
//       className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:scale-110 transition-all"
//       aria-label="Chat on WhatsApp"
//     >
//       <FiMessageCircle size={28} />
//     </motion.a>
//   )
// }

'use client'

import { motion } from 'framer-motion'
import { FiMessageCircle } from 'react-icons/fi'

export function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/919984649997"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:scale-110 transition-all"
      aria-label="Chat on WhatsApp"
    >
      <FiMessageCircle size={28} />
    </motion.a>
  )
}