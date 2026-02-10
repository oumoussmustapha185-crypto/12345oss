"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, User, Mail, Calendar, Clock, Shield, CreditCard, ArrowLeft } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"

export default function AccountSettingsPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [memberSince, setMemberSince] = useState("")
  const [lastVisit, setLastVisit] = useState("")
  const [showPasswordDialog, setShowPasswordDialog] = useState(false)
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")

  useEffect(() => {
    let memberDate = localStorage.getItem("memberSince")
    if (!memberDate) {
      memberDate = new Date().toISOString()
      localStorage.setItem("memberSince", memberDate)
    }
    setMemberSince(
      new Date(memberDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    )

    const now = new Date()
    setLastVisit(
      now.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    )
  }, [])

  const handleChangePassword = () => {
    setPasswordError("")

    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordError("All fields are required")
      return
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("New passwords do not match")
      return
    }

    if (newPassword.length < 8) {
      setPasswordError("New password must be at least 8 characters")
      return
    }

    toast({
      title: "Password Updated",
      description: "Your password has been successfully changed.",
    })

    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")
    setPasswordError("")
    setShowPasswordDialog(false)
  }

  const handleCancelPasswordChange = () => {
    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")
    setPasswordError("")
    setShowPasswordDialog(false)
  }

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={() => router.push("/dashboard")} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarFallback className="bg-primary text-lg text-primary-foreground">U</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold">Welcome</h2>
                <p className="text-muted-foreground">Guest User</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Account Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="bg-transparent" onClick={() => setShowPasswordDialog(true)}>
              Change Password
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Account Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-muted-foreground">Account Status</Label>
              <div className="flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="font-medium text-green-500">Active</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                Member Since
              </Label>
              <div className="rounded-lg border border-border bg-muted/30 px-4 py-3">
                <p className="font-medium">{memberSince}</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                Last Visit
              </Label>
              <div className="rounded-lg border border-border bg-muted/30 px-4 py-3">
                <p className="font-medium">{lastVisit}</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-muted-foreground">Account Role</Label>
              <div className="rounded-lg border border-border bg-muted/30 px-4 py-3">
                <p className="font-medium">Guest User</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" />
              Subscription Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-muted-foreground">Current Subscription</Label>
              <div className="rounded-lg border border-primary/30 bg-primary/10 px-4 py-3">
                <span className="font-medium">Early Access Plan</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={() => router.push("/pricing")} className="bg-transparent">
                View Plans
              </Button>
              <Button variant="outline" onClick={() => router.push("/billing-info")} className="bg-transparent">
                Billing Page
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog open={showPasswordDialog} onOpenChange={setShowPasswordDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Change Password</DialogTitle>
            <DialogDescription>Enter your current password and choose a new one.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input
                id="current-password"
                type="password"
                placeholder="Enter current password"
                value={currentPassword}
                onChange={(e) => {
                  setCurrentPassword(e.target.value)
                  setPasswordError("")
                }}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input
                id="new-password"
                type="password"
                placeholder="Enter new password (min 8 characters)"
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value)
                  setPasswordError("")
                }}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value)
                  setPasswordError("")
                }}
              />
            </div>
            {passwordError && <p className="text-xs text-destructive">{passwordError}</p>}
            <div className="flex gap-3">
              <Button onClick={handleChangePassword} className="flex-1">
                Update Password
              </Button>
              <Button variant="outline" onClick={handleCancelPasswordChange} className="flex-1 bg-transparent">
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  )
}
