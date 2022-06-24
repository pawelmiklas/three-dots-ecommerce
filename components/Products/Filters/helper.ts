// import Item from 'antd/lib/list/Item';
import { Product, shoesColors } from 'mock/products';
import { State } from 'store';

export interface FilteringCriteria {
  price?: number[];
  color?: shoesColors[];
  size?: number[];
  brand?: string[];
  sex?: string[];
}

export const filtering = (store: State, products: Product[]) => {
  let sampleProducts: Product[] = [];
  console.log('filtering');
  console.log('filters', store.filters);
  console.log('products', products);
  for (const filter in store.filters) {
    if (store.filters.hasOwnProperty.call(store.filters, filter)) {
      switch (filter) {
        case 'price':
          const p = products.filter(item => item.price < store.filters[filter]![0]);
          p.length ? (sampleProducts = p) : (sampleProducts = products);
          break;
        case 'color':
          const prod2: Product[] = [];
          sampleProducts.forEach(p => {
            if (p.colors.sort().toString().includes(store.filters.color?.sort().toString()!)) prod2.push(p);
          });
          if (store.filters.color && store.filters.color.length > 0) sampleProducts = prod2;
          break;
        case 'size':
          const newProducts: Product[] = [];
          console.log('sample products', sampleProducts);
          sampleProducts.forEach((p, index) => {
            const availableSizes = p.sizes.filter(s => s.onstock > 0);
            let pass2: boolean = false;
            for (const p of availableSizes) {
              const pass = store.filters.size?.some(f => f === p.size);
              if (pass === false || pass === undefined) continue;
              pass2 = true;
            }
            if (pass2) newProducts.push(p);
          });
          if (store.filters.size && store.filters.size.length > 0) sampleProducts = newProducts;
          break;
        case 'brand':
          const prod3: Product[] = [];
          sampleProducts.forEach(item => {
            if (store.filters.brand?.toString().toLowerCase().includes(item.brand.toLowerCase())) prod3.push(item);
          });
          if (store.filters.brand && store.filters.brand.length > 0) sampleProducts = prod3;
          break;
        case 'sex':
          let prod4: Product[] = [];
          if (store.filters.sex) {
            prod4 = sampleProducts.filter(i => {
              return i.sex === store.filters.sex![0];
            });
          }
          if (store.filters.sex && store.filters.sex.length > 0) sampleProducts = [...prod4];
          break;
      }
    }
  }
  store.filterProduct(sampleProducts);
  // if(store.filters.hasOwnProperty === false) store.resetFilters();
  // const isFiltersEmpty: boolean = Object.values(store.filters).some(i => i.length > 0);
  // console.log('is filters empty', isFiltersEmpty);
  if (
    store.filters.brand?.length === 0 &&
    store.filters.color?.length === 0 &&
    store.filters.sex?.length === 0 &&
    store.filters.size?.length === 0 &&
    store.filters.price![0] === 500
  ) {
    store.setupColorFilter([]);
    store.setupBrandFilter([]);
    store.setupSexFilter([]);
    store.setupSizeFilter([]);
    store.filterProduct(products);
  }
};
