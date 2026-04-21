'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { CheckCircle, Home, ArrowLeft } from 'lucide-react'

export default function ThankYouPage() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(10)

  useEffect(() => {
    if (countdown === 0) {
      router.push('/')
      return
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [countdown, router])

  return (
    <main className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/thank-you-bg.png"
          alt="Clean Energy Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      {/* Content Card */}
      <div 
        className="relative z-10 max-w-2xl w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl animate-in fade-in zoom-in duration-700"
      >
        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
          <CheckCircle className="w-10 h-10 text-primary" />
        </div>

        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">
          Thank You!
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light leading-relaxed">
          Your request has been received. Our team will review your details and get back to you shortly.
        </p>

        <div className="space-y-6">
          <div className="py-6 px-8 bg-white/5 rounded-2xl border border-white/10 inline-block">
            <p className="text-white/70 text-sm uppercase tracking-[0.2em] mb-1">Redirecting to Homepage in</p>
            <div className="text-5xl font-serif font-bold text-primary">
              {countdown}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              asChild
              variant="outline" 
              className="w-full sm:w-auto h-12 px-8 border-white/20 text-white hover:bg-white/10"
            >
              <Link href="/">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Go Back Now
              </Link>
            </Button>
            
            <Button 
              asChild
              className="w-full sm:w-auto h-12 px-8 btn-premium bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/">
                <Home className="mr-2 w-4 h-4" />
                Return to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-8 left-0 right-0 text-center z-10">
        <p className="text-white/40 text-sm tracking-widest uppercase">
          © {new Date().getFullYear()} VRJ Electrics • Premium Energy Solutions
        </p>
      </div>
    </main>
  )
}

