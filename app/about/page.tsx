import { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ArrowRight, Award, Users, Target, Heart, Shield, Leaf } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Australia\'s Premium Electrical & Solar Company',
  description: 'Learn about VRJ Electrics - over 15 years of experience, 1,000+ installations, and Australia\'s most trusted electrical and solar company. Meet our team and discover our commitment to quality.',
  openGraph: {
    title: 'About VRJ Electrics | Premium Electrical & Solar Installation',
    description: 'Over 15 years of excellence in electrical and solar installation across Australia. Learn about our mission, values, and team.',
    url: 'https://vrjelectrics.com.au/about',
  },
}

const stats = [
  { value: '6+', label: 'Years Experience' },
  { value: '1k+', label: 'Installations' },
  { value: '97%', label: 'Satisfaction' },
  { value: '98%', label: 'Recommend Us' },
]

const values = [
  {
    icon: Award,
    title: 'Quality Excellence',
    description: 'We never compromise on quality. From Tier 1 panels to expert installation, everything we do meets the highest standards.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Your satisfaction is our priority. We listen, advise honestly, and support you throughout your solar journey.',
  },
  {
    icon: Target,
    title: 'Integrity',
    description: 'We provide transparent pricing, honest assessments, and never pressure you into decisions.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We genuinely love what we do. Our team is passionate about helping Australians embrace clean energy.',
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: 'When we make a commitment, we deliver. Our 25-year warranties back up our confidence in our work.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'We practice what we preach. Our operations are carbon-neutral and we prioritise sustainable practices.',
  },
]

const team = [
  {
    name: 'Michael Roberts',
    role: 'Founder & CEO',
    bio: '20+ years in renewable energy. Former engineer at Origin Energy.',
  },
  {
    name: 'Sarah Chen',
    role: 'Operations Director',
    bio: 'Expert in logistics and customer experience. Previously at Tesla Energy.',
  },
  {
    name: 'David Thompson',
    role: 'Technical Director',
    bio: 'CEC Master Installer with 15 years of hands-on solar experience.',
  },
  {
    name: 'Emma Williams',
    role: 'Customer Success Manager',
    bio: 'Dedicated to ensuring every customer has an exceptional experience.',
  },
]

const certifications = [
  'Clean Energy Council Approved Retailer',
  'CEC Accredited Installers',
  'Solar Victoria',
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-background via-secondary/30 to-background overflow-hidden">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

          <div className="container-premium relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
                About Us
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight tracking-tight mb-6 text-balance">
                Powering Australia&apos;s Sustainable Future
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                For over 15 years, we&apos;ve been helping Australian families and businesses
                reduce their energy costs and environmental impact with premium solar solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-6 rounded-2xl bg-card border border-border">
                  <p className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</p>
                  <p className="text-muted-foreground mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-background">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
                  Our Story
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                  From a Garage to Australia&apos;s Most Trusted Solar Company
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    At VRJ Electrics, we are more than just an electrical contracting company — we are trusted partners in helping homes and businesses across Victoria transition to smarter, cleaner, and more reliable energy solutions.
                  </p>
                  <p>
                    Founded by three partners with a shared passion for renewable energy and a combined 25+ years of industry experience, our team brings proven expertise and a track record of over 1,000 successful solar and battery installations. From small residential projects to large-scale commercial systems, we deliver solutions that are tailored, efficient, and built to last.


                  </p>
                  <div className="space-y-4">
                    <p>Our mission is simple:</p>
                    <ul className="space-y-2 ml-4">
                      <li>✅ To make sustainable energy accessible, affordable, and stress-free.</li>
                      <li>✅ To ensure every customer enjoys maximum savings and long-term reliability.</li>
                      <li>✅ To provide electrical and solar solutions backed by professional workmanship and genuine aftercare.</li>
                    </ul>
                  </div>
                  <p>
                    What sets us apart is our hands-on approach. As a locally owned business, we take pride in treating every project like it’s our own. Our directors remain actively involved, ensuring that from consultation through to installation and after-service, our customers receive honest advice, clear communication, and the highest level of workmanship.


                  </p>
                  <p>
                    Whether you’re a homeowner looking to reduce electricity bills, or a business seeking to future-proof with solar and battery storage, VRJ Electrics is here to power your journey toward energy independence.


                  </p>
                  <p><strong>VRJ Electrics — Powering Victoria with Smarter Energy.</strong>

                  </p>
                </div>
              </div>
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-foreground/90 to-foreground/70">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-background p-8">
                    <p className="text-6xl font-bold text-primary mb-4">6+</p>
                    <p className="text-2xl font-serif">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-premium">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
                Our Values
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                What We Stand For
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="p-8 rounded-2xl bg-card border border-border card-premium"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Certifications */}
        <section className="section-padding bg-foreground text-background">
          <div className="container-premium">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
                Certifications
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-background mb-6">
                Industry-Recognised Excellence
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="px-6 py-3 rounded-full bg-background/10 border border-background/20 text-background/80"
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary/30">
          <div className="container-premium text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Ready to Join 1,000+ Happy Customers?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation quote and see why thousands of Australians
              trust us with their solar journey.
            </p>
            <Button
              asChild
              size="lg"
              className="h-14 px-8 text-base font-semibold btn-premium bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">
                Get Your Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
