import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">HALL-12 Canteen</h3>
            <p className="mb-4">Serving delicious meals to NIT students with love and care.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-white">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/offers" className="hover:text-white">
                  Special Offers
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="hover:text-white">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p>HALL-12 Canteen</p>
              <p>NIT Campus</p>
              <p>Email: bibekyadav00@gmail.com</p>
              <p className="mt-2">Managed by: Bibek Yadav</p>
            </address>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} HALL-12 Canteen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
