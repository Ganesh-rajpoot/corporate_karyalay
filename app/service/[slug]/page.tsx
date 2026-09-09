// app/service/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  FiCheckCircle, 
  FiArrowRight, 
  FiClock, 
  FiDollarSign, 
  FiUsers, 
  FiShield,
  FiFileText,
  FiMail,
  FiPhone,
  FiMessageCircle,
  FiBriefcase,
  FiAward,
  FiTrendingUp,
  FiCalendar,
  FiUser,
  FiStar
} from 'react-icons/fi';

// Complete service data
const services = [
  {
    id: 1,
    slug: 'gst-registration',
    title: 'GST Registration',
    icon: '📄',
    category: 'Registration',
    price: '₹999',
    priceRange: '₹999 - ₹2,999',
    duration: '3-5 working days',
    description: 'Professional GST registration services for businesses of all sizes. Get your GST number quickly and start your business journey with proper tax compliance.',
    longDescription: `
      GST (Goods and Services Tax) registration is mandatory for businesses with turnover exceeding ₹40 lakhs (₹20 lakhs for special category states). Our expert team handles the complete registration process, from document preparation to final approval.

      We provide end-to-end GST registration services including:
      - Complete document preparation and verification
      - Application filing on the GST portal
      - Follow-up with GST authorities
      - GST certificate delivery
      - Post-registration compliance guidance
    `,
    features: [
      'New GST registration for businesses',
      'GST amendment and modification',
      'GST cancellation services',
      'GST consultancy and advisory',
      'GST return filing support',
      'Composition scheme assistance'
    ],
    benefits: [
      'Legally compliant business operations',
      'Input tax credit (ITC) eligibility',
      'Inter-state business capability',
      'Online payment acceptance',
      'Better business credibility'
    ],
    documents: [
      'PAN Card of business/individual',
      'Aadhaar Card of proprietor/directors',
      'Business address proof',
      'Bank account details',
      'Photographs of business owner(s)',
      'Incorporation documents (if company)'
    ],
    faqs: [
      {
        question: 'Who needs GST registration?',
        answer: 'Any business with annual turnover exceeding ₹40 lakhs (₹20 lakhs for special category states) must register for GST. Additionally, businesses engaged in inter-state supply or e-commerce operations need mandatory registration regardless of turnover.'
      },
      {
        question: 'How long does GST registration take?',
        answer: 'The GST registration process typically takes 3-5 working days, provided all documents are in order. Delays may occur if additional information is requested by the GST authorities.'
      },
      {
        question: 'What documents are required for GST registration?',
        answer: 'You\'ll need PAN card, Aadhaar, proof of business address, bank account details, and photos of the business owner/s. For companies, additional incorporation documents are required.'
      }
    ],
    seo: {
      title: 'GST Registration Services | Professional GST Filing | Corporate Karyalay',
      description: 'Expert GST registration services for businesses. Get your GST number quickly with professional assistance. ✓ 100% Online ✓ Transparent Pricing ✓ CAs & Advocates',
      keywords: 'GST registration, GST filing, GST number, GST registration online, GST consultant, GST services India',
    }
  },
  {
    id: 2,
    slug: 'itr-filing',
    title: 'ITR Filing',
    icon: '📊',
    category: 'Taxation',
    price: '₹1,499',
    priceRange: '₹1,499 - ₹4,999',
    duration: '2-3 working days',
    description: 'Professional Income Tax Return filing services for individuals, professionals, and businesses. Maximize your tax savings with expert assistance.',
    longDescription: `
      Income Tax Return (ITR) filing is mandatory for individuals and businesses with taxable income. Our experienced CAs help you file accurate returns while ensuring maximum tax savings under various sections of the Income Tax Act.

      We offer comprehensive ITR filing services:
      - All ITR forms (ITR-1 to ITR-7)
      - NRI income tax return filing
      - Tax planning and advisory
      - Advance tax calculation
      - Tax notice response and representation
    `,
    features: [
      'ITR-1 to ITR-7 filing for all types',
      'NRI income tax return filing',
      'Tax planning and advisory services',
      'Advance tax calculation',
      'Tax notice response and representation',
      'Income tax assessment support'
    ],
    benefits: [
      'Maximum tax savings under sections 80C, 80D, etc.',
      'Avoid penalties and interest on late filing',
      'Professional tax computation',
      'Peace of mind with expert guidance',
      'Online tracking of return status'
    ],
    documents: [
      'PAN Card',
      'Aadhaar Card',
      'Form 16 (for salaried individuals)',
      'Bank account statements',
      'Investment proofs (80C, 80D, etc.)',
      'Property documents (if applicable)'
    ],
    faqs: [
      {
        question: 'What is the last date for ITR filing?',
        answer: 'The due date for ITR filing is July 31st (for individuals not requiring audit) and October 31st (for businesses requiring audit). Extension dates are announced by the government from time to time.'
      },
      {
        question: 'Which ITR form should I file?',
        answer: 'The ITR form depends on your income type: ITR-1 (salaried), ITR-2 (capital gains/NRI), ITR-3 (business/profession), ITR-4 (presumptive), ITR-5 (partnership/LLP), ITR-6 (companies), ITR-7 (trusts/NGOs).'
      },
      {
        question: 'What are the penalties for late ITR filing?',
        answer: 'Late filing penalties range from ₹1,000 to ₹10,000 depending on income level. Interest under sections 234A, 234B, and 234C may also apply for delayed payments and advance tax defaults.'
      }
    ],
    seo: {
      title: 'ITR Filing Services | Income Tax Return Filing | Corporate Karyalay',
      description: 'Expert ITR filing services for individuals, professionals, and businesses. Maximize tax savings with qualified CAs. ✓ Quick Filing ✓ Guaranteed Accuracy ✓ Best Rates',
      keywords: 'ITR filing, income tax return, ITR online filing, income tax consultant, tax return filing, ITR e-filing',
    }
  },
  {
    id: 3,
    slug: 'company-incorporation',
    title: 'Company Incorporation',
    icon: '🏛️',
    category: 'Registration',
    price: '₹6,999',
    priceRange: '₹6,999 - ₹15,999',
    duration: '7-10 working days',
    description: 'Complete company registration services including Private Limited, LLP, and One Person Company. Start your business journey with the right legal structure.',
    longDescription: `
      Company incorporation is the process of legally registering your business entity. We help you choose the right business structure and handle the complete registration process with ROC, MCA, and other regulatory authorities.

      Our incorporation services cover:
      - Private Limited Company registration
      - Limited Liability Partnership (LLP) formation
      - One Person Company (OPC) registration
      - Partnership firm registration
      - Director identification number (DIN) application
      - Digital signature certificate (DSC) procurement
    `,
    features: [
      'Private Limited Company registration',
      'LLP formation and registration',
      'One Person Company (OPC) setup',
      'Partnership firm registration',
      'DIN and DSC procurement',
      'PAN and TAN application'
    ],
    benefits: [
      'Limited liability protection',
      'Better business credibility',
      'Easy access to funding',
      'Perpetual succession',
      'Separate legal identity'
    ],
    documents: [
      'PAN Card of directors',
      'Aadhaar Card of directors',
      'Address proof of directors',
      'Registered office address proof',
      'DIN and DSC of directors',
      'Memorandum and Articles of Association'
    ],
    faqs: [
      {
        question: 'What is the minimum capital required for company registration?',
        answer: 'There is no minimum capital requirement for Private Limited Companies and LLPs. You can start with any amount of capital based on your business needs.'
      },
      {
        question: 'How many directors are required for a Private Limited Company?',
        answer: 'A Private Limited Company requires a minimum of 2 directors and 2 shareholders. One person can act as both director and shareholder.'
      },
      {
        question: 'What is the difference between Private Limited and LLP?',
        answer: 'Private Limited offers equity-based ownership and is suitable for businesses seeking funding. LLP offers flexible ownership structure with limited liability and is ideal for professional services and family businesses.'
      }
    ],
    seo: {
      title: 'Company Incorporation Services | Business Registration | Corporate Karyalay',
      description: 'Expert company incorporation services for Private Limited, LLP, OPC, and partnerships. Start your business with the right legal structure. ✓ ROC Filing ✓ PAN/TAN ✓ DSC',
      keywords: 'company registration, business incorporation, LLP registration, private limited company, OPC registration, business setup',
    }
  },
  {
    id: 4,
    slug: 'statutory-audit',
    title: 'Statutory Audit',
    icon: '📋',
    category: 'Audit',
    price: '₹4,500',
    priceRange: '₹4,500 - ₹15,000',
    duration: '5-7 working days',
    description: 'Professional statutory audit services for businesses. Ensure compliance with Companies Act, Income Tax Act, and other regulatory requirements.',
    longDescription: `
      Statutory audit is a legally required examination of a company's financial records. Our team of qualified chartered accountants conducts thorough audits to ensure accuracy and compliance with applicable laws and regulations.

      We provide comprehensive audit services:
      - Company statutory audit under Companies Act
      - Tax audit under Section 44AB of Income Tax Act
      - Internal audit and management audit
      - GST audit and compliance review
      - Forensic audit and investigation
    `,
    features: [
      'Company statutory audit',
      'Tax audit (44AB)',
      'Internal audit services',
      'GST audit and compliance',
      'Forensic audit',
      'Management audit'
    ],
    benefits: [
      'Regulatory compliance assurance',
      'Accurate financial reporting',
      'Internal control improvement',
      'Fraud detection and prevention',
      'Better stakeholder confidence'
    ],
    documents: [
      'Financial statements (Profit & Loss, Balance Sheet)',
      'Bank statements and reconciliations',
      'Invoices and receipts',
      'GST returns and reports',
      'TDS returns and certificates',
      'Board minutes and resolutions'
    ],
    faqs: [
      {
        question: 'Who needs a statutory audit?',
        answer: 'Companies, LLPs, and specified entities are required to get their accounts audited annually. Turnover thresholds under the Income Tax Act also trigger mandatory tax audit requirements.'
      },
      {
        question: 'What is the difference between statutory audit and tax audit?',
        answer: 'Statutory audit is required under Companies Act for financial compliance. Tax audit is required under Income Tax Act when turnover exceeds specified thresholds (₹1 crore for businesses, ₹50 lakhs for professionals).'
      },
      {
        question: 'How long does the audit process take?',
        answer: 'The audit process typically takes 5-7 working days, depending on the size of the business and completeness of financial records.'
      }
    ],
    seo: {
      title: 'Statutory Audit Services | Tax Audit | Corporate Karyalay',
      description: 'Professional statutory audit services for businesses. Ensure compliance with Companies Act, Income Tax Act, and regulatory requirements. ✓ CA Experts ✓ Compliance Guaranteed',
      keywords: 'statutory audit, tax audit, company audit, audit services, income tax audit, financial audit',
    }
  },
  {
    id: 5,
    slug: 'roc-compliance',
    title: 'ROC Compliance',
    icon: '⚖️',
    category: 'Compliance',
    price: '₹3,999',
    priceRange: '₹3,999 - ₹9,999',
    duration: '5-7 working days',
    description: 'Complete ROC compliance services including annual returns, board resolutions, and MCA filings. Keep your company compliant with ROC requirements.',
    longDescription: `
      ROC (Registrar of Companies) compliance is mandatory for all registered companies and LLPs. Our expert team ensures timely filing of all required forms and documents with the Ministry of Corporate Affairs (MCA).

      We provide end-to-end ROC compliance services:
      - Annual return filing (MGT-7/MGT-7A)
      - Financial statement filing (AOC-4)
      - DIR-3 KYC for directors
      - ADT-1 auditor appointment
      - Board resolution drafting
      - Compliance checklist and advisory
    `,
    features: [
      'Annual return filing (MGT-7/MGT-7A)',
      'Financial statement filing (AOC-4)',
      'DIR-3 KYC for directors',
      'ADT-1 auditor appointment',
      'Board resolution drafting',
      'MCA compliance advisory'
    ],
    benefits: [
      'Avoid ROC penalties and fines',
      'Maintain good standing with MCA',
      'Professional compliance management',
      'Timely filings and reminders',
      'Peace of mind for directors'
    ],
    documents: [
      'Board meeting minutes',
      'Financial statements',
      'Director details',
      'Shareholding pattern',
      'Auditor appointment letter',
      'Previous ROC filings'
    ],
    faqs: [
      {
        question: 'What are the ROC compliance requirements for companies?',
        answer: 'Companies must file annual returns (MGT-7), financial statements (AOC-4), DIR-3 KYC for directors, and ADT-1 for auditor appointment. Additional forms may be required for specific events.'
      },
      {
        question: 'What is the due date for ROC annual filing?',
        answer: 'Annual return (MGT-7) must be filed within 60 days of AGM. Financial statements (AOC-4) must be filed within 30 days of AGM. The AGM must be held within 6 months of the financial year end.'
      },
      {
        question: 'What are the penalties for late ROC filing?',
        answer: 'Late filing penalties range from ₹100 to ₹200 per day per form, depending on the type of form and delay period. Additional penalties may apply for repeated non-compliance.'
      }
    ],
    seo: {
      title: 'ROC Compliance Services | MCA Filings | Corporate Karyalay',
      description: 'Complete ROC compliance services including annual returns, board resolutions, and MCA filings. ✓ ROC Experts ✓ Timely Filings ✓ Compliance Guaranteed',
      keywords: 'ROC compliance, MCA filing, annual return filing, ROC annual compliance, company compliance, MGT-7 filing',
    }
  },
  {
    id: 6,
    slug: 'legal-documentation',
    title: 'Legal Documentation',
    icon: '📝',
    category: 'Legal',
    price: '₹2,499',
    priceRange: '₹2,499 - ₹7,999',
    duration: '2-4 working days',
    description: 'Professional legal documentation services including contracts, agreements, and legal notices. Protect your business with proper legal documentation.',
    longDescription: `
      Legal documentation is essential for protecting your business interests and ensuring smooth operations. Our experienced advocates draft and review legal documents to ensure they are legally sound and enforceable.

      We provide comprehensive legal documentation services:
      - Commercial contracts and agreements
      - Legal notices and responses
      - Shareholder and partnership agreements
      - Employment and service agreements
      - Property documents and leases
      - Terms of service and privacy policies
    `,
    features: [
      'Commercial contracts and agreements',
      'Legal notices and responses',
      'Shareholder and partnership agreements',
      'Employment and service agreements',
      'Property documents and leases',
      'Terms of service and privacy policies'
    ],
    benefits: [
      'Legally enforceable documents',
      'Protection of business interests',
      'Clear terms and conditions',
      'Risk mitigation',
      'Professional legal drafting'
    ],
    documents: [
      'Business details and requirements',
      'Existing agreements (if any)',
      'Company registration documents',
      'Identity proofs of parties',
      'Property or asset details',
      'Specific requirements and clauses'
    ],
    faqs: [
      {
        question: 'Why is legal documentation important for businesses?',
        answer: 'Legal documentation protects business interests, defines rights and obligations, prevents disputes, ensures compliance, and provides legal recourse in case of disputes.'
      },
      {
        question: 'How long does it take to draft a legal document?',
        answer: 'Simple contracts take 2-3 working days. Complex agreements with multiple clauses may take 4-7 working days. Rush services are available at additional charges.'
      },
      {
        question: 'What types of legal documents do you draft?',
        answer: 'We draft all types of business documents including NDAs, employment contracts, service agreements, partnership deeds, shareholder agreements, legal notices, and more.'
      }
    ],
    seo: {
      title: 'Legal Documentation Services | Contract Drafting | Corporate Karyalay',
      description: 'Professional legal documentation services including contracts, agreements, and legal notices. ✓ Expert Advocates ✓ Legally Sound ✓ Quick Turnaround',
      keywords: 'legal documentation, contract drafting, legal agreement, legal notice, contract review, legal services',
    }
  },
  {
    id: 7,
    slug: 'gst-return-filing',
    title: 'GST Return Filing',
    icon: '💰',
    category: 'Taxation',
    price: '₹999',
    priceRange: '₹999 - ₹1,999',
    duration: '1-2 working days',
    description: 'Professional GST return filing services for businesses. File your GST returns on time and avoid penalties with our expert assistance.',
    longDescription: `
      GST return filing is mandatory for all registered GST taxpayers. Our expert team ensures accurate and timely filing of all GST returns, helping you comply with tax regulations and avoid penalties.

      We provide comprehensive GST return filing services:
      - GSTR-1 filing (outward supplies)
      - GSTR-3B filing (summary return)
      - GSTR-9 filing (annual return)
      - GSTR-4 filing (composition scheme)
      - GSTR-6 filing (ISD)
      - GSTR-7 filing (TDS)
    `,
    features: [
      'GSTR-1 outward supply filing',
      'GSTR-3B summary return filing',
      'GSTR-9 annual return filing',
      'GSTR-4 composition scheme filing',
      'GSTR-6 ISD filing',
      'GSTR-7 TDS filing'
    ],
    benefits: [
      'Timely GST return filing',
      'Avoid late fees and penalties',
      'Accurate tax computation',
      'Input tax credit reconciliation',
      'GST compliance assurance'
    ],
    documents: [
      'GST login credentials',
      'Sales and purchase invoices',
      'Bank statements',
      'Previous GST returns',
      'Input tax credit details',
      'Export/import documents (if applicable)'
    ],
    faqs: [
      {
        question: 'What is the due date for GST return filing?',
        answer: 'GSTR-3B is due on the 20th of the following month. GSTR-1 is due on the 11th of the following month. GSTR-9 (annual) is due on December 31st of the following year.'
      },
      {
        question: 'What are the penalties for late GST return filing?',
        answer: 'Late fees are ₹50 per day (₹25 CGST + ₹25 SGST) for GSTR-3B and GSTR-1. Interest at 18% applies on outstanding tax liability if paid after the due date.'
      },
      {
        question: 'What is the difference between GSTR-1 and GSTR-3B?',
        answer: 'GSTR-1 shows details of outward supplies (sales). GSTR-3B is a summary return showing total sales, purchases, and tax payable. Both must be filed for proper GST compliance.'
      }
    ],
    seo: {
      title: 'GST Return Filing Services | GST Compliance | Corporate Karyalay',
      description: 'Professional GST return filing services including GSTR-1, GSTR-3B, GSTR-9, and more. ✓ Timely Filing ✓ Expert Assistance ✓ Error-Free Returns',
      keywords: 'GST return filing, GSTR-1 filing, GSTR-3B filing, GST compliance, GST consultant, GST filing services',
    }
  },
  {
    id: 8,
    slug: 'trademark-registration',
    title: 'Trademark Registration',
    icon: '🔐',
    category: 'Registration',
    price: '₹5,999',
    priceRange: '₹4,999 - ₹8,999',
    duration: '6-18 months',
    description: 'Brand protection and intellectual property registration services. Secure your brand identity with professional trademark registration.',
    longDescription: `
      Trademark registration protects your brand identity and gives you exclusive rights to use your trademark. Our expert team handles the complete registration process from search to final registration.

      We provide complete trademark registration services:
      - Trademark availability search
      - Application filing and documentation
      - Examination report response
      - Opposition handling and representation
      - Renewal and maintenance services
      - Trademark monitoring and enforcement
    `,
    features: [
      'Trademark availability search',
      'Application filing and documentation',
      'Examination report response',
      'Opposition handling and representation',
      'Renewal and maintenance services',
      'Trademark monitoring'
    ],
    benefits: [
      'Exclusive rights to use the trademark',
      'Legal protection against infringement',
      'Brand value enhancement',
      'Business credibility and trust',
      'Asset creation for business'
    ],
    documents: [
      'Trademark logo/design',
      'Business proof (Registration certificate)',
      'Identity proof of applicant',
      'Address proof',
      'User affidavit (if applicable)',
      'Power of attorney'
    ],
    faqs: [
      {
        question: 'How long does trademark registration take?',
        answer: 'The trademark registration process typically takes 6-18 months from filing to registration. This includes examination, publication, and opposition periods.'
      },
      {
        question: 'What can be registered as a trademark?',
        answer: 'You can register logos, brand names, slogans, designs, packaging, colors, sounds, and even scents. The trademark must be distinctive and not descriptive of the goods/services.'
      },
      {
        question: 'Is trademark registration valid worldwide?',
        answer: 'Trademark registration is territorial and protects your mark only in India. For international protection, you need to file in each country or use the Madrid Protocol system.'
      }
    ],
    seo: {
      title: 'Trademark Registration Services | Brand Protection | Corporate Karyalay',
      description: 'Professional trademark registration services for brand protection. Secure your brand identity with expert assistance. ✓ Trademark Search ✓ Filing ✓ Opposition Support',
      keywords: 'trademark registration, brand registration, trademark filing, trademark search, brand protection, IP registration',
    }
  },
  {
    id: 9,
    slug: 'legal-consultation',
    title: 'Legal Consultation',
    icon: '👨‍⚖️',
    category: 'Legal',
    price: '₹499',
    priceRange: '₹499 - ₹2,499',
    duration: 'Within 24 hours',
    description: '30-minute legal consultation with a verified advocate. Get expert legal advice for your business and personal matters.',
    longDescription: `
      Legal consultation provides expert advice and guidance on various legal matters. Our experienced advocates help you understand your legal rights and options.

      Our legal consultation services cover:
      - Business and corporate law
      - Employment and labor law
      - Property and real estate law
      - Family and matrimonial law
      - Criminal and civil law
      - Legal document review
    `,
    features: [
      'Business and corporate law advice',
      'Employment and labor law guidance',
      'Property and real estate consultation',
      'Family and matrimonial legal advice',
      'Criminal and civil law guidance',
      'Legal document review'
    ],
    benefits: [
      'Expert legal guidance',
      'Confidential consultation',
      'Clear understanding of legal rights',
      'Practical solutions to legal issues',
      'Affordable professional advice'
    ],
    documents: [
      'Brief case summary',
      'Relevant documents (if any)',
      'Identity proof',
      'Prior correspondence (if applicable)',
      'Legal notices (if received)',
      'Any other relevant information'
    ],
    faqs: [
      {
        question: 'How does the legal consultation work?',
        answer: 'You schedule a 30-minute consultation with a verified advocate. You can discuss your legal issues, get expert advice, and understand your legal options.'
      },
      {
        question: 'Is the legal consultation confidential?',
        answer: 'Yes, all consultations are strictly confidential. Advocate-client privilege applies to all discussions during the consultation.'
      },
      {
        question: 'What should I prepare for the consultation?',
        answer: 'Please prepare a brief summary of your legal issue, gather any relevant documents, and prepare a list of questions you want to ask the advocate.'
      }
    ],
    seo: {
      title: 'Legal Consultation Services | Online Lawyer Consultation | Corporate Karyalay',
      description: 'Expert legal consultation services with verified advocates. Get professional legal advice for business and personal matters. ✓ Confidential ✓ Affordable ✓ Expert Advice',
      keywords: 'legal consultation, lawyer consultation, online legal advice, legal services, advocate consultation, legal guidance',
    }
  },
  {
    id: 10,
    slug: 'tds-return-filing',
    title: 'TDS Return Filing',
    icon: '📈',
    category: 'Taxation',
    price: '₹1,499',
    priceRange: '₹1,499 - ₹3,999',
    duration: '2-3 working days',
    description: 'Professional TDS return filing services including quarterly returns and TAN management. Stay compliant with TDS regulations.',
    longDescription: `
      TDS (Tax Deducted at Source) return filing is mandatory for entities deducting tax on payments. Our expert team ensures accurate and timely filing of all TDS returns.

      We provide comprehensive TDS services:
      - Quarterly TDS return filing
      - TAN registration and management
      - TDS certificates (Form 16/16A)
      - TDS compliance and advisory
      - Correction and revision of returns
      - TDS reconciliation and reporting
    `,
    features: [
      'Quarterly TDS return filing',
      'TAN registration and management',
      'TDS certificates (Form 16/16A)',
      'TDS compliance and advisory',
      'Correction and revision services',
      'TDS reconciliation'
    ],
    benefits: [
      'Timely TDS return filing',
      'Avoid penalties and interest',
      'Accurate TDS compliance',
      'TDS certificate issuance',
      'Professional tax management'
    ],
    documents: [
      'TAN number',
      'TDS payment challans',
      'TDS deduction details',
      'PAN of deductees',
      'TDS certificates (if applicable)',
      'Previous TDS returns'
    ],
    faqs: [
      {
        question: 'What is the due date for TDS return filing?',
        answer: 'TDS returns must be filed quarterly: Q1 (Apr-Jun) - Jul 31, Q2 (Jul-Sep) - Oct 31, Q3 (Oct-Dec) - Jan 31, Q4 (Jan-Mar) - May 31.'
      },
      {
        question: 'What are the penalties for late TDS return filing?',
        answer: 'Late filing penalty is ₹200 per day under Section 234E. Additional interest under Section 234A applies on late payment of TDS. Also, penalty under Section 271H may apply for repeated defaults.'
      },
      {
        question: 'What is the difference between Form 16 and Form 16A?',
        answer: 'Form 16 is issued to employees for TDS on salary. Form 16A is issued to non-employees for TDS on non-salary payments like fees, commission, or professional services.'
      }
    ],
    seo: {
      title: 'TDS Return Filing Services | TDS Compliance | Corporate Karyalay',
      description: 'Professional TDS return filing services including quarterly returns, TAN management, and compliance. ✓ Timely Filing ✓ Error-Free ✓ Expert Assistance',
      keywords: 'TDS return filing, TDS compliance, TAN registration, TDS certificate, TDS return, income tax TDS',
    }
  },
  {
    id: 11,
    slug: 'msme-registration',
    title: 'MSME / Udyam Registration',
    icon: '🏢',
    category: 'Registration',
    price: 'Free',
    priceRange: 'Free',
    duration: '1-2 working days',
    description: 'Free MSME registration with Udyam portal. Get your MSME certificate and enjoy government benefits for small businesses.',
    longDescription: `
      MSME (Micro, Small & Medium Enterprises) registration is a government initiative to support small businesses. Get your Udyam Registration certificate and access various government schemes and benefits.

      We provide complete MSME registration services:
      - Udyam Registration (MSME registration)
      - MSME certificate issuance
      - EM-II filing and support
      - Benefits and scheme advisory
      - Upgradation and renewal services
      - NSIC registration assistance
    `,
    features: [
      'Udyam Registration (MSME registration)',
      'MSME certificate issuance',
      'EM-II filing and support',
      'Benefits and scheme advisory',
      'Upgradation and renewal services',
      'NSIC registration assistance'
    ],
    benefits: [
      'Priority sector lending (PSL)',
      'Interest rate subsidy',
      'Government tender eligibility',
      'Exemption from certain taxes',
      'Protection against delayed payments'
    ],
    documents: [
      'Aadhaar Card',
      'PAN Card',
      'Business proof (Registration certificate)',
      'Bank account details',
      'Investment and turnover details',
      'Previous registration (if any)'
    ],
    faqs: [
      {
        question: 'Who is eligible for MSME registration?',
        answer: 'Micro (<₹1 cr investment), Small (<₹10 cr investment), and Medium (<₹50 cr investment) enterprises are eligible for MSME registration.'
      },
      {
        question: 'Is MSME registration mandatory?',
        answer: 'MSME registration is voluntary but recommended as it provides access to various government schemes, benefits, and business opportunities.'
      },
      {
        question: 'What are the benefits of MSME registration?',
        answer: 'Benefits include priority sector lending, interest rate subsidies, government tender eligibility, tax exemptions, and protection against delayed payments from buyers.'
      }
    ],
    seo: {
      title: 'MSME Registration | Udyam Registration | Corporate Karyalay',
      description: 'Free MSME and Udyam Registration services for small businesses. Get your MSME certificate and access government benefits. ✓ Free Service ✓ Quick Processing ✓ Expert Support',
      keywords: 'MSME registration, Udyam registration, MSME certificate, small business registration, Udyam portal, MSME benefits',
    }
  },
  {
    id: 12,
    slug: 'annual-compliance',
    title: 'Annual Compliance (Pvt Ltd)',
    icon: '📑',
    category: 'Compliance',
    price: '₹5,999',
    priceRange: '₹5,999 - ₹1999',
    duration: '7-10 working days',
    description: 'Complete annual compliance services for Private Limited Companies. File ROC returns, hold board meetings, and stay compliant.',
    longDescription: `
      Annual compliance is mandatory for all Private Limited Companies. Our expert team ensures complete compliance with Companies Act, ROC requirements, and other regulatory obligations.

      We provide comprehensive annual compliance services:
      - Board meeting organization and minutes
      - Annual General Meeting (AGM) support
      - ROC annual return filing (MGT-7)
      - Financial statement filing (AOC-4)
      - Director KYC compliance
      - Compliance checklist and advisory
    `,
    features: [
      'Board meeting organization and minutes',
      'Annual General Meeting (AGM) support',
      'ROC annual return filing (MGT-7)',
      'Financial statement filing (AOC-4)',
      'Director KYC compliance',
      'Compliance checklist and advisory'
    ],
    benefits: [
      'Complete ROC compliance',
      'Avoid penalties and fines',
      'Professional compliance management',
      'Peace of mind for directors',
      'Good standing with regulatory bodies'
    ],
    documents: [
      'Financial statements (Profit & Loss, Balance Sheet)',
      'Board meeting minutes',
      'Director details',
      'Shareholding information',
      'Auditor details',
      'Previous year compliance records'
    ],
    faqs: [
      {
        question: 'What is included in annual compliance for Private Ltd?',
        answer: 'Annual compliance includes board meetings, AGM, filing of MGT-7 (annual return), AOC-4 (financial statements), DIR-3 KYC, ADT-1, and various event-based filings.'
      },
      {
        question: 'What are the penalties for non-compliance?',
        answer: 'Penalties range from ₹100 to ₹200 per day per form for late ROC filings. Additional penalties under Section 454 of Companies Act may also apply. Directors may face disqualification for repeated defaults.'
      },
      {
        question: 'How can I ensure timely compliance?',
        answer: 'We provide timely reminders, maintain a compliance calendar, handle all filings, and ensure all statutory requirements are met. You get peace of mind while we manage the compliance.'
      }
    ],
    seo: {
      title: 'Annual Compliance Services for Private Ltd | ROC Compliance | Corporate Karyalay',
      description: 'Complete annual compliance services for Private Limited Companies. ROC filing, board meetings, and compliance management. ✓ Professional ✓ Timely ✓ Hassle-Free',
      keywords: 'annual compliance, private limited compliance, ROC compliance, company annual filing, MGT-7 filing, AOC-4 filing',
    }
  },
    {
    id: 13,
    slug: 'ngo-darpan-registration',
    title: 'NGO Darpan Registration',
    icon: '🤝',
    category: 'Registration',
    price: '₹499',
    priceRange: '₹499 - ₹1,999',
    duration: '7-10 working days',
    description: 'Professional NGO Darpan registration services for trusts, societies, and Section 8 companies. Get listed on the NITI Aayog Darpan portal to access government grants and CSR funding.',
    longDescription: `
      NGO Darpan is a portal maintained by NITI Aayog that provides a unique identification (Darpan ID) to voluntary organizations (VOs) and NGOs in India. Registration on the portal is mandatory for NGOs seeking government grants, CSR funds, and participation in government schemes.

      We provide end-to-end NGO Darpan registration services including:
      - Complete document preparation and verification
      - Online application filing on the NGO Darpan portal
      - Coordination with the concerned Nodal Department
      - Darpan Unique ID (Darpan ID) delivery
      - Post-registration compliance guidance
    `,
    features: [
      'New NGO Darpan ID registration',
      'Trust, Society & Section 8 Company onboarding',
      'Darpan profile updation and correction',
      'CSR-1 filing assistance',
      '80G/12A linkage guidance',
      'Government scheme eligibility advisory'
    ],
    benefits: [
      'Eligibility for government grants and schemes',
      'Access to CSR funding from corporates',
      'Enhanced credibility and transparency',
      'Mandatory for FCRA and CSR-1 applications',
      'Recognition by NITI Aayog and government departments'
    ],
    documents: [
      'Trust Deed / Society Registration Certificate / Section 8 Incorporation Certificate',
      'PAN Card of the organization',
      'Registered address proof',
      'Details of governing body members (PAN & Aadhaar)',
      'Details of chief functionary',
      'Bank account details of the organization'
    ],
    faqs: [
      {
        question: 'Who needs NGO Darpan registration?',
        answer: 'Any trust, society, or Section 8 company seeking government grants, CSR funding, or wanting to register under FCRA or file CSR-1 must first obtain an NGO Darpan Unique ID.'
      },
      {
        question: 'How long does NGO Darpan registration take?',
        answer: 'The registration process typically takes 7-10 working days after submission of the online application, subject to verification and approval by the concerned Nodal Department.'
      },
      {
        question: 'Is NGO Darpan registration mandatory?',
        answer: 'While not mandatory for basic operations, it is a prerequisite for accessing government grants, CSR-1 filing, FCRA registration, and several state and central government schemes.'
      }
    ],
    seo: {
      title: 'NGO Darpan Registration Services | NITI Aayog NGO Registration | Corporate Karyalay',
      description: 'Expert NGO Darpan registration services for trusts, societies & Section 8 companies. Get your Darpan ID for government grants & CSR funding. ✓ 100% Online ✓ Expert Assistance',
      keywords: 'NGO Darpan registration, NITI Aayog NGO registration, Darpan ID, NGO registration online, CSR-1 filing, NGO compliance India',
    }
  },
  {
    id: 14,
    slug: 'import-export-code',
    title: 'Import Export Code (IEC)',
    icon: '🌐',
    category: 'Registration',
    price: '₹1,499',
    priceRange: '₹499 - ₹1,999',
    duration: '3-5 working days',
    description: 'Fast and reliable Import Export Code (IEC) registration services. Get your IEC from DGFT and start your international trade business with complete compliance.',
    longDescription: `
      Import Export Code (IEC) is a 10-digit business identification number issued by the Directorate General of Foreign Trade (DGFT) that is mandatory for any business involved in import or export of goods and services from India.

      We provide complete IEC registration services:
      - Document preparation and verification
      - Online application filing on the DGFT portal
      - Digital signature (DSC) / Aadhaar-based e-sign support
      - Follow-up with DGFT authorities
      - IEC certificate delivery
      - Post-registration modification and update support
    `,
    features: [
      'New IEC code registration',
      'IEC modification and update',
      'IEC surrender services',
      'RCMC (Registration cum Membership Certificate) assistance',
      'AD Code registration support',
      'Import-export compliance advisory'
    ],
    benefits: [
      'Legal authorization to import/export',
      'Access to export incentives and schemes',
      'No requirement for periodic renewal or filing',
      'Enables international banking and customs clearance',
      'Enhanced business expansion opportunities'
    ],
    documents: [
      'PAN Card of business/individual',
      'Aadhaar Card of proprietor/partners/directors',
      'Business address proof',
      'Cancelled cheque / bank certificate',
      'Incorporation/registration certificate (if company/LLP)',
      'Digital signature or Aadhaar for e-sign (if applicable)'
    ],
    faqs: [
      {
        question: 'Who needs an Import Export Code (IEC)?',
        answer: 'Any individual or business entity planning to import or export goods or services from India must obtain an IEC from DGFT, unless specifically exempted (such as for personal use goods not connected with trade).'
      },
      {
        question: 'How long does it take to get an IEC?',
        answer: 'IEC registration is typically processed within 3-5 working days once the application and documents are submitted correctly on the DGFT portal.'
      },
      {
        question: 'Does IEC need to be renewed every year?',
        answer: 'No, IEC does not require renewal. However, as per DGFT rules, IEC details must be confirmed/updated online annually between April and June, even if there is no change.'
      }
    ],
    seo: {
      title: 'Import Export Code (IEC) Registration | DGFT IEC Online | Corporate Karyalay',
      description: 'Professional IEC registration services for import-export businesses. Get your DGFT Import Export Code quickly. ✓ 100% Online ✓ Fast Processing ✓ Expert Support',
      keywords: 'Import Export Code, IEC registration, DGFT IEC, IEC code online, import export license, IEC certificate India',
    }
  },
];

// Generate metadata for each service
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  
  if (!service) {
    return {
      title: 'Service Not Found - Corporate Karyalay',
      description: 'The service you are looking for does not exist.',
    };
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      type: 'website',
      url: `https://corporatekaryalay.com/service/${service.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: service.seo.title,
      description: service.seo.description,
    },
  };
}

// Generate static params for all services
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Taxation': return 'bg-blue-100 text-blue-700';
      case 'Registration': return 'bg-green-100 text-green-700';
      case 'Audit': return 'bg-purple-100 text-purple-700';
      case 'Compliance': return 'bg-orange-100 text-orange-700';
      case 'Legal': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`inline-block px-3 py-1 ${getCategoryColor(service.category)} rounded-full text-xs font-semibold`}>
                  {service.category}
                </span>
                <span className="text-white/50 text-sm">•</span>
                <span className="text-white/60 text-sm flex items-center gap-1">
                  <FiClock className="w-4 h-4" /> {service.duration}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                {service.icon} {service.title}
              </h1>
              <p className="text-white/80 text-lg mt-4 max-w-2xl">
                {service.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-6">
                <span className="text-3xl font-bold text-gold-400">{service.price}</span>
                <span className="text-white/50">•</span>
                <span className="text-white/70 text-sm">{service.priceRange}</span>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                <Link 
                  href="/estimate" 
                  className="inline-flex items-center gap-2 bg-gold-500 text-primary-900 font-semibold px-6 py-3 rounded-xl hover:bg-gold-600 transition-all hover:scale-105 shadow-lg hover:shadow-gold-500/25"
                >
                  Get Free Estimate
                  <FiArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="tel:+919984649997" 
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-xl hover:bg-white/20 transition"
                >
                  <FiPhone className="w-5 h-5" /> Call Now
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {service.features.slice(0, 4).map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/90">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                Service Overview
              </h2>
              <div className="prose prose-gold max-w-none text-gray-600 whitespace-pre-line">
                {service.longDescription}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                Key Benefits
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                    <FiCheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents Required */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                Documents Required
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.documents.map((doc, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <FiFileText className="w-5 h-5 text-gold-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {service.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <h3 className="font-semibold text-primary-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Quick Info */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h3 className="font-bold text-primary-900 text-lg mb-4">Quick Info</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <FiClock className="w-5 h-5 text-gold-500" />
                  <div>
                    <p className="text-xs text-gray-500">Duration</p>
                    <p className="text-sm font-semibold text-primary-900">{service.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <FiDollarSign className="w-5 h-5 text-gold-500" />
                  <div>
                    <p className="text-xs text-gray-500">Price Range</p>
                    <p className="text-sm font-semibold text-primary-900">{service.priceRange}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <FiUsers className="w-5 h-5 text-gold-500" />
                  <div>
                    <p className="text-xs text-gray-500">Category</p>
                    <p className="text-sm font-semibold text-primary-900">{service.category}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Cards */}
            <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl shadow-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Ready to Get Started?</h3>
              <p className="text-white/70 text-sm mb-4">
                Get a free, no-obligation quote for {service.title}
              </p>
              <Link 
                href="/estimate" 
                className="inline-flex items-center gap-2 bg-gold-500 text-primary-900 font-semibold px-6 py-3 rounded-xl hover:bg-gold-600 transition-all hover:scale-105 w-full justify-center"
              >
                Get Free Estimate
                <FiArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h3 className="font-bold text-primary-900 text-sm mb-2">Prefer to Call?</h3>
              <a href="tel:+919984649997" className="text-xl font-bold text-gold-500 hover:text-gold-600 transition block">
                +91 99846 49997
              </a>
              <p className="text-xs text-gray-400 mt-1">Mon–Sat, 10am–7pm IST</p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
              <h3 className="font-bold text-primary-900 text-sm mb-3">Share via WhatsApp</h3>
              <Link 
                href="#" 
                className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition"
              >
                <FiMessageCircle className="w-5 h-5" /> Chat with us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="max-w-7xl mx-auto px-4 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-display font-bold text-primary-900 text-center mb-2">
          Related <span className="text-gold-500">Services</span>
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Explore other services in the {service.category} category
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services
            .filter(s => s.category === service.category && s.id !== service.id)
            .slice(0, 4)
            .map((related) => (
              <Link 
                key={related.id}
                href={`/service/${related.slug}`}
                className="group bg-white rounded-2xl p-4 shadow-soft border border-gray-100 hover:shadow-xl hover:border-gold-200/50 transition-all hover:-translate-y-1"
              >
                <span className="text-2xl block mb-2">{related.icon}</span>
                <h4 className="font-semibold text-primary-900 group-hover:text-gold-600 transition text-sm">{related.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{related.price}</p>
              </Link>
            ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl shadow-xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
            Need Professional Help for {service.title}?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our experts are here to help you with complete {service.title} services. 
            Get a free, no-obligation quote today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <Link 
              href="/estimate" 
              className="inline-flex items-center gap-2 bg-gold-500 text-primary-900 font-semibold px-8 py-3.5 rounded-full hover:bg-gold-600 transition-all hover:scale-105 shadow-lg hover:shadow-gold-500/25"
            >
              Get Free Estimate
              <FiArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3.5 rounded-full hover:bg-white/20 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}