import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'
import { Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Residential Solar Bendigo VIC | Home Solar Systems',
  description: 'Home solar systems for Bendigo families. Tier 1 panels, 25-year warranty, government rebates. Free, same-day quote.',
}

const serviceData = {
  icon: Sun,
  title: 'Residential Solar Bendigo',
  subtitle: 'Solar Solutions',
  description: 'Home solar systems for Bendigo families. Tier 1 panels, 25-year warranty, government rebates. Free, same-day quote.',
  heroStats: [
    { value: '25yr', label: 'Warranty' },
    { value: '1K+', label: 'Installations' },
    { value: 'Tier 1', label: 'Panels' },
  ],
  detailedDescription: [
    'Bendigo\'s hot, dry summers deliver strong solar output for most of the year, and its mix of established homes and newer estates gives plenty of scope for a well-designed system either way. VRJ Electrics installs residential solar across Bendigo on the Powercor network, sizing each system to your roof and household usage.',
    '**Areas Served:** Bendigo Central, Kangaroo Flat, Golden Square, Strathdale, Epsom, White Hills',
  ],
  benefits: [
    {
      title: 'Strong output from Bendigo\'s high sun-hour summers',
      description: 'Strong output from Bendigo\'s high sun-hour summers',
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
      question: 'Is Bendigo well suited to home solar?',
      answer: 'Yes — hot, dry summers with high sun exposure mean strong system output for most of the year.',
    },
    {
      question: 'How much can I save?',
      answer: 'Most Bendigo families save $1,200–$2,500/year depending on system size and usage.',
    },
  ],
  heroImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
}

export default function Page() {
  return <ServicePageTemplate {...serviceData} />
}
