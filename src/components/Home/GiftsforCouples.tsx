import type React from 'react';
import { Gift } from 'lucide-react';
import { Gifts } from './data/gifts';

const BestSellers: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-2">
            <Gift className="text-[#F04B23]" />
            Gifts for Couples
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            Celebrate love with personalized gifts made for couples. From heartfelt keepsakes to custom creations, find
            the perfect way to cherish their bond and create lasting memories.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {Gifts.map((product) => (
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
                    <span className="text-yellow-400">{'★'.repeat(5)}</span>
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

{
  /**
   *     <div className="text-center mb-8">
        <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
          <Gift className="w-6 h-6" /> Gifts for Couples
        </h2>
        <p className="text-gray-600 mt-4 text-base">
          Celebrate love with personalized gifts made for couples. From heartfelt keepsakes to custom creations, find
          the perfect way to cherish their bond and create lasting memories.
        </p>
  
    
  */
}
