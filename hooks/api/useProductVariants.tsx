import useSWR from 'swr';

interface ProductVariant {
  description: string;
  modelNumber: string;
  modelName: string;
  variants: {
    variantId: number;
    color: string;
  }[];
}

const useProductVariants = (productId: number) => useSWR<ProductVariant>([`api/public/products/${productId}/variants`]);

export { useProductVariants };
