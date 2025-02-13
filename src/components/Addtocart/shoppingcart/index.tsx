import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import ShoppingCart from './Shoppingcart';
import Shopcartform from './Shopcartform';
import type { Product } from '../Types/product';
import Header from '../../BestSeller/Header/Home';
import Footer from '../../Home/footer';

export default function App() {
  const [cartItems, setCartItems] = useState<{ product: Product; quantity: number }[]>(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.product.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      } else {
        return [...prevItems, { product, quantity: 1 }];
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-10">
        <Header />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col md:flex-row gap-8">
              <ProductList addToCart={addToCart} />
              <ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />
            </div>
          }
        />
        <Route path="/cart" element={<Shopcartform />} />
      </Routes>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
