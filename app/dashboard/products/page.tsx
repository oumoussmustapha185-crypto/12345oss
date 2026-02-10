"use client"

import { DashboardLayout } from "@/components/dashboard/layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function ProductsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Products</h1>
            <p className="mt-2 text-muted-foreground">Manage your print-on-demand products across all stores</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Product
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Coming Soon</CardTitle>
            <CardDescription>Product management features are being developed</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              You'll soon be able to create, edit, and manage all your products from one central location.
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
