// app/components/Footer.tsx
import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail, FiClock, FiArrowRight } from 'react-icons/fi';

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white/70 text-sm px-4 py-12 md:py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight text-white flex items-center gap-1">
                <span className="text-gold-500">⚖️</span> 
                Corporate<span className="text-gold-500">कार्यालय</span>
              </span>
            </Link>
            <p className="text-white/50 text-xs leading-relaxed max-w-xs">
              India's leading digital compliance platform for tax, legal, and professional services.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-white/40">Trusted by 1000+ Businesses</span>
            </div>
          </div>
          
          {/* Services Column */}
          <div>
            <h5 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-gold-500 rounded-full" />
              Services
            </h5>
            <ul className="space-y-2.5">
              <li>
                <Link href="service/gst-registration" className="text-white/60 hover:text-gold-400 transition-colors duration-200 flex items-center gap-1 group">
                  <FiArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  GST
                </Link>
              </li>
              <li>
                <Link href="/service/itr-filing" className="text-white/60 hover:text-gold-400 transition-colors duration-200 flex items-center gap-1 group">
                  <FiArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  ITR Filing
                </Link>
              </li>
              <li>
                <Link href="/service/company-incorporation" className="text-white/60 hover:text-gold-400 transition-colors duration-200 flex items-center gap-1 group">
                  <FiArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Company Registration
                </Link>
              </li>
              <li>
                <Link href="/service/roc-compliance" className="text-white/60 hover:text-gold-400 transition-colors duration-200 flex items-center gap-1 group">
                  <FiArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  ROC Filings
                </Link>
              </li>
              <li>
                <Link href="/service/statutory-audit" className="text-white/60 hover:text-gold-400 transition-colors duration-200 flex items-center gap-1 group">
                  <FiArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Statutory Audit
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h5 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-gold-500 rounded-full" />
              Quick Links
            </h5>
            <ul className="space-y-2.5">
              {/* <li>
                <Link href="/pricing" className="text-white/60 hover:text-gold-400 transition-colors duration-200 flex items-center gap-1 group">
                  <FiArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-white/60 hover:text-gold-400 transition-colors duration-200 flex items-center gap-1 group">
                  <FiArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Events
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-white/60 hover:text-gold-400 transition-colors duration-200 flex items-center gap-1 group">
                  <FiArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Resources
                </Link>
              </li> */}
              <li>
                <Link href="/about" className="text-white/60 hover:text-gold-400 transition-colors duration-200 flex items-center gap-1 group">
                  <FiArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h5 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-gold-500 rounded-full" />
              Contact
            </h5>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/60 hover:text-white transition-colors duration-200">
                <FiPhone className="w-4 h-4 mt-0.5 text-gold-500 flex-shrink-0" />
                <a href="tel:+919984649997" className="hover:text-gold-400 transition">
                  +91 99846 49997
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 hover:text-white transition-colors duration-200">
                <FiMail className="w-4 h-4 mt-0.5 text-gold-500 flex-shrink-0" />
                <a href="mailto:info@corporatekaryalay.in" className="hover:text-gold-400 transition break-all">
                  info@corporatekaryalay.in
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <FiClock className="w-4 h-4 mt-0.5 text-gold-500 flex-shrink-0" />
                <span>Mon–Sat, 10am–7pm IST</span>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <FiMapPin className="w-4 h-4 mt-0.5 text-gold-500 flex-shrink-0" />
                <span>Prayagraj, Delhi NCR</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-4 pt-4 border-t border-white/5">
              {/* <a 
                href="#" 
                className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center text-white/40 hover:bg-gold-500 hover:text-primary-900 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center text-white/40 hover:bg-gold-500 hover:text-primary-900 transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a> */}
              <a 
                href="https://wa.me/919984649997" 
                className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center text-white/40 hover:bg-gold-500 hover:text-primary-900 transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[0.65rem] text-white/40 text-center sm:text-left">
            © {new Date().getFullYear()} Corporate कार्यालय. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-[0.65rem] text-white/40">
            <Link href="/privacy" className="hover:text-gold-400 transition-colors duration-200">
              Privacy Policy
            </Link>
            <span className="text-white/10">|</span>
            <Link href="/terms" className="hover:text-gold-400 transition-colors duration-200">
              Terms of Service
            </Link>
            <span className="text-white/10">|</span>
            <Link href="/cookies" className="hover:text-gold-400 transition-colors duration-200">
              Cookie Policy
            </Link>
          </div>
          <p className="text-[0.6rem] text-white/20">
            Made with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
}