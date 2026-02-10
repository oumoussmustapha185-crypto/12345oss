import Link from "next/link"
import { Youtube, Instagram, Facebook, MessageCircle } from "lucide-react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"

export function Footer() {
  const quickLinks = [
    { name: "How It Works", href: "/how-it-works" },
    { name: "Comparison", href: "/comparison" },
    { name: "FAQ", href: "/faq" },
    { name: "Pricing", href: "/pricing" },
    { name: "Affiliate", href: "/affiliate" },
    { name: "Blog", href: "/blog" },
  ]

  const tools = [
    { name: "Amazon Merch", href: "/tools/amazon-merch" },
    { name: "Redbubble", href: "/tools/redbubble" },
    { name: "TeePublic", href: "/tools/teepublic" },
    { name: "Amazon Scraper", href: "/tools/amazon-scraper" },
    { name: "AI Design Generator", href: "/tools/ai-design-generator" },
  ]

  const support = [
    { name: "Help Center", href: "/help-center" },
    { name: "Contact", href: "/contact" },
    { name: "Refund Policy", href: "/refund-policy" },
    { name: "Security", href: "/security" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
  ]

  const socialLinks = [
    { name: "Facebook", href: "https://facebook.com", icon: Facebook },
    { name: "YouTube", href: "https://youtube.com", icon: Youtube },
    { name: "Instagram", href: "https://instagram.com", icon: Instagram },
    { name: "WhatsApp", href: "https://wa.me/your-number", icon: MessageCircle },
  ]

  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              AI-powered automation for Print-on-Demand sellers. Scale your business with intelligent tools.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={link.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <Link href="/signup">
                <Button size="sm" className="w-full sm:w-auto">
                  Signup
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" size="sm" className="w-full bg-transparent sm:w-auto">
                  Login
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Tools</h3>
            <ul className="space-y-3">
              {tools.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Support</h3>
            <ul className="space-y-3">
              {support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PixelForge AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
