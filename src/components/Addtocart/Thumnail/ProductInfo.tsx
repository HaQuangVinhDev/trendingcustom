import { Star } from 'lucide-react';

const ProductInfo = () => {
  return (
    <div className="ml-0 lg:ml-8 flex flex-col space-y-4 text-center lg:text-left">
      <h2 className="text-xl lg:text-2xl font-bold text-gray-800">Y2K Couple Personalized LED Night Light</h2>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 lg:gap-4">
        <span className="text-lg lg:text-xl font-semibold text-green-600">$39.99 USD</span>
        <span className="line-through text-gray-400 text-sm">$49.99 USD</span>
        <span className="text-red-500 text-sm">20% OFF</span>
      </div>
      <div className="flex justify-center lg:justify-start items-center gap-1 text-yellow-500">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill={i < 4 ? 'currentColor' : 'none'} />
        ))}
        <span className="text-sm text-gray-600">746 reviews</span>
      </div>
      <p className="text-gray-700 text-sm lg:text-base">
        Customize this unique couple night light with your names and a special message. Perfect for gifts or to
        celebrate your relationship.
      </p>
    </div>
  );
};

export default ProductInfo;
