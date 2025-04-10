import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Clock, Tag } from "lucide-react"

export default function OffersPage() {
  const offers = [
    {
      id: 1,
      title: "Mutton Biryani with Coke",
      description: "Delicious Mutton Biryani served with raita and a refreshing Coke",
      originalPrice: "₹220",
      offerPrice: "₹120",
      image: "/images/mutton_biryani.jpg",
      validUntil: "April 13, 2025",
      isNew: true,
    },
    // {
    //   id: 2,
    //   title: "Lunch Special",
    //   description: "Veg Thali with Basmati Rice, Dal Makhani, Mixed Veg, and Roti",
    //   originalPrice: "₹120",
    //   offerPrice: "₹99",
    //   image: "/images/lunch-special.jpg",
    //   validUntil: "May 15, 2025",
    //   isNew: false,
    // },
    // {
    //   id: 3,
    //   title: "Evening Snack Deal",
    //   description: "Buy any 2 snacks and get a free cold drink",
    //   originalPrice: "Varies",
    //   offerPrice: "Free Drink",
    //   image: "/images/snack-deal.jpg",
    //   validUntil: "Ongoing",
    //   isNew: false,
    // },
    // {
    //   id: 4,
    //   title: "Weekend Special",
    //   description: "20% off on all Chicken and Paneer main course items on weekends",
    //   originalPrice: "Menu Price",
    //   offerPrice: "20% Off",
    //   image: "/images/weekend-special.jpg",
    //   validUntil: "Every Saturday & Sunday",
    //   isNew: true,
    // },
    // {
    //   id: 5,
    //   title: "Student Meal Deal",
    //   description: "Show your student ID and get a special discount on full meals",
    //   originalPrice: "₹65",
    //   offerPrice: "₹55",
    //   image: "/images/student-meal.jpg",
    //   validUntil: "Valid throughout the semester",
    //   isNew: false,
    // },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-amber-900 mb-2">Special Offers</h1>
        <p className="text-amber-800 mb-8">
          Take advantage of our special deals and discounts designed for NIT students
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <Card key={offer.id} className="overflow-hidden border-amber-200 h-full flex flex-col">
              <div className="relative h-48">
                <Image src={offer.image || "/placeholder.svg"} alt={offer.title} fill className="object-cover" />
                {offer.isNew && <Badge className="absolute top-2 right-2 bg-amber-600">New</Badge>}
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-amber-900">{offer.title}</CardTitle>
                <CardDescription className="text-amber-700">{offer.description}</CardDescription>
              </CardHeader>
              <CardContent className="pb-2 flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <Tag className="h-4 w-4 text-amber-600" />
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-amber-700 line-through">{offer.originalPrice}</span>
                    <span className="font-bold text-amber-900">{offer.offerPrice}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-amber-600" />
                  <span className="text-sm text-amber-700">Valid until: {offer.validUntil}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">Claim Offer</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-amber-50 p-6 rounded-lg border border-amber-200">
          <h2 className="text-xl font-bold text-amber-900 mb-4">Terms & Conditions</h2>
          <ul className="list-disc list-inside space-y-2 text-amber-800">
            <li>All offers are valid for NIT students only</li>
            <li>Management reserves the right to modify or withdraw any offer without prior notice</li>
            <li>Special weekend offers are valid only on Saturdays and Sundays</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
