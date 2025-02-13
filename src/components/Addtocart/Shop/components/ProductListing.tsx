import React from 'react';
import { Button } from '../../../../../components/ui/button';
import { Card } from '../../../../../components/ui/card';
import type { Product } from '../../Types/cart';
import { ShoppingCart } from 'lucide-react';

interface ProductListingProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export const ProductListing: React.FC<ProductListingProps> = ({ products, onAddToCart }) => {
  const [cartItemCount, setCartItemCount] = React.useState(0);

  React.useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const cartItems = JSON.parse(storedCart);
      setCartItemCount(cartItems.reduce((total: any, item: { quantity: any }) => total + item.quantity, 0));
    }
  }, []);

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Featured Products</h2>
        <a href="/cart" className="flex items-center">
          <ShoppingCart className="mr-2" />
          <span>Cart ({cartItemCount})</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="p-4">
            <img
              src={product.image || '/placeholder.svg'}
              alt={product.name}
              width={200}
              height={200}
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h3 className="font-medium text-lg mb-2">{product.name}</h3>
            <p className="text-sm text-gray-500 mb-2">Material: {product.material}</p>
            <p className="text-sm text-gray-500 mb-4">Size: {product.size}</p>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                {product.originalPrice > product.price && (
                  <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice.toFixed(2)}</span>
                )}
              </div>
              <Button onClick={() => onAddToCart(product)}>Add to Cart</Button>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};
