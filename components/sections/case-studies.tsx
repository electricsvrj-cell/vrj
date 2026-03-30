'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const projects = [
  // Solar Projects
  {
    id: 1,
    category: 'Solar',
    title: 'Modern Family Home',
    location: 'Bondi Beach, Sydney',
    systemSize: '13.3kW',
    panels: '32 x LG NeON R 415W',
    inverter: 'SolarEdge SE10000H',
    savings: '$2,800/year',
    image: '/hero_solar_residential_1774188229645.png',
    description: 'Complete energy solution with battery backup for this beautiful coastal home.',
  },
  {
    id: 2,
    category: 'Solar',
    title: 'Commercial Warehouse',
    location: 'Dandenong, Melbourne',
    systemSize: '100kW',
    panels: '200 x JA Solar 500W',
    inverter: 'Fronius Symo 20.0-3-M',
    savings: '$28,000/year',
    image: '/project_solar_commercial_1774188332934.png',
    description: 'Large-scale commercial installation reducing operational costs significantly.',
  },
  {
    id: 3,
    category: 'Solar',
    title: 'Heritage Queenslander',
    location: 'New Farm, Brisbane',
    systemSize: '10kW',
    panels: '24 x SunPower Maxeon 3 415W',
    inverter: 'Enphase IQ8+',
    savings: '$2,100/year',
    image: '/project_heatpump_commercial_1774188370056.png',
    description: 'Carefully designed installation preserving the home\'s historic character.',
  },
  // Battery Projects
  {
    id: 4,
    category: 'Batteries',
    title: 'GoodWe',
    location: 'Mosman, Sydney',
    systemSize: '10kWh Storage',
    panels: 'GoodWe',
    inverter: 'GoodWe',
    image: '/battery_install_alpha.png',
    description: 'Smart battery storage for whole-home backup and maximum energy independence.',
  },
  {
    id: 5,
    category: 'Batteries',
    title: 'Fox ESS',
    location: 'Dandenong, VIC',
    systemSize: '232kWh Storage',
    panels: 'Fox ESS',
    inverter: 'Fox ESS',
    savings: '$15,000/year',
    image: '/battery_install_fox.png',
    description: 'Large-scale battery storage for commercial demand management and peak shaving.',
  },
  {
    id: 6,
    category: 'Batteries',
    title: 'Off-Grid Power Station',
    location: 'Daylesford, VIC',
    systemSize: '30kWh Storage',
    panels: 'Victron Lithium Smart',
    inverter: 'Victron Quattro 10kVA',
    savings: '$2,500/year',
    image: '/project_battery_rural_1.png',
    description: 'Robust off-grid solution providing 24/7 power to a remote rural homestead.',
  },
]

export function CaseStudies() {
  const [activeTab, setActiveTab] = useState<'Solar' | 'Batteries'>('Solar')

  const filteredProjects = projects.filter(p => p.category === activeTab)

  return (
    <section className="section-padding bg-background">
      <div className="container-premium">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Our Projects
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Featured Installations
          </h2>
          <p className="text-lg text-muted-foreground">
            Take a look at some of our recent installations across Victoria.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 bg-muted rounded-full border border-border shadow-inner">
            <button
              onClick={() => setActiveTab('Solar')}
              className={cn(
                'px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300',
                activeTab === 'Solar'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Solar
            </button>
            <button
              onClick={() => setActiveTab('Batteries')}
              className={cn(
                'px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300',
                activeTab === 'Batteries'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Batteries
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px]">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="group rounded-2xl overflow-hidden border border-border bg-card card-premium flex flex-col animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Savings Badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-lg z-10">
                  Save {project.savings}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Location removed */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Specs */}
                {activeTab !== 'Solar' && (
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border text-xs">
                    <div>
                      <p className="text-muted-foreground uppercase tracking-wider mb-1">
                        Storage
                      </p>
                      <p className="font-bold text-foreground truncate">{project.panels}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground uppercase tracking-wider mb-1">Inverter</p>
                      <p className="font-bold text-foreground truncate">{project.inverter}</p>
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <Link
            href="/projects"
            className="inline-flex items-center text-primary font-bold hover:underline group"
          >
            Explore All Projects
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
