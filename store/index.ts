import { Product, products } from 'mock/products'
import create from 'zustand'

interface State {
  products: Product[],
  removeProduct: (key: string) => void
}

const useStore = create<State>((set) => ({
  products: products,
  removeProduct: (key) => set((state) => ({
    products: state.products.filter((item) => item.key !== key)
  }))
}))

export { useStore }
