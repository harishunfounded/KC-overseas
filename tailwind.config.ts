import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        kc: {
          // Exact computed brand hex colors extracted from KC Overseas live sites
          primary: '#1E64DC',
          'primary-hover': '#1652B5',
          'primary-light': '#EBF2FC',
          accent: '#FF7054',
          'accent-hover': '#E85B3F',
          'accent-light': '#FFF2EF',
          amber: '#F59E0B',
          'amber-hover': '#D97706',
          'amber-light': '#FEF3C7',
          call: '#288647',
          'call-hover': '#216D3A',
          whatsapp: '#25D366',
          'whatsapp-hover': '#20BA5A',
          navy: '#0B1526',
          'navy-card': '#101F38',
          sand: '#F9EFE3',
          'sand-dark': '#F0DFC8',
          ice: '#D8E5F8',
          surface: '#F7F8F9',
          heading: '#1A2B4C',
          body: '#1B1B1B',
          muted: '#5A6A85',
          border: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'kc-sm': '0 2px 8px rgba(30, 100, 220, 0.08)',
        'kc-md': '0 4px 20px rgba(30, 100, 220, 0.12)',
        'kc-lg': '0 10px 30px rgba(30, 100, 220, 0.16)',
        'cta-glow': '0 4px 20px rgba(255, 112, 84, 0.4)',
        'whatsapp-glow': '0 4px 20px rgba(37, 211, 102, 0.45)',
      },
      animation: {
        'pulse-subtle': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};

export default config;
