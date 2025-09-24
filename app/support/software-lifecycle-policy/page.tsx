import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SoftwareLifecyclePolicySection } from "@/components/software-lifecycle-policy-section"

export const metadata: Metadata = {
  title: "Software Lifecycle Policy - Opsta",
  description: "Learn about Opsta's software lifecycle policy, support terms, and maintenance schedules.",
}

export default function SoftwareLifecyclePolicyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <SoftwareLifecyclePolicySection />
      </div>
      <Footer />
    </main>
  )
}
