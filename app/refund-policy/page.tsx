import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold">Refund Policy</h1>
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm">Last updated: December 31, 2025</p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Our Commitment</h2>
              <p>
                At PrintFlow, we stand behind our service and want you to be completely satisfied. This Refund Policy
                explains our approach to refunds and cancellations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Free Trial</h2>
              <p>
                We offer a free trial period for new users to experience PrintFlow risk-free. No credit card is required
                for the trial, and you won't be charged until you choose a paid plan.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. Subscription Refunds</h2>
              <h3 className="text-xl font-semibold text-foreground">3.1 30-Day Money-Back Guarantee</h3>
              <p>
                If you're not satisfied with PrintFlow within the first 30 days of your paid subscription, we'll provide
                a full refund. Simply contact our support team with your reason for requesting a refund.
              </p>

              <h3 className="text-xl font-semibold text-foreground">3.2 After 30 Days</h3>
              <p>
                After the initial 30-day period, subscriptions are non-refundable. However, you can cancel at any time
                to prevent future charges.
              </p>

              <h3 className="text-xl font-semibold text-foreground">3.3 Partial Refunds</h3>
              <p>
                We do not offer partial refunds for unused time within a billing period. Your service remains active
                until the end of your current billing cycle after cancellation.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Cancellation Policy</h2>
              <p>You may cancel your subscription at any time through your account settings. Upon cancellation:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>You retain access until the end of your current billing period</li>
                <li>No further charges will be made</li>
                <li>Your data remains accessible for 30 days after cancellation</li>
                <li>Products already published to your stores remain yours</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Service Issues</h2>
              <p>
                If you experience technical issues that prevent you from using PrintFlow, contact our support team
                immediately. We may extend your subscription or provide a refund depending on the circumstances.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Violation of Terms</h2>
              <p>
                If your account is terminated due to violation of our Terms of Service, you are not eligible for a
                refund for any remaining subscription period.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Payment Disputes</h2>
              <p>
                Before disputing a charge with your payment provider, please contact our support team. We're happy to
                clarify charges and resolve any billing issues directly.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. Refund Process</h2>
              <p>To request a refund:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Contact support@printflow.com within 30 days of purchase</li>
                <li>Include your account email and reason for the refund</li>
                <li>We'll process eligible refunds within 5-10 business days</li>
                <li>Refunds are issued to the original payment method</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. Exceptions</h2>
              <p>This policy does not affect your statutory rights under applicable consumer protection laws.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">10. Policy Changes</h2>
              <p>
                We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately
                upon posting. Continued use of the service constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">11. Contact Us</h2>
              <p>
                Questions about refunds or cancellations? Contact our support team at support@printflow.com or through
                our help center.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
