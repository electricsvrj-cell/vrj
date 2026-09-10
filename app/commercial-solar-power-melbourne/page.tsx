import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'
import { Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Solar Power Melbourne | VRJ Electrics',
  description: 'Reduce business energy costs with commercial solar in Melbourne. Custom system design, rebate handling, CEC-accredited installers. Free quote.',
}

const serviceData = {
  icon: Sun,
  title: 'Commercial Solar Power Melbourne',
  subtitle: 'Solar Solutions',
  description: 'Reduce business energy costs with commercial solar in Melbourne. Custom system design, rebate handling, CEC-accredited installers. Free quote.',
  heroStats: [
    { value: '25yr', label: 'Warranty' },
    { value: '1K+', label: 'Installations' },
    { value: 'Tier 1', label: 'Panels' },
  ],
  detailedDescription: [
    'Melbourne businesses — from CBD offices to outer-suburb warehouses — face some of the highest commercial electricity rates in the country. VRJ Electrics designs and installs large-scale commercial solar systems across Melbourne, sized to your actual load profile rather than available roof space, so the system reduces operating costs from day one.',
    '**Areas Served:** Melbourne CBD and surrounding commercial and industrial precincts, across all major distributor zones.',
  ],
  benefits: [
    {
      title: 'Systems sized to your business\'s actual demand curve',
      description: 'Systems sized to your business\'s actual demand curve',
    },
    {
      title: 'CEC-accredited commercial installation team',
      description: 'CEC-accredited commercial installation team',
    },
    {
      title: 'We manage network applications and grid connection for larger arrays across CitiPower, Powercor, Jemena, United Energy and AusNet zones',
      description: 'We manage network applications and grid connection for larger arrays across CitiPower, Powercor, Jemena, United Energy and AusNet zones',
    },
    {
      title: 'Tier 1 panels and inverters, 25-year warranty',
      description: 'Tier 1 panels and inverters, 25-year warranty',
    },
    {
      title: 'One recent commercial warehouse install is saving roughly $28,000/year',
      description: 'One recent commercial warehouse install is saving roughly $28,000/year',
    },
  ],
  process: [

  ],
  rebates: {
    title: 'Government Rebates & Incentives',
    items: [
      'Commercial systems are primarily supported through STCs (systems under 100kW) and, for larger arrays, Large-scale Generation Certificates (LGCs). Most commercial installs pay for themselves in 3–5 years.',
    ],
    note: 'Rebates are subject to eligibility criteria and change over time. Contact us for up-to-date information.',
  },
  faqs: [
    {
      question: 'Will installation disrupt our business operations?',
      answer: 'Installation is scheduled around your trading hours; larger jobs can often be completed over a weekend.',
    },
    {
      question: 'What size system does my business need?',
      answer: 'It depends on your load profile — a free energy audit is completed before recommending a size.',
    },
  ],
  heroImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
}

export default function Page() {
  return <ServicePageTemplate {...serviceData} />
}
