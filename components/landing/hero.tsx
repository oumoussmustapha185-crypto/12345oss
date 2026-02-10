import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="container relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_35%_at_50%_50%,oklch(0.75_0.19_255_/_0.12),transparent)]" />

      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-muted-foreground">AI-Powered Print-on-Demand Automation</span>
        </div>

        <h1 className="mb-6 text-balance text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Scale Your POD Business with <span className="text-primary">AI Intelligence</span>
        </h1>

        <p className="mb-10 text-balance text-lg text-muted-foreground md:text-xl">
          Automate product creation, optimize listings, and grow your Print-on-Demand store with cutting-edge AI
          technology. Save hours every day while maximizing profits.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/signup">
            <Button size="lg" className="w-full sm:w-auto">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/how-it-works">
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
              See How It Works
            </Button>
          </Link>
        </div>

        <div className="mt-16 grid gap-8 text-center sm:grid-cols-3">
          <div>
            <div className="text-4xl font-bold text-primary">10x</div>
            <div className="mt-2 text-sm text-muted-foreground">Faster Product Creation</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent">85%</div>
            <div className="mt-2 text-sm text-muted-foreground">Time Saved on Tasks</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary">500+</div>
            <div className="mt-2 text-sm text-muted-foreground">Sellers Trust Us</div>
          </div>
        </div>
      </div>
    </section>
  )
}
