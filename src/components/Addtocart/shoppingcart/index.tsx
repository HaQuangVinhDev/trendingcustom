import { useState } from 'react';
import ProductList from './ProductList';
import ShoppingCart from './Shoppingcart';
import type { Product } from '../Types/type';
import Shopcartform from './Shopcartform';

export default function App() {
  const [cartItems, setCartItems] = useState<{ product: Product; quantity: number }[]>([]);

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
      <h1 className="text-3xl font-bold mb-4">My Shop</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <ProductList addToCart={addToCart} /> <ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />
      </div>

      <div>
        {' '}
        <Shopcartform />
      </div>
    </div>
  );
}
