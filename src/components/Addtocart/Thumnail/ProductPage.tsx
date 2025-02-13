import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import PaymentSection from './PaymentSection';
import Imagethumbnail from '../../../asset/images/thumbnail';
// import Test from './Test';
const thumbnails = [Imagethumbnail.product1, Imagethumbnail.product2, Imagethumbnail.product3, Imagethumbnail.product4];

const ProductPage = () => {
  return (
    <div className="flex flex-col lg:flex-row p-4 lg:p-6 gap-6 lg:gap-12">
      {/* Giữ ProductImage cố định khi cuộn */}
      <div className="lg:w-1/2">
        <ProductImage mainImage={Imagethumbnail.product6} thumbnails={thumbnails} />
      </div>
      <div className="flex flex-col justify-between w-full lg:w-1/2">
        <ProductInfo />
        <PaymentSection />
        {/* <Test /> */}
      </div>
    </div>
  );
};

export default ProductPage;
