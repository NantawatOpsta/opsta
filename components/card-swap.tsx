"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"

interface CardSwapProps {
  images: Array<{
    src: string
    alt: string
    title: string
  }>
  interval?: number
}

export function CardSwap({ images, interval = 4000 }: CardSwapProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        setIsAnimating(false)
      }, 300) // Half of the animation duration
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  const handleIndicatorClick = (index: number) => {
    if (index !== currentIndex && !isAnimating) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex(index)
        setIsAnimating(false)
      }, 300)
    }
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative h-[400px] perspective-1000">
        <div
          className={`relative w-full h-full transition-transform duration-600 ease-in-out transform-style-preserve-3d ${
            isAnimating ? "rotate-y-180" : ""
          }`}
        >
          {/* Front Card */}
          <Card className="absolute inset-0 w-full h-full bg-transparent border-0 shadow-none backface-hidden">
            <div className="relative w-full h-full">
              <Image
                src={images[currentIndex]?.src || "/placeholder.svg"}
                alt={images[currentIndex]?.alt || "Dashboard"}
                fill
                className="object-cover rounded-lg"
                priority
              />
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-medium">
                {images[currentIndex]?.title}
              </div>
            </div>
          </Card>

          {/* Back Card (for smooth transition) */}
          <Card className="absolute inset-0 w-full h-full bg-transparent border-0 shadow-none backface-hidden rotate-y-180">
            <div className="relative w-full h-full">
              <Image
                src={images[(currentIndex + 1) % images.length]?.src || "/placeholder.svg"}
                alt={images[(currentIndex + 1) % images.length]?.alt || "Dashboard"}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-medium">
                {images[(currentIndex + 1) % images.length]?.title}
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-primary scale-110" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            disabled={isAnimating}
          />
        ))}
      </div>
    </div>
  )
}
