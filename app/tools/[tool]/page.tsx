"use client"

import { useParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ToolPage() {
  const params = useParams()
  const toolName = (params.tool as string)?.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-balance">{toolName}</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              This tool is coming soon as part of our comprehensive POD toolkit.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/pricing">
                <Button size="lg">View Pricing</Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" size="lg" className="bg-transparent">
                  Go to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
