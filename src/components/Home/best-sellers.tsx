import type React from 'react';
import { Gift } from 'lucide-react';
import { Image } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  reviews: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Romantic Beach Landscape',
    image: 'https://trendingcustom.com/cdn/shop/files/ULFjtevOex__tr58b0-1_200x.jpg?v=1737448487',
    price: 39.99,
    originalPrice: 44.99,
    reviews: 18,
  },
  {
    id: 2,
    name: 'Personalized Family Portrait',
    image: 'https://trendingcustom.com/cdn/shop/files/d5gRzCsHbr__web1_400x.jpg?v=1737013244',
    price: 39.99,
    originalPrice: 44.99,
    reviews: 18,
  },
  {
    id: 3,
    name: 'Custom Pet Portrait',
    image: 'https://trendingcustom.com/cdn/shop/files/c4tPqKPs0l__kgkkgfoygq__w1_400x.jpg?v=1737449798',
    price: 39.99,
    originalPrice: 44.99,
    reviews: 18,
  },
  {
    id: 4,
    name: 'Personalized Name Necklace',
    image: 'https://trendingcustom.com/cdn/shop/files/I9rUKYrNvO__web1_400x.jpg?v=1737530821',
    price: 39.99,
    originalPrice: 44.99,
    reviews: 18,
  },
  {
    id: 5,
    name: 'Custom Photo Blanket',
    image: 'https://trendingcustom.com/cdn/shop/files/BMoGsRDBEq__24020657015_web-4_400x.jpg?v=1734084385',
    price: 39.99,
    originalPrice: 44.99,
    reviews: 18,
  },
  {
    id: 6,
    name: 'Personalized Wall Art',
    image: 'https://trendingcustom.com/cdn/shop/products/1oftaJ3OVq__24011306118_web-1_400x.jpg?v=1705996824',
    price: 39.99,
    originalPrice: 44.99,
    reviews: 18,
  },
];

const BestSellers: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-2">
            <Gift className="text-[#F04B23]" />
            Best Sellers - Customer Favorites
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            Shop our most-loved personalized gifts, perfect for every occasion!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col">
              <a href="#" className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={product.image || '/placeholder.svg'}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <div className="mt-4 flex flex-col">
                  <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    <span className="text-[#5fa436] font-bold">${product.price.toFixed(2)} USD </span>
                    <span className="line-through text-[#8e8e93] ml-1">${product.originalPrice.toFixed(2)} USD</span>
                  </p>
                  <div className="mt-1 flex items-center">
                    <span className="text-yellow-400">{'★'.repeat(5)} </span>
                    <span className="ml-1 text-xs text-gray-500">({product.reviews})</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className=" hover:text-blue-800 font-medium">
            See all products →
          </a>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
