import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="container py-20 md:py-32">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-accent/5 to-background p-12 md:p-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_50%,oklch(0.75_0.19_255_/_0.15),transparent_50%),radial-gradient(circle_at_70%_50%,oklch(0.68_0.22_145_/_0.15),transparent_50%)]" />

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">Ready to Transform Your POD Business?</h2>
          <p className="mb-10 text-balance text-lg text-muted-foreground">
            Join hundreds of successful sellers using AI to scale faster, work smarter, and earn more. Start your free
            trial today—no credit card required.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/signup">
              <Button size="lg" className="w-full sm:w-auto">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                Talk to Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
