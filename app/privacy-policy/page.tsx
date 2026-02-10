import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm">Last updated: December 31, 2025</p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
              <p>
                PrintFlow ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information when you use our AI-powered
                Print-on-Demand automation platform.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-foreground">2.1 Personal Information</h3>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Name and email address</li>
                <li>Account credentials</li>
                <li>Payment information</li>
                <li>Store connection details</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground">2.2 Usage Data</h3>
              <p>We automatically collect certain information about your device and usage patterns:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>IP address and browser type</li>
                <li>Pages visited and time spent</li>
                <li>Products created and published</li>
                <li>Performance metrics and analytics</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground">2.3 Store Data</h3>
              <p>
                When you connect your Print-on-Demand stores, we access necessary data to provide our services,
                including product information, sales data, and store settings.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your transactions and manage your account</li>
                <li>Generate AI-powered designs and content</li>
                <li>Analyze trends and optimize platform performance</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your requests and provide customer support</li>
                <li>Detect and prevent fraud or security issues</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Data Sharing and Disclosure</h2>
              <p>We do not sell your personal information. We may share your information only in these situations:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>With your consent or at your direction</li>
                <li>With service providers who assist in our operations</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your information, including encryption,
                secure servers, and regular security audits. However, no method of transmission over the internet is
                100% secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Your Rights and Choices</h2>
              <p>You have the right to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Access and update your personal information</li>
                <li>Delete your account and associated data</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of your data</li>
                <li>Object to certain data processing</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Data Retention</h2>
              <p>
                We retain your information for as long as necessary to provide our services and comply with legal
                obligations. You can request deletion of your data at any time through your account settings.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your own. We ensure
                appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. Children's Privacy</h2>
              <p>
                Our services are not intended for users under 18 years of age. We do not knowingly collect information
                from children under 18.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by
                posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">11. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at privacy@printflow.com or through
                our contact page.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
