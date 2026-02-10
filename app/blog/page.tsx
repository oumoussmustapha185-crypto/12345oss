import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Blog | PrintFlow",
  description:
    "Latest news, updates, and insights from PrintFlow. Learn about AI automation, POD strategies, and platform updates.",
}

const blogPosts = [
  {
    id: 1,
    title: "Introducing PrintFlow: AI-Powered POD Automation",
    excerpt:
      "Discover how PrintFlow is revolutionizing the Print-on-Demand industry with intelligent automation and AI-driven tools.",
    date: "2025-01-15",
    readTime: "5 min read",
    category: "Product Updates",
    slug: "introducing-printflow",
  },
  {
    id: 2,
    title: "10 Strategies to Scale Your POD Business in 2025",
    excerpt:
      "Learn the top strategies successful POD sellers are using to grow their businesses with automation and AI optimization.",
    date: "2025-01-10",
    readTime: "8 min read",
    category: "Strategy",
    slug: "scale-pod-business-2025",
  },
  {
    id: 3,
    title: "How AI is Transforming Product Design for POD",
    excerpt:
      "Explore how artificial intelligence is changing the way sellers create and optimize designs for Print-on-Demand products.",
    date: "2025-01-05",
    readTime: "6 min read",
    category: "AI & Technology",
    slug: "ai-transforming-product-design",
  },
  {
    id: 4,
    title: "Automated SEO Optimization for POD Listings",
    excerpt:
      "Master the art of automated SEO optimization to increase your product visibility and sales across multiple marketplaces.",
    date: "2024-12-28",
    readTime: "7 min read",
    category: "SEO & Marketing",
    slug: "automated-seo-optimization",
  },
  {
    id: 5,
    title: "Managing Multiple Platforms with PrintFlow",
    excerpt:
      "Learn how PrintFlow helps you efficiently manage your products across Etsy, Shopify, Amazon, and other platforms simultaneously.",
    date: "2024-12-20",
    readTime: "5 min read",
    category: "Platform Management",
    slug: "managing-multiple-platforms",
  },
  {
    id: 6,
    title: "Understanding POD Market Trends with AI Analytics",
    excerpt:
      "Discover how AI-powered analytics can help you identify profitable trends and make data-driven decisions for your POD business.",
    date: "2024-12-15",
    readTime: "6 min read",
    category: "Analytics",
    slug: "pod-market-trends-ai-analytics",
  },
]

const categories = [
  "All",
  "Product Updates",
  "Strategy",
  "AI & Technology",
  "SEO & Marketing",
  "Platform Management",
  "Analytics",
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
                PrintFlow Blog
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl text-balance">
                Latest insights, updates, and strategies for scaling your Print-on-Demand business with AI automation
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="border-b border-border py-8">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Badge key={category} variant={category === "All" ? "default" : "outline"} className="cursor-pointer">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Card key={post.id} className="group flex flex-col overflow-hidden transition-all hover:shadow-lg">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20" />
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground">
                More articles coming soon! Subscribe to our newsletter to stay updated.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="border-t border-border bg-muted/50 py-16">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold">Stay Updated</h2>
              <p className="mb-6 text-muted-foreground">
                Get the latest POD strategies, AI automation tips, and platform updates delivered to your inbox.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-11 rounded-md border border-input bg-background px-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                <Link
                  href="/signup"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90"
                >
                  Subscribe
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
