// app/components/AnnouncementTicker.tsx
'use client';

import { motion } from 'framer-motion';

const announcements = [
  '📅 GST Returns due 20 Apr',
  '📌 Company ITR last date 31 Jul',
  '⚡ ROC Annual Filing – extended',
  '📅 GST Returns due 20 Apr',
  '📌 Company ITR last date 31 Jul',
  '⚡ ROC Annual Filing – extended',
];

export function AnnouncementTicker() {
  return (
    <div className="bg-gold-50 border-b border-gold-200 text-primary-900 text-xs md:text-sm font-medium py-2 overflow-hidden">
      <div className="flex items-center gap-3 max-w-7xl mx-auto px-4">
        <span className="bg-gold-500 text-white px-3 py-0.5 rounded-full text-[0.65rem] uppercase tracking-wider whitespace-nowrap font-semibold">
          Updates
        </span>
        <div className="relative overflow-hidden w-full">
          <motion.div 
            className="flex whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: 'linear',
              repeatType: 'loop'
            }}
          >
            {announcements.map((item, index) => (
              <span key={index} className="inline-block pr-10 text-primary-700">
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}