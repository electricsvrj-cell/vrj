import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'
import { Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solar Panel Installation Melbourne VIC | VRJ Electrics',
  description: 'CEC-accredited solar panel installation across Melbourne. Tier 1 panels, 25-year warranty, same-day quotes. Serving all Melbourne suburbs.',
}

const serviceData = {
  icon: Sun,
  title: 'Solar Panel Installation Melbourne',
  subtitle: 'Solar Solutions',
  description: 'CEC-accredited solar panel installation across Melbourne. Tier 1 panels, 25-year warranty, same-day quotes. Serving all Melbourne suburbs.',
  heroStats: [
    { value: '25yr', label: 'Warranty' },
    { value: '1K+', label: 'Installations' },
    { value: 'Tier 1', label: 'Panels' },
  ],
  detailedDescription: [
    'Melbourne homes and businesses are going solar faster than almost anywhere else in the country — and with over 300 sunny days a year across Victoria plus some of the country\'s highest electricity prices, it\'s not hard to see why. VRJ Electrics has completed 1,000+ installations across Melbourne\'s north, east, south-east and west, from CitiPower\'s inner suburbs through to Powercor and AusNet territory further out. Whatever pole-and-wire network runs to your street, our CEC-accredited team handles the design, paperwork and grid connection so you can start generating your own power.',
    '**Areas Served:** Preston, Reservoir, Coburg, Brunswick, Northcote, Fitzroy, and surrounding CitiPower/Powercor/AusNet suburbs — plus greater Melbourne on request.',
  ],
  benefits: [
    {
      title: 'Tier 1 panels only — LG, SunPower, JA Solar — no unbranded imports',
      description: 'Tier 1 panels only — LG, SunPower, JA Solar — no unbranded imports',
    },
    {
      title: 'Local team based in Preston, servicing the whole metro area',
      description: 'Local team based in Preston, servicing the whole metro area',
    },
    {
      title: 'Most installs completed in 1 day, minimal disruption',
      description: 'Most installs completed in 1 day, minimal disruption',
    },
    {
      title: '25-year warranty on panels, inverters and workmanship',
      description: '25-year warranty on panels, inverters and workmanship',
    },
    {
      title: 'We manage grid connection paperwork with your specific distributor',
      description: 'We manage grid connection paperwork with your specific distributor',
    },
    {
      title: 'Same-day quotes, 97% customer satisfaction',
      description: 'Same-day quotes, 97% customer satisfaction',
    },
  ],
  process: [

  ],
  rebates: {
    title: 'Government Rebates & Incentives',
    items: [
      'Solar Homes Program PV rebate up to $1,400 (income cap $150,000) plus STCs, typically $1,500–$3,500 off depending on system size. Feed-in tariffs are lower than a few years ago, so correct system sizing matters more than maximising panel count.',
    ],
    note: 'Rebates are subject to eligibility criteria and change over time. Contact us for up-to-date information.',
  },
  faqs: [
    {
      question: 'Does it matter which electricity network runs to my house?',
      answer: 'It affects how long grid connection takes, not whether you\'re eligible — checked before installation.',
    },
    {
      question: 'How long from quote to power?',
      answer: 'Typically 2 weeks from signed quote to a switched-on system; installation itself usually 1 day.',
    },
    {
      question: 'Do I still get a rebate if I earn over $150,000?',
      answer: 'STCs may still apply, but the Solar Homes Program PV rebate now has a $150,000 combined household income cap (changed 1 July 2026).',
    },
  ],
  heroImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
}

export default function Page() {
  return <ServicePageTemplate {...serviceData} />
}
