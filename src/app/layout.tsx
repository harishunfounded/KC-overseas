import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { siteConfig } from '@/config/site';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'KC Overseas Education Namakkal | Top Study Abroad Consultants',
  description:
    'Study abroad from Namakkal with KC Overseas Education. Free counselling, university selection across 47+ countries, IELTS/PTE coaching, education loans, and 99% visa success rate.',
  keywords: [
    'KC Overseas Namakkal',
    'Study Abroad Consultants in Namakkal',
    'Overseas Education Consultant Namakkal',
    'IELTS coaching Namakkal',
    'PTE training Namakkal',
    'Study in UK Germany Canada Australia from Namakkal',
    'Overseas education loan assistance Namakkal',
  ],
  authors: [{ name: 'KC Overseas Education' }],
  metadataBase: new URL('https://www.studies-overseas.com'),
  alternates: {
    canonical: 'https://www.studies-overseas.com/branch/namakkal',
  },
  openGraph: {
    title: 'Study Abroad with KC Overseas Education — Namakkal Branch',
    description:
      'Unlock your global education with 1,200+ universities across 47+ countries. Free profile evaluation, test prep coaching & visa assistance.',
    url: 'https://www.studies-overseas.com/branch/namakkal',
    siteName: 'KC Overseas Education',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org LocalBusiness & EducationalOrganization Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['EducationalOrganization', 'LocalBusiness'],
    '@id': 'https://www.studies-overseas.com/branch/namakkal#organization',
    name: 'KC Overseas Education - Namakkal Branch',
    alternateName: 'KC Overseas Namakkal',
    description:
      'Leading overseas education consultant in Namakkal offering free counselling, university admission, IELTS/PTE training, study loans, and visa processing.',
    url: 'https://www.studies-overseas.com/branch/namakkal',
    telephone: siteConfig.contact.phone1,
    email: siteConfig.contact.email,
    priceRange: 'Free Consultation',
    image: 'https://www.studies-overseas.com/assets/images/kc-logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '158/182, Pranav Complex, Above Thangamayil Jewellery, Salem Road',
      addressLocality: 'Namakkal',
      addressRegion: 'Tamil Nadu',
      postalCode: '637001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '11.2227189',
      longitude: '78.1643485',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:30',
        closes: '19:30',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Namakkal' },
      { '@type': 'City', name: 'Salem' },
      { '@type': 'City', name: 'Tiruchengode' },
      { '@type': 'City', name: 'Rasipuram' },
      { '@type': 'City', name: 'Paramathi Velur' },
      { '@type': 'City', name: 'Karur' },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} font-sans scroll-smooth`}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* 
          Google Ads & Analytics Tracking Script Injection
          To enable live conversion tracking, set NEXT_PUBLIC_GOOGLE_ADS_ID in .env.local 
          or siteConfig.tracking.googleAdsId in src/config/site.ts
        */}
        {siteConfig.tracking.googleAdsId && siteConfig.tracking.googleAdsId !== 'AW-CONVERSION-ID-PLACEHOLDER' && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.tracking.googleAdsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-ads-gtag" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${siteConfig.tracking.googleAdsId}');
              `}
            </Script>
          </>
        )}

        {/* Google Tag Manager (GTM) script if GTM_ID is provided */}
        {siteConfig.tracking.gtmId && (
          <Script id="gtm-script" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${siteConfig.tracking.gtmId}');
            `}
          </Script>
        )}
      </head>
      <body className="antialiased text-slate-900 bg-white selection:bg-kc-primary selection:text-white">
        {/* GTM Noscript fallback */}
        {siteConfig.tracking.gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${siteConfig.tracking.gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  );
}
