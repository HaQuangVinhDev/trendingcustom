import ProductCard from '../Addtocart/Consider/ProductCard';
import Features from '../Addtocart/Consider/Features';
import image from '../../../public/asset/images/consider';
import Thumbnail from '../Addtocart/Thumnail/index';
import Testform from './Testform';
const products = [
  {
    image: image.product1,
    name: 'Y2K Couple Airbrushed Personalized Shirt',
    price: 24.99,
    oldPrice: 28.99,
    discount: 13,
    rating: 1,
    reviews: 95,
  },
  {
    image: image.product2,
    name: 'Y2K Couple Personalized Acrylic Keychain',
    price: 17.99,
    oldPrice: 27.99,
    discount: 35,
    rating: 5,
    reviews: 697,
  },
  {
    image: image.product3,
    name: 'Y2K Couple Airbrushed Personalized Shirt',
    price: 24.99,
    oldPrice: 28.99,
    discount: 13,
    rating: 1,
    reviews: 95,
  },
  {
    image: image.product4,
    name: 'Y2K Couple Personalized Acrylic Keychain',
    price: 17.99,
    oldPrice: 27.99,
    discount: 35,
    rating: 5,
    reviews: 697,
  },
  {
    image: image.product5,
    name: 'Y2K Couple Airbrushed Personalized Shirt',
    price: 24.99,
    oldPrice: 28.99,
    discount: 13,
    rating: 1,
    reviews: 95,
  },
  {
    image: image.product6,
    name: 'Y2K Couple Personalized Acrylic Keychain',
    price: 17.99,
    oldPrice: 27.99,
    discount: 35,
    rating: 5,
    reviews: 697,
  },
];
function Body() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Thumbnail />
      <h1 className="text-2xl font-bold text-center mb-6">More Items to Consider</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      <div className="mt-10">
        <Features />
      </div>
      <div className="mt-10"></div>
    </div>
  );
}

export default Body;
