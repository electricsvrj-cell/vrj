import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'
import { Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Residential Solar Panel Installation Victoria | Home Solar Systems',
  description: 'Premium residential solar panel installation across Victoria. Custom home solar systems, 25-year warranty, government rebates. Save up to $2,000/year on electricity. Get your free quote today.',
  keywords: [
    'residential solar panels',
    'home solar system',
    'solar installation Australia',
    'rooftop solar',
    'house solar panels',
    'solar power home',
    'solar panels cost',
    'best solar panels Australia',
  ],
  openGraph: {
    title: 'Residential Solar Panel Installation Australia',
    description: 'Custom home solar systems designed for Australian families. Save thousands on electricity with premium solar.',
    url: 'https://vrjelectrics.com.au/residential-solar-power',
  },
}

const serviceData = {
  icon: Home,
  title: 'Residential Solar Power',
  subtitle: 'Home Solar',
  description: 'Transform your home with a premium solar power system designed specifically for Australian families. Enjoy dramatically lower electricity bills and contribute to a sustainable future.',
  heroStats: [
    { value: '$2K', label: 'Yearly Savings' },
    { value: '25yr', label: 'Panel Warranty' },
    { value: '15K+', label: 'Homes Powered' },
  ],
  detailedDescription: [
    'Going solar is one of the best investments you can make for your home. With Australia\'s abundant sunshine and generous government incentives, residential solar power systems typically pay for themselves in just 3-5 years, then provide decades of free electricity.',
    'We design each system to match your specific energy needs, roof configuration, and budget. Using only Tier 1 solar panels from manufacturers like LG, SunPower, and JA Solar, combined with premium inverters from Fronius, SolarEdge, or Enphase, we ensure your system performs reliably for 25+ years.',
    'Our CEC-accredited installers treat your home with respect, completing most installations in just one day with minimal disruption. We handle all paperwork including grid connection applications and rebate processing, making your transition to solar completely hassle-free.',
  ],
  benefits: [
    {
      title: 'Slash Your Bills',
      description: 'Most families save $1,500-$2,500 per year on electricity. Your savings grow as power prices increase.',
    },
    {
      title: 'Increase Home Value',
      description: 'Solar installations can increase your property value by up to 4%, making it a smart investment.',
    },
    {
      title: 'Premium Products Only',
      description: 'We only install Tier 1 panels and inverters with proven track records and strong warranties.',
    },
    {
      title: 'Custom System Design',
      description: 'Every home is different. We design your system to maximise production based on your roof and usage.',
    },
    {
      title: '25-Year Warranty',
      description: 'Industry-leading warranties on panels, inverters, and our workmanship for complete peace of mind.',
    },
    {
      title: 'Hassle-Free Process',
      description: 'We handle everything from permits to grid connection. You just enjoy the savings.',
    },
  ],
  process: [
    {
      title: 'Free Consultation',
      description: 'We assess your energy needs, review your bills, and discuss your goals for going solar.',
    },
    {
      title: 'Custom Design',
      description: 'Our engineers design the optimal system for your roof, orientation, and energy usage.',
    },
    {
      title: 'Installation Day',
      description: 'Our CEC-accredited team installs your system in typically just one day.',
    },
    {
      title: 'Start Saving',
      description: 'Once connected to the grid, you start saving immediately on your electricity bills.',
    },
  ],
  rebates: {
    title: 'Government Rebates for Home Solar',
    items: [
      'Small-scale Technology Certificates (STCs): $2,500-$4,000 off',
      'Victorian Solar Homes Program: Interest-free loans available',
      'NSW Energy Savings Scheme: Additional rebates',
      'Queensland interest-free loans up to $10,000',
      'Feed-in tariffs: Get paid for excess power (6-12c/kWh)',
    ],
    note: 'Rebates are automatically deducted from your quote. We ensure you receive all available incentives.',
  },
  faqs: [
    {
      question: 'How much does a home solar system cost?',
      answer: 'A quality 6.6kW system costs $4,500-$7,000 after rebates, while a 10kW system runs $7,500-$12,000. Prices include premium components, installation, and all paperwork.',
    },
    {
      question: 'How much will I save with solar?',
      answer: 'Most Australian households save $1,500-$2,500 per year. Your exact savings depend on system size, energy usage, and your electricity rates. We provide detailed savings estimates in your quote.',
    },
    {
      question: 'What size solar system do I need?',
      answer: 'For an average home using 20-30kWh per day, a 6.6kW system is ideal. Larger families or homes with pools may benefit from 10kW+. We\'ll recommend the right size based on your bills.',
    },
    {
      question: 'Do solar panels work on cloudy days?',
      answer: 'Yes! Solar panels still produce energy on cloudy days, just at reduced capacity. Modern panels are designed to perform well in varied Australian conditions.',
    },
    {
      question: 'How long does installation take?',
      answer: 'Most residential installations are completed in a single day. The entire process from quote acceptance to generating power takes 2-4 weeks including paperwork.',
    },
  ],
}

export default function ResidentialSolarPowerPage() {
  return <ServicePageTemplate {...serviceData} />
}
