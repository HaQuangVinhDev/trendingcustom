import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Romantic Beach Landscape',
      description: 'Couple Sitting Holding Hands Sign Posts Personalized Music Fridge Magnet',
      price: 34.99,
      quantity: 1,
      shippingProtection: 2.99,
    },
    {
      id: 2,
      name: 'Romantic Beach Landscape',
      description: 'Couple Sitting Holding Hands Sign Posts Personalized Music Fridge Magnet',
      price: 34.99,
      quantity: 1,
      shippingProtection: 2.99,
    },
  ]);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity + item.shippingProtection, 0);

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Shopping Cart</h1>
        <div className="text-sm text-gray-600">
          <span>Your cart will expire in 08:40 minutes!</span>
        </div>
      </div>
      <div className="space-y-6">
        {cartItems.map((item) => (
          <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg" key={item.id}>
            <div className="flex items-center space-x-4">
              <img
                src="your-image-path.jpg" // Replace with your product image
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <span className="text-gray-800 font-medium">${item.price.toFixed(2)}</span>
                <span className="text-gray-600 text-sm">+ Shipping Protection: ${item.shippingProtection}</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() =>
                  setCartItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i)))
                }
                className="bg-gray-200 p-2 rounded-full"
              >
                -
              </button>
              <span className="text-lg">{item.quantity}</span>
              <button
                onClick={() =>
                  setCartItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)))
                }
                className="bg-gray-200 p-2 rounded-full"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center bg-gray-100 p-4 rounded-lg">
        <div className="text-lg font-semibold">Subtotal</div>
        <div className="text-xl font-bold">${totalPrice.toFixed(2)}</div>
      </div>

      <div className="mt-6 flex justify-between">
        <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600">Secure Checkout</button>
        <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600">PayPal</button>
      </div>
    </div>
  );
};

export default Cart;
