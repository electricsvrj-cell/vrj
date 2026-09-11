import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'
import { Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Solar Power Craigieburn',
  description: 'Reduce business energy costs with commercial solar in Craigieburn. Custom system design, CEC-accredited installers. Free energy audit.',
}

const serviceData = {
  icon: Sun,
  title: 'Commercial Solar Power Craigieburn',
  subtitle: 'Solar Solutions',
  description: 'Reduce business energy costs with commercial solar in Craigieburn. Custom system design, CEC-accredited installers. Free energy audit.',
  heroStats: [
    { value: '25yr', label: 'Warranty' },
    { value: '1K+', label: 'Installations' },
    { value: 'Tier 1', label: 'Panels' },
  ],
  detailedDescription: [
    'Craigieburn\'s logistics and warehouse corridor, on Melbourne\'s northern growth fringe, has significant roof space well suited to commercial solar. VRJ Electrics designs systems for Craigieburn businesses, managing grid connection with whichever distributor services your site.',
    '**Areas Served:** Craigieburn, Roxburgh Park, Mickleham, Greenvale',
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
      title: 'Network application handling across the AusNet/CitiPower border zone',
      description: 'Network application handling across the AusNet/CitiPower border zone',
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
      question: 'Which network services Craigieburn businesses?',
      answer: 'It sits near an AusNet/CitiPower boundary — the exact distributor for your site is confirmed before installation.',
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
