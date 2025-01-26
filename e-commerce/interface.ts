export interface Product {
  imageUrl: string;
  rating: {
    count: number;
    rate: number;
  };
  tags: string[];
  price: number;
  discount: number;
  originalPrice: number;
  slug: string;
  categoryName: string;
  name: string;
  stock: number;
  dimensions: {
    depth: number;
    width: number;
    height: number;
  };
  id: number;
  description: string;
  Quantity: number;
  Finalprice: number;
}

