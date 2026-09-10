import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'
import { Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solar Panel Installation Craigieburn | VRJ Electrics',
  description: 'Solar panel installation for Craigieburn homes and businesses. CEC-accredited, Tier 1 panels, 25-year warranty. Free, same-day quotes.',
}

const serviceData = {
  icon: Sun,
  title: 'Solar Panel Installation Craigieburn',
  subtitle: 'Solar Solutions',
  description: 'Solar panel installation for Craigieburn homes and businesses. CEC-accredited, Tier 1 panels, 25-year warranty. Free, same-day quotes.',
  heroStats: [
    { value: '25yr', label: 'Warranty' },
    { value: '1K+', label: 'Installations' },
    { value: 'Tier 1', label: 'Panels' },
  ],
  detailedDescription: [
    'Craigieburn\'s rapid growth on Melbourne\'s northern fringe means a lot of newer housing stock with roof profiles well suited to solar. VRJ Electrics installs Tier 1 systems across Craigieburn and the surrounding growth corridor, managing grid connection with whichever distributor services your street.',
    '**Areas Served:** Craigieburn, Roxburgh Park, Mickleham, Greenvale',
  ],
  benefits: [
    {
      title: 'Tier 1 panels only',
      description: 'Tier 1 panels only',
    },
    {
      title: 'CEC-accredited installers',
      description: 'CEC-accredited installers',
    },
    {
      title: '25-year warranty',
      description: '25-year warranty',
    },
    {
      title: 'Systems designed for newer-estate roof types',
      description: 'Systems designed for newer-estate roof types',
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
      'PV rebate up to $1,400 (income cap $150,000) plus STCs.',
    ],
    note: 'Rebates are subject to eligibility criteria and change over time. Contact us for up-to-date information.',
  },
  faqs: [
    {
      question: 'Which network services Craigieburn?',
      answer: 'It sits near an AusNet/CitiPower boundary — the exact distributor is confirmed before installation.',
    },
    {
      question: 'How long does a typical install take?',
      answer: 'Most residential jobs are completed in a single day.',
    },
  ],
  heroImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
}

export default function Page() {
  return <ServicePageTemplate {...serviceData} />
}
