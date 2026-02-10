import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Upload, Wand2, Rocket, TrendingUp, ArrowRight, CheckCircle } from "lucide-react"

export default function HowItWorksPage() {
  const steps = [
    {
      icon: Upload,
      title: "Step 1: Connect Your Store",
      description:
        "Link your Print-on-Demand platform in just a few clicks. We support Etsy, Redbubble, Merch by Amazon, Printful, Printify, Teespring, and more. Our secure API integration ensures your data stays safe.",
      details: [
        "One-click OAuth connection",
        "Bank-level security encryption",
        "Support for multiple stores",
        "Instant sync capabilities",
      ],
    },
    {
      icon: Wand2,
      title: "Step 2: AI Creates Products",
      description:
        "Our advanced AI analyzes trending niches, generates unique designs, writes compelling product titles, and creates SEO-optimized descriptions. All you do is review and approve.",
      details: [
        "Trend-aware design generation",
        "SEO-optimized titles & tags",
        "Compelling product descriptions",
        "Multi-variant support",
      ],
    },
    {
      icon: Rocket,
      title: "Step 3: Publish & Automate",
      description:
        "Products are published directly to your connected stores with a single click. Set up automation rules to handle everything from pricing to inventory management.",
      details: ["One-click publishing", "Automated price optimization", "Smart inventory sync", "Scheduled launches"],
    },
    {
      icon: TrendingUp,
      title: "Step 4: Scale & Optimize",
      description:
        "Our AI continuously monitors performance, identifies winning products, and provides actionable insights. Automatically pause low performers and scale what works.",
      details: [
        "Real-time analytics dashboard",
        "Performance-based recommendations",
        "Automatic A/B testing",
        "Profit optimization",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="container py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-balance text-4xl font-bold md:text-5xl lg:text-6xl">How PrintFlow Works</h1>
            <p className="mb-8 text-balance text-lg text-muted-foreground md:text-xl">
              From connection to optimization, see how PrintFlow automates your entire Print-on-Demand workflow in four
              simple steps.
            </p>
            <Link href="/signup">
              <Button size="lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Steps Section */}
        <section className="container pb-20 md:pb-32">
          <div className="mx-auto max-w-4xl space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <Card key={index} className="border-border bg-card">
                  <CardContent className="p-8 md:p-12">
                    <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                      <div>
                        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <h2 className="mb-4 text-2xl font-bold md:text-3xl">{step.title}</h2>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                      <div>
                        <ul className="space-y-3">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container pb-20 md:pb-32">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-accent/5 p-8 text-center md:p-12">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Ready to Get Started?</h2>
            <p className="mb-8 text-balance text-muted-foreground">
              Join hundreds of sellers automating their POD business with AI. No credit card required.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/signup">
                <Button size="lg">Start Free Trial</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-transparent">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
