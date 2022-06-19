import useSWR from 'swr';

const useSizes = () => useSWR<{ id: number; sizeLabel: string }[]>(['api/sizes/all']);

export { useSizes };
