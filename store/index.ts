import { FilteringCriteria } from '@components/Products/Filters/helper';
import { Brand, brands } from 'mock/brands';
import { Collection, collections } from 'mock/collections';
import { ProductProperty, productProperties } from 'mock/productProperties';
import { Product, products, shoesColors } from 'mock/products';
import create from 'zustand';

export interface State {
  products: Product[];
  filteredProducts: Product[];
  collections: Collection[];
  productProperties: ProductProperty[];
  brands: Brand[];
  filters: FilteringCriteria;
  removeProduct: (key: string) => void;
  addProduct: (product: Product) => void;
  editProduct: (product: Product) => void;
  filterProduct: (products: Product[]) => void;
  setupFilters: (filters: FilteringCriteria) => void;
  setupColorFilter: (arg: shoesColors[]) => void;
  setupPriceFilter: (arg: number[]) => void;
  setupSizeFilter: (arg: number[]) => void;
  setupBrandFilter: (arg: string[]) => void;
  resetFilters: () => void;
}

const useStore = create<State>(set => ({
  products: products,
  collections: collections,
  productProperties: productProperties,
  brands: brands,
  filteredProducts: [],
  filters: { price: [], brand: [], size: [], color: [] },
  filterProduct: arg =>
    set(state => ({
      filteredProducts: (state.filteredProducts = arg),
    })),
  removeProduct: key =>
    set(state => ({
      products: state.products.filter(item => item.key !== key),
    })),
  addProduct: product =>
    set(state => ({
      products: [...state.products, product],
    })),
  setupFilters: filters => set(state => ({ filters: (state.filters = filters) })),
  setupColorFilter: arg =>
    set(state => {
      state.filters['color'] = arg;
    }),
  setupPriceFilter: arg =>
    set(state => {
      state.filters['price'] = arg;
    }),
  setupSizeFilter: arg =>
    set(state => {
      state.filters['size'] = arg;
    }),
  setupBrandFilter: arg =>
    set(state => {
      state.filters['brand'] = arg;
    }),
  resetFilters: () =>
    set(state => {
      filters: state.filters = { price: [], brand: [], size: [], color: [] };
    }),
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
