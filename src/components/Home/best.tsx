import { Card, CardContent } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Gift } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '../../../components/ui/carousel';

const products = [
  {
    id: 1,
    name: 'Our Moon Couple Gift Moon',
    image: 'https://trendingcustom.com/cdn/shop/files/BWCix-K0p_mid_200x.png?v=1732518020',
  },
  {
    id: 2,
    name: 'Family Heart Tree Sitting',
    image: 'https://trendingcustom.com/cdn/shop/files/2_4704a7b3-6912-4c44-843c-7af2b85d3350_200x.png?v=1732518082',
  },
  {
    id: 3,
    name: 'Our Moon Couple Gift Moon',
    image: 'https://trendingcustom.com/cdn/shop/files/6_e17493d0-dc5e-42af-882b-16319f76fe59_200x.png?v=1732518147',
  },
  {
    id: 4,
    name: 'Starry Night Couple Custom',
    image: 'https://trendingcustom.com/cdn/shop/files/Group_34894_200x.png?v=1728357839',
  },
  {
    id: 5,
    name: 'Always With You Cardinal',
    image: 'https://trendingcustom.com/cdn/shop/files/Group_34895_200x.png?v=1728357839',
  },
  {
    id: 6,
    name: 'Couple Custom Moon Phase',
    image: 'https://trendingcustom.com/cdn/shop/files/Group_34896_200x.png?v=1728357839',
  },
  {
    id: 7,
    name: 'Couple Custom Moon Phase',
    image: 'https://trendingcustom.com/cdn/shop/files/image_c7389e35-c690-4db2-9eff-c7a2f9228649_200x.png?v=1728358245',
  },
  {
    id: 8,
    name: 'Couple Custom Moon Phase',
    image: 'https://trendingcustom.com/cdn/shop/files/Group_34896_200x.png?v=1728357839',
  },
  {
    id: 9,
    name: 'Couple Custom Moon Phase',
    image: 'https://trendingcustom.com/cdn/shop/files/Group_34896_200x.png?v=1728357839',
  },
  {
    id: 10,
    name: 'Couple Custom Moon Phase',
    image: 'https://trendingcustom.com/cdn/shop/files/Group_34896_200x.png?v=1728357839',
  },
];

export default function People() {
  return (
    <section className="container py-8 px-4">
      <div className="text-center mb-8">
        <h2 className="text-[28px] font-bold flex items-center justify-center gap-2">See what people are saying!</h2>
        <a href="#">
          <div className="text-center mt-8">See all products →</div>
        </a>
      </div>

      {/* Carousel cho toàn bộ danh sách sản phẩm */}
      <div className="relative w-full">
        <Carousel className="w-full">
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem key={product.id} className="basis-1/6  px-1">
                {' '}
                {/* Adjusted to fit 6 items */}
                <div className="  transition-all cursor-pointer w-full mx-auto">
                  <CardContent className="p-2 flex flex-col items-center">
                    <img src={product.image} alt={product.name} className="w-full px-2 " />
                  </CardContent>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white" />
        </Carousel>
      </div>
    </section>
  );
}
