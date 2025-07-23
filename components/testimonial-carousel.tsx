"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    quote:
      "Thanks to Save the Children's education program, I can now go to school and learn. I want to be a doctor when I grow up so I can help others in my community.",
    name: "Amina",
    location: "Somalia",
    age: 12,
    image: "/images/testimonial-1.jpg",
  },
  {
    id: 2,
    quote:
      "After the earthquake, we lost everything. Save the Children provided us with shelter, food, and helped my children continue their education. They gave us hope when we needed it most.",
    name: "Maria",
    location: "Nepal",
    age: 35,
    image: "/images/testimonial-2.jpg",
  },
  {
    id: 3,
    quote:
      "The health workers taught my mother how to keep me healthy and make nutritious food. Now I'm not sick anymore and I can play with my friends.",
    name: "Carlos",
    location: "Guatemala",
    age: 7,
    image: "/images/testimonial-3.jpg",
  },
]

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000)
    return () => clearInterval(interval)
  }, [activeIndex, isAnimating])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0">
              <Card className="border-none shadow-none">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-4">
                      <Quote className="h-12 w-12 text-red-600/20 mb-4" />
                      <blockquote className="text-xl md:text-2xl font-medium mb-6 italic">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <p className="font-bold text-lg">
                          {testimonial.name}, {testimonial.age}
                        </p>
                        <p className="text-gray-600">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={cn("w-3 h-3 rounded-full transition-all", activeIndex === index ? "bg-red-600" : "bg-gray-300")}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  )
}
