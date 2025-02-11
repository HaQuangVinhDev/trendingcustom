import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type React from 'react'; // Added import for React

interface CartSummaryProps {
  subtotal: number;
  total: number;
}

export const CartSummary: React.FC<CartSummaryProps> = ({ subtotal, total }) => {
  return (
    <Card className="p-4">
      <h2 className="text-lg sm:text-xl font-semibold mb-4">Cart Subtotal</h2>

      <div className="space-y-4 text-sm sm:text-base">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)} USD</span>
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
            <span className="font-semibold">${total.toFixed(2)} USD</span>
          </div>

          <div className="space-y-3">
            <Button className="w-full bg-green-600 hover:bg-green-700">Secure Checkout</Button>
            <Button variant="outline" className="w-full bg-[#ffc439] text-black hover:bg-[#f4bb38] border-[#ffc439]">
              PayPal
            </Button>
            <div className="text-center">
              <p className="text-xs sm:text-sm text-gray-500">100% Secure Payment</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
