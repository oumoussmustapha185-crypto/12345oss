import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, FileText, Shield, RefreshCw } from "lucide-react"

export default function BillingInfoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-balance">Direct Billing Information</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to know about our billing process
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CreditCard className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Billing Process</CardTitle>
                  <CardDescription>How we handle your payments</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    All payments are processed securely through Paddle, our trusted payment processor. We accept all
                    major credit cards, PayPal, and wire transfers for Enterprise plans.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Your subscription will automatically renew at the end of each billing cycle. You'll receive an email
                    notification 7 days before renewal.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Invoices</CardTitle>
                  <CardDescription>Access your billing history</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Invoices are automatically generated for each payment and sent to your registered email address. You
                    can also download them from your account dashboard.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    All invoices include detailed breakdowns of charges, taxes, and payment methods used.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Taxes</CardTitle>
                  <CardDescription>Tax handling and compliance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Prices shown do not include applicable taxes. Tax rates are calculated at checkout based on your
                    billing address and local regulations.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    We're fully compliant with VAT, GST, and sales tax regulations in all supported regions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <RefreshCw className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Refund Policy</CardTitle>
                  <CardDescription>Our money-back guarantee</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    We offer a 30-day money-back guarantee on all plans. If you're not satisfied, contact support within
                    30 days of purchase for a full refund.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Refunds are typically processed within 5-7 business days and will appear in your original payment
                    method.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Need Help with Billing?</CardTitle>
                <CardDescription>Our support team is here to assist you</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  If you have any questions about billing, invoices, or need to update your payment information, please
                  contact our support team at{" "}
                  <a href="mailto:billing@pixelforge.ai" className="text-primary hover:underline">
                    billing@pixelforge.ai
                  </a>{" "}
                  or visit our{" "}
                  <a href="/support" className="text-primary hover:underline">
                    help center
                  </a>
                  .
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
