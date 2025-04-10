"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/offers", label: "Offers" },
    { href: "/feedback", label: "Feedback" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-amber-200 bg-[#f8f3e9]/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-amber-900">HALL-12</span>
          <span className="text-xl font-medium text-amber-700">Canteen</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-amber-800 hover:text-amber-900 transition-colors",
                pathname === route.href && "font-medium text-amber-900",
              )}
            >
              {route.label}
            </Link>
          ))}
          <Button asChild className="bg-amber-600 hover:bg-amber-700">
            <Link href="/feedback">Give Feedback</Link>
          </Button>
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6 text-amber-900" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-[#f8f3e9]">
            <div className="flex items-center justify-between mb-6">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <span className="text-2xl font-bold text-amber-900">HALL-12</span>
                <span className="text-xl font-medium text-amber-700">Canteen</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6 text-amber-900" />
              </Button>
            </div>
            <nav className="flex flex-col gap-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-amber-800 hover:text-amber-900 transition-colors py-2 border-b border-amber-200",
                    pathname === route.href && "font-medium text-amber-900",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {route.label}
                </Link>
              ))}
              <Button asChild className="mt-4 bg-amber-600 hover:bg-amber-700">
                <Link href="/feedback" onClick={() => setIsOpen(false)}>
                  Give Feedback
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
