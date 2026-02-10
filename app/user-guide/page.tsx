import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function UserGuidePage() {
  const steps = [
    {
      title: "Create Your Account",
      description: "Sign up for PrintFlow and complete your profile. No credit card required for the free trial.",
      tips: ["Use a business email for better organization", "Enable two-factor authentication for security"],
    },
    {
      title: "Connect Your Store",
      description: "Link your Print-on-Demand platform using our secure OAuth integration.",
      tips: ["Start with one store to learn the system", "Ensure you have admin access to your POD account"],
    },
    {
      title: "Set Up Your Preferences",
      description: "Configure your default settings, pricing rules, and automation preferences.",
      tips: ["Set competitive pricing strategies", "Choose your target niches carefully"],
    },
    {
      title: "Generate Your First Design",
      description: "Use our AI to create your first product design. Review and customize as needed.",
      tips: ["Start with popular niches to test the system", "Always review AI-generated content before publishing"],
    },
    {
      title: "Optimize Product Listings",
      description: "Enhance titles, descriptions, and tags using our SEO optimization tools.",
      tips: ["Use all available character limits", "Include relevant keywords naturally"],
    },
    {
      title: "Publish to Your Store",
      description: "Push your product live with one click. The system handles all the technical details.",
      tips: ["Preview products before publishing", "Schedule launches for optimal timing"],
    },
    {
      title: "Monitor Performance",
      description: "Track sales, views, and engagement through your analytics dashboard.",
      tips: ["Check metrics weekly", "Identify patterns in successful products"],
    },
    {
      title: "Scale and Automate",
      description: "Set up automation rules and scale your product catalog efficiently.",
      tips: ["Create templates for recurring tasks", "Use batch operations for efficiency"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="container py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">User Guide</h1>
            <p className="text-balance text-lg text-muted-foreground">
              A complete step-by-step guide to mastering PrintFlow and growing your POD business
            </p>
          </div>
        </section>

        <section className="container pb-20 md:pb-32">
          <div className="mx-auto max-w-4xl space-y-8">
            {steps.map((step, index) => (
              <Card key={index} className="border-border bg-card">
                <CardContent className="p-8">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-bold text-primary">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h2 className="mb-2 text-2xl font-bold">{step.title}</h2>
                      <p className="mb-4 text-muted-foreground">{step.description}</p>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Pro Tips:</p>
                        <ul className="space-y-2">
                          {step.tips.map((tip, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
