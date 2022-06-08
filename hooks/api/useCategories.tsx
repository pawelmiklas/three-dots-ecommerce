import useSWR from 'swr';

const useCategories = () => useSWR<{ id: number; name: string }[]>(['http://localhost:8080/api/categories']);

export { useCategories };
