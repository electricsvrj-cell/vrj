'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    location: 'Sydney, NSW',
    image: null,
    rating: 5,
    text: 'Absolutely thrilled with our solar installation! The team was professional, punctual, and left everything spotless. Our electricity bills have dropped by 75% - we couldn\'t be happier.',
    system: '10kW System',
    savings: 'Saving $1,800/year',
  },
  {
    id: 2,
    name: 'James Chen',
    location: 'Melbourne, VIC',
    image: null,
    rating: 5,
    text: 'From the initial consultation to the final installation, the experience was seamless. The team explained everything clearly and helped us maximize our government rebates. Highly recommended!',
    system: '6.6kW System',
    savings: 'Saving $1,200/year',
  },
  {
    id: 3,
    name: 'Emma & David Thompson',
    location: 'Brisbane, QLD',
    image: null,
    rating: 5,
    text: 'We compared multiple quotes and VRJ Electrics offered the best value with premium panels. The installation was completed in one day, and we started saving immediately. Best investment we\'ve made!',
    system: '13.3kW System',
    savings: 'Saving $2,600/year',
  },
  {
    id: 4,
    name: 'Michael O\'Brien',
    location: 'Perth, WA',
    image: null,
    rating: 5,
    text: 'Outstanding service from start to finish. The team was incredibly knowledgeable and helped design a system that perfectly meets our family\'s needs. Our power bills are now almost zero!',
    system: '8kW System',
    savings: 'Saving $1,500/year',
  },
  {
    id: 5,
    name: 'Lisa Nguyen',
    location: 'Adelaide, SA',
    image: null,
    rating: 5,
    text: 'I was hesitant about going solar, but the team made the whole process easy to understand. They handled all the paperwork for rebates and the system was up and running in two weeks.',
    system: '6.6kW System',
    savings: 'Saving $1,350/year',
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-premium">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Customer Reviews
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of satisfied Victorians who have made the switch to solar 
            with us.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative p-8 md:p-12 rounded-3xl bg-card border border-border shadow-xl">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />
            
            <div className="relative z-10">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-primary fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                    {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-foreground">
                    {testimonials[currentIndex].system}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {testimonials[currentIndex].savings}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="w-12 h-12 rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    'w-3 h-3 rounded-full transition-all',
                    index === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-border hover:bg-primary/50'
                  )}
                >
                  <span className="sr-only">Go to testimonial {index + 1}</span>
                </button>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="w-12 h-12 rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-primary">847+</p>
            <p className="text-muted-foreground mt-2">5-Star Reviews</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-primary">4.9</p>
            <p className="text-muted-foreground mt-2">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-primary">98%</p>
            <p className="text-muted-foreground mt-2">Would Recommend</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-primary">15K+</p>
            <p className="text-muted-foreground mt-2">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  )
}
