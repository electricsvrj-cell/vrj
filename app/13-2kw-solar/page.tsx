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
  Building,
  Maximize
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { LogoMarquee } from '@/components/sections/logo-marquee'

export default function Solar132kWPage() {
  const keyFeatures = [
    {
      title: 'ROOF SPACE',
      description: 'A 13.2kW system requires approximately 68 to 76 square meters of roof space.',
      icon: Maximize
    },
    {
      title: 'ENERGY CONSUMPTION',
      description: 'Assess your household’s or business’s energy usage to ensure a 13.2kW system aligns with your requirements.',
      icon: Zap
    },
    {
      title: 'BATTERY COMPATIBILITY',
      description: 'Pairing your system with an appropriately sized battery can maximize self-consumption and savings.',
      icon: Building
    },
    {
      title: 'Ultimate Reliability',
      description: 'Commercial-grade components and SAA-accredited installation for peace of mind in any climate.',
      icon: ShieldCheck
    }
  ]

  const specs = [
    { label: 'System Size', value: '13.2kW' },
    { label: 'Estimated Daily Production', value: '53kWh' },
    { label: 'Average Annual Savings', value: '$3,200 - $4,200+' },
    { label: 'Typical Number of Panels', value: '34 - 36 Panels' },
    { label: 'Inverter Capacity', value: '10kW+' },
    { label: 'Ideal For', value: 'Large Estates & Small Businesses' },
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
                  <span className="text-sm font-medium text-foreground">Flagship Solar Packages</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight tracking-tight mb-6 text-balance">
                  13.2kW Solar <span className="text-primary">and Battery System</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                  Unlock Maximum Energy Independence With AAA Energy’s 13.2kW Solar And Battery System Ideal For Large Homes Or Businesses. Generating Approximately 52kWh Daily, EVs, And Pools. Store Excess Energy For Night Or Outages. Installed By SAA-Accredited Experts Using Premium Components. Claim Rebates And Enjoy Lasting Savings. Contact AAA Energy For A Free Consultation Today.
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
                    src="/solar-hero-13-2kw.png"
                    alt="13.2kW High-Capacity Solar System"
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
                13.2kW Solar and Battery System: Maximum Energy Freedom for Large Homes
              </h2>
              <div className="space-y-6 mb-10">
                <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
                  Harness Australia’s abundant sunshine with AAA Energy’s premium 13.2kW solar and battery solution. Engineered for large households or small businesses, it delivers exceptional energy independence and bill savings from day one.
                </p>
                <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
                  This powerful system generates approximately 53kWh of clean electricity daily—enough to run multiple air conditioners, pools, electric vehicles, and high-consumption appliances simultaneously. By significantly reducing grid reliance, you’ll slash electricity bills year-round.
                </p>
                <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed font-medium text-foreground/80">
                  AAA Energy ensures peak performance with SAA-accredited installation and premium components built for Australia’s harsh climate. Our Australian-owned team designs every system for optimal efficiency, helping you reduce carbon emissions while achieving true energy autonomy. Experience seamless solar transitions with expert guidance on rebates and tailored solutions.
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
                  Our flagship system uses large-format, high-efficiency panels and industrial-grade
                  inverters to manage sustained high power output throughout the day.
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
                <LeadForm variant="default" title="Request 13.2kW Quote" />
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
                The Pinnacle of Energy Independence
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Secure your energy future with the most powerful residential system
                available. Expertly installed by the VRJ Electrics engineering team.
              </p>
              <Button
                asChild
                size="lg"
                className="h-16 px-12 text-lg font-bold btn-premium bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
              >
                <Link href="/contact">
                  Request Flagship Quote
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
