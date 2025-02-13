import { Button } from '../../../../components/ui/button';
import { Card } from '../../../../components/ui/card';
import { Minus, Plus, Trash, ShoppingCart as CartIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface CartItem {
  product: {
    id: number;
    name: string;
    price: number;
    oldPrice?: number;
    image: string;
    material: string;
    size: string;
    protection: boolean;
  };
  quantity: number;
}

interface ShoppingCartProps {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export default function ShoppingCart({ cartItems, setCartItems }: ShoppingCartProps) {
  const navigate = useNavigate();

  const updateQuantity = (productId: number, change: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.product.id === productId ? { ...item, quantity: Math.max(1, item.quantity + change) } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
  };

  const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="w-full md:w-1/3">
      <Card className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <Link to="/cart" className="text-gray-700 hover:text-gray-900">
            <CartIcon className="w-6 h-6" />
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.product.id} className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-medium">{item.product.name}</h3>
                  <p className="text-gray-600">${item.product.price.toFixed(2)}</p>
                  {item.product.oldPrice && (
                    <p className="text-red-500 line-through">${item.product.oldPrice.toFixed(2)}</p>
                  )}
                  <p className="text-gray-500 text-sm">
                    {item.product.material} - {item.product.size}
                  </p>
                </div>
                <div className="flex items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.product.id, -1)}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-2">{item.quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.product.id, 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-red-500"
                    onClick={() => removeItem(item.product.id)}
                  >
                    <Trash className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}

            <div className="border-t pt-4 mt-4">
              <strong>Total: ${total.toFixed(2)}</strong>
            </div>
            <Button className="w-full mt-4 bg-green-600 hover:bg-green-700" onClick={() => navigate('/cart')}>
              Checkout
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}
