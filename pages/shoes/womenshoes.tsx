import React, { useState } from 'react';
import { useStore } from 'store';
import Layout from '@components/Layout/Layout';
import ProductShowcase from '@components/Products/ProductShowcase';
import classes from './WomenShoes.module.scss';
import { Product } from 'mock/products';
import Filter, { FilteringCriteria } from '@components/Products/Filters/Filter';

const Womenshoes = () => {
  //   const [filteredProducts, setFilteredProducts] = useState<Product[] | null>(null);
  const [filters, setFilters] = useState<FilteringCriteria>();
  const store = useStore();
  const products: Product[] = store.products.filter(item => item.sex === 'women');
  console.log(filters);
  //   useEffect(() => {
  //     const filtered = products.filter(item => {
  //       return item.price < filters?.price[0];
  //     });
  //     setFilteredProducts(filtered);
  //     console.log(filteredProducts);
  //   }, [filters]);

  return (
    <Layout>
      <div className={classes.container__main}>
        <div className={classes.container__filters}>
          <Filter items={products} setFilters={setFilters} />
        </div>
        <div className={classes.container__products}>
          {products &&
            products.map(item => {
              return <ProductShowcase item={item} currency={'EUR'} onsale={false} key={item.key} />;
            })}
        </div>
      </div>
    </Layout>
  );
};

export default Womenshoes;
