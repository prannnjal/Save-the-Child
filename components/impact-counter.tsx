"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface ImpactCounterProps {
  end: number
  suffix?: string
  duration?: number
  title: string
  description: string
  icon?: React.ReactNode
}

export default function ImpactCounter({
  end,
  suffix = "",
  duration = 2,
  title,
  description,
  icon,
}: ImpactCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

        const nextCount = Math.floor(progress * end)
        if (nextCount !== countRef.current) {
          countRef.current = nextCount
          setCount(nextCount)
        }

        if (progress < 1) {
          window.requestAnimationFrame(step)
        } else {
          setCount(end)
        }
      }

      window.requestAnimationFrame(step)
    }
  }, [inView, end, duration])

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K"
    }
    return num.toString()
  }

  return (
    <div ref={ref} className="text-center p-6 bg-white rounded-lg shadow-sm">
      {icon && <div className="flex justify-center mb-4">{icon}</div>}
      <div className="text-4xl font-bold text-red-600 mb-2">
        {formatNumber(count)}
        {suffix}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}
