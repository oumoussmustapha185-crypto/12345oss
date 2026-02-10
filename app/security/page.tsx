import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Lock, Eye, Server } from "lucide-react"

export default function SecurityPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-balance">Security & Privacy</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Your data security and privacy are our top priorities
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <Shield className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h2 className="text-xl font-semibold">Enterprise-Grade Security</h2>
                  <p className="mt-2 text-muted-foreground">
                    We use industry-standard encryption and security protocols to protect your data at rest and in
                    transit. All sensitive data is encrypted using AES-256 encryption.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Lock className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h2 className="text-xl font-semibold">Secure Authentication</h2>
                  <p className="mt-2 text-muted-foreground">
                    We implement multi-factor authentication, secure password hashing, and OAuth 2.0 for third-party
                    integrations to ensure only authorized users can access your account.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Eye className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h2 className="text-xl font-semibold">Privacy First</h2>
                  <p className="mt-2 text-muted-foreground">
                    We never sell your data. Your designs, images, and business information remain completely private
                    and are never shared with third parties without your explicit consent.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Server className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h2 className="text-xl font-semibold">Reliable Infrastructure</h2>
                  <p className="mt-2 text-muted-foreground">
                    Our platform is hosted on enterprise-grade cloud infrastructure with 99.9% uptime SLA, automated
                    backups, and disaster recovery procedures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
