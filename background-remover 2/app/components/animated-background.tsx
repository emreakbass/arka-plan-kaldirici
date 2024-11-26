'use client'

import { useEffect, useRef } from 'react'

export function AnimatedBackground() {
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

    // Create particles
    const particles: Array<{
      x: number
      y: number
      radius: number
      speed: number
      opacity: number
    }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 20 + 10,
        speed: Math.random() * 0.2 + 0.1,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.y -= particle.speed
        if (particle.y + particle.radius < 0) {
          particle.y = canvas.height + particle.radius
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />
}

