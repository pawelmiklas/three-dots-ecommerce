import React from 'react';
import Layout from '@components/Layout/Layout';
import { useStore } from 'store';
import { Product } from 'mock/products';
import ProductShowcase from '@components/Products/ProductShowcase';
import classes from './Sale.module.scss';
const Sale = () => {
  const store = useStore();
  const currency = 'EUR';
  const products: Product[] | null = store.products;
  return (
    <Layout>
      <div>Sales</div>
      <div className={classes.container}>
        {products &&
          products.map(item => {
            return (
              <div key={item.key} className={classes.element}>
                <ProductShowcase item={item} currency={currency} onsale={true} />
              </div>
            );
          })}
      </div>
    </Layout>
  );
};

export default Sale;
