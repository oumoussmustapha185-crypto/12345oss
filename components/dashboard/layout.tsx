"use client"

import type React from "react"

import { useState } from "react"
import { DashboardSidebar } from "./sidebar"
import { DashboardHeader } from "./header"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="lg:pl-64">
        <DashboardHeader onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}
