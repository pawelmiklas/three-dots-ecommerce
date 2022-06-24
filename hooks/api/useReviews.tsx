import useSWR from 'swr';

const useReviews = (id: string) => useSWR([`api/public/products/${id}/reviews`]);

export { useReviews };
