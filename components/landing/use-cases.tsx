import { Card, CardContent } from "@/components/ui/card"
import { ShoppingBag, Palette, TrendingUp, Globe } from "lucide-react"

export function UseCases() {
  const useCases = [
    {
      icon: ShoppingBag,
      title: "Etsy Sellers",
      description: "Generate hundreds of unique designs and listings for your Etsy shop automatically.",
      stats: "200+ designs/week",
    },
    {
      icon: Palette,
      title: "Redbubble Artists",
      description: "Upload to Redbubble with optimized tags and descriptions that actually convert.",
      stats: "95% SEO score",
    },
    {
      icon: TrendingUp,
      title: "Merch by Amazon",
      description: "Scale your Merch business with compliant, trend-focused designs that sell.",
      stats: "3x more sales",
    },
    {
      icon: Globe,
      title: "Multi-Platform",
      description: "Manage Teespring, Printful, Printify, and more from a single dashboard.",
      stats: "All platforms",
    },
  ]

  return (
    <section className="container py-20 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Use Cases</h2>
        <p className="text-balance text-lg text-muted-foreground">Optimized for every major Print-on-Demand platform</p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {useCases.map((useCase, index) => {
          const Icon = useCase.icon
          return (
            <Card key={index} className="border-border bg-card transition-all hover:border-accent/50">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{useCase.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{useCase.description}</p>
                <div className="text-xs font-medium text-primary">{useCase.stats}</div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
