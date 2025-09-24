"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface FadeInSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right"
}

export function FadeInSection({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  direction = "up",
}: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: "-50px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const getTransform = () => {
    if (isVisible) return "translate(0, 0)"

    switch (direction) {
      case "up":
        return "translate(0, 40px)"
      case "down":
        return "translate(0, -40px)"
      case "left":
        return "translate(40px, 0)"
      case "right":
        return "translate(-40px, 0)"
      default:
        return "translate(0, 40px)"
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `all ${duration}s ease-out`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
