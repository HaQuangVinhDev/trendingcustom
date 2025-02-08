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
import { Menu, X } from 'lucide-react';
import { items } from './data/index';

function Bodyheader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Số lượng sản phẩm mỗi trang

  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Tính toán danh sách sản phẩm hiển thị
  const currentItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Chuyển trang hợp lệ
  const paginate = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="container mx-auto px-4">
      {/* Menu Mobile */}
      <div className="sm:hidden flex justify-end mb-4">
        <Button className="p-2 border rounded-md" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        {/* Nút lọc */}
        <Button className="border border-black px-4 py-2">Filters</Button>

        {/* Các nút chọn bộ lọc */}
        <div className={`flex flex-wrap gap-2 justify-center sm:justify-end ${isMenuOpen ? 'flex' : 'hidden'} sm:flex`}>
          <Button className="hover:bg-red-600 text-white bg-red-500">Featured</Button>
          <Button className="hover:bg-gray-400 bg-gray-300">New</Button>
          <Button className="hover:bg-gray-400 bg-gray-300">Price low to high</Button>
          <Button className="hover:bg-gray-400 bg-gray-300">Price high to low</Button>
        </div>
      </div>

      {/* Body */}
      <div className="container mt-8 px-16 py-14 mx-auto max-w-full">
        <Carousel className="w-full">
          <CarouselContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {currentItems.map((item) => (
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
                    <span className="text-yellow-400">{'★'.repeat(5)}</span>
                    <span className="ml-1 text-xs text-gray-500">({item.reviews})</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Pagination */}
        <Pagination className="mt-4 flex justify-center">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                className="border border-[#f3f3f4] bg-[#f3f3f4] rounded-xl"
                href="#"
                onClick={() => paginate(currentPage - 1)}
                aria-disabled={currentPage === 1}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  href="#"
                  className={`border rounded-[6px] px-3 py-1 ${
                    currentPage === i + 1 ? 'bg-red-500 text-white' : 'bg-gray-300'
                  }`}
                  onClick={() => paginate(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

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
      </div>
    </div>
  );
}

export default Bodyheader;
