import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { LeadForm } from '@/components/lead-form'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Get Your Free Electrical & Solar Quote',
  description: 'Contact VRJ Electrics for a free, no-obligation quote. Call 0479074555 or fill out our form. Serving Victoria with premium electrical and solar solutions.',
  openGraph: {
    title: 'Contact VRJ Electrics | Get Your Free Quote',
    description: 'Get in touch for a free quote. Our experts are ready to help you start saving.',
    url: 'https://vrjelectrics.com.au/contact',
  },
}

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: '0479074555',
    subtext: 'Mon-Fri 7am-6pm, Sat 8am-2pm',
    href: 'tel:0479074555',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'info@vrjelectrics.com.au',
    subtext: 'We respond within 24 hours',
    href: 'mailto:info@vrjelectrics.com.au',
  },
  {
    icon: MapPin,
    title: 'Head Office',
    details: '86 Hotham St, Preston VIC 3072',
    subtext: 'Visit by appointment',
    href: '#',
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    details: 'Chat with our team',
    subtext: 'Available during business hours',
    href: '#',
  },
]

const locations = [
  {
    city: 'Victoria',
    address: '86 Hotham St, Preston VIC 3072',
    phone: '0479074555',
  },
]

export default function ContactPage() {
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
                Contact Us
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight tracking-tight mb-6 text-balance">
                Get Your Free Solar Quote Today
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Ready to start saving? Our solar experts are here to help you design 
                the perfect system for your home or business.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
              {contactInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="p-6 rounded-2xl bg-card border border-border text-center card-premium hover:border-primary/30 transition-colors"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-primary font-medium mb-1">{item.details}</p>
                  <p className="text-sm text-muted-foreground">{item.subtext}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="section-padding bg-background">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form */}
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                  Request Your Free Quote
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Fill out the form below and one of our solar experts will contact you 
                  within 24 hours with a personalised quote.
                </p>
                <LeadForm
                  title=""
                  description=""
                />
              </div>

              {/* Info */}
              <div>
                <div className="p-8 rounded-2xl bg-secondary/50 border border-border mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    What Happens Next?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-semibold">
                        1
                      </div>
                      <div>
                        <p className="font-medium text-foreground">We Review Your Details</p>
                        <p className="text-sm text-muted-foreground">Our team analyses your energy needs and location.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-semibold">
                        2
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Expert Consultation</p>
                        <p className="text-sm text-muted-foreground">We call to discuss your goals and answer questions.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-semibold">
                        3
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Custom Quote</p>
                        <p className="text-sm text-muted-foreground">You receive a detailed, personalised solar proposal.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Need an Urgent Response?
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        For immediate assistance, call us directly. Our team is available 
                        7 days a week to answer your questions.
                      </p>
                      <a
                        href="tel:0479074555"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                      >
                        <Phone className="w-5 h-5" />
                        Call 0479074555
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="section-padding bg-secondary/30">
          <div className="container-premium">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
                Our Locations
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Serving Victoria
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We are proud to serve the entire Victorian region. Find our 
                head office details below.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((location) => (
                <div
                  key={location.city}
                  className="p-6 rounded-2xl bg-card border border-border"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {location.city}
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                      <span>{location.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                      <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">
                        {location.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
