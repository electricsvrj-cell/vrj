import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'
import { Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solar Panel Installation Victoria',
  description: 'End-to-end solar panel installation across Victoria for homes and businesses. Tier 1 panels, CEC-accredited installers, 25-year warranty. Free quote today.',
}

const serviceData = {
  icon: Sun,
  title: 'Solar Panel Installation Victoria',
  subtitle: 'Solar Solutions',
  description: 'End-to-end solar panel installation across Victoria for homes and businesses. Tier 1 panels, CEC-accredited installers, 25-year warranty. Free quote today.',
  heroStats: [
    { value: '25yr', label: 'Warranty' },
    { value: '1K+', label: 'Installations' },
    { value: 'Tier 1', label: 'Panels' },
  ],
  detailedDescription: [
    'Whether you\'re a homeowner looking to cut your power bills or a business trying to control operating costs, solar panel installation starts the same way: a system designed around how you actually use electricity, built with components that last, and installed by people who are properly accredited to do it. VRJ Electrics has completed 1,000+ solar panel installations across Victoria — from single-storey homes to large commercial roofs — using only Tier 1 panels and inverters, backed by a 25-year warranty. If you already know which you need, jump straight to the Residential Solar or Commercial Solar Power pages for the detail.',
  ],
  areasWeServe: {
    title: 'Areas Served:',
    description: 'We provide end-to-end solar panel installation across Victoria for homes and businesses, including the following locations:',
    locations: [
      { name: 'Solar Panel Installation Melbourne', url: '/solar-panel-installation-melbourne' },
      { name: 'Solar Panel Installation Geelong', url: '/solar-panel-installation-geelong' },
      { name: 'Solar Panel Installation Ballarat', url: '/solar-panel-installation-ballarat' },
      { name: 'Solar Panel Installation Bendigo', url: '/solar-panel-installation-bendigo' },
      { name: 'Solar Panel Installation Sunbury', url: '/solar-panel-installation-sunbury' },
      { name: 'Solar Panel Installation Melton', url: '/solar-panel-installation-melton' },
      { name: 'Solar Panel Installation Craigieburn', url: '/solar-panel-installation-craigieburn' },
      { name: 'Solar Panel Installation Frankston', url: '/solar-panel-installation-frankston' },
    ],
  },
  benefits: [
    {
      title: 'CEC-accredited installers on every job, no subcontracted crews',
      description: 'CEC-accredited installers on every job, no subcontracted crews',
    },
    {
      title: 'Tier 1 panels only — LG, SunPower, JA Solar, paired with Fronius, SolarEdge or Enphase inverters',
      description: 'Tier 1 panels only — LG, SunPower, JA Solar, paired with Fronius, SolarEdge or Enphase inverters',
    },
    {
      title: 'Custom system design based on your roof, usage and budget, not a one-size template',
      description: 'Custom system design based on your roof, usage and budget, not a one-size template',
    },
    {
      title: 'We handle all rebate paperwork and grid connection applications',
      description: 'We handle all rebate paperwork and grid connection applications',
    },
    {
      title: '25-year warranty on panels, inverters and workmanship',
      description: '25-year warranty on panels, inverters and workmanship',
    },
    {
      title: 'Most residential jobs completed in a single day',
      description: 'Most residential jobs completed in a single day',
    },
  ],
  process: [
    {
      title: 'Free consultation — we review your energy usage and site',
      description: 'Free consultation — we review your energy usage and site',
    },
    {
      title: 'Custom system design sized to your actual needs',
      description: 'Custom system design sized to your actual needs',
    },
    {
      title: 'We process government rebates and STCs on your behalf',
      description: 'We process government rebates and STCs on your behalf',
    },
    {
      title: 'Professional installation, CEC-accredited team',
      description: 'Professional installation, CEC-accredited team',
    },
    {
      title: 'Grid connection coordinated with your network distributor',
      description: 'Grid connection coordinated with your network distributor',
    },
    {
      title: 'Ongoing support, 7 days a week',
      description: 'Ongoing support, 7 days a week',
    },
  ],
  rebates: {
    title: 'Government Rebates & Incentives',
    items: [
      'Eligible Victorian households can access the Solar Homes Program PV rebate — up to $1,400, with a combined household income cap of $150,000 — plus Small-scale Technology Certificates (STCs), which typically reduce an average system\'s cost by $1,500–$3,500 depending on size. Commercial systems are supported mainly through STCs (systems under 100kW) and LGCs for larger arrays. The interest-free battery loan scheme has closed.',
    ],
    note: 'Rebates are subject to eligibility criteria and change over time. Contact us for up-to-date information.',
  },
  faqs: [
    {
      question: 'How do I know if I need residential or commercial solar?',
      answer: 'If metered as a household, it\'s residential; if on a business/commercial account, or the site is a warehouse, office or retail premises, it\'s commercial — confirmed in the free consult.',
    },
    {
      question: 'How long from quote to power?',
      answer: 'Typically around 2 weeks from signed quote to a switched-on system.',
    },
    {
      question: 'Do you install outside your listed locations?',
      answer: 'Yes — greater Victoria is serviced on request.',
    },
  ],
  heroImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
}

export default function Page() {
  return <ServicePageTemplate {...serviceData} />
}
