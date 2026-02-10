import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export function WhyDifferent() {
  const benefits = [
    "True AI intelligence, not just templates",
    "Built specifically for POD sellers",
    "Continuous learning from your success",
    "Enterprise-grade security and reliability",
    "No hidden fees or surprise charges",
    "Dedicated support from POD experts",
  ]

  return (
    <section className="container py-20 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why PrintFlow Is Different</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            We're not just another automation tool. PrintFlow is built by POD sellers, for POD sellers, with AI
            technology that actually understands your business.
          </p>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-muted-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <Card className="border-border bg-card">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div>
                <div className="mb-2 text-sm font-medium text-muted-foreground">Traditional Tools</div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground line-through">
                    Manual product creation
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground line-through">Generic templates</div>
                  <div className="flex items-center gap-2 text-muted-foreground line-through">
                    Hours of repetitive work
                  </div>
                </div>
              </div>

              <div className="h-px bg-border" />

              <div>
                <div className="mb-2 text-sm font-medium text-primary">PrintFlow AI</div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" />
                    <span>Intelligent automation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" />
                    <span>Unique, AI-generated content</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" />
                    <span>10x faster workflows</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
