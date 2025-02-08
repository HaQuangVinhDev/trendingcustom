import { Card, CardContent } from '@/components/ui/card';

interface ProductProps {
  id: number;
  title: string;
  price: string;
  oldPrice: string;
  image: string;
  reviews: string;
}

const ProductCard: React.FC<ProductProps> = ({ title, price, oldPrice, image, reviews }) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center p-4">
        <img src={image || '/placeholder.jpg'} alt={title} className="w-full h-48 object-cover rounded-md" />
        <h3 className="text-sm font-semibold mt-2 text-center line-clamp-2">{title}</h3>
        <p className="text-[#6fbc8e] font-bold">
          {price} <span className="line-through text-gray-500">{oldPrice}</span>
        </p>
        <p className="text-xs text-gray-600">⭐⭐⭐⭐⭐ {reviews}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
