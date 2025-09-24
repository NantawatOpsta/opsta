"use client"

import { useEffect, useRef } from "react"

interface MetaBall {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

export function MetaBalls() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const metaBallsRef = useRef<MetaBall[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Initialize meta balls
    const numBalls = 5
    metaBallsRef.current = Array.from({ length: numBalls }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      radius: Math.random() * 100 + 50,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update positions
      metaBallsRef.current.forEach((ball) => {
        ball.x += ball.vx
        ball.y += ball.vy

        // Bounce off edges
        if (ball.x <= ball.radius || ball.x >= canvas.width - ball.radius) {
          ball.vx *= -1
        }
        if (ball.y <= ball.radius || ball.y >= canvas.height - ball.radius) {
          ball.vy *= -1
        }

        // Keep within bounds
        ball.x = Math.max(ball.radius, Math.min(canvas.width - ball.radius, ball.x))
        ball.y = Math.max(ball.radius, Math.min(canvas.height - ball.radius, ball.y))
      })

      // Create gradient for each ball
      metaBallsRef.current.forEach((ball) => {
        const gradient = ctx.createRadialGradient(ball.x, ball.y, 0, ball.x, ball.y, ball.radius)
        gradient.addColorStop(0, "rgba(59, 130, 246, 0.8)") // Blue with opacity
        gradient.addColorStop(0.5, "rgba(147, 51, 234, 0.4)") // Purple with opacity
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Apply blur and contrast filter for meta ball effect
      ctx.filter = "blur(20px) contrast(20)"
      ctx.globalCompositeOperation = "multiply"

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
      style={{ mixBlendMode: "multiply" }}
    />
  )
}
