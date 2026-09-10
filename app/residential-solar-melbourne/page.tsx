import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'
import { Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Residential Solar Melbourne VIC | Home Solar Systems',
  description: 'Home solar systems for Melbourne families. Tier 1 panels, 25-year warranty, government rebates. Save up to $2,000/year. Free quote today.',
}

const serviceData = {
  icon: Sun,
  title: 'Residential Solar Melbourne',
  subtitle: 'Solar Solutions',
  description: 'Home solar systems for Melbourne families. Tier 1 panels, 25-year warranty, government rebates. Save up to $2,000/year. Free quote today.',
  heroStats: [
    { value: '25yr', label: 'Warranty' },
    { value: '1K+', label: 'Installations' },
    { value: 'Tier 1', label: 'Panels' },
  ],
  detailedDescription: [
    'Going solar is one of the best investments a Melbourne homeowner can make. With abundant sunshine and some of the country\'s highest electricity prices, a well-sized residential system typically pays for itself in 3–5 years, then delivers decades of free electricity. VRJ Electrics designs each Melbourne home system around your roof, orientation and actual usage — not a generic template — using only Tier 1 panels and premium inverters.',
    '**Areas Served:** Preston, Reservoir, Coburg, Brunswick, Northcote, Fitzroy, and suburbs across greater Melbourne.',
  ],
  benefits: [
    {
      title: 'Most families save $1,500–$2,500/year on electricity',
      description: 'Most families save $1,500–$2,500/year on electricity',
    },
    {
      title: 'Solar can increase property value by up to 4%',
      description: 'Solar can increase property value by up to 4%',
    },
    {
      title: 'Tier 1 panels and inverters only, proven track record',
      description: 'Tier 1 panels and inverters only, proven track record',
    },
    {
      title: 'Custom system design for every home',
      description: 'Custom system design for every home',
    },
    {
      title: '25-year warranty on panels, inverters and workmanship',
      description: '25-year warranty on panels, inverters and workmanship',
    },
    {
      title: 'Hassle-free — we handle permits and grid connection',
      description: 'Hassle-free — we handle permits and grid connection',
    },
  ],
  process: [

  ],
  rebates: {
    title: 'Government Rebates & Incentives',
    items: [
      'Solar Homes Program PV rebate up to $1,400 (income cap $150,000) plus STCs, typically $1,500–$3,500 off depending on system size, deducted upfront from your quote.',
    ],
    note: 'Rebates are subject to eligibility criteria and change over time. Contact us for up-to-date information.',
  },
  faqs: [
    {
      question: 'How much does a home solar system cost in Melbourne?',
      answer: 'After rebates, a typical 6.6kW system runs $4,500–$6,500; larger systems scale from there — an exact quote depends on your roof and usage.',
    },
    {
      question: 'Do solar panels work on cloudy days?',
      answer: 'Yes, though at reduced output — Melbourne\'s overall sun hours still make solar worthwhile year-round.',
    },
    {
      question: 'How long does installation take?',
      answer: 'Most residential installs are completed in a single day.',
    },
  ],
  heroImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
}

export default function Page() {
  return <ServicePageTemplate {...serviceData} />
}
