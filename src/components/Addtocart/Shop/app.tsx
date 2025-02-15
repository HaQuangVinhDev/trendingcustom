import { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import type { Product } from '../Types/type';
import Page from './cart/page';

export default function App() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shop add</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <ProductList addToCart={addToCart} />
        <Cart items={cartItems} />
      </div>
    </div>
  );
}
