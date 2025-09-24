"use client"

import { useEffect, useState } from "react"

interface BackgroundTransitionProps {
  className?: string
  overlay?: boolean
}

export function BackgroundTransition({ className = "", overlay = true }: BackgroundTransitionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Technology-related background images
  const techImages = [
    "/modern-data-center-servers-with-blue-lighting-tech.jpg",
    "/cloud-computing-network-infrastructure-with-glowin.jpg",
    "/kubernetes-container-orchestration-visualization-w.jpg",
    "/cybersecurity-digital-shield-with-circuit-board-pa.jpg",
    "/devops-pipeline-automation-with-flowing-data-strea.jpg",
    "/hybrid-cloud-architecture-with-interconnected-node.jpg",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % techImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [techImages.length])

  return (
    <div className={`absolute inset-0 ${className}`}>
      {techImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-80" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      {overlay && <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />}
    </div>
  )
}
