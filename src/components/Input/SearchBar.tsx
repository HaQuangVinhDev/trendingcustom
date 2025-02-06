import { useState } from 'react';
import { Input } from '../../../components/ui/input';
import { Command, CommandInput, CommandList, CommandItem } from '../../../components/ui/command';
import { Search } from 'lucide-react';

const products = [
  { id: 1, name: 'iPhone 15 Pro Max' },
  { id: 2, name: 'MacBook Air M2' },
  { id: 3, name: 'Apple Watch Series 9' },
  { id: 4, name: 'AirPods Pro 2' },
  { id: 5, name: 'iPad Pro M2' },
];

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setFilteredProducts(products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase())));
  };

  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative">
        <Input
          type="text"
          placeholder="Search for anything..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10  border-red-500 cursor-pointer"
        />
      </div>

      {/* Hiển thị danh sách kết quả */}
      {searchQuery && (
        <Command className="absolute left-0 right-0 bg-white border rounded-lg shadow-lg mt-1 z-10">
          <CommandList>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <CommandItem key={product.id} onSelect={() => setSearchQuery(product.name)}>
                  {product.name}
                </CommandItem>
              ))
            ) : (
              <CommandItem disabled> No results found. </CommandItem>
            )}
          </CommandList>
        </Command>
      )}
    </div>
  );
}
