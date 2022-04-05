import { products } from 'mock/products'
import create from 'zustand'

interface State {
  products: {
    key: string;
    name: string;
    price: number;
    discount: number;
    collections: string[];
    properties: string[];
  }[],
  removeProduct: (key: string) => void
}

const useStore = create<State>((set) => ({
  products: products,
  removeProduct: (key) => set((state) => ({
    products: state.products.filter((item) => item.key !== key)
  }))
}))

export { useStore }
