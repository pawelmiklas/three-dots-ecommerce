import useSWR from 'swr';

const useCategories = () => useSWR<{ id: number; name: string }[]>(['api/public/categories']);

export { useCategories };
