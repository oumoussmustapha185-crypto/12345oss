import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, BookOpen, Settings, CreditCard, MessageCircle, Shield } from "lucide-react"
import Link from "next/link"

export default function HelpCenterPage() {
  const categories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Learn the basics of PrintFlow",
      articles: 24,
    },
    {
      icon: Settings,
      title: "Account & Settings",
      description: "Manage your account preferences",
      articles: 18,
    },
    {
      icon: CreditCard,
      title: "Billing & Subscriptions",
      description: "Payment and subscription help",
      articles: 12,
    },
    {
      icon: MessageCircle,
      title: "Product Creation",
      description: "Creating and publishing products",
      articles: 32,
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Keep your account safe",
      articles: 15,
    },
  ]

  const popularArticles = [
    "How to connect my first store",
    "Understanding AI design generation",
    "Publishing products to multiple platforms",
    "Optimizing listings for SEO",
    "Managing billing and subscriptions",
    "Troubleshooting connection issues",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="container py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">How Can We Help?</h1>
            <p className="mb-8 text-balance text-lg text-muted-foreground">
              Search our knowledge base or browse categories below
            </p>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input type="search" placeholder="Search for articles..." className="h-12 bg-card pl-10 pr-4" />
            </div>
          </div>
        </section>

        <section className="container pb-20">
          <h2 className="mb-8 text-2xl font-bold">Browse by Category</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card
                  key={index}
                  className="cursor-pointer border-border bg-card transition-all hover:border-primary/50"
                >
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{category.articles} articles</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        <section className="container pb-20 md:pb-32">
          <h2 className="mb-8 text-2xl font-bold">Popular Articles</h2>
          <Card className="border-border bg-card">
            <CardContent className="divide-y divide-border p-0">
              {popularArticles.map((article, index) => (
                <div key={index} className="cursor-pointer p-4 transition-colors hover:bg-muted/10">
                  <p className="text-sm">{article}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="container pb-20 md:pb-32">
          <Card className="border-border bg-gradient-to-br from-primary/10 to-accent/5">
            <CardHeader className="text-center">
              <CardTitle>Still Need Help?</CardTitle>
              <CardDescription>Our support team is standing by to assist you</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/support" className="text-primary hover:underline">
                Contact Support →
              </Link>
              <span className="text-muted-foreground">or</span>
              <Link href="/documentation" className="text-primary hover:underline">
                View Documentation →
              </Link>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  )
}
