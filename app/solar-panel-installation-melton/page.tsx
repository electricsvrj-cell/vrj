import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'
import { Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solar Panel Installation Melton',
  description: 'Solar panel installation for Melton homes and businesses. CEC-accredited, Tier 1 panels, 25-year warranty. Free, same-day quotes.',
}

const serviceData = {
  icon: Sun,
  title: 'Solar Panel Installation Melton',
  subtitle: 'Solar Solutions',
  description: 'Solar panel installation for Melton homes and businesses. CEC-accredited, Tier 1 panels, 25-year warranty. Free, same-day quotes.',
  heroStats: [
    { value: '25yr', label: 'Warranty' },
    { value: '1K+', label: 'Installations' },
    { value: 'Tier 1', label: 'Panels' },
  ],
  detailedDescription: [
    'Melton is one of Melbourne\'s fastest-growing outer suburbs, with plenty of newer homes well suited to solar thanks to larger roof spaces and modern orientations. VRJ Electrics designs and installs Tier 1 solar systems for Melton homes and businesses on the Powercor network.',
    '**Areas Served:** Melton, Melton South, Hillside, Caroline Springs, Rockbank',
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
      title: 'Systems designed for larger, newer-build roofs',
      description: 'Systems designed for larger, newer-build roofs',
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
      question: 'Is Melton a good area for solar?',
      answer: 'Yes — newer housing stock with larger, often north-facing roofs makes for efficient system design.',
    },
    {
      question: 'Do you handle Powercor connection paperwork?',
      answer: 'Yes, the full application is managed on your behalf.',
    },
  ],
  heroImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
}

export default function Page() {
  return <ServicePageTemplate {...serviceData} />
}
