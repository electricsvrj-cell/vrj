import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'
import { Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solar Panel Installation Geelong',
  description: 'CEC-accredited solar panel installation in Geelong. Tier 1 panels, coastal-rated fittings, 25-year warranty. Free quote in 24hrs.',
}

const serviceData = {
  icon: Sun,
  title: 'Solar Panel Installation Geelong',
  subtitle: 'Solar Solutions',
  description: 'CEC-accredited solar panel installation in Geelong. Tier 1 panels, coastal-rated fittings, 25-year warranty. Free quote in 24hrs.',
  heroStats: [
    { value: '25yr', label: 'Warranty' },
    { value: '1K+', label: 'Installations' },
    { value: 'Tier 1', label: 'Panels' },
  ],
  detailedDescription: [
    'Geelong\'s coastal position means solar systems here need to cope with salt-air exposure as well as deliver on savings — corrosion-resistant mounting and fittings matter more than they do further inland. VRJ Electrics installs Tier 1 solar systems across Geelong and the Bellarine, on Powercor\'s network, for both homes and businesses.',
    '**Areas Served:** Geelong CBD, Newtown, Belmont, Highton, Grovedale, Torquay, Ocean Grove',
  ],
  benefits: [
    {
      title: 'Coastal-rated hardware as standard',
      description: 'Coastal-rated hardware as standard',
    },
    {
      title: 'Tier 1 panels (LG, SunPower, JA Solar)',
      description: 'Tier 1 panels (LG, SunPower, JA Solar)',
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
      title: 'Free same-day quotes',
      description: 'Free same-day quotes',
    },
    {
      title: 'Powercor grid-connection experience',
      description: 'Powercor grid-connection experience',
    },
  ],
  process: [

  ],
  rebates: {
    title: 'Government Rebates & Incentives',
    items: [
      'Solar Homes Program PV rebate up to $1,400 (income cap $150,000) plus STCs, typically $1,500–$3,500 off depending on system size.',
    ],
    note: 'Rebates are subject to eligibility criteria and change over time. Contact us for up-to-date information.',
  },
  faqs: [
    {
      question: 'Does the coastal climate affect my system?',
      answer: 'Yes — corrosion-resistant fittings are used for Geelong and Bellarine installs as standard.',
    },
    {
      question: 'Which network do I connect through?',
      answer: 'Powercor — the application is handled for you.',
    },
  ],
  heroImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
}

export default function Page() {
  return <ServicePageTemplate {...serviceData} />
}
