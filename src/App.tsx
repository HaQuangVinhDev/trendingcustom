import Home from './Page/Home';
import BestSeller from './Page/BestSeller';
import { Route, Routes } from 'react-router-dom';
import NewArrivals from './Page/New-Arrivals';
import Addtocard from './Page/Addtocart';
import ShoppingCart from './components/Addtocart/shoppingcart/index';
import Shopcartform from './components/Addtocart/shoppingcart/Shopcartform';
import Shop from './components/Addtocart/Shop/app';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/BestSeller" element={<BestSeller />} />
      <Route path="/NewArrivals" element={<NewArrivals />} />
      <Route path="/addtocart" element={<Addtocard />} />
      <Route path="/cart" element={<Shopcartform />} />
      <Route path="/shoppingcart/*" element={<ShoppingCart />} />
      <Route path="/app" element={<Shop />} />
    </Routes>
  );
}
