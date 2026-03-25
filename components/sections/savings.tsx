import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'

const savingsData = [
  { size: '6.6kW', panels: '15-18', cost: '$4,500 - $6,500', savings: '$1,200 - $1,500', payback: '3-4 years' },
  { size: '10kW', panels: '24-27', cost: '$7,500 - $10,000', savings: '$1,800 - $2,200', payback: '4-5 years' },
  { size: '13.3kW', panels: '30-36', cost: '$10,000 - $14,000', savings: '$2,400 - $3,000', payback: '4-5 years' },
]

const rebates = [
  'Small-scale Technology Certificates (STCs) - Up to $4,000 off',
  'State Government Rebates - Varies by state',
  'Interest-Free Loans - Available in VIC, NSW, SA',
  'Feed-in Tariffs - Get paid for excess power',
]

export function Savings() {
  return (
    <section className="section-padding bg-background">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Your Savings
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              How Much Can You Save With Solar?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The average Victorian household can save between $1,200 and $2,500 per year 
              on electricity bills. With rising energy prices, your savings will only increase 
              over time.
            </p>

            {/* Rebates */}
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Available Government Rebates
              </h3>
              <ul className="space-y-3">
                {rebates.map((rebate) => (
                  <li key={rebate} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{rebate}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              asChild
              size="lg"
              className="h-14 px-8 text-base font-semibold btn-premium bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">
                Calculate My Savings
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Savings Table */}
          <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
            <div className="p-6 bg-primary text-primary-foreground">
              <h3 className="text-xl font-semibold mb-2">Typical Solar System Costs & Savings</h3>
              <p className="text-primary-foreground/70 text-sm">After government rebates - Updated 2024</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-4 text-left text-sm font-semibold text-foreground">System Size</th>
                    <th className="p-4 text-left text-sm font-semibold text-foreground">Net Cost</th>
                    <th className="p-4 text-left text-sm font-semibold text-foreground">Annual Savings</th>
                    <th className="p-4 text-left text-sm font-semibold text-foreground">Payback</th>
                  </tr>
                </thead>
                <tbody>
                  {savingsData.map((row, index) => (
                    <tr
                      key={row.size}
                      className={index !== savingsData.length - 1 ? 'border-b border-border' : ''}
                    >
                      <td className="p-4">
                        <div>
                          <p className="font-semibold text-foreground">{row.size}</p>
                          <p className="text-xs text-muted-foreground">{row.panels} panels</p>
                        </div>
                      </td>
                      <td className="p-4 text-foreground">{row.cost}</td>
                      <td className="p-4 text-primary font-semibold">{row.savings}</td>
                      <td className="p-4 text-foreground">{row.payback}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-secondary/50 text-center text-sm text-muted-foreground">
              Prices vary by location and installation complexity. Get a personalized quote.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
