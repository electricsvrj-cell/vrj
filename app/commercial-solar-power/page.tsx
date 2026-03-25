import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'
import { Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Solar Installation Australia | Business Solar Systems',
  description: 'Large-scale commercial solar installation across Australia. Reduce business operating costs by up to 70%. Tax benefits, government incentives. CEC-accredited commercial installers. Get your free quote.',
  keywords: [
    'commercial solar installation',
    'business solar panels',
    'commercial solar system',
    'solar for business',
    'industrial solar',
    'warehouse solar',
    'office solar panels',
    'commercial solar cost',
  ],
  openGraph: {
    title: 'Commercial Solar Installation Australia | Business Solar Systems',
    description: 'Reduce your business operating costs dramatically with large-scale commercial solar solutions.',
    url: 'https://vrjelectrics.com.au/commercial-solar-power',
  },
}

const serviceData = {
  icon: Building2,
  title: 'Commercial Solar Power',
  subtitle: 'Commercial Solar',
  description: 'Dramatically reduce your business operating costs with a large-scale commercial solar installation. Join thousands of Australian businesses already benefiting from clean, affordable solar power.',
  heroStats: [
    { value: '70%', label: 'Cost Reduction' },
    { value: '500+', label: 'Businesses Served' },
    { value: '3-4yr', label: 'Typical ROI' },
  ],
  detailedDescription: [
    'Commercial solar is one of the smartest investments a business can make in Australia. With generous tax incentives, declining installation costs, and rising electricity prices, commercial solar systems typically achieve payback in 3-4 years, then provide decades of virtually free electricity.',
    'Our commercial division specialises in designing and installing systems from 30kW to multi-megawatt scale. We work with warehouses, factories, office buildings, shopping centres, schools, and agricultural operations across Australia.',
    'Beyond direct savings, commercial solar demonstrates your commitment to sustainability, increasingly important for customers, employees, and stakeholders. We handle the entire process from feasibility study to grid connection, minimising disruption to your operations.',
  ],
  benefits: [
    {
      title: 'Massive Cost Savings',
      description: 'Reduce electricity costs by 50-70%. Large commercial systems can save $50,000+ per year.',
    },
    {
      title: 'Instant Tax Benefits',
      description: 'Claim instant asset write-off on your solar investment under current tax legislation.',
    },
    {
      title: 'ESG Compliance',
      description: 'Meet sustainability requirements and demonstrate environmental leadership to stakeholders.',
    },
    {
      title: 'Expert Project Management',
      description: 'Dedicated project managers ensure minimal disruption to your business operations.',
    },
    {
      title: 'Scalable Solutions',
      description: 'Systems designed to grow with your business. Easy expansion as your energy needs increase.',
    },
    {
      title: 'Comprehensive Warranties',
      description: '25-year panel warranties and ongoing maintenance plans to protect your investment.',
    },
  ],
  process: [
    {
      title: 'Feasibility Study',
      description: 'We analyse your energy usage, roof space, and financial goals to assess viability.',
    },
    {
      title: 'Custom Engineering',
      description: 'Our engineers design an optimised system with detailed financial projections.',
    },
    {
      title: 'Professional Installation',
      description: 'Experienced commercial teams install efficiently with minimal business disruption.',
    },
    {
      title: 'Monitoring & Support',
      description: 'Ongoing monitoring and maintenance ensures optimal performance for decades.',
    },
  ],
  rebates: {
    title: 'Commercial Solar Incentives',
    items: [
      'Small-scale Technology Certificates (STCs): Significant upfront discount',
      'Large-scale Generation Certificates (LGCs) for 100kW+ systems',
      'Instant Asset Write-Off: Immediate tax deduction',
      'State-based commercial incentives in VIC, NSW, QLD',
      'Power Purchase Agreements (PPAs) available for cash-flow flexibility',
    ],
    note: 'Our commercial team will create a detailed financial analysis showing all available incentives and projected returns.',
  },
  faqs: [
    {
      question: 'How much does commercial solar cost?',
      answer: 'Commercial systems typically cost $800-$1,200 per kW installed. A 100kW system runs $80,000-$120,000 before incentives. With STCs and tax benefits, effective costs are significantly lower.',
    },
    {
      question: 'What ROI can I expect?',
      answer: 'Most commercial solar systems achieve 20-30% annual ROI with payback periods of 3-5 years. After payback, you enjoy essentially free electricity for 20+ years.',
    },
    {
      question: 'Will installation disrupt my business?',
      answer: 'We minimise disruption by working weekends, after hours, or in stages. Most commercial installations take 1-3 weeks depending on system size.',
    },
    {
      question: 'Can I install solar if I lease my building?',
      answer: 'Yes! We offer solutions for tenants including negotiating with landlords, transferable installations, or Power Purchase Agreements where we own and maintain the system.',
    },
    {
      question: 'How do I claim the tax benefits?',
      answer: 'Commercial solar qualifies for instant asset write-off and depreciation benefits. Your accountant can claim these in your business tax return. We provide all required documentation.',
    },
  ],
}

export default function CommercialSolarPowerPage() {
  return <ServicePageTemplate {...serviceData} />
}
