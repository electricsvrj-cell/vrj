import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getAllProjects } from '@/lib/projects'
import Image from 'next/image'
import { MapPin, Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Projects | Premium Solar & Electrical Installations',
  description: 'Explore our portfolio of high-end solar, battery, heat pump, and air conditioning projects across Australia.',
}

export default function ProjectsPage() {
  const projects = getAllProjects()
  const categories = ['All', 'Solar', 'Batteries', 'Heat Pump', 'Aircon']

  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20">
        {/* Header */}
        <section className="container-premium mb-16 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Our Portfolio
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Excellence in <span className="text-primary">Every Installation</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From residential homes to massive commercial developments, we deliver 
              premium energy solutions tailored to Australian conditions.
            </p>
          </div>
        </section>

        {/* Projects Tabs */}
        <section className="container-premium">
          <Tabs defaultValue="All" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-secondary/50 p-1 rounded-full border border-border">
                {categories.map((cat) => (
                  <TabsTrigger
                    key={cat}
                    value={cat}
                    className="px-6 py-2.5 rounded-full text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                  >
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((cat) => (
              <TabsContent key={cat} value={cat} className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects
                    .filter((p) => cat === 'All' || p.category === cat)
                    .map((project) => (
                      <div
                        key={project.id}
                        className="group rounded-3xl overflow-hidden border border-border bg-card card-premium flex flex-col h-full"
                      >
                        {/* Image */}
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                            {project.category}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-1">
                          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-primary" />
                              {project.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5 text-primary" />
                              {project.date}
                            </div>
                          </div>

                          <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                            {project.description}
                          </p>
                          
                          <Link
                            href="/contact"
                            className="inline-flex items-center text-sm font-bold text-primary group/link"
                          >
                            Discuss Your Project
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>
      </main>
      <Footer />
    </>
  )
}
