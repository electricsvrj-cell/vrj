import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/service-page-template'
import { Wind } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Aircon Service Australia | Installation & Maintenance',
  description: 'Professional air conditioning services across Australia. Installation, maintenance, and repairs for residential and commercial systems. Energy-efficient solutions for year-round comfort.',
  keywords: [
    'aircon service',
    'air conditioning installation',
    'AC maintenance',
    'split system installation',
    'ducted air conditioning',
    'AC repair Australia',
    'hvac services',
  ],
  openGraph: {
    title: 'Aircon Service Australia | Commercial & Residential',
    description: 'Expert air conditioning solutions to keep your home or business comfortable year-round.',
    url: 'https://vrjelectrics.com.au/aircon-service',
  },
}

const serviceData = {
  icon: Wind,
  title: 'Aircon Service',
  subtitle: 'Air Conditioning',
  description: 'Professional air conditioning solutions designed for the Australian climate. We provide expert installation, regular maintenance, and rapid repairs for all types of systems.',
  heroStats: [
    { value: '24/7', label: 'Support' },
    { value: '10 YR', label: 'Warranty' },
    { value: 'FREE', label: 'Quotes' },
  ],
  detailedDescription: [
    'Effective air conditioning is essential for comfort in the Australian climate. Whether you need a simple split system for a bedroom or a comprehensive ducted solution for an entire office building, our licensed HVAC technicians deliver premium results that balance performance with energy efficiency.',
    'We work with leading brands to ensure you get the most reliable technology available. Our team handles every aspect of the process, from initial load calculations and system design to professional installation and ongoing maintenance. We ensure your system is perfectly sized for your space to maximize comfort and minimize energy bills.',
    'Regular servicing is the key to a long-lasting and efficient air conditioner. Our maintenance programs identify potential issues before they become costly repairs, keep your air quality high, and ensure your system continues to run at its peak manufacturer-rated efficiency.',
  ],
  benefits: [
    {
      title: 'Year-Round Comfort',
      description: 'Precisely controlled cooling and heating to keep your environment perfect regardless of outside temperatures.',
    },
    {
      title: 'Energy Efficiency',
      description: 'Modern inverter technology and smart controls significantly reduce electricity consumption compared to older units.',
    },
    {
      title: 'Improved Air Quality',
      description: 'Advanced filtration systems remove dust, allergens, and pollutants for a healthier living or working environment.',
    },
    {
      title: 'Whisper-Quiet Operation',
      description: 'Premium systems designed to operate quietly, ensuring your comfort isn\'t interrupted by noise.',
    },
    {
      title: 'Smart Home Integration',
      description: 'Control your climate from anywhere via smartphone apps and integrate with your existing smart home setup.',
    },
    {
      title: 'Professional Service',
      description: 'All work performed by fully licensed and insured HVAC specialists with years of experience.',
    },
  ],
  process: [
    {
      title: 'Site Assessment',
      description: 'We evaluate your space, insulation, and cooling needs to recommend the ideal system size and type.',
    },
    {
      title: 'Custom Quote',
      description: 'Receive a transparent, all-inclusive quote covering equipment, installation, and any necessary upgrades.',
    },
    {
      title: 'Expert Installation',
      description: 'Our team completes the installation with precision, ensuring optimal placement for airflow and efficiency.',
    },
    {
      title: 'System Walkthrough',
      description: 'We show you how to operate your new system and set up any smart controls for maximum convenience.',
    },
  ],
  rebates: {
    title: 'HVAC Incentives',
    items: [
      'Energy-efficient system rebates for eligible homeowners',
      'Small business energy upgrade incentives',
      'Instant asset write-off for commercial installations',
      'Property value increase with premium ducted solutions',
      'Long-term energy bill reductions',
    ],
    note: 'Many Australians qualify for local government incentives when upgrading to energy-efficient air conditioning. We\'ll help you identify any savings available in your state.',
  },
  faqs: [
    {
      question: 'How often should I service my air conditioner?',
      answer: 'We recommend a professional service at least once a year, ideally before the start of summer or winter, to ensure peak performance and identify any potential issues early.',
    },
    {
      question: 'Which is better: Split System or Ducted?',
      answer: 'Split systems are ideal for cooling individual rooms or smaller areas and are more cost-effective to install. Ducted systems offer comprehensive, whole-home climate control but require a higher initial investment.',
    },
    {
      question: 'What size air conditioner do I need?',
      answer: 'This depends on room size, ceiling height, insulation quality, and number of windows. We perform exact calculations during our assessment to ensure you don\'t end up with an underpowered or oversized unit.',
    },
    {
      question: 'How long does installation take?',
      answer: 'A standard split system installation typically takes 3-5 hours. Ducted systems can take 1-2 days depending on the complexity of the property and required ductwork.',
    },
    {
      question: 'Do you offer emergency repairs?',
      answer: 'Yes, we provide priority repair services for critical heating and cooling failures to ensure you aren\'t left in discomfort during extreme weather.',
    },
  ],
}

export default function AirconServicePage() {
  return <ServicePageTemplate {...serviceData} />
}
