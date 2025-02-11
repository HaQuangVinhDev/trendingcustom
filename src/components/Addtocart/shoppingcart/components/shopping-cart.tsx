'use client';

import { useState } from 'react';
import { Button } from '../../../../../components/ui/button';
import { Card } from '../../../../../components/ui/card';
import { Checkbox } from '../../../../../components/ui/checkbox';
import { Eye, Pencil, Minus, Plus, Trash2 } from 'lucide-react';

export default function ShoppingCart() {
  const [minutes, setMinutes] = useState(9);
  const [seconds, setSeconds] = useState(51);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({
    1: 1,
    2: 1,
  });

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Cart Items Section */}
        <div className="w-full lg:w-2/3">
          <h1 className="text-xl font-semibold mb-4">Shopping Cart (2)</h1>

          {/* Timer Alert */}
          <div className="bg-blue-50 text-blue-700 p-3 rounded-lg mb-4 text-sm">
            Your cart will expire in {minutes}:{seconds.toString().padStart(2, '0')} minutes! Checkout now before your
            items sell out.
          </div>

          {/* Free Shipping Alert */}
          <div className="border border-green-200 bg-green-50 p-3 rounded-lg mb-6">
            <h3 className="text-green-600 font-semibold text-sm">Free Shipping</h3>
            <p className="text-xs text-green-700">
              Almost there! Spend $0.02 more to unlock free shipping on orders totaling $75 or more.
            </p>
          </div>

          {/* Cart Items */}
          {[1, 2].map((item) => (
            <Card key={item} className="mb-6 p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-1/3 md:w-1/4">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RpL4c9HsXBeGgc2lX6kRg6t7VJ9zGv.png"
                    alt="Product Image"
                    width={200}
                    height={200}
                    className="rounded-lg w-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4">
                    <div>
                      <h3 className="font-medium text-sm sm:text-base">
                        Romantic Beach Landscape Couple Sitting Holding Hands Sign Posts Personalized Music Fridge
                        Magnet
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">Material: Acrylic</p>
                      <p className="text-xs sm:text-sm text-gray-500">Size: 3.9"x3.9"</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <span className="text-red-500 font-semibold">$34.99 USD</span>
                        <span className="text-gray-400 line-through text-xs sm:text-sm">$40.00 USD</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:gap-4 mt-4">
                    <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                      <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Preview
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                      <Pencil className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Edit
                    </Button>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mt-4">
                    <div className="flex items-center border rounded-md">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => {
                          if (quantities[item] > 1) {
                            setQuantities((prev) => ({
                              ...prev,
                              [item]: prev[item] - 1,
                            }));
                          }
                        }}
                      >
                        <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                      <input
                        type="number"
                        value={quantities[item]}
                        onChange={(e) => {
                          const value = Number.parseInt(e.target.value) || 1;
                          setQuantities((prev) => ({
                            ...prev,
                            [item]: Math.max(1, value),
                          }));
                        }}
                        className="w-10 sm:w-12 text-center border-x text-sm"
                        min="1"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => {
                          setQuantities((prev) => ({
                            ...prev,
                            [item]: prev[item] + 1,
                          }));
                        }}
                      >
                        <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                      <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Remove
                    </Button>
                  </div>

                  <div className="flex items-start gap-2 mt-4">
                    <Checkbox id={`protection-${item}`} />
                    <div>
                      <label
                        htmlFor={`protection-${item}`}
                        className="text-xs sm:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Protect Your Item With Shipping Protection
                      </label>
                      <p className="text-xs sm:text-sm text-gray-500">
                        Protect your order from damage, loss, or theft during shipping.
                      </p>
                      <p className="text-xs sm:text-sm text-red-500 font-medium">$2.99 USD</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Cart Summary Section */}
        <div className="w-full lg:w-1/3">
          <Card className="p-4">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Cart Subtotal</h2>

            <div className="space-y-4 text-sm sm:text-base">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>$75.96 USD</span>
              </div>

              <div className="flex justify-between">
                <span>Taxes and shipping:</span>
                <span className="text-gray-500">Calculated at checkout</span>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">Priority Production</h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Move your order to the front of the line for faster processing
                    </p>
                  </div>
                  <span>$2.99 USD</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between mb-4">
                  <span className="font-semibold">Total:</span>
                  <span className="font-semibold">$75.96 USD</span>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700">Secure Checkout</Button>
                  <Button
                    variant="outline"
                    className="w-full bg-[#ffc439] text-black hover:bg-[#f4bb38] border-[#ffc439]"
                  >
                    PayPal
                  </Button>
                  <div className="text-center">
                    <p className="text-xs sm:text-sm text-gray-500">100% Secure Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
