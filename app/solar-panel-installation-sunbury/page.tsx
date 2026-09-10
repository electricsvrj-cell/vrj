import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'
import { Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solar Panel Installation Sunbury | VRJ Electrics',
  description: 'Solar panel installation for Sunbury homes and new estates. CEC-accredited installers, Tier 1 panels, 25-year warranty. Free quote today.',
}

const serviceData = {
  icon: Sun,
  title: 'Solar Panel Installation Sunbury',
  subtitle: 'Solar Solutions',
  description: 'Solar panel installation for Sunbury homes and new estates. CEC-accredited installers, Tier 1 panels, 25-year warranty. Free quote today.',
  heroStats: [
    { value: '25yr', label: 'Warranty' },
    { value: '1K+', label: 'Installations' },
    { value: 'Tier 1', label: 'Panels' },
  ],
  detailedDescription: [
    'Sunbury\'s mix of established homes and newer housing estates on Melbourne\'s northwest fringe makes it one of the more straightforward areas to design a well-sized solar system for — larger, unshaded roofs are common on newer builds. VRJ Electrics installs across Sunbury and surrounds, handling all grid connection paperwork.',
    '**Areas Served:** Sunbury, Diggers Rest, Bulla, and surrounding suburbs',
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
      title: 'Systems sized to new-estate and established roof types alike',
      description: 'Systems sized to new-estate and established roof types alike',
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
      question: 'Are newer estate homes better suited to solar?',
      answer: 'Often yes — larger, unshaded roof areas on newer builds can support bigger systems and better output.',
    },
    {
      question: 'How quickly can I get connected?',
      answer: 'Typically around 2 weeks from signed quote to a live system.',
    },
  ],
  heroImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
}

export default function Page() {
  return <ServicePageTemplate {...serviceData} />
}
