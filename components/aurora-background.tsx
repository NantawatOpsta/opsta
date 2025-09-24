"use client"

import { useEffect, useState } from "react"

export function AuroraBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Aurora Layer 1 - Bright Purple/Pink */}
      <div className="absolute inset-0 opacity-90">
        <div className="aurora-gradient-1 absolute inset-0 animate-aurora-1" />
      </div>

      {/* Aurora Layer 2 - Bright Blue/Cyan */}
      <div className="absolute inset-0 opacity-80">
        <div className="aurora-gradient-2 absolute inset-0 animate-aurora-2" />
      </div>

      {/* Aurora Layer 3 - Bright Green/Yellow */}
      <div className="absolute inset-0 opacity-70">
        <div className="aurora-gradient-3 absolute inset-0 animate-aurora-3" />
      </div>

      <div className="absolute inset-0 bg-background/10" />
    </div>
  )
}
