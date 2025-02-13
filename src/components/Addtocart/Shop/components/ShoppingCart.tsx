import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import { Router, Routes, Route } from 'react-router-dom';
import { ProductListing } from './ProductListing';
import type { Product, CartItem } from '../../Types/cart';

const INITIAL_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Romantic Beach Landscape Couple Sitting Holding Hands Sign Posts Personalized Music Fridge Magnet',
    material: 'Acrylic',
    size: '3.9"x3.9"',
    price: 34.99,
    originalPrice: 40.0,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RpL4c9HsXBeGgc2lX6kRg6t7VJ9zGv.png',
  },
  {
    id: 2,
    name: 'Sunset Beach Personalized Music Plaque',
    material: 'Wood',
    size: '5"x7"',
    price: 49.99,
    originalPrice: 59.99,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RpL4c9HsXBeGgc2lX6kRg6t7VJ9zGv.png',
  },
  {
    id: 3,
    name: 'Custom Song Lyrics Canvas Print',
    material: 'Canvas',
    size: '16"x20"',
    price: 79.99,
    originalPrice: 89.99,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RpL4c9HsXBeGgc2lX6kRg6t7VJ9zGv.png',
  },
];

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const router = useNavigate();

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = useCallback(
    (product: Product) => {
      setCartItems((prevItems) => {
        const existingItem = prevItems.find((item) => item.id === product.id);
        if (existingItem) {
          return prevItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
        } else {
          return [...prevItems, { ...product, quantity: 1, shippingProtection: false }];
        }
      });
      router('/cart');
    },
    [router],
  );

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);
  useEffect(() => {
    console.log('ShoppingCart component mounted');
  }, []);
  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <ProductListing products={INITIAL_PRODUCTS} onAddToCart={addToCart} />
    </div>
  );
}
