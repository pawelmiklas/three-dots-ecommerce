import useSWR from 'swr';

const useSizes = () => useSWR<{ id: number; sizeLabel: string }[]>(['http://localhost:8080/api/sizes/all']);

export { useSizes };
