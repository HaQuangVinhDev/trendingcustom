import Header from './components/header';
import CategoryGrid from './components/category-grid';
import HeroSection from './components/hero-section';
import BestSellers from './components/best-sellers';
import Ban from './components/Ban';
import Shopbycategory from './components/ShopbyCategory';
import GiftsforCouples from './components/GiftsforCouples';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <CategoryGrid />
        <HeroSection />
        <BestSellers />
        <Ban />
        <Shopbycategory />
        <GiftsforCouples />
      </main>
    </div>
  );
}
