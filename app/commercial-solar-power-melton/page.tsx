import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'
import { Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Solar Power Melton',
  description: 'Reduce business energy costs with commercial solar in Melton. Custom system design, Powercor network experience, CEC-accredited installers.',
}

const serviceData = {
  icon: Sun,
  title: 'Commercial Solar Power Melton',
  subtitle: 'Solar Solutions',
  description: 'Reduce business energy costs with commercial solar in Melton. Custom system design, Powercor network experience, CEC-accredited installers.',
  heroStats: [
    { value: '25yr', label: 'Warranty' },
    { value: '1K+', label: 'Installations' },
    { value: 'Tier 1', label: 'Panels' },
  ],
  detailedDescription: [
    'Melton\'s expanding industrial and logistics hub, on Melbourne\'s western growth corridor, has warehouse and distribution roof space well suited to large-scale commercial solar. VRJ Electrics designs systems for Melton businesses on the Powercor network, sized to actual energy demand.',
    '**Areas Served:** Melton, Melton South, Hillside, Caroline Springs, Rockbank',
  ],
  benefits: [
    {
      title: 'Systems sized to actual business demand curve',
      description: 'Systems sized to actual business demand curve',
    },
    {
      title: 'Well suited to warehouse and distribution roof profiles',
      description: 'Well suited to warehouse and distribution roof profiles',
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
      question: 'Is Melton a good area for commercial solar?',
      answer: 'Yes — its growing industrial and logistics precincts often have large, unshaded roof areas well suited to solar.',
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
