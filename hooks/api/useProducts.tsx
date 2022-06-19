import useSWR from 'swr';

export interface Product {
  productId: number;
  categoryId: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  discount: number;
  discountExpirationDate: string;
}

const useProducts = () => useSWR<Product[]>(['api/public/products/all']);

export { useProducts };
