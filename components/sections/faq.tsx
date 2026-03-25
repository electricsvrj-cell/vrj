'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'How much does a solar system cost in Victoria?',
    answer: 'The cost of a solar system in Victoria varies based on size and quality. A typical 6.6kW residential system costs between $4,500-$7,000 after rebates, while a 10kW system ranges from $7,500-$12,000. These prices include installation and all necessary equipment. We provide detailed quotes tailored to your specific needs and Victorian location.',
  },
  {
    question: 'What government rebates are available for solar?',
    answer: 'Australians can benefit from Small-scale Technology Certificates (STCs), which can reduce your system cost by $2,000-$4,000 depending on location and system size. Some states offer additional rebates - Victoria has interest-free loans, NSW offers various incentives, and Queensland provides regional grants. We handle all rebate paperwork for you.',
  },
  {
    question: 'How long does a solar installation take?',
    answer: 'The physical installation typically takes just 1-2 days for residential systems. The entire process from quote acceptance to having your system connected and producing power is usually 2-4 weeks, including paperwork processing, council approvals if needed, and grid connection by your electricity provider.',
  },
  {
    question: 'How much can I save with solar panels?',
    answer: 'Most Victorian households save between $1,200-$2,500 per year with solar. Your actual savings depend on your energy usage, system size, roof orientation, and local electricity rates. With rising power prices, your savings typically increase over time. Most systems pay for themselves within 3-5 years.',
  },
  {
    question: 'What is the warranty on solar panels?',
    answer: 'Quality solar panels come with 25-year product warranties and 25-30 year performance warranties. Inverters typically have 10-15 year warranties, with some premium brands offering 25 years. We also provide a 10-year workmanship warranty on our installations, ensuring complete peace of mind.',
  },
  {
    question: 'Do I need a battery with my solar system?',
    answer: 'A battery is optional but increasingly popular. Without a battery, excess power is fed back to the grid for a feed-in tariff. With a battery, you can store excess energy for use at night, reducing reliance on the grid. Batteries make sense if you have high evening usage or want backup power during outages.',
  },
  {
    question: 'Will solar panels work on my roof?',
    answer: 'Solar panels work on most Australian roofs. North-facing roofs are ideal, but east and west-facing roofs also perform well. We can install on tile, Colorbond, flat, and most other roof types. During our free consultation, we\'ll assess your roof\'s suitability and design the optimal system layout.',
  },
  {
    question: 'What happens during a power outage?',
    answer: 'Standard solar systems shut down during grid outages for safety reasons. However, if you have a battery system with backup capability, designated circuits in your home can continue operating during outages. We can design systems specifically for blackout protection if this is important to you.',
  },
]

export function FAQ() {
  return (
    <section className="section-padding bg-background">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              FAQs
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Got questions about solar? We&apos;ve got answers. Here are the most common 
              questions we receive from homeowners considering solar power.
            </p>
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
              <h3 className="font-semibold text-foreground mb-2">Still have questions?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Our friendly team is here to help. Get in touch for a free, no-obligation consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:0479074555"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                >
                  Call 0479074555
                </a>
                <a
                  href="mailto:info@vrjelectrics.com.au"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>

          {/* Accordion */}
          <div>
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
      </div>
    </section>
  )
}
