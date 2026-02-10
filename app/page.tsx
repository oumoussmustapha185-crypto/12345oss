import { Hero } from "@/components/landing/hero"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Features } from "@/components/landing/features"
import { UseCases } from "@/components/landing/use-cases"
import { Testimonials } from "@/components/landing/testimonials"
import { Trust } from "@/components/landing/trust"
import { WhyDifferent } from "@/components/landing/why-different"
import { WhoItsFor } from "@/components/landing/who-its-for"
import { CTA } from "@/components/landing/cta"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <WhyDifferent />
        <WhoItsFor />
        <UseCases />
        <Testimonials />
        <Trust />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
