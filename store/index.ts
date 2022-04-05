import { Collection, collections } from 'mock/collections'
import { ProductProperty, productProperties } from 'mock/productProperties'
import { Product, products } from 'mock/products'
import create from 'zustand'

interface State {
  products: Product[],
  collections: Collection[],
  productProperties: ProductProperty[],
  removeProduct: (key: string) => void,
  addProduct: (product: Product) => void
}

const useStore = create<State>((set) => ({
  products: products,
  collections: collections,
  productProperties: productProperties,
  removeProduct: (key) => set((state) => ({
    products: state.products.filter((item) => item.key !== key)
  })),
  addProduct: (product) => set((state) => ({
    products: [...state.products, product],
  })),
}))

export { useStore }
