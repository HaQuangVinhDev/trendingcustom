import { Button } from '../../../../../components/ui/button';
import { Card } from '../../../../../components/ui/card';
import { Checkbox } from '../../../../../components/ui/checkbox';
import { Eye, Pencil, Minus, Plus, Trash2 } from 'lucide-react';

import type { CartItem as CartItemType } from '../../Types/cart';
import type React from 'react'; // Import React

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: number, newQuantity: number) => void;
  onToggleShippingProtection: (id: number) => void;
  onRemove: (id: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onToggleShippingProtection, onRemove }) => {
  return (
    <Card className="mb-6 p-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/3 md:w-1/4">
          <img
            src={item.image || '/placeholder.svg'}
            alt={item.name}
            width={200}
            height={200}
            className="rounded-lg w-full"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4">
            <div>
              <h3 className="font-medium text-sm sm:text-base">{item.name}</h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">Material: {item.material}</p>
              <p className="text-xs sm:text-sm text-gray-500">Size: {item.size}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2">
                <span className="text-red-500 font-semibold">${item.price.toFixed(2)} USD</span>
                <span className="text-gray-400 line-through text-xs sm:text-sm">
                  ${item.originalPrice.toFixed(2)} USD
                </span>
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
                onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
              >
                <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => onUpdateQuantity(item.id, Math.max(1, Number.parseInt(e.target.value) || 1))}
                className="w-10 sm:w-12 text-center border-x text-sm"
                min="1"
              />
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              >
                <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-red-500 hover:text-red-700"
              onClick={() => onRemove(item.id)}
            >
              <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Remove
            </Button>
          </div>

          <div className="flex items-start gap-2 mt-4">
            <Checkbox
              id={`protection-${item.id}`}
              checked={item.shippingProtection}
              onCheckedChange={() => onToggleShippingProtection(item.id)}
            />
            <div>
              <label
                htmlFor={`protection-${item.id}`}
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
  );
};
