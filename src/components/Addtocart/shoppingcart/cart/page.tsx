'use client';

import { useEffect, useState } from 'react';
import { CartItem } from '../components/CartItem';
import { CartSummary } from '../components/CartSummary';
import { useTimer } from '../hooks/useTimer.ts';
import type { CartItem as CartItemType } from '../../Types/cart';

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const { minutes, seconds } = useTimer(9, 51);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)));
  };

  const toggleShippingProtection = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, shippingProtection: !item.shippingProtection } : item)),
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const { subtotal, total } = cartItems.reduce(
    (acc, item) => {
      const itemTotal = item.price * item.quantity;
      acc.subtotal += itemTotal;
      acc.total += itemTotal + (item.shippingProtection ? 2.99 : 0);
      return acc;
    },
    { subtotal: 0, total: 0 },
  );

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Cart Items Section */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-xl font-semibold mb-4">Cart Items ({cartItems.length})</h2>

          {cartItems.length > 0 && (
            <>
              {/* Timer Alert */}
              <div className="bg-blue-50 text-blue-700 p-3 rounded-lg mb-4 text-sm">
                Your cart will expire in {minutes}:{seconds.toString().padStart(2, '0')} minutes! Checkout now before
                your items sell out.
              </div>

              {/* Free Shipping Alert */}
              <div className="border border-green-200 bg-green-50 p-3 rounded-lg mb-6">
                <h3 className="text-green-600 font-semibold text-sm">Free Shipping</h3>
                <p className="text-xs text-green-700">
                  Almost there! Spend $0.02 more to unlock free shipping on orders totaling $75 or more.
                </p>
              </div>
            </>
          )}

          {/* Cart Items */}
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={updateQuantity}
              onToggleShippingProtection={toggleShippingProtection}
              onRemove={removeItem}
            />
          ))}

          {cartItems.length === 0 && (
            <p className="text-gray-500">Your cart is empty. Add some items to get started!</p>
          )}
        </div>

        {/* Cart Summary Section */}
        {cartItems.length > 0 && (
          <div className="w-full lg:w-1/3">
            <CartSummary subtotal={subtotal} total={total} />
          </div>
        )}
      </div>
    </div>
  );
}
