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
  title: 'KC Overseas Education | Study Abroad Consultant in Tamil Nadu',
  description:
    'KC Overseas Education is a trusted study abroad consultant in Tamil Nadu, guiding students to 1,200+ top universities in 47+ countries. Free profile evaluation, certified IELTS/PTE coaching, and 99% visa success rate.',
  keywords: [
    'KC Overseas Education',
    'study abroad consultant in Tamil Nadu',
    'study abroad consultants',
    'overseas education consultants',
    'study abroad education consultants',
    'study abroad counselling',
    'overseas education consultancy',
    'study abroad admission guidance',
    'study abroad university application assistance',
    'foreign education consultants',
    'IELTS coaching Tamil Nadu',
    'PTE training Tamil Nadu',
    'Study in UK Germany Canada Australia USA',
    'Overseas education loan assistance',
  ],
  authors: [{ name: 'KC Overseas Education' }],
  metadataBase: new URL('https://www.studies-overseas.com'),
  alternates: {
    canonical: 'https://www.studies-overseas.com',
  },
  openGraph: {
    title: 'KC Overseas Education | Study Abroad Consultant in Tamil Nadu',
    description:
      'Trusted study abroad consultant in Tamil Nadu with 25+ years legacy, 1,200+ partner universities, 99% visa success rate, and personalized overseas education guidance.',
    url: 'https://www.studies-overseas.com',
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
      'Trusted study abroad consultant in Tamil Nadu offering free profile evaluation, university shortlisting, IELTS/PTE training, education loan guidance, and 99% visa success processing.',
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

  const gtmId = siteConfig.tracking.gtmId || 'GTM-W39MCWRZ';
  const metaPixelId = siteConfig.tracking.metaPixelId || '318704320650880';

  return (
    <html lang="en" className={`${inter.variable} font-sans scroll-smooth`}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* 
          Google Tag Manager (GTM)
          Loaded with strategy="beforeInteractive" to execute as early as possible in head
        */}
        <Script id="gtm-script" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}
        </Script>

        {/* 
          Meta Pixel (Facebook Pixel)
          Loaded with strategy="afterInteractive" to keep off critical render path
        */}
        <Script id="meta-pixel-script" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Google Ads & Analytics Tracking Script Injection (Optional) */}
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
      </head>
      <body className="antialiased text-slate-900 bg-white selection:bg-kc-primary selection:text-white">
        {/* Google Tag Manager (noscript) - immediately after opening body */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Meta Pixel (noscript) */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
