import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Book, Rocket, Settings, Code, Video, FileText } from "lucide-react"

export default function DocumentationPage() {
  const sections = [
    {
      icon: Rocket,
      title: "Getting Started",
      description: "Learn the basics and set up your first products",
      topics: ["Account Setup", "Connecting Your Store", "Creating Your First Product", "Publishing Workflow"],
    },
    {
      icon: Settings,
      title: "Platform Features",
      description: "Deep dive into PrintFlow's powerful features",
      topics: ["AI Design Generation", "SEO Optimization", "Multi-Store Management", "Performance Analytics"],
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Technical documentation for developers",
      topics: ["Authentication", "Endpoints", "Rate Limits", "Webhooks"],
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      topics: ["Platform Overview", "Design Tips", "Optimization Strategies", "Advanced Workflows"],
    },
    {
      icon: FileText,
      title: "Best Practices",
      description: "Tips from successful POD sellers",
      topics: ["Niche Selection", "Product Quality", "SEO Strategies", "Scaling Your Business"],
    },
    {
      icon: Book,
      title: "FAQ & Troubleshooting",
      description: "Common questions and solutions",
      topics: ["Account Issues", "Connection Problems", "Publishing Errors", "Billing Questions"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="container py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Documentation</h1>
            <p className="text-balance text-lg text-muted-foreground">
              Everything you need to know about using PrintFlow effectively. From quick starts to advanced techniques.
            </p>
          </div>
        </section>

        <section className="container pb-20 md:pb-32">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <Card key={index} className="border-border bg-card transition-all hover:border-primary/50">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{section.title}</CardTitle>
                    <CardDescription>{section.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {section.topics.map((topic, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-primary" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        <section className="container pb-20 md:pb-32">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle>Need More Help?</CardTitle>
              <CardDescription>Our support team is here to assist you</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 sm:flex-row">
              <Link href="/help-center" className="flex-1">
                <Card className="h-full cursor-pointer border-border bg-background transition-all hover:border-primary/50">
                  <CardContent className="p-6">
                    <h3 className="mb-2 font-semibold">Visit Help Center</h3>
                    <p className="text-sm text-muted-foreground">Browse articles and guides</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/support" className="flex-1">
                <Card className="h-full cursor-pointer border-border bg-background transition-all hover:border-primary/50">
                  <CardContent className="p-6">
                    <h3 className="mb-2 font-semibold">Contact Support</h3>
                    <p className="text-sm text-muted-foreground">Get help from our team</p>
                  </CardContent>
                </Card>
              </Link>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  )
}
