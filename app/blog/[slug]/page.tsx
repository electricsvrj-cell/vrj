import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { LeadForm } from '@/components/lead-form'
import { getPostBySlug, getRecentPosts } from '@/lib/blog'
import { ArrowLeft, Clock, User, Calendar, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Post Not Found' }

  return {
    title: `${post.title} | VRJ Electrics Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `https://vrjelectrics.com.au/blog/${slug}`,
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  const recentPosts = getRecentPosts(3, slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20">
        <article className="container-premium">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Link>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="mb-8">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20">
                  {post.category}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground py-6 border-y border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground leading-none mb-1">{post.author}</p>
                      <p className="text-xs">Author</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative aspect-[21/9] rounded-3xl mb-12 overflow-hidden border border-border shadow-2xl">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-primary"
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
              </div>

              {/* Post Content */}
              <div 
                className="blog-content prose prose-lg prose-primary max-w-none mb-16"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share */}
              <div className="flex items-center gap-4 py-8 border-y border-border mb-16">
                <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Share this article:</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-12">
              {/* Lead Form Widget */}
              <div className="sticky top-32">
                <LeadForm 
                  variant="default" 
                  title="Ready to save?" 
                  description="Contact our experts today for a free assessment and solar quote tailored for you."
                  className="shadow-xl"
                />

                {/* Recent Posts Widget */}
                <div className="mt-12 p-8 rounded-2xl border border-border bg-card">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-6">Recent Articles</h3>
                  <div className="space-y-6">
                    {recentPosts.map((recent) => (
                      <Link 
                        key={recent.slug} 
                        href={`/blog/${recent.slug}`}
                        className="group block"
                      >
                        <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">{recent.category}</p>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {recent.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {recent.date}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
