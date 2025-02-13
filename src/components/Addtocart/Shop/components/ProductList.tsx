import type { Product } from '../../Types/type';
import { Button } from '../../../../../components/ui/button';

const products: Product[] = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

interface ProductListProps {
  addToCart: (product: Product) => void;
}

export default function ProductList({ addToCart }: ProductListProps) {
  return (
    <div className="w-full md:w-2/3">
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <Button onClick={() => addToCart(product)} className="mt-2">
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
