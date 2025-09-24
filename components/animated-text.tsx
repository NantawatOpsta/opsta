"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  splitType?: "chars" | "words"
  staggerDelay?: number
}

export function AnimatedText({
  text,
  className = "",
  delay = 0,
  duration = 0.6,
  splitType = "chars",
  staggerDelay = 50,
}: AnimatedTextProps) {
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
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const splitText =
    splitType === "chars" ? text.split("").map((char, i) => (char === " " ? "\u00A0" : char)) : text.split(" ")

  return (
    <div ref={ref} className={className}>
      {splitText.map((item, index) => (
        <span
          key={index}
          className="inline-block"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: `all ${duration}s ease-out`,
            transitionDelay: `${delay + index * staggerDelay}ms`,
          }}
        >
          {item}
          {splitType === "words" && index < splitText.length - 1 && " "}
        </span>
      ))}
    </div>
  )
}
