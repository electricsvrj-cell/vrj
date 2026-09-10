import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'
import { Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Solar Power Geelong | VRJ Electrics',
  description: 'Reduce business energy costs with commercial solar in Geelong. Custom system design, Powercor network experience, CEC-accredited installers.',
}

const serviceData = {
  icon: Sun,
  title: 'Commercial Solar Power Geelong',
  subtitle: 'Solar Solutions',
  description: 'Reduce business energy costs with commercial solar in Geelong. Custom system design, Powercor network experience, CEC-accredited installers.',
  heroStats: [
    { value: '25yr', label: 'Warranty' },
    { value: '1K+', label: 'Installations' },
    { value: 'Tier 1', label: 'Panels' },
  ],
  detailedDescription: [
    'Geelong\'s mix of industrial, retail and warehouse businesses has some of the highest daytime energy loads in the Powercor network zone — which also makes it one of the best places in Victoria for commercial solar to pay for itself quickly. VRJ Electrics designs and installs large-scale commercial systems for Geelong businesses, sized to actual load profile rather than roof space.',
    '**Areas Served:** Geelong CBD, Newtown, Belmont, Grovedale, Corio, Torquay, and the wider Powercor network region.',
  ],
  benefits: [
    {
      title: 'Systems sized to actual business demand curve, not just roof area',
      description: 'Systems sized to actual business demand curve, not just roof area',
    },
    {
      title: 'Coastal-rated mounting and fittings for salt-air exposure',
      description: 'Coastal-rated mounting and fittings for salt-air exposure',
    },
    {
      title: 'CEC-accredited commercial installation team',
      description: 'CEC-accredited commercial installation team',
    },
    {
      title: 'Powercor network applications and grid connection managed for larger commercial arrays',
      description: 'Powercor network applications and grid connection managed for larger commercial arrays',
    },
    {
      title: 'A recent Geelong-area commercial warehouse install is saving roughly $28,000/year',
      description: 'A recent Geelong-area commercial warehouse install is saving roughly $28,000/year',
    },
  ],
  process: [

  ],
  rebates: {
    title: 'Government Rebates & Incentives',
    items: [
      'Commercial systems in Victoria are primarily supported through STCs (systems under 100kW) and, for larger arrays, Large-scale Generation Certificates (LGCs). Most commercial installs pay for themselves in 3–5 years.',
    ],
    note: 'Rebates are subject to eligibility criteria and change over time. Contact us for up-to-date information.',
  },
  faqs: [
    {
      question: 'Will installation disrupt business operations?',
      answer: 'Installation is scheduled around trading hours; larger commercial jobs can often be completed over a weekend.',
    },
    {
      question: 'Does Geelong\'s coastal climate affect the system?',
      answer: 'Yes — corrosion-resistant mounting hardware is used for coastal and near-coastal Geelong sites as standard.',
    },
    {
      question: 'What size system does a typical Geelong warehouse need?',
      answer: 'It depends on the load profile — a free energy audit is done before recommending a size.',
    },
  ],
  heroImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
}

export default function Page() {
  return <ServicePageTemplate {...serviceData} />
}
