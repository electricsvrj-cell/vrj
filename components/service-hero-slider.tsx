'use client'

import * as React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

interface ServiceHeroSliderProps {
  images: string[]
  title: string
}

export function ServiceHeroSlider({ images, title }: ServiceHeroSliderProps) {
  return (
    <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl transition-all hover:scale-[1.02] duration-500 border border-border bg-muted group">
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full h-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-full ml-0">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-0 h-full">
              <div className="relative w-full h-full">
                <img
                  src={image}
                  alt={`${title} - slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2 pointer-events-none">
          <CarouselPrevious className="relative translate-y-0 left-0 pointer-events-auto bg-black/20 hover:bg-black/40 text-white border-white/20" />
          <CarouselNext className="relative translate-y-0 right-0 pointer-events-auto bg-black/20 hover:bg-black/40 text-white border-white/20" />
        </div>
      </Carousel>
    </div>
  )
}
