import type { FC } from 'react';
import { Star } from 'lucide-react';
import type { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group">
      <a href={product.href} className="block overflow-hidden ">
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <img
            src={product.image || '/placeholder.svg'}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </a>
      <div className="mt-4 space-y-2">
        <a href={product.href}>
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2">{product.name}</h3>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-lg font-bold text-[#5fa436]">${product.price} USD</span>
            <span className="text-sm text-gray-500 line-through">${product.originalPrice} USD</span>
          </div>
          <div className="mt-1 flex items-center gap-1">
            {Array.from({ length: product.rating }).map((_, i) => (
              <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-sm text-gray-500">{product.reviews} reviews</span>
          </div>
        </a>
      </div>
    </div>
  );
};
