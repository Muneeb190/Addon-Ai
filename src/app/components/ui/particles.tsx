"use client"

import { cn } from "@/lib/utils"
import React, { useEffect, useRef, useState, useCallback } from "react"

interface MousePosition {
  x: number
  y: number
}

function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return mousePosition
}

interface ParticlesProps {
  className?: string
  quantity?: number
  staticity?: number
  ease?: number
  size?: number
  refresh?: boolean
  color?: string
  vx?: number
  vy?: number
}

function hexToRgb(hex: string): number[] {
  hex = hex.replace("#", "")
  if (hex.length === 3) {
    hex = hex.split("" ).map((char) => char + char).join("")
  }
  const hexInt = parseInt(hex, 16)
  return [(hexInt >> 16) & 255, (hexInt >> 8) & 255, hexInt & 255]
}

const Particles: React.FC<ParticlesProps> = ({
  className = "",
  quantity = 100,
  size = 0.4,
  refresh = false,
  color = "#ffffff",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const context = useRef<CanvasRenderingContext2D | null>(null)
  const circles = useRef<Circle[]>([])
  const mousePosition = useMousePosition()
  const mouse = useRef({ x: 0, y: 0 })
  const canvasSize = useRef({ w: 0, h: 0 })
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1

  const initCanvas = useCallback(() => {
    resizeCanvas()
    drawParticles()
  }, [])

  const onMouseMove = useCallback(() => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect()
      const { w, h } = canvasSize.current
      const x = mousePosition.x - rect.left - w / 2
      const y = mousePosition.y - rect.top - h / 2
      if (x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2) {
        mouse.current = { x, y }
      }
    }
  }, [mousePosition])

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d")
    }
    initCanvas()
    animate()
    window.addEventListener("resize", initCanvas)
    return () => window.removeEventListener("resize", initCanvas)
  }, [color, initCanvas])

  useEffect(() => {
    onMouseMove()
  }, [mousePosition, onMouseMove])

  useEffect(() => {
    initCanvas()
  }, [refresh, initCanvas])

  type Circle = {
    x: number
    y: number
    translateX: number
    translateY: number
    size: number
    alpha: number
    targetAlpha: number
    dx: number
    dy: number
    magnetism: number
  }

  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      circles.current.length = 0
      canvasSize.current = {
        w: canvasContainerRef.current.offsetWidth,
        h: canvasContainerRef.current.offsetHeight,
      }
      canvasRef.current.width = canvasSize.current.w * dpr
      canvasRef.current.height = canvasSize.current.h * dpr
      canvasRef.current.style.width = `${canvasSize.current.w}px`
      canvasRef.current.style.height = `${canvasSize.current.h}px`
      context.current.scale(dpr, dpr)
    }
  }

  const drawParticles = () => {
    if (context.current) {
      context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h)
      for (let i = 0; i < quantity; i++) {
        drawCircle(circleParams())
      }
    }
  }

  const circleParams = (): Circle => ({
    x: Math.random() * canvasSize.current.w,
    y: Math.random() * canvasSize.current.h,
    translateX: 0,
    translateY: 0,
    size: Math.random() * 2 + size,
    alpha: 0,
    targetAlpha: Math.random() * 0.6 + 0.1,
    dx: (Math.random() - 0.5) * 0.1,
    dy: (Math.random() - 0.5) * 0.1,
    magnetism: 0.1 + Math.random() * 4,
  })

  const rgb = hexToRgb(color)

  const drawCircle = (circle: Circle) => {
    if (context.current) {
      context.current.beginPath()
      context.current.arc(circle.x, circle.y, circle.size, 0, 2 * Math.PI)
      context.current.fillStyle = `rgba(${rgb.join(",")}, ${circle.alpha})`
      context.current.fill()
    }
  }

  return (
    <div className={cn("pointer-events-none", className)} ref={canvasContainerRef}>
      <canvas ref={canvasRef} className="size-full" />
    </div>
  )
}

export { Particles }
function animate() {
  throw new Error("Function not implemented.")
}

