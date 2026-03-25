import { LeadForm } from '@/components/lead-form'
import { Shield, Clock, Phone, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: '25-Year Warranty',
    description: 'Complete peace of mind',
  },
  {
    icon: Clock,
    title: 'Same Day Quotes',
    description: 'Fast response guaranteed',
  },
  {
    icon: CheckCircle,
    title: '97% Satisfaction',
    description: 'Guaranteed quality work',
  },
  {
    icon: Phone,
    title: '7-Day Support',
    description: 'Always here to help',
  },
]

export function LeadSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Free Quote
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              Get Your Personalised Solar Quote Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Take the first step towards energy independence. Our solar experts will 
              design a custom system for your home and provide a detailed quote with 
              all available rebates included.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Elements */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-primary/10 border-2 border-card flex items-center justify-center text-xs font-semibold text-primary"
                    >
                      {['JM', 'SK', 'LA', 'PT'][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    Join 1,000+ happy customers
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Australia's most trusted solar installer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  )
}
