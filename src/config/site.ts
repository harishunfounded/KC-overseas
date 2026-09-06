/**
 * Central Configuration for KC Overseas Education - Namakkal Branch Landing Page
 * All content, contact details, intake banners, target countries, services, and tracking IDs
 * can be modified directly from this single file.
 */

export interface CountryDestination {
  id: string;
  name: string;
  code: string;
  flag: string;
  hook: string;
  popularCourses: string[];
  intakes: string;
  postStudyWork: string;
  highlight: string;
}

export interface ServiceOffering {
  id: string;
  name: string;
  category: 'coaching' | 'assistance';
  shortDesc: string;
  features: string[];
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  degree: string;
  university: string;
  country: string;
  scoreOrAward?: string;
  quote: string;
  hometown: string;
  avatarPlaceholder: string;
}

export interface UpcomingBatch {
  id: string;
  course: string;
  startDate: string;
  mode: 'Online Live' | 'Offline Classroom' | 'Hybrid';
  timing: string;
  seatsLeft: number;
  duration: string;
}

export const siteConfig = {
  // Brand & Branch Metadata
  brandName: 'KC Overseas Education',
  branchName: 'Namakkal Branch',
  tagline: 'Unlock Your Study Abroad Dream with Top Global Universities',
  subheadline: 'End-to-End Overseas Education & Test Prep Guidance in Namakkal',
  
  // Intake Announcement Ribbon (Editable in one place)
  intakeLabel: 'January 2027 Intake Open',
  intakeSubtext: 'Hurry! Scholarships and early admission deadlines approaching.',

  // Branch Contact Information
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
    whatsappChatUrl: 'https://wa.me/916382188816?text=Hi%2C%20I%20want%20to%20know%20more%20about%20studying%20abroad',
    email: 'namakkal@studies-overseas.com',
    workingHours: 'Monday to Saturday: 9:30 AM – 7:30 PM (Sunday Closed)',
    /**
     * Google Maps Embed URL Placeholder.
     * Replace with your exact embed iframe URL from Google Maps if preferred.
     */
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.749502937762!2d78.16434857488884!3d11.222718950853504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babce281313768f%3A0x8677c756f7ef0d19!2sThangamayil%20Jewellery%20Limited%20-%20Namakkal!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin',
    mapDirectionsUrl: 'https://maps.google.com/?q=Pranav+Complex,+Above+Thangamayil+Jewellery,+Salem+Road,+Namakkal+637001',
  },

  // Key Stats for Social Proof (KC Global & National Impact)
  stats: [
    { label: 'Countries', value: '47+', subtext: 'Global destinations' },
    { label: 'University Tie-ups', value: '1,200+', subtext: 'Direct institutional tie-ups' },
    { label: 'Students Placed', value: '7,30,000+', subtext: 'Empowered worldwide' },
    { label: 'Offices Across India', value: '55+', subtext: 'Pan-India presence' },
    { label: 'Visa Success Rate', value: '99%', subtext: 'Industry-leading record' },
    { label: 'Education Experts', value: '750+', subtext: 'Certified counsellors' },
  ],

  // 10 Target Study Destinations
  destinations: [
    {
      id: 'uk',
      name: 'United Kingdom',
      code: 'UK',
      flag: '🇬🇧',
      hook: 'Home to world-renowned Russell Group universities & 2-year Graduate Route work visa.',
      popularCourses: ['MSc Business Analytics', 'Data Science & AI', 'Mechanical Engg', 'Healthcare & MBA'],
      intakes: 'Sept / Jan / May',
      postStudyWork: 'Up to 2 Years PSW',
      highlight: '1-Year Master’s degrees & High ROI',
    },
    {
      id: 'usa',
      name: 'USA',
      code: 'USA',
      flag: '🇺🇸',
      hook: 'Ivy League & STEM OPT benefits with 3 years of post-study employment.',
      popularCourses: ['Computer Science', 'Data Analytics', 'Finance & FinTech', 'Biomedical Sciences'],
      intakes: 'Fall (Aug) / Spring (Jan)',
      postStudyWork: 'Up to 3 Years STEM OPT',
      highlight: 'Generous university scholarships up to 100%',
    },
    {
      id: 'canada',
      name: 'Canada',
      code: 'CA',
      flag: '🇨🇦',
      hook: 'Top quality public research universities and direct Post-Graduation Work Permit (PGWP).',
      popularCourses: ['Information Technology', 'Supply Chain', 'Engineering', 'Project Management'],
      intakes: 'Sept / Jan / May',
      postStudyWork: 'Up to 3 Years PGWP',
      highlight: 'Affordable tuition & clear PR pathways',
    },
    {
      id: 'australia',
      name: 'Australia',
      code: 'AU',
      flag: '🇦🇺',
      hook: 'Group of Eight (Go8) research universities and extended post-study work rights.',
      popularCourses: ['Software Engineering', 'Cybersecurity', 'Nursing & Public Health', 'Business Info Sys'],
      intakes: 'Feb / July / Nov',
      postStudyWork: '2 to 4 Years PSW',
      highlight: 'Globally ranked degrees & high minimum wages',
    },
    {
      id: 'germany',
      name: 'Germany',
      code: 'DE',
      flag: '🇩🇪',
      hook: 'TU9 engineering powerhouses with zero or nominal tuition fees at public universities.',
      popularCourses: ['Automotive Engg', 'Robotics & Mechatronics', 'Renewable Energy', 'Computer Science'],
      intakes: 'Winter (Oct) / Summer (Apr)',
      postStudyWork: '18-Month Jobseeker Visa',
      highlight: 'Zero tuition fees at top public institutions',
    },
    {
      id: 'ireland',
      name: 'Ireland',
      code: 'IE',
      flag: '🇮🇪',
      hook: 'Silicon Valley of Europe — European headquarters of Google, Apple, Meta, and Pfizer.',
      popularCourses: ['Data Analytics', 'Cloud Computing', 'Pharmaceutical Science', 'Digital Marketing'],
      intakes: 'Sept / Jan',
      postStudyWork: '2-Year Stay Back Visa',
      highlight: 'High corporate employment & 1-yr masters',
    },
    {
      id: 'new-zealand',
      name: 'New Zealand',
      code: 'NZ',
      flag: '🇳🇿',
      hook: 'Safe, scenic, world-ranked universities with strong post-study work opportunities.',
      popularCourses: ['Construction Mgmt', 'Agri-Business', 'IT & Computing', 'Hospitality'],
      intakes: 'Feb / July',
      postStudyWork: 'Up to 3 Years PSW',
      highlight: '100% of universities in QS World Top 500',
    },
    {
      id: 'france',
      name: 'France',
      code: 'FR',
      flag: '🇫🇷',
      hook: 'Top triple-accredited Business Grandes Écoles and English-taught Master’s degrees.',
      popularCourses: ['Luxury Brand Mgmt', 'International Business', 'Culinary & Hospitality', 'Data AI'],
      intakes: 'Sept / Jan',
      postStudyWork: 'Up to 2 Years PSW + 5-Yr Schengen Visa for Alumni',
      highlight: 'Generous French government subsidies & housing aid',
    },
    {
      id: 'sweden',
      name: 'Sweden',
      code: 'SE',
      flag: '🇸🇪',
      hook: 'Leader in innovation, clean tech, sustainability, and Nobel prize excellence.',
      popularCourses: ['Sustainable Energy', 'Biotechnology', 'Embedded Systems', 'Industrial Design'],
      intakes: 'Autumn (Aug)',
      postStudyWork: '12-Month Job Search Visa',
      highlight: 'Study in the world’s most innovative economy',
    },
    {
      id: 'dubai',
      name: 'Dubai (UAE)',
      code: 'AE',
      flag: '🇦🇪',
      hook: 'Campuses of top UK & Australian universities with tax-free high salary career growth.',
      popularCourses: ['Aviation & Logistics', 'International Finance', 'Artificial Intelligence', 'Tourism'],
      intakes: 'Sept / Jan / May',
      postStudyWork: 'Green Visa & Golden Visa Options',
      highlight: 'Proximity to India & hassle-free visa approval',
    },
  ] as CountryDestination[],

  // 10 Key Services / Test Prep & Assistance Offerings
  services: [
    {
      id: 'ielts',
      name: 'IELTS Coaching',
      category: 'coaching',
      shortDesc: 'Certified British Council & IDP trained mentors, daily mock tests & score guarantee strategy.',
      features: ['Personalized 1-on-1 feedback', 'Online & Classroom batches', 'Free Cambridge practice books'],
      icon: 'BookOpen',
    },
    {
      id: 'pte',
      name: 'PTE Academic Coaching',
      category: 'coaching',
      shortDesc: 'AI-evaluated real exam simulation software with proven score templates for 79+ bands.',
      features: ['AI scoring engine practice', 'Speaking pronunciation lab', 'Fast-track 2-week crash courses'],
      icon: 'Award',
    },
    {
      id: 'gre',
      name: 'GRE Preparation',
      category: 'coaching',
      shortDesc: 'Targeted quant mastery, advanced vocabulary mnemonics & analytical writing workshops.',
      features: ['Quant shortcuts & drills', '320+ score blueprint', 'Sectional adaptive test mocks'],
      icon: 'GraduationCap',
    },
    {
      id: 'german',
      name: 'German Language (A1–B2)',
      category: 'coaching',
      shortDesc: 'Goethe-Institut aligned language curriculum taught by bilingual certified German linguists.',
      features: ['Speaking fluency focus', 'Exam preparation kits', 'Crucial for tuition-free public universities'],
      icon: 'Languages',
    },
    {
      id: 'french',
      name: 'French Language Training',
      category: 'coaching',
      shortDesc: 'DELF/DALF exam oriented structured modules for students targeting France & Canada Express Entry.',
      features: ['Interactive cultural modules', 'Native audio immersion', 'Boosts Canada PR point calculator'],
      icon: 'Globe',
    },
    {
      id: 'japanese',
      name: 'Japanese Language (JLPT)',
      category: 'coaching',
      shortDesc: 'JLPT N5 to N3 coaching tailored for technical students aspiring for careers in Japan.',
      features: ['Kanji & vocabulary cards', 'Japanese conversational etiquette', 'Work visa qualification prep'],
      icon: 'Compass',
    },
    {
      id: 'det',
      name: 'Duolingo English Test (DET)',
      category: 'coaching',
      shortDesc: 'Cost-effective, rapid at-home testing accepted by 4,000+ top universities worldwide.',
      features: ['Adaptive question strategy', '125+ band target tactics', 'Result in 48 hours guidance'],
      icon: 'Sparkles',
    },
    {
      id: 'loan',
      name: 'Education Loan Assistance',
      category: 'assistance',
      shortDesc: 'Pre-approved collateral and non-collateral loans with top public & private banks at lowest ROI.',
      features: ['Zero processing fee partners', 'Up to ₹1.5 Cr coverage', 'Quick 7-day sanction letter'],
      icon: 'BadgePercent',
    },
    {
      id: 'accommodation',
      name: 'Accommodation Assistance',
      category: 'assistance',
      shortDesc: 'Verified, safe student apartments, university halls, and homestays booked before departure.',
      features: ['Zero upfront scam risk', 'Proximity to campuses', 'Utility-inclusive student rooms'],
      icon: 'Home',
    },
    {
      id: 'visa',
      name: 'Student Visa Assistance',
      category: 'assistance',
      shortDesc: '99% visa success rate with rigorous mock interviews, financial file auditing & SOP review.',
      features: ['Embassy mock interview sessions', 'SOP & LOR editorial polish', 'Biometric & VFS appointment support'],
      icon: 'ShieldCheck',
    },
  ] as ServiceOffering[],

  // 6 Core Differentiators (Why KC Overseas)
  whyChooseUs: [
    {
      title: 'Free Profile Evaluation & Counselling',
      description: 'One-on-one expert session mapping your academic profile, backlogs, test scores, and career goals to the best global universities.',
      icon: 'CheckCircle2',
    },
    {
      title: 'Country, Course & University Selection',
      description: 'Filter through 80,000+ global courses using AI course-matching with transparent tuition fee & scholarship estimations.',
      icon: 'SearchCheck',
    },
    {
      title: 'Standardised Test Prep Coaching',
      description: 'Certified in-house master trainers for IELTS, PTE, GRE, German, French, and Japanese with verified high-band outcomes.',
      icon: 'BrainCircuit',
    },
    {
      title: 'Application & Admission Assistance',
      description: 'End-to-end management of university applications, waiver of application fees, and expert SOP / LOR editing.',
      icon: 'FileSpreadsheet',
    },
    {
      title: 'Education Loan & Accommodation Assistance',
      description: 'Doorstep education loan sanctions from leading nationalized and NBFC banks plus secure international student housing.',
      icon: 'Landmark',
    },
    {
      title: 'End-to-End Student Visa Processing',
      description: 'Flawless visa filing, fund documentation verification, and mock interviews resulting in an industry-leading 99% visa success rate.',
      icon: 'PlaneTakeoff',
    },
  ],

  // Upcoming Test Prep Batches
  upcomingBatches: [
    {
      id: 'b-ielts-1',
      course: 'IELTS Academic Masterclass',
      startDate: 'Next Monday (Weekly Batches)',
      mode: 'Offline Classroom',
      timing: '10:00 AM – 12:00 PM & 6:00 PM – 8:00 PM',
      seatsLeft: 6,
      duration: '4 Weeks Comprehensive',
    },
    {
      id: 'b-pte-1',
      course: 'PTE Academic Fast-Track',
      startDate: 'Every Wednesday',
      mode: 'Hybrid (Classroom + AI Lab)',
      timing: '3:00 PM – 5:00 PM',
      seatsLeft: 4,
      duration: '3 Weeks Intensive',
    },
    {
      id: 'b-gre-1',
      course: 'GRE Comprehensive 320+',
      startDate: '1st & 15th of Every Month',
      mode: 'Online Live / Weekend Classroom',
      timing: 'Weekend: 10:00 AM – 2:00 PM',
      seatsLeft: 8,
      duration: '8 Weeks In-Depth',
    },
    {
      id: 'b-ger-1',
      course: 'German A1 Level (Goethe Exam)',
      startDate: 'Upcoming Batch: 15th',
      mode: 'Offline Classroom',
      timing: '5:30 PM – 7:30 PM (Mon-Fri)',
      seatsLeft: 5,
      duration: '6 Weeks',
    },
  ] as UpcomingBatch[],

  // Success Stories / Student Testimonials
  testimonials: [
    {
      id: 't-1',
      name: 'Kavitha Ramasamy',
      degree: 'MSc Data Science',
      university: 'University of Birmingham, UK',
      country: 'United Kingdom',
      scoreOrAward: 'IELTS 7.5 Band',
      quote: 'The Namakkal KC team made my dream of studying in the UK effortless. From my IELTS training to university shortlisting and visa sanction, everything was handled with utmost professionalism. I received a £4,000 scholarship too!',
      hometown: 'Namakkal',
      avatarPlaceholder: 'KR',
    },
    {
      id: 't-2',
      name: 'Praveen Kumar',
      degree: 'Master of Engineering Management',
      university: 'Technical University of Munich (TUM), Germany',
      country: 'Germany',
      scoreOrAward: 'German A2 Certified',
      quote: 'Studying in Germany with zero tuition fees seemed complicated until I consulted KC Overseas Namakkal. Their counsellors handled my APS certificate, SOP, and German language training systematically. Highly recommended for students in and around Namakkal!',
      hometown: 'Paramathi Velur',
      avatarPlaceholder: 'PK',
    },
    {
      id: 't-3',
      name: 'Deepika S.',
      degree: 'MSc Pharmaceutical Sciences',
      university: 'Trinity College Dublin, Ireland',
      country: 'Ireland',
      scoreOrAward: 'PTE 78 Score',
      quote: 'I was worried about student visa paperwork, but KC Overseas took care of every single document. Their guidance on education loans and university applications was spot on. I am now happily studying in Dublin!',
      hometown: 'Tiruchengode',
      avatarPlaceholder: 'DS',
    },
    {
      id: 't-4',
      name: 'Arun Balasubramaniam',
      degree: 'Master of Information Technology',
      university: 'University of Melbourne, Australia',
      country: 'Australia',
      scoreOrAward: 'PTE 82 Score',
      quote: 'KC Overseas Namakkal is genuine, transparent, and prompt. They guided me towards the Group of Eight universities in Australia and helped me secure a 20% international student fee waiver. The team is always approachable.',
      hometown: 'Rasipuram',
      avatarPlaceholder: 'AB',
    },
    {
      id: 't-5',
      name: 'Suresh Govindaraj',
      degree: 'MS in Computer Science',
      university: 'University of Texas at Arlington, USA',
      country: 'USA',
      scoreOrAward: 'GRE 322 / Duolingo 130',
      quote: 'The mock visa interviews conducted by KC were the turning point for my F1 visa approval. They know exactly what US visa officers expect. Got my visa stamped in the first attempt!',
      hometown: 'Namakkal',
      avatarPlaceholder: 'SG',
    },
  ] as Testimonial[],

  // Feature Flags & Conversion Settings
  features: {
    enablePromoPopup: true, // Non-intrusive exit-intent / 50% scroll popup
    enableStickyMobileBar: true,
    enableFloatingWhatsApp: true,
    enableFileFallbackLogging: true, // Appends leads to data/leads.json and data/leads.csv
  },

  promoPopupConfig: {
    badge: 'Limited Period Google Ads Offer',
    title: 'Free IELTS Mock Test & Profile Evaluation',
    worthText: 'Worth ₹2,500 — Completely Free for Namakkal Students',
    description: 'Book your slot now and get university shortlisting + scholarship eligibility check absolutely free.',
    ctaText: 'Claim Free Mock Test',
  },

  /**
   * Analytics & Google Ads Tracking Configuration
   * Instructions: Replace these placeholders with your actual conversion IDs and GTM container ID.
   */
  tracking: {
    /**
     * Paste your Google Ads Conversion ID here (e.g., 'AW-123456789')
     */
    googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || 'AW-CONVERSION-ID-PLACEHOLDER',
    
    /**
     * Paste your Google Ads Form Submission Conversion Label here (e.g., 'abc123XYZ')
     */
    formConversionLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_FORM_LABEL || 'CONVERSION_LABEL_PLACEHOLDER',

    /**
     * Paste your Google Ads Click-to-Call Conversion Label here
     */
    callConversionLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_CALL_LABEL || 'CALL_CONVERSION_LABEL_PLACEHOLDER',

    /**
     * Paste your Google Ads WhatsApp Click Conversion Label here
     */
    whatsappConversionLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL || 'WHATSAPP_CONVERSION_LABEL_PLACEHOLDER',

    /**
     * Paste your Google Tag Manager (GTM) Container ID here (e.g., 'GTM-XXXXXXX')
     */
    gtmId: process.env.NEXT_PUBLIC_GTM_ID || '',

    /**
     * Paste your Google Analytics 4 Measurement ID here (e.g., 'G-XXXXXXXXXX')
     */
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_ID || '',
  },
};
