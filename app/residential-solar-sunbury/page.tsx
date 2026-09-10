import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'
import { Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Residential Solar Sunbury VIC | Home Solar Systems',
  description: 'Home solar systems for Sunbury families. Tier 1 panels, 25-year warranty, government rebates. Free, same-day quote.',
}

const serviceData = {
  icon: Sun,
  title: 'Residential Solar Sunbury',
  subtitle: 'Solar Solutions',
  description: 'Home solar systems for Sunbury families. Tier 1 panels, 25-year warranty, government rebates. Free, same-day quote.',
  heroStats: [
    { value: '25yr', label: 'Warranty' },
    { value: '1K+', label: 'Installations' },
    { value: 'Tier 1', label: 'Panels' },
  ],
  detailedDescription: [
    'Sunbury\'s mix of established homes and newer housing estates on Melbourne\'s northwest fringe means many roofs are larger and unshaded — ideal conditions for a well-sized residential system. VRJ Electrics installs across Sunbury, handling design, rebate paperwork and grid connection from start to finish.',
    '**Areas Served:** Sunbury, Diggers Rest, Bulla, and surrounding suburbs',
  ],
  benefits: [
    {
      title: 'Systems sized for both new-estate and established roof types',
      description: 'Systems sized for both new-estate and established roof types',
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
      question: 'Are Sunbury\'s newer homes well suited to solar?',
      answer: 'Yes — larger, unshaded roof areas on newer builds often support bigger systems and better output.',
    },
    {
      question: 'How long does installation take?',
      answer: 'Most residential jobs are completed in a single day.',
    },
  ],
  heroImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
}

export default function Page() {
  return <ServicePageTemplate {...serviceData} />
}
