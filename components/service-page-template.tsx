import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { LeadForm } from '@/components/lead-form'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ServiceHeroSlider } from '@/components/service-hero-slider'
import { ArrowRight, Check, Phone, type LucideIcon } from 'lucide-react'

interface ServiceBenefit {
  title: string
  description: string
}

interface ProcessStep {
  title: string
  description: string
}

interface FAQ {
  question: string
  answer: string
}

interface ServicePageProps {
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  heroStats: {
    value: string
    label: string
  }[]
  detailedDescription: string[]
  benefits: ServiceBenefit[]
  process: ProcessStep[]
  rebates: {
    title: string
    items: string[]
    note: string
  }
  faqs: FAQ[]
  heroImage?: string | string[]
}

export function ServicePageTemplate({
  icon: Icon,
  title,
  subtitle,
  description,
  heroStats,
  detailedDescription,
  benefits,
  process,
  rebates,
  faqs,
  heroImage,
}: ServicePageProps) {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-background via-secondary/30 to-background overflow-hidden">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          
          <div className="container-premium relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{subtitle}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight tracking-tight mb-6 text-balance">
                  {title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                  {description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button
                    asChild
                    size="lg"
                    className="h-14 px-8 text-base font-semibold btn-premium bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Link href="/contact">
                      Get Free Quote
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-14 px-8 text-base font-semibold border-2"
                  >
                    <a href="tel:0479074555">
                      <Phone className="mr-2 w-5 h-5" />
                      0479074555
                    </a>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-8">
                  {heroStats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-3xl font-bold text-primary">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                {Array.isArray(heroImage) ? (
                  <ServiceHeroSlider images={heroImage} title={title} />
                ) : heroImage ? (
                  <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl transition-all hover:scale-[1.02] duration-500 border border-border bg-muted">
                    <img
                      src={heroImage}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                  </div>
                ) : (
                  <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-border bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 via-primary/10 to-background">
                      <div className="text-center text-foreground p-8">
                        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                          <Icon className="w-12 h-12 text-primary" />
                        </div>
                        <p className="text-2xl font-serif font-bold">{subtitle}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Service Section */}
        <section className="section-padding bg-background">
          <div className="container-premium">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8 text-center">
                About Our {subtitle} Service
              </h2>
              <div className="prose prose-lg max-w-none">
                {detailedDescription.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-premium">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
                Benefits
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                Why Choose Our {subtitle}?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="p-8 rounded-2xl bg-card border border-border card-premium"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-secondary/50">
          <div className="container-premium">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
                Our Process
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                How It Works
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div
                  key={step.title}
                  className="relative p-6 rounded-2xl bg-card border border-border shadow-sm group hover:border-primary/30 transition-all"
                >
                  <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Government Rebates Section */}
        <section className="section-padding bg-background">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
                  Government Incentives
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                  {rebates.title}
                </h2>
                <div className="space-y-4 mb-8">
                  {rebates.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic">{rebates.note}</p>
              </div>
              <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Maximise Your Savings
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our team handles all the paperwork to ensure you receive every available 
                  rebate and incentive. We stay up-to-date with the latest government programs 
                  so you don&apos;t miss out.
                </p>
                <Button
                  asChild
                  className="w-full h-12 font-semibold btn-premium bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link href="/contact">
                    Check Your Eligibility
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
                  FAQs
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                  Common Questions About {subtitle}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Find answers to the most common questions. If you need more information, 
                  our team is always happy to help.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 px-6 font-semibold"
                >
                  <Link href="/contact">
                    Ask a Question
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-border rounded-xl px-6 data-[state=open]:bg-card data-[state=open]:shadow-md transition-all"
                  >
                    <AccordionTrigger className="text-left text-foreground hover:text-primary py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Lead Form Section */}
        <section className="section-padding bg-background">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
                  Get Started
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                  Request Your Free {subtitle} Quote
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Take the first step towards a more sustainable future. Our experts will 
                  design the perfect solution for your needs.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl bg-secondary/50 border border-border text-center">
                    <p className="text-2xl font-bold text-primary">24hr</p>
                    <p className="text-sm text-muted-foreground">Response Time</p>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/50 border border-border text-center">
                    <p className="text-2xl font-bold text-primary">Free</p>
                    <p className="text-sm text-muted-foreground">No Obligation</p>
                  </div>
                </div>
              </div>
              <LeadForm variant="default" title="Get Your Free Quote" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
