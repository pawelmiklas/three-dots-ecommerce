import useSWR from 'swr';

const useCategories = () => useSWR<{ id: number; name: string }[]>(['api/categories']);

export { useCategories };
