import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Clock, CheckCircle } from 'lucide-react'

const benefits = [
  'Free, no-obligation quote',
  'Same-day response guaranteed',
  'Expert system design',
  'Maximum rebate assistance',
]

export function CTA() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-[#050b1a] overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="container-premium relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2.5 mb-10 rounded-full bg-white/5 border border-white/20 backdrop-blur-md animate-fade-in-up">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold tracking-wide text-white/90">
              Limited Time: Up to $1,500 in Extra Rebates Available
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-8 leading-[1.1] animate-fade-in-up delay-100">
            Ready to Start <span className="text-primary italic">Saving With Solar?</span>
          </h2>
          
          <p className="text-lg md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Join 1,000+ Victorian families who have reduced their energy bills 
            and carbon footprint with our premium solar solutions.
          </p>

          {/* Benefits Grid */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16 animate-fade-in-up delay-300">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/20 text-white/90 hover:bg-white/10 transition-colors group"
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <span className="text-base font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-400">
            <Button
              asChild
              size="lg"
              className="h-16 px-12 text-lg font-bold btn-premium bg-primary text-primary-foreground hover:bg-primary/90 shadow-2xl shadow-primary/20"
            >
              <Link href="/contact">
                Get Your Free Quote Now
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-16 px-12 text-lg font-bold border-2 border-white/20 text-white bg-transparent hover:bg-white/10 hover:border-white/40 transition-all"
            >
              <a href="tel:0479074555">
                <Phone className="mr-3 w-5 h-5 text-primary" />
                Call 0479074555
              </a>
            </Button>
          </div>

          {/* Trust Line */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-sm font-medium text-white/40 tracking-widest uppercase">
              Trusted by 1,000+ customers • 97% Satisfaction Guarantee • CEC Approved Retailer
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
