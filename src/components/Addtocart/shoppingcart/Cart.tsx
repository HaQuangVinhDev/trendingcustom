import type { Product } from '../Types/type';

interface CartProps {
  items: Product[];
}

export default function Cart({ items }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="w-full md:w-1/3">
      <h2 className="text-2xl font-semibold mb-4">Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {items.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <span>{item.name}</span>
              <span>${item.price}</span>
            </div>
          ))}
          <div className="border-t pt-2 mt-2">
            <strong>Total: ${total}</strong>
          </div>
        </div>
      )}
    </div>
  );
}
