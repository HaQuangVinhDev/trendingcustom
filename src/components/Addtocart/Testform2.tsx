'use client';

import { useState } from 'react';
import { Button } from '../../../components/ui/button';
import { Card } from '../../../components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, Pencil, Minus, Plus, Trash } from 'lucide-react';

const initialProducts = [
  {
    id: 1,
    name: 'Romantic Beach Landscape Couple Magnet',
    material: 'Acrylic',
    size: '3.9"x3.9"',
    price: 34.99,
    originalPrice: 40.0,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RpL4c9HsXBeGgc2lX6kRg6t7VJ9zGv.png',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Custom Name Wooden Keychain',
    material: 'Wood',
    size: '2"x1"',
    price: 19.99,
    originalPrice: 25.0,
    image: 'https://via.placeholder.com/200',
    quantity: 1,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  const updateQuantity = (id: number, amount: number) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, quantity: Math.max(1, product.quantity + amount) } : product,
      ),
    );
  };

  const removeProduct = (id: number) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const subtotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-2/3">
          <h1 className="text-xl font-semibold mb-4">Shopping Cart ({products.length})</h1>
          {products.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            products.map((product) => (
              <Card key={product.id} className="mb-6 p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="rounded-lg w-full md:w-1/4"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{product.name}</h3>
                        <p className="text-sm text-gray-500">Material: {product.material}</p>
                        <p className="text-sm text-gray-500">Size: {product.size}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-red-500 font-semibold">${product.price.toFixed(2)} USD</span>
                        <span className="text-gray-400 line-through text-sm ml-2">
                          ${product.originalPrice.toFixed(2)} USD
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" /> Preview
                      </Button>
                      <Button variant="outline" size="sm">
                        <Pencil className="w-4 h-4 mr-2" /> Edit
                      </Button>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mt-4">
                      <div className="flex items-center border rounded-md">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(product.id, -1)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <input
                          type="number"
                          value={product.quantity}
                          onChange={(e) => updateQuantity(product.id, Number(e.target.value) - product.quantity)}
                          className="w-12 text-center border-x"
                          min="1"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(product.id, 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <Button
                        variant="destructive"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => removeProduct(product.id)}
                      >
                        <Trash className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
        <div className="lg:w-1/3">
          <Card className="p-4">
            <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)} USD</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between mb-4">
                  <span className="font-semibold">Total:</span>
                  <span className="font-semibold">${subtotal.toFixed(2)} USD</span>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">Secure Checkout</Button>
                <Button
                  variant="outline"
                  className="w-full bg-[#ffc439] text-black hover:bg-[#f4bb38] border-[#ffc439]"
                >
                  PayPal
                </Button>
                <div className="text-center">
                  <p className="text-sm text-gray-500">100% Secure Payment</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
