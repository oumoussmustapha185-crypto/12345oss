import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Etsy Store Owner",
      content:
        "PrintFlow increased my productivity by 500%. I went from creating 10 products a week to 50+ with better quality.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Amazon Merch Seller",
      content:
        "The AI understands trends better than I do. My sales tripled in the first month of using this platform.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "POD Agency Owner",
      content:
        "Game-changer for our agency. We can now handle 3x more clients without adding staff. ROI was immediate.",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "Redbubble Artist",
      content:
        "I was skeptical about AI-generated designs, but the quality is incredible. My store has never looked better.",
      rating: 5,
    },
  ]

  return (
    <section className="container py-20 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">What Sellers Are Saying</h2>
        <p className="text-balance text-lg text-muted-foreground">
          Join hundreds of successful POD sellers growing their business with PrintFlow
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border-border bg-card">
            <CardContent className="p-6">
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-4 text-muted-foreground">{testimonial.content}</p>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
