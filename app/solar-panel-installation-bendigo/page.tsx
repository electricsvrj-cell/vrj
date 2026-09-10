import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'
import { Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solar Panel Installation Bendigo | VRJ Electrics',
  description: 'Solar panel installation for Bendigo homes and businesses. CEC-accredited, Tier 1 panels, 25-year warranty. Free quote today.',
}

const serviceData = {
  icon: Sun,
  title: 'Solar Panel Installation Bendigo',
  subtitle: 'Solar Solutions',
  description: 'Solar panel installation for Bendigo homes and businesses. CEC-accredited, Tier 1 panels, 25-year warranty. Free quote today.',
  heroStats: [
    { value: '25yr', label: 'Warranty' },
    { value: '1K+', label: 'Installations' },
    { value: 'Tier 1', label: 'Panels' },
  ],
  detailedDescription: [
    'Bendigo\'s hot, dry summers and cooler winters make it well suited to solar, with a mix of established homes and newer estates giving plenty of scope for well-designed systems. VRJ Electrics installs across Bendigo on the Powercor network, sizing each system to the property and its usage rather than a standard template.',
    '**Areas Served:** Bendigo Central, Kangaroo Flat, Golden Square, Strathdale, Epsom, White Hills',
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
      title: 'Systems designed for Bendigo\'s climate and roof types',
      description: 'Systems designed for Bendigo\'s climate and roof types',
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
      question: 'Is Bendigo a good climate for solar?',
      answer: 'Yes — hot, dry summers with high sun exposure mean strong system output for most of the year.',
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
