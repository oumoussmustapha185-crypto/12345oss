import { Shield, Lock, Zap, CheckCircle } from "lucide-react"

export function Trust() {
  const trustFeatures = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and security protocols",
    },
    {
      icon: Lock,
      title: "Data Privacy",
      description: "Your designs and data are 100% private",
    },
    {
      icon: Zap,
      title: "99.9% Uptime",
      description: "Reliable infrastructure you can count on",
    },
    {
      icon: CheckCircle,
      title: "Compliance First",
      description: "Built-in trademark and copyright protection",
    },
  ]

  return (
    <section className="border-y border-border bg-card/50 py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Trust & Security</h2>
          <p className="text-balance text-lg text-muted-foreground">
            Your business is safe with us. We take security and compliance seriously.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
