import { FC, useState } from 'react';

const PaymentSection: FC = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col gap-4 w-64">
      <div className="flex items-center gap-2">
        <button
          className="w-8 h-8 bg-gray-200 rounded-xl flex justify-center items-center"
          onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
        >
          -
        </button>
        <span className="text-xl">{quantity}</span>
        <button
          className="w-8 h-8 bg-gray-200 rounded-xl flex justify-center items-center"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>
      <button className="bg-green-500 text-white py-2 rounded-md text-center">Add to Cart</button>
      <div className="flex w-full justify-center">
        <img src="../../../public/asset/images/Bank/Bank.webp" alt="" />
      </div>
    </div>
  );
};

export default PaymentSection;
