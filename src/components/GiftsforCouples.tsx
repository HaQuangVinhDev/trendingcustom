import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Gift, Link } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const products = [
  {
    id: 1,
    name: 'Our Moon Couple Gift Moon',
    price: '$17.99 USD',
    oldPrice: '$27.99 USD',
    image: 'https://trendingcustom.com/cdn/shop/files/Cq6iR6mMuq__trc1202502021983_web-1_200x.jpg?v=1738664242',
    reviews: '18 reviews',
  },
  {
    id: 2,
    name: 'Family Heart Tree Sitting',
    price: '$34.99 USD',
    oldPrice: '$44.99 USD',
    image: 'https://trendingcustom.com/cdn/shop/files/A1VGEZmqlt__trc22025020303516_web-1_200x.jpg?v=1738662208',
    reviews: '18 reviews',
  },
  {
    id: 3,
    name: 'Our Moon Couple Gift Moon',
    price: '$39.99 USD',
    oldPrice: '$44.99 USD',
    image: 'https://trendingcustom.com/cdn/shop/files/8Waa4EeorO__trc1202502021981_web-1_200x.jpg?v=1738723549',
    reviews: '18 reviews',
  },
  {
    id: 4,
    name: 'Starry Night Couple Custom',
    price: '$24.99 USD',
    oldPrice: '$34.99 USD',
    image: 'https://trendingcustom.com/cdn/shop/files/gM1cFIMoaZ__trc1202502042004_web-1_200x.jpg?v=1738658415',
    reviews: '18 reviews',
  },
  {
    id: 5,
    name: 'Always With You Cardinal',
    price: '$34.99 USD',
    oldPrice: '$44.99 USD',
    image: 'https://trendingcustom.com/cdn/shop/files/RSL4CqjLs0__trc1202501241978_web1_200x.jpg?v=1738658541',
    reviews: '18 reviews',
  },
  {
    id: 6,
    name: 'Couple Custom Moon Phase',
    price: '$24.99 USD',
    oldPrice: '$34.99 USD',
    image: 'https://trendingcustom.com/cdn/shop/files/WmoNQ7jJoN__web1_200x.jpg?v=1738657238',
    reviews: '18 reviews',
  },
];

export default function GiftsforCouples() {
  return (
    <section className="container py-8 px-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
          <Gift className="w-6 h-6" /> Gifts for Couples
        </h2>
        <p className="text-gray-600 mt-4 text-base">
          Celebrate love with personalized gifts made for couples. From heartfelt keepsakes to custom creations, find
          the perfect way to cherish their bond and create lasting memories.
        </p>
      </div>

      {/* Swiper cho toàn bộ danh sách sản phẩm */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={2} // Hiển thị 2 sản phẩm trên mobile
        breakpoints={{
          640: { slidesPerView: 3 }, // 3 sản phẩm trên tablet
          1024: { slidesPerView: 5 }, // 5 sản phẩm trên desktop
        }}
        navigation
        className="w-full"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="flex justify-center ">
            <Card className="shadow-md hover:shadow-xl transition-all cursor-pointer w-72">
              <CardContent className="p-4 flex flex-col items-center">
                <img src={product.image} alt={product.name} className="w-full rounded-lg" />
                <h3 className="mt-3 text-sm font-bold text-[#222] text-center">{product.name}</h3>
                <p className="text-[#5fa436] font-bold mt-2">
                  {product.price} <span className="line-through text-gray-500 ml-2">{product.oldPrice}</span>
                </p>
                <p className="text-sm text-gray-500">⭐⭐⭐⭐⭐ {product.reviews}</p>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <a href="#">
        <div className="text-center mt-8">See all products →</div>
      </a>
    </section>
  );
}
