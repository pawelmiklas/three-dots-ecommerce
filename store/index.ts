import { Brand, brands } from 'mock/brands';
import { Collection, collections } from 'mock/collections';
import { ProductProperty, productProperties } from 'mock/productProperties';
import { Product, products } from 'mock/products';
import create from 'zustand';

interface State {
  products: Product[];
  collections: Collection[];
  productProperties: ProductProperty[];
  brands: Brand[];
  removeProduct: (key: string) => void;
  addProduct: (product: Product) => void;
  editProduct: (product: Product) => void;
}

const useStore = create<State>(set => ({
  products: products,
  collections: collections,
  productProperties: productProperties,
  brands: brands,
  removeProduct: key =>
    set(state => ({
      products: state.products.filter(item => item.key !== key),
    })),
  addProduct: product =>
    set(state => ({
      products: [...state.products, product],
    })),
  editProduct: product =>
    set(state => ({
      products: state.products.map(item => {
        if (item.key === product.key) {
          return product;
        }

        return item;
      }),
    })),
}));

export { useStore };
