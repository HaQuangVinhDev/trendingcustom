import Header from './components/header';
import CategoryGrid from './components/category-grid';
import HeroSection from './components/hero-section';
import BestSellers from './components/best-sellers';
import Ban from './components/Ban';
import Shopbycategory from './components/ShopbyCategory';
import GiftsforCouples from './components/GiftsforCouples';
import Bestbest from './components/best';
import Footer from './components/footer';
import Card from './components/Card';
import OurBlog from './components/OurBlog';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Question from './components/question';
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
        <Bestbest />
        <Card />
        <OurBlog />
        <Question />
        <Footer />
      </main>
    </div>
  );
}
