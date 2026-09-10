import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'
import { Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solar Panel Installation Frankston | VRJ Electrics',
  description: 'Solar panel installation for Frankston homes and businesses. Coastal-rated fittings, CEC-accredited, 25-year warranty. Free quote today.',
}

const serviceData = {
  icon: Sun,
  title: 'Solar Panel Installation Frankston',
  subtitle: 'Solar Solutions',
  description: 'Solar panel installation for Frankston homes and businesses. Coastal-rated fittings, CEC-accredited, 25-year warranty. Free quote today.',
  heroStats: [
    { value: '25yr', label: 'Warranty' },
    { value: '1K+', label: 'Installations' },
    { value: 'Tier 1', label: 'Panels' },
  ],
  detailedDescription: [
    'As a coastal gateway to the Mornington Peninsula, Frankston needs the same corrosion-resistant approach to solar hardware as Geelong — salt-air exposure affects fittings and frames over time if they\'re not properly rated. VRJ Electrics installs Tier 1 systems across Frankston on the United Energy network, with coastal-rated mounting as standard.',
    '**Areas Served:** Frankston, Frankston South, Seaford, Carrum Downs, Langwarrin',
  ],
  benefits: [
    {
      title: 'Coastal-rated hardware as standard',
      description: 'Coastal-rated hardware as standard',
    },
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
