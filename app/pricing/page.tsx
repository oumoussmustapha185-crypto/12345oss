"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Menu, Zap } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "@/components/logo"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly")
  const [planType, setPlanType] = useState<"individual" | "bundle">("individual")
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const navigation = [
    { name: "How It Works", href: "/how-it-works" },
    { name: "Comparison", href: "/comparison" },
    { name: "FAQ", href: "/faq" },
    { name: "Pricing", href: "/pricing" },
    { name: "Affiliate", href: "/affiliate" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  const individualPlans = [
    {
      name: "Starter",
      price: billingPeriod === "monthly" ? 29 : 290,
      description: "Perfect for getting started with AI-powered POD",
      features: [
        "100 AI image generations/month",
        "Basic design variations",
        "Standard support",
        "Export to PNG/JPG",
        "1 connected store",
      ],
    },
    {
      name: "Professional",
      price: billingPeriod === "monthly" ? 79 : 790,
      description: "For serious sellers scaling their business",
      features: [
        "500 AI image generations/month",
        "Advanced design variations",
        "Priority support",
        "Export to all formats",
        "5 connected stores",
        "Batch processing",
        "API access",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: billingPeriod === "monthly" ? 199 : 1990,
      description: "For agencies and large operations",
      features: [
        "Unlimited AI generations",
        "Premium design variations",
        "24/7 dedicated support",
        "Custom integrations",
        "Unlimited stores",
        "Team collaboration",
        "White-label options",
        "Custom training",
      ],
    },
  ]

  const bundlePlans = [
    {
      name: "Amazon Starter Bundle",
      price: billingPeriod === "monthly" ? 49 : 490,
      description: "Complete toolkit for Amazon Merch sellers",
      features: [
        "200 AI image generations/month",
        "Amazon-optimized designs",
        "Amazon scraper tool",
        "Keyword research",
        "Priority support",
        "3 connected stores",
      ],
    },
    {
      name: "Amazon Advanced Bundle",
      price: billingPeriod === "monthly" ? 149 : 1490,
      description: "Advanced suite for professional Amazon sellers",
      features: [
        "1000 AI image generations/month",
        "Advanced Amazon tools",
        "Competitor analysis",
        "Trend forecasting",
        "Batch uploads",
        "API access",
        "Unlimited stores",
        "Team features",
      ],
      popular: true,
    },
    {
      name: "Multi-Platform Bundle",
      price: billingPeriod === "monthly" ? 249 : 2490,
      description: "All tools for multiple POD platforms",
      features: [
        "Unlimited AI generations",
        "All platform integrations",
        "Advanced analytics",
        "Multi-store management",
        "White-label tools",
        "Dedicated account manager",
        "Custom workflows",
        "Enterprise support",
      ],
    },
  ]

  const plans = planType === "individual" ? individualPlans : bundlePlans

  const faqs = [
    {
      question: "What's the difference between the plans?",
      answer:
        "Each plan offers different levels of AI generation capacity, support, and features. Starter is great for beginners, Professional for growing businesses, and Enterprise for large operations. Bundle plans include additional platform-specific tools.",
    },
    {
      question: "Is there any upload limit?",
      answer:
        "Upload limits depend on your plan. Starter plans allow up to 50 images per batch, Professional up to 200, and Enterprise plans have no upload limits. Storage is unlimited on all plans.",
    },
    {
      question: "Can multiple team members use one account?",
      answer:
        "Team collaboration features are available on Professional and Enterprise plans. You can invite team members, set permissions, and collaborate on projects together.",
    },
    {
      question: "What's the difference between Amazon Advanced and Amazon Starter?",
      answer:
        "Amazon Advanced includes 5x more AI generations, competitor analysis tools, trend forecasting, batch upload features, and unlimited store connections. Amazon Starter is perfect for beginners with 200 generations and 3 store connections.",
    },
    {
      question: "Do you offer a money-back guarantee?",
      answer:
        "Yes! We offer a 30-day money-back guarantee on all plans. If you're not satisfied with PixelForge AI, contact support within 30 days for a full refund, no questions asked.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container flex h-16 items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 md:flex">
            <Link href="/dashboard">
              <Button size="sm">Dashboard</Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-4">
                  <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                    <Button className="w-full">Dashboard</Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Simple, transparent pricing</span>
              </div>
              <h1 className="text-4xl font-bold text-balance sm:text-5xl lg:text-6xl">Choose Your Perfect Plan</h1>
              <p className="mt-6 text-lg text-muted-foreground text-balance">
                Scale your Print-on-Demand business with AI-powered tools. No hidden fees, cancel anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Controls */}
        <section className="py-12">
          <div className="container">
            <div className="mx-auto max-w-4xl space-y-8">
              {/* Billing Period Toggle */}
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <span className="text-sm font-medium">Billing Period:</span>
                <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/50 p-1">
                  <Button
                    variant={billingPeriod === "monthly" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setBillingPeriod("monthly")}
                  >
                    Monthly
                  </Button>
                  <Button
                    variant={billingPeriod === "annual" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setBillingPeriod("annual")}
                  >
                    Annual
                  </Button>
                </div>
                {billingPeriod === "annual" && (
                  <span className="text-sm font-medium text-green-500">Save up to 17%</span>
                )}
              </div>

              {/* Plan Type Toggle */}
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <span className="text-sm font-medium">Plan Type:</span>
                <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/50 p-1">
                  <Button
                    variant={planType === "individual" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setPlanType("individual")}
                  >
                    Individual Plans
                  </Button>
                  <Button
                    variant={planType === "bundle" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setPlanType("bundle")}
                  >
                    Bundle Plans
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {plans.map((plan) => (
                <Card key={plan.name} className={plan.popular ? "relative border-2 border-primary shadow-lg" : ""}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground">/{billingPeriod === "monthly" ? "mo" : "yr"}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                      onClick={() => router.push(`/checkout/${plan.name.toLowerCase().replace(/\s+/g, "-")}`)}
                    >
                      Subscribe Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Direct Billing Button */}
            <div className="mt-12 text-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => router.push("/billing-info")}
                className="bg-transparent"
              >
                Direct Billing Information
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-t border-border bg-muted/30 py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-balance">Frequently Asked Questions</h2>
                <p className="mt-4 text-muted-foreground">
                  Have more questions?{" "}
                  <Link href="/faq" className="text-primary hover:underline">
                    Visit our full FAQ page
                  </Link>
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Support CTA */}
        <section className="border-t border-border py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-balance">Still Have Questions?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our support team is here to help you choose the perfect plan for your business.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" onClick={() => router.push("/contact")}>
                  Contact Support
                </Button>
                <Button variant="outline" size="lg" onClick={() => router.push("/support")} className="bg-transparent">
                  Visit Help Center
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
