/**
 * Central Configuration for KC Overseas Education
 * Repositioned for Tamil Nadu students with Namakkal office as local contact.
 * Minimal, trust-focused, high-confidence copy.
 */

export interface CountryDestination {
  id: string;
  name: string;
  code: string;
  flag: string;
  oneLiner: string;
}

export interface ServiceOffering {
  id: string;
  name: string;
  category: 'coaching' | 'assistance';
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  degree: string;
  university: string;
  country: string;
  quote: string;
  avatarPlaceholder: string;
}

export interface UpcomingBatch {
  id: string;
  course: string;
  startDate: string;
  mode: string;
  timing: string;
}

export const siteConfig = {
  // Brand & Regional Metadata
  brandName: 'KC Overseas Education',
  regionName: 'Tamil Nadu',
  tagline: 'Study Abroad with Complete Confidence',
  subheadline: '1,200+ universities worldwide. End-to-end guidance from application to visa.',
  
  // Intake Announcement Ribbon
  intakeLabel: 'January 2027 Intake Open',
  intakeSubtext: 'Applications and scholarship evaluations are now open.',

  // Branch Contact Information (Used exclusively in Contact & Footer sections)
  contact: {
    address: '158/182, Pranav Complex, Above Thangamayil Jewellery, Salem Road, Namakkal-637001, Tamil Nadu',
    addressShort: 'Salem Road, Namakkal, Tamil Nadu',
    landmark: 'Above Thangamayil Jewellery, Pranav Complex',
    phone1: '+91-8056600507',
    phone1Clean: '+918056600507',
    phone2: '+91-9626614567',
    phone2Clean: '+919626614567',
    whatsappNumber: '+91 6382188816',
    whatsappClean: '916382188816',
    whatsappChatUrl:
      'https://wa.me/916382188816?text=Hello%20KC%20Overseas%20Education%2C%20I%20am%20reaching%20out%20through%20your%20website.%20I%20would%20like%20to%20get%20professional%20counselling%20for%20studying%20abroad%2C%20university%20admissions%2C%20and%20scholarships.%20Please%20guide%20me.',
    email: 'namakkal@studies-overseas.com',
    workingHours: 'Monday to Saturday: 9:30 AM – 7:30 PM (Sunday Closed)',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.749502937762!2d78.16434857488884!3d11.222718950853504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babce281313768f%3A0x8677c756f7ef0d19!2sThangamayil%20Jewellery%20Limited%20-%20Namakkal!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin',
    mapDirectionsUrl: 'https://maps.google.com/?q=Pranav+Complex,+Above+Thangamayil+Jewellery,+Salem+Road,+Namakkal+637001',
  },

  // Trust & Credibility Track Record (Factual, no hype)
  stats: [
    { label: 'Years of Experience', value: '25+', subtext: 'Established in 1998' },
    { label: 'Partner Universities', value: '1,200+', subtext: 'Direct global representation' },
    { label: 'Students Placed', value: '7,30,000+', subtext: 'Across 47+ countries' },
    { label: 'Visa Success Rate', value: '99%', subtext: 'Documented track record' },
    { label: 'Offices in India', value: '55+', subtext: 'Pan-India network' },
    { label: 'Certified Trainers', value: 'British Council & IDP', subtext: 'Official test partners' },
  ],

  // 10 Target Study Destinations (Clean flag + name + 1-line key fact)
  destinations: [
    { id: 'uk', name: 'United Kingdom', code: 'UK', flag: '🇬🇧', oneLiner: '1-year Master’s & 2-year post-study work visa' },
    { id: 'usa', name: 'USA', code: 'USA', flag: '🇺🇸', oneLiner: 'Top research universities & up to 3 years STEM OPT' },
    { id: 'canada', name: 'Canada', code: 'CA', flag: '🇨🇦', oneLiner: 'World-class education with direct PGWP work permits' },
    { id: 'australia', name: 'Australia', code: 'AU', flag: '🇦🇺', oneLiner: 'Group of Eight universities & extended stay-back rights' },
    { id: 'germany', name: 'Germany', code: 'DE', flag: '🇩🇪', oneLiner: 'TU9 universities with zero tuition fees at public institutions' },
    { id: 'ireland', name: 'Ireland', code: 'IE', flag: '🇮🇪', oneLiner: 'Silicon Valley of Europe & 2-year stay-back visa' },
    { id: 'new-zealand', name: 'New Zealand', code: 'NZ', flag: '🇳🇿', oneLiner: 'Safe, globally ranked universities with post-study work' },
    { id: 'france', name: 'France', code: 'FR', flag: '🇫🇷', oneLiner: 'Grandes Écoles & European post-study opportunities' },
    { id: 'sweden', name: 'Sweden', code: 'SE', flag: '🇸🇪', oneLiner: 'Global innovation leader with English-taught Master’s' },
    { id: 'dubai', name: 'Dubai (UAE)', code: 'AE', flag: '🇦🇪', oneLiner: 'Campuses of top UK & Australian universities' },
  ] as CountryDestination[],

  // 10 Core Services (Icon + Name Only)
  services: [
    { id: 'ielts', name: 'IELTS Coaching', category: 'coaching', icon: 'BookOpen' },
    { id: 'pte', name: 'PTE Academic', category: 'coaching', icon: 'Award' },
    { id: 'gre', name: 'GRE Preparation', category: 'coaching', icon: 'GraduationCap' },
    { id: 'german', name: 'German Language (A1–B2)', category: 'coaching', icon: 'Languages' },
    { id: 'french', name: 'French Language', category: 'coaching', icon: 'Globe' },
    { id: 'japanese', name: 'Japanese Language (JLPT)', category: 'coaching', icon: 'Compass' },
    { id: 'det', name: 'Duolingo English Test (DET)', category: 'coaching', icon: 'Sparkles' },
    { id: 'loan', name: 'Education Loan Assistance', category: 'assistance', icon: 'BadgePercent' },
    { id: 'accommodation', name: 'Accommodation Support', category: 'assistance', icon: 'Home' },
    { id: 'visa', name: 'Student Visa Filing', category: 'assistance', icon: 'ShieldCheck' },
  ] as ServiceOffering[],

  // 6 Differentiators: 3 to 5 Word Labels Only (No brochure paragraphs)
  whyChooseUs: [
    { title: 'Free Profile Evaluation', icon: 'CheckCircle2' },
    { title: 'University & Course Selection', icon: 'SearchCheck' },
    { title: 'Certified Test Preparation', icon: 'BrainCircuit' },
    { title: 'Application & Admission Assistance', icon: 'FileSpreadsheet' },
    { title: 'Education Loan Assistance', icon: 'Landmark' },
    { title: 'Student Visa Processing', icon: 'PlaneTakeoff' },
  ],

  // Testimonials: Shortened to 3 single-line verified experiences
  testimonials: [
    {
      id: 't-1',
      name: 'Kavitha R.',
      degree: 'MSc Data Science',
      university: 'University of Birmingham',
      country: 'UK',
      quote: 'From university shortlisting to visa approval, the KC team made my master’s admission smooth and stress-free.',
      avatarPlaceholder: 'KR',
    },
    {
      id: 't-2',
      name: 'Praveen K.',
      degree: 'Master of Engineering Management',
      university: 'Technical University of Munich (TUM)',
      country: 'Germany',
      quote: 'KC guided me step-by-step through admissions and visa paperwork for Germany with zero tuition fees.',
      avatarPlaceholder: 'PK',
    },
    {
      id: 't-3',
      name: 'Deepika S.',
      degree: 'MSc Pharmaceutical Sciences',
      university: 'Trinity College Dublin',
      country: 'Ireland',
      quote: 'Secured my Ireland admit and student visa without a single hitch thanks to KC’s dedicated counsellors.',
      avatarPlaceholder: 'DS',
    },
  ] as Testimonial[],

  // Upcoming Batches (Clean, concise schedule)
  upcomingBatches: [
    { id: 'b-ielts-1', course: 'IELTS Academic Masterclass', startDate: 'Batches Every Monday', mode: 'Classroom & Online', timing: 'Morning & Evening' },
    { id: 'b-pte-1', course: 'PTE Academic Fast-Track', startDate: 'Every Wednesday', mode: 'AI Lab & Classroom', timing: 'Flexible Timings' },
    { id: 'b-gre-1', course: 'GRE Comprehensive 320+', startDate: '1st & 15th of Every Month', mode: 'Live Online / Weekend', timing: 'Weekend Intensive' },
    { id: 'b-ger-1', course: 'German A1–B1 Goethe Exam', startDate: 'New Batch on 15th', mode: 'Offline Classroom', timing: 'Weekday Evenings' },
  ] as UpcomingBatch[],

  // Feature Flags
  features: {
    enablePromoPopup: true,
    enableStickyMobileBar: true,
    enableFloatingWhatsApp: true,
    enableFileFallbackLogging: true,
  },

  // Promo Popup (Minimal, no fake urgency)
  promoPopupConfig: {
    badge: 'Special Student Benefit',
    title: 'Free IELTS Mock Test & Profile Evaluation',
    worthText: 'Full diagnostic assessment and university recommendation roadmap.',
    description: 'Get your eligibility checked by certified counselors.',
    ctaText: 'Claim Free Evaluation',
  },

  // Analytics & Tracking
  tracking: {
    googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || 'AW-CONVERSION-ID-PLACEHOLDER',
    formConversionLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_FORM_LABEL || 'CONVERSION_LABEL_PLACEHOLDER',
    callConversionLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_CALL_LABEL || 'CALL_CONVERSION_LABEL_PLACEHOLDER',
    whatsappConversionLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL || 'WHATSAPP_CONVERSION_LABEL_PLACEHOLDER',
    gtmId: process.env.NEXT_PUBLIC_GTM_ID || '',
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_ID || '',
  },

  // Hero Video Configuration (Swapped to destinations-bg-raw.mp4 as requested)
  heroVideo: {
    desktopMp4:
      process.env.VERCEL ||
      (typeof window !== 'undefined' &&
        window.location.hostname !== 'localhost' &&
        window.location.hostname !== '127.0.0.1')
        ? 'https://media.githubusercontent.com/media/harishunfounded/KC-overseas/main/public/destinations-bg-raw.mp4'
        : '/destinations-bg-raw.mp4',
    desktopWebm: '/destinations-bg-raw.mp4',
    mobileMp4:
      process.env.VERCEL ||
      (typeof window !== 'undefined' &&
        window.location.hostname !== 'localhost' &&
        window.location.hostname !== '127.0.0.1')
        ? 'https://media.githubusercontent.com/media/harishunfounded/KC-overseas/main/public/destinations-bg-raw.mp4'
        : '/destinations-bg-raw.mp4',
    poster: '/destinations-poster.jpg',
    // Set to true to test mobile video playback vs static poster image
    enableMobileVideo: true,
  },
};
