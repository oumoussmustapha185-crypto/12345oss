"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Upload, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function VariationsPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [apiKey, setApiKey] = useState("")
  const [hasValidApiKey, setHasValidApiKey] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [artStyleImages, setArtStyleImages] = useState<string[]>([])
  const [nicheDesignImages, setNicheDesignImages] = useState<string[]>([])
  const [showIdeasInput, setShowIdeasInput] = useState(false)
  const [ideas, setIdeas] = useState("")
  const [generatedImages, setGeneratedImages] = useState<string[]>([])

  useEffect(() => {
    // Development mode: No auth gate - allow direct access
    const savedApiKey = localStorage.getItem("geminiApiKey")
    if (savedApiKey && savedApiKey.trim() !== "") {
      setApiKey(savedApiKey)
      setHasValidApiKey(true)
    } else {
      setApiKey("")
      setHasValidApiKey(false)
    }
  }, [router])

  const handleArtStyleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      const remaining = 50 - artStyleImages.length
      const fileArray = Array.from(files).slice(0, remaining)
      const readers = fileArray.map((file) => {
        return new Promise<string>((resolve) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result as string)
          reader.readAsDataURL(file)
        })
      })

      Promise.all(readers).then((images) => {
        setArtStyleImages((prev) => [...prev, ...images].slice(0, 50))
      })
    }
  }

  const handleNicheDesignsUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      const remaining = 50 - nicheDesignImages.length
      const fileArray = Array.from(files).slice(0, remaining)
      const readers = fileArray.map((file) => {
        return new Promise<string>((resolve) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result as string)
          reader.readAsDataURL(file)
        })
      })

      Promise.all(readers).then((images) => {
        setNicheDesignImages((prev) => [...prev, ...images].slice(0, 50))
      })
    }
  }

  const handleArtStyleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const files = e.dataTransfer.files
    if (files && files.length > 0) {
      const remaining = 50 - artStyleImages.length
      const fileArray = Array.from(files).slice(0, remaining)
      const readers = fileArray.map((file) => {
        return new Promise<string>((resolve) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result as string)
          reader.readAsDataURL(file)
        })
      })

      Promise.all(readers).then((images) => {
        setArtStyleImages((prev) => [...prev, ...images].slice(0, 50))
      })
    }
  }

  const handleNicheDesignsDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const files = e.dataTransfer.files
    if (files && files.length > 0) {
      const remaining = 50 - nicheDesignImages.length
      const fileArray = Array.from(files).slice(0, remaining)
      const readers = fileArray.map((file) => {
        return new Promise<string>((resolve) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result as string)
          reader.readAsDataURL(file)
        })
      })

      Promise.all(readers).then((images) => {
        setNicheDesignImages((prev) => [...prev, ...images].slice(0, 50))
      })
    }
  }

  const handleRemoveArtStyleImage = (index: number) => {
    setArtStyleImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleRemoveNicheDesignImage = (index: number) => {
    setNicheDesignImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleGenerate = () => {
    if (!hasValidApiKey || !apiKey || apiKey.trim() === "") {
      toast({
        title: "API Key Required",
        description: "Please add your Gemini API Key in the Generate Image page first.",
        variant: "destructive",
      })
      return
    }

    if (artStyleImages.length === 0 && nicheDesignImages.length === 0) {
      toast({
        title: "Images Required",
        description: "Please upload at least one image to generate variations.",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)

    console.log("[v0] Using Gemini API Key:", apiKey.substring(0, 10) + "...")

    setTimeout(() => {
      setIsGenerating(false)
      const mockImages = [
        "/generated-design-1.jpg",
        "/generated-design-2.jpg",
        "/generated-design-3.jpg",
        "/generated-design-4.jpg",
      ]
      setGeneratedImages((prev) => [...prev, ...mockImages])

      toast({
        title: "Variations Generated",
        description: "Successfully generated image variations.",
      })
    }, 2000)
  }

  const handleDownload = (image: string, index: number) => {
    const link = document.createElement("a")
    link.href = image
    link.download = `generated-image-${index + 1}.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleDeleteGenerated = (index: number) => {
    setGeneratedImages((prev) => prev.filter((_, i) => i !== index))
  }

  const isGenerateDisabled =
    !hasValidApiKey ||
    !apiKey ||
    apiKey.trim() === "" ||
    (artStyleImages.length === 0 && nicheDesignImages.length === 0)

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-balance">Generate Variations</h1>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* LEFT COLUMN - Art Style */}
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-lg">
                Art Style <span className="text-sm font-normal text-muted-foreground">(max 50)</span>
              </CardTitle>
              <p className="text-sm text-muted-foreground">{artStyleImages.length}/50</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <input
                id="art-style-upload"
                type="file"
                accept="image/*"
                multiple
                onChange={handleArtStyleUpload}
                className="hidden"
              />

              <div
                onDrop={handleArtStyleDrop}
                onDragOver={(e) => e.preventDefault()}
                onClick={() => document.getElementById("art-style-upload")?.click()}
                className="flex min-h-[200px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/30 p-6 transition-colors hover:bg-muted/50"
              >
                <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                <p className="text-sm font-medium text-center">Drag & drop or click to upload</p>
                <p className="text-xs text-muted-foreground text-center mt-1">Upload up to 50 images</p>
              </div>

              {artStyleImages.length > 0 && (
                <div className="grid grid-cols-4 gap-2">
                  {artStyleImages.map((img, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`Art Style ${index + 1}`}
                        className="aspect-square w-full rounded object-cover border border-border"
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleRemoveArtStyleImage(index)
                        }}
                        className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        type="button"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* RIGHT COLUMN - Niche Designs */}
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-lg">
                Niche Designs <span className="text-sm font-normal text-muted-foreground">(max 50)</span>
              </CardTitle>
              <p className="text-sm text-muted-foreground">{nicheDesignImages.length}/50</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <input
                id="niche-designs-upload"
                type="file"
                accept="image/*"
                multiple
                onChange={handleNicheDesignsUpload}
                className="hidden"
              />

              <div
                onDrop={handleNicheDesignsDrop}
                onDragOver={(e) => e.preventDefault()}
                onClick={() => document.getElementById("niche-designs-upload")?.click()}
                className="flex min-h-[200px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/30 p-6 transition-colors hover:bg-muted/50"
              >
                <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                <p className="text-sm font-medium text-center">Drag & drop or click to upload</p>
                <p className="text-xs text-muted-foreground text-center mt-1">Upload up to 50 images</p>
              </div>

              {nicheDesignImages.length > 0 && (
                <div className="grid grid-cols-4 gap-2">
                  {nicheDesignImages.map((img, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`Niche Design ${index + 1}`}
                        className="aspect-square w-full rounded object-cover border border-border"
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleRemoveNicheDesignImage(index)
                        }}
                        className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        type="button"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div>
          {!showIdeasInput ? (
            <Button variant="outline" onClick={() => setShowIdeasInput(true)} className="w-full">
              Add Your Ideas (Optional)
            </Button>
          ) : (
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <Label htmlFor="ideas">Your Ideas (Optional)</Label>
                  <Textarea
                    id="ideas"
                    placeholder="Describe any specific ideas, styles, or modifications you want..."
                    rows={4}
                    value={ideas}
                    onChange={(e) => setIdeas(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="flex justify-center">
          <Button
            onClick={handleGenerate}
            disabled={isGenerateDisabled || isGenerating}
            size="lg"
            className="w-full max-w-md"
          >
            {isGenerating ? "Generating..." : "Generate Image"}
          </Button>
        </div>

        {(!hasValidApiKey || !apiKey || apiKey.trim() === "") && (
          <Card className="border-destructive/50">
            <CardContent className="pt-6">
              <p className="text-center text-sm text-muted-foreground">
                Please add your Gemini API Key in the{" "}
                <Button variant="link" className="h-auto p-0 text-primary" onClick={() => router.push("/dashboard")}>
                  Generate Image
                </Button>{" "}
                page to enable generation.
              </p>
            </CardContent>
          </Card>
        )}

        {generatedImages.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Generated Images</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {generatedImages.map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg border border-border">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Generated ${index + 1}`}
                    className="aspect-square w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleDownload(image, index)}
                      className="h-8 text-xs"
                    >
                      Download
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDeleteGenerated(index)}
                      className="h-8 text-xs"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
