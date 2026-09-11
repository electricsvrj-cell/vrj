import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'
import { Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Solar Power Sunbury',
  description: 'Reduce business energy costs with commercial solar in Sunbury. Custom system design, Powercor network experience, CEC-accredited installers.',
}

const serviceData = {
  icon: Sun,
  title: 'Commercial Solar Power Sunbury',
  subtitle: 'Solar Solutions',
  description: 'Reduce business energy costs with commercial solar in Sunbury. Custom system design, Powercor network experience, CEC-accredited installers.',
  heroStats: [
    { value: '25yr', label: 'Warranty' },
    { value: '1K+', label: 'Installations' },
    { value: 'Tier 1', label: 'Panels' },
  ],
  detailedDescription: [
    'Sunbury\'s growing industrial and logistics precincts, close to Melbourne Airport, have significant daytime energy loads well suited to commercial solar. VRJ Electrics designs commercial systems for Sunbury businesses on the Powercor network, sized to actual load rather than roof space alone.',
    '**Areas Served:** Sunbury, Diggers Rest, Bulla, and surrounding industrial precincts',
  ],
  benefits: [
    {
      title: 'Systems sized to actual business demand curve',
      description: 'Systems sized to actual business demand curve',
    },
    {
      title: 'Well suited to warehouse and logistics roof profiles',
      description: 'Well suited to warehouse and logistics roof profiles',
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
      question: 'Is Sunbury a good area for commercial solar?',
      answer: 'Yes — its growing logistics and industrial precincts often have large, unshaded roof areas well suited to solar.',
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
