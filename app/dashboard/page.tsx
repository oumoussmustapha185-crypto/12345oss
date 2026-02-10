"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard/layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Upload, Key, X, Download, Trash2, CheckCircle2 } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"

export default function DashboardPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [apiKey, setApiKey] = useState("")
  const [hasValidApiKey, setHasValidApiKey] = useState(false)
  const [apiKeyInput, setApiKeyInput] = useState("")
  const [showApiKeyDialog, setShowApiKeyDialog] = useState(false)
  const [apiKeyError, setApiKeyError] = useState("")
  const [numberOfImages, setNumberOfImages] = useState("")
  const [showOptionalPrompt, setShowOptionalPrompt] = useState(false)
  const [prompt, setPrompt] = useState("")
  const [uploadedImages, setUploadedImages] = useState<string[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImages, setGeneratedImages] = useState<Array<{ id: string; url: string }>>([])

  useEffect(() => {
    // Development mode: No auth gate - allow direct access
    const savedApiKey = localStorage.getItem("geminiApiKey")
    if (savedApiKey && savedApiKey.trim() !== "") {
      setApiKey(savedApiKey)
      setApiKeyInput(savedApiKey)
      setHasValidApiKey(true)
    } else {
      setApiKey("")
      setHasValidApiKey(false)
      setShowApiKeyDialog(true)
    }

    const savedGeneratedImages = localStorage.getItem("generatedImages")
    if (savedGeneratedImages) {
      setGeneratedImages(JSON.parse(savedGeneratedImages))
    }
  }, [router])

  const handleSaveApiKey = () => {
    setApiKeyError("")

    // CASE 2: User cleared the input - DELETE the key from storage
    if (!apiKeyInput || apiKeyInput.trim() === "") {
      try {
        localStorage.removeItem("geminiApiKey")
        setApiKey("")
        setHasValidApiKey(false)
        setApiKeyError("")
        setShowApiKeyDialog(false)

        toast({
          title: "API Key Removed",
          description: "API Key has been deleted from storage",
        })
      } catch (error) {
        console.error("Error removing API Key:", error)
        toast({
          title: "Error",
          description: "Failed to remove API Key",
          variant: "destructive",
        })
      }
      return
    }

    // Validate key length
    if (apiKeyInput.trim().length < 10) {
      setApiKeyError("API Key appears to be invalid (too short)")
      toast({
        title: "Error",
        description: "API Key appears to be invalid",
        variant: "destructive",
      })
      return
    }

    // CASE 1 & 3: Save the new key (replaces old key if exists)
    try {
      const trimmedKey = apiKeyInput.trim()
      localStorage.setItem("geminiApiKey", trimmedKey)
      setApiKey(trimmedKey)
      setHasValidApiKey(true)
      setApiKeyError("")
      setShowApiKeyDialog(false)

      toast({
        title: "Success",
        description: "API Key saved successfully and is ready to use",
      })
    } catch (error) {
      console.error("Error saving API Key:", error)
      setApiKeyError("Failed to save API Key")
      toast({
        title: "Error",
        description: "Failed to save API Key. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleDialogChange = (open: boolean) => {
    if (!open && !hasValidApiKey && (!apiKeyInput || apiKeyInput.trim() === "")) {
      setApiKeyError("You must enter an API key to continue")
      return
    }
    if (open) {
      setApiKeyError("")
    }
    setShowApiKeyDialog(open)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      const fileArray = Array.from(files)
      const readers = fileArray.map((file) => {
        return new Promise<string>((resolve) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result as string)
          reader.readAsDataURL(file)
        })
      })

      Promise.all(readers).then((images) => {
        setUploadedImages((prev) => [...prev, ...images])
      })
    }
  }

  const handleRemoveImage = (index: number) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (value === "") {
      setNumberOfImages("")
      return
    }

    const numValue = Number.parseInt(value, 10)
    if (isNaN(numValue)) return

    if (numValue >= 1 && numValue <= 50) {
      setNumberOfImages(value)
    }
  }

  const handleGenerate = async () => {
    if (!hasValidApiKey || !apiKey || apiKey.trim() === "") {
      toast({
        title: "API Key Required",
        description: "Please enter your Gemini API Key to generate images.",
        variant: "destructive",
      })
      setShowApiKeyDialog(true)
      return
    }

    if (!numberOfImages) {
      toast({
        title: "Number Required",
        description: "Please enter the number of images to generate (1-50).",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)

    try {
      const response = await fetch("/api/generate-images", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          geminiApiKey: apiKey.trim(),
          baseImage: uploadedImages.length > 0 ? uploadedImages[0] : null,
          imagesCount: Number.parseInt(numberOfImages, 10),
          prompt: prompt.trim() || null,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate images")
      }

      const newImages = data.images.map((url: string, i: number) => ({
        id: `img-${Date.now()}-${i}`,
        url,
      }))

      const updatedImages = [...generatedImages, ...newImages]
      setGeneratedImages(updatedImages)
      localStorage.setItem("generatedImages", JSON.stringify(updatedImages))

      toast({
        title: "Images Generated",
        description: `Successfully generated ${data.total} of ${data.requested} image(s).`,
      })

      if (data.errors && data.errors.length > 0) {
        toast({
          title: "Some images failed",
          description: `${data.errors.length} image(s) could not be generated.`,
          variant: "destructive",
        })
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "An unexpected error occurred"
      toast({
        title: "Generation Failed",
        description: message,
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  const handleDownloadImage = (imageUrl: string, imageId: string) => {
    // Handle base64 data URLs properly
    if (imageUrl.startsWith("data:")) {
      const link = document.createElement("a")
      link.href = imageUrl
      link.download = `pixelforge-${imageId}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else {
      // For regular URLs, fetch and download
      fetch(imageUrl)
        .then((res) => res.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob)
          const link = document.createElement("a")
          link.href = url
          link.download = `pixelforge-${imageId}.png`
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          URL.revokeObjectURL(url)
        })
    }
  }

  const handleDeleteImage = (imageId: string) => {
    const updatedImages = generatedImages.filter((img) => img.id !== imageId)
    setGeneratedImages(updatedImages)
    localStorage.setItem("generatedImages", JSON.stringify(updatedImages))
  }

  const isGenerateDisabled =
    !hasValidApiKey ||
    !apiKey ||
    apiKey.trim() === "" ||
    !numberOfImages ||
    numberOfImages === "" ||
    Number.parseInt(numberOfImages) < 1 ||
    Number.parseInt(numberOfImages) > 50

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-4xl space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-balance">Generate Image</h1>
          <p className="mt-2 text-muted-foreground">
            Create unique AI-powered designs for your print-on-demand products.
          </p>
        </div>

        <Card className="border-primary/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-5 w-5 text-primary" />
                  Gemini API Key
                </CardTitle>
                <CardDescription className="flex items-center gap-2 mt-1">
                  {hasValidApiKey && apiKey && apiKey.trim() !== "" ? (
                    <>
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>API Key is configured and ready</span>
                    </>
                  ) : (
                    <span>Required to generate images</span>
                  )}
                </CardDescription>
              </div>
              <Button variant="outline" onClick={() => setShowApiKeyDialog(true)}>
                <Key className="mr-2 h-4 w-4" />
                {hasValidApiKey ? "Update API Key" : "Enter API Key"}
              </Button>
            </div>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Image Generation Settings
            </CardTitle>
            <CardDescription>Configure your image generation parameters</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="num-images">Number of Images (1-50)</Label>
              <Input
                id="num-images"
                type="number"
                min="1"
                max="50"
                placeholder="Enter number (1-50)"
                value={numberOfImages}
                onChange={handleNumberChange}
              />
              {numberOfImages && (Number.parseInt(numberOfImages) < 1 || Number.parseInt(numberOfImages) > 50) && (
                <p className="text-xs text-destructive">Please enter a value between 1 and 50</p>
              )}
              <p className="text-xs text-muted-foreground">Enter a value between 1 and 50</p>
            </div>

            {!showOptionalPrompt ? (
              <Button variant="outline" className="w-full bg-transparent" onClick={() => setShowOptionalPrompt(true)}>
                Add Prompt (Optional)
              </Button>
            ) : (
              <div className="space-y-2">
                <Label htmlFor="prompt">Prompt (Optional)</Label>
                <Textarea
                  id="prompt"
                  placeholder="Describe the design you want... (optional)"
                  rows={4}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="image-upload">Upload Images</Label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileUpload}
                className="hidden"
              />
              <Button
                variant="outline"
                onClick={() => document.getElementById("image-upload")?.click()}
                className="w-full justify-start bg-transparent"
              >
                <Upload className="mr-2 h-4 w-4" />
                Choose Images from Device
              </Button>

              {uploadedImages.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {uploadedImages.map((img, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`Upload ${index + 1}`}
                        className="h-20 w-20 rounded object-cover border border-border"
                      />
                      <button
                        onClick={() => handleRemoveImage(index)}
                        className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        type="button"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Button onClick={handleGenerate} disabled={isGenerateDisabled || isGenerating} className="w-full" size="lg">
              {isGenerating ? (
                <>
                  <Sparkles className="mr-2 h-5 w-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Generate Image
                </>
              )}
            </Button>

            {isGenerateDisabled && !isGenerating && (
              <p className="text-xs text-muted-foreground text-center">
                {!hasValidApiKey || !apiKey || apiKey.trim() === ""
                  ? "Please enter your Gemini API key to continue"
                  : "Please enter number of images (1-50)"}
              </p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Generated Images</CardTitle>
            <CardDescription>Your generated images will appear here</CardDescription>
          </CardHeader>
          <CardContent>
            {generatedImages.length === 0 ? (
              <div className="flex min-h-[300px] items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/30">
                {isGenerating ? (
                  <div className="text-center">
                    <Sparkles className="mx-auto h-12 w-12 animate-pulse text-primary" />
                    <p className="mt-4 text-sm text-muted-foreground">Generating your designs...</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <Sparkles className="mx-auto h-12 w-12 text-muted-foreground" />
                    <p className="mt-4 text-sm text-muted-foreground">No images generated yet</p>
                    <p className="mt-2 text-xs text-muted-foreground">Configure settings and click generate</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {generatedImages.map((img) => (
                  <div key={img.id} className="group relative rounded-lg border border-border overflow-hidden bg-muted">
                    <img src={img.url || "/placeholder.svg"} alt="Generated" className="h-40 w-full object-cover" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <Button size="sm" variant="secondary" onClick={() => handleDownloadImage(img.url, img.id)}>
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => handleDeleteImage(img.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Dialog open={showApiKeyDialog} onOpenChange={handleDialogChange}>
        <DialogContent
          className="sm:max-w-md"
          onInteractOutside={(e) => {
            if (!hasValidApiKey) {
              e.preventDefault()
              setApiKeyError("You must enter an API key to continue")
            }
          }}
          onEscapeKeyDown={(e) => {
            if (!hasValidApiKey) {
              e.preventDefault()
              setApiKeyError("You must enter an API key to continue")
            }
          }}
        >
          <DialogHeader>
            <DialogTitle>Enter Gemini API Key</DialogTitle>
            <DialogDescription>
              Your API key is required to generate images. Get yours from Google AI Studio.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="api-key">API Key</Label>
              <Input
                id="api-key"
                type="password"
                placeholder="Enter your Gemini API key"
                value={apiKeyInput}
                onChange={(e) => {
                  setApiKeyInput(e.target.value)
                  setApiKeyError("")
                }}
              />
              {apiKeyError && <p className="text-xs text-destructive">{apiKeyError}</p>}
            </div>
            <Button onClick={handleSaveApiKey} className="w-full">
              Save API Key
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  )
}
