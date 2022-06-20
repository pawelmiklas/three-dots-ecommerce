import useSWR from 'swr';
import { Product } from './useProducts';

const useProduct = (productId: number) => useSWR<Product>([`api/public/products/${productId}`]);

export { useProduct };
