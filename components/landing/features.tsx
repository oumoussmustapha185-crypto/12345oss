import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Zap, Shield, BarChart3, Clock, Layers } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Sparkles,
      title: "AI Design Generation",
      description: "Generate unique, trending designs using advanced AI models trained on successful products.",
    },
    {
      icon: Zap,
      title: "Instant Publishing",
      description: "Publish products to your store instantly with one click. No manual data entry required.",
    },
    {
      icon: Shield,
      title: "Safe & Compliant",
      description: "Built-in trademark checking and copyright protection to keep your store safe.",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Track which products perform best and get AI-powered recommendations for optimization.",
    },
    {
      icon: Clock,
      title: "Time Automation",
      description: "Schedule product launches and automate routine tasks to save hours every week.",
    },
    {
      icon: Layers,
      title: "Multi-Store Support",
      description: "Manage multiple POD stores from one dashboard. Scale across platforms effortlessly.",
    },
  ]

  return (
    <section className="container py-20 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Powerful Features</h2>
        <p className="text-balance text-lg text-muted-foreground">
          Everything you need to dominate the Print-on-Demand market
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <Card key={index} className="border-border bg-card transition-all hover:border-primary/50">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
