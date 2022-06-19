import useSWR from 'swr';

const useSizes = () => useSWR<{ id: number; sizeLabel: string }[]>(['api/public/sizes/all']);

export { useSizes };
