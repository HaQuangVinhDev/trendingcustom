import Header from '../components/Home/header';
import CategoryGrid from '../components/Home/category-grid';
import HeroSection from '../components/Home/hero-section';
import BestSellers from '../components/Home/best-sellers';
import Ban from '../components/Home/Ban';
import Shopbycategory from '../components/Home/ShopbyCategory';
import GiftsforCouples from '../components/Home/GiftsforCouples';
import Bestbest from '../components/Home/best';
import Footer from '../components/Home/footer';
import Card from '../components/Home/Card';
import OurBlog from '../components/Home/OurBlog';

import Question from '../components/Home/question';

function Home() {
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

export default Home;
