import useSWR from 'swr';

interface ProductReview {
  id: number;
  content: string;
  rating: 1 | 2 | 3 | 4;
}

const useProductReviews = (productId: number) => useSWR<ProductReview[]>([`api/public/products/${productId}/reviews`]);

export { useProductReviews };
