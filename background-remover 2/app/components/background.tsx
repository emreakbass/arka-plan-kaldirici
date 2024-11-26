'use client'

import { useEffect, useRef } from 'react'

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Create circles
    const circles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 30 + 10,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      color: `rgba(66, 133, 244, ${Math.random() * 0.1})`
    }))

    // Animation
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      circles.forEach(circle => {
        // Move
        circle.x += circle.dx
        circle.y += circle.dy

        // Bounce off walls
        if (circle.x < 0 || circle.x > canvas.width) circle.dx *= -1
        if (circle.y < 0 || circle.y > canvas.height) circle.dy *= -1

        // Draw
        ctx.beginPath()
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
        ctx.fillStyle = circle.color
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: 0.7 }}
      />
    </div>
  )
}

