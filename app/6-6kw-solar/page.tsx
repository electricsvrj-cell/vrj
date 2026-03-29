'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { LeadForm } from '@/components/lead-form'
import {
  ArrowRight,
  Check,
  Zap,
  ShieldCheck,
  Sun,
  Home,
  Layout,
  TrendingDown
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { LogoMarquee } from '@/components/sections/logo-marquee'

export default function Solar66kWPage() {
  const keyFeatures = [
    {
      title: 'ROOF SPACE',
      description: 'A 6.6kW system requires approximately 34 to 38 square meters of roof space.',
      icon: Zap
    },
    {
      title: 'ENERGY CONSUMPTION',
      description: 'Assess your household’s energy usage to ensure a 6.6kW system aligns with your requirements.',
      icon: TrendingDown
    },
    {
      title: 'BATTERY COMPATIBILITY',
      description: 'Pairing your system with an appropriately sized battery can maximize self-consumption and savings.',
      icon: Layout
    },
    {
      title: 'Future-Ready Design',
      description: 'Fully compatible with leading solar battery storage solutions for total energy independence.',
      icon: ShieldCheck
    }
  ]

  const specs = [
    { label: 'System Size', value: '6.6kW' },
    { label: 'Estimated Daily Production', value: '26.4kWh' },
    { label: 'Average Annual Savings', value: '$1,200 - $1,600' },
    { label: 'Typical Number of Panels', value: '18 - 20 Panels' },
    { label: 'Inverter Capacity', value: '5kW (Single Phase)' },
    { label: 'Roof Space Required', value: '34 - 38 sqm' },
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#f9fafb] overflow-hidden">
          <div className="container-premium relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
                  <Sun className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Premium Solar Packages</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight tracking-tight mb-6 text-balance">
                  6.6kW <span className="text-primary">Solar System and Battery System</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                  Maximise Savings With vrjlectrics 6.6kW Solar And Battery System Ideal For Australian Homes. Generating Approximately 24 Kilowatt-Hours (KWh) Of Electricity Per Day, Reduce Grid Reliance, And Cut Power Bills. Enjoy Backup During Outages And Peak Times. Installed By SAA-Accredited Experts Using Premium Components. Claim Rebates And Boost Energy Independence. Contact VRJ Electrics For An Obligation-Free Quote Today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="h-14 px-8 text-base font-semibold btn-premium bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Link href="/contact">
                      Get Expert Quote
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative animate-scale-in">
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                  <Image
                    src="/solar-hero-6-6kw.png"
                    alt="6.6kW Solar System Installation"
                    fill
                    className="object-cover"
                    priority
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="section-padding bg-background">
          <div className="container-premium">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
                Energy Production and Savings of a 6.6kW Solar & Battery System

              </h2>
              <div className="space-y-6 mb-10">
                <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
                  Maximise your energy savings with a professionally installed 6.6kW solar and battery system from VRJ Electrics. Our smart systems are designed to deliver reliable power, reduce your energy bills, and give you more control over your household consumption.
                </p>
                <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
                  We work with a large network of SAA-accredited installers to provide quality solar solutions across Australia. With VRJ Electrics, you benefit from expert installation, clean energy production, and real long-term savings backed by trusted technology and local support.
                </p>
                <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
                  We tailor every system to your home’s energy needs, helping you get the most out of your solar panels and battery storage. Whether you want to cut bills or gain more independence from the grid, a 6.6kW system is a smart starting point.
                </p>
                <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed font-medium text-foreground/80">
                  Choose VRJ Electrics to join thousands of Australian families already powering their homes with cleaner, smarter, and more affordable energy.
                </p>
              </div>
              <div className="w-24 h-1 bg-primary mx-auto mt-6" />
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {keyFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-6 p-8 rounded-2xl bg-secondary/20 hover:bg-secondary/30 transition-colors border border-border/50"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="section-padding bg-secondary/10">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                  Technical Specifications
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our 6.6kW systems are engineered using Tier-1 components specifically
                  selected for Australia's harsh climate and optimal performance.
                </p>
                <div className="space-y-4">
                  {specs.map((spec) => (
                    <div key={spec.label} className="flex justify-between py-3 border-b border-border/50">
                      <span className="font-medium text-muted-foreground">{spec.label}</span>
                      <span className="font-bold text-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-border">
                <LeadForm variant="default" title="Request 6.6kW Quote" />
              </div>
            </div>
          </div>
        </section>

        <LogoMarquee />

        {/* Closing CTA */}
        <section className="section-padding bg-background">
          <div className="container-premium">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-8">
                Ready to Join the Solar Revolution?
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Start your journey towards a cleaner, smarter, and more affordable energy
                future with VRJ Electrics' premium 6.6kW solar package.
              </p>
              <Button
                asChild
                size="lg"
                className="h-16 px-12 text-lg font-bold btn-premium bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
              >
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
