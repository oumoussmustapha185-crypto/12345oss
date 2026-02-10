import { Card, CardContent } from "@/components/ui/card"
import { Users, Store, TrendingUp, Briefcase } from "lucide-react"

export function WhoItsFor() {
  const personas = [
    {
      icon: Users,
      title: "New POD Sellers",
      description: "Launch your first store with confidence. Our AI handles the complex parts while you learn.",
    },
    {
      icon: Store,
      title: "Established Stores",
      description: "Scale faster without hiring a team. Automate your workflow and focus on strategy.",
    },
    {
      icon: TrendingUp,
      title: "Growth-Focused Entrepreneurs",
      description: "Expand to new niches and platforms quickly. Test ideas at scale without the risk.",
    },
    {
      icon: Briefcase,
      title: "POD Agencies",
      description: "Manage multiple client stores efficiently. Deliver results faster and take on more clients.",
    },
  ]

  return (
    <section className="container py-20 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Who This Platform Is For</h2>
        <p className="text-balance text-lg text-muted-foreground">
          Whether you're just starting or scaling to millions, PrintFlow grows with you
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {personas.map((persona, index) => {
          const Icon = persona.icon
          return (
            <Card key={index} className="border-border bg-card transition-all hover:border-primary/50">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{persona.title}</h3>
                <p className="text-sm text-muted-foreground">{persona.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
