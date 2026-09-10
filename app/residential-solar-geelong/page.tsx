import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'
import { Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Residential Solar Geelong VIC | Home Solar Systems',
  description: 'Home solar systems for Geelong families. Coastal-rated fittings, 25-year warranty, government rebates. Free, no-obligation quote today.',
}

const serviceData = {
  icon: Sun,
  title: 'Residential Solar Geelong',
  subtitle: 'Solar Solutions',
  description: 'Home solar systems for Geelong families. Coastal-rated fittings, 25-year warranty, government rebates. Free, no-obligation quote today.',
  heroStats: [
    { value: '25yr', label: 'Warranty' },
    { value: '1K+', label: 'Installations' },
    { value: 'Tier 1', label: 'Panels' },
  ],
  detailedDescription: [
    'Geelong\'s coastal air means fittings and frames need to be properly rated to avoid corrosion over time — something worth checking before you sign with any installer. VRJ Electrics builds residential solar systems for Geelong homes using corrosion-resistant mounting hardware as standard, on the Powercor network, with a 25-year warranty across the whole system.',
    '**Areas Served:** Geelong CBD, Newtown, Belmont, Highton, Grovedale, Torquay, Ocean Grove',
  ],
  benefits: [
    {
      title: 'Corrosion-resistant hardware for coastal conditions',
      description: 'Corrosion-resistant hardware for coastal conditions',
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
      title: 'Custom system design per home',
      description: 'Custom system design per home',
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
      question: 'Does the coastal air really affect solar panels?',
      answer: 'Yes — salt-air exposure can corrode unrated mounting hardware over time, which is why corrosion-resistant fittings are used as standard.',
    },
    {
      question: 'How much can I save in Geelong?',
      answer: 'Most families save $1,200–$2,500/year depending on system size and usage.',
    },
  ],
  heroImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
}

export default function Page() {
  return <ServicePageTemplate {...serviceData} />
}
