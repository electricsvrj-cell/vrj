'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { LeadForm } from '@/components/lead-form'
import {
  ArrowRight,
  Check,
  FileText,
  Battery,
  ShieldCheck,
  Smartphone,
  Zap,
  Layout
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { heroAsset, sbrAsset, sbpAsset } from '@/components/sungrow-assets'
import { LogoMarquee } from '@/components/sections/logo-marquee'

export default function SungrowPage() {
  const models = [
    {
      name: 'SUNGROW SBR HV BATTERY',
      image: sbrAsset,
      datasheet: '/datasheets/sungrow.pdf'
    },

  ]

  const keyFeatures = [
    {
      title: 'Hybrid-Ready Compatibility',
      description: 'Seamlessly integrates with hybrid inverter systems',
      icon: Zap
    },
    {
      title: 'Long Battery Life',
      description: '6000+ cycles, ideal for long-term investment.',
      icon: ShieldCheck
    },
    {
      title: 'Smart Monitoring',
      description: 'Real-time performance tracking via mobile apps.',
      icon: Smartphone
    },
    {
      title: 'Portable & Compact Design',
      description: 'Space-saving solution with simplified installation',
      icon: Layout
    },
    {
      title: 'Grid Independence',
      description: 'Reduce up to 80% of your grid power usage with daily cycling.',
      icon: Zap
    },
    {
      title: 'Emergency Backup',
      description: 'Stay powered during emergencies such as bushfires or blackouts.',
      icon: ShieldCheck
    },
    {
      title: 'Future-Proof Setup',
      description: 'Future-proof your solar setup with smart, expandable energy storage.',
      icon: Battery
    },
    {
      title: 'Certified Safety',
      description: 'Meet Australian safety standards with UL-certified battery construction.',
      icon: Check
    }
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
                  <Battery className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Premium Storage Solutions</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight tracking-tight mb-6 text-balance">
                  Sungrow <span className="text-primary">Solar Batteries</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                  Sungrow Batteries Offer Powerful, Compact Energy Storage Using Safe And Durable LiFePO₄ Chemistry. AAA Energy Installs Sungrow Systems With The Help Of Nationally Accredited And Sungrow-Certified Professionals.
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
                    src={heroAsset}
                    alt="Sungrow Battery System"
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
                Advanced Features
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto" />
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

        {/* Technical Models Section */}
        <section className="section-padding bg-secondary/10">
          <div className="container-premium">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#4a773c] mb-4">
                Technical Models
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto opacity-30" />
            </div>

            <div className="flex flex-wrap justify-center gap-12 max-w-4xl mx-auto">
              {models.map((model) => (
                <div
                  key={model.name}
                  className="bg-white rounded-[2rem] border-2 border-[#4a773c] overflow-hidden shadow-xl hover:shadow-2xl transition-all group"
                >
                  {/* Header */}
                  <div className="bg-[#4a773c] py-4 px-4 text-center">
                    <h3 className="text-xl font-bold text-white tracking-widest">
                      {model.name}
                    </h3>
                  </div>

                  {/* Image */}
                  <div className="p-12 flex justify-center items-center h-96 relative">
                    <Image
                      src={model.image}
                      alt={`Sungrow ${model.name}`}
                      width={240}
                      height={240}
                      className="object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Datasheet Button */}
                  <div className="p-8 pt-0 flex justify-center">
                    <Button
                      asChild
                      variant="outline"
                      className="h-14 px-8 rounded-full border-2 border-[#4a773c] text-[#4a773c] bg-white hover:bg-[#4a773c] hover:text-white font-bold transition-all shadow-md active:scale-95"
                    >
                      <a href={model.datasheet} target="_blank" rel="noopener noreferrer">
                        <FileText className="mr-2 w-5 h-5" />
                        DATASHEET
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <LogoMarquee />

        {/* Lead Form Section */}
        <section className="section-padding bg-background">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
                  Expert Advice
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                  Ready for a Sungrow Solution?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Get a personalized storage plan designed by our CEC-accredited specialists
                  to maximize your solar savings.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl bg-secondary/50 border border-border text-center">
                    <p className="text-2xl font-bold text-primary">Zero</p>
                    <p className="text-sm text-muted-foreground">Upfront Cost</p>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/50 border border-border text-center">
                    <p className="text-2xl font-bold text-primary">10yr</p>
                    <p className="text-sm text-muted-foreground">Local Warranty</p>
                  </div>
                </div>
              </div>
              <LeadForm variant="default" title="Get Your Sungrow Quote" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
