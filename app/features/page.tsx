import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  Sparkles,
  Zap,
  Shield,
  BarChart3,
  Clock,
  Layers,
  Palette,
  Search,
  FileText,
  Globe,
  Lock,
  RefreshCw,
  ArrowRight,
} from "lucide-react"

export default function FeaturesPage() {
  const features = [
    {
      icon: Sparkles,
      title: "AI Design Generation",
      description:
        "Create stunning, unique designs using state-of-the-art AI models. Our system learns from trending products and generates designs optimized for sales.",
      category: "Creation",
    },
    {
      icon: Palette,
      title: "Smart Design Variations",
      description:
        "Automatically generate multiple color variations and styles from a single design. Test different versions to see what sells best.",
      category: "Creation",
    },
    {
      icon: FileText,
      title: "SEO-Optimized Descriptions",
      description:
        "AI writes compelling product descriptions with built-in SEO optimization. Get titles, tags, and descriptions that rank high and convert.",
      category: "Content",
    },
    {
      icon: Search,
      title: "Trend Analysis",
      description:
        "Stay ahead of the market with real-time trend detection. Our AI identifies emerging niches before they become saturated.",
      category: "Intelligence",
    },
    {
      icon: Zap,
      title: "Instant Publishing",
      description:
        "Publish products to your stores with one click. No more manual data entry or CSV uploads. Everything is automated.",
      category: "Automation",
    },
    {
      icon: Clock,
      title: "Scheduled Launches",
      description:
        "Schedule product launches for optimal times. Queue up weeks of products and let the system publish them automatically.",
      category: "Automation",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description:
        "Track sales, views, and conversion rates in real-time. Get actionable insights to optimize your product portfolio.",
      category: "Analytics",
    },
    {
      icon: RefreshCw,
      title: "Auto-Optimization",
      description:
        "AI continuously tests and optimizes your listings. Automatic price adjustments, title improvements, and more.",
      category: "Intelligence",
    },
    {
      icon: Layers,
      title: "Multi-Store Management",
      description:
        "Manage unlimited stores from one dashboard. Etsy, Redbubble, Amazon Merch, and more—all in one place.",
      category: "Management",
    },
    {
      icon: Globe,
      title: "Multi-Platform Support",
      description: "Works with all major POD platforms. Connect once and publish everywhere simultaneously.",
      category: "Integration",
    },
    {
      icon: Shield,
      title: "Trademark Protection",
      description:
        "Built-in trademark checking prevents costly mistakes. Our AI flags potential issues before you publish.",
      category: "Safety",
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description:
        "Bank-level encryption protects your data and designs. SOC 2 compliant infrastructure you can trust.",
      category: "Security",
    },
  ]

  const categories = [...new Set(features.map((f) => f.category))]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="container py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-balance text-4xl font-bold md:text-5xl lg:text-6xl">
              Everything You Need to Dominate POD
            </h1>
            <p className="mb-8 text-balance text-lg text-muted-foreground md:text-xl">
              Powerful features designed specifically for Print-on-Demand sellers who want to scale faster and work
              smarter.
            </p>
            <Link href="/signup">
              <Button size="lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container pb-20 md:pb-32">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="border-border bg-card transition-all hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="mb-2 text-xs font-medium text-accent">{feature.category}</div>
                    <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container pb-20 md:pb-32">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-accent/5 p-8 text-center md:p-12">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">See Features in Action</h2>
            <p className="mb-8 text-balance text-muted-foreground">
              Experience the power of AI automation for your Print-on-Demand business. Start your free trial today.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/signup">
                <Button size="lg">Start Free Trial</Button>
              </Link>
              <Link href="/how-it-works">
                <Button size="lg" variant="outline" className="bg-transparent">
                  See How It Works
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
