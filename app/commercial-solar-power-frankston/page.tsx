import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'
import { Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Solar Power Frankston | VRJ Electrics',
  description: 'Reduce business energy costs with commercial solar in Frankston. Coastal-rated systems, CEC-accredited installers. Free energy audit.',
}

const serviceData = {
  icon: Sun,
  title: 'Commercial Solar Power Frankston',
  subtitle: 'Solar Solutions',
  description: 'Reduce business energy costs with commercial solar in Frankston. Coastal-rated systems, CEC-accredited installers. Free energy audit.',
  heroStats: [
    { value: '25yr', label: 'Warranty' },
    { value: '1K+', label: 'Installations' },
    { value: 'Tier 1', label: 'Panels' },
  ],
  detailedDescription: [
    'Frankston\'s coastal business precinct, at the gateway to the Mornington Peninsula, needs commercial solar systems built with corrosion-resistant hardware to handle salt-air exposure. VRJ Electrics designs and installs commercial systems for Frankston businesses on the United Energy network, sized to actual energy demand.',
    '**Areas Served:** Frankston, Frankston South, Seaford, Carrum Downs, Langwarrin',
  ],
  benefits: [
    {
      title: 'Coastal-rated commercial-grade hardware as standard',
      description: 'Coastal-rated commercial-grade hardware as standard',
    },
    {
      title: 'Systems sized to actual business demand curve',
      description: 'Systems sized to actual business demand curve',
    },
    {
      title: 'CEC-accredited commercial installation team',
      description: 'CEC-accredited commercial installation team',
    },
    {
      title: 'United Energy network application handling',
      description: 'United Energy network application handling',
    },
    {
      title: '25-year warranty on panels, inverters and workmanship',
      description: '25-year warranty on panels, inverters and workmanship',
    },
  ],
  process: [

  ],
  rebates: {
    title: 'Government Rebates & Incentives',
    items: [
      'STCs (systems under 100kW) and LGCs for larger arrays. Most commercial installs pay for themselves in 3–5 years.',
    ],
    note: 'Rebates are subject to eligibility criteria and change over time. Contact us for up-to-date information.',
  },
  faqs: [
    {
      question: 'Does the coastal location affect commercial systems?',
      answer: 'Yes — corrosion-resistant mounting and fittings are used for Frankston and Peninsula-area commercial installs as standard.',
    },
    {
      question: 'How is the system sized?',
      answer: 'A free energy audit is completed before recommending a system size.',
    },
  ],
  heroImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
}

export default function Page() {
  return <ServicePageTemplate {...serviceData} />
}
