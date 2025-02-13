export interface Product {
  id: number;
  name: string;
  material: string;
  size: string;
  price: number;
  originalPrice: number;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
  name: string;
  material: string;
  size: string;
  shippingProtection: boolean;
}
