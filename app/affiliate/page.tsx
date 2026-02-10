import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Users, TrendingUp, Gift } from "lucide-react"
import Link from "next/link"

export default function AffiliatePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold text-balance sm:text-5xl lg:text-6xl">Join Our Affiliate Program</h1>
              <p className="mt-6 text-lg text-muted-foreground text-balance">
                Earn generous commissions by referring Print-on-Demand sellers to PixelForge AI
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/signup">
                  <Button size="lg">Become an Affiliate</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="bg-transparent">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <DollarSign className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>30% Commission</CardTitle>
                  <CardDescription>Earn on every referral</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Get 30% recurring commission on all referrals for the lifetime of the customer
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>90-Day Cookie</CardTitle>
                  <CardDescription>Extended tracking window</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Your referral links are tracked for 90 days, maximizing your earning potential
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Real-Time Tracking</CardTitle>
                  <CardDescription>Monitor your earnings</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Access detailed analytics and track your commissions in real-time
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Gift className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Marketing Assets</CardTitle>
                  <CardDescription>Tools for success</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Get access to banners, landing pages, and email templates to boost conversions
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
