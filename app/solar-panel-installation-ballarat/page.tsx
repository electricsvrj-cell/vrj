import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'
import { Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solar Panel Installation Ballarat | VRJ Electrics',
  description: 'Hail and frost-rated solar panel installation in Ballarat. CEC-accredited, 25-year warranty, same-day quotes across the Powercor network.',
}

const serviceData = {
  icon: Sun,
  title: 'Solar Panel Installation Ballarat',
  subtitle: 'Solar Solutions',
  description: 'Hail and frost-rated solar panel installation in Ballarat. CEC-accredited, 25-year warranty, same-day quotes across the Powercor network.',
  heroStats: [
    { value: '25yr', label: 'Warranty' },
    { value: '1K+', label: 'Installations' },
    { value: 'Tier 1', label: 'Panels' },
  ],
  detailedDescription: [
    'Ballarat\'s cooler climate, elevation and occasional hail mean panel and mounting choice matters more here than in metro Melbourne. VRJ Electrics fits hail-rated, tempered-glass Tier 1 panels for Ballarat homes and businesses, on the Powercor network.',
    '**Areas Served:** Ballarat Central, Wendouree, Sebastopol, Buninyong, Delacombe, Alfredton',
  ],
  benefits: [
    {
      title: 'Hail and frost-rated panels',
      description: 'Hail and frost-rated panels',
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
      title: 'Free consultation and same-day quote',
      description: 'Free consultation and same-day quote',
    },
    {
      title: 'Powercor network experience',
      description: 'Powercor network experience',
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
      question: 'Do panels still perform well in Ballarat\'s cooler weather?',
      answer: 'Yes — panels are slightly more efficient in cooler temperatures, and Ballarat gets plenty of clear-sky days.',
    },
    {
      question: 'Are panels hail-resistant?',
      answer: 'Tempered-glass Tier 1 panels tested for hail impact are fitted as standard.',
    },
  ],
  heroImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
}

export default function Page() {
  return <ServicePageTemplate {...serviceData} />
}
