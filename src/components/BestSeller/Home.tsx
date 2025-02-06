import { useState } from 'react';
import { Search, ShoppingCart, User, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchBar from '../Input/SearchBar';
export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="w-full">
      {/* Announcement Bar */}
      <div className="w-full bg-[#f13c20] text-white  py-4 px-4 text-center">
        <strong className="text-[16px]">🎉 Order 2+ items to SAVE 10% using code: TRC10</strong>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://trendingcustom.com/cdn/shop/t/57/assets/logo.svg?v=75357380592425913601684321072"
              alt="External Image"
              width={200}
            />
          </div>

          {/* Search Bar */}
          <div className="flex-grow max-w-2xl">
            <div className="relative">
              <SearchBar />
              <Search className="absolute right-3 top-2.5 text-gray-400" />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center gap-6">
            <Link to="#" className="text-gray-600 hover:text-[#F04B23]">
              Reviews
            </Link>
            <Link to="#" className="text-gray-600 hover:text-[#F04B23]">
              Reward
            </Link>
            <Link to="#" className="text-gray-600 hover:text-[#F04B23]">
              Track Order
            </Link>
            <select className="text-gray-600 hover:text-[#F04B23] bg-transparent">
              <option>USD</option>
            </select>
            <Heart className="text-gray-600 hover:text-[#F04B23] cursor-pointer" />
            <User className="text-gray-600 hover:text-[#F04B23] cursor-pointer" />
            <ShoppingCart className="text-gray-600 hover:text-[#F04B23] cursor-pointer" />
          </div>
        </div>

        {/* Trust Badge */}

        {/* Main Navigation */}
        <nav className="flex items-center justify-center gap-8 mt-4 ">
          <Link to="/" className=" hover:text-[#F04B23]/80">
            Home
          </Link>
          <Link to="/BestSeller" className="text-red-500 hover:text-[#F04B23]">
            Best Sellers
          </Link>
          <Link to="#" className="text-gray-600 hover:text-[#F04B23]">
            New Arrivals
          </Link>
          <Link to="#" className="text-gray-600 hover:text-[#F04B23]">
            Occasions
          </Link>
          <Link to="#" className="text-gray-600 hover:text-[#F04B23]">
            Recipients
          </Link>
          <Link to="#" className="text-gray-600 hover:text-[#F04B23]">
            Products
          </Link>
          <Link to="#" className="text-gray-600 hover:text-[#F04B23]">
            Gift Cards
          </Link>
          <Link to="#" className="text-gray-600 hover:text-[#F04B23]">
            🎁 Gift Finder
          </Link>
        </nav>
      </div>
    </header>
  );
}
