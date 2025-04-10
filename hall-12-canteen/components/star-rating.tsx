"use client"

import { useState } from "react"
import { Star } from "lucide-react"

interface StarRatingProps {
  value: number
  onChange: (value: number) => void
  max?: number
}

export function StarRating({ value, onChange, max = 5 }: StarRatingProps) {
  const [hoverValue, setHoverValue] = useState(0)

  return (
    <div className="flex">
      {[...Array(max)].map((_, index) => {
        const starValue = index + 1
        return (
          <button
            type="button"
            key={index}
            className="p-1 focus:outline-none"
            onClick={() => onChange(starValue)}
            onMouseEnter={() => setHoverValue(starValue)}
            onMouseLeave={() => setHoverValue(0)}
          >
            <Star
              className={`h-6 w-6 ${
                (hoverValue || value) >= starValue ? "fill-amber-500 text-amber-500" : "text-amber-300"
              }`}
            />
          </button>
        )
      })}
    </div>
  )
}
