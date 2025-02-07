import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '../../../components/ui/carousel';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../../../components/ui/pagination';
import React from 'react';
const items = [
  {
    id: 1,
    title: 'Y2K Couple Frame Personalized 2-layer Wooden Plaque,  Gift for Him, Gift for Her',
    price: '$17.99 USD',
    oldPrice: '$27.99 USD',
    image: 'https://cdn.shopify.com/s/files/1/0638/0811/0834/files/c4tPqKPs0l__kgkkgfoygq__w1_large.jpg?v=1738661232',
    reviews: '18 reviews',
  },
  {
    id: 2,
    title: 'Y2K Couple Frame Personalized 2-layer Wooden Plaque,  Gift for Him, Gift for Her',
    price: '$17.99 USD',
    oldPrice: '$27.99 USD',
    image: 'https://cdn.shopify.com/s/files/1/0638/0811/0834/files/ULFjtevOex__tr58b0-1_large.jpg?v=1738745052',
    reviews: '18 reviews',
  },
  {
    id: 3,
    title: 'Y2K Couple Frame Personalized 2-layer Wooden Plaque,  Gift for Him, Gift for Her',
    price: '$17.99 USD',
    oldPrice: '$27.99 USD',
    image:
      'https://cdn.shopify.com/s/files/1/0638/0811/0834/files/BMoGsRDBEq__24020657015_web-4_large.jpg?v=1734084385',
    reviews: '18 reviews',
  },
  {
    id: 4,
    title: 'Y2K Couple Frame Personalized 2-layer Wooden Plaque,  Gift for Him, Gift for Her',
    price: '$17.99 USD',
    oldPrice: '$27.99 USD',
    image: 'https://cdn.shopify.com/s/files/1/0638/0811/0834/files/d5gRzCsHbr__web1_large.jpg?v=1738744167',
    reviews: '18 reviews',
  },
  {
    id: 5,
    title: 'Y2K Couple Frame Personalized 2-layer Wooden Plaque,  Gift for Him, Gift for Her',
    price: '$17.99 USD',
    oldPrice: '$27.99 USD',
    image:
      'https://cdn.shopify.com/s/files/1/0638/0811/0834/files/FOkRBezndv__trc22024120603048_web1_large.jpg?v=1738834940',
    reviews: '18 reviews',
  },
  {
    id: 6,
    title: 'Y2K Couple Frame Personalized 2-layer Wooden Plaque,  Gift for Him, Gift for Her',
    price: '$17.99 USD',
    oldPrice: '$27.99 USD',
    image:
      'https://cdn.shopify.com/s/files/1/0638/0811/0834/files/zcR3kIytTd__24062627514_web-2_large.jpg?v=1719839482',
    reviews: '18 reviews',
  },
  {
    id: 7,
    title: 'Y2K Couple Frame Personalized 2-layer Wooden Plaque,  Gift for Him, Gift for Her',
    price: '$17.99 USD',
    oldPrice: '$27.99 USD',
    image: 'https://cdn.shopify.com/s/files/1/0638/0811/0834/files/lk4Jf1Bkuy__1_large.jpg?v=1738578264',
    reviews: '18 reviews',
  },
  {
    id: 8,
    title: 'Y2K Couple Frame Personalized 2-layer Wooden Plaque,  Gift for Him, Gift for Her',
    price: '$17.99 USD',
    oldPrice: '$27.99 USD',
    image:
      'https://cdn.shopify.com/s/files/1/0638/0811/0834/files/RWA5iKl7zD__trc1202501131860_web-1_large.jpg?v=1738573052',
    reviews: '18 reviews',
  },
  {
    id: 9,
    title: 'Y2K Couple Frame Personalized 2-layer Wooden Plaque,  Gift for Him, Gift for Her',
    price: '$17.99 USD',
    oldPrice: '$27.99 USD',
    image:
      'https://cdn.shopify.com/s/files/1/0638/0811/0834/files/XMHPj7DBFg__trc22024121603162_web-1_large.jpg?v=1737455415',
    reviews: '18 reviews',
  },
  {
    id: 10,
    title: 'Y2K Couple Frame Personalized 2-layer Wooden Plaque,  Gift for Him, Gift for Her',
    price: '$17.99 USD',
    oldPrice: '$27.99 USD',
    image:
      'https://cdn.shopify.com/s/files/1/0638/0811/0834/files/S0H8wA7jtg__24062727530_web-3_large.jpg?v=1730546536',
    reviews: '18 reviews',
  },
  {
    id: 11,
    title: 'Y2K Couple Frame Personalized 2-layer Wooden Plaque,  Gift for Him, Gift for Her',
    price: '$17.99 USD',
    oldPrice: '$27.99 USD',
    image:
      'https://cdn.shopify.com/s/files/1/0638/0811/0834/files/JjVK32VOP5__trc22024020500351_web-1_large.jpg?v=1737450427',
    reviews: '18 reviews',
  },
  {
    id: 12,
    title: 'Y2K Couple Frame Personalized 2-layer Wooden Plaque,  Gift for Him, Gift for Her',
    price: '$17.99 USD',
    oldPrice: '$27.99 USD',
    image:
      'https://cdn.shopify.com/s/files/1/0638/0811/0834/files/ih44OdP1SS__web2_83b7536d-aabc-4cf8-ae42-84908d17e1be_large.jpg?v=1720178452',
    reviews: '18 reviews',
  },
  {
    id: 13,
    title: 'Y2K Couple Frame Personalized 2-layer Wooden Plaque,  Gift for Him, Gift for Her',
    price: '$17.99 USD',
    oldPrice: '$27.99 USD',
    image: 'https://cdn.shopify.com/s/files/1/0638/0811/0834/files/W9jtRTriPA__w1_large.jpg?v=1738835640',
    reviews: '18 reviews',
  },
  {
    id: 14,
    title: 'Y2K Couple Frame Personalized 2-layer Wooden Plaque,  Gift for Him, Gift for Her',
    price: '$17.99 USD',
    oldPrice: '$27.99 USD',
    image:
      'https://cdn.shopify.com/s/files/1/0638/0811/0834/files/JoWwuX7Vyz__trc22024120603053_web-1_large.jpg?v=1737186578',
    reviews: '18 reviews',
  },
  {
    id: 15,
    title: 'Y2K Couple Frame Personalized 2-layer Wooden Plaque,  Gift for Him, Gift for Her',
    price: '$17.99 USD',
    oldPrice: '$27.99 USD',
    image: 'https://cdn.shopify.com/s/files/1/0638/0811/0834/files/fTFZTd3EaD__web5-1_large.jpg?v=1733751636',
    reviews: '18 reviews',
  },
  {
    id: 16,
    title: 'Y2K Couple Frame Personalized 2-layer Wooden Plaque,  Gift for Him, Gift for Her',
    price: '$17.99 USD',
    oldPrice: '$27.99 USD',
    image:
      'https://cdn.shopify.com/s/files/1/0638/0811/0834/files/ymnkRutwnR__trc1202412271695_web-1_large.jpg?v=1737889498',
    reviews: '18 reviews',
  },
  {
    id: 17,
    title: 'Y2K Couple Frame Personalized 2-layer Wooden Plaque,  Gift for Him, Gift for Her',
    price: '$17.99 USD',
    oldPrice: '$27.99 USD',
    image: 'https://cdn.shopify.com/s/files/1/0638/0811/0834/files/pGqLzdQ0IR__web1_large.jpg?v=1733387241',
    reviews: '18 reviews',
  },
  {
    id: 18,
    title: 'Y2K Couple Frame Personalized 2-layer Wooden Plaque,  Gift for Him, Gift for Her',
    price: '$17.99 USD',
    oldPrice: '$27.99 USD',
    image:
      'https://cdn.shopify.com/s/files/1/0638/0811/0834/products/1oftaJ3OVq__24011306118_web-1_large.jpg?v=1705996824',
    reviews: '18 reviews',
  },
  {
    id: 19,
    title: 'Y2K Couple Frame Personalized 2-layer Wooden Plaque,  Gift for Him, Gift for Her',
    price: '$17.99 USD',
    oldPrice: '$27.99 USD',
    image: 'https://cdn.shopify.com/s/files/1/0638/0811/0834/files/NNPwx8Ku84__dsc01160_large.jpg?v=1736935883',
    reviews: '18 reviews',
  },
  {
    id: 19,
    title: 'Y2K Couple Frame Personalized 2-layer Wooden Plaque,  Gift for Him, Gift for Her',
    price: '$17.99 USD',
    oldPrice: '$27.99 USD',
    image:
      'https://cdn.shopify.com/s/files/1/0638/0811/0834/files/H9KtjLvo4y__24032946765_web-7_large.jpg?v=1734341984',
    reviews: '18 reviews',
  },
];

function Bodyheader() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 4; // Số lượng sản phẩm mỗi trang

  // Tính toán sản phẩm cần hiển thị cho trang hiện tại
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Xử lý chuyển trang
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col space-y-8">
        {/* header */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="pl-[150px] ">
            <Button className=" w-full sm:w-flex-row border border-black  ">Filters</Button>
          </div>

          <div className="flex flex-wrap gap-2 justify-center sm:justify-end  ">
            <Button className="hover:bg-red-600 text-white   rounded-[4px] bg-red-500 ">Featured</Button>
            <Button className="hover:bg-gray-400  rounded-[4px] bg-gray-300">New</Button>
            <Button className="hover:bg-gray-400  rounded-[4px] bg-gray-300">Price low to high</Button>
            <Button className="hover:bg-gray-400  rounded-[4px] bg-gray-300">Price hight to low</Button>
          </div>
        </div>

        {/* body */}

        <div className="  container mt-8 px-16 py-14  flex flex-col  mx-auto  ">
          <div className="relative  ">
            <Carousel className="w-full">
              <CarouselContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map((item) => (
                  <CarouselItem key={item.id}>
                    <Card>
                      <CardContent className="flex flex-col items-center p-4">
                        <img
                          src={item.image || '/placeholder.jpg'}
                          alt={item.title}
                          className="w-full h-48 object-cover rounded-md"
                        />

                        <h3 className="text-sm font-semibold mt-2 text-center line-clamp-2">{item.title}</h3>
                        <p className="text-[#6fbc8e] font-bold">
                          {item.price} <span className="line-through text-gray-500">{item.oldPrice}</span>
                        </p>
                        <p className="text-xs text-gray-600">⭐⭐⭐⭐⭐ {item.reviews}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      className="border border-[#f3f3f4] bg-[#f3f3f4] rounded-xl"
                      href="#"
                      onClick={() => paginate(currentPage - 1)}
                    />
                  </PaginationItem>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <PaginationItem className="border border-[#f3f3f4] bg-[#f3f3f4] rounded-[6px]" key={i}>
                      <PaginationLink
                        className="border-red-500"
                        href="#"
                        onClick={() => paginate(i + 1)}
                        isActive={currentPage === i + 1}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem></PaginationItem>
                  <PaginationItem>
                    <PaginationNext
                      className="border border-[#f3f3f4] bg-[#f3f3f4] rounded-xl"
                      href="#"
                      onClick={() => paginate(currentPage + 1)}
                      aria-disabled={currentPage === totalPages}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bodyheader;
