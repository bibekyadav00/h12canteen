"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { StarRating } from "@/components/star-rating"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { submitFeedback } from "@/lib/actions"

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    foodRating: 0,
    serviceRating: 0,
    cleanlinessRating: 0,
    mealType: [],
    suggestions: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRatingChange = (name: string, value: number) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => {
      const currentMealTypes = [...(prev.mealType as string[])]
      if (currentMealTypes.includes(value)) {
        return { ...prev, mealType: currentMealTypes.filter((type) => type !== value) }
      } else {
        return { ...prev, mealType: [...currentMealTypes, value] }
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await submitFeedback(formData)
      toast({
        title: "Feedback Submitted",
        description: "Thank you for your valuable feedback!",
      })
      // Reset form
      setFormData({
        foodRating: 0,
        serviceRating: 0,
        cleanlinessRating: 0,
        mealType: [],
        suggestions: "",
      })
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your feedback. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-amber-900 mb-2">Share Your Feedback</h1>
        <p className="text-amber-800 mb-6">
          Your opinion helps us improve our service and food quality. Thank you for taking the time to share your
          thoughts!
        </p>

        <Card className="bg-white border-amber-200">
          <CardHeader className="bg-amber-50 border-b border-amber-200">
            <CardTitle className="text-amber-900">Feedback Form</CardTitle>
            <CardDescription>Please rate your experience at HALL-12 Canteen</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-amber-900">Rate Your Experience</h3>

                <div className="space-y-2">
                  <Label className="text-amber-900">Food Quality</Label>
                  <StarRating
                    value={formData.foodRating}
                    onChange={(value) => handleRatingChange("foodRating", value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-amber-900">Service Quality</Label>
                  <StarRating
                    value={formData.serviceRating}
                    onChange={(value) => handleRatingChange("serviceRating", value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-amber-900">Cleanliness</Label>
                  <StarRating
                    value={formData.cleanlinessRating}
                    onChange={(value) => handleRatingChange("cleanlinessRating", value)}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-amber-900">
                    Which meals do you usually have at our canteen? (Select all that apply)
                  </Label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="breakfast"
                        checked={(formData.mealType as string[]).includes("breakfast")}
                        onCheckedChange={() => handleCheckboxChange("breakfast")}
                      />
                      <Label htmlFor="breakfast" className="text-amber-800">
                        Breakfast
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="lunch"
                        checked={(formData.mealType as string[]).includes("lunch")}
                        onCheckedChange={() => handleCheckboxChange("lunch")}
                      />
                      <Label htmlFor="lunch" className="text-amber-800">
                        Lunch
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="dinner"
                        checked={(formData.mealType as string[]).includes("dinner")}
                        onCheckedChange={() => handleCheckboxChange("dinner")}
                      />
                      <Label htmlFor="dinner" className="text-amber-800">
                        Dinner
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="snacks"
                        checked={(formData.mealType as string[]).includes("snacks")}
                        onCheckedChange={() => handleCheckboxChange("snacks")}
                      />
                      <Label htmlFor="snacks" className="text-amber-800">
                        Snacks
                      </Label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="suggestions" className="text-amber-900">
                  Additional Comments or Suggestions
                </Label>
                <Textarea
                  id="suggestions"
                  name="suggestions"
                  value={formData.suggestions}
                  onChange={handleInputChange}
                  placeholder="Please share any additional feedback or suggestions for improvement"
                  className="min-h-[100px] border-amber-200 focus-visible:ring-amber-500"
                />
              </div>

              <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Feedback"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <Toaster />
    </div>
  )
}
