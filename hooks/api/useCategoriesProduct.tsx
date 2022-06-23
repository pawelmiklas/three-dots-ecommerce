import useSWR from 'swr';
import { Product } from './useProducts';

const useCategoriesProduct = (categoryId: number) => useSWR<Product[]>(['api/public/products', { categoryId }]);

export { useCategoriesProduct };
