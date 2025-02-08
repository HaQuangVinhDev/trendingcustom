import { FC } from 'react';
import { Star } from 'lucide-react';

interface ProductProps {
  image: string;
  name: string;
  price: number;
  oldPrice: number;
  discount: number;
  rating: number;
  reviews: number;
}

const ProductCard: FC<ProductProps> = ({ image, name, price, oldPrice, discount, rating, reviews }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-md" />
      <h3 className="text-sm font-semibold mt-2">{name}</h3>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-green-600 font-bold">${price.toFixed(2)} USD</span>
        <span className="line-through text-gray-500 text-sm">${oldPrice.toFixed(2)} USD</span>
        <span className="text-red-500 text-sm">{discount}% OFF</span>
      </div>
      <div className="flex items-center mt-1 text-yellow-500">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill={i < rating ? 'currentColor' : 'none'} />
        ))}
        <span className="ml-1 text-sm text-gray-600">({reviews} reviews)</span>
      </div>
    </div>
  );
};

export default ProductCard;
