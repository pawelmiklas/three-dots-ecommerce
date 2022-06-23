import useSWR from 'swr';

interface Stock {
  productId: number;
  data: {
    variantId: number;
    color: string;
    sizes: {
      stockId: number;
      size: string;
      amount: number;
    }[];
  }[];
}

const useProductStock = (productId: number) => useSWR<Stock>([`api/public/stocks/product/${productId}`]);

export { useProductStock };
