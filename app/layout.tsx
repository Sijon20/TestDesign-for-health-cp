import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/components/auth-provider"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HealthQuest - Gamified Health Learning",
  description: "Learn health topics through gamification",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <footer className="py-6 border-t">
              <div className="container mx-auto text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} HealthQuest. All rights reserved.
              </div>
            </footer>
          </div>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}



import './globals.css'