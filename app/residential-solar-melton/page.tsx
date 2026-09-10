import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'
import { Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Residential Solar Melton VIC | Home Solar Systems',
  description: 'Home solar systems for Melton families. Tier 1 panels, 25-year warranty, government rebates. Free, same-day quote.',
}

const serviceData = {
  icon: Sun,
  title: 'Residential Solar Melton',
  subtitle: 'Solar Solutions',
  description: 'Home solar systems for Melton families. Tier 1 panels, 25-year warranty, government rebates. Free, same-day quote.',
  heroStats: [
    { value: '25yr', label: 'Warranty' },
    { value: '1K+', label: 'Installations' },
    { value: 'Tier 1', label: 'Panels' },
  ],
  detailedDescription: [
    'Melton is one of Melbourne\'s fastest-growing outer suburbs, and its newer homes — with larger, often north-facing roofs — are well suited to solar. VRJ Electrics designs residential systems for Melton households on the Powercor network, matched to your actual usage rather than roof space alone.',
    '**Areas Served:** Melton, Melton South, Hillside, Caroline Springs, Rockbank',
  ],
  benefits: [
    {
      title: 'Systems designed for larger, newer-build roofs',
      description: 'Systems designed for larger, newer-build roofs',
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
      question: 'Is Melton a good area for home solar?',
      answer: 'Yes — newer housing stock with larger, often north-facing roofs makes for efficient system design.',
    },
    {
      question: 'How much can I save?',
      answer: 'Most Melton families save $1,200–$2,500/year depending on system size and usage.',
    },
  ],
  heroImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
}

export default function Page() {
  return <ServicePageTemplate {...serviceData} />
}
