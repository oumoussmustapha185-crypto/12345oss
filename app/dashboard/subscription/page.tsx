"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard/layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Sparkles, Zap, Crown } from "lucide-react"

export default function SubscriptionPage() {
  const router = useRouter()
  const [userName, setUserName] = useState("")

  useEffect(() => {
    // Development mode: No auth gate - allow direct access
    const email = localStorage.getItem("userEmail")
    if (email) {
      setUserName(email.split("@")[0])
    }
  }, [])

  const handleChoosePlan = (planId: string) => {
    // Paddle checkout integration
    // Replace with actual Paddle product IDs when ready
    console.log("[v0] Opening Paddle checkout for plan:", planId)

    // Example Paddle.js integration (needs Paddle script loaded)
    if (typeof window !== "undefined" && (window as any).Paddle) {
      ;(window as any).Paddle.Checkout.open({
        product: planId,
        email: localStorage.getItem("userEmail") || "",
      })
    } else {
      alert("Paddle checkout will open here. Please add your Paddle product IDs.")
    }
  }

  const plans = [
    {
      id: "starter",
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for trying out the platform",
      icon: Sparkles,
      features: [
        "100 image generations per month",
        "10 variations per image",
        "1024x1024 resolution",
        "Basic AI styles",
        "Email support",
      ],
    },
    {
      id: "pro",
      name: "Pro",
      price: "$79",
      period: "/month",
      description: "For serious POD creators",
      icon: Zap,
      popular: true,
      features: [
        "500 image generations per month",
        "Unlimited variations",
        "Up to 2048x2048 resolution",
        "Advanced AI styles",
        "Priority support",
        "Commercial license",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For agencies and teams",
      icon: Crown,
      features: [
        "Unlimited generations",
        "Unlimited variations",
        "Up to 4096x4096 resolution",
        "Custom AI training",
        "Dedicated support",
        "Full commercial license",
        "API access",
      ],
    },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-balance">Subscription & Plans</h1>
          <p className="mt-2 text-muted-foreground">
            Choose the plan that fits your needs. Powered by Paddle for secure payments.
          </p>
        </div>

        {/* Available Plans */}
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.icon
            const isPopular = plan.popular
            return (
              <Card key={plan.id} className={`flex flex-col ${isPopular ? "border-primary shadow-lg" : ""}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      <CardTitle>{plan.name}</CardTitle>
                    </div>
                    {isPopular && <span className="text-xs font-semibold text-primary">POPULAR</span>}
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-4 w-4 shrink-0 text-accent" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardContent className="pt-0">
                  <Button
                    className="w-full"
                    variant={isPopular ? "default" : "outline"}
                    onClick={() => handleChoosePlan(plan.id)}
                  >
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Payment Information */}
        <Card>
          <CardHeader>
            <CardTitle>Secure Payment</CardTitle>
            <CardDescription>All payments are processed securely through Paddle</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border border-border p-4">
              <p className="text-sm font-medium">No upfront costs</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Paddle only charges fees when you receive a payment. No hidden costs or monthly platform fees.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
