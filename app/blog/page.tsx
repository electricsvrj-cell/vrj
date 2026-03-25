import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { getAllPosts } from '@/lib/blog'
import { ArrowRight, Clock, User, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | Australia\'s Premium Electrical & Solar Insights',
  description: 'Stay updated with the latest in solar technology, government rebates, and energy saving tips from VRJ Electrics.',
  openGraph: {
    title: 'VRJ Electrics Blog | Premium Solar Insights',
    description: 'Expert advice and news on solar power systems in Australia.',
    url: 'https://vrjelectrics.com.au/blog',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20">
        <section className="container-premium mb-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Our Blog
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Solar Insights & <br />
              <span className="text-primary">Energy Experts</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stay up to date with the latest solar technology, government rebates, and 
              practical tips to help you maximize your energy savings and transition to 
              a sustainable future.
            </p>
          </div>
        </section>

        <section className="container-premium">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={post.slug}
                className="group rounded-2xl overflow-hidden border border-border bg-card card-premium flex flex-col h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Featured Image */}
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative aspect-[16/10] bg-muted overflow-hidden">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-primary"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                            <circle cx="12" cy="12" r="4" />
                          </svg>
                        </div>
                      </div>
                    )}
                    {/* Category */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-card/90 backdrop-blur-sm text-foreground text-xs font-semibold border border-border shadow-sm z-10">
                      {post.category}
                    </div>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <Link href={`/blog/${post.slug}`} className="flex-1">
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </Link>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-border mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">{post.author}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary font-semibold text-sm hover:underline"
                    >
                      Read More
                      <ArrowRight className="ml-1.5 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
