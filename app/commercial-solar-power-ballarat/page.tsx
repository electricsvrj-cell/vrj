import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'
import { Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Solar Power Ballarat | VRJ Electrics',
  description: 'Reduce business energy costs with commercial solar in Ballarat. Hail-rated systems, Powercor network experience, CEC-accredited installers.',
}

const serviceData = {
  icon: Sun,
  title: 'Commercial Solar Power Ballarat',
  subtitle: 'Solar Solutions',
  description: 'Reduce business energy costs with commercial solar in Ballarat. Hail-rated systems, Powercor network experience, CEC-accredited installers.',
  heroStats: [
    { value: '25yr', label: 'Warranty' },
    { value: '1K+', label: 'Installations' },
    { value: 'Tier 1', label: 'Panels' },
  ],
  detailedDescription: [
    'Ballarat\'s regional businesses — from retail strips to light-industrial sites — can see strong returns from commercial solar, provided the system is specified for the local climate. VRJ Electrics designs hail and frost-rated commercial systems for Ballarat businesses on the Powercor network, sized to actual energy demand.',
    '**Areas Served:** Ballarat Central, Wendouree, Sebastopol, Buninyong, Delacombe, Alfredton',
  ],
  benefits: [
    {
      title: 'Hail and frost-rated commercial-grade components',
      description: 'Hail and frost-rated commercial-grade components',
    },
    {
      title: 'Systems sized to actual business load, not roof space alone',
      description: 'Systems sized to actual business load, not roof space alone',
    },
    {
      title: 'CEC-accredited commercial installation team',
      description: 'CEC-accredited commercial installation team',
    },
    {
      title: 'Powercor network application handling',
      description: 'Powercor network application handling',
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
      question: 'Does Ballarat\'s climate affect commercial systems?',
      answer: 'Yes — hail and frost-rated components are used as standard for regional Victorian installs.',
    },
    {
      question: 'How is the system sized?',
      answer: 'A free energy audit is completed first, so the system matches actual business demand rather than just available roof space.',
    },
  ],
  heroImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
}

export default function Page() {
  return <ServicePageTemplate {...serviceData} />
}
