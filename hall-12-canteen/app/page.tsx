import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import FoodCarousel from "@/components/food-carousel"
import SpecialOffers from "@/components/special-offers"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative mb-12 overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-amber-800/70 z-10"></div>
        <Image
          src="/images/hero-image.jpg"
          alt="HALL-12 Canteen"
          width={1200}
          height={500}
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-start p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Welcome to HALL-12 Canteen</h1>
          <p className="text-xl text-white/90 mb-6 max-w-xl">
            Serving delicious meals to NIT students with love and care
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
              <Link href="/menu">View Menu</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white hover:bg-white/20"
            >
              <Link href="/feedback">Give Feedback</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Food Carousel */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-amber-900 mb-6">Our Specialties</h2>
        <FoodCarousel />
      </section>

      {/* Special Offers */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-amber-900">Special Offers</h2>
          <Link href="/offers" className="text-amber-700 hover:text-amber-800 flex items-center">
            View All <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <SpecialOffers />
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="text-3xl font-bold text-amber-900 mb-6">Quick Links</h2>
        <Tabs defaultValue="menu" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-amber-100">
            <TabsTrigger value="menu" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
              Menu
            </TabsTrigger>
            <TabsTrigger value="offers" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
              Offers
            </TabsTrigger>
            <TabsTrigger value="feedback" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white">
              Feedback
            </TabsTrigger>
          </TabsList>
          <TabsContent value="menu" className="bg-white p-6 rounded-b-lg border border-amber-200">
            <h3 className="text-xl font-bold text-amber-900 mb-4">Our Menu</h3>
            <p className="mb-4 text-amber-800">
              Explore our diverse menu offering breakfast, lunch, dinner, and snacks at affordable prices.
            </p>
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/menu">View Full Menu</Link>
            </Button>
          </TabsContent>
          <TabsContent value="offers" className="bg-white p-6 rounded-b-lg border border-amber-200">
            <h3 className="text-xl font-bold text-amber-900 mb-4">Current Offers</h3>
            <p className="mb-4 text-amber-800">
              Check out our special discounts and combo offers available for students.
            </p>
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/offers">View All Offers</Link>
            </Button>
          </TabsContent>
          <TabsContent value="feedback" className="bg-white p-6 rounded-b-lg border border-amber-200">
            <h3 className="text-xl font-bold text-amber-900 mb-4">Your Opinion Matters</h3>
            <p className="mb-4 text-amber-800">Help us improve by sharing your experience and suggestions.</p>
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/feedback">Give Feedback</Link>
            </Button>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
