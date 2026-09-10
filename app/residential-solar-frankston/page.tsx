import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'
import { Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Residential Solar Frankston VIC | Home Solar Systems',
  description: 'Home solar systems for Frankston families. Coastal-rated fittings, 25-year warranty, government rebates. Free, same-day quote.',
}

const serviceData = {
  icon: Sun,
  title: 'Residential Solar Frankston',
  subtitle: 'Solar Solutions',
  description: 'Home solar systems for Frankston families. Coastal-rated fittings, 25-year warranty, government rebates. Free, same-day quote.',
  heroStats: [
    { value: '25yr', label: 'Warranty' },
    { value: '1K+', label: 'Installations' },
    { value: 'Tier 1', label: 'Panels' },
  ],
  detailedDescription: [
    'As a coastal gateway to the Mornington Peninsula, Frankston homes benefit from the same corrosion-resistant approach to solar hardware used in Geelong — salt-air exposure affects fittings and frames over time if they\'re not properly rated. VRJ Electrics installs residential solar across Frankston on the United Energy network, with coastal-rated mounting as standard.',
    '**Areas Served:** Frankston, Frankston South, Seaford, Carrum Downs, Langwarrin',
  ],
  benefits: [
    {
      title: 'Coastal-rated hardware as standard',
      description: 'Coastal-rated hardware as standard',
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
      question: 'Does the coastal location affect my system?',
      answer: 'Yes — corrosion-resistant mounting and fittings are used for Frankston and Peninsula-area installs as standard.',
    },
    {
      question: 'Which network do I connect through?',
      answer: 'United Energy — the connection application is handled on your behalf.',
    },
  ],
  heroImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
}

export default function Page() {
  return <ServicePageTemplate {...serviceData} />
}
