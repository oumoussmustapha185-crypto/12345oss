import Link from "next/link"
import { Zap } from "lucide-react"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
        <Zap className="h-5 w-5 text-primary-foreground" fill="currentColor" />
      </div>
      <span className="text-xl font-bold text-foreground">PixelForge AI</span>
    </Link>
  )
}
