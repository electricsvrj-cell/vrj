import { Award, Users, Wrench, Clock, Shield, Headphones } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Premium Quality Products',
    description: 'We only use Tier 1 solar panels and inverters from world-leading manufacturers like SunPower, LG, and Enphase.',
  },
  {
    icon: Users,
    title: 'CEC Accredited Installers',
    description: 'All our installers are Clean Energy Council accredited with extensive training and experience.',
  },
  {
    icon: Wrench,
    title: 'Expert Installation',
    description: 'Meticulous attention to detail ensures your system is installed correctly and safely the first time.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'From quote to installation in as little as 2 weeks. We respect your time and schedule.',
  },
  {
    icon: Shield,
    title: '25-Year Warranty',
    description: 'Industry-leading warranties on panels, inverters, and workmanship for complete peace of mind.',
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    description: 'Our dedicated support team is available 7 days a week to answer questions and provide assistance.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-background">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              Victoria&apos;s Most Trusted Solar Company
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over 6+ years of experience and 1,000+ successful installations, 
              we&apos;ve built our reputation on quality, reliability, and exceptional
              customer service. Here&apos;s what sets us apart.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 p-6 rounded-2xl bg-secondary/50 border border-border">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">6+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center border-x border-border">
                <p className="text-3xl md:text-4xl font-bold text-primary">1K+</p>
                <p className="text-sm text-muted-foreground">Installations</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">97%</p>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Reasons Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="p-6 rounded-xl bg-card border border-border card-premium"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
