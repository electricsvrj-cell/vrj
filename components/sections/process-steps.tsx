import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Free Consultation',
    description: 'Get in touch for a free, no-obligation consultation. We\'ll discuss your energy needs, assess your property, and answer all your questions.',
  },
  {
    number: '02',
    title: 'Custom System Design',
    description: 'Our engineers design a solar system tailored to your home, energy usage, and budget. We provide detailed specifications and expected savings.',
  },
  {
    number: '03',
    title: 'Government Rebate Processing',
    description: 'We handle all the paperwork for government rebates and STCs, ensuring you receive the maximum available incentives.',
  },
  {
    number: '04',
    title: 'Professional Installation',
    description: 'Our CEC-accredited installers complete your installation in just 1-2 days, with minimal disruption to your daily life.',
  },
  {
    number: '05',
    title: 'Grid Connection',
    description: 'We coordinate with your energy provider to connect your system to the grid and set up your feed-in tariff.',
  },
  {
    number: '06',
    title: 'Ongoing Support',
    description: 'Enjoy peace of mind with our comprehensive warranty and dedicated support team. We\'re here for you long after installation.',
  },
]

export function ProcessSteps() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-premium">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Our Process
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            From Quote to Power in 6 Simple Steps
          </h2>
          <p className="text-lg text-muted-foreground">
            We&apos;ve streamlined the solar installation process to make it as easy as possible 
            for you. Here&apos;s how we work.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative p-8 rounded-2xl bg-card border border-border card-premium"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-8 px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-bold">
                Step {step.number}
              </div>
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="h-14 px-8 text-base font-semibold btn-premium bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/contact">
              Start Your Solar Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
