"use client"

import { useEffect, useState } from "react"

export function DarkVeil() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 pointer-events-none dark:opacity-100 opacity-0 transition-opacity duration-1000 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-violet-800/30 to-indigo-900/40" />

      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96 bg-gradient-radial from-purple-600/30 via-purple-800/20 to-transparent blur-3xl" />

      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-radial from-violet-600/25 via-purple-700/15 to-transparent blur-3xl" />

      <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-radial from-indigo-600/25 via-violet-700/15 to-transparent blur-3xl" />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-purple-500/20 via-violet-600/10 to-transparent blur-3xl animate-pulse" />

      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="purple-mesh" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M0 60L60 0H30L0 30M60 60V30L30 60"
                stroke="rgb(147 51 234 / 0.1)"
                strokeWidth="0.5"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#purple-mesh)" />
        </svg>
      </div>
    </div>
  )
}
