import { Upload, Wand2, Rocket, TrendingUp } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Connect Your Store",
      description: "Link your Print-on-Demand platform in seconds. We support all major POD services.",
    },
    {
      icon: Wand2,
      title: "AI Creates Products",
      description: "Our AI generates unique designs, compelling titles, and SEO-optimized descriptions automatically.",
    },
    {
      icon: Rocket,
      title: "Publish & Automate",
      description: "Products are published directly to your store. Set it and forget it with automation.",
    },
    {
      icon: TrendingUp,
      title: "Scale & Optimize",
      description: "AI analyzes performance and continuously optimizes your listings for maximum sales.",
    },
  ]

  return (
    <section className="container py-20 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">How It Works</h2>
        <p className="text-balance text-lg text-muted-foreground">
          Four simple steps to transform your Print-on-Demand business
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <div key={index} className="relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div className="absolute left-6 top-12 -z-10 h-full w-px bg-border lg:hidden" />
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
