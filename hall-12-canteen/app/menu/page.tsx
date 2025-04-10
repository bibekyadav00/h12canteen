"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function MenuPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const menuCategories = [
    { id: "breakfast", name: "Breakfast" },
    { id: "starters", name: "Starters" },
    { id: "rice", name: "Special Rice & Meals" },
    { id: "veg", name: "Veg Main Course" },
    { id: "chicken", name: "Chicken Main Course" },
    { id: "fish", name: "Fish & Egg Items" },
    { id: "drinks", name: "Drinks & Dessert" },
    { id: "roti", name: "Roti & Paratha" },
    { id: "rolls", name: "Rolls & Chowmein" },
    { id: "snacks", name: "Snacks & Pakora" },
  ]

  const menuItems = {
    breakfast: [
      { name: "Puri Sabzi (4 poori)", price: "20" },
      { name: "Bread Omelette", price: "30" },
      { name: "Omelette (2 eggs)", price: "25" },
      { name: "Plain Maggi", price: "25" },
      { name: "Aloo Paratha (1pc)", price: "15" },
      { name: "CornFlakes with milk", price: "25" },
      { name: "Poha", price: "30" },
      { name: "Upma (Suji/Sewai)", price: "30" },
      { name: "Utthapam (3pc)", price: "25" },
      { name: "Plain Dosa", price: "40" },
      { name: "Masala Dosa", price: "50" },
      { name: "Idli (3pc)", price: "25" },
      { name: "Pasta", price: "20" },
      { name: "Chola Bhatura (2pc)", price: "30" },
      { name: "Sandwich (veg)", price: "20" },
      { name: "Tea/Coffee/milk", price: "10" },
    ],
    starters: [
      { name: "Paneer Tikka (6pc)", price: "80" },
      { name: "Chilly Paneer (6pc)", price: "80" },
      { name: "Veg Manchurian (6pc)", price: "60" },
      { name: "Pappad (2pc)", price: "12" },
      { name: "Green Salad", price: "20" },
      { name: "Chilly Chicken (6pc)", price: "80" },
      { name: "Chicken 65 (8pc)", price: "90" },
      { name: "Chicken Tikka (8pc)", price: "100" },
      { name: "Chicken Manchurian (6pc)", price: "70" },
    ],
    rice: [
      { name: "Plain Rice", price: "30" },
      { name: "Jeera Rice", price: "35" },
      { name: "Pulao (Veg, Non-Veg)", price: "50" },
      { name: "Veg Fried Rice", price: "60" },
      { name: "Egg Fried Rice", price: "65" },
      { name: "Chicken Fried Rice", price: "70" },
      { name: "Mixed Fried Rice", price: "80" },
      { name: "Veg Biryani", price: "60" },
      { name: "Chicken Biryani", price: "100" },
      { name: "Mutton Biryani", price: "130" },
      { name: "Veg Meal (Miniket Rice)", price: "40" },
      { name: "Veg Meal (Basmati Rice)", price: "45" },
      { name: "Egg Meal (Miniket Rice)", price: "50" },
      { name: "Egg Meal (Basmati Rice)", price: "55" },
      { name: "Chicken Meal (Miniket Rice)", price: "60" },
      { name: "Chicken Meal (Basmati Rice)", price: "65" },
    ],
    veg: [
      { name: "Dal Tadka/Dal Fry", price: "30" },
      { name: "Chana Masala", price: "30" },
      { name: "Mixed Veg", price: "30" },
      { name: "Bhindi Fry", price: "30" },
      { name: "Gobi Aloo", price: "25" },
      { name: "Capsicum Aloo", price: "30" },
      { name: "Aloo Matar", price: "30" },
      { name: "Rajma Masala", price: "30" },
      { name: "Dal Makhani", price: "40" },
      { name: "Mushroom Butter Masala", price: "90" },
      { name: "Veg Manchurian Gravy", price: "60" },
      { name: "Kadhai Paneer", price: "65" },
      { name: "Saahi Paneer", price: "75" },
      { name: "Matar Paneer", price: "65" },
      { name: "Paneer Do Pyaza", price: "75" },
      { name: "Palak Paneer", price: "60" },
      { name: "Butter Paneer Masala", price: "50" },
      { name: "Paneer Bhurji", price: "70" },
      { name: "Tandoori Paneer Masala", price: "70" },
      { name: "Paneer Tikka Masala", price: "70" },
      { name: "Chilli Paneer Gravy", price: "80" },
    ],
    chicken: [
      { name: "Chicken Bharta (half)", price: "50" },
      { name: "Chicken Bharta (full)", price: "90" },
      { name: "Chicken Kasa (1pc)", price: "30" },
      { name: "Chicken Do Pyaza (half)", price: "45" },
      { name: "Chicken Do Pyaza (full)", price: "75" },
      { name: "Butter Chicken (half)", price: "50" },
      { name: "Butter Chicken (full)", price: "85" },
      { name: "Kadhai Chicken (half)", price: "40" },
      { name: "Kadhai Chicken (Full)", price: "70" },
      { name: "Chicken Chow (Half)", price: "40" },
      { name: "Chicken Chow (Full)", price: "70" },
      { name: "Hyd. Chicken (Half)", price: "40" },
      { name: "Hyd. Chicken (Full)", price: "75" },
      { name: "Chicken Curry (Half)", price: "40" },
      { name: "Chicken Curry (Full)", price: "65" },
      { name: "Tandoori Chicken", price: "80" },
      { name: "Chicken Tikka Masala", price: "85" },
      { name: "Garlic Chicken", price: "75" },
      { name: "Lemon Chicken", price: "75" },
      { name: "Chicken Stew", price: "30" },
    ],
    fish: [
      { name: "Fish Curry (1pc)", price: "25" },
      { name: "Fish Fry (1pc)", price: "25" },
      { name: "Pomfret Masala (1pc)", price: "150" },
      { name: "Sorse Illish (1pc)", price: "250" },
      { name: "Egg Curry (2pc)", price: "25" },
      { name: "Egg Kossa (2pc)", price: "25" },
      { name: "Egg Bharta (2pc)", price: "25" },
      { name: "Egg Bhujia/Bhurji", price: "30" },
      { name: "Boiled egg Bhurji", price: "30" },
      { name: "Egg Masala", price: "25" },
      { name: "Egg Tadka", price: "35" },
    ],
    drinks: [
      { name: "COLD DRINKS", price: "MRP" },
      { name: "Curd (Sweet, Plain)", price: "MRP" },
      { name: "ICE-CREAM", price: "MRP" },
      { name: "Lassi", price: "30" },
      { name: "Brownie", price: "Varies" },
      { name: "Pastry", price: "Varies" },
      { name: "Juices", price: "Varies" },
      { name: "Sweets", price: "Varies" },
      { name: "Chocolate pancake", price: "Varies" },
      { name: "Banana pancake", price: "Varies" },
    ],
    roti: [
      { name: "Tawa Roti (100% Atta)", price: "5" },
      { name: "Tawa Roti Butter", price: "8" },
      { name: "Tandoori Roti (1pc)", price: "10" },
      { name: "Tandoori Butter Roti", price: "13" },
      { name: "Tandoori Naan (1pc)", price: "20" },
      { name: "Tandoori Butter Naan (1pc)", price: "23" },
      { name: "Plain Paratha (1pc)", price: "10" },
      { name: "Laccha Paratha (1pc)", price: "15" },
      { name: "Paneer Paratha", price: "20" },
      { name: "Sattu Paratha", price: "15" },
      { name: "Chicken Paratha", price: "25" },
      { name: "Aloo Paratha", price: "15" },
      { name: "Onion Paratha", price: "15" },
    ],
    rolls: [
      { name: "Veg Chowmein", price: "40" },
      { name: "Egg Chowmein", price: "50" },
      { name: "Chicken Chowmein", price: "55" },
      { name: "Egg Chicken Chowmein", price: "65" },
      { name: "Egg Roll (single egg)", price: "30" },
      { name: "Paneer Roll", price: "35" },
      { name: "Chicken Roll", price: "35" },
      { name: "Egg Chicken Roll", price: "45" },
      { name: "Chicken Cheese Roll", price: "55" },
      { name: "Paneer Sandwich", price: "50" },
      { name: "Corn Cheese Sandwich", price: "50" },
      { name: "Chicken Sandwich", price: "50" },
      { name: "Chicken Cheese Sandwich", price: "60" },
      { name: "Cheese Maggi", price: "35" },
      { name: "Egg bhujia/Poached Maggi", price: "35" },
    ],
    snacks: [
      { name: "Veg Burger", price: "60" },
      { name: "Chicken Burger", price: "75" },
      { name: "French fry", price: "50" },
      { name: "Samosa (1pc)", price: "10" },
      { name: "Kachori (1pc)", price: "10" },
      { name: "Veg Pizza", price: "100" },
      { name: "Chicken Pizza", price: "120" },
      { name: "Veg Pakora (1pc)", price: "10" },
      { name: "Onion Pakora (1pc)", price: "10" },
      { name: "Paneer Pakora (1pc)", price: "10" },
      { name: "Chicken Pakora (1pc)", price: "10" },
      { name: "Fish Fingers (1pc)", price: "30" },
      { name: "Chicken Lollipop (1pc)", price: "25" },
      { name: "Pau Bhaji (1pc)", price: "40" },
    ],
  }

  const filteredMenuItems = (category: string) => {
    if (!menuItems[category as keyof typeof menuItems]) return []

    return menuItems[category as keyof typeof menuItems].filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-amber-900 mb-2">Our Menu</h1>
          <p className="text-amber-800">Explore our wide range of delicious food options at affordable prices</p>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500" />
          <Input
            type="search"
            placeholder="Search menu items..."
            className="pl-10 border-amber-200 focus-visible:ring-amber-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Card className="bg-white border-amber-200 overflow-hidden">
          <CardHeader className="bg-amber-50 border-b border-amber-200">
            <CardTitle className="text-amber-900">HALL-12 Canteen Menu</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Tabs defaultValue="breakfast" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 bg-amber-100 rounded-none h-auto">
                {menuCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-amber-600 data-[state=active]:text-white py-2"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {menuCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredMenuItems(category.id).map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 border-b border-amber-100">
                        <span className="font-medium text-amber-900">{item.name}</span>
                        <span className="font-bold text-amber-700">
                          {item.price.startsWith("₹") ? item.price : `₹${item.price}`}
                        </span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        <div className="mt-8 bg-amber-50 p-6 rounded-lg border border-amber-200">
          <h2 className="text-xl font-bold text-amber-900 mb-4">Special Notes</h2>
          <ul className="list-disc list-inside space-y-2 text-amber-800">
            <li>Prices are subject to change without prior notice</li>
            <li>Mutton items are available only on Sundays</li>
            <li>Special discounts available for bulk orders</li>
            <li>For any special dietary requirements, please speak to our staff</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
