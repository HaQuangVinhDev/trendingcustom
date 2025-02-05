import Header from "./components/header"
import CategoryGrid from "./components/category-grid"
import HeroSection from "./components/hero-section"
import BestSellers from "./components/best-sellers"
import Shopbycategory from "./components/shop-by-category"

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <CategoryGrid />
        <HeroSection />
        <BestSellers />
        <Shopbycategory/>
      </main>
    </div>
  )
}

