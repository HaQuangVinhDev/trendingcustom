import { useState } from 'react';
import { Search, ShoppingCart, User, Heart, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchBar from '../Input/SearchBar';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Announcement Bar */}
      <div className="w-full bg-[#f13c20] text-white py-2 px-4 text-center">
        <strong className="text-sm md:text-base">🎉 Order 2+ items to SAVE 10% using code: TRC10</strong>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://trendingcustom.com/cdn/shop/t/57/assets/logo.svg?v=75357380592425913601684321072"
              alt="External Image"
              className="w-32 md:w-48 lg:w-56"
            />
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-gray-600 hover:text-[#F04B23]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={24} />
          </button>

          {/* Search Bar */}
          <div className="w-full lg:w-auto lg:flex-grow lg:max-w-2xl lg:mx-auto mt-4 lg:mt-0">
            <div className="relative">
              <SearchBar />
              <Search className="absolute right-3 top-2.5 text-gray-400" />
            </div>
          </div>

          {/* Navigation Items */}
          <div
            className={`w-full lg:w-auto flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 mt-4 lg:mt-0 ${
              isMenuOpen ? 'block' : 'hidden lg:flex'
            }`}
          >
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
            <div className="flex items-center gap-4">
              <Heart className="text-gray-600 hover:text-[#F04B23] cursor-pointer" />
              <User className="text-gray-600 hover:text-[#F04B23] cursor-pointer" />
              <ShoppingCart className="text-gray-600 hover:text-[#F04B23] cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center my-4">
          <p className="text-gray-600 text-sm md:text-base">
            Trusted by more than <span className="font-semibold">2 Million Customers</span> and{' '}
            <span className="font-semibold">750K 5-Star Reviews</span> ⭐⭐⭐⭐⭐
          </p>
        </div>

        {/* Main Navigation */}
        <nav
          className={`flex flex-col lg:flex-row items-start lg:items-center justify-center gap-4 lg:gap-8 mt-4 ${
            isMenuOpen ? 'block' : 'hidden lg:flex'
          }`}
        >
          <Link to="/Home" className="text-[#F04B23] hover:text-[#F04B23]/80">
            Home
          </Link>
          <Link to="/BestSeller" className="text-gray-600 hover:text-[#F04B23]">
            Best Sellers
          </Link>
          <Link to="/NewArrivals" className="text-gray-600 hover:text-[#F04B23]">
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
