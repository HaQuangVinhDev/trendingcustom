import Home from './Page/Home';
import BestSeller from './Page/BestSeller';
import { Route, Routes } from 'react-router-dom';
import NewArrivals from './Page/New-Arrivals';
import Addtocard from './Page/Addtocart';
import ShoppingCart from './components/Addtocart/shoppingcart/index';
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/BestSeller" element={<BestSeller />} />
      <Route path="/NewArrivals" element={<NewArrivals />} />
      <Route path="/addtocart" element={<Addtocard />} />
      <Route path="/shoppingcart" element={<ShoppingCart />} />
    </Routes>
  );
}
