import { FC, useState } from 'react';

interface ProductImageProps {
  mainImage: string;
  thumbnails: string[];
}

const ProductImage: FC<ProductImageProps> = ({ mainImage, thumbnails }) => {
  const [currentImage, setCurrentImage] = useState(mainImage);

  return (
    <div className="sticky top-0 w-full lg:w-1/2 max-h-screen flex flex-col items-center">
      <img
        src={currentImage}
        alt="Product"
        className="w-full max-w-md lg:max-w-lg h-auto object-cover rounded-md mb-4"
      />
      <div className="flex space-x-2 overflow-x-auto">
        {thumbnails.map((thumb, index) => (
          <img
            key={index}
            src={thumb}
            alt={`Thumbnail ${index + 1}`}
            className="w-16 h-16 lg:w-20 lg:h-20 object-cover cursor-pointer border rounded-md hover:border-blue-500"
            onClick={() => setCurrentImage(thumb)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
