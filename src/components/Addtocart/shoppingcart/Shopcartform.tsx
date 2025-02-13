import { useEffect, useState } from 'react';
import { Button } from '../../../../components/ui/button';
import { Card } from '../../../../components/ui/card';
import { Checkbox } from '../../../../components/ui/checkbox';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import { CartSummary } from '../Shop/components/CartSummary';
import ProductList from './ProductList';
import type { Product } from '../Types/product';
import Footer from '../../Home/footer';
import Header from '../../BestSeller/Header/Home';
interface CartItem {
  product: Product;
  quantity: number;
}

export default function Shopcartform() {
  const [minutes, setMinutes] = useState(9);
  const [seconds, setSeconds] = useState(51);
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    if (minutes === 0 && seconds === 0) return;

    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 59));
      if (seconds === 0 && minutes > 0) setMinutes((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prev.map((item) => (item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      } else {
        return [...prev, { product, quantity: 1 }];
      }
    });
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== id));
  };

  const handleProtectionChange = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === id ? { ...item, product: { ...item.product, protection: !item.product.protection } } : item,
      ),
    );
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4 max-w-6xl">
        {/* <ProductList addToCart={handleAddToCart} /> */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-2/3">
            <h1 className="text-xl font-semibold mb-4">Shopping Cart ({cartItems.length})</h1>

            <div className="bg-blue-50 text-blue-700 p-3 rounded-lg mb-4 text-sm">
              Your cart will expire in {minutes}:{seconds.toString().padStart(2, '0')} minutes!
            </div>

            {cartItems.map(({ product, quantity }) => (
              <Card key={product.id} className="mb-6 p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-1/3 md:w-1/4">
                    <img src={product.image} alt="Product" className="rounded-lg w-full" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm sm:text-base">{product.name}</h3>
                    <p className="text-xs text-gray-500">Material: {product.material}</p>
                    <p className="text-xs text-gray-500">Size: {product.size}</p>
                    <div className="text-right">
                      <span className="text-red-500 font-semibold">${product.price} USD</span>
                      <span className="text-gray-400 line-through text-xs sm:text-sm">${product.oldPrice} USD</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      <Button variant="outline" size="sm">
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Preview
                      </Button>
                      <Button variant="outline" size="sm">
                        <Pencil className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Edit
                      </Button>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mt-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleRemoveItem(product.id)}
                      >
                        <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> Remove
                      </Button>
                    </div>

                    <div className="flex items-start gap-2 mt-4">
                      <Checkbox
                        id={`protection-${product.id}`}
                        checked={product.protection}
                        onCheckedChange={() => handleProtectionChange(product.id)}
                      />
                      <div>
                        <label htmlFor={`protection-${product.id}`} className="text-xs sm:text-sm font-medium">
                          Protect Your Item With Shipping Protection
                        </label>
                        <p className="text-xs text-gray-500">
                          Protect your order from damage, loss, or theft during shipping.
                        </p>
                        <p className="text-xs text-red-500 font-medium">$2.99 USD</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Cart Summary Section */}
          <div className="w-full lg:w-1/3">
            <CartSummary
              subtotal={cartItems.reduce((total, { product, quantity }) => total + product.price * quantity, 0)}
              total={cartItems.reduce((total, { product, quantity }) => total + product.price * quantity, 0)}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
