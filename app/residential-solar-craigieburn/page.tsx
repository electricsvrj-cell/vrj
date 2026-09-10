import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'
import { Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Residential Solar Craigieburn VIC | Home Solar Systems',
  description: 'Home solar systems for Craigieburn families. Tier 1 panels, 25-year warranty, government rebates. Free, same-day quote.',
}

const serviceData = {
  icon: Sun,
  title: 'Residential Solar Craigieburn',
  subtitle: 'Solar Solutions',
  description: 'Home solar systems for Craigieburn families. Tier 1 panels, 25-year warranty, government rebates. Free, same-day quote.',
  heroStats: [
    { value: '25yr', label: 'Warranty' },
    { value: '1K+', label: 'Installations' },
    { value: 'Tier 1', label: 'Panels' },
  ],
  detailedDescription: [
    'Craigieburn\'s rapid growth on Melbourne\'s northern fringe means plenty of newer housing stock with roof profiles well suited to solar. VRJ Electrics installs residential systems across Craigieburn and the surrounding growth corridor, managing grid connection with whichever distributor services your street.',
    '**Areas Served:** Craigieburn, Roxburgh Park, Mickleham, Greenvale',
  ],
  benefits: [
    {
      title: 'Systems designed for newer-estate roof types',
      description: 'Systems designed for newer-estate roof types',
    },
    {
      title: 'Most families save $1,200–$2,500/year on power bills',
      description: 'Most families save $1,200–$2,500/year on power bills',
    },
    {
      title: 'Tier 1 panels and premium inverters',
      description: 'Tier 1 panels and premium inverters',
    },
    {
      title: '25-year warranty on panels, inverters and workmanship',
      description: '25-year warranty on panels, inverters and workmanship',
    },
    {
      title: 'Free, same-day quotes',
      description: 'Free, same-day quotes',
    },
  ],
  process: [

  ],
  rebates: {
    title: 'Government Rebates & Incentives',
    items: [
      'Solar Homes Program PV rebate up to $1,400 (income cap $150,000) plus STCs, typically $1,500–$3,500 depending on system size.',
    ],
    note: 'Rebates are subject to eligibility criteria and change over time. Contact us for up-to-date information.',
  },
  faqs: [
    {
      question: 'Which network services Craigieburn?',
      answer: 'It sits near an AusNet/CitiPower boundary — the exact distributor for your address is confirmed before installation.',
    },
    {
      question: 'How much can I save?',
      answer: 'Most Craigieburn families save $1,200–$2,500/year depending on system size and usage.',
    },
  ],
  heroImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
}

export default function Page() {
  return <ServicePageTemplate {...serviceData} />
}
