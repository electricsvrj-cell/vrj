'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PopupForm } from '@/components/popup-form'
import { ArrowRight, Play, Shield, Award, Clock } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const slides = [
  {
    src: '/slider/hero-2.png',
    alt: 'High-Efficiency Solar Panels & Storage',
  },
  {
    src: '/slider/hero-3.png',
    alt: 'Professional Solar Installation Services',
  },
  {
    src: '/slider/hero-4.png',
    alt: 'Smart Energy Management for Your Home',
  },
]

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/50 to-background" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary/10 border border-primary/20 animate-fade-in-up">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Victoria&apos;s #1 Rated Solar Installer
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] tracking-tight mb-6 animate-fade-in-up delay-100">
              <span className="text-balance">Power Your Future With</span>{' '}
              <span className="text-gradient-gold">Premium Solar</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl animate-fade-in-up delay-200">
              Transform your home with Victoria&apos;s most trusted solar solutions.
              Save up to <strong className="text-foreground">$2,000 per year</strong> on
              electricity while reducing your carbon footprint.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up delay-300">
              <PopupForm
                trigger={
                  <Button
                    size="lg"
                    className="h-14 px-8 text-base font-semibold btn-premium bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Get Your Free Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                }
              />
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 px-8 text-base font-semibold border-2 hover:bg-secondary"
              >
                <Link href="/about">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Our Story
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 animate-fade-in-up delay-400">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">25 Years</p>
                  <p className="text-sm text-muted-foreground">Warranty</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">1,000+</p>
                  <p className="text-sm text-muted-foreground">Installations</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">Same Day</p>
                  <p className="text-sm text-muted-foreground">Quotes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual Slider */}
          <div className="relative animate-fade-in delay-200">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 group">
              <div
                className="overflow-hidden h-full"
                ref={emblaRef}
              >
                <div className="flex h-full">
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className="relative flex-[0_0_100%] min-w-0 h-full"
                    >
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider Dots */}
              <div className="absolute bottom-6 right-6 flex gap-2 z-20">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => emblaApi?.scrollTo(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${selectedIndex === index
                      ? 'bg-primary w-8'
                      : 'bg-white/40 hover:bg-white/60'
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows (Optional, subtle hover) */}
              <button
                onClick={() => emblaApi?.scrollPrev()}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:bg-black/40"
              >
                <ArrowRight className="w-5 h-5 rotate-180" />
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:bg-black/40"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  )
}
