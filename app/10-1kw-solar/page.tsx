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
  Battery,
  Layout,
  TrendingDown,
  Car
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { LogoMarquee } from '@/components/sections/logo-marquee'

export default function Solar101kWPage() {
  const keyFeatures = [
    {
      title: 'ROOF SPACE',
      description: 'A 10kW system requires sufficient roof space to accommodate the solar panels.',
      icon: Zap
    },
    {
      title: 'ENERGY CONSUMPTION',
      description: 'Assess your household’s or business’s energy usage to ensure a 10kW system aligns with your requirements.',
      icon: Car
    },
    {
      title: 'BATTERY COMPATIBILITY',
      description: 'Pairing your system with an appropriately sized battery can maximize self-consumption and savings.',
      icon: Battery
    },
    {
      title: 'Professional Grade Installation',
      description: 'SAA-accredited expertise with premium Tier-1 components built for the Australian climate.',
      icon: ShieldCheck
    }
  ]

  const specs = [
    { label: 'System Size', value: '10.1kW' },
    { label: 'Estimated Daily Production', value: '40 - 50kWh' },
    { label: 'Average Annual Savings', value: '$2,200 - $2,800' },
    { label: 'Typical Number of Panels', value: '26 - 28 Panels' },
    { label: 'Inverter Capacity', value: '8kW - 10kW' },
    { label: 'Ideal For', value: 'Large Families & Pool Homes' },
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
                  <span className="text-sm font-medium text-foreground">Advanced Solar Packages</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight tracking-tight mb-6 text-balance">
                  10.1kW <span className="text-primary">Solar & Battery System</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                  Maximise Energy Independence With VRJ Electrics 10.1kW Solar And Battery System—Ideal For Large Australian Homes. Generating Approximately 40-50kWh Daily, EVs, And Pools. Store Excess Energy For Night Use Or Outages. Installed By SAA-Accredited Experts Using Premium Components. Claim Rebates And Enjoy Long-Term Savings. Contact VRJ Electrics For A Free Quote Today.
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
                    src="/solar-hero-10-1kw.png"
                    alt="10.1kW Solar & Battery System"
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
                10.1kW Solar and Battery System: Power Your Home Day and Night

              </h2>
              <div className="space-y-6 mb-10">
                <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
                  Harness abundant Australian sunshine with VRJ Electrics premium 10.1kW solar and battery solution. Designed for large homes or small businesses, it delivers exceptional energy independence and savings.
                </p>
                <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
                  This powerful system generates approximately 40–50kWh of clean electricity daily enough to run high-consumption appliances, air conditioning, pools, or EVs while slashing your grid reliance. Paired with advanced battery storage, surplus solar energy is stored for use during peak tariff periods or grid outages, maximising bill savings and ensuring uninterrupted power.
                </p>
                <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed font-medium text-foreground/80">
                  VRJ Electrics guarantees reliability with SAA-accredited installation and premium components engineered for Australia’s climate. Our nationwide team tailors every system for optimal performance, helping you reduce carbon emissions and achieve true energy autonomy. Experience seamless transitions to solar with expert guidance on rebates and system design.
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
                  Engineered for maximum reliability and high-throughput energy management,
                  our 10.1kW systems are the gold standard for large residential properties.
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
                <LeadForm variant="default" title="Request 10.1kW Quote" />
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
                Achieve True Energy Autonomy
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Join the elite league of Australian homeowners who have achieved complete control
                over their energy costs with VRJ Electrics' 10.1kW solar and battery system.
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
