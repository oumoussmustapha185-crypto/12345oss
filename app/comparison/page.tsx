import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Check, X, ArrowRight } from "lucide-react"

export default function ComparisonPage() {
  const comparisonData = [
    {
      feature: "AI-Generated Designs",
      printflow: true,
      manual: false,
      templates: false,
    },
    {
      feature: "SEO-Optimized Content",
      printflow: true,
      manual: false,
      templates: "partial",
    },
    {
      feature: "Multi-Store Management",
      printflow: true,
      manual: false,
      templates: "partial",
    },
    {
      feature: "Trademark Protection",
      printflow: true,
      manual: false,
      templates: false,
    },
    {
      feature: "Trend Analysis",
      printflow: true,
      manual: false,
      templates: false,
    },
    {
      feature: "Automated Publishing",
      printflow: true,
      manual: false,
      templates: true,
    },
    {
      feature: "Performance Analytics",
      printflow: true,
      manual: false,
      templates: "partial",
    },
    {
      feature: "Continuous Optimization",
      printflow: true,
      manual: false,
      templates: false,
    },
    {
      feature: "Design Uniqueness",
      printflow: "100%",
      manual: "100%",
      templates: "Low",
    },
    {
      feature: "Time Investment",
      printflow: "Minutes",
      manual: "Hours",
      templates: "Moderate",
    },
    {
      feature: "Scalability",
      printflow: "Unlimited",
      manual: "Limited",
      templates: "Moderate",
    },
    {
      feature: "Learning Curve",
      printflow: "Easy",
      manual: "Steep",
      templates: "Moderate",
    },
  ]

  const renderValue = (value: boolean | string) => {
    if (value === true) {
      return <Check className="mx-auto h-5 w-5 text-accent" />
    }
    if (value === false) {
      return <X className="mx-auto h-5 w-5 text-muted-foreground" />
    }
    if (value === "partial") {
      return <span className="text-sm text-muted-foreground">Partial</span>
    }
    return <span className="text-sm">{value}</span>
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="container py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-balance text-4xl font-bold md:text-5xl lg:text-6xl">
              PrintFlow vs Traditional Methods
            </h1>
            <p className="mb-8 text-balance text-lg text-muted-foreground md:text-xl">
              See how AI automation compares to manual work and template-based tools. The difference is clear.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="container pb-20 md:pb-32">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-lg border border-border bg-card">
            <div className="grid grid-cols-4 gap-4 border-b border-border bg-muted/30 p-4 font-semibold">
              <div>Feature</div>
              <div className="text-center">PrintFlow AI</div>
              <div className="text-center">Manual Work</div>
              <div className="text-center">Template Tools</div>
            </div>
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-4 gap-4 border-b border-border p-4 last:border-b-0 hover:bg-muted/10"
              >
                <div className="font-medium">{row.feature}</div>
                <div className="flex items-center justify-center text-center">{renderValue(row.printflow)}</div>
                <div className="flex items-center justify-center text-center">{renderValue(row.manual)}</div>
                <div className="flex items-center justify-center text-center">{renderValue(row.templates)}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Cards */}
        <section className="container pb-20 md:pb-32">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold">Why Choose AI Automation?</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle>10x Faster</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Create products in minutes instead of hours. AI handles the repetitive work so you can focus on
                    strategy and growth.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle>100% Unique</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Unlike templates, every design is completely unique. Stand out from competitors with original
                    AI-generated content.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle>Always Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our AI continuously improves based on market trends and performance data. Your results get better
                    over time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container pb-20 md:pb-32">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-accent/5 p-8 text-center md:p-12">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Ready to Make the Switch?</h2>
            <p className="mb-8 text-balance text-muted-foreground">
              Join hundreds of sellers who've already upgraded to AI automation. See the difference for yourself with a
              free trial.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/signup">
                <Button size="lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/features">
                <Button size="lg" variant="outline" className="bg-transparent">
                  Explore Features
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
