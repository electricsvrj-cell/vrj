import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'
import { Thermometer } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Heat Pump Installation Australia | Hot Water & HVAC Systems',
  description: 'Professional heat pump installation across Australia. Energy-efficient hot water and heating/cooling systems that work perfectly with solar. Up to 75% energy savings. Get your free quote today.',
  keywords: [
    'heat pump installation',
    'heat pump hot water',
    'heat pump Australia',
    'hot water system',
    'energy efficient heating',
    'split system installation',
    'heat pump cost',
    'solar hot water alternative',
  ],
  openGraph: {
    title: 'Heat Pump Installation Australia | Energy-Efficient Solutions',
    description: 'Reduce your hot water and heating costs by up to 75% with energy-efficient heat pump systems.',
    url: 'https://vrjelectrics.com.au/heat-pump-installation',
  },
}

const serviceData = {
  icon: Thermometer,
  title: 'Heat Pump Installation',
  subtitle: 'Heat Pumps',
  description: 'Upgrade to a highly efficient heat pump system for your hot water and heating needs. Heat pumps use up to 75% less energy than traditional systems and pair perfectly with solar power.',
  heroStats: [
    { value: '75%', label: 'Energy Savings' },
    { value: '$800', label: 'Yearly Savings' },
    { value: '15yr', label: 'Lifespan' },
  ],
  detailedDescription: [
    'Heat pumps are the most energy-efficient way to heat water and your home. They work like a refrigerator in reverse, extracting heat from the air to provide hot water or climate control. This means they use just a fraction of the energy of traditional electric or gas systems.',
    'When paired with solar panels, heat pumps can provide virtually free hot water and heating. By running your heat pump during solar production hours, you use excess solar energy that would otherwise be exported to the grid at low feed-in rates.',
    'We install premium heat pump systems from leading brands including Sanden, Reclaim, Stiebel Eltron, and iStore. Our installations are designed for Australian conditions and backed by comprehensive warranties.',
  ],
  benefits: [
    {
      title: '75% Less Energy',
      description: 'Heat pumps use up to 75% less energy than traditional electric hot water systems.',
    },
    {
      title: 'Works With Solar',
      description: 'Perfect companion to solar panels. Run during the day using free solar electricity.',
    },
    {
      title: 'Year-Round Performance',
      description: 'Modern heat pumps work efficiently even in cold weather down to -10°C.',
    },
    {
      title: 'Government Rebates',
      description: 'Eligible for STCs which can reduce the purchase price by $1,000 or more.',
    },
    {
      title: 'Lower Running Costs',
      description: 'Save $400-$800 per year compared to electric or gas hot water systems.',
    },
    {
      title: 'Reduce Gas Bills',
      description: 'Eliminate gas connection fees by replacing gas hot water with electric heat pump.',
    },
  ],
  process: [
    {
      title: 'Assessment',
      description: 'We evaluate your current system, hot water needs, and available installation locations.',
    },
    {
      title: 'Recommendation',
      description: 'Based on your needs, we recommend the ideal heat pump model and capacity.',
    },
    {
      title: 'Installation',
      description: 'Professional installation by licensed plumbers, typically completed in half a day.',
    },
    {
      title: 'Commissioning',
      description: 'We test the system, set optimal timers, and show you how to maximise efficiency.',
    },
  ],
  rebates: {
    title: 'Heat Pump Rebates Available',
    items: [
      'Small-scale Technology Certificates (STCs): $800-$1,000 off',
      'Victorian Hot Water Rebate: Up to $1,000 for eligible households',
      'NSW Energy Savings Scheme: Additional incentives available',
      'South Australia hot water rebates for heat pumps',
      'Some energy retailers offer additional incentives',
    ],
    note: 'Heat pump rebates can significantly reduce upfront costs. We apply all available incentives to your quote.',
  },
  faqs: [
    {
      question: 'How much does a heat pump hot water system cost?',
      answer: 'Heat pump hot water systems typically cost $2,500-$4,500 installed after rebates. Premium models with larger capacity may cost more. The energy savings quickly offset the higher upfront cost.',
    },
    {
      question: 'How do heat pumps work?',
      answer: 'Heat pumps extract heat from the surrounding air and use it to heat water. They work like an air conditioner in reverse. Because they move heat rather than create it, they\'re extremely efficient.',
    },
    {
      question: 'Are heat pumps noisy?',
      answer: 'Modern heat pumps are very quiet, operating at around 40-50 decibels - similar to a quiet conversation. We position units to minimise any noise impact on living areas.',
    },
    {
      question: 'Will a heat pump work in cold weather?',
      answer: 'Yes! Quality heat pumps work efficiently in temperatures down to -10°C. Australian climates are ideal for heat pump operation year-round.',
    },
    {
      question: 'Can I connect a heat pump to my solar system?',
      answer: 'Absolutely! Heat pumps are perfect companions for solar. We can set timers so the heat pump runs during peak solar production, using your free solar electricity.',
    },
  ],
  heroImage: '/heat-pump-hero.png',
}

export default function HeatPumpInstallationPage() {
  return <ServicePageTemplate {...serviceData} />
}
