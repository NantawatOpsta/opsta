import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GetSupportSection } from "@/components/get-support-section"

export const metadata: Metadata = {
  title: "Get Support - Opsta",
  description: "Get technical support and assistance for Opsta's DevSecOps solutions and platforms.",
}

export default function GetSupportPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <GetSupportSection />
      </div>
      <Footer />
    </main>
  )
}
