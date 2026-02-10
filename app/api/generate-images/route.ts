import { NextResponse } from "next/server"

const DEFAULT_PROMPT = `Create a unique, high-quality, visually striking design suitable for print-on-demand products such as t-shirts, mugs, and posters. The design should be bold, colorful, commercially appealing, and have a transparent or clean background. Focus on strong composition, vivid colors, and professional quality suitable for merchandise.`

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { geminiApiKey, baseImage, imagesCount, prompt } = body

    // Validate API key
    if (!geminiApiKey || typeof geminiApiKey !== "string" || geminiApiKey.trim().length < 10) {
      return NextResponse.json(
        { error: "A valid Gemini API key is required." },
        { status: 400 }
      )
    }

    // Validate image count
    const count = Number(imagesCount)
    if (!count || count < 1 || count > 50) {
      return NextResponse.json(
        { error: "imagesCount must be a number between 1 and 50." },
        { status: 400 }
      )
    }

    const finalPrompt = prompt && prompt.trim().length > 0 ? prompt.trim() : DEFAULT_PROMPT

    const generatedImages: string[] = []
    const errors: string[] = []

    for (let i = 0; i < count; i++) {
      try {
        const image = await generateSingleImage({
          apiKey: geminiApiKey.trim(),
          prompt: finalPrompt,
          baseImage: baseImage || null,
          index: i,
        })

        if (image) {
          generatedImages.push(image)
        }
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Unknown error"
        console.error(`[generate-images] Failed to generate image ${i + 1}:`, message)
        errors.push(`Image ${i + 1}: ${message}`)
      }
    }

    if (generatedImages.length === 0) {
      return NextResponse.json(
        {
          error: "Failed to generate any images. Please verify your API key and try again.",
          details: errors,
        },
        { status: 500 }
      )
    }

    return NextResponse.json({
      images: generatedImages,
      total: generatedImages.length,
      requested: count,
      errors: errors.length > 0 ? errors : undefined,
    })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal server error"
    console.error("[generate-images] Unhandled error:", message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

async function generateSingleImage({
  apiKey,
  prompt,
  baseImage,
  index,
}: {
  apiKey: string
  prompt: string
  baseImage: string | null
  index: number
}): Promise<string> {
  const parts: Array<Record<string, unknown>> = []

  // Add variation to prompt for each image to get diverse results
  const variedPrompt = `${prompt}\n\nVariation ${index + 1}: Create a unique variation with different composition, color palette, and artistic interpretation. Make this distinctly different from other variations.`

  parts.push({ text: variedPrompt })

  // If user uploaded a base image, include it
  if (baseImage) {
    // Extract base64 data and mime type from data URL
    const matches = baseImage.match(/^data:(.+);base64,(.+)$/)
    if (matches && matches.length === 3) {
      parts.push({
        inlineData: {
          mimeType: matches[1],
          data: matches[2],
        },
      })
    }
  }

  const requestBody = {
    contents: [
      {
        parts,
      },
    ],
    generationConfig: {
      responseModalities: ["TEXT", "IMAGE"],
    },
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody),
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    const errorMessage =
      errorData?.error?.message || `Gemini API returned status ${response.status}`
    throw new Error(errorMessage)
  }

  const data = await response.json()

  // Extract image from response
  const candidates = data?.candidates
  if (!candidates || candidates.length === 0) {
    throw new Error("No candidates returned from Gemini API")
  }

  const responseParts = candidates[0]?.content?.parts
  if (!responseParts || responseParts.length === 0) {
    throw new Error("No parts in Gemini API response")
  }

  // Find the image part in the response
  for (const part of responseParts) {
    if (part.inlineData && part.inlineData.data) {
      const mimeType = part.inlineData.mimeType || "image/png"
      return `data:${mimeType};base64,${part.inlineData.data}`
    }
  }

  throw new Error("No image data found in Gemini API response")
}
