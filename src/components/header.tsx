

import { useState } from "react"
import { Search, ShoppingCart, User, Heart } from "lucide-react"

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="w-full">
      {/* Announcement Bar */}
      <div className="w-full bg-[#F04B23] text-white py-2 px-4 text-center">
        <p className="text-sm">🎉 Order 2+ items to SAVE 10% using code: TRC10</p>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
          <img src="https://trendingcustom.com/cdn/shop/t/57/assets/logo.svg?v=75357380592425913601684321072" alt="External Image" width={200} />
          </div>

          {/* Search Bar */}
          <div className="flex-grow max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for anything"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F04B23]"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-[#F04B23]">
              Reviews
            </a>
            <a href="#" className="text-gray-600 hover:text-[#F04B23]">
              Reward
            </a>
            <a href="#" className="text-gray-600 hover:text-[#F04B23]">
              Track Order
            </a>
            <select className="text-gray-600 hover:text-[#F04B23] bg-transparent">
              <option>USD</option>
            </select>
            <Heart className="text-gray-600 hover:text-[#F04B23] cursor-pointer" />
            <User className="text-gray-600 hover:text-[#F04B23] cursor-pointer" />
            <ShoppingCart className="text-gray-600 hover:text-[#F04B23] cursor-pointer" />
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center my-4">
          <p className="text-gray-600">
            Trusted by more than <span className="font-semibold">2 Million Customers</span> and{" "}
            <span className="font-semibold">750K 5-Star Reviews</span> ⭐⭐⭐⭐⭐
          </p>
        </div>

        {/* Main Navigation */}
        <nav className="flex items-center justify-center gap-8 mt-4">
          <a href="#" className="text-[#F04B23] hover:text-[#F04B23]/80">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-[#F04B23]">
            Best Sellers
          </a>
          <a href="#" className="text-gray-600 hover:text-[#F04B23]">
            New Arrivals
          </a>
          <a href="#" className="text-gray-600 hover:text-[#F04B23]">
            Occasions
          </a>
          <a href="#" className="text-gray-600 hover:text-[#F04B23]">
            Recipients
          </a>
          <a href="#" className="text-gray-600 hover:text-[#F04B23]">
            Products
          </a>
          <a href="#" className="text-gray-600 hover:text-[#F04B23]">
            Gift Cards
          </a>
          <a href="#" className="text-gray-600 hover:text-[#F04B23]">
            🎁 Gift Finder
          </a>
        </nav>
      </div>
    </header>
  )
}

