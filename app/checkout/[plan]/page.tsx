"use client"

import { useRouter, useParams } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Check, CreditCard } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CheckoutPage() {
  const router = useRouter()
  const params = useParams()
  const [isProcessing, setIsProcessing] = useState(false)

  const planName = (params.plan as string)?.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())

  const planDetails: Record<string, { price: string; features: string[] }> = {
    Starter: { price: "$29/month", features: ["100 AI generations", "Basic support", "1 store"] },
    Professional: { price: "$79/month", features: ["500 AI generations", "Priority support", "5 stores"] },
    Enterprise: { price: "$199/month", features: ["Unlimited generations", "24/7 support", "Unlimited stores"] },
    "Amazon Starter Bundle": { price: "$49/month", features: ["200 AI generations", "Amazon tools", "3 stores"] },
    "Amazon Advanced Bundle": {
      price: "$149/month",
      features: ["1000 AI generations", "Advanced tools", "Unlimited stores"],
    },
    "Multi Platform Bundle": {
      price: "$249/month",
      features: ["Unlimited generations", "All platforms", "Enterprise support"],
    },
  }

  const plan = planDetails[planName] || { price: "$29/month", features: [] }

  const handlePayment = () => {
    setIsProcessing(true)
    setTimeout(() => {
      alert("Payment processing... (Demo mode)")
      setIsProcessing(false)
      router.push("/dashboard")
    }, 2000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <Button variant="ghost" onClick={() => router.back()} className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Pricing
            </Button>

            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Complete Your Purchase</CardTitle>
                <CardDescription>Review your plan and complete payment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="rounded-lg border border-border bg-muted/30 p-6">
                  <h3 className="text-xl font-semibold">{planName}</h3>
                  <p className="mt-2 text-3xl font-bold text-primary">{plan.price}</p>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Payment Method</h4>
                  <div className="rounded-lg border border-border p-4">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Secure payment processing via Paddle</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full" size="lg" onClick={handlePayment} disabled={isProcessing}>
                  {isProcessing ? "Processing..." : "Complete Payment"}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  By continuing, you agree to our Terms of Service and Privacy Policy. You can cancel anytime.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
