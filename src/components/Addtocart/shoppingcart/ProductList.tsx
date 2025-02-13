import { Button } from '../../../../components/ui/button';
import { datacart as products } from '../Types/datacart';
import type { Product } from '../Types/product';

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
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-2" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            {product.oldPrice && <p className="text-green-500 line-through">${product.oldPrice}</p>}
            <p className="text-sm text-gray-500">Material: {product.material}</p>
            <p className="text-sm text-gray-500">Size: {product.size}</p>

            <Button onClick={() => addToCart(product)} className="mt-2">
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
