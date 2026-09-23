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
  degree?: string;
  university?: string;
  country?: string;
  quote: string;
  avatarPlaceholder: string;
  studentImageUrl?: string;
  videoUrl?: string;
}

export interface StudentVideo {
  id: string;
  title: string;
  embedUrl: string;
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
    phone2: '+91 6382188816',
    phone2Clean: '+916382188816',
    whatsappNumber: '+91 6382188816',
    whatsappClean: '916382188816',
    whatsappChatUrl:
      'https://wa.me/916382188816?text=Hello%20KC%20Overseas%20Education%2C%20I%20am%20reaching%20out%20through%20your%20website.%20I%20would%20like%20to%20get%20professional%20counselling%20for%20studying%20abroad%2C%20university%20admissions%2C%20and%20scholarships.%20Please%20guide%20me.',
    email: 'namakkal@kcoverseas.com',
    workingHours: 'Monday to Saturday: 10:00 AM – 7:30 PM (Sunday Closed)',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.749502937762!2d78.16434857488884!3d11.222718950853504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babce281313768f%3A0x8677c756f7ef0d19!2sThangamayil%20Jewellery%20Limited%20-%20Namakkal!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin',
    mapDirectionsUrl: 'https://maps.google.com/?q=Pranav+Complex,+Above+Thangamayil+Jewellery,+Salem+Road,+Namakkal+637001',
  },

  // Trust & Credibility Track Record (Factual, no hype)
  stats: [
    { label: 'Years of Experience', value: '25+', subtext: 'Established in 1998' },
    { label: 'Partner Universities', value: '1,200+', subtext: 'Direct global representation' },
    { label: 'Students Placed', value: '7,30,000+', subtext: 'Across 47+ countries' },
    { label: 'Visa Success Rate', value: '99%', subtext: 'Documented track record' },
    { label: 'Branches in India', value: '60+', subtext: 'Pan-India network' },
    { label: 'Certified Trainers', value: 'British Council', subtext: 'Official test partner' },
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

  // Genuine Student Testimonials from KC Overseas Namakkal Branch
  testimonials: [
    {
      id: 't-viknesh',
      name: 'Viknesh',
      degree: 'Study Abroad Aspirant',
      university: 'KC Namakkal Student',
      country: 'Overseas Admission',
      quote: "I am impressed with the way they handled my profile and being honest about all the process during my entire journey and how it's gonna be in the future. Especially, Ramesh sir's quick response on everything. Thanks to KC Overseas Namakkal :). If I were you, I would go for it!",
      avatarPlaceholder: 'V',
      studentImageUrl: 'https://assets.studies-overseas.com/Pic_09_Viknesh_01_382ac71f6d.png',
    },
    {
      id: 't-rajkumar',
      name: 'Raj Kumar',
      degree: 'Study Abroad Aspirant',
      university: 'KC Namakkal Student',
      country: 'Overseas Admission',
      quote: "KC Team Namakkal is super good and they are kind and helpful, especially according to me they were transparent from 1st process to till the end. And I hope that they will give their support and guidance in the future too. Thank you Team KC.",
      avatarPlaceholder: 'RK',
      studentImageUrl: 'https://assets.studies-overseas.com/Pic_07_Raj_kumar_01_122321bada.png',
    },
    {
      id: 't-madhuri',
      name: 'Madhuri',
      degree: 'Visa & Admission',
      university: 'KC Namakkal Student',
      country: 'International Studies',
      quote: "Excellent 24 hours service and one of the good parts is kind behavior in every section of the application process, mock interview section and until the visa application. What was the main attraction is that Ramesh sir is always ready to clear my doubts regarding the application anytime. He is my main supporter around all the application procedure and until the visa process. Thank you so much sir 💗",
      avatarPlaceholder: 'M',
      studentImageUrl: 'https://assets.studies-overseas.com/Pic_04_Madhuri_01_c94a739950.png',
    },
    {
      id: 't-premlekshmi',
      name: 'Premlekshmi',
      degree: 'University Shortlisting & Admit',
      university: 'KC Namakkal Student',
      country: 'Overseas University',
      quote: "Have consulted with Mr. Ramesh sir. The process is so clean and hassle free. Their response is so calm and patient, much satisfied with their service and the main thing is I was tension free, since all my queries are answered clear from start to end. Thank you so much Ramesh sir, for all your help throughout the process. Would definitely recommend KC Overseas to those who wanna study abroad.",
      avatarPlaceholder: 'P',
      studentImageUrl: 'https://assets.studies-overseas.com/Pic_05_Premlekshmi_01_90e72f4462.png',
    },
    {
      id: 't-sheraya',
      name: 'Sheraya',
      degree: 'Admitted Student',
      university: 'Huddersfield University',
      country: 'United Kingdom',
      quote: "KC Overseas helped me to get admission in Huddersfield University. From the starting to end they supported me and guided me to get my visa and flight tickets too. Last one year I have searched for good consultancy and I finally found out. Did my all process smoothly and perfectly. They had done a good job. Thank you so much!",
      avatarPlaceholder: 'S',
      studentImageUrl: 'https://assets.studies-overseas.com/Pic_08_Shereya_01_b8e2d701cf.png',
    },
    {
      id: 't-priyadharshini',
      name: 'Priyadharshini',
      degree: 'Visa Processing',
      university: 'KC Namakkal Student',
      country: 'Visa Approved',
      quote: "Thank you so much Krishna Consultancy / KC Overseas for your excellent service. Thank you Ramesh bro and Sandhiya sis. From the beginning to the end they explained and guided me to get my visa. My dream comes true because of their help. Thank you so much for the entire team.",
      avatarPlaceholder: 'PD',
      studentImageUrl: 'https://assets.studies-overseas.com/Pic_06_Priyadharshini_01_d2c42d22ea.png',
    },
    {
      id: 't-hema',
      name: 'Hema',
      degree: 'Comprehensive Guidance',
      university: 'KC Namakkal Student',
      country: 'Study Abroad Success',
      quote: "I have a very special experience with this consultancy. I have been trying to study abroad since 2 years and shifted between 3 to 4 consultancies, so I had all the good and bad experiences. KC Overseas was a lottery to me. They offered timely help and provided a very reliable and prompt service. They focus on details which not everyone will give importance to. Students can comfortably work on their preparation and they guide you everything from scratch. Zero hassles. Overall very good experience. Thank you!",
      avatarPlaceholder: 'H',
      studentImageUrl: 'https://assets.studies-overseas.com/Pic_02_Hema_01_6043fc0480.png',
    },
    {
      id: 't-bathmesh',
      name: 'Bathmesh parent',
      degree: 'Parent Testimonial',
      university: 'KC Namakkal',
      country: 'Parent Review',
      quote: "I am fortunate to have met them. They really explain very clearly and help as needed and not just for a business purpose but as a family member. Whenever contacted, they help without any hesitation. Very confident. I wish them all the best for their continued growth.",
      avatarPlaceholder: 'BP',
      studentImageUrl: 'https://assets.studies-overseas.com/Pic_01_Bathmesh_01_2ee23ba8ff.png',
    },
    {
      id: 't-kishore',
      name: 'Kishore',
      degree: 'Application & Visa Support',
      university: 'KC Namakkal Student',
      country: 'Visa & Admission Success',
      quote: "Kc consultancy brought my dream come true. Thank you Mr. Ramesh sir for helping and guiding me throughout the process. Each and every process was perfectly done, starting from admission to getting my visa. From start to end, Tinu mam explained and guided me through each and every step of what to do and how things work from choosing the country to submitting university applications and the visa process. One of the best and quickest services for abroad study. A huge thanks to Mr. Ramesh sir and the entire team.",
      avatarPlaceholder: 'K',
      studentImageUrl: 'https://assets.studies-overseas.com/Pic_03_Kishore_01_50dfa21731.png',
    },
  ] as Testimonial[],

  // Video Testimonials from KC Namakkal Branch
  studentVideos: [
    {
      id: 'v-1',
      title: 'KC Overseas Student Experience',
      embedUrl: 'https://www.youtube.com/embed/UymV-_V2jHY',
    },
    {
      id: 'v-2',
      title: 'Student Visa Success Story',
      embedUrl: 'https://www.youtube.com/embed/GMdvbQC7e-s',
    },
  ],

  // Upcoming Batches (Clean, concise schedule with weekly, GRE monthly, and offline details)
  upcomingBatches: [
    {
      id: 'b-ielts-1',
      course: 'IELTS Academic Masterclass',
      startDate: 'New Batch Every Week',
      mode: 'Online (Weekly) • Offline (Contact Us)',
      timing: 'Morning & Evening Batches',
    },
    {
      id: 'b-pte-1',
      course: 'PTE Academic Fast-Track',
      startDate: 'New Batch Every Week',
      mode: 'Online (Weekly) • Offline (Contact Us)',
      timing: 'Flexible Timings & AI Lab',
    },
    {
      id: 'b-gre-1',
      course: 'GRE Comprehensive 320+',
      startDate: 'Monthly Batch',
      mode: 'GRE Alone – Monthly Batch',
      timing: 'Weekend & Live Online Intensive',
    },
    {
      id: 'b-ger-1',
      course: 'German Language (A1–B2)',
      startDate: 'New Batch Every Week',
      mode: 'Online (Weekly) • Offline (Contact Us)',
      timing: 'Goethe Exam Oriented Batches',
    },
  ] as UpcomingBatch[],

  // Preferred Service / Test Prep Options for Enquiry Form
  formServices: [
    'General Free Counselling',
    'University Admission',
    'IELTS Coaching',
    'PTE Academic',
    'GRE Preparation',
    'German Language (A1–B2)',
    'French Language',
    'Japanese Language (JLPT)',
    'Duolingo English Test (DET)',
    'Education Loan Assistance',
    'Accommodation Support',
    'Forex',
    'Search and Selection',
  ],

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
    gtmId: process.env.NEXT_PUBLIC_GTM_ID || 'GTM-W39MCWRZ',
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || '318704320650880',
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
    poster: '',
    // Set to true to test mobile video playback vs static poster image
    enableMobileVideo: true,
  },
};
