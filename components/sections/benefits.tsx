import { TrendingDown, Leaf, Home, Shield, Banknote, Sun } from 'lucide-react'

const benefits = [
  {
    icon: TrendingDown,
    title: 'Reduce Energy Bills',
    description: 'Save up to 80% on your electricity bills by generating your own clean power.',
    stat: '80%',
    statLabel: 'Average Savings',
  },
  {
    icon: Banknote,
    title: 'Government Rebates',
    description: 'Take advantage of Victorian government incentives and STCs worth thousands.',
    stat: '',
    statLabel: '',
  },
  {
    icon: Leaf,
    title: 'Reduce Carbon Footprint',
    description: 'A typical home solar system offsets 4-5 tonnes of CO2 emissions annually.',
    stat: '5 tonnes',
    statLabel: 'CO2 Offset/Year',
  },
  {
    icon: Home,
    title: 'Increase Property Value',
    description: 'Solar installations can increase your property value by up to 4%.',
    stat: '4+',
    statLabel: 'Value Increase',
  },
  {
    icon: Shield,
    title: 'Energy Independence',
    description: 'Protect yourself from rising electricity prices and grid outages.',
    stat: '25yr',
    statLabel: 'Panel Warranty',
  },
  {
    icon: Sun,
    title: 'Ideal Australian Climate',
    description: 'Australia receives some of the highest solar radiation levels in the world.',
    stat: '300+',
    statLabel: 'Sunny Days/Year',
  },
]

export function Benefits() {
  return (
    <section className="section-padding bg-secondary/50 overflow-hidden">
      <div className="container-premium">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Why Go Solar?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            The Benefits of Solar Power in Victoria
          </h2>
          <p className="text-lg text-muted-foreground">
            Victoria is one of the best states in the world for solar energy.
            Here&apos;s why thousands of Victorians are making the switch.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="relative p-8 rounded-2xl bg-card border border-border group hover:border-primary/30 transition-all hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                {benefit.stat && (
                  <div className="text-right">
                    <p className="text-3xl font-bold text-primary">{benefit.stat}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{benefit.statLabel}</p>
                  </div>
                )}
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
  )
}
