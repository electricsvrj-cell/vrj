import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'
import { Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Solar Power Bendigo | VRJ Electrics',
  description: 'Reduce business energy costs with commercial solar in Bendigo. Custom system design, Powercor network experience, CEC-accredited installers.',
}

const serviceData = {
  icon: Sun,
  title: 'Commercial Solar Power Bendigo',
  subtitle: 'Solar Solutions',
  description: 'Reduce business energy costs with commercial solar in Bendigo. Custom system design, Powercor network experience, CEC-accredited installers.',
  heroStats: [
    { value: '25yr', label: 'Warranty' },
    { value: '1K+', label: 'Installations' },
    { value: 'Tier 1', label: 'Panels' },
  ],
  detailedDescription: [
    'Bendigo\'s industrial and retail businesses benefit from strong solar output thanks to the region\'s hot, dry summers and high sun exposure. VRJ Electrics designs commercial solar systems for Bendigo businesses on the Powercor network, matched to actual energy usage rather than roof space.',
    '**Areas Served:** Bendigo Central, Kangaroo Flat, Golden Square, Strathdale, Epsom, White Hills',
  ],
  benefits: [
    {
      title: 'Strong output from Bendigo\'s high sun-hour climate',
      description: 'Strong output from Bendigo\'s high sun-hour climate',
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
      question: 'Is Bendigo well suited to commercial solar?',
      answer: 'Yes — hot, dry summers with high sun exposure typically mean strong system output year-round.',
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
