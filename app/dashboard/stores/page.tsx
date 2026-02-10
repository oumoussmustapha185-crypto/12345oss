"use client"

import { DashboardLayout } from "@/components/dashboard/layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function StoresPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Stores</h1>
            <p className="mt-2 text-muted-foreground">Connect and manage your print-on-demand stores</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Connect Store
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Coming Soon</CardTitle>
            <CardDescription>Store integration features are being developed</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Connect your Etsy, Redbubble, Printful, and other POD stores to manage everything in one place.
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
