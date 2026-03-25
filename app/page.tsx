import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/sections/hero'
import { TrustBadges } from '@/components/sections/trust-badges'
import { ServicesOverview } from '@/components/sections/services-overview'
import { Benefits } from '@/components/sections/benefits'
import { WhyChooseUs } from '@/components/sections/why-choose-us'
import { ProcessSteps } from '@/components/sections/process-steps'
import { Savings } from '@/components/sections/savings'
import { CaseStudies } from '@/components/sections/case-studies'
import { BlogPreview } from '@/components/sections/blog-preview'
import { FAQ } from '@/components/sections/faq'
import { CTA } from '@/components/sections/cta'
import { LeadSection } from '@/components/sections/lead-section'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustBadges />
        <ServicesOverview />
        <Benefits />
        <WhyChooseUs />
        <ProcessSteps />
        <Savings />
        <CaseStudies />
        <BlogPreview />
        <FAQ />
        <CTA />
        <LeadSection />
      </main>
      <Footer />
    </>
  )
}
