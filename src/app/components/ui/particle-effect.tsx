"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

import { Particles } from "./particles"

export function ParticlesDemo() {
  const { theme } = useTheme()
  const [color, setColor] = useState("#00a420")

  useEffect(() => {
    setColor(theme === "dark" ? "#00a420" : "#00a420")
  }, [theme])

  return (
      <Particles
        className="absolute inset-0"
        quantity={200}
        ease={100}
        color={color}
        refresh
      />
  )
}
