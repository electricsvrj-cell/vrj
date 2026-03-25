import Image from 'next/image'

const logos = [
  { name: 'Fronius', src: '/logos/fronius.png' },
  { name: 'Fox ESS', src: '/logos/fox-ess.jpg' },
  { name: 'AlphaESS', src: '/logos/alpha-ess.png' },
  { name: 'Growatt', src: '/logos/growatt.png' },
  { name: 'GoodWe', src: '/logos/goodwe.png' },
  { name: 'Jinko Solar', src: '/logos/jinko.png' },
  { name: 'Neovolt', src: '/logos/neovolt.png' },
  { name: 'Seraphim', src: '/logos/seraphim.png' },
  { name: 'SMA', src: '/logos/sma.png' },
  { name: 'SolarEdge', src: '/logos/solaredge.png' },
  { name: 'Solis', src: '/logos/solis.png' },
  { name: 'Trina Solar', src: '/logos/trinasolar.png' },
  { name: 'Ulica Solar', src: '/logos/ulicasolar.png' },
  { name: 'VRJ Electrics', src: '/logos/vrjelectrics.png' },
]

export function LogoMarquee() {
  return (
    <section className="py-8 bg-white overflow-hidden border-y border-border/50">
      <div className="container-premium mb-6 text-center">
        <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground">
          Premium Brand Partners
        </h2>
      </div>
      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap items-center py-4 gap-8 md:gap-12">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={180}
                height={90}
                className="h-12 md:h-16 w-auto object-contain max-w-[140px] md:max-w-[200px]"
              />
            </div>
          ))}
        </div>

        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap items-center h-full py-4 gap-8 md:gap-12">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.name}-duplicate-${index}`}
              className="flex-shrink-0 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={180}
                height={90}
                className="h-12 md:h-16 w-auto object-contain max-w-[140px] md:max-w-[200px]"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 30s linear infinite;
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
