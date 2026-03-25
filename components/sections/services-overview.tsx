import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Battery, Wrench, Home, Building2, Thermometer, Wind } from 'lucide-react'
import { cn } from '@/lib/utils'

const services = [
  {
    icon: Battery,
    title: 'Solar Battery Installation',
    description: 'Store excess energy and achieve true energy independence with premium battery systems.',
    href: '/solar-battery-installation',
    featured: true,
    image: '/battery_install_fox.png'
  },
  {
    icon: Home,
    title: 'Residential Solar Power',
    description: 'Complete home solar solutions designed specifically for Australian families.',
    href: '/residential-solar-power',
    featured: true,
    image: '/hero_solar_residential_1774188229645.png'
  },
  {
    icon: Building2,
    title: 'Commercial Solar Power',
    description: 'Large-scale solar installations to reduce business operating costs dramatically.',
    href: '/commercial-solar-power',
    featured: false,
    image: '/project_solar_commercial_1774188332934.png'
  },
  {
    icon: Thermometer,
    title: 'Heat Pump Installation',
    description: 'Energy-efficient heating and cooling that works perfectly with solar power.',
    href: '/heat-pump-installation',
    featured: false,
    image: '/service_heat_pump_1774188291671.png'
  },
  {
    icon: Wind,
    title: 'Aircon Service',
    description: 'Professional air conditioning solutions for year-round comfort in your home.',
    href: '/aircon-service',
    featured: false,
    image: '/service_aircon_unit_1774188307483.png'
  },
]

export function ServicesOverview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-premium">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Complete Energy Solutions for Your Home & Business
          </h2>
          <p className="text-lg text-muted-foreground">
            From solar panel installation to ongoing maintenance, we provide end-to-end 
            renewable energy services across Victoria.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={service.href}
              href={service.href}
              className={cn(
                'group card-premium overflow-hidden border border-border bg-card flex flex-col',
                'hover:border-primary/30'
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Service Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div
                  className={cn(
                    'absolute bottom-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center transition-colors',
                    service.featured
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-white/90 backdrop-blur-sm text-primary group-hover:bg-primary group-hover:text-primary-foreground'
                  )}
                >
                  <service.icon className="w-6 h-6" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 pb-10 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="flex items-center text-primary font-medium">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
