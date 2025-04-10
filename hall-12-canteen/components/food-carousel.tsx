"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function FoodCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const foodItems = [
    {
      id: 1,
      name: "Masala Dosa",
      description: "Crispy rice crepe filled with spiced potato filling",
      image: "/images/masala-dosa.jpg",
      price: "₹50",
    },
    {
      id: 2,
      name: "Chicken Biryani",
      description: "Fragrant basmati rice cooked with tender chicken and aromatic spices",
      image: "/images/chicken-biryani.jpg",
      price: "₹100",
    },
    {
      id: 3,
      name: "Paneer Butter Masala",
      description: "Soft paneer cubes in a rich and creamy tomato gravy",
      image: "/images/paneer-butter-masala.jpg",
      price: "₹75",
    },
    {
      id: 4,
      name: "Chilli Chicken",
      description: "Spicy and tangy chicken starter with bell peppers and onions",
      image: "/images/chilli-chicken.jpg",
      price: "₹80",
    },
    {
      id: 5,
      name: "Veg Fried Rice",
      description: "Stir-fried rice with mixed vegetables and soy sauce",
      image: "/images/veg-fried-rice.jpg",
      price: "₹60",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === foodItems.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? foodItems.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 3000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, currentIndex])

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {foodItems.map((item) => (
            <div key={item.id} className="min-w-full">
              <Card className="border-amber-200 overflow-hidden">
                <div className="relative h-64 md:h-80">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-amber-900">{item.name}</h3>
                    <span className="font-bold text-amber-700">{item.price}</span>
                  </div>
                  <p className="text-amber-800">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 border-amber-200 hover:bg-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6 text-amber-900" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 border-amber-200 hover:bg-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6 text-amber-900" />
        <span className="sr-only">Next slide</span>
      </Button>

      <div className="flex justify-center mt-4 gap-2">
        {foodItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-colors",
              currentIndex === index ? "bg-amber-600" : "bg-amber-300",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
