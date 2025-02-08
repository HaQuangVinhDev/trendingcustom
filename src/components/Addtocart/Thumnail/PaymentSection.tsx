import { FC, useState } from 'react';

const PaymentSection: FC = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col gap-4 w-64">
      <div className="flex items-center gap-2">
        <button
          className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center"
          onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
        >
          -
        </button>
        <span className="text-xl">{quantity}</span>
        <button
          className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>
      <button className="bg-green-500 text-white py-2 rounded-md text-center">Add to Cart</button>
      <div className="flex space-x-2 justify-center">
        <img src="/path/to/paypal-icon.png" alt="PayPal" className="w-10 h-10" />
        <img src="/path/to/visa-icon.png" alt="Visa" className="w-10 h-10" />
        <img src="/path/to/mastercard-icon.png" alt="Mastercard" className="w-10 h-10" />
      </div>
      <p className="text-center text-sm text-gray-500 mt-2">100% Secure Payment</p>
    </div>
  );
};

export default PaymentSection;
