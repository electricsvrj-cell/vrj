'use client'

import React from 'react'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Doug',
    star: 5,
    text: "Very impressed – Purchased a 4 year old house with a host of panels on the roof. The system had been installed by the previous owner who had died. Only information we had was some papers indicating installed by VRJ Electrics, no guarantee, no certification, nothing. The panels were producing no power ... Contacted VRJ Electrics who had moved addresses and no doubt different personnel, they didn't even have our address on record. We felt we would be wiped for sure. But no ... even though it was the 18th Dec, when everyone breaking up for Christmas we got an excellent response, and with follow-up action over the Christmas break. An electrician called and made an inspection and report. Water had entered the system and it had to be replaced. We felt for sure that would be that. However we were assured that the system would be replaced entirely and sure enough, on the hottest day this year, January 18th, in 40 degree heat (in the shade), three electricians got up on our roof and replaced the panels and inverter. We are now getting power fed in to the system and our AGL meter is a fraction of what it was. Throughout, VRJ Electrics have been in touch and I have nothing but praise for them and the electricians.",
  },
  {
    name: 'Mark D',
    star: 5,
    text: "Very good to deal with – Very good higher end company to deal with I believe. No problems with install etc. There was a problem with trees that they worked around nicely for me.",
  },
  {
    name: 'Jacki',
    star: 5,
    text: "Solar with no fuss – We got our solar with the minimum amount of fuss. Simple streamlined job from beginning to final install. We were kept informed the whole way. Great result.",
  },
  {
    name: 'Chrissie C',
    star: 5,
    text: "Perfect solar company. Could not do it without them – VRJ Electrics gave us the opportunity to have the best solar panels when we had thought it wold never be possible. The team was efficient informative and honest. Happy to recommend them to everyone, especially to those who believe they cant afford it.",
  },
  {
    name: 'Brentos',
    star: 5,
    text: "Solar living – Happy with VRJ Electrics professionalism. Quality product backed with quality Service. Time to do our part for the environment. Thanks VRJ Electrics.",
  },
]

export function Reviews() {
  return (
    <section className="py-24 bg-secondary/5 overflow-hidden">
      <div className="container-premium mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
          What Our <span className="text-primary">Clients Say</span>
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-8" />
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Don&apos;t just take our word for it. Hear from some of our thousands of satisfied solar customers across Victoria.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee-slow whitespace-nowrap py-12 gap-8">
          {[...reviews, ...reviews].map((review, index) => (
            <ReviewCard key={`${review.name}-${index}`} review={review} />
          ))}
        </div>

        <div className="absolute top-0 flex animate-marquee2-slow whitespace-nowrap h-full py-12 gap-8">
          {[...reviews, ...reviews].map((review, index) => (
            <ReviewCard key={`${review.name}-duplicate-${index}`} review={review} />
          ))}
        </div>
        
        {/* Gradient overlays for smooth fading at edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>

      <style jsx>{`
        .animate-marquee-slow {
          animation: marquee 60s linear infinite;
        }
        .animate-marquee2-slow {
          animation: marquee2 60s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  )
}

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="w-[450px] flex-shrink-0 bg-background p-8 rounded-3xl border border-border/50 shadow-lg hover:shadow-xl transition-all group relative overflow-hidden flex flex-col justify-between">
      {/* Subtle Background Icon */}
      <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/5 group-hover:text-primary/10 transition-colors" />
      
      <div>
        <div className="flex gap-1 mb-4">
          {[...Array(review.star)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-foreground leading-relaxed italic mb-6 text-sm md:text-base whitespace-normal line-clamp-[8] group-hover:line-clamp-none transition-all">
          &ldquo;{review.text}&rdquo;
        </p>
      </div>
      
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
          {review.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-foreground">{review.name}</h4>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">Verified Customer</p>
        </div>
      </div>
    </div>
  )
}
