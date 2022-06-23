import { FilteringCriteria } from '@components/Products/Filters/helper';
import { Brand, brands } from 'mock/brands';
import { Collection, collections } from 'mock/collections';
import { ProductProperty, productProperties } from 'mock/productProperties';
import { Product, products, shoesColors } from 'mock/products';
import create from 'zustand';

export interface ICart extends Product {
  quantity: number | undefined;
  variants: [
    {
      color: shoesColors | undefined;
      size: number | undefined;
    },
  ];
  id: string;
}

export interface State {
  products: Product[];
  filteredProducts: Product[];
  collections: Collection[];
  productProperties: ProductProperty[];
  brands: Brand[];
  filters: FilteringCriteria;
  cart: ICart[];
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
  addToCart: (product: ICart) => void;
  removeFromCart: (id: string) => void;
  incrQuantity: (id: string) => void;
  decrQuantity: (id: string) => void;
  removeProductProperty: (key: string) => void;
  addProductProperty: (product: ProductProperty) => void;
  editProductProperty: (product: ProductProperty) => void;
}

const useStore = create<State>(set => ({
  products: products,
  collections: collections,
  productProperties: productProperties,
  brands: brands,
  filteredProducts: [],
  filters: { price: [], brand: [], size: [], color: [] },
  cart: [],
  addToCart: (product: ICart) => set(state => ({ cart: [...state.cart, product] })),
  removeFromCart: (id: string) => set(state => ({ cart: state.cart.filter(item => item.id !== id) })),
  incrQuantity: (id: string) =>
    set(state => {
      const item = state.cart.find(item => item.id === id);
      if (item?.quantity) {
        item.quantity++;
        item.variants.push({ color: item.variants[0].color, size: item.variants[0].size });
        ({ cart: [...state.cart, item] });
      }
    }),
  decrQuantity: (id: string) =>
    set(state => {
      const item = state.cart.find(item => item.id === id);
      if (item?.quantity && item.quantity >= 2) {
        item.quantity--;
        item.variants.pop();
        ({ cart: [...state.cart, item] });
      }
    }),
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
  removeProductProperty: key =>
    set(state => ({
      productProperties: state.productProperties.filter(item => item.key !== key),
    })),
  addProductProperty: productProperty =>
    set(state => ({
      productProperties: [...state.productProperties, productProperty],
    })),
  editProductProperty: productProperty =>
    set(state => ({
      productProperties: state.productProperties.map(item => {
        if (item.key === productProperty.key) {
          return productProperty;
        }

        return item;
      }),
    })),
}));

export { useStore };
