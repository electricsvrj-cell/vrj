import { Shield, Award, Leaf, Zap, Users } from 'lucide-react'

const badges = [
  {
    icon: Shield,
    title: 'CEC Approved',
    description: 'Clean Energy Council Accredited',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Australian Solar Excellence 2024',
  },
  {
    icon: Leaf,
    title: 'Carbon Neutral',
    description: 'Certified Carbon Neutral Business',
  },
  {
    icon: Zap,
    title: 'Premium Products',
    description: 'Tier 1 Solar Panels Only',
  },
  {
    icon: Users,
    title: '1,000+ Customers',
    description: 'Trusted Nationwide',
  },
]

export function TrustBadges() {
  return (
    <section className="py-12 bg-secondary/50 border-y border-border">
      <div className="container-premium">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className="flex flex-col items-center text-center p-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <badge.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">
                {badge.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
