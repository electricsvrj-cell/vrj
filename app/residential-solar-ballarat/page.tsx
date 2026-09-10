import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'
import { Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Residential Solar Ballarat VIC | Home Solar Systems',
  description: 'Home solar systems for Ballarat families. Cold-climate-rated panels, 25-year warranty, free quote. Same-day response, CEC-accredited installers.',
}

const serviceData = {
  icon: Sun,
  title: 'Residential Solar Ballarat',
  subtitle: 'Solar Solutions',
  description: 'Home solar systems for Ballarat families. Cold-climate-rated panels, 25-year warranty, free quote. Same-day response, CEC-accredited installers.',
  heroStats: [
    { value: '25yr', label: 'Warranty' },
    { value: '1K+', label: 'Installations' },
    { value: 'Tier 1', label: 'Panels' },
  ],
  detailedDescription: [
    'Ballarat\'s colder winters, occasional hail and higher elevation mean a home solar system here needs to be specified a little differently than one going on a Melbourne roof — hail-rated panels and mounting that accounts for frost and wind loading matter more. VRJ Electrics installs residential solar across Ballarat and the surrounding Powercor network region, with systems selected for the local climate as well as energy usage.',
    '**Areas Served:** Ballarat Central, Wendouree, Sebastopol, Buninyong, Delacombe, and surrounding Powercor network suburbs.',
  ],
  benefits: [
    {
      title: 'Panels selected for hail and frost resistance, not just efficiency ratings',
      description: 'Panels selected for hail and frost resistance, not just efficiency ratings',
    },
    {
      title: 'Ballarat households typically save $1,200–$2,500/year on power bills',
      description: 'Ballarat households typically save $1,200–$2,500/year on power bills',
    },
    {
      title: '25-year warranty on panels, inverters and workmanship',
      description: '25-year warranty on panels, inverters and workmanship',
    },
    {
      title: 'CEC-accredited installers, most jobs completed in a single day',
      description: 'CEC-accredited installers, most jobs completed in a single day',
    },
    {
      title: 'Free consultation and same-day quote, no obligation',
      description: 'Free consultation and same-day quote, no obligation',
    },
  ],
  process: [

  ],
  rebates: {
    title: 'Government Rebates & Incentives',
    items: [
      'Solar Homes Program PV rebate up to $1,400 (income cap $150,000) plus STCs, typically $1,500–$3,500 depending on system size, deducted upfront from the quote. Note the interest-free battery loan scheme has closed.',
    ],
    note: 'Rebates are subject to eligibility criteria and change over time. Contact us for up-to-date information.',
  },
  faqs: [
    {
      question: 'Do solar panels still work well in Ballarat\'s cooler climate?',
      answer: 'Yes — panels are actually slightly more efficient in cooler temperatures; Ballarat\'s higher elevation and clear-sky days work in your favour.',
    },
    {
      question: 'Will hail damage my panels?',
      answer: 'Hail-rated, tempered-glass Tier 1 panels are fitted as standard, tested for exactly this.',
    },
    {
      question: 'How much can I save in Ballarat?',
      answer: 'Most families save $1,200–$2,500/year depending on system size and usage.',
    },
  ],
  heroImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
}

export default function Page() {
  return <ServicePageTemplate {...serviceData} />
}
